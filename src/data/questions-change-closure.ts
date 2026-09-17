import type { Question } from '../types'

/**
 * Batch covering material from PMI's official Lessons 9-11 (Monitoring
 * Progress, Closing the Project, Driving Organizational Continuous
 * Improvement): Kotter's 8-step change model, VUCA/PESTLE/TECOP external
 * scanning frameworks, and closure/benefits-realization roles.
 */
export const CHANGE_CLOSURE_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xk01',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-04',
    question: {
      fr: "Dans le modèle de changement en 8 étapes de Kotter, quelle est la TOUTE PREMIÈRE étape ?",
      en: 'In Kotter’s 8-step change model, what is the VERY FIRST step?',
    },
    options: [
      { fr: 'Créer un sentiment d’urgence', en: 'Create a sense of urgency' },
      { fr: 'Communiquer la vision', en: 'Communicate the vision' },
      { fr: 'Créer des victoires à court terme', en: 'Generate short-term wins' },
      { fr: 'Ancrer le changement dans la culture', en: 'Anchor the change in the culture' },
    ],
    correct: 0,
    explanation: {
      fr: "Le modèle de Kotter commence par créer un sentiment d'urgence, avant même de construire une coalition ou de formuler une vision — sans urgence perçue, l'adhésion initiale ne se forme pas.",
      en: 'Kotter’s model starts by creating a sense of urgency, even before building a coalition or forming a vision — without perceived urgency, initial buy-in never forms.',
    },
  },
  {
    id: 'xk02',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-03',
    question: {
      fr: "Quel référentiel utilise les catégories Politique, Économique, Socioculturel, Technologique, Légal et Environnemental pour scanner l'environnement externe d'un projet ?",
      en: 'Which framework uses the categories Political, Economic, Sociocultural, Technological, Legal and Environmental to scan a project’s external environment?',
    },
    options: [
      { fr: 'PESTLE', en: 'PESTLE' },
      { fr: 'VUCA', en: 'VUCA' },
      { fr: 'TECOP', en: 'TECOP' },
      { fr: 'RACI', en: 'RACI' },
    ],
    correct: 0,
    explanation: {
      fr: "PESTLE (Politique, Économique, Socioculturel, Technologique, Légal, Environnemental) est le référentiel généraliste de scan de l'environnement externe.",
      en: 'PESTLE (Political, Economic, Sociocultural, Technological, Legal, Environmental) is the general-purpose framework for scanning the external environment.',
    },
  },
  {
    id: 'xk03',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Que désigne le terme « hypercare » à la clôture d'un projet ?",
      en: 'What does the term “hypercare” refer to at project closure?',
    },
    options: [
      { fr: 'Un support renforcé post-implémentation, immédiatement après la mise en service', en: 'Intensified post-implementation support, immediately after go-live' },
      { fr: 'Un type de contrat à coûts remboursables', en: 'A type of cost-reimbursable contract' },
      { fr: 'Une technique de priorisation des exigences', en: 'A requirements prioritization technique' },
      { fr: 'Un outil de gestion de la configuration', en: 'A configuration management tool' },
    ],
    correct: 0,
    explanation: {
      fr: "L'hypercare est un support renforcé fourni juste après la mise en service, pour stabiliser l'adoption et résoudre rapidement les incidents qui surviennent.",
      en: 'Hypercare is intensified support provided right after go-live, to stabilize adoption and quickly resolve incidents as they arise.',
    },
  },
  {
    id: 'xk04',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-13',
    question: {
      fr: "Quel ensemble de pratiques vise à améliorer la collaboration entre les équipes de développement et d'exploitation pour un flux de livraison fluide ?",
      en: 'Which set of practices aims to improve collaboration between development and operations teams for a smooth delivery flow?',
    },
    options: [
      { fr: 'DevOps', en: 'DevOps' },
      { fr: 'Kaizen', en: 'Kaizen' },
      { fr: 'Scrumban', en: 'Scrumban' },
      { fr: 'Kanban', en: 'Kanban' },
    ],
    correct: 0,
    explanation: {
      fr: "DevOps désigne les pratiques rapprochant les équipes de développement et d'exploitation pour fluidifier la livraison continue, y compris après la transition du projet.",
      en: 'DevOps refers to practices bringing development and operations teams closer together to smooth continuous delivery, including after the project’s transition.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xk05',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-04',
    question: {
      fr: "Une équipe a remporté une première victoire visible dans son initiative de changement (étape 6 du modèle de Kotter) et considère que le travail est terminé. Quelle est la MEILLEURE évaluation de cette situation ?",
      en: 'A team achieved a first visible win in its change initiative (step 6 of Kotter’s model) and considers the work done. What is the BEST assessment of this situation?',
    },
    options: [
      { fr: "C'est prématuré : il reste à consolider l'élan et à ancrer durablement le changement dans la culture organisationnelle (étapes 7 et 8)", en: 'It is premature: momentum still needs consolidating and the change durably anchoring in the organizational culture (steps 7 and 8)' },
      { fr: "C'est correct : une victoire à court terme marque la fin du processus de changement", en: 'That is correct: a short-term win marks the end of the change process' },
      { fr: "Il faut revenir à l'étape 1 et recommencer le processus depuis le début", en: 'They must go back to step 1 and restart the process from the beginning' },
      { fr: "Cela dépend uniquement de la taille de l'organisation", en: 'It depends solely on the organization’s size' },
    ],
    correct: 0,
    explanation: {
      fr: "S'arrêter après une victoire rapide (étape 6) est le piège classique du modèle de Kotter : il reste deux étapes essentielles — consolider les acquis sans relâcher l'effort, puis ancrer durablement le changement dans la culture organisationnelle pour éviter un retour en arrière.",
      en: 'Stopping after an early win (step 6) is Kotter’s classic trap: two essential steps remain — building on the gains without easing off, then durably anchoring the change in the organizational culture to prevent regression.',
    },
  },
  {
    id: 'xk06',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Six mois après la clôture d'un projet prédictif, qui est généralement responsable de vérifier que les bénéfices attendus sont effectivement réalisés ?",
      en: 'Six months after a predictive project closes, who is generally responsible for verifying that the expected benefits are actually being realized?',
    },
    options: [
      { fr: "Le responsable des bénéfices (benefits owner), désigné dans le plan de gestion des bénéfices, qui survit à la clôture du projet", en: 'The benefits owner, designated in the benefits management plan, who outlives the project closure' },
      { fr: "Le chef de projet, qui reste en poste indéfiniment après la clôture", en: 'The project manager, who remains in post indefinitely after closure' },
      { fr: "Personne : la responsabilité s'arrête à la clôture du projet", en: 'No one: responsibility ends at project closure' },
      { fr: "L'équipe projet, qui est maintenue en place spécifiquement pour cela", en: 'The project team, kept in place specifically for this purpose' },
    ],
    correct: 0,
    explanation: {
      fr: "Le responsable des bénéfices (analyste métier, commanditaire ou responsable des opérations) est désigné dans le plan de gestion des bénéfices précisément parce que la réalisation des bénéfices se mesure souvent bien après la clôture — le chef de projet et l'équipe ne restent pas en poste indéfiniment.",
      en: 'The benefits owner (a business analyst, sponsor or operations manager) is designated in the benefits management plan precisely because benefits realization is often measured well after closure — the PM and team do not stay in post indefinitely.',
    },
  },
  {
    id: 'xk07',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-03',
    question: {
      fr: "Un projet identifie que l'incertitude, la volatilité, la complexité et l'ambiguïté de son environnement rendent la planification détaillée peu fiable. Quel acronyme résume précisément cette combinaison de facteurs ?",
      en: 'A project identifies that the uncertainty, volatility, complexity and ambiguity of its environment make detailed planning unreliable. What acronym precisely summarizes this combination of factors?',
    },
    options: [
      { fr: 'VUCA', en: 'VUCA' },
      { fr: 'PESTLE', en: 'PESTLE' },
      { fr: 'TECOP', en: 'TECOP' },
      { fr: 'RAM', en: 'RAM' },
    ],
    correct: 0,
    explanation: {
      fr: "VUCA (Volatilité, Incertitude, Complexité, Ambiguïté) résume précisément cette combinaison de facteurs qui caractérise l'environnement type d'un projet moderne, contrairement à PESTLE et TECOP qui sont des référentiels de scan par CATÉGORIES de facteurs externes (politique, économique...).",
      en: 'VUCA (Volatility, Uncertainty, Complexity, Ambiguity) precisely summarizes this combination of factors characterizing a modern project’s typical environment, unlike PESTLE and TECOP, which are scanning frameworks organized by CATEGORIES of external factors (political, economic...).',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xk08',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-04',
    question: {
      fr: "Une organisation lance une transformation majeure en formulant immédiatement une vision détaillée et en assignant des tâches d'exécution, sans avoir préalablement établi de sentiment d'urgence ni constitué de coalition d'alliés influents. L'initiative rencontre une résistance généralisée. Selon le modèle de Kotter, quelle est la MEILLEURE explication ?",
      en: 'An organization launches a major transformation by immediately formulating a detailed vision and assigning execution tasks, without first establishing a sense of urgency or building a coalition of influential allies. The initiative meets widespread resistance. Per Kotter’s model, what is the BEST explanation?',
    },
    options: [
      { fr: "Les deux premières étapes (urgence, coalition) ont été sautées : sans adhésion préalable, l'action rencontre une résistance qui aurait pu être anticipée et atténuée", en: 'The first two steps (urgency, coalition) were skipped: without prior buy-in, the action meets resistance that could have been anticipated and mitigated' },
      { fr: "La vision était mal formulée, c'est la seule cause possible de résistance selon le modèle", en: 'The vision was poorly formulated — the model’s only possible cause of resistance' },
      { fr: "Le modèle de Kotter ne s'applique pas aux transformations majeures, seulement aux petits changements", en: 'Kotter’s model does not apply to major transformations, only to small changes' },
      { fr: "La résistance est aléatoire et ne peut être reliée à l'ordre des étapes suivies", en: 'Resistance is random and cannot be linked to the order of steps followed' },
    ],
    correct: 0,
    explanation: {
      fr: "Sauter les étapes fondatrices (urgence, coalition d'alliés) pour foncer vers la vision et l'action est le piège symétrique à s'arrêter trop tôt : sans adhésion et relais d'influence construits en amont, l'exécution rencontre une résistance que les premières étapes auraient permis d'anticiper.",
      en: 'Skipping the foundational steps (urgency, ally coalition) to rush to vision and action is the mirror trap to stopping too early: without buy-in and influence relays built upstream, execution meets resistance the early steps would have let the organization anticipate.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xk09',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-04',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes sur le modèle de changement en 8 étapes de Kotter.",
      en: 'Select the TWO accurate statements about Kotter’s 8-step change model.',
    },
    options: [
      { fr: "L'étape 1 consiste à créer un sentiment d'urgence, avant toute formulation de vision", en: 'Step 1 is creating a sense of urgency, before any vision is formulated' },
      { fr: "Les étapes 7 et 8 consistent à consolider l'élan et à ancrer le changement dans la culture organisationnelle", en: 'Steps 7 and 8 are consolidating momentum and anchoring the change in the organizational culture' },
      { fr: "Le modèle recommande d'éviter toute victoire visible avant la toute fin du processus", en: 'The model recommends avoiding any visible win until the very end of the process' },
      { fr: "Le modèle ne comporte que 5 étapes principales", en: 'The model has only 5 main steps' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Le modèle de Kotter comporte bien 8 étapes, commençant par l'urgence et se terminant par la consolidation de l'élan (7) puis l'ancrage culturel (8). Il recommande au contraire de générer des victoires à COURT TERME (étape 6), pas de les éviter jusqu'à la fin.",
      en: 'Kotter’s model does have 8 steps, starting with urgency and ending with consolidating momentum (7) then cultural anchoring (8). It actually recommends generating SHORT-TERM wins (step 6), not avoiding them until the end.',
    },
  },
  {
    id: 'xk10',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-03',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes distinguant VUCA de PESTLE/TECOP.",
      en: 'Select the TWO accurate statements distinguishing VUCA from PESTLE/TECOP.',
    },
    options: [
      { fr: "VUCA résume un ÉTAT de l'environnement (volatilité, incertitude, complexité, ambiguïté), tandis que PESTLE/TECOP structurent un SCAN par catégories de facteurs externes", en: 'VUCA summarizes a STATE of the environment (volatility, uncertainty, complexity, ambiguity), while PESTLE/TECOP structure a SCAN by categories of external factors' },
      { fr: "PESTLE est plus généraliste, tandis que TECOP est davantage centré sur l'exécution du projet", en: 'PESTLE is more general-purpose, while TECOP is more focused on project execution' },
      { fr: "VUCA, PESTLE et TECOP sont trois noms différents pour exactement le même outil", en: 'VUCA, PESTLE and TECOP are three different names for exactly the same tool' },
      { fr: "PESTLE et TECOP ne s'appliquent qu'aux projets purement agiles", en: 'PESTLE and TECOP only apply to purely agile projects' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "VUCA décrit la NATURE de l'environnement projet, alors que PESTLE et TECOP sont des grilles d'ANALYSE par catégories pour scanner cet environnement — PESTLE en généraliste, TECOP davantage tourné vers l'exécution. Ce ne sont pas des synonymes, et aucun des trois n'est réservé à l'agile.",
      en: 'VUCA describes the NATURE of the project environment, while PESTLE and TECOP are category-based ANALYSIS grids for scanning that environment — PESTLE general-purpose, TECOP more execution-focused. They are not synonyms, and none of the three is reserved for agile.',
    },
  },
]
