import type { BaseQuestion } from '../types'

export const BASE_QUESTIONS: BaseQuestion[] = [
  // ─────────────────────────── PEOPLE ───────────────────────────
  {
    id: 'p01',
    domain: 'people',
    question: {
      fr: "Deux membres de l'équipe sont en désaccord persistant sur une approche technique, ce qui commence à retarder le travail. Que doit faire le chef de projet EN PREMIER ?",
      en: 'Two team members have an ongoing disagreement about a technical approach, and it is starting to delay work. What should the project manager do FIRST?',
    },
    options: [
      {
        fr: 'Escalader le conflit au sponsor du projet',
        en: 'Escalate the conflict to the project sponsor',
      },
      {
        fr: 'Rencontrer les deux membres pour comprendre la source du conflit et faciliter une résolution collaborative',
        en: 'Meet with both team members to understand the source of the conflict and facilitate a collaborative resolution',
      },
      {
        fr: "Imposer sa propre décision technique pour mettre fin au débat",
        en: 'Impose their own technical decision to end the debate',
      },
      {
        fr: "Réaffecter l'un des deux membres à un autre projet",
        en: 'Reassign one of the team members to another project',
      },
    ],
    correct: 1,
    explanation: {
      fr: "La résolution de conflit privilégiée est la collaboration / résolution de problème (gagnant-gagnant). Le chef de projet doit d'abord comprendre la cause racine et faciliter une solution avec les parties concernées, avant toute escalade ou décision unilatérale.",
      en: 'The preferred conflict-resolution technique is collaborating / problem solving (win-win). The project manager should first understand the root cause and facilitate a solution with the people involved, before escalating or deciding unilaterally.',
    },
  },
  {
    id: 'p02',
    domain: 'people',
    question: {
      fr: "Un membre de l'équipe très performant semble démotivé depuis quelques semaines et sa productivité baisse. Quelle est la meilleure action du chef de projet ?",
      en: 'A high-performing team member has seemed disengaged for a few weeks and their productivity is dropping. What is the best action for the project manager?',
    },
    options: [
      {
        fr: 'Organiser un entretien individuel pour comprendre la situation et identifier comment le soutenir',
        en: 'Hold a one-on-one conversation to understand the situation and identify how to support them',
      },
      {
        fr: 'Signaler la baisse de performance au responsable fonctionnel',
        en: 'Report the performance drop to their functional manager',
      },
      {
        fr: 'Attribuer les tâches critiques à un autre membre plus motivé',
        en: 'Assign critical tasks to a more motivated team member',
      },
      {
        fr: "Rappeler à toute l'équipe les objectifs de performance",
        en: 'Remind the whole team about performance objectives',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Un leadership au service de l'équipe (servant leadership) implique d'écouter d'abord la personne, d'identifier les obstacles ou causes personnelles/professionnelles, puis d'agir. Escalader ou contourner la personne sans dialogue nuit à la confiance.",
      en: 'Servant leadership means listening to the person first, identifying blockers or personal/professional causes, then acting. Escalating or bypassing the person without a conversation damages trust.',
    },
  },
  {
    id: 'p03',
    domain: 'people',
    question: {
      fr: "Lors du lancement d'un projet, le chef de projet veut établir des règles de fonctionnement communes pour l'équipe. Quel outil est le plus approprié ?",
      en: 'At project kickoff, the project manager wants to establish common working agreements for the team. Which tool is most appropriate?',
    },
    options: [
      { fr: "La charte d'équipe (team charter)", en: 'The team charter' },
      { fr: 'Le registre des parties prenantes', en: 'The stakeholder register' },
      { fr: 'La matrice RACI', en: 'The RACI matrix' },
      { fr: 'Le plan de management des ressources', en: 'The resource management plan' },
    ],
    correct: 0,
    explanation: {
      fr: "La charte d'équipe définit les valeurs, les règles de communication, les processus de décision et de résolution de conflit acceptés par l'équipe. Elle est d'autant plus efficace qu'elle est co-créée par l'équipe elle-même.",
      en: 'The team charter documents the values, communication ground rules, decision-making and conflict-resolution processes agreed by the team. It is most effective when co-created by the team itself.',
    },
  },
  {
    id: 'p04',
    domain: 'people',
    question: {
      fr: "Une équipe agile nouvellement formée dépend fortement du chef de projet pour chaque décision. Que doit faire ce dernier pour développer l'autonomie de l'équipe ?",
      en: 'A newly formed agile team relies heavily on the project manager for every decision. What should the project manager do to grow the team’s autonomy?',
    },
    options: [
      {
        fr: 'Continuer à décider pour gagner du temps sur le projet',
        en: 'Keep making the decisions to save project time',
      },
      {
        fr: "Coacher l'équipe, clarifier les limites de délégation et l'encourager à décider progressivement elle-même",
        en: 'Coach the team, clarify decision boundaries, and progressively encourage them to decide on their own',
      },
      {
        fr: "Demander au Scrum Master de prendre toutes les décisions",
        en: 'Ask the Scrum Master to make all the decisions',
      },
      {
        fr: "Mettre en place un comité de validation des décisions",
        en: 'Set up a decision approval committee',
      },
    ],
    correct: 1,
    explanation: {
      fr: "Développer des équipes auto-organisées passe par le coaching, la délégation progressive et un cadre clair (limites, objectifs). C'est un comportement clé du leadership au service de l'équipe attendu à l'examen.",
      en: 'Building self-organizing teams requires coaching, progressive delegation and a clear frame (boundaries, goals). This is a key servant-leadership behavior expected on the exam.',
    },
  },
  {
    id: 'p05',
    domain: 'people',
    question: {
      fr: "Un membre d'une équipe virtuelle répartie sur plusieurs fuseaux horaires se sent isolé et exclu des décisions. Quelle est la meilleure réponse du chef de projet ?",
      en: 'A member of a virtual team spread across time zones feels isolated and excluded from decisions. What is the project manager’s best response?',
    },
    options: [
      {
        fr: "Adapter les rituels et outils de collaboration pour garantir l'inclusion de tous (horaires tournants, décisions documentées)",
        en: 'Adapt collaboration rituals and tools to ensure everyone is included (rotating meeting times, documented decisions)',
      },
      {
        fr: "Lui demander de s'adapter aux horaires du siège",
        en: 'Ask them to adapt to headquarters’ working hours',
      },
      {
        fr: 'Le retirer des décisions non essentielles pour réduire les réunions',
        en: 'Remove them from non-essential decisions to reduce meetings',
      },
      {
        fr: 'Organiser un déplacement annuel de toute l’équipe',
        en: 'Organize a yearly on-site gathering for the whole team',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le management d'équipes virtuelles exige d'adapter la communication : alterner les horaires de réunion, documenter les décisions de façon asynchrone et utiliser des outils collaboratifs. L'inclusion est une responsabilité active du chef de projet.",
      en: 'Managing virtual teams requires adapting communication: rotating meeting times, documenting decisions asynchronously and using collaborative tools. Inclusion is an active responsibility of the project manager.',
    },
  },
  {
    id: 'p06',
    domain: 'people',
    question: {
      fr: "Une partie prenante influente s'oppose ouvertement au projet en réunion. Que doit faire le chef de projet EN PREMIER ?",
      en: 'An influential stakeholder openly opposes the project in a meeting. What should the project manager do FIRST?',
    },
    options: [
      {
        fr: "Rencontrer la partie prenante pour comprendre ses préoccupations et ses attentes",
        en: 'Meet the stakeholder to understand their concerns and expectations',
      },
      {
        fr: 'Demander au sponsor de la recadrer',
        en: 'Ask the sponsor to rein them in',
      },
      {
        fr: "L'exclure des prochaines réunions",
        en: 'Exclude them from future meetings',
      },
      {
        fr: "Mettre à jour le registre des risques",
        en: 'Update the risk register',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Face à une partie prenante résistante, la première étape est toujours l'écoute directe pour comprendre les causes de la résistance, puis d'adapter la stratégie d'engagement. Les actions documentaires ou l'escalade viennent ensuite.",
      en: 'With a resistant stakeholder, the first step is always direct listening to understand the causes of resistance, then adapting the engagement strategy. Documentation or escalation come after.',
    },
  },
  {
    id: 'p07',
    domain: 'people',
    question: {
      fr: "L'équipe traverse la phase de « storming » : tensions et confrontations fréquentes. Quel comportement du chef de projet est le plus adapté ?",
      en: 'The team is in the “storming” stage: frequent tension and confrontation. Which project manager behavior is most appropriate?',
    },
    options: [
      {
        fr: 'Laisser l’équipe régler seule ses différends sans intervenir',
        en: 'Let the team sort out its differences without intervening',
      },
      {
        fr: 'Faciliter activement la communication, clarifier rôles et règles, et aider à résoudre les conflits',
        en: 'Actively facilitate communication, clarify roles and ground rules, and help resolve conflicts',
      },
      {
        fr: 'Recomposer immédiatement l’équipe',
        en: 'Immediately restructure the team',
      },
      {
        fr: "Reporter les décisions importantes jusqu'à la fin des tensions",
        en: 'Postpone important decisions until tensions subside',
      },
    ],
    correct: 1,
    explanation: {
      fr: "Selon le modèle de Tuckman (forming, storming, norming, performing, adjourning), la phase de storming demande un accompagnement actif : facilitation, clarification des rôles et médiation pour amener l'équipe vers le norming.",
      en: 'In Tuckman’s model (forming, storming, norming, performing, adjourning), the storming stage calls for active support: facilitation, role clarification and mediation to move the team toward norming.',
    },
  },
  {
    id: 'p08',
    domain: 'people',
    question: {
      fr: "Le chef de projet constate qu'un livrable a été confié à deux personnes qui pensent chacune que l'autre en est responsable. Quel outil aurait permis d'éviter cette situation ?",
      en: 'The project manager finds that a deliverable was assigned to two people who each think the other owns it. Which tool would have prevented this?',
    },
    options: [
      { fr: 'Le diagramme de Gantt', en: 'The Gantt chart' },
      { fr: 'La matrice RACI (matrice des responsabilités)', en: 'The RACI matrix (responsibility assignment matrix)' },
      { fr: 'Le registre des hypothèses', en: 'The assumption log' },
      { fr: "L'organigramme de l'entreprise", en: 'The company org chart' },
    ],
    correct: 1,
    explanation: {
      fr: "La matrice RACI (Responsible, Accountable, Consulted, Informed) clarifie qui réalise et qui est redevable pour chaque livrable — avec un seul « A » par ligne. Elle prévient les chevauchements et les oublis de responsabilité.",
      en: 'The RACI matrix (Responsible, Accountable, Consulted, Informed) clarifies who performs and who is accountable for each deliverable — with a single “A” per row. It prevents overlaps and ownership gaps.',
    },
  },
  {
    id: 'p09',
    domain: 'people',
    question: {
      fr: "Un nouveau membre rejoint l'équipe en cours de projet et peine à monter en compétence. Quelle est la meilleure action ?",
      en: 'A new member joins the team mid-project and is struggling to get up to speed. What is the best action?',
    },
    options: [
      {
        fr: 'Mettre en place du mentorat ou du binômage avec un membre expérimenté',
        en: 'Set up mentoring or pairing with an experienced team member',
      },
      {
        fr: 'Lui confier uniquement des tâches simples jusqu’à la fin du projet',
        en: 'Give them only simple tasks until the project ends',
      },
      {
        fr: "Demander son remplacement par une personne expérimentée",
        en: 'Request a replacement with an experienced person',
      },
      {
        fr: 'Allonger le planning pour compenser',
        en: 'Extend the schedule to compensate',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Développer les compétences de l'équipe (formation, mentorat, binômage) est la réponse attendue : elle renforce durablement l'équipe et favorise l'intégration, contrairement aux options d'évitement ou de remplacement.",
      en: 'Developing team members’ skills (training, mentoring, pairing) is the expected answer: it strengthens the team sustainably and supports integration, unlike avoidance or replacement options.',
    },
  },
  {
    id: 'p10',
    domain: 'people',
    question: {
      fr: "En rétrospective, l'équipe signale que les réunions quotidiennes durent trop longtemps et dérivent en discussions techniques. Que recommander ?",
      en: 'In a retrospective, the team reports that daily stand-ups run too long and drift into technical discussions. What should be recommended?',
    },
    options: [
      {
        fr: 'Recentrer le daily sur son objectif (synchronisation courte) et planifier les discussions techniques juste après avec les personnes concernées',
        en: 'Refocus the daily on its purpose (short synchronization) and schedule technical discussions right after with only the people involved',
      },
      { fr: 'Supprimer la réunion quotidienne', en: 'Cancel the daily stand-up' },
      { fr: 'Passer la réunion à une heure', en: 'Extend the meeting to one hour' },
      {
        fr: 'Interdire toute discussion technique dans l’équipe',
        en: 'Forbid technical discussions in the team',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le daily (mêlée quotidienne) est un point de synchronisation limité dans le temps (~15 min). Les sujets détaillés sont traités en aparté (« after-party ») avec les personnes concernées. La rétrospective sert précisément à ajuster ce type de pratique.",
      en: 'The daily stand-up is a time-boxed synchronization (~15 min). Detailed topics are handled right after with only the relevant people. The retrospective exists precisely to adjust such practices.',
    },
  },
  {
    id: 'p11',
    domain: 'people',
    question: {
      fr: "Le sponsor impose une date de fin irréaliste. L'équipe est démoralisée. Que doit faire le chef de projet ?",
      en: 'The sponsor imposes an unrealistic end date. The team is demoralized. What should the project manager do?',
    },
    options: [
      {
        fr: "Présenter au sponsor des données objectives (estimations, vélocité, risques) et négocier périmètre, délai ou ressources",
        en: 'Present objective data to the sponsor (estimates, velocity, risks) and negotiate scope, schedule or resources',
      },
      {
        fr: "Accepter la date et demander à l'équipe de faire des heures supplémentaires",
        en: 'Accept the date and ask the team to work overtime',
      },
      {
        fr: 'Réduire discrètement la qualité pour tenir la date',
        en: 'Quietly reduce quality to meet the date',
      },
      {
        fr: "Attendre que le retard devienne visible pour en discuter",
        en: 'Wait until the delay becomes visible to discuss it',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet défend l'équipe et la faisabilité avec des faits : estimations, données historiques, analyse des contraintes (triple contrainte : périmètre-délai-coût). Sacrifier la qualité ou épuiser l'équipe n'est jamais la bonne réponse à l'examen.",
      en: 'The project manager advocates for the team and feasibility with facts: estimates, historical data, constraint analysis (scope–schedule–cost). Sacrificing quality or burning out the team is never the right exam answer.',
    },
  },
  {
    id: 'p12',
    domain: 'people',
    question: {
      fr: "Quel style de leadership est le plus valorisé pour un chef de projet dans les approches agiles et le PMBOK® récent ?",
      en: 'Which leadership style is most emphasized for a project manager in agile approaches and the recent PMBOK®?',
    },
    options: [
      { fr: 'Le leadership directif (command and control)', en: 'Directive leadership (command and control)' },
      { fr: 'Le leadership au service de l’équipe (servant leadership)', en: 'Servant leadership' },
      { fr: 'Le laisser-faire', en: 'Laissez-faire' },
      { fr: 'Le leadership transactionnel', en: 'Transactional leadership' },
    ],
    correct: 1,
    explanation: {
      fr: "Le servant leadership consiste à lever les obstacles, protéger l'équipe des interruptions, développer les personnes et faciliter plutôt que commander. C'est le style de référence attendu dans la majorité des questions situationnelles.",
      en: 'Servant leadership means removing impediments, shielding the team from interruptions, growing people and facilitating rather than commanding. It is the reference style expected in most situational questions.',
    },
  },

  // ─────────────────────────── PROCESS ───────────────────────────
  {
    id: 'q01',
    domain: 'process',
    question: {
      fr: "Une partie prenante demande un changement de périmètre en cours de projet (approche prédictive). Que doit faire le chef de projet EN PREMIER ?",
      en: 'A stakeholder requests a scope change mid-project (predictive approach). What should the project manager do FIRST?',
    },
    options: [
      {
        fr: "Évaluer l'impact du changement sur le périmètre, le délai, le coût, la qualité et les risques",
        en: 'Assess the impact of the change on scope, schedule, cost, quality and risks',
      },
      { fr: 'Refuser le changement pour protéger la référence de base', en: 'Reject the change to protect the baseline' },
      { fr: 'Mettre en œuvre le changement immédiatement', en: 'Implement the change immediately' },
      { fr: "Soumettre directement le changement au comité de contrôle des changements", en: 'Submit the change directly to the change control board' },
    ],
    correct: 0,
    explanation: {
      fr: "Le processus de maîtrise intégrée des changements commence toujours par l'analyse d'impact, avant la soumission au comité (CCB) et la décision. À l'examen : ne jamais implémenter ni refuser sans analyse préalable.",
      en: 'Integrated change control always starts with impact analysis, before submission to the change control board (CCB) and the decision. On the exam: never implement or reject without prior analysis.',
    },
  },
  {
    id: 'q02',
    domain: 'process',
    question: {
      fr: "Un projet a : EV = 400 k€, PV = 500 k€, AC = 450 k€. Quel est le statut du projet ?",
      en: 'A project has: EV = $400K, PV = $500K, AC = $450K. What is the project status?',
    },
    options: [
      { fr: 'En retard et en dépassement de budget', en: 'Behind schedule and over budget' },
      { fr: 'En avance et sous le budget', en: 'Ahead of schedule and under budget' },
      { fr: 'En retard mais sous le budget', en: 'Behind schedule but under budget' },
      { fr: 'Dans les temps et dans le budget', en: 'On schedule and on budget' },
    ],
    correct: 0,
    explanation: {
      fr: "SV = EV − PV = −100 (retard). CV = EV − AC = −50 (surcoût). SPI = 400/500 = 0,8 et CPI = 400/450 ≈ 0,89 : les deux < 1, donc le projet est en retard ET en dépassement de budget.",
      en: 'SV = EV − PV = −100 (behind). CV = EV − AC = −50 (over cost). SPI = 400/500 = 0.8 and CPI = 400/450 ≈ 0.89: both < 1, so the project is behind schedule AND over budget.',
    },
  },
  {
    id: 'q03',
    domain: 'process',
    question: {
      fr: "Quel est le chemin critique d'un projet ?",
      en: 'What is the critical path of a project?',
    },
    options: [
      {
        fr: 'La séquence d’activités la plus longue, qui détermine la durée minimale du projet',
        en: 'The longest sequence of activities, which determines the minimum project duration',
      },
      { fr: 'La séquence contenant les activités les plus risquées', en: 'The sequence containing the riskiest activities' },
      { fr: 'La séquence la plus courte du réseau', en: 'The shortest path in the network' },
      { fr: 'Les activités avec le plus de ressources', en: 'The activities with the most resources' },
    ],
    correct: 0,
    explanation: {
      fr: "Le chemin critique est le chemin le plus long du diagramme de réseau ; ses activités ont une marge (float) nulle. Tout retard sur ce chemin retarde directement la fin du projet.",
      en: 'The critical path is the longest path through the network diagram; its activities have zero float. Any delay on this path directly delays the project finish.',
    },
  },
  {
    id: 'q04',
    domain: 'process',
    question: {
      fr: "Le projet doit absolument être accéléré. Le chef de projet ajoute des ressources sur les activités du chemin critique, ce qui augmente les coûts. Comment s'appelle cette technique ?",
      en: 'The project must be accelerated. The project manager adds resources to critical path activities, increasing cost. What is this technique called?',
    },
    options: [
      { fr: 'La compression (crashing)', en: 'Crashing' },
      { fr: "L'exécution accélérée par chevauchement (fast tracking)", en: 'Fast tracking' },
      { fr: 'Le nivellement des ressources', en: 'Resource leveling' },
      { fr: 'Le lissage des ressources', en: 'Resource smoothing' },
    ],
    correct: 0,
    explanation: {
      fr: "Le crashing ajoute des ressources (coût ↑) pour raccourcir la durée. Le fast tracking met en parallèle des activités normalement séquentielles (risque ↑ sans surcoût direct). Les deux s'appliquent au chemin critique.",
      en: 'Crashing adds resources (cost ↑) to shorten duration. Fast tracking overlaps normally sequential activities (risk ↑ without direct extra cost). Both apply to the critical path.',
    },
  },
  {
    id: 'q05',
    domain: 'process',
    question: {
      fr: "Un risque identifié aurait un impact majeur. L'équipe décide de souscrire une assurance pour couvrir cet impact. Quelle stratégie de réponse au risque est utilisée ?",
      en: 'An identified risk would have a major impact. The team decides to buy insurance to cover it. Which risk response strategy is being used?',
    },
    options: [
      { fr: 'Le transfert', en: 'Transfer' },
      { fr: "L'évitement", en: 'Avoid' },
      { fr: "L'atténuation", en: 'Mitigate' },
      { fr: "L'acceptation", en: 'Accept' },
    ],
    correct: 0,
    explanation: {
      fr: "Le transfert déplace la responsabilité financière du risque vers un tiers (assurance, garantie, sous-traitance). Éviter = éliminer la cause ; atténuer = réduire probabilité/impact ; accepter = ne rien faire (ou prévoir une réserve).",
      en: 'Transfer shifts the financial ownership of the risk to a third party (insurance, warranty, outsourcing). Avoid = eliminate the cause; mitigate = reduce probability/impact; accept = do nothing (or set a reserve).',
    },
  },
  {
    id: 'q06',
    domain: 'process',
    question: {
      fr: "En approche agile, quel artefact ordonne les fonctionnalités par valeur et sert de source unique de travail pour l'équipe ?",
      en: 'In an agile approach, which artifact orders features by value and serves as the single source of work for the team?',
    },
    options: [
      { fr: 'Le backlog de produit', en: 'The product backlog' },
      { fr: 'Le diagramme de burndown', en: 'The burndown chart' },
      { fr: "La définition de terminé (DoD)", en: 'The Definition of Done (DoD)' },
      { fr: 'Le plan de management du périmètre', en: 'The scope management plan' },
    ],
    correct: 0,
    explanation: {
      fr: "Le product backlog est la liste unique, ordonnée par valeur et régulièrement affinée (refinement), de tout le travail potentiel. Le Product Owner en est responsable et le priorise.",
      en: 'The product backlog is the single, value-ordered and regularly refined list of all potential work. The Product Owner owns and prioritizes it.',
    },
  },
  {
    id: 'q07',
    domain: 'process',
    question: {
      fr: "À la fin d'une itération, l'équipe présente l'incrément aux parties prenantes pour recueillir leurs retours. Comment s'appelle cet événement ?",
      en: 'At the end of an iteration, the team presents the increment to stakeholders to gather feedback. What is this event called?',
    },
    options: [
      { fr: "La revue d'itération (sprint review)", en: 'The iteration review (sprint review)' },
      { fr: 'La rétrospective', en: 'The retrospective' },
      { fr: 'La mêlée quotidienne', en: 'The daily stand-up' },
      { fr: 'La planification de sprint', en: 'Sprint planning' },
    ],
    correct: 0,
    explanation: {
      fr: "La sprint review porte sur le PRODUIT (démonstration, feedback des parties prenantes, adaptation du backlog). La rétrospective porte sur le PROCESSUS et la manière de travailler de l'équipe.",
      en: 'The sprint review is about the PRODUCT (demo, stakeholder feedback, backlog adaptation). The retrospective is about the PROCESS and how the team works.',
    },
  },
  {
    id: 'q08',
    domain: 'process',
    question: {
      fr: "Quel document autorise formellement l'existence du projet et donne au chef de projet l'autorité d'utiliser les ressources de l'organisation ?",
      en: 'Which document formally authorizes the project and gives the project manager authority to use organizational resources?',
    },
    options: [
      { fr: 'La charte du projet', en: 'The project charter' },
      { fr: 'Le plan de management du projet', en: 'The project management plan' },
      { fr: 'Le business case', en: 'The business case' },
      { fr: "L'énoncé du périmètre", en: 'The scope statement' },
    ],
    correct: 0,
    explanation: {
      fr: "La charte du projet, émise par le sponsor, autorise formellement le projet, nomme le chef de projet et définit les objectifs de haut niveau. Le business case justifie l'investissement mais n'autorise rien.",
      en: 'The project charter, issued by the sponsor, formally authorizes the project, names the project manager and sets high-level objectives. The business case justifies the investment but authorizes nothing.',
    },
  },
  {
    id: 'q09',
    domain: 'process',
    question: {
      fr: "Le client signale que certains livrables acceptés ne correspondent pas à ses attentes, alors qu'ils sont conformes aux exigences documentées. Quelle est la cause la plus probable ?",
      en: 'The customer reports that some accepted deliverables do not meet their expectations, even though they conform to documented requirements. What is the most likely cause?',
    },
    options: [
      {
        fr: 'Une collecte des exigences et une gestion des parties prenantes insuffisantes',
        en: 'Insufficient requirements collection and stakeholder engagement',
      },
      { fr: 'Un manque de contrôle qualité', en: 'A lack of quality control' },
      { fr: 'Une mauvaise gestion des coûts', en: 'Poor cost management' },
      { fr: 'Un échéancier trop optimiste', en: 'An overly optimistic schedule' },
    ],
    correct: 0,
    explanation: {
      fr: "La qualité c'est la conformité aux exigences ET l'aptitude à l'usage. Si les livrables sont conformes mais insatisfaisants, ce sont les exigences qui n'ont pas capturé les vrais besoins — un défaut d'élicitation et d'engagement des parties prenantes.",
      en: 'Quality is conformance to requirements AND fitness for use. If deliverables conform but disappoint, the requirements failed to capture the real needs — an elicitation and stakeholder-engagement gap.',
    },
  },
  {
    id: 'q10',
    domain: 'process',
    question: {
      fr: "Quelle est la différence entre la référence de base des coûts (cost baseline) et le budget du projet ?",
      en: 'What is the difference between the cost baseline and the project budget?',
    },
    options: [
      {
        fr: 'Le budget = référence de base + réserves de management',
        en: 'The budget = cost baseline + management reserves',
      },
      {
        fr: 'Ce sont deux noms pour la même chose',
        en: 'They are two names for the same thing',
      },
      {
        fr: 'La référence de base inclut les réserves de management',
        en: 'The cost baseline includes management reserves',
      },
      {
        fr: 'Le budget exclut les réserves pour aléas',
        en: 'The budget excludes contingency reserves',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Référence de base des coûts = coûts estimés + réserves pour aléas (risques identifiés, « known unknowns »). Budget total = référence de base + réserves de management (« unknown unknowns », contrôlées par la direction).",
      en: 'Cost baseline = estimated costs + contingency reserves (identified risks, “known unknowns”). Total budget = cost baseline + management reserves (“unknown unknowns”, controlled by management).',
    },
  },
  {
    id: 'q11',
    domain: 'process',
    question: {
      fr: "Un chef de projet doit choisir entre approche prédictive, agile ou hybride. Quel facteur pousse le plus vers une approche AGILE ?",
      en: 'A project manager must choose between predictive, agile or hybrid approaches. Which factor most favors an AGILE approach?',
    },
    options: [
      {
        fr: 'Des exigences incertaines et un besoin de retours fréquents',
        en: 'Uncertain requirements and a need for frequent feedback',
      },
      {
        fr: 'Des exigences stables et bien connues',
        en: 'Stable, well-understood requirements',
      },
      {
        fr: 'Des contraintes réglementaires imposant une documentation exhaustive en amont',
        en: 'Regulatory constraints requiring exhaustive upfront documentation',
      },
      {
        fr: 'Un contrat à prix forfaitaire strict',
        en: 'A strict fixed-price contract',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'agile excelle quand l'incertitude est forte : exigences évolutives, besoin d'apprendre vite par des livraisons incrémentales et des retours fréquents. Les contextes stables et très contraints favorisent le prédictif ou l'hybride.",
      en: 'Agile shines under high uncertainty: evolving requirements and the need to learn fast through incremental delivery and frequent feedback. Stable, highly constrained contexts favor predictive or hybrid.',
    },
  },
  {
    id: 'q12',
    domain: 'process',
    question: {
      fr: "Pendant l'exécution, l'équipe découvre qu'un livrable ne passe pas les critères d'acceptation. Que faire EN PREMIER ?",
      en: 'During execution, the team finds a deliverable failing its acceptance criteria. What should be done FIRST?',
    },
    options: [
      {
        fr: 'Analyser la cause racine du défaut avant de corriger',
        en: 'Analyze the root cause of the defect before fixing',
      },
      { fr: 'Livrer quand même et corriger plus tard', en: 'Ship anyway and fix later' },
      { fr: "Assouplir les critères d'acceptation", en: 'Relax the acceptance criteria' },
      { fr: 'Sanctionner le responsable du défaut', en: 'Sanction whoever caused the defect' },
    ],
    correct: 0,
    explanation: {
      fr: "L'analyse de cause racine (Ishikawa, 5 pourquoi) permet de corriger durablement le problème et d'éviter sa récurrence. La culture qualité vise le processus, pas les coupables.",
      en: 'Root-cause analysis (Ishikawa, 5 whys) fixes the problem durably and prevents recurrence. A quality culture targets the process, not culprits.',
    },
  },
  {
    id: 'q13',
    domain: 'process',
    question: {
      fr: "À la clôture du projet, quelle activité est essentielle pour l'organisation au-delà de l'acceptation des livrables ?",
      en: 'At project closure, which activity is essential for the organization beyond deliverable acceptance?',
    },
    options: [
      {
        fr: 'Capturer les retours d’expérience et archiver les actifs organisationnels',
        en: 'Capture lessons learned and archive organizational process assets',
      },
      { fr: 'Réaffecter immédiatement toute l’équipe', en: 'Immediately reassign the whole team' },
      { fr: 'Supprimer la documentation du projet', en: 'Delete the project documentation' },
      { fr: 'Renégocier les contrats fournisseurs', en: 'Renegotiate supplier contracts' },
    ],
    correct: 0,
    explanation: {
      fr: "La clôture inclut : acceptation finale, transfert du produit, libération des ressources, clôture des contrats, et surtout la capitalisation des leçons apprises dans les actifs organisationnels pour les projets futurs.",
      en: 'Closure includes final acceptance, product handover, resource release, contract closure and — critically — capturing lessons learned into organizational assets for future projects.',
    },
  },
  {
    id: 'q14',
    domain: 'process',
    question: {
      fr: "SPI = 1,1 et CPI = 0,9. Comment interpréter ces indicateurs ?",
      en: 'SPI = 1.1 and CPI = 0.9. How should these indicators be interpreted?',
    },
    options: [
      {
        fr: 'Le projet est en avance sur le planning mais dépense plus que prévu',
        en: 'The project is ahead of schedule but spending more than planned',
      },
      {
        fr: 'Le projet est en retard mais économise du budget',
        en: 'The project is behind schedule but saving budget',
      },
      { fr: 'Le projet est en avance et sous le budget', en: 'The project is ahead of schedule and under budget' },
      { fr: 'Le projet est en retard et en surcoût', en: 'The project is behind schedule and over budget' },
    ],
    correct: 0,
    explanation: {
      fr: "SPI > 1 : en avance sur l'échéancier. CPI < 1 : chaque euro dépensé produit moins d'un euro de valeur (surcoût). Mémo : SPI/CPI > 1 = bon, < 1 = mauvais.",
      en: 'SPI > 1: ahead of schedule. CPI < 1: each dollar spent earns less than a dollar of value (over cost). Mnemonic: SPI/CPI > 1 = good, < 1 = bad.',
    },
  },
  {
    id: 'q15',
    domain: 'process',
    question: {
      fr: "Quelle réunion agile sert à améliorer la façon de travailler de l'équipe ?",
      en: 'Which agile event is used to improve the way the team works?',
    },
    options: [
      { fr: 'La rétrospective', en: 'The retrospective' },
      { fr: 'La revue de sprint', en: 'The sprint review' },
      { fr: 'La planification de sprint', en: 'Sprint planning' },
      { fr: 'L’affinage du backlog', en: 'Backlog refinement' },
    ],
    correct: 0,
    explanation: {
      fr: "La rétrospective est le moment dédié à l'amélioration continue du processus et de la collaboration : ce qui a bien marché, ce qui doit changer, et les actions concrètes pour l'itération suivante.",
      en: 'The retrospective is the dedicated moment for continuous improvement of process and collaboration: what went well, what should change, and concrete actions for the next iteration.',
    },
  },

  // ─────────────────────── BUSINESS ENVIRONMENT ───────────────────────
  {
    id: 'b01',
    domain: 'business',
    question: {
      fr: "En cours de projet, une nouvelle réglementation impacte directement un livrable clé. Que doit faire le chef de projet EN PREMIER ?",
      en: 'Mid-project, a new regulation directly impacts a key deliverable. What should the project manager do FIRST?',
    },
    options: [
      {
        fr: "Évaluer l'impact de la réglementation sur le projet et proposer les changements nécessaires",
        en: 'Assess the regulation’s impact on the project and propose the necessary changes',
      },
      { fr: 'Ignorer la réglementation jusqu’à la prochaine phase', en: 'Ignore the regulation until the next phase' },
      { fr: 'Arrêter immédiatement le projet', en: 'Stop the project immediately' },
      { fr: 'Attendre les instructions du service juridique', en: 'Wait for instructions from the legal department' },
    ],
    correct: 0,
    explanation: {
      fr: "La veille de l'environnement externe (réglementaire, marché, technologie) fait partie du domaine « Business Environment ». Le réflexe attendu : analyser l'impact, puis passer par la maîtrise des changements. La conformité n'est pas optionnelle.",
      en: 'Scanning the external environment (regulatory, market, technology) belongs to the Business Environment domain. Expected reflex: analyze the impact, then go through change control. Compliance is not optional.',
    },
  },
  {
    id: 'b02',
    domain: 'business',
    question: {
      fr: "Qu'est-ce que la valeur métier (business value) d'un projet ?",
      en: 'What is the business value of a project?',
    },
    options: [
      {
        fr: "Le bénéfice quantifiable et/ou intangible que le projet apporte à l'organisation et à ses parties prenantes",
        en: 'The quantifiable and/or intangible benefit the project brings to the organization and its stakeholders',
      },
      { fr: 'Le budget total du projet', en: 'The total project budget' },
      { fr: 'Le chiffre d’affaires de l’entreprise', en: 'The company’s revenue' },
      { fr: 'La somme des livrables produits', en: 'The sum of deliverables produced' },
    ],
    correct: 0,
    explanation: {
      fr: "La valeur peut être financière (ROI, revenus, économies) ou intangible (image, satisfaction, conformité, apprentissage). Le PMBOK® récent place la livraison de valeur au cœur du management de projet — pas la simple production de livrables.",
      en: 'Value can be financial (ROI, revenue, savings) or intangible (brand, satisfaction, compliance, learning). The recent PMBOK® puts value delivery at the heart of project management — not mere deliverable production.',
    },
  },
  {
    id: 'b03',
    domain: 'business',
    question: {
      fr: "Le business case du projet n'est plus valide suite à un changement de stratégie de l'entreprise. Que doit faire le chef de projet ?",
      en: 'The project’s business case is no longer valid after a company strategy change. What should the project manager do?',
    },
    options: [
      {
        fr: 'Alerter le sponsor et recommander une réévaluation du projet (poursuite, ajustement ou arrêt)',
        en: 'Alert the sponsor and recommend re-evaluating the project (continue, adjust or terminate)',
      },
      { fr: 'Continuer le projet comme prévu, le contrat fait foi', en: 'Continue as planned; the contract prevails' },
      { fr: 'Arrêter le projet de sa propre autorité', en: 'Terminate the project on their own authority' },
      { fr: 'Réduire les coûts pour préserver le ROI initial', en: 'Cut costs to preserve the original ROI' },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet vérifie en continu l'alignement du projet avec la stratégie et les bénéfices attendus. Si le business case est invalidé, la décision de poursuivre ou d'arrêter appartient au sponsor/à la gouvernance — pas au chef de projet seul.",
      en: 'The project manager continuously checks alignment with strategy and expected benefits. If the business case is invalidated, the continue/stop decision belongs to the sponsor/governance — not the project manager alone.',
    },
  },
  {
    id: 'b04',
    domain: 'business',
    question: {
      fr: "Quel document décrit COMMENT et QUAND les bénéfices du projet seront obtenus et mesurés ?",
      en: 'Which document describes HOW and WHEN the project’s benefits will be realized and measured?',
    },
    options: [
      { fr: 'Le plan de réalisation des bénéfices', en: 'The benefits realization plan' },
      { fr: 'La charte du projet', en: 'The project charter' },
      { fr: 'Le registre des risques', en: 'The risk register' },
      { fr: 'Le plan de management des communications', en: 'The communications management plan' },
    ],
    correct: 0,
    explanation: {
      fr: "Le plan de réalisation des bénéfices (benefits management plan) définit les bénéfices cibles, leur échéance (souvent après la fin du projet), les indicateurs de mesure et les responsables de leur obtention.",
      en: 'The benefits management plan defines target benefits, their timeframe (often after project end), the metrics to measure them and who is accountable for realizing them.',
    },
  },
  {
    id: 'b05',
    domain: 'business',
    question: {
      fr: "Votre projet impacte négativement l'environnement local, sans violer aucune loi. Certaines parties prenantes s'en inquiètent. Quelle attitude reflète le mieux la responsabilité professionnelle ?",
      en: 'Your project negatively impacts the local environment without breaking any law. Some stakeholders are concerned. Which attitude best reflects professional responsibility?',
    },
    options: [
      {
        fr: "Évaluer l'impact avec l'équipe et proposer des mesures de réduction, en toute transparence avec les parties prenantes",
        en: 'Assess the impact with the team and propose reduction measures, being transparent with stakeholders',
      },
      { fr: "Ne rien faire puisque la loi est respectée", en: 'Do nothing since the law is respected' },
      { fr: 'Minimiser le sujet en communication externe', en: 'Downplay the issue in external communication' },
      { fr: "Attendre qu'une plainte formelle soit déposée", en: 'Wait for a formal complaint to be filed' },
    ],
    correct: 0,
    explanation: {
      fr: "Le principe d'intendance (stewardship) du PMBOK® et le code d'éthique PMI® exigent d'agir de manière responsable au-delà de la simple conformité légale : transparence, prise en compte des impacts sociaux et environnementaux.",
      en: 'The PMBOK® stewardship principle and the PMI® code of ethics require acting responsibly beyond mere legal compliance: transparency and consideration of social and environmental impacts.',
    },
  },
  {
    id: 'b06',
    domain: 'business',
    question: {
      fr: "L'organisation lance une transformation majeure qui va modifier les processus utilisés par votre projet. Comment le chef de projet doit-il réagir ?",
      en: 'The organization launches a major transformation that will change processes your project relies on. How should the project manager react?',
    },
    options: [
      {
        fr: "Évaluer les impacts sur le projet, adapter les plans et accompagner l'équipe dans le changement organisationnel",
        en: 'Assess impacts on the project, adapt plans and support the team through the organizational change',
      },
      {
        fr: 'Isoler le projet de la transformation pour le protéger',
        en: 'Shield the project from the transformation to protect it',
      },
      {
        fr: 'Suspendre le projet en attendant la fin de la transformation',
        en: 'Suspend the project until the transformation ends',
      },
      {
        fr: 'Demander une exemption définitive des nouveaux processus',
        en: 'Request a permanent exemption from the new processes',
      },
    ],
    correct: 0,
    explanation: {
      fr: "« Soutenir le changement organisationnel » est une tâche explicite du domaine Business Environment de l'ECO. Le projet évolue dans un système vivant : le chef de projet évalue, s'adapte et facilite le changement plutôt que de s'y opposer.",
      en: '“Support organizational change” is an explicit task in the ECO’s Business Environment domain. Projects live in a changing system: the project manager assesses, adapts and facilitates change rather than resisting it.',
    },
  },
]
