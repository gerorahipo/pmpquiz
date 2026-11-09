import type { Question } from '../types'

/**
 * Batch of scenario and "tools & techniques" questions inspired by a set of
 * exam-style screenshots (samples/Introduction). Contexts and wording are
 * original; only the underlying concept and correct logic are shared.
 * Covers: SMART objectives, decision gates, EEF vs OPA, PMO, tailoring,
 * BCR, estimating sources (historical info / expert judgment / analogous),
 * planning poker, fist of five, SWOT, affinity & matrix diagrams,
 * multicriteria analysis, P×I matrix, plus scenario-style judgment items.
 */
export const TOOLS_TECHNIQUES_QUESTIONS: Question[] = [
  {
    id: 'xt01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-09',
    question: {
      fr: "Quel objectif de projet respecte le mieux les critères SMART ?",
      en: 'Which project objective best meets the SMART criteria?',
    },
    options: [
      { fr: "Améliorer l'expérience des utilisateurs du portail dès que possible", en: 'Improve the portal user experience as soon as possible' },
      { fr: "Être plus performant dans le traitement des tickets de support", en: 'Be more efficient at handling support tickets' },
      { fr: "Réduire de 25 % le temps moyen de résolution des tickets de support avant le 30 juin", en: 'Reduce average support-ticket resolution time by 25% before June 30' },
      { fr: "Augmenter la qualité du service lorsque les ressources le permettront", en: 'Increase service quality when resources allow' },
    ],
    correct: 2,
    explanation: {
      fr: "SMART = Spécifique, Mesurable, Atteignable, Réaliste/pertinent, Temporel. Seule l'option C donne une cible chiffrée (25 %), une mesure précise (temps de résolution) et une échéance (30 juin). Les autres sont vagues, sans mesure ni date.",
      en: 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound. Only option C gives a numeric target (25%), a precise measure (resolution time) and a deadline (June 30). The others are vague, with no measure or date.',
    },
  },
  {
    id: 'xt02',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Une organisation impose un point de décision (porte de phase) à la fin de chaque phase de ses projets. Quel est l'objectif principal de ce point de décision ?",
      en: 'An organization imposes a decision gate (phase gate) at the end of each project phase. What is the main purpose of this gate?',
    },
    options: [
      { fr: "Répartir le personnel entre les projets du portefeuille", en: 'Allocate staff across the portfolio’s projects' },
      { fr: "Mesurer le moral et la satisfaction de l'équipe", en: 'Measure team morale and satisfaction' },
      { fr: "Découper la phase suivante en lots de travaux", en: 'Break the next phase down into work packages' },
      { fr: "Décider, au vu des résultats, si le projet continue, est modifié ou est arrêté", en: 'Decide, based on results, whether the project continues, is modified, or is stopped' },
    ],
    correct: 3,
    explanation: {
      fr: "Un point de décision (stage gate / phase gate / kill point) est une revue formelle des résultats de la phase pour décider de poursuivre (go), corriger (go avec modifications) ou arrêter (no-go) le projet. Il relève de la gouvernance, pas de l'allocation des ressources ni du découpage du travail.",
      en: 'A decision gate (stage/phase gate/kill point) is a formal review of phase results to decide whether to proceed (go), adjust (go with changes) or stop (no-go). It is a governance mechanism, not resource allocation or work decomposition.',
    },
  },
  {
    id: 'xt03',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Un nouveau règlement national sur la protection des données s'applique à un projet en cours et impose des contrôles supplémentaires. Comment le chef de projet doit-il classer cette exigence ?",
      en: 'A new national data-protection regulation applies to an ongoing project and requires extra controls. How should the project manager classify this requirement?',
    },
    options: [
      { fr: "Comme un actif organisationnel, car elle modifie les procédures internes", en: 'As an organizational process asset, because it changes internal procedures' },
      { fr: "Comme une leçon apprise, car elle servira aux projets futurs", en: 'As a lesson learned, because it will inform future projects' },
      { fr: "Comme un facteur environnemental de l'entreprise, car elle provient de l'extérieur de l'organisation", en: 'As an enterprise environmental factor, because it originates outside the organization' },
      { fr: "Comme une base de connaissances de l'organisation", en: 'As an organizational knowledge base' },
    ],
    correct: 2,
    explanation: {
      fr: "Les lois et règlements sont des facteurs environnementaux de l'entreprise (EEF) : conditions externes (ou internes non maîtrisées par l'équipe) qui contraignent le projet. Les actifs organisationnels (OPA) sont les processus, modèles et connaissances que l'organisation a elle-même constitués.",
      en: 'Laws and regulations are enterprise environmental factors (EEFs): conditions the team cannot control that constrain the project. Organizational process assets (OPAs) are the processes, templates and knowledge the organization itself has built.',
    },
  },
  {
    id: 'xt04',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'process-16',
    question: {
      fr: "Le bureau projets d'une entreprise tient un référentiel de gabarits de planification, de procédures standard, de leçons apprises et de données de projets passés. Comment le chef de projet doit-il considérer ces éléments ?",
      en: 'A company’s project office maintains a repository of planning templates, standard procedures, lessons learned and past project data. How should the project manager treat these items?',
    },
    options: [
      { fr: "Comme des actifs organisationnels (OPA) réutilisables pour planifier et exécuter le projet", en: 'As reusable organizational process assets (OPAs) for planning and executing the project' },
      { fr: "Comme des facteurs environnementaux de l'entreprise, car ils influencent le projet", en: 'As enterprise environmental factors, because they influence the project' },
      { fr: "Comme des livrables du projet, car l'équipe s'en sert", en: 'As project deliverables, because the team uses them' },
      { fr: "Comme des contraintes imposées par le sponsor", en: 'As constraints imposed by the sponsor' },
    ],
    correct: 0,
    explanation: {
      fr: "Processus, procédures, gabarits, leçons apprises et données historiques sont des actifs organisationnels (OPA) : des ressources internes à réutiliser. Piège : tout ce qui « influence » le projet n'est pas un EEF ; un EEF est un contexte (culture, réglementation, marché), pas un actif de l'organisation.",
      en: 'Processes, procedures, templates, lessons learned and historical data are organizational process assets (OPAs): internal resources to reuse. Trap: not everything that “influences” a project is an EEF; an EEF is context (culture, regulation, market), not an asset the organization built.',
    },
  },
  {
    id: 'xt05',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'process-14',
    question: {
      fr: "Une entreprise veut renforcer sa capacité d'exécution des projets : elle crée une entité chargée de définir les méthodes, fournir des modèles, diffuser les bonnes pratiques et accompagner les chefs de projet. Quelle structure répond le mieux à ce besoin ?",
      en: 'A company wants to strengthen its project delivery capability. It creates a unit to define methods, supply templates, share good practices and coach project managers. Which structure fits best?',
    },
    options: [
      { fr: "Le comité de pilotage", en: 'The steering committee' },
      { fr: "Le bureau de gestion de projets (PMO)", en: 'The project management office (PMO)' },
      { fr: "Le sponsor", en: 'The sponsor' },
      { fr: "Le responsable fonctionnel", en: 'The functional manager' },
    ],
    correct: 1,
    explanation: {
      fr: "Le PMO standardise les processus de gouvernance, fournit méthodes, gabarits et formation, et soutient les chefs de projet (PMO de soutien ou de contrôle, voire directif). Le sponsor finance et défend le projet ; le comité de pilotage arbitre ; le responsable fonctionnel gère des ressources métier.",
      en: 'The PMO standardizes governance processes, provides methods, templates and training, and supports project managers (supportive, controlling or directive). The sponsor funds and champions; the steering committee arbitrates; the functional manager manages business resources.',
    },
  },
  {
    id: 'xt06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-13',
    question: {
      fr: "Dans la démarche d'adaptation (tailoring) d'un projet, quelle est la toute première étape ?",
      en: 'In the project tailoring process, what is the very first step?',
    },
    options: [
      { fr: "Mettre en place l'amélioration continue", en: 'Implement continuous improvement' },
      { fr: "Adapter l'approche à l'organisation", en: 'Tailor for the organization' },
      { fr: "Adapter l'approche au projet", en: 'Tailor for the project' },
      { fr: "Sélectionner l'approche de développement initiale", en: 'Select the initial development approach' },
    ],
    correct: 3,
    explanation: {
      fr: "Ordre de l'adaptation : 1) sélectionner l'approche de développement initiale (prédictive, adaptative, hybride) ; 2) adapter à l'organisation ; 3) adapter au projet ; 4) mettre en œuvre l'amélioration continue. On part toujours du choix de base avant de l'ajuster.",
      en: 'Tailoring order: 1) select the initial development approach (predictive, adaptive, hybrid); 2) tailor for the organization; 3) tailor for the project; 4) implement continuous improvement. You always start from the base choice before adjusting it.',
    },
  },
  {
    id: 'xt07',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "L'analyse bénéfices/coûts d'un projet donne un ratio (BCR) de 0,8. Que signifie ce résultat ?",
      en: 'A project’s benefit-cost analysis gives a ratio (BCR) of 0.8. What does this mean?',
    },
    options: [
      { fr: "Les bénéfices sont supérieurs aux coûts", en: 'Benefits exceed costs' },
      { fr: "Les coûts sont supérieurs aux bénéfices attendus", en: 'Costs exceed expected benefits' },
      { fr: "Les bénéfices et les coûts s'équilibrent", en: 'Benefits and costs balance out' },
      { fr: "Le projet est rentable à 80 %", en: 'The project is 80% profitable' },
    ],
    correct: 1,
    explanation: {
      fr: "BCR = bénéfices ÷ coûts. Au-dessus de 1, les bénéfices dépassent les coûts ; égal à 1, équilibre ; en dessous de 1 (ici 0,8), le projet détruit de la valeur : 0,80 € de bénéfice pour 1 € dépensé.",
      en: 'BCR = benefits ÷ costs. Above 1, benefits exceed costs; at 1, break-even; below 1 (here 0.8), the project destroys value: €0.80 of benefit for every €1 spent.',
    },
  },
  {
    id: 'xt08',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-05',
    question: {
      fr: "Un chef de projet prépare l'estimation d'un projet très proche d'un projet livré il y a deux ans. Il veut consulter les durées, coûts et performances réels de ce projet. Quelle source d'information est la plus appropriée ?",
      en: 'A project manager is preparing the estimate for a project very similar to one delivered two years ago. They want the actual durations, costs and performance of that project. Which information source is the most appropriate?',
    },
    options: [
      { fr: "Les informations historiques", en: 'Historical information' },
      { fr: "Le jugement d'expert", en: 'Expert judgment' },
      { fr: "Les leçons apprises", en: 'Lessons learned' },
      { fr: "Le système d'information de gestion de projet (PMIS)", en: 'The project management information system (PMIS)' },
    ],
    correct: 0,
    explanation: {
      fr: "Les durées, coûts et performances réels d'un projet passé sont des informations historiques (OPA). Les leçons apprises capturent des enseignements qualitatifs, pas les chiffres ; le PMIS est l'outil qui héberge l'information, pas la source ; le jugement d'expert sert quand il n'y a pas de données.",
      en: 'Actual durations, costs and performance of a past project are historical information (an OPA). Lessons learned capture qualitative insights, not the figures; the PMIS is the tool that stores information, not the source; expert judgment is for when no data exists.',
    },
  },
  {
    id: 'xt09',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-05',
    question: {
      fr: "Une organisation développe un produit sur une technologie qu'elle n'a jamais utilisée. Il n'existe aucune donnée historique pertinente et l'équipe a peu d'expérience. Le chef de projet doit produire une estimation préliminaire pour une décision d'investissement. Quelle source apportera le plus de valeur ?",
      en: 'An organization is developing a product on a technology it has never used. No relevant historical data exists and the team has little experience. The project manager must produce a preliminary estimate for an investment decision. Which source will add the most value?',
    },
    options: [
      { fr: "Les informations historiques", en: 'Historical information' },
      { fr: "Les leçons apprises", en: 'Lessons learned' },
      { fr: "Le PMIS", en: 'The PMIS' },
      { fr: "Le jugement d'expert (experts externes ou consultants)", en: 'Expert judgment (external experts or consultants)' },
    ],
    correct: 3,
    explanation: {
      fr: "Sans données historiques ni expérience interne, on recourt au jugement d'expert (consultants, experts du domaine, associations). Chercher des historiques ou des leçons apprises sur une technologie nouvelle ne donnera rien d'exploitable.",
      en: 'With no historical data or internal experience, rely on expert judgment (consultants, domain experts, associations). Searching historical records or lessons learned on a new technology would yield nothing usable.',
    },
  },
  {
    id: 'xt10',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-05',
    question: {
      fr: "Le sponsor veut une estimation de coût préliminaire avant la fin de la journée. Un projet quasi identique a été réalisé l'an dernier et ses coûts réels sont disponibles. Quelle technique est la plus appropriée ?",
      en: 'The sponsor wants a preliminary cost estimate by end of day. An almost identical project was done last year and its actual costs are available. Which technique is the most appropriate?',
    },
    options: [
      { fr: "L'estimation ascendante", en: 'Bottom-up estimating' },
      { fr: "L'estimation analogique", en: 'Analogous estimating' },
      { fr: "Le planning poker", en: 'Planning poker' },
      { fr: "L'analyse multicritère", en: 'Multicriteria analysis' },
    ],
    correct: 1,
    explanation: {
      fr: "L'estimation analogique s'appuie sur les coûts réels d'un projet similaire : rapide, peu coûteuse, mais moins précise. L'estimation ascendante est précise mais longue (impossible dans la journée) ; le planning poker estime l'effort agile ; l'analyse multicritère sert à choisir, pas à estimer.",
      en: 'Analogous estimating uses actual costs from a similar project: quick and cheap but less accurate. Bottom-up is accurate but slow (impossible in a day); planning poker estimates agile effort; multicriteria analysis is for selecting, not estimating.',
    },
  },
  {
    id: 'xt11',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-06',
    question: {
      fr: "Une équipe agile doit estimer l'effort de plusieurs fonctionnalités pour le prochain sprint. Les niveaux d'expérience sont très différents et le Scrum Master veut une estimation collaborative sans qu'une personne influence les autres. Quelle technique utiliser ?",
      en: 'An agile team must estimate effort for several features for the next sprint. Experience levels vary widely and the Scrum Master wants a collaborative estimate where no one person sways the others. Which technique should be used?',
    },
    options: [
      { fr: "L'estimation analogique", en: 'Analogous estimating' },
      { fr: "Le jugement d'un expert unique", en: 'A single expert’s judgment' },
      { fr: "Le planning poker", en: 'Planning poker' },
      { fr: "L'analyse multicritère", en: 'Multicriteria analysis' },
    ],
    correct: 2,
    explanation: {
      fr: "Dans le planning poker, chacun choisit sa carte en secret puis tous la révèlent en même temps : cela limite l'effet d'ancrage, fait émerger les écarts (qui appellent une discussion) et donne la même voix à chacun, quel que soit son niveau.",
      en: 'In planning poker everyone picks a card privately and all reveal at once: this limits anchoring, surfaces gaps (which prompt discussion) and gives everyone an equal voice regardless of seniority.',
    },
  },
  {
    id: 'xt12',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-03',
    question: {
      fr: "Avant d'approuver l'entrée sur un nouveau marché étranger, le sponsor veut comprendre à la fois les forces et faiblesses internes de l'organisation et les facteurs externes qui pourraient influencer le succès. Quelle technique utiliser ?",
      en: 'Before approving entry into a new foreign market, the sponsor wants to understand both the organization’s internal strengths and weaknesses and the external factors that could affect success. Which technique should be used?',
    },
    options: [
      { fr: "L'analyse des causes racines", en: 'Root cause analysis' },
      { fr: "L'analyse des tendances", en: 'Trend analysis' },
      { fr: "L'analyse FFOM (SWOT : forces, faiblesses, opportunités, menaces)", en: 'SWOT analysis (strengths, weaknesses, opportunities, threats)' },
      { fr: "L'analyse multicritère", en: 'Multicriteria analysis' },
    ],
    correct: 2,
    explanation: {
      fr: "L'analyse FFOM croise des facteurs internes (forces, faiblesses) et externes (opportunités, menaces). Elle sert à évaluer un contexte stratégique ou à identifier des risques et opportunités, pas à chercher une cause ou à noter des options.",
      en: 'SWOT crosses internal factors (strengths, weaknesses) with external ones (opportunities, threats). It evaluates a strategic context or identifies risks and opportunities; it does not find a cause or score options.',
    },
  },
  {
    id: 'xt13',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Lors d'un atelier, l'équipe génère plus de 150 idées sur les causes possibles de retards récurrents. Le chef de projet veut les regrouper en familles logiques pour faciliter l'analyse. Quelle technique doit-il utiliser ?",
      en: 'In a workshop the team generates over 150 ideas about the possible causes of recurring delays. The project manager wants to group them into logical families to ease analysis. Which technique should be used?',
    },
    options: [
      { fr: "Le diagramme d'affinité", en: 'Affinity diagram' },
      { fr: "Le diagramme matriciel", en: 'Matrix diagram' },
      { fr: "La cartographie mentale", en: 'Mind mapping' },
      { fr: "L'analyse multicritère", en: 'Multicriteria analysis' },
    ],
    correct: 0,
    explanation: {
      fr: "Le diagramme d'affinité regroupe un grand nombre d'idées en groupes par ressemblance pour les analyser. La cartographie mentale consolide des idées autour d'un thème central mais ne trie pas 150 idées ; le diagramme matriciel montre des relations ; l'analyse multicritère évalue des options.",
      en: 'An affinity diagram groups a large number of ideas into clusters by similarity for analysis. Mind mapping organizes ideas around a central theme but does not sort 150 ideas; a matrix diagram shows relationships; multicriteria analysis scores options.',
    },
  },
  {
    id: 'xt14',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Une organisation veut visualiser clairement comment ses exigences réglementaires, les livrables du projet et les équipes responsables sont reliés entre eux. Quelle technique doit utiliser le chef de projet ?",
      en: 'An organization wants to clearly visualize how its regulatory requirements, project deliverables and responsible teams relate to one another. Which technique should the project manager use?',
    },
    options: [
      { fr: "Le diagramme d'affinité", en: 'Affinity diagram' },
      { fr: "L'histogramme", en: 'Histogram' },
      { fr: "La cartographie mentale", en: 'Mind mapping' },
      { fr: "Le diagramme matriciel", en: 'Matrix diagram' },
    ],
    correct: 3,
    explanation: {
      fr: "Le diagramme matriciel met en relation des ensembles d'éléments (exigences × livrables × responsables) et montre la force de leurs liens, comme une matrice de traçabilité. L'histogramme représente une distribution de données ; l'affinité regroupe des idées.",
      en: 'A matrix diagram relates sets of items (requirements × deliverables × owners) and shows how strongly they connect, much like a traceability matrix. A histogram shows a data distribution; affinity groups ideas.',
    },
  },
  {
    id: 'xt15',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-11',
    question: {
      fr: "Trois fournisseurs répondent aux exigences techniques minimales d'un projet critique, mais diffèrent nettement par le coût, le délai de livraison, le risque et le support après déploiement. Quelle technique permet de retenir l'option la plus adaptée ?",
      en: 'Three suppliers meet the minimum technical requirements of a critical project but differ markedly in cost, delivery time, risk and post-deployment support. Which technique identifies the best-fit option?',
    },
    options: [
      { fr: "Un vote majoritaire des parties prenantes", en: 'A majority vote of stakeholders' },
      { fr: "L'analyse des tendances", en: 'Trend analysis' },
      { fr: "Le jugement d'un expert seul", en: 'A single expert’s judgment' },
      { fr: "L'analyse multicritère, avec des critères pondérés", en: 'Multicriteria analysis with weighted criteria' },
    ],
    correct: 3,
    explanation: {
      fr: "L'analyse multicritère (critères pondérés, notes, score global) rend le choix objectif et traçable quand plusieurs critères s'opposent. Un vote ou un avis isolé n'est ni structuré ni défendable en cas d'audit.",
      en: 'Multicriteria analysis (weighted criteria, scores, overall result) makes the choice objective and traceable when several criteria conflict. A vote or a lone opinion is neither structured nor defensible in an audit.',
    },
  },
  {
    id: 'xt16',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Un comité doit choisir un projet parmi trois. Projet A : VAN 900 k€, récupération 5 ans, ressources élevées. Projet B : VAN 750 k€, récupération 2 ans, ressources modérées. Projet C : VAN 650 k€, récupération 1 an, ressources faibles. L'organisation a peu de ressources et veut maximiser la valeur tout en limitant son exposition au risque. Quelle doit être la première action du comité ?",
      en: 'A committee must pick one of three projects. A: NPV €900k, payback 5 years, high resources. B: NPV €750k, payback 2 years, moderate resources. C: NPV €650k, payback 1 year, low resources. The organization has limited resources and wants to maximize value while limiting risk exposure. What should the committee do first?',
    },
    options: [
      { fr: "Retenir A, car sa VAN est la plus élevée", en: 'Select A, because it has the highest NPV' },
      { fr: "Retenir C, car il est remboursé le plus vite", en: 'Select C, because it pays back fastest' },
      { fr: "Écarter A, car il demande le plus de ressources", en: 'Eliminate A, because it needs the most resources' },
      { fr: "Réaliser une analyse multicritère combinant valeur, ressources et délai de récupération", en: 'Run a multicriteria analysis combining value, resources and payback period' },
    ],
    correct: 3,
    explanation: {
      fr: "Aucun critère isolé ne suffit : la VAN seule favorise A malgré 5 ans de risque et beaucoup de ressources ; le délai seul favorise C malgré la moindre valeur. Quand les critères divergent, on les pondère selon la stratégie dans une analyse multicritère avant de décider.",
      en: 'No single criterion is enough: NPV alone favors A despite a 5-year payback and heavy resources; payback alone favors C despite the lowest value. When criteria diverge, weigh them against strategy in a multicriteria analysis before deciding.',
    },
  },
  {
    id: 'xt17',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-03',
    question: {
      fr: "Lors d'un atelier de risques, l'équipe identifie plus de 40 risques potentiels. Le sponsor demande de déterminer rapidement ceux qui nécessitent une attention immédiate. Quelle technique utiliser en premier ?",
      en: 'In a risk workshop the team identifies more than 40 potential risks. The sponsor asks which ones need immediate attention. Which technique should be used first?',
    },
    options: [
      { fr: "La matrice probabilité-impact", en: 'Probability-impact matrix' },
      { fr: "L'analyse des causes racines", en: 'Root cause analysis' },
      { fr: "L'analyse multicritère", en: 'Multicriteria analysis' },
      { fr: "L'analyse des tendances", en: 'Trend analysis' },
    ],
    correct: 0,
    explanation: {
      fr: "L'analyse qualitative des risques classe rapidement les risques par probabilité et impact : la matrice P×I fait ressortir les quelques risques prioritaires. L'analyse des causes racines vient après, sur des risques ou problèmes ciblés.",
      en: 'Qualitative risk analysis quickly ranks risks by probability and impact: the P×I matrix surfaces the few priority risks. Root cause analysis comes later, on targeted risks or issues.',
    },
  },
  {
    id: 'xt18',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-09',
    question: {
      fr: "Lors d'un atelier agile, l'équipe doit décider si une solution est assez comprise et soutenue pour être mise en œuvre. Le Scrum Master demande à chacun de montrer de 0 à 5 doigts. La plupart affichent 4 ou 5, mais deux personnes montrent 2. Quelle est la meilleure action ?",
      en: 'In an agile workshop the team must decide whether a solution is understood and supported enough to implement. The Scrum Master asks everyone to show 0 to 5 fingers. Most show 4 or 5, but two people show 2. What is the best action?',
    },
    options: [
      { fr: "Considérer que la majorité est favorable et lancer la solution", en: 'Treat the majority as supportive and launch the solution' },
      { fr: "Organiser un vote formel pour trancher", en: 'Hold a formal vote to settle it' },
      { fr: "Ignorer les avis minoritaires, le consensus étant largement atteint", en: 'Ignore the minority views because consensus is largely reached' },
      { fr: "Inviter les deux personnes à 2 doigts à expliquer leurs préoccupations", en: 'Invite the two people showing 2 to explain their concerns' },
    ],
    correct: 3,
    explanation: {
      fr: "Le vote au doigt (fist of five) mesure le niveau d'adhésion. Un score de 3 ou plus signifie qu'on peut avancer ; en dessous, la personne exprime ses réserves et l'équipe les traite avant de décider. Les voix minoritaires sont une information précieuse, pas du bruit.",
      en: 'Fist of five measures buy-in. A score of 3 or more means you can proceed; below that, the person voices reservations and the team addresses them before deciding. Minority voices are valuable information, not noise.',
    },
  },
  {
    id: 'xt19',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-10',
    question: {
      fr: "Un programme stratégique de remplacement de systèmes hérités est mené en mode hybride. À six mois, plusieurs parties prenantes demandent de nouvelles fonctionnalités à forte valeur long terme, mais qui menaceraient la date réglementaire de mise en conformité imposée par l'État. Le sponsor trouve ces fonctionnalités attractives, l'équipe conformité exige de tenir l'échéance. Que doit faire le chef de projet ?",
      en: 'A strategic program replacing legacy systems runs in hybrid mode. At six months, several stakeholders ask for new features with strong long-term value that would threaten the government-mandated compliance date. The sponsor likes the features; the compliance team insists on the deadline. What should the project manager do?',
    },
    options: [
      { fr: "Accepter les fonctionnalités pour maximiser la valeur future", en: 'Accept the features to maximize future value' },
      { fr: "Évaluer l'impact des demandes sur les objectifs du projet et faciliter une décision éclairée avec les parties prenantes concernées", en: 'Assess the requests’ impact on project objectives and facilitate an informed decision with the relevant stakeholders' },
      { fr: "Refuser immédiatement les demandes pour protéger la date réglementaire", en: 'Immediately reject the requests to protect the regulatory date' },
      { fr: "Reporter toutes les demandes après la mise en production pour éviter tout retard", en: 'Defer all requests until after go-live to avoid any delay' },
    ],
    correct: 1,
    explanation: {
      fr: "Le chef de projet ne tranche ni dans un sens ni dans l'autre : il évalue l'impact (échéance, coût, risque, valeur) via la gestion des changements, puis facilite la décision par ceux qui ont l'autorité. Accepter ou refuser d'emblée, ou tout reporter sans analyse, contourne cette analyse. Une échéance réglementaire est une contrainte dure à intégrer dans l'évaluation.",
      en: 'The project manager neither accepts nor rejects outright: they assess impact (deadline, cost, risk, value) through change management, then facilitate the decision by those with authority. Accepting, rejecting or deferring everything without analysis skips that step. A regulatory deadline is a hard constraint to factor into the assessment.',
    },
  },
  {
    id: 'xt20',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-07',
    question: {
      fr: "Un projet de transformation numérique est en exécution. Une analyse des tendances montre que le nombre de défauts augmente à chaque livraison, mais les indicateurs de qualité restent dans les seuils acceptables du plan de management de la qualité. Le sponsor juge qu'aucune action n'est nécessaire tant que les seuils ne sont pas dépassés. Que doit faire le chef de projet ?",
      en: 'A digital transformation project is in execution. Trend analysis shows defects rising with each delivery, yet quality metrics remain within the acceptable thresholds in the quality management plan. The sponsor says no action is needed until thresholds are breached. What should the project manager do?',
    },
    options: [
      { fr: "Attendre que les seuils soient dépassés avant d'agir", en: 'Wait for the thresholds to be breached before acting' },
      { fr: "Informer l'équipe que les résultats sont acceptables puisque les métriques sont conformes", en: 'Tell the team results are acceptable since metrics are compliant' },
      { fr: "Mener une analyse des causes racines pour comprendre la hausse des défauts", en: 'Perform a root cause analysis to understand the rise in defects' },
      { fr: "Exiger l'arrêt des livraisons jusqu'à résolution complète du problème", en: 'Demand that deliveries stop until the problem is fully resolved' },
    ],
    correct: 2,
    explanation: {
      fr: "Une tendance défavorable est un signal faible : un projet qui attend le franchissement d'un seuil réagit trop tard. La bonne démarche est proactive et proportionnée : analyser les causes racines, puis agir. Arrêter les livraisons serait excessif ; ignorer la tendance, c'est subir.",
      en: 'An adverse trend is a leading signal: waiting for a threshold breach means reacting too late. The right move is proactive and proportionate: analyze root causes, then act. Halting deliveries would be excessive; ignoring the trend means just letting it happen.',
    },
  },
  {
    id: 'xt21',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Une organisation mène plusieurs projets stratégiques en parallèle. L'un d'eux a la VAN la plus élevée du portefeuille mais requiert les ressources critiques utilisées par trois autres projets en cours. Le comité de portefeuille hésite à le lancer. Que doit recommander le chef de projet ?",
      en: 'An organization runs several strategic projects in parallel. One has the portfolio’s highest NPV but needs critical resources used by three other ongoing projects. The portfolio committee hesitates to launch it. What should the project manager recommend?',
    },
    options: [
      { fr: "Le lancer immédiatement, la VAN étant le critère de sélection le plus important", en: 'Launch it immediately since NPV is the most important selection criterion' },
      { fr: "Annuler les autres projets pour libérer les ressources", en: 'Cancel the other projects to free the resources' },
      { fr: "Reporter le projet jusqu'à ce que les ressources se libèrent, sans analyse", en: 'Postpone until resources free up, without analysis' },
      { fr: "Évaluer l'impact sur le portefeuille et analyser les compromis entre valeur créée et capacité disponible", en: 'Assess the portfolio impact and analyze trade-offs between value created and available capacity' },
    ],
    correct: 3,
    explanation: {
      fr: "Gérer un portefeuille, c'est optimiser la valeur globale sous contrainte de capacité, pas maximiser un seul indicateur. On analyse les compromis (valeur, ressources, dépendances, risques) avant de lancer, reporter ou arrêter quoi que ce soit.",
      en: 'Portfolio management optimizes overall value under capacity constraints, not a single metric. Analyze trade-offs (value, resources, dependencies, risk) before launching, deferring or stopping anything.',
    },
  },
  {
    id: 'xt22',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-01',
    question: {
      fr: "Dans un projet stratégique, deux experts seniors s'opposent régulièrement sur les choix techniques. Les décisions ralentissent et des membres hésitent à participer aux réunions. Le chef de projet constate que chaque expert a des arguments valables et que le désaccord porte sur les priorités plutôt que sur les faits. Que doit-il faire ?",
      en: 'On a strategic project, two senior experts keep clashing over technical choices. Decisions slow down and team members hesitate to speak in meetings. The project manager sees that each expert has valid arguments and the disagreement is about priorities rather than facts. What should they do?',
    },
    options: [
      { fr: "Choisir lui-même la solution pour accélérer", en: 'Pick the solution themself to speed things up' },
      { fr: "Escalader immédiatement au sponsor", en: 'Escalate to the sponsor right away' },
      { fr: "Faire voter l'équipe pour la meilleure solution", en: 'Have the team vote on the best solution' },
      { fr: "Animer une discussion structurée pour faire émerger les intérêts sous-jacents et rechercher une solution commune", en: 'Facilitate a structured discussion to surface underlying interests and seek a shared solution' },
    ],
    correct: 3,
    explanation: {
      fr: "Quand le désaccord porte sur des priorités, la résolution collaborative (résolution de problème) vise les intérêts plutôt que les positions. Trancher soi-même, voter ou escalader d'emblée traite le symptôme, abîme la relation et fait perdre l'engagement des experts. On n'escalade qu'après avoir tenté la résolution à son niveau.",
      en: 'When disagreement is about priorities, collaborative resolution (problem solving) targets interests, not positions. Deciding yourself, voting or escalating immediately treats the symptom, damages the relationship and loses expert buy-in. Escalate only after trying to resolve it at your own level.',
    },
  },
]
