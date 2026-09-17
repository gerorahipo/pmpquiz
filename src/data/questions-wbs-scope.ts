import type { Question } from '../types'

/**
 * Batch covering WBS mechanics (deliverable orientation, no gaps/overlaps,
 * work package, control account, WBS dictionary), the control-quality →
 * validate-scope sequence, and uncontrolled scope drift — companion to the
 * tp-wbs revision sheet.
 */
export const WBS_SCOPE_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xw01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Une WBS (structure de découpage du projet) doit être organisée autour de quoi ?",
      en: 'What should a WBS (work breakdown structure) be organized around?',
    },
    options: [
      { fr: 'Les livrables du projet', en: "The project's deliverables" },
      { fr: 'Les tâches quotidiennes de chaque membre', en: "Each team member's daily tasks" },
      { fr: "L'organigramme hiérarchique de l'entreprise", en: "The company's org chart" },
      { fr: 'Le calendrier des réunions', en: 'The meeting calendar' },
    ],
    correct: 0,
    explanation: {
      fr: "La WBS est une décomposition hiérarchique orientée LIVRABLES, pas tâches : elle organise ce qui doit être produit, pas les activités pour le produire.",
      en: 'The WBS is a hierarchical decomposition oriented toward DELIVERABLES, not tasks: it organizes what must be produced, not the activities to produce it.',
    },
  },
  {
    id: 'xw02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Quelle règle s'applique aux lots de travail (work packages) d'une WBS ?",
      en: 'What rule applies to the work packages of a WBS?',
    },
    options: [
      { fr: "Il ne doit y avoir ni lacune ni chevauchement entre les lots de travail", en: 'There must be neither gaps nor overlaps between work packages' },
      { fr: 'Chaque lot de travail doit durer exactement une semaine', en: 'Each work package must last exactly one week' },
      { fr: "Les lots de travail peuvent se chevaucher tant que le coût total reste correct", en: 'Work packages can overlap as long as the total cost stays correct' },
      { fr: "Un lot de travail n'a pas besoin d'identifiant unique", en: 'A work package does not need a unique identifier' },
    ],
    correct: 0,
    explanation: {
      fr: "La règle d'or de la WBS : rien n'est omis, rien n'est dupliqué. Chaque nœud a un identifiant unique, et les lots de travail couvrent l'intégralité du périmètre sans lacune ni chevauchement.",
      en: 'The WBS golden rule: nothing is omitted, nothing is duplicated. Every node carries a unique identifier, and work packages cover the entire scope with no gaps or overlaps.',
    },
  },
  {
    id: 'xw03',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Que contient principalement le dictionnaire de la WBS pour un lot de travail donné ?",
      en: 'What does the WBS dictionary mainly contain for a given work package?',
    },
    options: [
      { fr: "Le responsable, l'estimation de durée et de coût, les exigences qualité et une description détaillée du travail", en: 'The owner, duration and cost estimates, quality requirements, and a detailed work description' },
      { fr: "Uniquement le nom du livrable, sans autre détail", en: 'Only the deliverable’s name, with no other detail' },
      { fr: "La liste des réunions prévues pour ce lot de travail", en: 'The list of meetings planned for that work package' },
      { fr: "Le code source associé au lot de travail", en: 'The source code associated with the work package' },
    ],
    correct: 0,
    explanation: {
      fr: "Le dictionnaire de la WBS transforme la structure visuelle en référence opérationnelle : responsable, durée, coût, informations comptables, exigences qualité, jalons, description détaillée.",
      en: 'The WBS dictionary turns the visual structure into an operational reference: owner, duration, cost, accounting info, quality requirements, milestones, detailed description.',
    },
  },
  {
    id: 'xw04',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Quel est l'objectif du processus « Valider le périmètre » ?",
      en: 'What is the objective of the “Validate Scope” process?',
    },
    options: [
      { fr: "Obtenir l'acceptation formelle des livrables par les parties prenantes", en: 'Obtain formal acceptance of deliverables from stakeholders' },
      { fr: "Vérifier que le livrable est techniquement correct et sans défaut", en: 'Verify the deliverable is technically correct and defect-free' },
      { fr: "Estimer le coût des lots de travail restants", en: 'Estimate the cost of the remaining work packages' },
      { fr: "Décomposer le périmètre en lots de travail", en: 'Decompose the scope into work packages' },
    ],
    correct: 0,
    explanation: {
      fr: "Valider le périmètre confirme formellement que les livrables respectent les normes de qualité ET obtient leur acceptation par les parties prenantes — une confirmation externe, différente du contrôle qualité interne.",
      en: 'Validate Scope formally confirms deliverables meet quality standards AND obtains stakeholder acceptance — an external confirmation, distinct from internal control quality.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xw05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Dans quel ordre les processus « Contrôler la qualité » et « Valider le périmètre » doivent-ils normalement se dérouler ?",
      en: 'In what order should “Control Quality” and “Validate Scope” normally occur?',
    },
    options: [
      { fr: "Contrôler la qualité d'abord, puis valider le périmètre avec le livrable vérifié", en: 'Control quality first, then validate scope with the verified deliverable' },
      { fr: "Valider le périmètre d'abord, puis contrôler la qualité si le client le demande", en: 'Validate scope first, then control quality only if the customer asks' },
      { fr: "L'ordre est indifférent, les deux processus sont interchangeables", en: 'The order does not matter, the two processes are interchangeable' },
      { fr: "Les deux processus se déroulent toujours simultanément", en: 'The two processes always happen simultaneously' },
    ],
    correct: 0,
    explanation: {
      fr: "Le contrôle qualité (vérification interne, technique) précède TOUJOURS la validation du périmètre (acceptation externe, formelle) : présenter un livrable non contrôlé à l'acceptation client est un piège classique de l'examen.",
      en: 'Control quality (internal, technical verification) ALWAYS precedes validate scope (external, formal acceptance): presenting an uninspected deliverable for customer acceptance is a classic exam trap.',
    },
  },
  {
    id: 'xw06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Un compte de contrôle regroupe plusieurs lots de travail de la WBS. À quoi sert-il principalement ?",
      en: 'A control account groups several work packages of the WBS. What is it mainly used for?',
    },
    options: [
      { fr: "Mesurer la performance et l'intégration coût-échéancier à un niveau de gestion intermédiaire", en: 'Measuring cost-schedule performance and integration at an intermediate management level' },
      { fr: "Remplacer entièrement le dictionnaire de la WBS", en: 'Fully replacing the WBS dictionary' },
      { fr: "Documenter uniquement les risques du projet", en: 'Documenting only the project’s risks' },
      { fr: "Servir de registre des parties prenantes", en: 'Serving as the stakeholder register' },
    ],
    correct: 0,
    explanation: {
      fr: "Le compte de contrôle est le niveau intermédiaire où l'on mesure la performance (coût, avancement) de façon agrégée sur plusieurs lots de travail — c'est la base de la gestion de la valeur acquise (EVM).",
      en: 'The control account is the intermediate level where performance (cost, progress) is measured in aggregate across several work packages — the basis of earned value management (EVM).',
    },
  },
  {
    id: 'xw07',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Qu'est-ce que la structure de décomposition de la valeur (VBS), par rapport à une WBS classique ?",
      en: 'What is the value breakdown structure (VBS), compared to a classic WBS?',
    },
    options: [
      { fr: "Une hiérarchie qui relie les livrables à la valeur attendue, permettant une priorisation basée sur la valeur", en: 'A hierarchy linking deliverables to expected value, enabling value-based prioritization' },
      { fr: "Un synonyme strict de la WBS, sans différence de fond", en: 'A strict synonym for the WBS, with no substantive difference' },
      { fr: "Un document réservé exclusivement aux projets prédictifs", en: 'A document reserved exclusively for predictive projects' },
      { fr: "Une liste des risques classés par probabilité", en: 'A list of risks ranked by probability' },
    ],
    correct: 0,
    explanation: {
      fr: "La VBS relie les livrables à la valeur attendue plutôt qu'au seul périmètre technique, ce qui permet de prioriser le travail en fonction de la valeur qu'il génère.",
      en: 'The VBS links deliverables to expected value rather than technical scope alone, enabling work to be prioritized by the value it generates.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xw08',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-10',
    question: {
      fr: "Sur plusieurs mois, une équipe intègre régulièrement de petits ajustements demandés par des parties prenantes, sans jamais soumettre de demande de changement formelle, chaque ajustement étant jugé « d'impact individuel négligeable ». Le chef de projet constate maintenant une charge de travail en hausse et un échéancier qui dérive, sans pouvoir expliquer clairement l'écart. Quelle est la MEILLEURE action ?",
      en: 'Over several months, a team regularly integrates small stakeholder-requested tweaks without ever submitting a formal change request, each judged to have “negligible individual impact”. The PM now sees rising workload and schedule drift, without being able to clearly explain the variance. What is the BEST action?',
    },
    options: [
      { fr: "Analyser l'écart cumulé causé par ces ajustements informels et le soumettre au processus de maîtrise intégrée des changements", en: 'Analyze the cumulative variance caused by these informal adjustments and submit it to the integrated change control process' },
      { fr: "Continuer à accepter les ajustements mineurs tant qu'ils apportent une valeur immédiate", en: 'Keep accepting minor adjustments as long as they bring immediate value' },
      { fr: "Mettre à jour rétroactivement la référence de périmètre pour refléter les ajustements déjà faits, sans autre analyse", en: 'Retroactively update the scope baseline to reflect the adjustments already made, with no further analysis' },
      { fr: "Ignorer le problème puisque chaque ajustement pris individuellement était mineur", en: 'Ignore the issue since each adjustment, taken individually, was minor' },
    ],
    correct: 0,
    explanation: {
      fr: "Le danger n'est pas le changement en soi, mais le changement NON CONTRÔLÉ : une accumulation de « petits » ajustements non validés est une dérive de périmètre classique. La réponse correcte analyse l'écart cumulé et le fait passer par la maîtrise intégrée des changements — pas un maquillage rétroactif de la baseline.",
      en: 'The danger is not change itself, but UNCONTROLLED change: an accumulation of unapproved “small” adjustments is classic scope creep. The correct response analyzes the cumulative variance and routes it through integrated change control — not a retroactive whitewashing of the baseline.',
    },
  },
  {
    id: 'xw09',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-08',
    question: {
      fr: "Une équipe construit une WBS où le premier niveau liste des activités (« Concevoir », « Développer », « Tester ») plutôt que des livrables. Un lot de travail « Tester » couvre à la fois les tests du module A et du module B, dont les livrables respectifs apparaissent aussi ailleurs dans la WBS sous d'autres branches. Quels DEUX problèmes cela pose-t-il ?",
      en: 'A team builds a WBS whose first level lists activities (“Design”, “Develop”, “Test”) rather than deliverables. A “Test” work package covers testing for both module A and module B, whose respective deliverables also appear elsewhere in the WBS under other branches. What TWO problems does this create?',
    },
    options: [
      { fr: "La WBS est orientée tâches au lieu de livrables, ce qui contrevient au principe fondamental de sa construction", en: 'The WBS is task-oriented instead of deliverable-oriented, violating its fundamental construction principle' },
      { fr: "Il y a un chevauchement : les modules A et B sont couverts à la fois par leurs branches propres et par le lot « Tester », violant la règle d'absence de duplication", en: 'There is an overlap: modules A and B are covered both by their own branches and by the “Test” package, violating the no-duplication rule' },
      { fr: "La WBS ne peut légalement pas dépasser trois niveaux de profondeur", en: 'A WBS cannot legally exceed three levels of depth' },
      { fr: "Chaque lot de travail doit obligatoirement coûter moins de 1 000 $", en: 'Every work package must cost less than $1,000' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Deux fautes classiques : une WBS orientée tâches (« Tester ») au lieu de livrables, et un chevauchement entre les branches par module et la branche « Tester » qui couvre les mêmes éléments deux fois — la WBS doit couvrir le périmètre sans lacune NI duplication.",
      en: 'Two classic mistakes: a task-oriented WBS (“Test”) instead of deliverable-oriented, and an overlap between the per-module branches and the “Test” branch covering the same elements twice — the WBS must cover scope with no gaps AND no duplication.',
    },
  },
]
