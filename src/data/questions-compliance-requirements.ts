import type { Question } from '../types'

/**
 * Batch covering project compliance (categories, continuous checks, cost of
 * non-compliance, PMO vs team responsibility) and requirements/OKR topics
 * (DoR vs DoD, the 70% OKR rule, MoSCoW/Kano/paired comparison/100-point
 * prioritization, epic/feature hierarchy), companion to the tp-compliance
 * and tp-requirements revision sheets.
 */
export const COMPLIANCE_REQUIREMENTS_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xr01',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-01',
    question: {
      fr: "Qui est responsable de la conformité aux exigences légales et réglementaires d'un projet ?",
      en: "Who is responsible for a project's compliance with legal and regulatory requirements?",
    },
    options: [
      { fr: "Le PMO surveille la conformité au niveau organisationnel, et l'équipe projet reste responsable de la conformité de ses propres activités", en: 'The PMO monitors compliance at the organizational level, and the project team remains responsible for compliance in its own activities' },
      { fr: "Uniquement le PMO, l'équipe projet n'a pas à s'en soucier", en: "Only the PMO — the project team doesn't need to worry about it" },
      { fr: "Uniquement le chef de projet, à titre personnel", en: 'Only the project manager, personally' },
      { fr: "Uniquement le service juridique de l'organisation", en: "Only the organization's legal department" },
    ],
    correct: 0,
    explanation: {
      fr: "La conformité est une responsabilité PARTAGÉE à deux échelles : le PMO au niveau organisationnel, l'équipe projet sur ses propres processus, livrables et fournisseurs.",
      en: 'Compliance is a SHARED responsibility at two scales: the PMO at the organizational level, the project team over its own processes, deliverables and vendors.',
    },
  },
  {
    id: 'xr02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Que signifie la Définition de « Prêt » (DoR) pour une exigence ou un récit utilisateur ?",
      en: 'What does the Definition of Ready (DoR) mean for a requirement or user story?',
    },
    options: [
      { fr: "La liste de contrôle de ce qui doit être en place AVANT que l'équipe commence à travailler dessus", en: 'The checklist of what must be in place BEFORE the team starts working on it' },
      { fr: "La liste de contrôle confirmant que le travail est terminé et prêt pour le client", en: 'The checklist confirming the work is finished and ready for the customer' },
      { fr: "Un synonyme strict de la Définition de « Terminé » (DoD)", en: 'A strict synonym for the Definition of Done (DoD)' },
      { fr: "Un document utilisé uniquement dans les projets prédictifs", en: 'A document used only in predictive projects' },
    ],
    correct: 0,
    explanation: {
      fr: "La DoR est un critère d'ENTRÉE : ce qui doit être en place pour que l'équipe puisse commencer le travail. La DoD est un critère de SORTIE, comparable aux critères d'acceptation en prédictif.",
      en: 'The DoR is an ENTRY criterion: what must be in place for the team to start work. The DoD is an EXIT criterion, comparable to acceptance criteria in predictive projects.',
    },
  },
  {
    id: 'xr03',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Dans le cadre OKR (Objectifs et Résultats Clés), combien de résultats clés soutiennent typiquement un objectif ?",
      en: 'In the OKR framework (Objectives and Key Results), how many key results typically support one objective?',
    },
    options: [
      { fr: 'Trois à cinq', en: 'Three to five' },
      { fr: 'Exactement un', en: 'Exactly one' },
      { fr: 'Dix ou plus', en: 'Ten or more' },
      { fr: "Cela n'a aucune importance", en: 'It does not matter' },
    ],
    correct: 0,
    explanation: {
      fr: "Un objectif OKR est soutenu par trois à cinq résultats clés, spécifiques, mesurables et limités dans le temps.",
      en: 'An OKR objective is supported by three to five key results, specific, measurable and time-bound.',
    },
  },
  {
    id: 'xr04',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-01',
    question: {
      fr: "Selon les bonnes pratiques de gestion de la conformité, à quel moment les contrôles de conformité doivent-ils être effectués ?",
      en: 'Per compliance management best practices, when should compliance checks be performed?',
    },
    options: [
      { fr: "À différentes étapes du projet, de manière continue, et avant la fin du projet", en: 'At different stages of the project, continuously, and before the project ends' },
      { fr: "Uniquement à la toute fin du projet, lors de la clôture", en: 'Only at the very end of the project, during closure' },
      { fr: "Uniquement au lancement du projet", en: 'Only at project kickoff' },
      { fr: "Seulement si un incident de conformité est signalé", en: 'Only if a compliance incident is reported' },
    ],
    correct: 0,
    explanation: {
      fr: "La conformité s'évalue en continu, à différentes étapes du projet, et doit être vérifiée AVANT la fin du projet pour éviter de transférer des problèmes non résolus en aval.",
      en: 'Compliance is assessed continuously, at different stages of the project, and must be verified BEFORE the project ends to avoid transferring unresolved problems downstream.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xr05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "À la fin d'un trimestre, une équipe constate qu'elle a atteint 100 % de tous ses résultats clés OKR. Quelle est la lecture attendue de ce résultat ?",
      en: 'At the end of a quarter, a team finds it achieved 100% of all its OKR key results. What is the expected reading of this outcome?',
    },
    options: [
      { fr: "Ce taux doit être réexaminé : il révèle probablement un niveau de difficulté insuffisant plutôt qu'un franc succès", en: 'This rate should be reconsidered: it probably reveals insufficient difficulty rather than an outright win' },
      { fr: "C'est un succès total à célébrer sans réserve", en: 'It is a total success to celebrate without reservation' },
      { fr: "Cela prouve que l'équipe doit revoir ses résultats clés à la baisse pour le trimestre suivant", en: 'It proves the team should lower its key results for the next quarter' },
      { fr: "Un taux de 100 % est impossible à atteindre, ce résultat est donc une erreur de calcul", en: 'A 100% rate is impossible to reach, so this result must be a calculation error' },
    ],
    correct: 0,
    explanation: {
      fr: "La règle OKR vise un taux de réalisation d'environ 70 % pour maintenir une dynamique ambitieuse. Un taux de 100 % doit être réexaminé car il signale des objectifs pas assez ambitieux, pas une réussite totale.",
      en: 'The OKR rule targets roughly a 70% completion rate to sustain ambitious momentum. A 100% rate should be reconsidered because it signals insufficiently ambitious goals, not an outright win.',
    },
  },
  {
    id: 'xr06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Un product owner doit prioriser un backlog de 40 exigences avec 15 parties prenantes ayant des avis divergents. Quelle technique de priorisation est la MIEUX adaptée à ce contexte ?",
      en: 'A product owner must prioritize a backlog of 40 requirements with 15 stakeholders holding divergent opinions. Which prioritization technique BEST fits this context?',
    },
    options: [
      { fr: "La méthode des 100 points : adaptée à tout type de groupe, y compris les plus grands, et favorise une réflexion approfondie", en: 'The 100-point method: suited to any group size, including large ones, and encourages deep reflection' },
      { fr: "Le modèle de Kano, conçu pour un éventail restreint d'exigences subjectives", en: 'The Kano model, designed for a narrow range of subjective requirements' },
      { fr: "La comparaison par paires, dont le nombre de comparaisons devient impraticable avec 40 éléments", en: 'Paired comparison, whose number of comparisons becomes impractical with 40 items' },
      { fr: "Aucune technique structurée n'est nécessaire avec autant de parties prenantes", en: 'No structured technique is needed with that many stakeholders' },
    ],
    correct: 0,
    explanation: {
      fr: "La méthode des 100 points (allocation fixe) est adaptée à tout type de groupe, y compris les plus grands, contrairement au modèle de Kano (éventail restreint) ou à la comparaison par paires (nombre de comparaisons qui explose avec le volume d'exigences).",
      en: 'The 100-point method (fixed allocation) suits any group size, including large ones, unlike the Kano model (narrow range) or paired comparison (comparison count explodes with requirement volume).',
    },
  },
  {
    id: 'xr07',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Un fournisseur externe livre un composant non conforme à une réglementation applicable au projet. Le chef de projet estime que cela « ne relève pas du périmètre de responsabilité du projet » puisque c'est un tiers qui a livré. Cette position est-elle correcte ?",
      en: 'An external vendor delivers a component that fails to meet a regulation applicable to the project. The PM believes this “is not the project’s responsibility” since a third party delivered it. Is this position correct?',
    },
    options: [
      { fr: "Non : les achats et travaux réalisés par des fournisseurs font explicitement partie du périmètre de responsabilité de conformité de l'équipe projet", en: 'No: procurement and vendor-performed work explicitly fall within the project team’s compliance responsibility' },
      { fr: "Oui : la responsabilité de conformité d'un tiers relève uniquement du fournisseur lui-même", en: 'Yes: a third party’s compliance responsibility belongs solely to the vendor itself' },
      { fr: "Oui, sauf si le contrat le précise explicitement", en: 'Yes, unless the contract explicitly states otherwise' },
      { fr: "La question ne peut être tranchée sans l'avis du PMO", en: 'The question cannot be settled without the PMO’s opinion' },
    ],
    correct: 0,
    explanation: {
      fr: "L'équipe projet est responsable de la conformité de ses propres activités, ce qui inclut explicitement les achats et le travail réalisé par des fournisseurs — ce n'est pas parce qu'un tiers a livré que la responsabilité disparaît.",
      en: 'The project team is responsible for compliance in its own activities, which explicitly includes procurement and vendor-performed work — a third party delivering does not make the responsibility disappear.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xr08',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-01',
    question: {
      fr: "Une équipe découvre un écart de conformité réglementaire sur une fonctionnalité, deux semaines avant la clôture prévue du projet. Corriger l'écart maintenant retarderait la clôture de trois semaines. Quelle est la MEILLEURE action du chef de projet ?",
      en: 'A team discovers a regulatory compliance gap on a feature two weeks before the planned project closure. Fixing it now would delay closure by three weeks. What is the PM’s BEST action?',
    },
    options: [
      { fr: "Résoudre le problème de conformité avant la clôture, quitte à décaler la date de fin, plutôt que de transférer le problème en aval", en: 'Resolve the compliance issue before closure, even if it pushes the end date, rather than transferring the problem downstream' },
      { fr: "Clore le projet à la date prévue et transférer la correction aux opérations après transition", en: 'Close the project on schedule and hand the fix off to operations after transition' },
      { fr: "Ignorer l'écart s'il est mineur, pour respecter le calendrier annoncé au sponsor", en: 'Ignore the gap if minor, to honor the schedule announced to the sponsor' },
      { fr: "Documenter l'écart dans les leçons apprises sans le corriger, pour le prochain projet", en: 'Document the gap in lessons learned without fixing it, for the next project' },
    ],
    correct: 0,
    explanation: {
      fr: "La conformité doit être vérifiée AVANT la fin du projet précisément pour éviter de transférer des problèmes non résolus en aval — le coût de la non-conformité (pénalités, poursuites, perte de confiance) dépasse largement celui d'un délai de clôture assumé et communiqué.",
      en: 'Compliance must be verified BEFORE the project ends precisely to avoid transferring unresolved problems downstream — the cost of non-compliance (penalties, lawsuits, loss of trust) far outweighs a communicated, deliberate closure delay.',
    },
  },
  {
    id: 'xr09',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-08',
    question: {
      fr: "Une équipe commence à travailler sur un récit utilisateur dont les maquettes ne sont pas finalisées et dont les critères d'acceptation restent flous, sous prétexte que le sprint doit démarrer à date fixe. À mi-sprint, le travail doit être largement repris faute de clarté initiale. Quel principe a été violé ?",
      en: 'A team starts work on a user story whose mockups are unfinished and whose acceptance criteria remain vague, because the sprint must start on a fixed date. Mid-sprint, the work must be largely redone for lack of initial clarity. What principle was violated?',
    },
    options: [
      { fr: "La Définition de « Prêt » (DoR) n'était pas remplie avant de démarrer le travail", en: 'The Definition of Ready (DoR) was not fulfilled before starting the work' },
      { fr: "La Définition de « Terminé » (DoD) n'a pas été respectée en fin de sprint", en: 'The Definition of Done (DoD) was not honored at the end of the sprint' },
      { fr: "Le modèle de Kano n'a pas été appliqué à ce récit utilisateur", en: 'The Kano model was not applied to this user story' },
      { fr: "L'OKR du trimestre n'a pas été correctement défini", en: 'The quarter’s OKR was not correctly defined' },
    ],
    correct: 0,
    explanation: {
      fr: "La DoR est le critère d'ENTRÉE : elle doit être remplie AVANT que l'équipe commence le travail. Démarrer malgré des maquettes et critères d'acceptation flous revient à ignorer la DoR, ce qui explique la reprise en cours de sprint.",
      en: 'The DoR is the ENTRY criterion: it must be fulfilled BEFORE the team starts the work. Starting despite unfinished mockups and vague acceptance criteria means ignoring the DoR, which explains the mid-sprint rework.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xr10',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes sur la Définition de « Prêt » (DoR) et la Définition de « Terminé » (DoD).",
      en: 'Select the TWO accurate statements about the Definition of Ready (DoR) and the Definition of Done (DoD).',
    },
    options: [
      { fr: "La DoR est un critère d'entrée : ce qui doit être en place avant que l'équipe commence le travail", en: 'The DoR is an entry criterion: what must be in place before the team starts the work' },
      { fr: "La DoD s'appuie sur la DoR et décrit l'état souhaité à l'arrivée", en: 'The DoD builds on the DoR and describes the desired end state' },
      { fr: "La DoR et la DoD sont deux noms différents pour exactement le même concept", en: 'The DoR and the DoD are two different names for exactly the same concept' },
      { fr: "La DoD n'a aucun équivalent dans les projets prédictifs", en: 'The DoD has no equivalent in predictive projects' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "La DoR (critère d'entrée) et la DoD (critère de sortie, qui s'appuie sur la DoR) sont deux concepts distincts et complémentaires. La DoD est d'ailleurs l'équivalent agile des critères d'acceptation en approche prédictive.",
      en: 'The DoR (entry criterion) and the DoD (exit criterion, building on the DoR) are two distinct, complementary concepts. The DoD is in fact agile’s equivalent of acceptance criteria in a predictive approach.',
    },
  },
  {
    id: 'xr11',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-08',
    question: {
      fr: "Sélectionnez les DEUX techniques de priorisation des exigences correctement associées à leur meilleur contexte d'usage.",
      en: 'Select the TWO requirement-prioritization techniques correctly matched to their best-fit use case.',
    },
    options: [
      { fr: "MoSCoW : comparer plusieurs points de vue et se concentrer sur les exigences les plus importantes, souvent avec le timeboxing", en: 'MoSCoW: comparing multiple viewpoints and focusing on the most important requirements, often paired with timeboxing' },
      { fr: "Le modèle de Kano : adapté à un éventail restreint d'exigences subjectives, pas à un long backlog", en: 'The Kano model: suited to a narrow range of subjective requirements, not a long backlog' },
      { fr: "La comparaison par paires : la technique la plus efficace pour prioriser plusieurs centaines d'exigences", en: 'Paired comparison: the most efficient technique for prioritizing several hundred requirements' },
      { fr: "La méthode des 100 points : réservée aux très petits groupes de 2 à 3 parties prenantes", en: 'The 100-point method: reserved for very small groups of 2–3 stakeholders' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "MoSCoW et le modèle de Kano sont bien décrits dans leur cas d'usage propre. La comparaison par paires devient au contraire IMPRATICABLE au-delà d'une poignée d'éléments (le nombre de comparaisons croît en n(n-1)/2), et la méthode des 100 points est justement adaptée à tout type de groupe, y compris les plus grands.",
      en: 'MoSCoW and the Kano model are correctly described in their own use case. Paired comparison, by contrast, becomes IMPRACTICAL beyond a handful of items (comparisons grow as n(n-1)/2), and the 100-point method is precisely suited to any group size, including large ones.',
    },
  },
]
