# PMP Quiz — API backend (PHP sans framework · MySQL · JWT · DDEV)

API REST JSON pour l'application PMP Quiz. PHP 8.3 sans framework, MySQL 8,
authentification JWT (HS256), le tout conteneurisé avec **DDEV**.

> Étape 1 de la migration : **backend + infra uniquement**. Le front React
> sera recâblé sur cette API dans une seconde étape. Tout est testable au curl.

## Prérequis

- [DDEV](https://ddev.readthedocs.io/) + Docker
- Node (uniquement pour (re)générer les données de seed depuis les sources TS)

## Démarrage

```bash
# 1. Générer les fichiers de seed JSON depuis les données TypeScript (depuis la racine du repo)
node scripts/gen-seed.mjs        # écrit backend/db/seed/*.json

# 2. Démarrer les conteneurs (depuis backend/)
cd backend
ddev start

# 3. Créer le schéma + charger le contenu (questions dédupliquées, concepts avec pièges d'examen, glossaire, tâches ECO)
ddev exec php db/migrate.php

# 4. URL de l'API
ddev describe        # → https://pmpquiz-api.ddev.site
```

Le `migrate.php` est **ré-exécutable** : il ne recrée pas les tables existantes
et ne recharge que le contenu (les comptes et la progression utilisateur sont
préservés).

## Configuration

Variables d'environnement (définies dans `.ddev/config.yaml`, surchargées en prod) :

| Variable            | Défaut (DDEV)                     | Rôle                                   |
| ------------------- | --------------------------------- | -------------------------------------- |
| `DB_HOST`           | `db`                              | hôte MySQL                             |
| `DB_NAME/USER/PASS` | `db`                              | base / utilisateur / mot de passe      |
| `JWT_SECRET`        | *(dev)* — **à changer en prod**   | clé de signature HS256                 |
| `JWT_TTL`           | `604800` (7 j)                    | durée de vie du token (secondes)       |
| `CORS_ALLOW_ORIGIN` | `*`                               | origine autorisée (ex. l'app Vite)     |

## Endpoints

Base : `https://pmpquiz-api.ddev.site`

### Auth
| Méthode | Route                | Corps                       | Réponse                     |
| ------- | -------------------- | --------------------------- | --------------------------- |
| POST    | `/api/auth/register` | `{email, password}`         | `{token, user}` (201)       |
| POST    | `/api/auth/login`    | `{email, password}`         | `{token, user}`             |
| GET     | `/api/auth/me`       | *(Bearer)*                  | `{user}`                    |

### Contenu (public)
| Méthode | Route               | Notes                                                             |
| ------- | ------------------- | ---------------------------------------------------------------- |
| GET     | `/api/questions`    | `?mode=easy\|medium\|expert\|exam`, `?task=<id>`, `?difficulty=`, `?limit=` |
| GET     | `/api/concepts`     | fiches de révision                                               |
| GET     | `/api/glossary`     | termes & formules                                                |
| GET     | `/api/eco-tasks`    | 35 tâches de l'ECO                                               |

### Données utilisateur *(Bearer requis)*
| Méthode | Route              | Corps / Notes                                            |
| ------- | ------------------ | ------------------------------------------------------- |
| GET     | `/api/attempts`    | historique des quiz                                     |
| POST    | `/api/attempts`    | `{mode,total,correct,domains,durationSec,date?}`        |
| DELETE  | `/api/attempts`    | efface l'historique                                     |
| POST    | `/api/answers`     | `{questionId, correct}` → met à jour SR + stats tâche   |
| GET     | `/api/review/due`  | questions à réviser maintenant (répétition espacée)     |
| GET     | `/api/review/all`  | toutes les questions ratées suivies                     |
| GET     | `/api/task-stats`  | précision cumulée par tâche ECO                         |

## Tests rapides (curl)

```bash
API=https://pmpquiz-api.ddev.site

# santé
curl -s $API/api/health

# contenu public
curl -s "$API/api/questions?mode=easy" | head -c 300
curl -s $API/api/eco-tasks | head -c 300

# inscription → récupère le token
TOKEN=$(curl -s -X POST $API/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","password":"password123"}' | php -r 'echo json_decode(stream_get_contents(STDIN),true)["token"];')

# route protégée
curl -s $API/api/auth/me -H "Authorization: Bearer $TOKEN"

# enregistrer une réponse ratée puis lister les révisions dues
curl -s -X POST $API/api/answers -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' -d '{"questionId":"p01","correct":false}'
curl -s $API/api/review/all -H "Authorization: Bearer $TOKEN" | head -c 300
```

## Régénérer le seed

Le contenu vit encore dans les sources TypeScript (`src/data/*.ts`). Après toute
modification du contenu, régénérez les JSON puis rechargez :

```bash
node scripts/gen-seed.mjs
cd backend && ddev exec php db/migrate.php
```

## Architecture

```
backend/
  .ddev/config.yaml         # conteneurs (php 8.3, mysql 8.0), env (JWT_SECRET…)
  public/index.php          # front controller : CORS, routes, dispatch
  src/
    bootstrap.php           # autoloader PSR-4 (App\ → src/)
    Config.php              # env → config (DB, JWT, CORS)
    Database.php            # PDO singleton
    Jwt.php                 # JWT HS256 (encode/decode), sans dépendance
    Auth.php                # émission de token + middleware Bearer
    Request.php / Response.php
    Router.php              # routeur à placeholders {param}
    Questions.php           # hydratation questions + options
    Controllers/
      AuthController.php     # register / login / me (bcrypt + JWT)
      ContentController.php  # questions (par mode/tâche/difficulté), concepts, glossaire, eco-tasks
      QuizController.php     # tentatives, /answers (SR SM-2 + stats), review, task-stats
  db/
    schema.sql              # tables (utf8mb4, InnoDB, FK)
    migrate.php             # applique le schéma + seed depuis db/seed/
    seed/*.json             # contenu généré depuis les sources TS
```
