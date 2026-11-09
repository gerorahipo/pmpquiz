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
  {
    id: 'xt23',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Le projet X promet un bénéfice estimé de 320 000 € et le projet Y de 470 000 €. L'organisation choisit le projet X. Quel est le coût d'opportunité de cette décision ?",
      en: 'Project X promises an estimated benefit of €320,000 and project Y €470,000. The organization chooses project X. What is the opportunity cost of this decision?',
    },
    options: [
      { fr: "150 000 €", en: '€150,000' },
      { fr: "320 000 €", en: '€320,000' },
      { fr: "470 000 €", en: '€470,000' },
      { fr: "790 000 €", en: '€790,000' },
    ],
    correct: 2,
    explanation: {
      fr: "Le coût d'opportunité est la valeur de la meilleure alternative abandonnée : ici le projet Y, soit 470 000 €. Pièges : la différence (150 000 €) est un écart de valeur, pas un coût d'opportunité ; la valeur du projet retenu (320 000 €) est ce qu'on obtient, pas ce à quoi on renonce ; additionner les deux n'a aucun sens.",
      en: 'Opportunity cost is the value of the best alternative given up: here project Y, i.e. €470,000. Traps: the difference (€150,000) is a value gap, not an opportunity cost; the chosen project’s value (€320,000) is what you gain, not what you forgo; adding both makes no sense.',
    },
  },
  {
    id: 'xt24',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Trois projets sont candidats : A (VAN 400 k€), B (VAN 520 k€) et C (VAN 610 k€). Les ressources ne permettent d'en mener qu'un seul et le comité retient A pour des raisons stratégiques. Quel est le coût d'opportunité ?",
      en: 'Three projects are candidates: A (NPV €400k), B (NPV €520k) and C (NPV €610k). Resources allow only one, and the committee picks A for strategic reasons. What is the opportunity cost?',
    },
    options: [
      { fr: "610 k€, la valeur de la meilleure alternative abandonnée", en: '€610k, the value of the best alternative forgone' },
      { fr: "1 130 k€, la somme des deux alternatives abandonnées", en: '€1,130k, the sum of the two forgone alternatives' },
      { fr: "520 k€, la valeur de l'alternative intermédiaire", en: '€520k, the value of the middle alternative' },
      { fr: "210 k€, l'écart entre A et C", en: '€210k, the gap between A and C' },
    ],
    correct: 0,
    explanation: {
      fr: "Avec plusieurs alternatives, le coût d'opportunité est la valeur de LA meilleure option sacrifiée, pas la somme de toutes : ici C, soit 610 k€. On ne perd pas B et C en même temps, puisqu'on n'aurait de toute façon pu en réaliser qu'une.",
      en: 'With several alternatives, opportunity cost is the value of THE best option sacrificed, not the sum of all of them: here C, i.e. €610k. You would never have done both B and C anyway, since resources allow only one.',
    },
  },
  {
    id: 'xt25',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Une équipe met en service un nouvel outil de gestion des commandes. Il fonctionne correctement et les employés traitent désormais les commandes deux fois plus vite. Quel élément représente le résultat (outcome) obtenu ?",
      en: 'A team puts a new order-management tool into service. It works correctly and employees now process orders twice as fast. Which element is the outcome achieved?',
    },
    options: [
      { fr: "L'outil de gestion des commandes livré", en: 'The delivered order-management tool' },
      { fr: "La capacité de traiter les commandes avec ce nouvel outil", en: 'The ability to process orders with the new tool' },
      { fr: "Le doublement de la vitesse de traitement des commandes", en: 'The doubling of order-processing speed' },
      { fr: "Le budget consommé par le projet", en: 'The budget consumed by the project' },
    ],
    correct: 2,
    explanation: {
      fr: "Chaîne de valeur : le livrable (l'outil) crée une capacité (pouvoir traiter autrement les commandes), laquelle produit un résultat mesurable (vitesse ×2), qui génère ensuite un bénéfice pour l'organisation. Le résultat est l'effet observé, pas le produit livré ni la capacité.",
      en: 'Value chain: the deliverable (the tool) creates a capability (being able to process orders differently), which produces a measurable outcome (2× speed), which then yields a benefit for the organization. The outcome is the observed effect, not the delivered product or the capability.',
    },
  },
  {
    id: 'xt26',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-13',
    question: {
      fr: "Une équipe construit un produit dont les exigences sont stables et connues depuis le début, et où les changements seraient coûteux. Quelle approche est la plus appropriée ?",
      en: 'A team is building a product whose requirements are stable and known from the start, and where changes would be costly. Which approach is the most appropriate?',
    },
    options: [
      { fr: "Adaptative (agile)", en: 'Adaptive (agile)' },
      { fr: "Itérative sans planification initiale", en: 'Iterative with no upfront planning' },
      { fr: "Hybride par défaut", en: 'Hybrid by default' },
      { fr: "Prédictive (en cascade)", en: 'Predictive (waterfall)' },
    ],
    correct: 3,
    explanation: {
      fr: "Exigences stables et changements coûteux : l'approche prédictive planifie l'ensemble en amont et optimise la maîtrise du périmètre, des coûts et des délais. L'agile brille quand l'incertitude est forte. Le choix découle du contexte, jamais d'une préférence de méthode.",
      en: 'Stable requirements and costly changes: the predictive approach plans everything upfront and optimizes control of scope, cost and schedule. Agile shines under high uncertainty. The choice follows context, never method preference.',
    },
  },
  {
    id: 'xt27',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-13',
    question: {
      fr: "Laquelle de ces caractéristiques est typiquement associée à une approche prédictive plutôt qu'adaptative ?",
      en: 'Which of these characteristics is typically associated with a predictive rather than an adaptive approach?',
    },
    options: [
      { fr: "Repriorisation continue du backlog", en: 'Continuous backlog reprioritization' },
      { fr: "Planification détaillée en amont", en: 'Detailed upfront planning' },
      { fr: "Retours fréquents des utilisateurs à chaque itération", en: 'Frequent user feedback each iteration' },
      { fr: "Leadership serviteur d'une équipe auto-organisée", en: 'Servant leadership of a self-organizing team' },
    ],
    correct: 1,
    explanation: {
      fr: "Le prédictif définit le plus possible dès le départ (périmètre, calendrier, coûts) pour gagner en prévisibilité. Repriorisation continue, retours fréquents et leadership serviteur sont des marques de l'approche adaptative.",
      en: 'Predictive defines as much as possible upfront (scope, schedule, cost) for predictability. Continuous reprioritization, frequent feedback and servant leadership are hallmarks of the adaptive approach.',
    },
  },
  {
    id: 'xt28',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-09',
    question: {
      fr: "Des développeurs et des représentants métier travaillent sur un nouveau produit. Pour mieux comprendre les besoins, l'organisation veut appliquer un principe du Manifeste Agile. Quelle pratique est la plus alignée ?",
      en: 'Developers and business representatives are working on a new product. To better understand needs, the organization wants to apply a principle of the Agile Manifesto. Which practice is most aligned?',
    },
    options: [
      { fr: "Rédiger une documentation exhaustive avant tout développement", en: 'Write exhaustive documentation before any development' },
      { fr: "Réduire les échanges avec les utilisateurs pour éviter les changements fréquents", en: 'Limit exchanges with users to avoid frequent changes' },
      { fr: "Exiger une validation à plusieurs niveaux hiérarchiques avant chaque décision", en: 'Require multi-level management sign-off before each decision' },
      { fr: "Favoriser une collaboration étroite et régulière entre les représentants métier et les développeurs", en: 'Foster close, regular collaboration between business representatives and developers' },
    ],
    correct: 3,
    explanation: {
      fr: "Le Manifeste valorise les individus et les interactions plus que les processus, et la collaboration avec le client plus que la négociation contractuelle. Les gens du métier et les développeurs travaillent ensemble au quotidien : cela réduit les malentendus et accélère le feedback.",
      en: 'The Manifesto values individuals and interactions over processes, and customer collaboration over contract negotiation. Business people and developers work together daily: this reduces misunderstandings and speeds feedback.',
    },
  },
  {
    id: 'xt29',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Deux projets sont comparés uniquement sur leur VAN : le projet A a une VAN de 210 000 € et le projet B de 165 000 €. Selon le principe de la VAN, lequel retenir ?",
      en: 'Two projects are compared on NPV alone: project A has an NPV of €210,000 and project B €165,000. According to the NPV principle, which should be selected?',
    },
    options: [
      { fr: "Le projet A, car sa VAN est la plus élevée", en: 'Project A, because it has the higher NPV' },
      { fr: "Le projet B, car sa VAN plus faible le rend moins risqué", en: 'Project B, because its lower NPV makes it less risky' },
      { fr: "Aucun des deux avant de connaître la durée de chaque projet", en: 'Neither until the duration of each project is known' },
      { fr: "Les deux, car une VAN positive suffit à elle seule", en: 'Both, because a positive NPV alone is enough' },
    ],
    correct: 0,
    explanation: {
      fr: "La VAN actualise tous les flux futurs : elle intègre déjà la valeur temps de l'argent et donc la durée. À critère égal, on retient la VAN la plus élevée, sous réserve de capacité (si les ressources ne permettent qu'un projet). Une VAN faible n'est pas « moins risquée », elle crée simplement moins de valeur.",
      en: 'NPV discounts all future cash flows: it already reflects the time value of money, hence duration. All else equal, select the highest NPV, capacity permitting (if resources allow only one project). A lower NPV is not “less risky”, just less value-creating.',
    },
  },
  {
    id: 'xt30',
    domain: 'business',
    difficulty: 'easy',
    ecoTask: 'business-02',
    question: {
      fr: "Deux projets sont évalués selon leur délai de récupération : le projet A récupère l'investissement en 3 ans, le projet B en 5 ans. Sur ce seul critère, lequel est généralement préféré ?",
      en: 'Two projects are evaluated on payback period: project A recovers the investment in 3 years, project B in 5 years. On this criterion alone, which is generally preferred?',
    },
    options: [
      { fr: "Le projet B, car il génère des revenus plus longtemps", en: 'Project B, because it generates revenue for longer' },
      { fr: "Impossible à déterminer sans la VAN", en: 'Impossible to say without the NPV' },
      { fr: "Le projet A, car il récupère l'investissement plus vite et limite l'exposition financière", en: 'Project A, because it recovers the investment faster and limits financial exposure' },
      { fr: "Les deux sont équivalents", en: 'They are equivalent' },
    ],
    correct: 2,
    explanation: {
      fr: "Plus le délai de récupération est court, plus vite l'investissement est remboursé et plus faible est le risque financier : A est préféré sur ce critère. Limite à connaître : il ignore la valeur temps de l'argent et les flux après le seuil, d'où l'intérêt de le croiser avec la VAN.",
      en: 'The shorter the payback, the sooner the investment is repaid and the lower the financial risk: A is preferred on this criterion. Limitation to know: it ignores the time value of money and cash flows after break-even, hence cross-checking with NPV.',
    },
  },
  {
    id: 'xt31',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-08',
    question: {
      fr: "Dans un canevas de projet (project canvas), quelle section permet d'identifier explicitement les activités ou livrables exclus du projet ?",
      en: 'In a project canvas, which section explicitly identifies the activities or deliverables excluded from the project?',
    },
    options: [
      { fr: "Livrables", en: 'Deliverables' },
      { fr: "Objectif", en: 'Objective' },
      { fr: "Hypothèses et contraintes", en: 'Assumptions and constraints' },
      { fr: "Hors périmètre", en: 'Out of scope' },
    ],
    correct: 3,
    explanation: {
      fr: "La section « Hors périmètre » dit clairement ce qui ne sera pas réalisé. Elle prévient les malentendus avec les parties prenantes et limite la dérive du périmètre (scope creep). Les hypothèses et contraintes décrivent le contexte, pas les exclusions.",
      en: 'The “Out of scope” section states plainly what will not be done. It prevents stakeholder misunderstandings and limits scope creep. Assumptions and constraints describe context, not exclusions.',
    },
  },
  {
    id: 'xt32',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-13',
    question: {
      fr: "Comment définit-on l'adaptation (tailoring) en gestion de projet ?",
      en: 'How is tailoring defined in project management?',
    },
    options: [
      { fr: "L'application stricte des processus standards à tous les projets", en: 'Strictly applying standard processes to all projects' },
      { fr: "Le remplacement systématique d'une approche prédictive par une approche agile", en: 'Systematically replacing a predictive approach with an agile one' },
      { fr: "L'ajustement délibéré de l'approche, de la gouvernance et des processus selon le contexte du projet", en: 'Deliberately adjusting approach, governance and processes to the project context' },
      { fr: "La suppression de la documentation pour accélérer les livraisons", en: 'Removing documentation to speed up delivery' },
    ],
    correct: 2,
    explanation: {
      fr: "Chaque projet est unique : l'adaptation ajuste méthodes, gouvernance et processus au contexte réel. Ce n'est ni appliquer les mêmes règles partout, ni imposer l'agile systématiquement, ni supprimer la documentation pour aller plus vite.",
      en: 'Every project is unique: tailoring adjusts methods, governance and processes to the real context. It is neither applying the same rules everywhere, nor imposing agile systematically, nor dropping documentation for speed.',
    },
  },
]
