import type { Question } from '../types'

/** New easy (recall / definition) questions. */
export const EASY_QUESTIONS: Question[] = [
  {
    id: 'ep01',
    domain: 'people',
    difficulty: 'easy',
    question: {
      fr: "Selon le modèle de Tuckman, quelle est la PREMIÈRE étape de développement d'une équipe ?",
      en: 'According to Tuckman’s model, what is the FIRST stage of team development?',
    },
    options: [
      { fr: 'Forming (constitution)', en: 'Forming' },
      { fr: 'Storming (turbulence)', en: 'Storming' },
      { fr: 'Norming (normalisation)', en: 'Norming' },
      { fr: 'Performing (performance)', en: 'Performing' },
    ],
    correct: 0,
    explanation: {
      fr: "L'ordre est : forming → storming → norming → performing → adjourning. En phase de forming, les membres se découvrent et dépendent fortement du leader.",
      en: 'The order is: forming → storming → norming → performing → adjourning. In forming, members get acquainted and rely heavily on the leader.',
    },
  },
  {
    id: 'ep02',
    domain: 'people',
    difficulty: 'easy',
    question: {
      fr: 'À quoi sert la grille pouvoir/intérêt ?',
      en: 'What is the power/interest grid used for?',
    },
    options: [
      {
        fr: 'Classer les parties prenantes pour adapter leur stratégie d’engagement',
        en: 'Classify stakeholders to tailor their engagement strategy',
      },
      { fr: 'Prioriser les risques du projet', en: 'Prioritize project risks' },
      { fr: 'Affecter les ressources aux activités', en: 'Assign resources to activities' },
      { fr: 'Évaluer la performance des fournisseurs', en: 'Evaluate supplier performance' },
    ],
    correct: 0,
    explanation: {
      fr: "La grille croise le pouvoir et l'intérêt de chaque partie prenante : gérer étroitement, garder satisfait, tenir informé ou surveiller.",
      en: 'The grid maps each stakeholder’s power and interest: manage closely, keep satisfied, keep informed, or monitor.',
    },
  },
  {
    id: 'ep03',
    domain: 'people',
    difficulty: 'easy',
    question: {
      fr: 'Dans Scrum, qui est responsable de lever les obstacles (impediments) qui bloquent l’équipe ?',
      en: 'In Scrum, who is responsible for removing impediments that block the team?',
    },
    options: [
      { fr: 'Le Scrum Master', en: 'The Scrum Master' },
      { fr: 'Le Product Owner', en: 'The Product Owner' },
      { fr: 'Le sponsor', en: 'The sponsor' },
      { fr: 'Le PMO', en: 'The PMO' },
    ],
    correct: 0,
    explanation: {
      fr: 'Le Scrum Master est un leader-serviteur : il facilite les événements, protège l’équipe et fait disparaître les obstacles.',
      en: 'The Scrum Master is a servant leader: they facilitate events, protect the team and remove impediments.',
    },
  },
  {
    id: 'eq01',
    domain: 'process',
    difficulty: 'easy',
    question: {
      fr: "Qu'est-ce que la structure de découpage du projet (WBS) ?",
      en: 'What is the Work Breakdown Structure (WBS)?',
    },
    options: [
      {
        fr: 'Une décomposition hiérarchique de la totalité du périmètre en lots de travaux',
        en: 'A hierarchical decomposition of the total scope into work packages',
      },
      { fr: 'La liste des activités ordonnancées dans le temps', en: 'The list of activities sequenced over time' },
      { fr: "L'organigramme de l'équipe projet", en: 'The project team org chart' },
      { fr: 'Le registre des livrables acceptés', en: 'The register of accepted deliverables' },
    ],
    correct: 0,
    explanation: {
      fr: "La WBS décompose 100 % du périmètre (règle des 100 %) en livrables puis en lots de travaux. Elle ne contient pas d'activités ni de dates : c'est le rôle de l'échéancier.",
      en: 'The WBS decomposes 100% of the scope (100% rule) into deliverables and work packages. It holds no activities or dates — that is the schedule’s job.',
    },
  },
  {
    id: 'eq02',
    domain: 'process',
    difficulty: 'easy',
    question: {
      fr: 'Quelle est la formule du SPI (indice de performance des délais) ?',
      en: 'What is the formula for SPI (Schedule Performance Index)?',
    },
    options: [
      { fr: 'SPI = EV / PV', en: 'SPI = EV / PV' },
      { fr: 'SPI = EV / AC', en: 'SPI = EV / AC' },
      { fr: 'SPI = PV / EV', en: 'SPI = PV / EV' },
      { fr: 'SPI = AC / PV', en: 'SPI = AC / PV' },
    ],
    correct: 0,
    explanation: {
      fr: 'SPI = EV/PV (valeur acquise sur valeur planifiée). SPI < 1 : retard ; SPI > 1 : avance. CPI = EV/AC pour les coûts.',
      en: 'SPI = EV/PV (earned value over planned value). SPI < 1: behind; SPI > 1: ahead. CPI = EV/AC for cost.',
    },
  },
  {
    id: 'eq03',
    domain: 'process',
    difficulty: 'easy',
    question: {
      fr: "Quelle technique de compression d'échéancier consiste à exécuter en parallèle des activités normalement séquentielles ?",
      en: 'Which schedule compression technique overlaps activities that are normally sequential?',
    },
    options: [
      { fr: "L'exécution accélérée (fast tracking)", en: 'Fast tracking' },
      { fr: 'La compression (crashing)', en: 'Crashing' },
      { fr: 'Le nivellement des ressources', en: 'Resource leveling' },
      { fr: 'La planification par vagues', en: 'Rolling wave planning' },
    ],
    correct: 0,
    explanation: {
      fr: 'Fast tracking = paralléliser (augmente le risque de reprise). Crashing = ajouter des ressources (augmente le coût).',
      en: 'Fast tracking = overlap activities (raises rework risk). Crashing = add resources (raises cost).',
    },
  },
  {
    id: 'eb01',
    domain: 'business',
    difficulty: 'easy',
    question: {
      fr: 'Qui est généralement responsable de la rédaction et de la mise à jour du business case ?',
      en: 'Who is typically accountable for creating and maintaining the business case?',
    },
    options: [
      { fr: 'Le sponsor du projet', en: 'The project sponsor' },
      { fr: 'Le chef de projet', en: 'The project manager' },
      { fr: "L'équipe projet", en: 'The project team' },
      { fr: 'Le client final', en: 'The end customer' },
    ],
    correct: 0,
    explanation: {
      fr: "Le business case appartient au sponsor (ou au propriétaire des bénéfices). Le chef de projet y contribue et alerte si sa validité est remise en cause.",
      en: 'The business case is owned by the sponsor (or benefits owner). The project manager contributes and raises alerts if its validity is questioned.',
    },
  },
  {
    id: 'eb02',
    domain: 'business',
    difficulty: 'easy',
    question: {
      fr: "Quelle caractéristique distingue un projet des opérations courantes ?",
      en: 'Which characteristic distinguishes a project from ongoing operations?',
    },
    options: [
      {
        fr: 'Il est temporaire et produit un résultat unique',
        en: 'It is temporary and produces a unique result',
      },
      { fr: 'Il est répétitif et continu', en: 'It is repetitive and continuous' },
      { fr: 'Il ne nécessite pas de budget', en: 'It requires no budget' },
      { fr: 'Il est toujours réalisé en interne', en: 'It is always performed in-house' },
    ],
    correct: 0,
    explanation: {
      fr: 'Un projet est un effort temporaire entrepris pour créer un produit, service ou résultat unique. Les opérations sont continues et répétitives.',
      en: 'A project is a temporary endeavor undertaken to create a unique product, service or result. Operations are ongoing and repetitive.',
    },
  },
]
