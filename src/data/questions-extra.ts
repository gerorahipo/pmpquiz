import type { Question } from '../types'

/**
 * Extension batch: questions covering topics absent from the original bank
 * (EEF/OPA, PMO types, QA vs QC, decision trees, MoSCoW, RTM, iterative vs
 * incremental, BATNA, motivation theories, leading/lagging indicators…).
 * ECO task tags are inline (not in questionEcoTags.ts).
 */
export const EXTRA_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xe01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-09',
    question: {
      fr: "Parmi les éléments suivants, lequel est un facteur environnemental de l'entreprise (EEF) et non un actif organisationnel (OPA) ?",
      en: 'Which of the following is an Enterprise Environmental Factor (EEF) rather than an Organizational Process Asset (OPA)?',
    },
    options: [
      { fr: 'Les conditions du marché et la réglementation en vigueur', en: 'Market conditions and applicable regulations' },
      { fr: 'Le registre des leçons apprises des projets antérieurs', en: 'The lessons learned register from past projects' },
      { fr: 'Les modèles de plans de projet de l’organisation', en: 'The organization’s project plan templates' },
      { fr: 'La procédure interne de contrôle des changements', en: 'The internal change control procedure' },
    ],
    correct: 0,
    explanation: {
      fr: "Les EEF s'imposent au projet (marché, réglementation, culture, outils imposés) : on ne les choisit pas. Les OPA sont les actifs réutilisables de l'organisation (modèles, procédures, leçons apprises) : on peut les adapter.",
      en: 'EEFs are imposed on the project (market, regulation, culture, mandated tools): you do not choose them. OPAs are the organization’s reusable assets (templates, procedures, lessons learned): you can tailor them.',
    },
  },
  {
    id: 'xe02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Dans quelle configuration un PMO gère-t-il directement les projets et fournit-il les chefs de projet ?",
      en: 'In which configuration does a PMO directly manage projects and supply the project managers?',
    },
    options: [
      { fr: 'Un PMO directif', en: 'A directive PMO' },
      { fr: 'Un PMO de soutien', en: 'A supportive PMO' },
      { fr: 'Un PMO de contrôle', en: 'A controlling PMO' },
      { fr: 'Un comité de pilotage', en: 'A steering committee' },
    ],
    correct: 0,
    explanation: {
      fr: 'Trois degrés de contrôle du PMO : de soutien (conseils, modèles — contrôle faible), de contrôle (conformité exigée aux cadres — contrôle moyen), directif (gère les projets lui-même — contrôle fort).',
      en: 'Three degrees of PMO control: supportive (advice, templates — low control), controlling (compliance with frameworks required — moderate), directive (manages the projects itself — high control).',
    },
  },
  {
    id: 'xe03',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-02',
    question: {
      fr: "Quelles formes de pouvoir d'un chef de projet sont considérées comme les plus efficaces et durables ?",
      en: 'Which forms of a project manager’s power are considered the most effective and durable?',
    },
    options: [
      { fr: 'Le pouvoir d’expertise et le pouvoir de référence (charisme, respect)', en: 'Expert power and referent power (charisma, respect)' },
      { fr: 'Le pouvoir de récompense et le pouvoir de sanction', en: 'Reward power and penalty power' },
      { fr: 'Le pouvoir formel lié au poste', en: 'Formal positional power' },
      { fr: 'Le pouvoir de sanction uniquement', en: 'Penalty power alone' },
    ],
    correct: 0,
    explanation: {
      fr: "Le pouvoir d'expertise (compétence reconnue) et de référence (confiance, exemple) créent une influence durable, indépendante de la hiérarchie. Récompense/sanction et pouvoir formel fonctionnent à court terme mais n'engagent pas.",
      en: 'Expert power (recognized competence) and referent power (trust, example) create durable influence independent of hierarchy. Reward/penalty and positional power work short-term but do not build engagement.',
    },
  },
  {
    id: 'xe04',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Deux projets candidats : A (VAN = 250 k€ sur 3 ans) et B (VAN = 180 k€ sur 2 ans). Sur le seul critère de la VAN, lequel choisir ?",
      en: 'Two candidate projects: A (NPV = $250K over 3 years) and B (NPV = $180K over 2 years). On the NPV criterion alone, which one should be selected?',
    },
    options: [
      { fr: 'A : la VAN la plus élevée, la durée est déjà intégrée dans le calcul', en: 'A: the higher NPV — duration is already factored into the calculation' },
      { fr: 'B : plus court, donc moins risqué', en: 'B: shorter, therefore less risky' },
      { fr: 'B : il faut diviser la VAN par la durée', en: 'B: NPV must be divided by duration' },
      { fr: 'Impossible à dire sans le taux interne de rentabilité', en: 'Impossible to say without the IRR' },
    ],
    correct: 0,
    explanation: {
      fr: "La VAN actualise déjà les flux dans le temps : la durée est intégrée. À critère VAN, on choisit simplement la plus élevée. (Le risque ou la liquidité sont d'autres critères, mais la question limite au critère VAN.)",
      en: 'NPV already discounts cash flows over time: duration is built in. On the NPV criterion, simply pick the higher one. (Risk or liquidity are other criteria, but the question restricts to NPV.)',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xm01',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-07',
    question: {
      fr: "Un auditeur interne examine si l'équipe applique bien le processus de revue défini, tandis qu'un testeur mesure les livrables par rapport aux critères. Comment qualifier ces deux activités ?",
      en: 'An internal auditor checks whether the team properly follows the defined review process, while a tester measures deliverables against criteria. How are these two activities classified?',
    },
    options: [
      {
        fr: "L'audit = assurance qualité (processus) ; le test des livrables = contrôle qualité (produits)",
        en: 'The audit = quality assurance (process); testing deliverables = quality control (product)',
      },
      { fr: 'Les deux relèvent du contrôle qualité', en: 'Both are quality control' },
      { fr: 'Les deux relèvent de l’assurance qualité', en: 'Both are quality assurance' },
      { fr: "L'audit = contrôle qualité ; le test = assurance qualité", en: 'The audit = quality control; testing = quality assurance' },
    ],
    correct: 0,
    explanation: {
      fr: "Repère fiable : l'assurance qualité regarde les PROCESSUS (audits, amélioration — « fait-on les choses correctement ? ») ; le contrôle qualité regarde les PRODUITS (inspections, tests — « le résultat est-il conforme ? »).",
      en: 'Reliable anchor: quality assurance looks at PROCESSES (audits, improvement — “are we doing things right?”); quality control looks at PRODUCTS (inspections, testing — “is the result conformant?”).',
    },
  },
  {
    id: 'xm02',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-02',
    question: {
      fr: "Un incident critique vient d'être détecté et trois décideurs clés doivent aligner une décision dans l'heure. Quelle méthode de communication choisir ?",
      en: 'A critical incident has just been detected and three key decision-makers must align on a decision within the hour. Which communication method should be used?',
    },
    options: [
      { fr: 'Interactive : une réunion ou un appel immédiat avec les trois décideurs', en: 'Interactive: an immediate meeting or call with the three decision-makers' },
      { fr: 'Push : un courriel détaillé à chacun', en: 'Push: a detailed email to each of them' },
      { fr: 'Pull : publier l’analyse sur l’intranet du projet', en: 'Pull: publish the analysis on the project intranet' },
      { fr: 'Push : une note dans le rapport hebdomadaire', en: 'Push: a note in the weekly report' },
    ],
    correct: 0,
    explanation: {
      fr: "Urgence + besoin d'alignement + petit groupe = communication interactive (échange en temps réel, questions/réponses). Push convient pour informer sans urgence ; pull pour l'information de référence consultable.",
      en: 'Urgency + need for alignment + small group = interactive communication (real-time exchange, Q&A). Push suits non-urgent notification; pull suits reference information consulted on demand.',
    },
  },
  {
    id: 'xm03',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-03',
    question: {
      fr: "Votre entreprise n'a pas la capacité de répondre seule à un appel d'offres très rentable. Elle s'associe à un concurrent complémentaire pour le gagner ensemble. Quelle stratégie de réponse à une opportunité est appliquée ?",
      en: 'Your company cannot respond alone to a highly profitable tender. It teams up with a complementary competitor to win it together. Which opportunity response strategy is being applied?',
    },
    options: [
      { fr: 'Partager (share)', en: 'Share' },
      { fr: 'Exploiter (exploit)', en: 'Exploit' },
      { fr: 'Améliorer (enhance)', en: 'Enhance' },
      { fr: 'Accepter (accept)', en: 'Accept' },
    ],
    correct: 0,
    explanation: {
      fr: "Partager = allouer une partie de l'opportunité à un tiers mieux placé pour la capturer (coentreprise, partenariat). Exploiter = s'assurer qu'elle se réalise ; améliorer = augmenter sa probabilité/son impact.",
      en: 'Share = allocate part of the opportunity to a third party better positioned to capture it (joint venture, partnership). Exploit = ensure it happens; enhance = increase its probability/impact.',
    },
  },
  {
    id: 'xm04',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-06',
    question: {
      fr: "Une activité a une marge totale de 5 jours et une marge libre de 0 jour. Si elle glisse de 3 jours, que se passe-t-il ?",
      en: 'An activity has 5 days of total float and 0 days of free float. If it slips by 3 days, what happens?',
    },
    options: [
      {
        fr: 'La fin du projet est préservée, mais le démarrage au plus tôt de son successeur est retardé',
        en: 'The project finish is preserved, but its successor’s early start is delayed',
      },
      { fr: 'La fin du projet glisse de 3 jours', en: 'The project finish slips by 3 days' },
      { fr: 'Rien : les marges absorbent tout sans effet', en: 'Nothing: the floats absorb everything with no effect' },
      { fr: 'Le chemin critique est automatiquement recalculé sans impact', en: 'The critical path is automatically recomputed with no impact' },
    ],
    correct: 0,
    explanation: {
      fr: 'Marge totale = tolérance avant d’impacter la FIN DU PROJET (3 ≤ 5 : fin préservée). Marge libre = tolérance avant d’impacter le SUCCESSEUR immédiat (0 : tout glissement décale son démarrage au plus tôt).',
      en: 'Total float = tolerance before impacting the PROJECT FINISH (3 ≤ 5: finish preserved). Free float = tolerance before impacting the immediate SUCCESSOR (0: any slip shifts its early start).',
    },
  },
  {
    id: 'xm05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-13',
    question: {
      fr: "Une équipe livre son produit sous forme de modules complets et utilisables, ajoutés les uns aux autres au fil des livraisons, sans retravailler les modules déjà livrés. Quel type de cycle de vie décrit-on ?",
      en: 'A team delivers its product as complete, usable modules added one after another across releases, without reworking the modules already delivered. Which life cycle type is described?',
    },
    options: [
      { fr: 'Incrémental : des morceaux utilisables qui s’additionnent', en: 'Incremental: usable pieces that add up' },
      { fr: 'Itératif : le même livrable raffiné par cycles successifs', en: 'Iterative: the same deliverable refined through successive cycles' },
      { fr: 'Prédictif : tout est livré en une fois à la fin', en: 'Predictive: everything delivered once at the end' },
      { fr: 'Agile : forcément itératif ET incrémental', en: 'Agile: necessarily iterative AND incremental' },
    ],
    correct: 0,
    explanation: {
      fr: "Incrémental = on AJOUTE des morceaux finis (valeur livrée progressivement). Itératif = on RAFFINE le même résultat par boucles (prototype de plus en plus juste). L'agile combine les deux, mais le scénario décrit l'incrémental pur.",
      en: 'Incremental = you ADD finished pieces (value delivered progressively). Iterative = you REFINE the same result through loops (an increasingly accurate prototype). Agile combines both, but the scenario describes pure incremental.',
    },
  },
  {
    id: 'xm06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Le périmètre est priorisé en MoSCoW. À mi-parcours, la capacité restante ne couvre plus tout. Que fait l'équipe en premier ?",
      en: 'Scope is prioritized with MoSCoW. Midway, remaining capacity no longer covers everything. What does the team do first?',
    },
    options: [
      {
        fr: 'Sacrifier les « Could have », protéger intégralement les « Must have »',
        en: 'Sacrifice the “Could haves”, fully protect the “Must haves”',
      },
      { fr: 'Réduire proportionnellement toutes les catégories', en: 'Cut all categories proportionally' },
      { fr: 'Demander un délai supplémentaire avant tout arbitrage', en: 'Request a schedule extension before any trade-off' },
      { fr: 'Retirer quelques « Must have » les plus coûteux', en: 'Drop a few of the most expensive “Must haves”' },
    ],
    correct: 0,
    explanation: {
      fr: 'MoSCoW sert exactement à cela : Must = non négociable (le produit est inutilisable sans), Should = important mais contournable, Could = souhaitable, premier sacrifié, Won’t = exclu d’emblée. On coupe du bas vers le haut.',
      en: 'That is exactly what MoSCoW is for: Must = non-negotiable (product unusable without), Should = important but workaround exists, Could = desirable and first to go, Won’t = excluded upfront. You cut bottom-up.',
    },
  },
  {
    id: 'xm07',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "En recette, le client signale qu'une exigence signée n'apparaît dans aucun livrable, et l'équipe découvre du travail réalisé qui ne correspond à aucune exigence. Quel outil aurait permis de détecter ces deux anomalies en continu ?",
      en: 'During acceptance, the customer reports that a signed requirement appears in no deliverable, and the team finds completed work matching no requirement. Which tool would have detected both anomalies continuously?',
    },
    options: [
      { fr: 'La matrice de traçabilité des exigences', en: 'The requirements traceability matrix' },
      { fr: 'Le registre des hypothèses', en: 'The assumption log' },
      { fr: 'Le diagramme de Gantt', en: 'The Gantt chart' },
      { fr: 'La matrice probabilité-impact', en: 'The probability-impact matrix' },
    ],
    correct: 0,
    explanation: {
      fr: "La matrice de traçabilité relie chaque exigence à son origine, aux livrables et aux tests. Une exigence sans livrable (oubli) ou un livrable sans exigence (travail orphelin / dérive) s'y voient immédiatement.",
      en: 'The traceability matrix links every requirement to its origin, deliverables and tests. A requirement with no deliverable (omission) or a deliverable with no requirement (orphan work / creep) shows up immediately.',
    },
  },
  {
    id: 'xm08',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-04',
    question: {
      fr: "En plein sprint, l'équipe est bloquée par une ambiguïté fonctionnelle et le Product Owner est injoignable depuis deux jours. Que faire en PREMIER ?",
      en: 'Mid-sprint, the team is blocked by a functional ambiguity and the Product Owner has been unreachable for two days. What should be done FIRST?',
    },
    options: [
      {
        fr: "Activer le mécanisme convenu dans les accords d'équipe (délégué du PO, canal d'escalade) et traiter la cause de son indisponibilité",
        en: 'Activate the mechanism agreed in the team’s working agreements (PO delegate, escalation channel) and address the cause of the unavailability',
      },
      { fr: "Laisser l'équipe trancher l'ambiguïté elle-même et continuer", en: 'Let the team resolve the ambiguity itself and keep going' },
      { fr: 'Suspendre le sprint en attendant le retour du PO', en: 'Pause the sprint until the PO returns' },
      { fr: 'Escalader immédiatement au sponsor', en: 'Escalate immediately to the sponsor' },
    ],
    correct: 0,
    explanation: {
      fr: "Un PO durablement indisponible est un dysfonctionnement à traiter, pas à contourner en silence : appliquer le mécanisme de délégation convenu, et si l'indisponibilité persiste, la remonter comme obstacle structurel. Deviner l'intention du PO crée du travail à refaire.",
      en: 'A durably unavailable PO is a dysfunction to address, not to silently work around: apply the agreed delegation mechanism, and if unavailability persists, raise it as a structural impediment. Guessing the PO’s intent creates rework.',
    },
  },
  {
    id: 'xm09',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-13',
    question: {
      fr: "Un directeur félicite publiquement l'équipe B parce que sa vélocité (55 pts) dépasse celle de l'équipe A (34 pts) et demande à A « de rattraper son retard ». Que faites-vous ?",
      en: 'A director publicly congratulates team B because its velocity (55 pts) exceeds team A’s (34 pts) and asks A to “catch up”. What do you do?',
    },
    options: [
      {
        fr: 'Expliquer au directeur que les points sont une échelle propre à chaque équipe, et proposer des mesures de résultat comparables (valeur livrée, délai)',
        en: 'Explain to the director that points are a team-specific scale, and propose comparable outcome measures (value delivered, lead time)',
      },
      { fr: "Demander à l'équipe A d'augmenter ses estimations", en: 'Ask team A to raise its estimates' },
      { fr: 'Mettre en place un référentiel de points commun aux deux équipes', en: 'Set up a shared point scale across both teams' },
      { fr: 'Ne rien dire pour ne pas contredire le directeur', en: 'Say nothing to avoid contradicting the director' },
    ],
    correct: 0,
    explanation: {
      fr: "La vélocité est relative à l'étalonnage de CHAQUE équipe : la comparer entre équipes pousse à l'inflation des estimations (loi de Goodhart). Le mentorat de la partie prenante + des métriques de résultat (outcome) est la réponse attendue.",
      en: 'Velocity is relative to EACH team’s calibration: comparing it across teams drives estimate inflation (Goodhart’s law). Mentoring the stakeholder + outcome metrics is the expected answer.',
    },
  },
  {
    id: 'xm10',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Trois semaines avant la mise en service, une nouvelle exigence de protection des données devient applicable à votre produit. S'y conformer décale le lancement d'un mois. Le marketing refuse tout report. Que faites-vous ?",
      en: 'Three weeks before go-live, a new data-protection requirement becomes applicable to your product. Complying delays launch by a month. Marketing refuses any postponement. What do you do?',
    },
    options: [
      {
        fr: "Évaluer l'impact, passer par la maîtrise des changements et faire arbitrer en gouvernance — un lancement non conforme n'est pas une option",
        en: 'Assess the impact, go through change control and have governance arbitrate — a non-compliant launch is not an option',
      },
      { fr: 'Lancer à la date prévue et se mettre en conformité juste après', en: 'Launch on schedule and become compliant right after' },
      { fr: 'Laisser le marketing assumer la décision de lancement', en: 'Let marketing own the launch decision' },
      { fr: "Restreindre discrètement les fonctionnalités concernées sans le documenter", en: 'Quietly restrict the affected features without documenting it' },
    ],
    correct: 0,
    explanation: {
      fr: "La conformité légale n'est jamais négociable contre un délai à l'examen PMP : on chiffre l'impact, on documente, et la gouvernance arbitre les options CONFORMES (report, périmètre réduit conforme, lancement par phases).",
      en: 'On the PMP exam, legal compliance is never traded against schedule: quantify the impact, document it, and let governance arbitrate among COMPLIANT options (postponement, reduced compliant scope, phased launch).',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xh01',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-03',
    question: {
      fr: "Arbre de décision — Développer : investissement 120 k€, 60 % de chance de rapporter 300 k€, 40 % de rapporter 50 k€. Acheter : investissement 90 k€, 90 % de chance de rapporter 200 k€, 10 % de rapporter 80 k€. Quelle option la VME favorise-t-elle ?",
      en: 'Decision tree — Build: $120K investment, 60% chance of $300K return, 40% of $50K. Buy: $90K investment, 90% chance of $200K return, 10% of $80K. Which option does EMV favor?',
    },
    options: [
      { fr: 'Acheter : VME = 98 k€ contre 80 k€ pour développer', en: 'Buy: EMV = $98K vs $80K for build' },
      { fr: 'Développer : VME = 80 k€ contre 98 k€ pour acheter', en: 'Build: EMV = $80K vs $98K for buy' },
      { fr: 'Développer : le gain maximal (300 k€) est plus élevé', en: 'Build: the maximum payoff ($300K) is higher' },
      { fr: 'Les deux options sont équivalentes', en: 'Both options are equivalent' },
    ],
    correct: 0,
    explanation: {
      fr: 'Développer : (0,6×300 + 0,4×50) − 120 = 180 + 20 − 120 = 80 k€. Acheter : (0,9×200 + 0,1×80) − 90 = 180 + 8 − 90 = 98 k€. La VME nette la plus élevée gagne : Acheter. Le gain maximal seul ignore les probabilités.',
      en: 'Build: (0.6×300 + 0.4×50) − 120 = 180 + 20 − 120 = $80K. Buy: (0.9×200 + 0.1×80) − 90 = 180 + 8 − 90 = $98K. The highest net EMV wins: Buy. Maximum payoff alone ignores probabilities.',
    },
  },
  {
    id: 'xh02',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-06',
    question: {
      fr: "Votre équipe gère un flux continu de demandes de maintenance imprévisibles, aux tailles très variables, sans objectif de produit itératif. Quel mode de planification est le plus adapté ?",
      en: 'Your team handles a continuous stream of unpredictable maintenance requests of highly variable size, with no iterative product goal. Which planning approach fits best?',
    },
    options: [
      {
        fr: 'La planification à flux tiré (kanban, on-demand) : priorisation continue, limites de WIP, mesure du lead time',
        en: 'Flow-based (kanban, on-demand) planning: continuous prioritization, WIP limits, lead time measurement',
      },
      { fr: 'Des sprints de deux semaines avec engagement de contenu', en: 'Two-week sprints with a content commitment' },
      { fr: 'Un plan prédictif trimestriel détaillé', en: 'A detailed quarterly predictive plan' },
      { fr: 'Des vagues de planification semestrielles', en: 'Semi-annual planning waves' },
    ],
    correct: 0,
    explanation: {
      fr: "Un flux d'arrivée imprévisible casse tout engagement de timebox : l'itération devient artificielle. Le flux tiré absorbe la variabilité (on tire quand la capacité se libère) et se pilote par le lead time et les limites de WIP.",
      en: 'An unpredictable arrival stream breaks any timebox commitment: iterations become artificial. Pull-based flow absorbs variability (you pull when capacity frees up) and is steered through lead time and WIP limits.',
    },
  },
  {
    id: 'xh03',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-11',
    question: {
      fr: "Vous devez contractualiser un développement dont le périmètre évoluera fortement (produit exploratoire), avec un fournisseur dont vous voulez encourager la collaboration plutôt que la facturation d'avenants. Quelle structure contractuelle est la plus adaptée ?",
      en: 'You must contract development work whose scope will evolve heavily (exploratory product), with a vendor you want to incentivize toward collaboration rather than change-order billing. Which contract structure fits best?',
    },
    options: [
      {
        fr: "Un accord-cadre en régie plafonnée financé par itération, avec revue de valeur à chaque incrément et clause de sortie anticipée",
        en: 'A capped time & materials master agreement funded per iteration, with a value review at each increment and an early-exit clause',
      },
      { fr: 'Un prix forfaitaire ferme avec cahier des charges détaillé', en: 'A firm fixed price with a detailed specification' },
      { fr: 'Des coûts remboursables sans plafond pour rester flexible', en: 'Uncapped cost-reimbursable to stay flexible' },
      { fr: 'Un forfait par lot avec pénalités de retard renforcées', en: 'Fixed price per batch with reinforced delay penalties' },
    ],
    correct: 0,
    explanation: {
      fr: "En périmètre évolutif, le FFP transforme chaque apprentissage en avenant (guerre contractuelle) ; le remboursable non plafonné supprime toute incitation. La régie plafonnée par itération + revues de valeur + sortie anticipée aligne les intérêts : le client garde le contrôle, le fournisseur est payé pour la valeur livrée.",
      en: 'With evolving scope, FFP turns every learning into a change order (contract warfare); uncapped cost-plus removes all incentive. Capped T&M per iteration + value reviews + early exit aligns interests: the buyer keeps control, the seller is paid for delivered value.',
    },
  },
  {
    id: 'xh04',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-07',
    question: {
      fr: "Pour le contrôle qualité d'une API, l'équipe hésite : (1) noter chaque réponse « conforme / non conforme » au SLA, ou (2) enregistrer le temps de réponse mesuré en millisecondes. Comment qualifier ces deux échantillonnages ?",
      en: 'For an API’s quality control, the team hesitates: (1) rate each response “conformant / non-conformant” to the SLA, or (2) record the measured response time in milliseconds. How are these two sampling approaches classified?',
    },
    options: [
      {
        fr: "(1) = échantillonnage par attributs (binaire) ; (2) = échantillonnage par variables (mesure continue, plus riche pour détecter les dérives)",
        en: '(1) = attribute sampling (binary); (2) = variable sampling (continuous measurement, richer for detecting drift)',
      },
      { fr: 'Les deux sont des échantillonnages par attributs', en: 'Both are attribute sampling' },
      { fr: '(1) = variables ; (2) = attributs', en: '(1) = variable; (2) = attribute' },
      { fr: 'Aucun des deux : ce sont des inspections, pas des échantillonnages', en: 'Neither: these are inspections, not sampling' },
    ],
    correct: 0,
    explanation: {
      fr: "Attributs = résultat binaire conforme/non conforme (simple, mais pauvre en information). Variables = mesure sur une échelle continue : elle permet de voir une DÉRIVE avant la non-conformité (ex. temps de réponse qui monte vers la limite).",
      en: 'Attribute = binary conformant/non-conformant result (simple but information-poor). Variable = measurement on a continuous scale: it reveals DRIFT before non-conformance (e.g., response time creeping toward the limit).',
    },
  },
  {
    id: 'xh05',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-03',
    question: {
      fr: "Le plan de management des risques stipule : « tout risque dont l'impact quantifié dépasse 200 k€ est escaladé au programme ». Un risque projet vient d'être réévalué à 240 k€ d'impact, mais votre sponsor vous dit « on le garde chez nous, je le couvre ». Que faites-vous ?",
      en: 'The risk management plan states: “any risk whose quantified impact exceeds $200K is escalated to the program”. A project risk was just reassessed at $240K impact, but your sponsor says “we keep it here, I have it covered”. What do you do?',
    },
    options: [
      {
        fr: "Escalader conformément au seuil du plan et documenter la position du sponsor — le seuil de gouvernance n'est pas négociable localement",
        en: 'Escalate per the plan’s threshold and document the sponsor’s position — a governance threshold is not locally negotiable',
      },
      { fr: 'Suivre le sponsor : il assume le risque', en: 'Follow the sponsor: he owns the risk' },
      { fr: "Redécouper le risque en deux risques de 120 k€ chacun", en: 'Split the risk into two $120K risks' },
      { fr: "Réévaluer l'impact à la baisse avec l'équipe", en: 'Re-assess the impact downward with the team' },
    ],
    correct: 0,
    explanation: {
      fr: "Les seuils d'escalade sont une règle de GOUVERNANCE : ni le chef de projet ni le sponsor seul ne peuvent la suspendre. Redécouper ou re-noter le risque pour passer sous le seuil est une manipulation — un motif classique de réponse piège.",
      en: 'Escalation thresholds are a GOVERNANCE rule: neither the project manager nor the sponsor alone can waive them. Splitting or re-scoring the risk to duck under the threshold is manipulation — a classic trap answer pattern.',
    },
  },
  {
    id: 'xh06',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-03',
    question: {
      fr: "Une développeuse brillante, motivée par le dépassement de soi (fort besoin d'accomplissement selon McClelland), se désengage depuis qu'elle est affectée à de la coordination routinière. Quelle réponse managériale est la plus efficace ?",
      en: 'A brilliant developer, driven by achievement (high need for achievement per McClelland), has disengaged since being assigned routine coordination. Which managerial response is most effective?',
    },
    options: [
      {
        fr: "Lui confier des défis techniques exigeants avec des objectifs mesurables et un feedback rapide sur ses résultats",
        en: 'Give her demanding technical challenges with measurable goals and fast feedback on her results',
      },
      { fr: 'Lui accorder une augmentation significative', en: 'Grant her a significant raise' },
      { fr: "Lui donner de l'autorité formelle sur l'équipe", en: 'Give her formal authority over the team' },
      { fr: 'Organiser plus de moments de convivialité en équipe', en: 'Organize more team social events' },
    ],
    correct: 0,
    explanation: {
      fr: "McClelland : le besoin d'ACCOMPLISSEMENT se nourrit de défis atteignables, d'objectifs clairs et de feedback sur la performance. L'argent (hygiène), le pouvoir (besoin de pouvoir) et l'affiliation répondent à d'AUTRES profils motivationnels.",
      en: 'McClelland: the need for ACHIEVEMENT feeds on attainable challenges, clear goals and performance feedback. Money (hygiene), power (need for power) and affiliation address OTHER motivational profiles.',
    },
  },
  {
    id: 'xh07',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-02',
    question: {
      fr: "Votre équipe expérimentée, d'ordinaire autonome (style délégatif), traverse une crise de production majeure : décisions hésitantes, paralysie, sollicitations permanentes. Que faites-vous ?",
      en: 'Your experienced, normally autonomous team (delegating style) is going through a major production crisis: hesitant decisions, paralysis, constant requests for guidance. What do you do?',
    },
    options: [
      {
        fr: "Adopter temporairement un style plus directif (décisions rapides, priorités claires), puis rendre l'autonomie une fois la crise passée",
        en: 'Temporarily adopt a more directive style (fast decisions, clear priorities), then restore autonomy once the crisis passes',
      },
      { fr: "Maintenir la délégation : l'équipe doit rester autonome", en: 'Maintain delegation: the team must stay autonomous' },
      { fr: 'Passer définitivement en pilotage directif', en: 'Switch permanently to directive management' },
      { fr: "Confier la crise à un manager de transition externe", en: 'Hand the crisis to an external interim manager' },
    ],
    correct: 0,
    explanation: {
      fr: "Le leadership situationnel n'est pas une échelle à sens unique : la maturité situationnelle d'une équipe RÉGRESSE sous stress aigu. Un style directif temporaire sécurise la crise ; le maintenir ensuite détruirait l'autonomie construite.",
      en: 'Situational leadership is not a one-way ladder: a team’s situational readiness REGRESSES under acute stress. A temporary directive style secures the crisis; keeping it afterwards would destroy the built autonomy.',
    },
  },
  {
    id: 'xh08',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-08',
    question: {
      fr: "En pleine négociation de renouvellement, votre fournisseur clé apprend que votre date de lancement est immuable et durcit brutalement ses conditions (+30 %). Quelle est la MEILLEURE action avant de reprendre la négociation ?",
      en: 'Mid-renewal negotiation, your key vendor learns your launch date is immovable and abruptly hardens its terms (+30%). What is the BEST move before resuming negotiation?',
    },
    options: [
      {
        fr: 'Renforcer votre BATNA : qualifier une alternative réelle (autre fournisseur, périmètre replanifié) pour rééquilibrer le rapport de force',
        en: 'Strengthen your BATNA: qualify a real alternative (another vendor, re-planned scope) to rebalance the power dynamic',
      },
      { fr: 'Accepter les conditions : la date prime', en: 'Accept the terms: the date comes first' },
      { fr: "Menacer de rompre le contrat immédiatement", en: 'Threaten immediate contract termination' },
      { fr: 'Cacher la hausse au sponsor et compenser sur d’autres postes', en: 'Hide the increase from the sponsor and offset it elsewhere' },
    ],
    correct: 0,
    explanation: {
      fr: "Une négociation se gagne par les alternatives, pas par le bluff : sans BATNA crédible, menacer est vide et céder est ruineux. Construire une vraie alternative (même partielle) change la structure de la négociation — puis on renégocie sur critères objectifs.",
      en: 'Negotiations are won through alternatives, not bluff: without a credible BATNA, threats are hollow and caving is ruinous. Building a real alternative (even partial) changes the negotiation’s structure — then renegotiate on objective criteria.',
    },
  },
  {
    id: 'xh09',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Votre projet vise 2 M€ d'économies annuelles mesurables 12 mois après déploiement. Le sponsor veut pouvoir CORRIGER LA TRAJECTOIRE pendant le déploiement, pas seulement constater le résultat final. Quels indicateurs ajoutez-vous au tableau de bord ?",
      en: 'Your project targets $2M annual savings measurable 12 months after rollout. The sponsor wants to be able to STEER during the rollout, not just observe the final result. Which indicators do you add to the dashboard?',
    },
    options: [
      {
        fr: "Des indicateurs avancés (leading) : taux d'adoption, volume traité dans le nouveau processus, abandon de l'ancien circuit",
        en: 'Leading indicators: adoption rate, volume processed through the new process, abandonment of the old workflow',
      },
      { fr: 'Des indicateurs retardés (lagging) : économies réalisées cumulées', en: 'Lagging indicators: cumulative realized savings' },
      { fr: "L'avancement du projet : jalons et budget consommé", en: 'Project progress: milestones and budget consumed' },
      { fr: 'La satisfaction du sponsor mesurée trimestriellement', en: 'Sponsor satisfaction measured quarterly' },
    ],
    correct: 0,
    explanation: {
      fr: "Les économies réalisées sont un indicateur RETARDÉ : quand il bouge, il est trop tard pour corriger. Les indicateurs AVANCÉS (adoption, usage réel) prédisent le bénéfice et permettent d'agir pendant le déploiement. L'avancement projet mesure l'output, pas le bénéfice.",
      en: 'Realized savings are a LAGGING indicator: by the time it moves, it is too late to correct. LEADING indicators (adoption, actual usage) predict the benefit and enable action during rollout. Project progress measures output, not benefit.',
    },
  },
  {
    id: 'xh10',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-01',
    question: {
      fr: "Une semaine avant la revue de passage de phase, un audit interne détecte une non-conformité mineure dont la correction prendra trois semaines. La cacher passerait probablement inaperçu. Que faites-vous ?",
      en: 'A week before the phase gate review, an internal audit finds a minor non-conformity whose fix will take three weeks. Concealing it would probably go unnoticed. What do you do?',
    },
    options: [
      {
        fr: "Présenter la non-conformité à la revue avec un plan de correction daté, et laisser la gouvernance décider (passage conditionnel possible)",
        en: 'Present the non-conformity at the review with a dated corrective plan, and let governance decide (a conditional pass is possible)',
      },
      { fr: "La corriger discrètement après le passage de phase", en: 'Fix it quietly after the gate' },
      { fr: 'Reporter la revue de trois semaines sans en donner la raison', en: 'Postpone the review by three weeks without giving the reason' },
      { fr: "Demander à l'auditeur de requalifier le constat en simple observation", en: 'Ask the auditor to downgrade the finding to an observation' },
    ],
    correct: 0,
    explanation: {
      fr: "Transparence + gouvernance : une revue de phase sert à décider en connaissance de cause — lui cacher une information la vide de son sens. Le passage conditionnel avec plan daté existe précisément pour ce cas. Influencer l'auditeur est une faute d'intégrité caractérisée.",
      en: 'Transparency + governance: a gate review exists to decide with full information — hiding a finding defeats its purpose. Conditional passes with a dated plan exist precisely for this case. Influencing the auditor is a clear integrity violation.',
    },
  },
]
