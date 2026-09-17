import type { Question } from '../types'

/**
 * Batch covering material from PMI's official Lessons 01-02-04 (Foundation,
 * Laying the Foundation, Building the Plan): the Stacey complexity model,
 * the two independent dimensions of project success, RACI depth, requirement
 * types, the Agile CoE as a 4th PMO type, and the threshold/tolerance
 * escalation chain.
 */
export const FOUNDATIONS_PLANNING_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xf01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-13',
    question: {
      fr: "Dans le modèle de complexité de Stacey, une zone où les exigences ET l'aptitude technique sont TOUTES DEUX incertaines correspond à quelle catégorie ?",
      en: 'In the Stacey complexity model, a zone where BOTH requirements and technical aptitude are uncertain corresponds to which category?',
    },
    options: [
      { fr: 'Complexe', en: 'Complex' },
      { fr: 'Compliqué', en: 'Complicated' },
      { fr: 'Simple', en: 'Simple' },
      { fr: 'Chaotique', en: 'Chaotic' },
    ],
    correct: 0,
    explanation: {
      fr: "Compliqué signifie qu'UNE seule dimension est incertaine (l'expertise suffit) ; complexe signifie que LES DEUX le sont, ce qui appelle une approche adaptative et l'expérimentation.",
      en: 'Complicated means only ONE dimension is uncertain (expertise suffices); complex means BOTH are, calling for an adaptive approach and experimentation.',
    },
  },
  {
    id: 'xf02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Quel type de bureau de gestion de projet (PMO) coache les équipes et développe l'état d'esprit agile à l'échelle de l'organisation, sans gérer directement les ressources des projets ?",
      en: 'Which type of PMO coaches teams and develops an agile mindset across the organization, without directly managing project resources?',
    },
    options: [
      { fr: "Le Centre d'Excellence Agile", en: 'The Agile Center of Excellence' },
      { fr: 'Le PMO directif', en: 'The directive PMO' },
      { fr: 'Le PMO de contrôle', en: 'The controlling PMO' },
      { fr: 'Le PMO de soutien', en: 'The supportive PMO' },
    ],
    correct: 0,
    explanation: {
      fr: "Le Centre d'Excellence Agile coache les équipes, développe les compétences et l'état d'esprit agile, et guide commanditaires et product owners — un rôle de diffusion culturelle, pas de contrôle hiérarchique.",
      en: 'The Agile Center of Excellence coaches teams, develops agile skills and mindset, and guides sponsors and product owners — a culture-spreading role, not hierarchical control.',
    },
  },
  {
    id: 'xf03',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-06',
    question: {
      fr: "Dans une matrice RACI, combien de personnes peuvent être désignées « Redevable » (Accountable) pour une même tâche ?",
      en: 'In a RACI matrix, how many people can be designated “Accountable” for the same task?',
    },
    options: [
      { fr: 'Exactement une seule', en: 'Exactly one' },
      { fr: 'Autant que nécessaire', en: 'As many as needed' },
      { fr: 'Zéro, ce rôle est optionnel', en: 'Zero, this role is optional' },
      { fr: 'Deux au maximum', en: 'Two at most' },
    ],
    correct: 0,
    explanation: {
      fr: "Chaque tâche a exactement UNE personne redevable (Accountable), qui délègue et valide le travail. Le rôle Responsible (réalise le travail), lui, peut être partagé par plusieurs personnes.",
      en: 'Each task has exactly ONE accountable person, who delegates and reviews the work. The Responsible role (does the work), by contrast, can be shared by several people.',
    },
  },
  {
    id: 'xf04',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Une exigence précise qu'un site web doit pouvoir supporter 10 000 utilisateurs simultanés sans dégradation de performance. De quel type d'exigence s'agit-il ?",
      en: 'A requirement specifies that a website must support 10,000 concurrent users without performance degradation. What type of requirement is this?',
    },
    options: [
      { fr: 'Non fonctionnelle', en: 'Non-functional' },
      { fr: 'Fonctionnelle', en: 'Functional' },
      { fr: "Exigence d'entreprise", en: 'Business requirement' },
      { fr: 'Exigence de transition', en: 'Transition requirement' },
    ],
    correct: 0,
    explanation: {
      fr: "Une exigence non fonctionnelle décrit une qualité ou une condition environnementale (performance, sécurité, disponibilité) qui rend le produit efficace, par opposition à une exigence fonctionnelle qui décrit CE QUE le produit doit faire.",
      en: 'A non-functional requirement describes a quality or environmental condition (performance, security, availability) that makes the product effective, as opposed to a functional requirement, which describes WHAT the product must do.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xf05',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "L'Opéra de Sydney a été livré avec un dépassement massif de budget et de délai (102 M AUD au lieu de 7 M AUD prévus, 14 ans au lieu de 4), mais reste une icône mondiale classée à l'UNESCO qui génère de la valeur depuis des décennies. Comment qualifier ce projet selon les deux dimensions de la réussite ?",
      en: 'The Sydney Opera House was delivered with a massive budget and schedule overrun (AUD 102M instead of a planned AUD 7M, 14 years instead of 4), yet remains a global UNESCO-listed icon generating value for decades. How should this project be characterized per the two dimensions of success?',
    },
    options: [
      { fr: "Échec du processus de management, mais réussite du résultat", en: 'A management process failure, but an outcome success' },
      { fr: 'Échec total : le dépassement de budget invalide toute réussite', en: 'A total failure: the budget overrun invalidates any success' },
      { fr: "Réussite totale : l'icône mondiale efface le dépassement", en: 'A total success: the global icon erases the overrun' },
      { fr: 'Un cas impossible à évaluer sans plus de données', en: 'A case impossible to assess without more data' },
    ],
    correct: 0,
    explanation: {
      fr: "Les deux dimensions de la réussite sont INDÉPENDANTES : la réussite des processus de management (respect du budget/délai) a clairement échoué, mais la réussite des résultats (valeur créée, image, tourisme) est éclatante. Un projet peut réussir sur une dimension et échouer sur l'autre.",
      en: 'The two dimensions of success are INDEPENDENT: management process success (respecting budget/schedule) clearly failed, but outcome success (value created, brand, tourism) is resounding. A project can succeed on one dimension and fail on the other.',
    },
  },
  {
    id: 'xf06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Une équipe projet identifie un léger dépassement de coût qui reste dans la tolérance budgétaire fixée par l'organisation. Que doit faire le chef de projet ?",
      en: 'A project team identifies a slight cost overrun that stays within the organization’s budget tolerance. What should the project manager do?',
    },
    options: [
      { fr: "Résoudre la situation avec l'équipe projet, sans escalader : le seuil n'est pas franchi", en: 'Resolve it with the project team, without escalating: the threshold has not been crossed' },
      { fr: 'Escalader immédiatement au sponsor par précaution', en: 'Immediately escalate to the sponsor as a precaution' },
      { fr: 'Ignorer le dépassement puisqu’il est mineur', en: 'Ignore the overrun since it is minor' },
      { fr: "Soumettre une demande de changement formelle au comité de gouvernance", en: 'Submit a formal change request to the governance committee' },
    ],
    correct: 0,
    explanation: {
      fr: "Tant qu'un écart reste DANS la tolérance fixée (la variation acceptable), l'équipe projet le traite elle-même. L'escalade au niveau supérieur n'est requise que lorsque le SEUIL (le point de déclenchement obligatoire) est franchi.",
      en: 'As long as a variance stays WITHIN the set tolerance (the acceptable variation), the project team handles it itself. Escalation to a higher level is only required once the THRESHOLD (the mandatory trigger point) is crossed.',
    },
  },
  {
    id: 'xf07',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-13',
    question: {
      fr: "Un projet a des exigences bien définies et stables, mais l'équipe doit utiliser une technologie qu'elle n'a jamais mise en œuvre auparavant. Selon le modèle de Stacey, quelle est la MEILLEURE réponse ?",
      en: 'A project has well-defined, stable requirements, but the team must use a technology it has never implemented before. Per the Stacey model, what is the BEST response?',
    },
    options: [
      { fr: "Faire appel à une expertise externe ou former l'équipe sur cette technologie : la situation est COMPLIQUÉE, pas complexe", en: 'Bring in outside expertise or train the team on this technology: the situation is COMPLICATED, not complex' },
      { fr: "Basculer immédiatement vers des itérations courtes façon approche adaptative", en: 'Immediately switch to short iterations, an adaptive-style approach' },
      { fr: "Traiter la situation comme chaotique et stabiliser avant toute planification", en: 'Treat the situation as chaotic and stabilize before any planning' },
      { fr: "Ignorer le risque technique puisque les exigences sont stables", en: 'Ignore the technical risk since requirements are stable' },
    ],
    correct: 0,
    explanation: {
      fr: "Exigences claires + technique incertaine = une seule dimension incertaine → zone COMPLIQUÉE. L'expertise (interne ou externe) ou la formation suffit ; il n'est pas nécessaire de basculer vers une approche entièrement adaptative réservée aux situations où LES DEUX dimensions sont incertaines.",
      en: 'Clear requirements + uncertain technique = only one uncertain dimension → COMPLICATED zone. Expertise (internal or external) or training suffices; there is no need to switch to a fully adaptive approach, reserved for situations where BOTH dimensions are uncertain.',
    },
  },
  {
    id: 'xf08',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Un document précise que, six mois après la mise en service d'un nouveau système, les employés devront suivre une formation transitoire et que l'ancien système restera disponible en parallèle pendant deux mois. À quel type d'exigence cela correspond-il principalement ?",
      en: 'A document specifies that six months after a new system goes live, employees will need transitional training and the old system will remain available in parallel for two months. What requirement type does this mainly represent?',
    },
    options: [
      { fr: 'Exigence de transition/préparation', en: 'Transition/readiness requirement' },
      { fr: 'Exigence non fonctionnelle', en: 'Non-functional requirement' },
      { fr: "Exigence d'entreprise", en: 'Business requirement' },
      { fr: 'Exigence de partie prenante', en: 'Stakeholder requirement' },
    ],
    correct: 0,
    explanation: {
      fr: "Les exigences de transition/préparation décrivent les capacités TEMPORAIRES nécessaires pour basculer vers l'état futur souhaité (formation, période de coexistence des systèmes) — souvent oubliées bien qu'elles conditionnent l'adoption réelle.",
      en: 'Transition/readiness requirements describe the TEMPORARY capabilities needed to move to the desired future state (training, a system-coexistence period) — often overlooked though they condition real adoption.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xf09',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Le viaduc de Montréal a été livré à temps et proche du budget prévu, mais mal aligné avec la conception du pont ; il a dû être démoli un an après sa livraison. Comment ce cas illustre-t-il l'indépendance des deux dimensions de la réussite ?",
      en: 'The Montreal viaduct was delivered on time and close to budget, but poorly aligned with the bridge’s design; it had to be demolished one year after delivery. How does this case illustrate the independence of the two success dimensions?',
    },
    options: [
      { fr: "Le respect des contraintes (processus) n'a pas empêché un échec du résultat : aucune valeur durable n'a été créée, ce qui rend la réussite du processus sans objet", en: 'Meeting the constraints (process) did not prevent an outcome failure: no lasting value was created, rendering the process success moot' },
      { fr: "Le respect du budget garantit automatiquement la réussite du résultat", en: 'Meeting the budget automatically guarantees outcome success' },
      { fr: "Ce cas prouve que les deux dimensions sont en réalité toujours corrélées", en: 'This case proves the two dimensions are in fact always correlated' },
      { fr: "La démolition invalide rétroactivement la réussite du processus initial", en: 'The demolition retroactively invalidates the original process success' },
    ],
    correct: 0,
    explanation: {
      fr: "Le viaduc illustre le cas inverse de l'Opéra de Sydney : succès de PROCESSUS (délai, budget respectés) mais échec de RÉSULTAT (aucune valeur durable, démolition). Les deux dimensions restent indépendantes — l'une ne garantit ni n'efface l'autre, et le succès de processus initial reste un fait historique même si le résultat s'avère un échec.",
      en: 'The viaduct illustrates the mirror case of the Sydney Opera House: PROCESS success (on time, on budget) but OUTCOME failure (no lasting value, demolition). The two dimensions remain independent — one neither guarantees nor erases the other, and the original process success remains a historical fact even though the outcome proved a failure.',
    },
  },
  {
    id: 'xf10',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Un chef de projet remonte systématiquement au sponsor chaque écart de coût, même minime et dans la tolérance fixée, « pour être transparent ». Une partie prenante senior s'en plaint, jugeant cela une perte de temps pour la gouvernance. Quelle est la MEILLEURE analyse ?",
      en: 'A PM systematically escalates every cost variance to the sponsor, even minor ones within the set tolerance, “to be transparent”. A senior stakeholder complains this wastes governance’s time. What is the BEST analysis?',
    },
    options: [
      { fr: "La partie prenante a raison : les écarts dans la tolérance doivent être résolus au niveau de l'équipe, l'escalade est réservée au franchissement du seuil", en: 'The stakeholder is right: variances within tolerance should be resolved at the team level, escalation is reserved for crossing the threshold' },
      { fr: "Le chef de projet a raison : plus de transparence est toujours préférable, quel que soit le volume d'escalades", en: 'The PM is right: more transparency is always preferable, regardless of escalation volume' },
      { fr: "Le seuil et la tolérance sont des synonymes, la remarque de la partie prenante n'a pas de fondement technique", en: 'Threshold and tolerance are synonyms, the stakeholder’s remark has no technical basis' },
      { fr: "Il faut d'abord redéfinir la charte du projet avant de trancher", en: 'The project charter must be redefined first before deciding' },
    ],
    correct: 0,
    explanation: {
      fr: "La transparence ne justifie pas une escalade systématique : la gouvernance repose précisément sur la distinction seuil/tolérance pour éviter la sur-sollicitation. Remonter chaque écart mineur dilue l'attention de la gouvernance sur les vrais signaux — la bonne pratique est de résoudre dans la tolérance et de réserver l'escalade au dépassement du seuil.",
      en: 'Transparency does not justify systematic escalation: governance precisely relies on the threshold/tolerance distinction to avoid over-solicitation. Escalating every minor variance dilutes governance’s attention from real signals — best practice is to resolve within tolerance and reserve escalation for threshold breaches.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xf11',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-06',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes sur les rôles d'une matrice RACI.",
      en: 'Select the TWO accurate statements about the roles in a RACI matrix.',
    },
    options: [
      { fr: "Le rôle Consulté (C) implique un échange à double sens, contrairement au rôle Informé (I) qui est à sens unique", en: 'The Consulted (C) role involves a two-way exchange, unlike the Informed (I) role which is one-way' },
      { fr: "Chaque tâche doit avoir au moins une personne désignée Responsable (R)", en: 'Every task must have at least one person designated Responsible (R)' },
      { fr: "Toutes les tâches ou tous les jalons nécessitent obligatoirement une personne Consultée", en: 'Every task or milestone mandatorily requires a Consulted person' },
      { fr: "Le rôle Redevable (A) peut être partagé par plusieurs personnes sur une même tâche", en: 'The Accountable (A) role can be shared by several people on the same task' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Consulté est un échange bidirectionnel (contributions et retours), Informé est unidirectionnel (tenu au courant sans détail) — et chaque tâche a au moins un Responsable. En revanche, toutes les tâches n'ont pas besoin d'une personne Consultée, et il n'y a qu'UN SEUL Redevable par tâche, jamais plusieurs.",
      en: 'Consulted is a two-way exchange (input and feedback), Informed is one-way (kept up to date with no detail) — and every task has at least one Responsible person. However, not every task needs a Consulted person, and there is only ONE Accountable person per task, never several.',
    },
  },
  {
    id: 'xf12',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-08',
    question: {
      fr: "Sélectionnez les DEUX types d'exigences correctement associés à leur description.",
      en: 'Select the TWO requirement types correctly matched to their description.',
    },
    options: [
      { fr: "Exigence d'entreprise : décrit les besoins organisationnels de haut niveau et la raison d'être du projet", en: 'Business requirement: describes high-level organizational needs and the project’s reason for being' },
      { fr: "Exigence de partie prenante : décrit les fonctionnalités techniques internes du produit", en: 'Stakeholder requirement: describes the product’s internal technical functionality' },
      { fr: "Exigence de qualité : décrit les conditions nécessaires pour valider un livrable", en: 'Quality requirement: describes the conditions needed to validate a deliverable' },
      { fr: "Exigence de transition : décrit les fonctionnalités permanentes du produit final", en: 'Transition requirement: describes the final product’s permanent features' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Exigence d'entreprise et exigence de qualité sont bien décrites. L'exigence de partie prenante décrit en réalité les BESOINS d'un groupe de parties prenantes (pas la technique interne), et l'exigence de transition décrit des capacités TEMPORAIRES pour la bascule, pas des fonctionnalités permanentes.",
      en: 'Business requirement and quality requirement are correctly described. Stakeholder requirement actually describes a stakeholder group’s NEEDS (not internal technique), and transition requirement describes TEMPORARY capabilities for the cutover, not permanent features.',
    },
  },
]
