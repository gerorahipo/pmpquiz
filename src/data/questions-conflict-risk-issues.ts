import type { Question } from '../types'

/**
 * Batch covering material from PMI's official Lessons 05-08 (Procurement/
 * Quality/Scheduling, Communication/Knowledge Transfer, Leading the Team,
 * Managing Risk/Change/Issues): the Leas conflict escalation levels, the
 * risk-vs-issue distinction, quantitative risk tools (FMEA, tornado diagram,
 * decision tree), voting methods, and rewards vs recognition.
 */
export const CONFLICT_RISK_ISSUES_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xc13',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-01',
    question: {
      fr: "Selon les niveaux de conflit de Leas, à quel niveau un conflit devient-il une « situation inextricable », presque impossible à résoudre ?",
      en: 'Per the Leas conflict levels, at which level does a conflict become an “intractable situation”, almost impossible to resolve?',
    },
    options: [
      { fr: 'Niveau 5', en: 'Level 5' },
      { fr: 'Niveau 1', en: 'Level 1' },
      { fr: 'Niveau 2', en: 'Level 2' },
      { fr: 'Niveau 3', en: 'Level 3' },
    ],
    correct: 0,
    explanation: {
      fr: "Le conflit s'intensifie du niveau 1 (un problème à résoudre) au niveau 5 (situation inextricable), en passant par le désaccord (2), la rivalité (3) et la lutte/fuite (4).",
      en: 'Conflict escalates from level 1 (a problem to solve) to level 5 (an intractable situation), passing through disagreement (2), contest (3) and fight/flight (4).',
    },
  },
  {
    id: 'xc14',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-03',
    question: {
      fr: "Quelle est la différence essentielle entre un risque et un point à traiter (issue) ?",
      en: 'What is the essential difference between a risk and an issue?',
    },
    options: [
      { fr: "Un risque est orienté vers l'avenir et peut être positif ou négatif ; un point à traiter est présent et toujours négatif", en: 'A risk is future-oriented and can be positive or negative; an issue is present and always negative' },
      { fr: 'Les deux termes sont strictement synonymes', en: 'The two terms are strictly synonymous' },
      { fr: 'Un point à traiter est toujours plus grave qu’un risque', en: 'An issue is always more serious than a risk' },
      { fr: 'Un risque se consigne dans le journal des points à traiter', en: 'A risk is logged in the issue log' },
    ],
    correct: 0,
    explanation: {
      fr: "Un risque est un événement futur et incertain (positif = opportunité, négatif = menace), consigné dans le registre des risques. Un point à traiter est une situation déjà présente, toujours négative, consignée dans le journal des points à traiter, et traitée par une solution de contournement.",
      en: 'A risk is a future, uncertain event (positive = opportunity, negative = threat), logged in the risk register. An issue is an already-present situation, always negative, logged in the issue log, and handled with a workaround.',
    },
  },
  {
    id: 'xc15',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-14',
    question: {
      fr: "Quelle est la différence entre une récompense et une reconnaissance ?",
      en: 'What is the difference between a reward and recognition?',
    },
    options: [
      { fr: "La récompense est un élément tangible pour un résultat précis ; la reconnaissance est immatérielle et valorise le comportement", en: 'A reward is a tangible item for a specific outcome; recognition is intangible and values the behavior' },
      { fr: 'Les deux termes désignent la même chose', en: 'Both terms describe the same thing' },
      { fr: 'La reconnaissance doit toujours être accompagnée d’une récompense financière', en: 'Recognition must always be accompanied by a financial reward' },
      { fr: 'La récompense concerne le comportement, la reconnaissance concerne le résultat', en: 'Rewards concern behavior, recognition concerns outcomes' },
    ],
    correct: 0,
    explanation: {
      fr: "La récompense est tangible et liée à un résultat spécifique ; la reconnaissance est immatérielle et met l'accent sur le comportement de la personne. Ne jamais donner une récompense sans reconnaissance.",
      en: 'A reward is tangible and tied to a specific outcome; recognition is intangible and focuses on the person’s behavior. Never give a reward without recognition.',
    },
  },
  {
    id: 'xc16',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-04',
    question: {
      fr: "Une équipe doit choisir entre plus de deux options. Une décision est prise en faveur du plus grand sous-groupe, même s'il ne s'agit pas d'une majorité de plus de 50 %. De quelle méthode de vote s'agit-il ?",
      en: 'A team must choose among more than two options. A decision is made in favor of the largest subgroup, even though it is not a majority above 50%. What voting method is this?',
    },
    options: [
      { fr: 'Pluralité', en: 'Plurality' },
      { fr: 'Unanimité', en: 'Unanimity' },
      { fr: 'Majorité', en: 'Majority' },
      { fr: 'Consensus', en: 'Consensus' },
    ],
    correct: 0,
    explanation: {
      fr: "La pluralité désigne une décision prise par le plus grand sous-groupe, même sans majorité — utile quand plus de deux options sont proposées. La majorité exige plus de 50 % de soutien ; l'unanimité exige l'accord de tous.",
      en: 'Plurality means a decision made by the largest subgroup, even without a majority — useful when more than two options are on the table. Majority requires over 50% support; unanimity requires everyone to agree.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xc17',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-01',
    question: {
      fr: "Deux membres d'équipe ont un désaccord technique ordinaire (niveau 1-2 sur l'échelle de Leas). Quelle est la MEILLEURE approche du chef de projet ?",
      en: 'Two team members have an ordinary technical disagreement (level 1-2 on the Leas scale). What is the PM’s BEST approach?',
    },
    options: [
      { fr: "Faciliter une session de collaboration légère entre les deux personnes, sans intervention formelle disproportionnée", en: 'Facilitate a light collaboration session between the two people, without disproportionate formal intervention' },
      { fr: "Escalader immédiatement au sponsor pour trancher", en: 'Immediately escalate to the sponsor to decide' },
      { fr: "Imposer sa propre décision pour clore rapidement le désaccord", en: 'Impose their own decision to quickly close the disagreement' },
      { fr: "Organiser une médiation formelle avec les ressources humaines", en: 'Arrange formal mediation with human resources' },
    ],
    correct: 0,
    explanation: {
      fr: "À un niveau de conflit bas (1-2), la collaboration légère suffit largement. Une intervention plus lourde (médiation RH, escalade, décision imposée) est disproportionnée et réservée aux niveaux plus élevés (4-5).",
      en: 'At a low conflict level (1-2), light collaboration is plenty. A heavier intervention (HR mediation, escalation, imposed decision) is disproportionate and reserved for higher levels (4-5).',
    },
  },
  {
    id: 'xc18',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-03',
    question: {
      fr: "Une analyse de sensibilité est réalisée sur un projet et restituée sous forme de diagramme en tornade. Comment interpréter ce diagramme ?",
      en: 'A sensitivity analysis is performed on a project and rendered as a tornado diagram. How should this diagram be interpreted?',
    },
    options: [
      { fr: "Les risques en haut du diagramme ont le plus fort impact individuel sur le résultat du projet", en: 'The risks at the top of the diagram have the strongest individual impact on the project outcome' },
      { fr: "Le diagramme montre la probabilité d'occurrence de chaque risque, pas son impact", en: 'The diagram shows each risk’s probability of occurrence, not its impact' },
      { fr: "Le diagramme remplace le registre des risques", en: 'The diagram replaces the risk register' },
      { fr: "Les risques en bas du diagramme sont les plus urgents à traiter", en: 'The risks at the bottom of the diagram are the most urgent to address' },
    ],
    correct: 0,
    explanation: {
      fr: "Le diagramme en tornade classe les risques par impact DÉCROISSANT, les plus impactants en haut — issu de l'analyse de sensibilité, qui détermine quel risque individuel pèse le plus sur le résultat du projet.",
      en: 'The tornado diagram ranks risks by DECREASING impact, the highest-impact ones at the top — derived from sensitivity analysis, which determines which individual risk weighs most on the project outcome.',
    },
  },
  {
    id: 'xc19',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-06',
    question: {
      fr: "Une activité a une estimation optimiste de 3 semaines, une estimation la plus probable de 5 semaines et une estimation pessimiste de 10 semaines. Quelle est l'estimation par la MOYENNE TRIANGULAIRE (non pondérée) ?",
      en: 'An activity has an optimistic estimate of 3 weeks, a most-likely estimate of 5 weeks, and a pessimistic estimate of 10 weeks. What is the estimate using the (unweighted) TRIANGULAR average?',
    },
    options: [
      { fr: '6 semaines', en: '6 weeks' },
      { fr: '5,5 semaines', en: '5.5 weeks' },
      { fr: '5 semaines', en: '5 weeks' },
      { fr: '9 semaines', en: '9 weeks' },
    ],
    correct: 0,
    explanation: {
      fr: "La moyenne triangulaire simple : (O + M + P) / 3 = (3 + 5 + 10) / 3 = 6 semaines. La moyenne bêta/PERT pondérée donnerait un résultat différent : (3 + 4×5 + 10) / 6 = 5,5 semaines.",
      en: 'The simple triangular average: (O + M + P) / 3 = (3 + 5 + 10) / 3 = 6 weeks. The weighted beta/PERT average would give a different result: (3 + 4×5 + 10) / 6 = 5.5 weeks.',
    },
  },
  {
    id: 'xc20',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-11',
    question: {
      fr: "Un client modifie une exigence contractuelle par une série d'actions informelles (instructions verbales, e-mails), sans jamais signer d'avenant formel. Comment qualifie-t-on ce type de modification contractuelle ?",
      en: 'A customer alters a contractual requirement through a series of informal actions (verbal instructions, emails), without ever signing a formal amendment. What type of contract modification is this?',
    },
    options: [
      { fr: 'Un changement constructif', en: 'A constructive change' },
      { fr: 'Un changement administratif', en: 'An administrative change' },
      { fr: 'Un accord complémentaire', en: 'A supplemental agreement' },
      { fr: 'Une résiliation', en: 'A termination' },
    ],
    correct: 0,
    explanation: {
      fr: "Un changement constructif est réalisé par action ou omission du client, sans modification formelle documentée — une source fréquente de litiges car il n'est pas explicitement négocié comme les autres types de modifications contractuelles.",
      en: 'A constructive change happens through the buyer’s action or omission, without a formal documented modification — a frequent source of disputes since it is not explicitly negotiated like other contract modification types.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xc21',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-03',
    question: {
      fr: "Une équipe veut identifier, avant même de construire sa matrice probabilité-impact, TOUS les modes de défaillance possibles d'un composant critique, leur effet et leur criticité. Quelle technique est la PLUS appropriée ?",
      en: 'A team wants to identify, even before building its probability-impact matrix, EVERY possible failure mode of a critical component, its effect and its criticality. Which technique is MOST appropriate?',
    },
    options: [
      { fr: "L'AMDEC / FMEA (analyse des modes de défaillance et de leurs effets)", en: 'FMEA (Failure Mode and Effects Analysis)' },
      { fr: 'La simulation de Monte-Carlo', en: 'Monte Carlo simulation' },
      { fr: "L'arbre de décision", en: 'A decision tree' },
      { fr: 'Le diagramme en tornade', en: 'A tornado diagram' },
    ],
    correct: 0,
    explanation: {
      fr: "L'AMDEC/FMEA est précisément conçue pour recenser systématiquement CHAQUE mode de défaillance possible d'un composant, en amont — avant même la hiérarchisation qualitative des risques par la matrice probabilité-impact.",
      en: 'FMEA is precisely designed to systematically catalog EVERY possible failure mode of a component, upstream — even before qualitative risk prioritization via the probability-impact matrix.',
    },
  },
  {
    id: 'xc22',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-01',
    question: {
      fr: "Un conflit entre deux membres d'équipe a atteint le point où l'un d'eux refuse catégoriquement de continuer à travailler avec l'autre et demande un transfert immédiat (niveau 4 « lutte/fuite » sur l'échelle de Leas). L'équipe avait géré des désaccords similaires par simple facilitation informelle auparavant. Quelle est la MEILLEURE action ?",
      en: 'A conflict between two team members has reached the point where one categorically refuses to keep working with the other and requests an immediate transfer (level 4 “fight/flight” on the Leas scale). The team had previously handled similar disagreements through simple informal facilitation. What is the BEST action?',
    },
    options: [
      { fr: "Reconnaître que le niveau d'escalade dépasse la facilitation informelle habituelle et engager une intervention formelle adaptée à ce niveau", en: 'Recognize that the escalation level exceeds the team’s usual informal facilitation and engage a formal intervention fit for that level' },
      { fr: "Continuer avec la même facilitation informelle qui avait fonctionné pour les désaccords précédents", en: 'Continue with the same informal facilitation that worked for previous disagreements' },
      { fr: "Accorder immédiatement le transfert demandé sans autre analyse", en: 'Immediately grant the requested transfer with no further analysis' },
      { fr: "Ignorer la demande en espérant que la situation se résolve d'elle-même", en: 'Ignore the request, hoping the situation resolves itself' },
    ],
    correct: 0,
    explanation: {
      fr: "Le niveau de conflit dicte le niveau d'intervention requis : ce qui suffisait à un niveau 1-2 (facilitation informelle) est insuffisant à un niveau 4 (lutte/fuite), qui exige une intervention formelle. Répéter la même réponse légère qu'auparavant ignore l'escalade réelle de la situation ; céder immédiatement sans analyse ou ignorer la demande sont les deux excès symétriques à éviter.",
      en: 'The conflict level dictates the required intervention level: what sufficed at level 1-2 (informal facilitation) is insufficient at level 4 (fight/flight), which requires formal intervention. Repeating the same light response as before ignores the situation’s real escalation; immediately caving with no analysis or ignoring the request are the two symmetric extremes to avoid.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xc23',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-03',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes sur la distinction entre risque et point à traiter.",
      en: 'Select the TWO accurate statements about the distinction between a risk and an issue.',
    },
    options: [
      { fr: "Un point à traiter (issue) est toujours négatif, contrairement à un risque qui peut être positif ou négatif", en: 'An issue is always negative, unlike a risk which can be positive or negative' },
      { fr: "La réponse à un point à traiter s'appelle une « solution de contournement » (workaround)", en: 'The response to an issue is called a “workaround”' },
      { fr: "Un point à traiter se consigne dans le registre des risques", en: 'An issue is logged in the risk register' },
      { fr: "Un risque est toujours orienté vers le présent, comme un point à traiter", en: 'A risk is always present-oriented, just like an issue' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Un point à traiter est toujours négatif et se résout par une solution de contournement NON planifiée à l'avance. En revanche, il se consigne dans le journal des points à traiter (pas le registre des risques), et un risque est orienté vers l'AVENIR, pas le présent.",
      en: 'An issue is always negative and resolved through an UNPLANNED workaround. However, it is logged in the issue log (not the risk register), and a risk is FUTURE-oriented, not present.',
    },
  },
  {
    id: 'xc24',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-03',
    question: {
      fr: "Sélectionnez les DEUX outils d'analyse quantitative des risques correctement associés à leur usage.",
      en: 'Select the TWO quantitative risk analysis tools correctly matched to their use.',
    },
    options: [
      { fr: "La simulation de Monte-Carlo modélise l'effet combiné de multiples incertitudes sur le coût/délai global du projet", en: 'Monte Carlo simulation models the combined effect of multiple uncertainties on the project’s overall cost/schedule' },
      { fr: "L'arbre de décision pondère chaque branche par sa valeur monétaire attendue (EMV) pour structurer un choix séquentiel sous incertitude", en: 'A decision tree weights each branch by its expected monetary value (EMV) to structure a sequential choice under uncertainty' },
      { fr: "Le diagramme en tornade sert à modéliser des situations trop complexes pour un arbre de décision lisible", en: 'A tornado diagram is used to model situations too complex for a readable decision tree' },
      { fr: "L'AMDEC/FMEA détermine le taux de rendement financier d'un projet par rapport à son coût", en: 'FMEA determines a project’s financial rate of return relative to its cost' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Monte-Carlo et l'arbre de décision (pondéré par l'EMV) sont bien décrits. C'est le diagramme d'INFLUENCE, pas le diagramme en tornade, qui modélise les situations trop complexes pour un arbre de décision. L'AMDEC/FMEA identifie des modes de défaillance et leur criticité, pas un rendement financier (qui relève du ROI/TRI).",
      en: 'Monte Carlo and the decision tree (weighted by EMV) are correctly described. It is the INFLUENCE diagram, not the tornado diagram, that models situations too complex for a decision tree. FMEA identifies failure modes and their criticality, not a financial rate of return (that’s ROI/IRR).',
    },
  },
]
