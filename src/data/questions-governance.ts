import type { Question } from '../types'

/**
 * Batch covering the Governance performance domain (structured vs
 * self-governance, target/leading indicators, the four governance
 * scenarios, tacit/explicit knowledge management, make-or-buy), companion
 * to the tp-governance revision sheet.
 */
export const GOVERNANCE_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xg01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Dans un environnement agile, la gouvernance est décrite comme « légère et auto-gouvernée ». Que signifie ce terme ?",
      en: 'In an agile environment, governance is described as “lightweight and self-governed”. What does that mean?',
    },
    options: [
      { fr: "La responsabilité de la gouvernance est portée collectivement par l'équipe, pas par un comité formel", en: 'Governance responsibility is carried collectively by the team, not by a formal committee' },
      { fr: "Il n'existe aucune forme de gouvernance dans un projet agile", en: 'No form of governance exists in an agile project' },
      { fr: "La gouvernance est entièrement déléguée à un PMO directif", en: 'Governance is entirely delegated to a directive PMO' },
      { fr: "La gouvernance devient obligatoirement plus stricte qu'en prédictif", en: 'Governance necessarily becomes stricter than in a predictive context' },
    ],
    correct: 0,
    explanation: {
      fr: "L'auto-gouvernance déplace la responsabilité vers l'équipe, elle ne la supprime pas : « gouvernance légère » ne signifie jamais « absence de gouvernance ».",
      en: 'Self-governance shifts responsibility to the team; it does not remove it: “lightweight governance” never means “no governance”.',
    },
  },
  {
    id: 'xg02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Lequel des indicateurs suivants est un indicateur de GOUVERNANCE pertinent (axé résultats/valeur), plutôt qu'un indicateur d'intrant ?",
      en: 'Which of the following is a relevant GOVERNANCE indicator (outcome/value-focused), rather than an input indicator?',
    },
    options: [
      { fr: 'La valeur livrée à un jalon clé', en: 'Value delivered at a key milestone' },
      { fr: "Le taux d'utilisation des ressources de l'équipe", en: 'The team’s resource utilization rate' },
      { fr: "Le nombre d'heures de formation suivies", en: 'The number of training hours completed' },
      { fr: "Le nombre de réunions tenues dans le mois", en: 'The number of meetings held in the month' },
    ],
    correct: 0,
    explanation: {
      fr: "Les indicateurs de gouvernance portent sur les RÉSULTATS et la valeur (ROI, jalons atteints, valeur livrée), pas sur des indicateurs d'intrants (utilisation des ressources, heures de formation, nombre de réunions).",
      en: 'Governance indicators focus on OUTCOMES and value (ROI, milestones met, value delivered), not on input indicators (resource utilization, training hours, meeting counts).',
    },
  },
  {
    id: 'xg03',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Un projet atteint son objectif de valeur trois mois avant sa date de fin planifiée et est clos par anticipation. De quel scénario de gouvernance s'agit-il ?",
      en: 'A project reaches its value goal three months before its planned end date and is closed early. Which governance scenario is this?',
    },
    options: [
      { fr: 'Arrêt anticipé pour cause positive', en: 'Early termination for a positive reason' },
      { fr: 'Arrêt anticipé pour cause négative', en: 'Early termination for a negative reason' },
      { fr: 'Replanification', en: 'Replanning' },
      { fr: 'Extension du projet', en: 'Project extension' },
    ],
    correct: 0,
    explanation: {
      fr: "La valeur attendue a déjà été atteinte : c'est un arrêt anticipé pour cause POSITIVE — un succès, à ne pas confondre avec l'arrêt pour cause négative (valeur devenue inatteignable).",
      en: 'The expected value has already been achieved: this is early termination for a POSITIVE reason — a success, not to be confused with termination for a negative reason (value no longer achievable).',
    },
  },
  {
    id: 'xg04',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Quelle est la différence entre une connaissance EXPLICITE et une connaissance TACITE ?",
      en: 'What is the difference between EXPLICIT and TACIT knowledge?',
    },
    options: [
      { fr: "L'explicite est documentée et facilement partageable ; la tacite est fondée sur l'expérience et difficile à transférer", en: 'Explicit knowledge is documented and easily shared; tacit knowledge is experience-based and hard to transfer' },
      { fr: 'Les deux termes désignent la même chose', en: 'Both terms describe the same thing' },
      { fr: "L'explicite est toujours plus précieuse que la tacite", en: 'Explicit knowledge is always more valuable than tacit knowledge' },
      { fr: 'La tacite se transfère automatiquement à la clôture du projet', en: 'Tacit knowledge automatically transfers at project closure' },
    ],
    correct: 0,
    explanation: {
      fr: "Les connaissances explicites (procédures, manuels) se documentent et se partagent facilement ; les connaissances tacites (expérience personnelle) sont difficiles à documenter et à transférer — l'enjeu de gouvernance est de convertir le tacite en explicite quand c'est possible.",
      en: 'Explicit knowledge (procedures, manuals) is easily documented and shared; tacit knowledge (personal experience) is hard to document and transfer — the governance challenge is converting tacit into explicit whenever possible.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xg05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Un projet perd son sponsor initial et, après un changement réglementaire majeur, son business case n'est plus soutenable. Quelle est la MEILLEURE action de gouvernance ?",
      en: 'A project loses its original sponsor and, after a major regulatory change, its business case is no longer sustainable. What is the BEST governance action?',
    },
    options: [
      { fr: "Faire acter par la gouvernance un arrêt anticipé pour cause négative plutôt que de poursuivre par inertie", en: 'Have governance formally act on early termination for a negative reason rather than continuing out of inertia' },
      { fr: "Continuer le projet jusqu'à ce qu'un nouveau sponsor soit trouvé, sans réévaluer le business case", en: 'Continue the project until a new sponsor is found, without reassessing the business case' },
      { fr: "Réduire discrètement le périmètre sans en informer la gouvernance", en: 'Quietly reduce scope without informing governance' },
      { fr: "Attendre la fin de la phase en cours avant toute décision", en: 'Wait until the end of the current phase before any decision' },
    ],
    correct: 0,
    explanation: {
      fr: "Quand la valeur attendue n'est plus atteignable, la gouvernance doit acter un arrêt anticipé pour cause NÉGATIVE — poursuivre par inertie ou agir en catimini contourne le rôle même de la gouvernance : protéger la valeur.",
      en: 'When the expected value is no longer achievable, governance must formally act on early termination for a NEGATIVE reason — continuing out of inertia or acting quietly bypasses governance’s very role: protecting value.',
    },
  },
  {
    id: 'xg06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Quels sont les trois éléments sur lesquels repose une gouvernance efficace, selon le cadre du domaine de performance Gouvernance ?",
      en: 'What are the three elements effective governance rests on, per the Governance performance domain framework?',
    },
    options: [
      { fr: "Des indicateurs cibles alignés stratégiquement, des indicateurs avancés donnant des signaux précoces, et des mécanismes de rétroaction", en: 'Strategically aligned target indicators, leading indicators giving early signals, and feedback mechanisms' },
      { fr: "Un PMO directif, un comité de pilotage et un plan de management des risques", en: 'A directive PMO, a steering committee, and a risk management plan' },
      { fr: "Un business case, une charte de projet et un registre des parties prenantes", en: 'A business case, a project charter, and a stakeholder register' },
      { fr: "Des contrats à prix forfaitaire, une matrice RACI et une revue de code", en: 'Fixed-price contracts, a RACI matrix, and a code review' },
    ],
    correct: 0,
    explanation: {
      fr: "Une gouvernance efficace combine indicateurs cibles (ce qu'il faut atteindre), indicateurs avancés (signaux précoces avant qu'un problème ne devienne critique) et mécanismes de rétroaction (pour ajuster la décision).",
      en: 'Effective governance combines target indicators (what must be achieved), leading indicators (early signals before a problem turns critical), and feedback mechanisms (to adjust decisions).',
    },
  },
  {
    id: 'xg07',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Une experte détentrice d'une connaissance clé, jamais documentée, s'apprête à quitter le projet dans deux semaines. Quelle est la MEILLEURE action de gouvernance des connaissances ?",
      en: 'An expert holding key, never-documented knowledge is about to leave the project in two weeks. What is the BEST knowledge-governance action?',
    },
    options: [
      { fr: "Organiser activement le transfert (mentorat, storytelling, documentation) pour convertir cette connaissance tacite en connaissance explicite avant son départ", en: 'Actively organize the transfer (mentoring, storytelling, documentation) to convert this tacit knowledge into explicit knowledge before she leaves' },
      { fr: "Ne rien faire : la connaissance tacite n'est de toute façon pas transférable", en: 'Do nothing: tacit knowledge is not transferable anyway' },
      { fr: "Attendre son départ puis reconstituer la connaissance à partir des livrables existants", en: 'Wait until she leaves, then reconstruct the knowledge from existing deliverables' },
      { fr: "Demander un rapport écrit de sa part le dernier jour", en: 'Ask her for a written report on her last day' },
    ],
    correct: 0,
    explanation: {
      fr: "La gouvernance doit chercher ACTIVEMENT à transformer le tacite en explicite AVANT le départ, via la collaboration, le mentorat, le storytelling — pas après, quand la connaissance est déjà perdue.",
      en: 'Governance must ACTIVELY work to turn tacit into explicit knowledge BEFORE the departure, through collaboration, mentoring, storytelling — not after, once the knowledge is already lost.',
    },
  },
  {
    id: 'xg08',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-11',
    question: {
      fr: "Une organisation dispose déjà d'une expertise interne forte sur un composant stratégique nécessitant une innovation significative. Quelle option l'analyse « faire ou acheter » favorise-t-elle, et pourquoi ?",
      en: 'An organization already has strong internal expertise on a strategic component requiring significant innovation. Which option does the “make-or-buy” analysis favor, and why?',
    },
    options: [
      { fr: "Faire (internaliser) : exploite l'expertise disponible, souvent moins coûteux pour une innovation significative, et renforce le contrôle sur un livrable stratégique", en: 'Make (insource): leverages available expertise, often cheaper for significant innovation, and strengthens control over a strategic deliverable' },
      { fr: "Acheter (externaliser) : transfère systématiquement le risque, donc toujours préférable", en: 'Buy (outsource): systematically transfers risk, so always preferable' },
      { fr: "Le choix est indifférent tant que le prix est comparable", en: 'The choice is indifferent as long as the price is comparable' },
      { fr: "Acheter, car cela libère automatiquement des capacités internes quel que soit le contexte", en: 'Buy, because it automatically frees internal capacity regardless of context' },
    ],
    correct: 0,
    explanation: {
      fr: "Faire (internaliser) est souvent préférable quand l'expertise est déjà disponible et qu'une innovation significative est en jeu : cela renforce l'intégration avec l'avantage stratégique et le contrôle des livrables — l'inverse d'un cas où l'expertise manque en interne.",
      en: 'Make (insource) is often preferable when expertise is already available and significant innovation is at stake: it strengthens integration with strategic advantage and control over deliverables — the opposite of a case where expertise is missing internally.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xg09',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Un projet hybride identifie une opportunité business majeure qui augmenterait significativement la valeur du produit, mais elle n'est pas alignée avec le business case initial, exige une re-priorisation importante du backlog, et son analyse complète prendrait plusieurs semaines. Le sponsor exige une décision rapide. Quelle est la MEILLEURE action ?",
      en: 'A hybrid project identifies a major business opportunity that would significantly increase product value, but it is misaligned with the initial business case, requires major backlog re-prioritization, and a full analysis would take several weeks. The sponsor demands a fast decision. What is the BEST action?',
    },
    options: [
      { fr: "Proposer une évaluation accélérée de l'opportunité et recommander une décision de gouvernance fondée sur une analyse progressive", en: 'Propose an accelerated evaluation of the opportunity and recommend a governance decision based on progressive analysis' },
      { fr: "Intégrer immédiatement l'opportunité en s'appuyant sur sa valeur potentielle, et ajuster le business case plus tard", en: 'Immediately integrate the opportunity based on its potential value, and adjust the business case later' },
      { fr: "Soumettre une demande de changement formelle et attendre une validation complète avant toute action, malgré la pression du sponsor", en: 'Submit a formal change request and wait for full validation before any action, despite the sponsor’s pressure' },
      { fr: "Re-prioriser seul le backlog avec le sponsor, sans passer par la gouvernance", en: 'Re-prioritize the backlog alone with the sponsor, bypassing governance' },
    ],
    correct: 0,
    explanation: {
      fr: "Une décision adaptative, progressive et encadrée équilibre vitesse et gouvernance : agir sans contrôle (intégrer immédiatement) sacrifie la valeur analytique, attendre une validation complète (trop lent) perd l'opportunité, et court-circuiter la gouvernance avec le seul sponsor est un piège agile classique. L'évaluation accélérée avec décision de gouvernance progressive est le bon équilibre.",
      en: 'A progressive, adaptive, governed decision balances speed and governance: acting without control (integrate immediately) sacrifices analytical rigor, waiting for full validation (too slow) loses the opportunity, and bypassing governance with just the sponsor is a classic agile trap. An accelerated evaluation with a progressive governance decision is the right balance.',
    },
  },
  {
    id: 'xg10',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Un programme prédictif applique une gouvernance très formelle (validation de chaque jalon par un comité), tandis qu'une équipe agile du même portefeuille est totalement auto-gouvernée. Un dirigeant s'en étonne et demande d'uniformiser le niveau de gouvernance entre les deux. Quelle est la MEILLEURE réponse ?",
      en: 'A predictive program applies very formal governance (every milestone validated by a committee), while an agile team in the same portfolio is fully self-governed. An executive is surprised and asks to standardize the governance level across both. What is the BEST response?',
    },
    options: [
      { fr: "Expliquer que la gouvernance doit être adaptée à l'approche et au contexte de chaque projet, et non uniformisée arbitrairement", en: 'Explain that governance must be tailored to each project’s approach and context, not arbitrarily standardized' },
      { fr: "Accepter d'imposer la gouvernance formelle du programme prédictif à l'équipe agile pour satisfaire le dirigeant", en: 'Agree to impose the predictive program’s formal governance on the agile team to satisfy the executive' },
      { fr: "Accepter de supprimer toute gouvernance formelle du programme prédictif pour l'aligner sur l'équipe agile", en: 'Agree to remove all formal governance from the predictive program to match the agile team' },
      { fr: "Ignorer la demande, la gouvernance ne devant jamais être discutée avec la direction", en: 'Ignore the request, since governance should never be discussed with leadership' },
    ],
    correct: 0,
    explanation: {
      fr: "La gouvernance s'adapte au secteur, à la réglementation, à l'organisation et à la complexité de CHAQUE projet — l'uniformiser arbitrairement entre un contexte prédictif et un contexte agile va à l'encontre du principe même d'adaptation de la gouvernance.",
      en: 'Governance adapts to the sector, regulation, organization and complexity of EACH project — arbitrarily standardizing it between a predictive and an agile context runs against the very principle of governance adaptation.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xg11',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Sélectionnez les DEUX scénarios qui déclenchent typiquement une revue institutionnelle de gouvernance.",
      en: 'Select the TWO scenarios that typically trigger an institutional governance review.',
    },
    options: [
      { fr: "Une replanification majeure du budget ou du planning pour préserver la valeur", en: 'A major budget or schedule replanning to preserve value' },
      { fr: "Un arrêt anticipé, positif ou négatif", en: 'An early termination, positive or negative' },
      { fr: "Une réunion quotidienne de synchronisation d'équipe", en: 'A daily team sync meeting' },
      { fr: "Une conversation informelle entre deux membres de l'équipe", en: 'An informal conversation between two team members' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Le démarrage, la replanification, l'extension/réduction du périmètre et l'arrêt anticipé (positif ou négatif) sont les scénarios de gouvernance classiques. Les réunions quotidiennes et conversations informelles relèvent du pilotage d'exécution courant, pas d'une revue de gouvernance.",
      en: 'Startup, replanning, scope extension/reduction, and early termination (positive or negative) are the classic governance scenarios. Daily meetings and informal conversations belong to routine execution steering, not a governance review.',
    },
  },
  {
    id: 'xg12',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes sur l'adaptation de la gouvernance selon l'approche du projet.",
      en: 'Select the TWO accurate statements about tailoring governance to the project approach.',
    },
    options: [
      { fr: "En approche prédictive, la gouvernance tend à être plus formelle et structurée (sponsor, PMO, comité)", en: 'In a predictive approach, governance tends to be more formal and structured (sponsor, PMO, committee)' },
      { fr: "En approche adaptative/agile, la gouvernance tend à être légère avec des équipes auto-gouvernées", en: 'In an adaptive/agile approach, governance tends to be lightweight with self-governed teams' },
      { fr: "En approche hybride, la gouvernance doit toujours copier intégralement le modèle prédictif", en: 'In a hybrid approach, governance must always fully copy the predictive model' },
      { fr: "L'approche du projet n'a aucune influence sur le niveau de gouvernance approprié", en: 'The project’s approach has no influence on the appropriate governance level' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Prédictif → gouvernance plus formelle ; adaptatif → gouvernance légère et auto-gouvernée ; hybride → gouvernance équilibrée et itérative, PAS une copie intégrale du modèle prédictif. L'approche influence directement le niveau de gouvernance approprié.",
      en: 'Predictive → more formal governance; adaptive → lightweight, self-governed; hybrid → balanced and iterative governance, NOT a full copy of the predictive model. The approach directly influences the appropriate governance level.',
    },
  },
]
