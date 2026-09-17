import type { Question } from '../types'

/**
 * Batch covering organizational structures / PMO types / governance
 * (process-14) and project selection / business case financial criteria
 * (business-02), companion to the tp-org-structures and tp-selection
 * revision sheets.
 */
export const ORG_SELECTION_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xo01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Dans une organisation matricielle FAIBLE, qui détient généralement le plus d'autorité sur l'affectation des ressources ?",
      en: 'In a WEAK matrix organization, who generally holds the most authority over resource assignment?',
    },
    options: [
      { fr: 'Le responsable fonctionnel', en: 'The functional manager' },
      { fr: 'Le chef de projet', en: 'The project manager' },
      { fr: 'Le PMO directif', en: 'The directive PMO' },
      { fr: "L'équipe projet elle-même", en: 'The project team itself' },
    ],
    correct: 0,
    explanation: {
      fr: "En matricielle faible, le responsable fonctionnel domine et le chef de projet joue un rôle proche du coordinateur : il doit négocier ou convaincre plutôt qu'affecter directement.",
      en: 'In a weak matrix, the functional manager dominates and the PM plays a role closer to coordinator: they must negotiate or persuade rather than assign directly.',
    },
  },
  {
    id: 'xo02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Quel type de PMO se limite à fournir des conseils, des modèles et une bibliothèque de leçons apprises, sans exiger de conformité ?",
      en: 'Which PMO type is limited to giving advice, templates and a lessons-learned library, without requiring compliance?',
    },
    options: [
      { fr: 'Le PMO de soutien', en: 'The supportive PMO' },
      { fr: 'Le PMO de contrôle', en: 'The controlling PMO' },
      { fr: 'Le PMO directif', en: 'The directive PMO' },
      { fr: "Le comité d'investissement", en: 'The investment committee' },
    ],
    correct: 0,
    explanation: {
      fr: "Le PMO de soutien a un contrôle faible : rôle consultatif, sans obligation de conformité. Le PMO de contrôle exige la conformité à un cadre ; le PMO directif gère les projets lui-même.",
      en: 'The supportive PMO has low control: a consultative role, with no compliance obligation. The controlling PMO requires framework compliance; the directive PMO manages projects itself.',
    },
  },
  {
    id: 'xo03',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Comment appelle-t-on une dépense déjà engagée et non récupérable, qui ne doit jamais influencer une décision future ?",
      en: 'What is a cost already incurred and unrecoverable, which should never influence a future decision, called?',
    },
    options: [
      { fr: 'Un coût irrécupérable (sunk cost)', en: 'A sunk cost' },
      { fr: "Un coût d'opportunité", en: 'An opportunity cost' },
      { fr: 'Une réserve pour aléas', en: 'A contingency reserve' },
      { fr: 'Une provision pour risque', en: 'A risk provision' },
    ],
    correct: 0,
    explanation: {
      fr: "Le coût irrécupérable est déjà dépensé et ne peut être récupéré, quelle que soit la décision prise ensuite : il ne doit jamais peser dans un choix futur (piège classique de l'examen).",
      en: 'A sunk cost is already spent and cannot be recovered whatever is decided next: it must never weigh in a future choice (a classic exam trap).',
    },
  },
  {
    id: 'xo04',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Que mesure le délai de récupération (payback period) d'un projet ?",
      en: "What does a project's payback period measure?",
    },
    options: [
      { fr: "Le temps nécessaire pour récupérer l'investissement initial", en: 'The time needed to recover the initial investment' },
      { fr: 'Le taux de rentabilité interne du projet', en: "The project's internal rate of return" },
      { fr: 'La valeur actuelle nette du projet', en: "The project's net present value" },
      { fr: 'Le ratio bénéfices/coûts du projet', en: "The project's benefit-cost ratio" },
    ],
    correct: 0,
    explanation: {
      fr: "Le délai de récupération est le temps pour récupérer la mise de départ. Simple à calculer, mais il ignore la valeur temps de l'argent et tout ce qui se passe après le seuil de récupération.",
      en: 'The payback period is the time needed to recover the initial outlay. Simple to compute, but it ignores the time value of money and anything happening after the recovery point.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xo05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Dans une structure PAR PROJET (projectized), quel est l'inconvénient le plus souvent cité à la clôture du projet ?",
      en: 'In a PROJECTIZED structure, what drawback is most often cited at project closure?',
    },
    options: [
      { fr: "Les compétences de l'équipe se dispersent, faute de département fonctionnel où revenir", en: 'Team skills scatter, with no functional department to return to' },
      { fr: 'Le chef de projet perd toute autorité dès le lancement', en: 'The project manager loses all authority from kickoff' },
      { fr: "L'équipe reste rattachée à son département d'origine", en: "The team stays attached to its home department" },
      { fr: "Le PMO impose systématiquement sa méthodologie", en: 'The PMO always enforces its own methodology' },
    ],
    correct: 0,
    explanation: {
      fr: "Dans une structure par projet, l'équipe est dédiée à plein temps au chef de projet — fort en efficacité pendant le projet, mais à la clôture, il n'y a pas de « maison » fonctionnelle où réintégrer les compétences.",
      en: 'In a projectized structure, the team is dedicated full-time to the PM — strong efficiency during the project, but at closure there is no functional “home” to reabsorb the skills into.',
    },
  },
  {
    id: 'xo06',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Deux projets sont comparés : P1 (VAN 800 k€, délai de récupération 4 ans) et P2 (VAN 500 k€, délai de récupération 18 mois). L'entreprise traverse une crise de trésorerie sévère. Quelle est la MEILLEURE recommandation ?",
      en: 'Two projects are compared: P1 (NPV $800K, payback 4 years) and P2 (NPV $500K, payback 18 months). The company is in a severe cash crisis. What is the BEST recommendation?',
    },
    options: [
      { fr: 'Recommander P2 en explicitant que le contexte de trésorerie fait du délai de récupération un critère de survie prioritaire', en: 'Recommend P2, explaining that the cash context makes payback a priority survival criterion' },
      { fr: 'Recommander P1 : la VAN est toujours le critère supérieur, quel que soit le contexte', en: 'Recommend P1: NPV is always the superior criterion regardless of context' },
      { fr: "Refuser de recommander sans calculer d'abord le TRI des deux projets", en: 'Refuse to recommend without first computing both projects’ IRR' },
      { fr: "Recommander les deux projets en parallèle pour maximiser la valeur totale", en: 'Recommend both projects in parallel to maximize total value' },
    ],
    correct: 0,
    explanation: {
      fr: "Aucun critère financier n'est absolu : le contexte donné (crise de trésorerie) rend le délai de récupération court de P2 prioritaire pour la survie de l'entreprise, même si sa VAN est inférieure. La recommandation doit expliciter ce compromis.",
      en: 'No financial criterion is absolute: the given context (cash crisis) makes P2’s short payback a survival priority even though its NPV is lower. The recommendation must make this trade-off explicit.',
    },
  },
  {
    id: 'xo07',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Un projet est financé à 40 %. Une analyse révèle qu'il n'est plus aligné avec la stratégie de l'entreprise. Quelle est la démarche correcte ?",
      en: 'A project is 40% funded. An analysis reveals it is no longer aligned with company strategy. What is the correct course of action?',
    },
    options: [
      { fr: "Évaluer si la valeur restante à créer justifie l'investissement à venir, sans tenir compte des 40 % déjà dépensés", en: 'Assess whether the remaining value to be created justifies the investment still to come, disregarding the 40% already spent' },
      { fr: "Continuer le projet jusqu'au bout : arrêter maintenant gaspillerait les 40 % déjà investis", en: 'Continue the project to the end: stopping now would waste the 40% already invested' },
      { fr: 'Réduire le périmètre de moitié pour compenser le désalignement', en: 'Cut the scope in half to offset the misalignment' },
      { fr: 'Attendre la fin de la phase en cours avant toute analyse', en: 'Wait until the end of the current phase before any analysis' },
    ],
    correct: 0,
    explanation: {
      fr: "Les 40 % déjà dépensés sont un coût irrécupérable (sunk cost) : ils ne doivent pas peser dans la décision. Seule la valeur RESTANTE à créer, comparée au coût RESTANT à engager, doit guider le choix de continuer ou d'arrêter.",
      en: 'The 40% already spent is a sunk cost: it must not weigh in the decision. Only the REMAINING value to be created, weighed against the REMAINING cost, should guide the choice to continue or stop.',
    },
  },
  {
    id: 'xo08',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Un chef de projet en organisation matricielle ÉQUILIBRÉE est en conflit récurrent avec un responsable fonctionnel : chacun revendique l'autorité sur la même ressource. Que traduit le mieux cette situation ?",
      en: 'A project manager in a BALANCED matrix has a recurring conflict with a functional manager: each claims authority over the same resource. What does this best illustrate?',
    },
    options: [
      { fr: "La signature classique de la matricielle équilibrée : autorité partagée et comparable entre les deux rôles", en: 'The classic signature of a balanced matrix: comparable, shared authority between the two roles' },
      { fr: "Une défaillance ponctuelle à corriger en passant en structure par projet", en: 'A one-off failure to fix by switching to a projectized structure' },
      { fr: "La preuve que le PMO doit devenir directif", en: 'Proof that the PMO must become directive' },
      { fr: "Un signe que le chef de projet manque de compétences techniques", en: 'A sign the PM lacks technical skills' },
    ],
    correct: 0,
    explanation: {
      fr: "La matricielle équilibrée donne une autorité comparable aux deux rôles, ce qui génère structurellement ce type de tension — ce n'est pas une anomalie à « corriger » mais une caractéristique connue de la structure, à gérer par la négociation et une gouvernance claire.",
      en: 'A balanced matrix gives comparable authority to both roles, which structurally generates this kind of tension — it is not an anomaly to “fix” but a known trait of the structure, managed through negotiation and clear governance.',
    },
  },
  {
    id: 'xo09',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Que représente le taux de rentabilité interne (TRI) d'un projet ?",
      en: "What does a project's internal rate of return (IRR) represent?",
    },
    options: [
      { fr: "Le taux d'actualisation pour lequel la VAN du projet est égale à zéro", en: 'The discount rate at which the project’s NPV equals zero' },
      { fr: "Le montant total des bénéfices actualisés du projet", en: "The project's total discounted benefits" },
      { fr: "Le pourcentage de l'investissement récupéré chaque année", en: 'The percentage of the investment recovered each year' },
      { fr: "Le ratio entre bénéfices et coûts du projet", en: "The project's benefit-to-cost ratio" },
    ],
    correct: 0,
    explanation: {
      fr: "Le TRI est un TAUX (%), pas un montant : c'est le taux d'actualisation qui annule la VAN. Plus il dépasse le coût du capital de l'organisation, plus le projet est financièrement attractif.",
      en: 'IRR is a RATE (%), not an amount: it is the discount rate that zeroes out the NPV. The more it exceeds the organization’s cost of capital, the more financially attractive the project.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xo10',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Un PMO de CONTRÔLE impose un gabarit de charte de projet et exige une revue de conformité à chaque jalon. Un chef de projet expérimenté juge le gabarit inadapté à son projet très incertain et veut le simplifier drastiquement. Quelle est la MEILLEURE action ?",
      en: 'A CONTROLLING PMO mandates a project charter template and requires a compliance review at each milestone. An experienced PM judges the template unfit for their highly uncertain project and wants to drastically simplify it. What is the BEST action?',
    },
    options: [
      { fr: "Discuter avec le PMO pour proposer une adaptation justifiée du gabarit à l'incertitude du projet, dans le cadre de la conformité exigée", en: 'Discuss with the PMO to propose a justified adaptation of the template to the project’s uncertainty, within the required compliance framework' },
      { fr: "Utiliser le gabarit simplifié sans en informer le PMO : c'est une décision de mise en œuvre", en: 'Use the simplified template without informing the PMO: this is an implementation decision' },
      { fr: "Refuser toute charte tant que le PMO n'assouplit pas sa politique", en: 'Refuse any charter until the PMO relaxes its policy' },
      { fr: "Escalader immédiatement au sponsor pour contourner le PMO", en: 'Immediately escalate to the sponsor to bypass the PMO' },
    ],
    correct: 0,
    explanation: {
      fr: "Un PMO de contrôle exige la conformité, mais l'adaptation (tailoring) reste légitime si elle est justifiée et négociée avec l'instance qui fixe le cadre — pas imposée unilatéralement ni escaladée prématurément sans avoir tenté le dialogue.",
      en: 'A controlling PMO requires compliance, but tailoring remains legitimate when justified and negotiated with the body that sets the framework — not imposed unilaterally nor escalated prematurely without first attempting dialogue.',
    },
  },
  {
    id: 'xo11',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Un comité de sélection évalue trois projets candidats. Après avoir vu les dossiers, un membre propose de modifier la pondération des critères pour favoriser le projet de sa division. Quelle est la MEILLEURE réponse du chef de projet qui préside le comité ?",
      en: 'A selection committee evaluates three candidate projects. After seeing the proposals, a member suggests changing the criteria weighting to favor their division’s project. What is the BEST response from the PM chairing the committee?',
    },
    options: [
      { fr: "Refuser : les critères pondérés doivent être fixés avant l'évaluation et rester stables pour préserver l'intégrité de la décision", en: 'Decline: weighted criteria must be set before evaluation and stay stable to preserve the decision’s integrity' },
      { fr: "Accepter si la majorité du comité est d'accord", en: 'Accept if a majority of the committee agrees' },
      { fr: "Proposer un compromis à mi-chemin sur la nouvelle pondération", en: 'Propose a compromise halfway toward the new weighting' },
      { fr: "Reporter la décision à un comité ultérieur sans trancher", en: 'Postpone the decision to a later committee without ruling' },
    ],
    correct: 0,
    explanation: {
      fr: "Modifier les critères après avoir vu les projets, même avec l'accord de la majorité, est un piège de gouvernance : cela invalide l'objectivité du processus de sélection. Les critères pondérés se fixent AVANT l'évaluation et ne bougent pas pour favoriser un résultat.",
      en: 'Changing criteria after seeing the projects, even with majority agreement, is a governance trap: it invalidates the objectivity of the selection process. Weighted criteria are set BEFORE evaluation and do not move to favor an outcome.',
    },
  },
  {
    id: 'xo12',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Six mois après la clôture d'un projet, le propriétaire des bénéfices désigné constate que le bénéfice attendu (réduction de 15 % des délais de traitement) n'est mesuré nulle part. Quelle est la cause racine la plus probable ?",
      en: 'Six months after a project closes, the designated benefits owner notices the expected benefit (15% reduction in processing time) is not being measured anywhere. What is the most likely root cause?',
    },
    options: [
      { fr: "Le plan de management des bénéfices n'a pas été correctement établi ou transmis au propriétaire des bénéfices avant la clôture", en: 'The benefits management plan was not properly established or handed off to the benefits owner before closure' },
      { fr: "Le chef de projet aurait dû rester en poste après la clôture pour mesurer le bénéfice lui-même", en: 'The project manager should have stayed on after closure to measure the benefit themselves' },
      { fr: "Le bénéfice n'était pas assez ambitieux pour justifier un suivi", en: 'The benefit was not ambitious enough to justify tracking' },
      { fr: "Les bénéfices ne peuvent jamais être mesurés après la clôture du projet", en: 'Benefits can never be measured after project closure' },
    ],
    correct: 0,
    explanation: {
      fr: "Le plan de management des bénéfices définit COMMENT et QUAND chaque bénéfice sera mesuré, souvent bien après la clôture, avec un propriétaire des bénéfices désigné qui survit au projet. Un bénéfice non suivi révèle un plan mal établi ou mal transmis, pas une impossibilité de mesure.",
      en: 'The benefits management plan defines HOW and WHEN each benefit will be measured, often well after closure, with a designated benefits owner who outlives the project. An untracked benefit points to a poorly built or poorly handed-off plan, not an impossibility of measurement.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xo13',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-14',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes concernant les structures organisationnelles matricielles.",
      en: 'Select the TWO accurate statements about matrix organizational structures.',
    },
    options: [
      { fr: "Dans une matricielle forte, le chef de projet dispose généralement d'un staff dédié", en: 'In a strong matrix, the PM generally has dedicated staff' },
      { fr: "Dans une matricielle faible, le chef de projet joue un rôle proche du coordinateur", en: 'In a weak matrix, the PM plays a role close to a coordinator' },
      { fr: "La matricielle équilibrée élimine tout risque de conflit d'autorité", en: 'A balanced matrix eliminates any risk of authority conflict' },
      { fr: "Toute structure matricielle équivaut à une structure par projet", en: 'Any matrix structure is equivalent to a projectized structure' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "La matricielle forte donne au chef de projet un staff dédié et une autorité proche de celle d'une structure par projet. La matricielle faible le limite à un rôle de coordination. La matricielle équilibrée, à l'inverse, est justement propice aux conflits d'autorité, et n'équivaut jamais à une structure par projet.",
      en: 'A strong matrix gives the PM dedicated staff and authority close to a projectized structure. A weak matrix limits them to a coordinating role. A balanced matrix, by contrast, is precisely prone to authority conflicts, and no matrix structure is equivalent to a projectized one.',
    },
  },
  {
    id: 'xo14',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Sélectionnez les DEUX critères financiers qui intègrent DÉJÀ la valeur temps de l'argent dans leur calcul.",
      en: "Select the TWO financial criteria that ALREADY account for the time value of money in their calculation.",
    },
    options: [
      { fr: 'La valeur actuelle nette (VAN)', en: 'Net present value (NPV)' },
      { fr: 'Le taux de rentabilité interne (TRI)', en: 'Internal rate of return (IRR)' },
      { fr: 'Le délai de récupération simple (payback period)', en: 'Simple payback period' },
      { fr: "Le coût irrécupérable (sunk cost)", en: 'Sunk cost' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "La VAN et le TRI reposent tous deux sur l'actualisation des flux futurs : ils intègrent la valeur temps de l'argent. Le délai de récupération simple l'ignore délibérément (c'est sa principale limite), et le coût irrécupérable n'est pas un critère de décision — c'est une dépense déjà engagée à ignorer.",
      en: 'Both NPV and IRR rely on discounting future cash flows: they account for the time value of money. The simple payback period deliberately ignores it (its main limitation), and sunk cost is not a decision criterion at all — it is an already-incurred expense to disregard.',
    },
  },
]
