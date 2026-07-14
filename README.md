# PMP Quiz

Application multilingue (français, anglais) de préparation à la certification **PMP®**, inspirée du **PMBOK® (7e/8e édition)** et du plan de contenu de l'examen (ECO).

Architecture **client / serveur** : un front **React (SPA/PWA)** et une **API PHP + MySQL** (voir [`backend/`](backend/README.md)). Comptes utilisateurs avec **JWT**, l'API fait autorité sur toutes les données.

## Fonctionnalités

- **Comptes utilisateurs** : inscription / connexion (JWT). Chaque utilisateur a sa progression, servie par l'API.
- **Quiz par niveau** : Facile (10–15), Intermédiaire (50), Expert (120, chronométré), plus un **examen blanc** de 180 questions chronométré avec la répartition officielle des domaines. Options mélangées à chaque affichage.
- **Simulation d'examen** (modes Expert / Examen) : navigation libre, marquage de questions, grille de révision, indicateur de rythme, correction complète en fin d'épreuve.
- **Révision ciblée à répétition espacée** : les questions ratées reviennent selon un algorithme SM-2 ; vue des **zones faibles par tâche ECO** avec entraînement dédié.
- **Révision des concepts** : principes, domaines de performance et notions d'examen, avec détails et exemples pratiques dépliables.
- **Glossaire** : termes et formules clés en cartes retournables (flashcards) ou liste recherchable.
- **Statistiques** : historique, score moyen / meilleur / dernier, performance par domaine.
- **Multilingue** : bascule instantanée FR/EN partout ; préférence mémorisée localement.

## Stack

- **Front** : React 19 + TypeScript + Vite, `react-router-dom`, `vite-plugin-pwa`. CSS pur avec variables (aucune dépendance UI).
- **Back** : PHP 8.3 sans framework, MySQL 8, JWT (HS256), DDEV. Détails dans [`backend/README.md`](backend/README.md).

## Démarrage

### 1. Backend (API + base)

```bash
node scripts/gen-seed.mjs                 # génère backend/db/seed/*.json depuis les sources TS
cd backend && ddev start && ddev exec php db/migrate.php
# → API sur https://pmpquiz-api.ddev.site
```

### 2. Front

```bash
cp .env.example .env        # ajuste VITE_API_URL si besoin (défaut = URL DDEV)
npm install
npm run dev                 # http://localhost:5183
npm run build               # build de production dans dist/
npm run preview             # tester le build
```

> Le front interroge l'API définie par **`VITE_API_URL`** (défaut : `https://pmpquiz-api.ddev.site`).
> L'API doit tourner pour se connecter et charger les données.

## Architecture (front)

```
src/
  main.tsx            # bootstrap : SW, providers (i18n, auth), router
  App.tsx             # garde d'authentification, layout, navigation
  api.ts              # client HTTP de l'API (fetch + JWT bearer + erreurs typées)
  auth.tsx            # AuthProvider / useAuth (session, login, register, logout)
  content.ts          # loaders mémoïsés du contenu public (concepts, glossaire, tâches ECO)
  types.ts            # modèles (Question, Concept, Attempt, MissedEntry…)
  i18n/               # contexte de langue + traductions UI (fr/en)
  modeMeta.ts         # métadonnées des modes de quiz (durées, libellés)
  pages/              # Auth, Home, Quiz, Concepts, ConceptDetail, Missed, Glossary, Stats
  data/               # SOURCES du contenu (TS) — servent uniquement à générer le seed de l'API,
                      # ne sont plus embarquées dans le bundle client
```

### Modifier le contenu (questions, concepts, glossaire)

Le contenu vit dans `src/data/*.ts` (source de vérité). Après modification :

```bash
node scripts/gen-seed.mjs                     # régénère backend/db/seed/*.json
cd backend && ddev exec php db/migrate.php     # recharge le contenu en base
```

### Ajouter une langue

1. Ajouter le code dans `type Lang` (`src/types.ts`) et dans `LANGS` (`src/i18n/translations.ts`).
2. Fournir le dictionnaire UI dans `src/i18n/translations.ts` et les variantes de contenu dans `src/data/*.ts`.
3. Étendre le schéma / seed côté backend si de nouvelles colonnes de langue sont nécessaires.

---

PMP® et PMBOK® sont des marques déposées du Project Management Institute, Inc. Ce projet est un outil d'étude indépendant, non affilié au PMI.
