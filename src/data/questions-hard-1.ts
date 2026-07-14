import type { Question } from '../types'

/** Hard questions — People domain, part 1 (hp01–hp40). */
export const HARD_QUESTIONS_1: Question[] = [
  {
    id: 'hp01',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe hybride livre bien, mais le Product Owner réécrit les critères d'acceptation après coup pour refuser des stories terminées, invoquant « l'esprit du besoin ». L'équipe est furieuse. Que faites-vous EN PREMIER ?",
      en: 'Your hybrid team delivers well, but the Product Owner rewrites acceptance criteria after the fact to reject completed stories, citing “the spirit of the need”. The team is furious. What do you do FIRST?',
    },
    options: [
      {
        fr: "Faciliter une discussion PO/équipe pour ancrer la définition de terminé et des critères d'acceptation convenus AVANT le développement",
        en: 'Facilitate a PO/team discussion to anchor the Definition of Done and acceptance criteria agreed BEFORE development',
      },
      {
        fr: 'Escalader le comportement du PO au sponsor',
        en: 'Escalate the PO’s behavior to the sponsor',
      },
      {
        fr: "Exiger que le PO accepte toutes les stories déjà terminées",
        en: 'Demand the PO accept all already-completed stories',
      },
      {
        fr: "Ajouter une marge de reprise dans les estimations futures",
        en: 'Add rework buffer to future estimates',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le problème est un défaut de contrat d'équipe : les critères doivent être clairs et stables avant le développement. La facilitation traite la cause ; l'escalade ou la compensation traitent le symptôme.",
      en: 'The problem is a broken working agreement: criteria must be clear and stable before development. Facilitation fixes the cause; escalation or buffering only treats the symptom.',
    },
  },
  {
    id: 'hp02',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Deux développeurs seniors refusent de travailler ensemble après un conflit ancien. Les réaffecter est impossible et le projet exige leur collaboration sur un module critique. Vous avez déjà facilité une rencontre sans succès. Quelle est la MEILLEURE prochaine étape ?",
      en: 'Two senior developers refuse to work together after an old conflict. Reassignment is impossible and the project needs them to collaborate on a critical module. You already facilitated a meeting without success. What is the BEST next step?',
    },
    options: [
      {
        fr: 'Recourir à une médiation structurée avec un tiers neutre et des engagements comportementaux écrits',
        en: 'Use structured mediation with a neutral third party and written behavioral commitments',
      },
      {
        fr: 'Découper le module pour éliminer toute interface entre eux',
        en: 'Split the module to remove any interface between them',
      },
      {
        fr: 'Imposer la collaboration sous peine de sanction disciplinaire',
        en: 'Mandate collaboration under threat of discipline',
      },
      {
        fr: "Confier le module au plus performant des deux",
        en: 'Give the module to the higher performer of the two',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Quand la facilitation directe échoue, l'étape suivante graduée est la médiation par un tiers neutre — avant le forcing. Contourner (découpage) laisse le conflit intact et fragilise l'équipe.",
      en: 'When direct facilitation fails, the graduated next step is third-party mediation — before forcing. Working around it (splitting) leaves the conflict intact and weakens the team.',
    },
  },
  {
    id: 'hp03',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre clé annonce en privé qu'il a accepté un poste ailleurs et partira dans six semaines, avant un jalon majeur. Il vous demande la confidentialité tant que son contrat n'est pas signé. Que faites-vous ?",
      en: 'A key member privately tells you they accepted a job elsewhere and will leave in six weeks, before a major milestone. They ask for confidentiality until their contract is signed. What do you do?',
    },
    options: [
      {
        fr: "Respecter la confidentialité tout en préparant la transition : plan de transfert de connaissances et réduction du facteur d'unicité, sans révéler la cause",
        en: 'Respect confidentiality while preparing the transition: knowledge-transfer plan and reducing the single-point dependency, without revealing the cause',
      },
      {
        fr: "Informer immédiatement le sponsor du départ",
        en: 'Immediately inform the sponsor of the departure',
      },
      {
        fr: 'Lui proposer une prime de rétention pour rester',
        en: 'Offer a retention bonus to make them stay',
      },
      {
        fr: 'Attendre la confirmation officielle pour agir',
        en: 'Wait for the official confirmation before acting',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Équilibre éthique : honorer la parole donnée ET protéger le projet. Le risque de dépendance à une personne clé peut se réduire dès maintenant (binômage, documentation) sans divulguer l'information.",
      en: 'Ethical balance: honor the confidence AND protect the project. The key-person dependency can be reduced now (pairing, documentation) without disclosing the information.',
    },
  },
  {
    id: 'hp04',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre organisation matricielle faible vous donne peu d'autorité formelle. Un responsable fonctionnel retire sans préavis 50 % du temps d'un membre affecté à votre chemin critique. Le sponsor est en déplacement deux semaines. Que faites-vous ?",
      en: 'Your weak matrix organization gives you little formal authority. A functional manager pulls 50% of a critical-path member’s time without notice. The sponsor is away for two weeks. What do you do?',
    },
    options: [
      {
        fr: "Négocier directement avec le responsable fonctionnel en présentant l'impact chiffré sur le chemin critique et des options de partage",
        en: 'Negotiate directly with the functional manager, showing the quantified critical-path impact and sharing options',
      },
      {
        fr: 'Attendre le retour du sponsor pour trancher',
        en: 'Wait for the sponsor’s return to settle it',
      },
      {
        fr: "Demander au membre de travailler en heures supplémentaires",
        en: 'Ask the member to work overtime',
      },
      {
        fr: 'Recalculer le planning avec la nouvelle disponibilité',
        en: 'Rebaseline the schedule with the new availability',
      },
    ],
    correct: 0,
    explanation: {
      fr: "En matrice faible, l'influence et la négociation fondée sur les données remplacent l'autorité. Attendre deux semaines ou absorber silencieusement l'impact aggrave le problème.",
      en: 'In a weak matrix, influence and data-based negotiation substitute for authority. Waiting two weeks or silently absorbing the impact makes things worse.',
    },
  },
  {
    id: 'hp05',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Lors d'une rétrospective, un membre révèle qu'un pair s'attribue systématiquement le mérite du travail des autres auprès du management. Le pair concerné est absent. Comment réagissez-vous ?",
      en: 'In a retrospective, a member reveals that a peer systematically takes credit for others’ work with management. The peer in question is absent. How do you react?',
    },
    options: [
      {
        fr: 'Recadrer la rétrospective sur les processus, puis traiter le problème interpersonnel séparément avec les intéressés',
        en: 'Refocus the retrospective on process, then handle the interpersonal issue separately with those involved',
      },
      {
        fr: 'Laisser le groupe en débattre puisque le sujet est sorti',
        en: 'Let the group debate it since the topic came up',
      },
      {
        fr: "Consigner l'accusation dans le compte rendu de rétrospective",
        en: 'Record the accusation in the retrospective minutes',
      },
      {
        fr: 'Instaurer une revue publique des contributions individuelles',
        en: 'Introduce a public review of individual contributions',
      },
    ],
    correct: 0,
    explanation: {
      fr: "On ne juge pas une personne absente en groupe : c'est destructeur pour la sécurité psychologique. Le sujet est réel mais se traite en privé, avec les faits et les personnes concernées.",
      en: 'Never judge an absent person in a group: it destroys psychological safety. The issue is real but is handled privately, with facts and the people involved.',
    },
  },
  {
    id: 'hp06',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe distribuée sur 3 continents a instauré des réunions tournantes, mais les décisions importantes sont systématiquement prises par le site du siège entre deux réunions. Les autres sites se désengagent. Quelle action traite la CAUSE du problème ?",
      en: 'Your team spans 3 continents with rotating meetings, yet important decisions keep being made by the headquarters site between meetings. Other sites disengage. Which action addresses the ROOT CAUSE?',
    },
    options: [
      {
        fr: 'Formaliser un processus de décision asynchrone (proposition écrite, délai de commentaires, décision tracée)',
        en: 'Formalize an asynchronous decision process (written proposal, comment window, logged decision)',
      },
      {
        fr: 'Ajouter une réunion de synchronisation hebdomadaire',
        en: 'Add a weekly synchronization meeting',
      },
      {
        fr: 'Demander au siège de reporter ses décisions aux réunions',
        en: 'Ask headquarters to defer decisions to the meetings',
      },
      {
        fr: 'Envoyer un compte rendu des décisions à tous les sites',
        en: 'Send a decision log to all sites',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La cause est un processus de décision qui exclut structurellement les absents. La décision asynchrone documentée donne à chaque site une vraie fenêtre d'influence ; informer après coup ne suffit pas.",
      en: 'The cause is a decision process that structurally excludes absentees. A documented asynchronous decision flow gives every site a real influence window; informing after the fact is not enough.',
    },
  },
  {
    id: 'hp07',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre très performant refuse d'appliquer les accords d'équipe (revues croisées, documentation) en arguant que « ses résultats parlent pour lui ». L'équipe commence à l'imiter. Quelle est la MEILLEURE action ?",
      en: 'A high performer refuses to follow team agreements (peer reviews, documentation), arguing “results speak for themselves”. The team starts to imitate them. What is the BEST action?',
    },
    options: [
      {
        fr: "Le rencontrer en privé : relier les accords aux risques d'équipe (bus factor, qualité) et convenir d'un engagement, sinon en tirer les conséquences",
        en: 'Meet privately: connect the agreements to team risks (bus factor, quality) and agree on a commitment, otherwise draw the consequences',
      },
      {
        fr: "Faire une exception : ses résultats justifient l'autonomie",
        en: 'Make an exception: their results justify autonomy',
      },
      {
        fr: "Faire revoter les accords d'équipe par tous",
        en: 'Have the whole team re-vote the agreements',
      },
      {
        fr: 'Rappeler les règles à toute l’équipe en réunion',
        en: 'Remind the whole team of the rules in a meeting',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Tolérer l'exception d'un « héros » érode les normes pour tous. Le recadrage se fait en privé, par le sens (risques) et avec des conséquences claires. Le rappel collectif dilue la responsabilité.",
      en: 'Tolerating a “hero” exception erodes norms for everyone. The reset happens privately, through meaning (risks) and with clear consequences. A collective reminder dilutes accountability.',
    },
  },
  {
    id: 'hp08',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "En négociation avec un client pour un avenant, celui-ci menace de résilier le contrat si vous n'acceptez pas un délai que vos données jugent infaisable. Votre direction veut préserver la relation. Quelle posture adoptez-vous ?",
      en: 'Negotiating a contract amendment, the customer threatens termination unless you accept a deadline your data shows infeasible. Your leadership wants to preserve the relationship. What stance do you take?',
    },
    options: [
      {
        fr: "Rester sur les critères objectifs : exposer les données, proposer des options (périmètre réduit, livraison progressive) et documenter les risques de chaque scénario",
        en: 'Stay on objective criteria: show the data, propose options (reduced scope, phased delivery) and document the risks of each scenario',
      },
      {
        fr: "Accepter le délai et gérer le dérapage plus tard",
        en: 'Accept the deadline and manage the slip later',
      },
      {
        fr: 'Refuser et laisser la direction décider seule',
        en: 'Refuse and let leadership decide alone',
      },
      {
        fr: 'Contre-menacer de facturer des pénalités de retard client',
        en: 'Counter-threaten with customer delay penalties',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La négociation raisonnée (données objectives + options) protège la relation ET l'intégrité. Accepter un engagement connu comme infaisable violerait l'honnêteté professionnelle.",
      en: 'Principled negotiation (objective data + options) protects both the relationship AND integrity. Accepting a commitment known to be infeasible would violate professional honesty.',
    },
  },
  {
    id: 'hp09',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre Scrum Master et votre architecte s'opposent publiquement : l'un veut protéger la cadence des sprints, l'autre exige une pause technique pour réduire la dette. La vélocité chute depuis 3 sprints à cause des bugs. Que facilitez-vous ?",
      en: 'Your Scrum Master and architect clash publicly: one protects sprint cadence, the other demands a technical pause to reduce debt. Velocity has dropped for 3 sprints due to bugs. What do you facilitate?',
    },
    options: [
      {
        fr: "Une décision fondée sur les données (tendance vélocité, taux de bugs) intégrant la dette technique au backlog priorisé avec le PO",
        en: 'A data-based decision (velocity trend, bug rate) integrating technical debt into the backlog prioritized with the PO',
      },
      {
        fr: 'Un sprint entièrement dédié à la dette technique imposé',
        en: 'An imposed full technical-debt sprint',
      },
      {
        fr: "Le maintien de la cadence : la dette attendra la fin de release",
        en: 'Keeping cadence: debt waits until after the release',
      },
      {
        fr: 'Un vote de l’équipe entre les deux positions',
        en: 'A team vote between the two positions',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le conflit cache un arbitrage de valeur : les données objectivent le coût de la dette, et le PO arbitre via le backlog. Imposer ou voter contourne l'analyse et les rôles.",
      en: 'The conflict hides a value trade-off: data objectifies the cost of debt, and the PO arbitrates through the backlog. Imposing or voting bypasses both analysis and roles.',
    },
  },
  {
    id: 'hp10',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un nouveau directeur, sceptique sur votre projet, exige des rapports quotidiens détaillés qui consomment 20 % de votre temps. Selon la matrice d'engagement, il est « résistant » alors qu'il devrait être « moteur ». Quelle stratégie choisissez-vous ?",
      en: 'A new director, skeptical of your project, demands detailed daily reports consuming 20% of your time. Per the engagement matrix he is “resistant” but should be “leading”. Which strategy do you choose?',
    },
    options: [
      {
        fr: "Comprendre ses préoccupations de fond en entretien, puis co-définir un format d'information qui y répond à moindre coût (tableau de bord, jalons)",
        en: 'Understand his underlying concerns in a meeting, then co-design an information format that addresses them at lower cost (dashboard, milestones)',
      },
      {
        fr: 'Produire les rapports demandés : il est influent',
        en: 'Produce the requested reports: he is influential',
      },
      {
        fr: "Déléguer la production des rapports à l'équipe",
        en: 'Delegate report production to the team',
      },
      {
        fr: 'Demander au sponsor de le raisonner',
        en: 'Ask the sponsor to reason with him',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La demande de rapports est un symptôme de méfiance. Traiter la cause (ses préoccupations) permet de bâtir la confiance et de réduire le coût de reporting ; obéir ou déléguer entretient le symptôme.",
      en: 'The reporting demand is a symptom of distrust. Addressing the cause (his concerns) builds trust and reduces reporting cost; complying or delegating sustains the symptom.',
    },
  },
  {
    id: 'hp11',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe applique Herzberg : les salaires sont corrects, les locaux agréables, mais l'ennui domine et le turnover augmente. Quelle action a le plus d'effet selon cette théorie ?",
      en: 'Applying Herzberg to your team: salaries are fair, offices pleasant, but boredom dominates and turnover rises. Which action has the greatest effect per this theory?',
    },
    options: [
      {
        fr: "Enrichir le travail : responsabilités accrues, reconnaissance, opportunités de développement",
        en: 'Enrich the work: greater responsibility, recognition, growth opportunities',
      },
      {
        fr: 'Augmenter les salaires de 10 %',
        en: 'Raise salaries by 10%',
      },
      {
        fr: 'Améliorer encore les conditions matérielles',
        en: 'Further improve material conditions',
      },
      {
        fr: 'Organiser plus d’événements de cohésion',
        en: 'Hold more team-building events',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Selon Herzberg, les facteurs d'hygiène (salaire, conditions) évitent l'insatisfaction mais ne motivent pas. Seuls les facteurs de motivation (accomplissement, responsabilité, reconnaissance, progression) créent l'engagement.",
      en: 'Per Herzberg, hygiene factors (pay, conditions) prevent dissatisfaction but do not motivate. Only motivators (achievement, responsibility, recognition, growth) create engagement.',
    },
  },
  {
    id: 'hp12',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous héritez d'un projet où l'ancien chef de projet décidait de tout. L'équipe, compétente mais passive, attend vos instructions. Selon le leadership situationnel, quelle progression adoptez-vous ?",
      en: 'You inherit a project where the former manager decided everything. The team, competent but passive, awaits your instructions. Per situational leadership, what progression do you adopt?',
    },
    options: [
      {
        fr: "Commencer par un style participatif en déléguant progressivement des décisions cadrées, vers l'autonomie",
        en: 'Start with a participative style, progressively delegating framed decisions, toward autonomy',
      },
      {
        fr: 'Passer immédiatement à la délégation totale',
        en: 'Switch immediately to full delegation',
      },
      {
        fr: "Maintenir le style directif qui fonctionnait",
        en: 'Keep the directive style that was working',
      },
      {
        fr: 'Alterner aléatoirement directif et délégatif',
        en: 'Randomly alternate directive and delegating styles',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le leadership situationnel adapte le style à la maturité : une équipe compétente mais habituée à la passivité a besoin d'un accompagnement participatif avec délégation graduelle — pas d'un abandon brutal ni du statu quo.",
      en: 'Situational leadership matches style to readiness: a competent but passivity-conditioned team needs participative support with gradual delegation — not sudden abandonment or the status quo.',
    },
  },
  {
    id: 'hp13',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Pendant un comité, le sponsor attribue publiquement un échec du projet à un membre de votre équipe, sur la base d'informations inexactes. Que faites-vous SUR LE MOMENT ?",
      en: 'During a steering committee, the sponsor publicly blames a project setback on one of your team members, based on inaccurate information. What do you do IN THE MOMENT?',
    },
    options: [
      {
        fr: "Rétablir les faits avec calme et assumer la responsabilité d'équipe, puis clarifier en privé avec le sponsor",
        en: 'Calmly correct the facts and take team-level accountability, then clarify privately with the sponsor',
      },
      {
        fr: 'Laisser passer et corriger par courriel ensuite',
        en: 'Let it pass and correct by email afterwards',
      },
      {
        fr: "Confirmer l'analyse du sponsor pour ne pas le contredire",
        en: 'Confirm the sponsor’s analysis to avoid contradicting him',
      },
      {
        fr: 'Demander au membre concerné de se justifier en séance',
        en: 'Ask the member concerned to justify themselves on the spot',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Protéger l'équipe est un devoir du leader : rectifier factuellement sans confrontation, porter la responsabilité collective, et gérer le différend avec le sponsor en privé. Le silence vaut validation publique.",
      en: 'Shielding the team is a leader’s duty: correct factually without confrontation, own collective accountability, and settle the disagreement with the sponsor privately. Silence equals public validation.',
    },
  },
  {
    id: 'hp14',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Deux équipes agiles dépendent l'une de l'autre, mais leurs Product Owners priorisent différemment, bloquant une fonctionnalité transverse depuis 3 sprints. Les Scrum Masters ont échoué à s'aligner. Quel mécanisme proposez-vous ?",
      en: 'Two agile teams depend on each other, but their Product Owners prioritize differently, blocking a cross-team feature for 3 sprints. The Scrum Masters failed to align. Which mechanism do you propose?',
    },
    options: [
      {
        fr: "Une instance de priorisation commune au niveau produit (ex. PO en chef ou synchronisation de backlogs) fondée sur la valeur globale",
        en: 'A shared product-level prioritization forum (e.g., chief PO or backlog sync) based on overall value',
      },
      {
        fr: 'Fusionner les deux équipes en une seule',
        en: 'Merge the two teams into one',
      },
      {
        fr: "Faire trancher chaque conflit par le sponsor",
        en: 'Have the sponsor settle each conflict',
      },
      {
        fr: 'Dupliquer la fonctionnalité dans chaque équipe',
        en: 'Duplicate the feature in each team',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Les dépendances inter-équipes exigent une gouvernance de priorisation au niveau supérieur (scaling) fondée sur la valeur du produit global — pas des escalades au cas par cas ni des restructurations brutales.",
      en: 'Cross-team dependencies require higher-level prioritization governance (scaling) based on overall product value — not case-by-case escalations or abrupt restructuring.',
    },
  },
  {
    id: 'hp15',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre de l'équipe vous confie être en épuisement professionnel mais vous supplie de ne rien dire, craignant pour sa carrière. Sa charge est la plus lourde de l'équipe. Que faites-vous ?",
      en: 'A team member confides they are burning out but begs you to say nothing, fearing for their career. Their workload is the heaviest on the team. What do you do?',
    },
    options: [
      {
        fr: "Rééquilibrer la charge de travail immédiatement (ce qui relève de votre rôle) et l'orienter vers les dispositifs d'aide, sans divulguer la confidence",
        en: 'Rebalance the workload immediately (which is within your role) and point them to support resources, without disclosing the confidence',
      },
      {
        fr: 'Informer les RH malgré sa demande',
        en: 'Inform HR despite their request',
      },
      {
        fr: "Respecter le secret et n'agir que s'il le demande",
        en: 'Keep the secret and act only if they ask',
      },
      {
        fr: 'Lui accorder discrètement des congés supplémentaires',
        en: 'Quietly grant them extra leave',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La répartition de la charge est une prérogative normale du chef de projet : agir dessus ne trahit rien. L'inaction est une faute de bienveillance ; la divulgation trahit la confiance.",
      en: 'Workload distribution is a normal project manager prerogative: acting on it betrays nothing. Inaction fails the duty of care; disclosure betrays trust.',
    },
  },
  {
    id: 'hp16',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre projet stratégique attire les ambitions : un directeur adjoint tente d'imposer « son » expert dans l'équipe, dont les compétences ne correspondent pas au besoin. Refuser froisserait un allié influent. Comment gérez-vous ?",
      en: 'Your strategic project attracts ambitions: a deputy director tries to place “his” expert on the team, whose skills do not match the need. Refusing would upset an influential ally. How do you handle it?',
    },
    options: [
      {
        fr: "Objectiver le besoin par une matrice de compétences et explorer avec lui un rôle où son expert apporterait une vraie valeur",
        en: 'Objectify the need with a skills matrix and explore with him a role where his expert would add real value',
      },
      {
        fr: "Accepter l'expert pour préserver l'alliance",
        en: 'Accept the expert to preserve the alliance',
      },
      {
        fr: 'Refuser en invoquant votre autorité de chef de projet',
        en: 'Refuse, invoking your project manager authority',
      },
      {
        fr: "L'accepter puis le marginaliser dans l'équipe",
        en: 'Accept them, then sideline them within the team',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La compétence politique consiste à transformer un rapport de force en problème objectif : critères transparents + recherche d'une solution qui préserve la relation sans sacrifier le projet.",
      en: 'Political skill means turning a power play into an objective problem: transparent criteria + seeking a solution that preserves the relationship without sacrificing the project.',
    },
  },
  {
    id: 'hp17',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Après 6 mois, vous réalisez que votre équipe vous dit systématiquement ce que vous voulez entendre : aucun risque remonté, aucune mauvaise nouvelle. Le dernier rapport d'avancement s'est révélé trop optimiste. Quelle est la cause la plus probable à corriger ?",
      en: 'After 6 months, you realize your team systematically tells you what you want to hear: no risks raised, no bad news. The last status report proved overly optimistic. What is the most likely cause to fix?',
    },
    options: [
      {
        fr: "Un défaut de sécurité psychologique : vos réactions passées aux mauvaises nouvelles ont dissuadé la transparence",
        en: 'A psychological safety gap: your past reactions to bad news discouraged transparency',
      },
      {
        fr: "Un manque de compétence de l'équipe en estimation",
        en: 'A team skill gap in estimation',
      },
      {
        fr: 'Des outils de reporting inadaptés',
        en: 'Inadequate reporting tools',
      },
      {
        fr: 'Une équipe naturellement optimiste',
        en: 'A naturally optimistic team',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le silence organisationnel (« watermelon reporting ») naît presque toujours de la peur des conséquences. Le leader doit examiner son propre comportement : accueil des mauvaises nouvelles, absence de représailles, valorisation de la franchise.",
      en: 'Organizational silence (“watermelon reporting”) almost always stems from fear of consequences. The leader must examine their own behavior: welcoming bad news, no reprisals, rewarding candor.',
    },
  },
  {
    id: 'hp18',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre neurodivergent très compétent est mal noté par ses pairs dans le feedback 360° pour « manque de participation aux réunions ». Il excelle par écrit. Quelle réponse est la plus juste et la plus efficace ?",
      en: 'A highly skilled neurodivergent member gets poor peer ratings in 360° feedback for “low participation in meetings”. They excel in writing. Which response is fairest and most effective?',
    },
    options: [
      {
        fr: "Diversifier les canaux de contribution (écrit asynchrone, préparation en amont) et sensibiliser l'équipe aux styles de travail différents",
        en: 'Diversify contribution channels (async writing, advance preparation) and raise team awareness of different working styles',
      },
      {
        fr: "Le coacher pour qu'il participe davantage à l'oral",
        en: 'Coach them to speak up more in meetings',
      },
      {
        fr: 'Pondérer ses évaluations pour compenser',
        en: 'Weight their evaluations to compensate',
      },
      {
        fr: "L'exempter des réunions d'équipe",
        en: 'Exempt them from team meetings',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'inclusion consiste à adapter le système aux personnes, pas l'inverse : élargir les modes de contribution valorise les forces réelles. Forcer la conformité orale ou isoler la personne sont des réponses déficitaires.",
      en: 'Inclusion means adapting the system to people, not the reverse: broadening contribution modes leverages real strengths. Forcing verbal conformity or isolating the person are deficit-based responses.',
    },
  },
  {
    id: 'hp19',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous découvrez que deux membres de l'équipe entretiennent une relation et que l'un évalue le travail de l'autre dans le processus de revue par les pairs. Aucun problème de qualité constaté. Que faites-vous ?",
      en: 'You discover two team members are in a relationship and one reviews the other’s work in the peer review process. No quality issue observed. What do you do?',
    },
    options: [
      {
        fr: "Réorganiser les affectations de revue pour éliminer le conflit d'intérêts, avec discrétion et sans jugement",
        en: 'Reorganize review assignments to remove the conflict of interest, discreetly and without judgment',
      },
      {
        fr: "Ne rien faire tant que la qualité ne baisse pas",
        en: 'Do nothing as long as quality holds',
      },
      {
        fr: 'Signaler la relation aux ressources humaines',
        en: 'Report the relationship to HR',
      },
      {
        fr: "Demander à l'un des deux de quitter le projet",
        en: 'Ask one of them to leave the project',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Un conflit d'intérêts se gère de manière préventive et structurelle, même sans dommage constaté : c'est l'intégrité du PROCESSUS qui protège tout le monde, y compris les intéressés.",
      en: 'A conflict of interest is managed preventively and structurally, even without observed harm: PROCESS integrity protects everyone, including those involved.',
    },
  },
  {
    id: 'hp20',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "L'expert sécurité de votre projet bloque chaque décision d'architecture en invoquant des risques, sans jamais proposer d'alternative. Les délais glissent et l'équipe le contourne désormais. Quelle intervention choisissez-vous ?",
      en: 'Your project’s security expert blocks every architecture decision citing risks, never proposing alternatives. Deadlines slip and the team now bypasses him. Which intervention do you choose?',
    },
    options: [
      {
        fr: "Redéfinir son rôle : passer de veto à conseil, avec obligation d'options gradées (risque/coût) pour chaque objection",
        en: 'Reframe his role: from veto to advisory, requiring graded options (risk/cost) with every objection',
      },
      {
        fr: "Le retirer des revues d'architecture",
        en: 'Remove him from architecture reviews',
      },
      {
        fr: "Laisser l'équipe continuer à le contourner",
        en: 'Let the team keep bypassing him',
      },
      {
        fr: 'Escalader chaque blocage au comité de pilotage',
        en: 'Escalate every blockage to the steering committee',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le contournement crée un risque sécurité réel. La solution durable reconfigure la contribution de l'expert : toute objection s'accompagne d'options, transformant le blocage en arbitrage éclairé.",
      en: 'Bypassing creates real security risk. The durable fix reshapes the expert’s contribution: every objection must come with options, turning blockage into informed trade-off.',
    },
  },
  {
    id: 'hp21',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre organisation impose un retour au bureau. Deux membres clés, recrutés en full remote, menacent de partir. Le sponsor vous demande de « régler ça ». Quelle est votre MEILLEURE action ?",
      en: 'Your organization mandates a return to office. Two key members, hired fully remote, threaten to leave. The sponsor asks you to “sort it out”. What is your BEST action?',
    },
    options: [
      {
        fr: "Documenter l'impact projet de leur départ et travailler avec RH/sponsor sur les marges de manœuvre (exceptions, hybride, transition)",
        en: 'Document the project impact of their departure and work with HR/sponsor on room to maneuver (exceptions, hybrid, transition)',
      },
      {
        fr: 'Leur promettre une exception que vous négocierez ensuite',
        en: 'Promise them an exception you will negotiate later',
      },
      {
        fr: "Leur dire d'accepter : la politique s'applique à tous",
        en: 'Tell them to comply: policy applies to everyone',
      },
      {
        fr: 'Commencer discrètement à recruter leurs remplaçants',
        en: 'Quietly start recruiting their replacements',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La politique RH n'est pas du ressort du chef de projet, mais l'impact projet si : le chiffrer et co-construire des options avec les bonnes instances. Promettre sans mandat ou remplacer en secret détruit la confiance.",
      en: 'HR policy is not the project manager’s call, but project impact is: quantify it and co-build options with the right bodies. Promising without mandate or secretly replacing destroys trust.',
    },
  },
  {
    id: 'hp22',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "En pleine crise projet, vous surprenez un manager intermédiaire en train d'intimider un membre junior pour qu'il modifie un rapport de test défavorable. Le manager est proche du sponsor. Que faites-vous ?",
      en: 'During a project crisis, you catch a middle manager pressuring a junior member to alter an unfavorable test report. The manager is close to the sponsor. What do you do?',
    },
    options: [
      {
        fr: "Intervenir immédiatement pour protéger le junior et l'intégrité des données, puis traiter le comportement par les canaux appropriés",
        en: 'Intervene immediately to protect the junior and data integrity, then address the behavior through proper channels',
      },
      {
        fr: 'Conseiller au junior de céder pour éviter les représailles',
        en: 'Advise the junior to comply to avoid retaliation',
      },
      {
        fr: "Faire semblant de ne rien avoir vu, faute de preuve",
        en: 'Pretend you saw nothing, for lack of proof',
      },
      {
        fr: "Modifier vous-même le rapport pour désamorcer",
        en: 'Alter the report yourself to defuse the situation',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Falsification de données + intimidation = double ligne rouge éthique. La proximité politique du manager ne change rien : protection immédiate de la personne et des données, puis traitement formel.",
      en: 'Data falsification + intimidation = double ethical red line. The manager’s political ties change nothing: immediate protection of the person and the data, then formal handling.',
    },
  },
  {
    id: 'hp23',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe pluridisciplinaire compte 12 personnes et les daily meetings durent 45 minutes malgré vos recadrages. L'analyse montre deux sous-flux de travail quasi indépendants. Quelle solution structurelle proposez-vous ?",
      en: 'Your cross-functional team has 12 people and daily meetings last 45 minutes despite your resets. Analysis shows two nearly independent workstreams. Which structural solution do you propose?',
    },
    options: [
      {
        fr: "Scinder en deux équipes alignées sur les flux de valeur, avec une synchronisation inter-équipes légère (ex. Scrum of Scrums)",
        en: 'Split into two teams aligned to the value streams, with light cross-team sync (e.g., Scrum of Scrums)',
      },
      {
        fr: 'Limiter le daily à 15 minutes chronométrées',
        en: 'Cap the daily at a timed 15 minutes',
      },
      {
        fr: 'Passer le daily en format écrit asynchrone',
        en: 'Move the daily to written async format',
      },
      {
        fr: 'Ne convier que les leads au daily',
        en: 'Invite only the leads to the daily',
      },
    ],
    correct: 0,
    explanation: {
      fr: "12 personnes sur deux flux indépendants dépassent la taille optimale d'équipe : le symptôme (daily long) vient de la structure. Scinder selon les flux de valeur traite la cause ; chronométrer traite le symptôme.",
      en: '12 people across two independent streams exceed optimal team size: the symptom (long daily) comes from structure. Splitting by value stream fixes the cause; timing the meeting treats the symptom.',
    },
  },
  {
    id: 'hp24',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre sous-performe depuis deux mois. Son manager fonctionnel veut le sortir du projet, mais vous savez qu'il traverse un divorce difficile. Le jalon critique est dans six semaines. Comment arbitrez-vous ?",
      en: 'A member has underperformed for two months. Their functional manager wants them off the project, but you know they are going through a difficult divorce. The critical milestone is in six weeks. How do you decide?',
    },
    options: [
      {
        fr: "Convenir avec lui d'un aménagement temporaire réaliste (charge, horaires) avec des points réguliers, tout en sécurisant le jalon par du soutien d'équipe",
        en: 'Agree with them on a realistic temporary accommodation (load, hours) with regular check-ins, while securing the milestone through team support',
      },
      {
        fr: 'Accepter son retrait : le jalon prime',
        en: 'Accept the removal: the milestone comes first',
      },
      {
        fr: "Le maintenir à charge pleine par équité envers l'équipe",
        en: 'Keep them at full load out of fairness to the team',
      },
      {
        fr: 'Révéler sa situation au manager pour le protéger',
        en: 'Reveal their situation to the manager to protect them',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Bienveillance ET responsabilité : un aménagement temporaire explicite protège la personne, l'équipe et le jalon. Divulguer sa vie privée sans accord violerait la confidentialité.",
      en: 'Care AND accountability: an explicit temporary accommodation protects the person, the team and the milestone. Disclosing their private life without consent would breach confidentiality.',
    },
  },
  {
    id: 'hp25',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Lors d'un atelier de rétrospective houleux, un membre déclare : « Ce projet échouera de toute façon, la direction a déjà décidé de nous externaliser. » La rumeur se propage. Quelle est votre PREMIÈRE action ?",
      en: 'In a heated retrospective, a member declares: “This project will fail anyway, leadership has already decided to outsource us.” The rumor spreads. What is your FIRST action?',
    },
    options: [
      {
        fr: "Vérifier les faits auprès de la direction pour pouvoir communiquer une information exacte à l'équipe",
        en: 'Verify the facts with leadership so you can give the team accurate information',
      },
      {
        fr: "Démentir la rumeur immédiatement pour rassurer",
        en: 'Deny the rumor immediately to reassure people',
      },
      {
        fr: 'Interdire les sujets non liés au sprint en rétrospective',
        en: 'Ban non-sprint topics from retrospectives',
      },
      {
        fr: "Identifier qui a lancé la rumeur",
        en: 'Find out who started the rumor',
      },
    ],
    correct: 0,
    explanation: {
      fr: "On ne peut ni démentir ni confirmer sans savoir. Vérifier d'abord, puis communiquer honnêtement ce qui est connu et inconnu. Démentir à tort détruirait durablement votre crédibilité.",
      en: 'You can neither deny nor confirm without knowing. Verify first, then honestly communicate what is known and unknown. A false denial would durably destroy your credibility.',
    },
  },
  {
    id: 'hp26',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre meilleure développeuse décline une promotion vers un rôle de lead : « Je veux coder, pas gérer. » Le sponsor insiste car « c'est la seule voie de progression ». Que défendez-vous ?",
      en: 'Your best developer declines a promotion to a lead role: “I want to code, not manage.” The sponsor insists because “it is the only growth path”. What do you advocate?',
    },
    options: [
      {
        fr: "Une voie de progression experte (technique) valorisée, alignée sur ses forces et sa motivation intrinsèque",
        en: 'A valued expert (technical) growth track aligned with her strengths and intrinsic motivation',
      },
      {
        fr: "La convaincre d'accepter : refuser bloquerait sa carrière",
        en: 'Persuade her to accept: refusing would stall her career',
      },
      {
        fr: 'Un essai de six mois dans le rôle de lead',
        en: 'A six-month trial in the lead role',
      },
      {
        fr: 'Laisser le sponsor décider de son évolution',
        en: 'Let the sponsor decide her development',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Promouvoir contre la motivation intrinsèque produit un mauvais manager et perd un excellent expert (principe de Peter). Défendre des parcours experts est un acte de leadership au service des personnes.",
      en: 'Promoting against intrinsic motivation creates a poor manager and loses a great expert (Peter principle). Advocating expert career tracks is servant leadership in action.',
    },
  },
  {
    id: 'hp27',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un consultant externe très influent auprès du client critique ouvertement vos choix méthodologiques devant l'équipe, semant le doute. Ses critiques sont partiellement fondées. Comment réagissez-vous ?",
      en: 'An external consultant highly influential with the customer openly criticizes your methodology choices in front of the team, sowing doubt. His critiques are partly valid. How do you respond?',
    },
    options: [
      {
        fr: "Reconnaître publiquement les points valides, l'associer à l'amélioration, et convenir en privé des règles de communication",
        en: 'Publicly acknowledge the valid points, involve him in improvement, and privately agree on communication ground rules',
      },
      {
        fr: 'Défendre systématiquement vos choix pour garder la face',
        en: 'Systematically defend your choices to save face',
      },
      {
        fr: "Demander au client de le recadrer",
        en: 'Ask the customer to rein him in',
      },
      {
        fr: "L'exclure des réunions d'équipe",
        en: 'Exclude him from team meetings',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'humilité désarme la critique : intégrer ce qui est fondé renforce votre crédibilité. Le problème de FORME (critique publique) se règle en privé — jamais par l'exclusion d'un allié potentiel du client.",
      en: 'Humility disarms criticism: adopting what is valid strengthens your credibility. The FORM problem (public criticism) is settled privately — never by excluding a potential customer ally.',
    },
  },
  {
    id: 'hp28',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "L'équipe a voté en rétrospective la suppression de l'estimation en points, préférant le flux (no estimates). Votre PMO exige des estimations pour son reporting. Comment conciliez-vous ?",
      en: 'In a retrospective, the team voted to drop story-point estimation in favor of flow (no estimates). Your PMO requires estimates for its reporting. How do you reconcile this?',
    },
    options: [
      {
        fr: "Proposer au PMO des prévisions probabilistes fondées sur les données de flux (throughput, cycle time), qui répondent au même besoin",
        en: 'Offer the PMO probabilistic forecasts based on flow data (throughput, cycle time), which meet the same need',
      },
      {
        fr: "Imposer le retour aux points : le PMO prime",
        en: 'Force a return to points: the PMO prevails',
      },
      {
        fr: "Estimer vous-même les éléments à la place de l'équipe",
        en: 'Estimate the items yourself instead of the team',
      },
      {
        fr: 'Ignorer la demande du PMO',
        en: 'Ignore the PMO’s request',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Chercher le besoin derrière l'exigence : le PMO veut de la prévisibilité, pas des points. Les métriques de flux fournissent des prévisions souvent plus fiables — solution gagnant-gagnant qui respecte l'autonomie de l'équipe.",
      en: 'Find the need behind the requirement: the PMO wants predictability, not points. Flow metrics provide often more reliable forecasts — a win-win that respects team autonomy.',
    },
  },
  {
    id: 'hp29',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous animez une session de planification avec des participants de 4 pays. Les participants d'une culture à forte distance hiérarchique ne contredisent jamais leur directeur présent, faussant les estimations. Quelle technique choisissez-vous ?",
      en: 'You facilitate a planning session with participants from 4 countries. Participants from a high power-distance culture never contradict their present director, skewing estimates. Which technique do you choose?',
    },
    options: [
      {
        fr: "Des estimations anonymes et simultanées (planning poker silencieux, Delphi) qui neutralisent l'effet hiérarchique",
        en: 'Anonymous, simultaneous estimation (silent planning poker, Delphi) that neutralizes the hierarchy effect',
      },
      {
        fr: 'Demander au directeur de ne plus assister aux sessions',
        en: 'Ask the director to stop attending the sessions',
      },
      {
        fr: "Inviter chacun à s'exprimer librement devant le groupe",
        en: 'Invite everyone to speak freely in front of the group',
      },
      {
        fr: "Utiliser uniquement l'estimation du directeur",
        en: 'Use only the director’s estimate',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La technique Delphi et les votes simultanés anonymes sont conçus exactement pour neutraliser les biais d'autorité et d'ancrage — sans exiger des personnes qu'elles agissent contre leur norme culturelle.",
      en: 'Delphi and simultaneous anonymous voting are designed precisely to neutralize authority and anchoring bias — without asking people to act against their cultural norm.',
    },
  },
  {
    id: 'hp30',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe support projet (testeurs, tech writers) se plaint d'être traitée en « seconde classe » : exclue des démos, citée en dernier, jamais consultée sur le planning. Le turnover y est double. Quelle action systémique menez-vous ?",
      en: 'Your project support staff (testers, tech writers) complain of “second-class” treatment: excluded from demos, mentioned last, never consulted on planning. Their turnover is double. Which systemic action do you take?',
    },
    options: [
      {
        fr: "Intégrer ces rôles à part entière dans les rituels, les décisions de planification et la reconnaissance des résultats",
        en: 'Fully integrate these roles into ceremonies, planning decisions and results recognition',
      },
      {
        fr: 'Organiser un événement de cohésion pour ressouder',
        en: 'Hold a team-building event to reconnect people',
      },
      {
        fr: 'Augmenter leur rémunération pour compenser',
        en: 'Raise their pay to compensate',
      },
      {
        fr: 'Créer une équipe support séparée avec son propre lead',
        en: 'Create a separate support team with its own lead',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'exclusion des rituels et décisions est la cause structurelle du sentiment de seconde classe. L'inclusion réelle (participation, voix, reconnaissance) traite la cause ; compenser ou séparer l'aggrave.",
      en: 'Exclusion from ceremonies and decisions is the structural cause of second-class status. Real inclusion (participation, voice, recognition) fixes the cause; compensating or separating worsens it.',
    },
  },
  {
    id: 'hp31',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Le sponsor vous demande de licencier « discrètement » un membre de l'équipe dont la tête ne lui revient pas, sans motif professionnel documenté. Quelle est votre position ?",
      en: 'The sponsor asks you to “quietly” remove a team member he simply dislikes, with no documented professional grounds. What is your position?',
    },
    options: [
      {
        fr: "Refuser d'agir sans motif objectif et documenté, et rediriger vers le processus RH légitime si un problème réel existe",
        en: 'Refuse to act without objective, documented grounds, and redirect to the legitimate HR process if a real issue exists',
      },
      {
        fr: "Exécuter la demande : le sponsor est l'autorité du projet",
        en: 'Comply: the sponsor is the project authority',
      },
      {
        fr: 'Monter un dossier de performance a posteriori',
        en: 'Build a performance case after the fact',
      },
      {
        fr: 'Muter le membre sur un autre projet sans explication',
        en: 'Transfer the member to another project without explanation',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'équité et la responsabilité (code de déontologie) priment sur la hiérarchie : agir contre une personne sans motif objectif est discriminatoire. Fabriquer un dossier serait une faute grave.",
      en: 'Fairness and responsibility (code of ethics) outrank hierarchy: acting against a person without objective grounds is discriminatory. Fabricating a case would be gross misconduct.',
    },
  },
  {
    id: 'hp32',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Deux mois avant la fin du projet, l'équipe apprend qu'elle sera dissoute et réaffectée à des projets moins attractifs. La productivité s'effondre (phase d'adjourning). Que faites-vous ?",
      en: 'Two months before project end, the team learns it will be dissolved and reassigned to less attractive projects. Productivity collapses (adjourning stage). What do you do?',
    },
    options: [
      {
        fr: "Reconnaître la transition : célébrer les accomplissements, aider chacun sur la suite (visibilité, recommandations) tout en sécurisant les livrables finaux",
        en: 'Acknowledge the transition: celebrate achievements, help each person with next steps (visibility, referrals) while securing the final deliverables',
      },
      {
        fr: "Cacher les informations sur les réaffectations jusqu'à la fin",
        en: 'Withhold reassignment information until the end',
      },
      {
        fr: 'Intensifier le contrôle des tâches pour tenir les délais',
        en: 'Tighten task control to hold the schedule',
      },
      {
        fr: "Promettre des primes de fin de projet non budgétées",
        en: 'Promise unbudgeted end-of-project bonuses',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La phase d'adjourning se gère activement : reconnaissance, accompagnement des transitions individuelles et sens du travail restant. Le contrôle accru ou les fausses promesses accélèrent le désengagement.",
      en: 'The adjourning stage is actively managed: recognition, support for individual transitions and meaning for the remaining work. Tighter control or empty promises accelerate disengagement.',
    },
  },
  {
    id: 'hp33',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un chef d'équipe partenaire vous informe que « dans son pays, un cadeau substantiel au décideur est l'usage pour conclure ». Le contrat local est stratégique pour votre projet. Que faites-vous ?",
      en: 'A partner team lead tells you that “in his country, a substantial gift to the decision-maker is customary to close the deal”. The local contract is strategic for your project. What do you do?',
    },
    options: [
      {
        fr: "Refuser : les usages locaux ne priment jamais sur les lois anticorruption et le code de déontologie ; consulter la conformité pour la suite",
        en: 'Refuse: local customs never override anti-corruption laws and the code of ethics; consult compliance on next steps',
      },
      {
        fr: 'Accepter : le respect des usages locaux est culturellement correct',
        en: 'Accept: respecting local customs is culturally appropriate',
      },
      {
        fr: 'Faire faire le cadeau par le partenaire local',
        en: 'Have the local partner give the gift',
      },
      {
        fr: "Offrir le cadeau mais l'enregistrer en frais de représentation",
        en: 'Give the gift but book it as entertainment expenses',
      },
    ],
    correct: 0,
    explanation: {
      fr: "La sensibilité culturelle ne s'étend jamais à la corruption : les lois (FCPA, Sapin II…) et le code PMI® s'appliquent partout. Passer par un intermédiaire ou maquiller la dépense reste de la corruption.",
      en: 'Cultural sensitivity never extends to bribery: laws (FCPA, etc.) and the PMI® code apply everywhere. Using an intermediary or disguising the expense is still bribery.',
    },
  },
  {
    id: 'hp34',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe auto-organisée a pris une décision technique que vous jugez sous-optimale mais viable. La contredire renforcerait la dépendance à votre égard. Que faites-vous ?",
      en: 'Your self-organizing team made a technical decision you consider suboptimal but viable. Overruling it would reinforce dependence on you. What do you do?',
    },
    options: [
      {
        fr: "Respecter la décision, partager votre point de vue comme donnée d'entrée, et convenir de critères de réévaluation si des signaux négatifs apparaissent",
        en: 'Respect the decision, share your view as input, and agree on re-evaluation triggers if negative signals appear',
      },
      {
        fr: 'Annuler la décision : votre expérience prime',
        en: 'Overrule the decision: your experience prevails',
      },
      {
        fr: "Laisser l'équipe échouer pour qu'elle apprenne",
        en: 'Let the team fail so they learn',
      },
      {
        fr: 'Demander un arbitrage extérieur systématique',
        en: 'Request systematic external arbitration',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'autonomie se construit en laissant les décisions viables à l'équipe, tout en instrumentant l'apprentissage (critères de réévaluation). « Laisser échouer » sans filet est de la négligence si l'enjeu est significatif.",
      en: 'Autonomy grows by leaving viable decisions with the team while instrumenting learning (re-evaluation triggers). “Letting them fail” without a safety net is negligence when stakes are significant.',
    },
  },
  {
    id: 'hp35',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un jalon critique tombe pendant une fête religieuse majeure pour un tiers de l'équipe. Le report coûterait 40 k€, le maintien créerait un fort ressentiment. Le sponsor vous laisse décider. Que faites-vous ?",
      en: 'A critical milestone lands on a major religious holiday for a third of the team. Postponing costs $40K; keeping it would create deep resentment. The sponsor lets you decide. What do you do?',
    },
    options: [
      {
        fr: "Co-construire avec l'équipe des options (préparation anticipée, rotation, report partiel) et chiffrer chaque scénario avant de trancher",
        en: 'Co-build options with the team (early preparation, rotation, partial postponement) and cost each scenario before deciding',
      },
      {
        fr: "Maintenir la date : le coût de 40 k€ est objectif",
        en: 'Keep the date: the $40K cost is objective',
      },
      {
        fr: 'Reporter la date : le respect des personnes prime toujours',
        en: 'Postpone: respect for people always prevails',
      },
      {
        fr: "Demander aux membres concernés de choisir entre le jalon et leur fête",
        en: 'Ask the affected members to choose between the milestone and their holiday',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Les faux dilemmes se résolvent en générant des options : anticipation, redistribution ou report partiel peuvent concilier les deux enjeux. Imposer un choix binaire aux personnes concernées est une abdication de leadership.",
      en: 'False dilemmas are solved by generating options: early work, redistribution or partial postponement can reconcile both stakes. Forcing a binary choice onto those affected abdicates leadership.',
    },
  },
  {
    id: 'hp36',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous découvrez qu'un membre en télétravail cumule secrètement un second emploi à temps plein et que ses retards s'expliquent ainsi. Son travail livré reste correct. Quelle est la MEILLEURE action ?",
      en: 'You discover a remote member is secretly holding a second full-time job, which explains their delays. Their delivered work remains acceptable. What is the BEST action?',
    },
    options: [
      {
        fr: "Traiter les faits professionnels : confronter les engagements de disponibilité non tenus et impliquer RH selon la politique applicable",
        en: 'Address the professional facts: confront the unmet availability commitments and involve HR per applicable policy',
      },
      {
        fr: 'Fermer les yeux : les livrables sont corrects',
        en: 'Look away: deliverables are acceptable',
      },
      {
        fr: "Le dénoncer publiquement à l'équipe",
        en: 'Expose them publicly to the team',
      },
      {
        fr: 'Doubler sa charge pour tester sa disponibilité',
        en: 'Double their workload to test their availability',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le problème professionnel est le manquement aux engagements de disponibilité et le possible conflit contractuel — pas la morale. Il se traite factuellement, en privé, avec les instances compétentes.",
      en: 'The professional issue is the breach of availability commitments and possible contractual conflict — not morality. It is handled factually, privately, with the competent functions.',
    },
  },
  {
    id: 'hp37',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe est en phase de performing depuis un an. La direction veut y injecter trois juniors « pour les former ». L'équipe résiste : « On va perdre notre rythme. » Comment gérez-vous ?",
      en: 'Your team has been performing for a year. Leadership wants to inject three juniors “for development”. The team resists: “We will lose our rhythm.” How do you handle it?',
    },
    options: [
      {
        fr: "Reconnaître le coût temporaire (retour en storming), co-planifier l'intégration avec l'équipe (mentorat, échelonnement) et ajuster les prévisions",
        en: 'Acknowledge the temporary cost (regression to storming), co-plan the onboarding with the team (mentoring, staggering) and adjust forecasts',
      },
      {
        fr: 'Refuser les juniors pour protéger la performance',
        en: 'Refuse the juniors to protect performance',
      },
      {
        fr: 'Imposer les arrivées sans ajuster les prévisions',
        en: 'Impose the arrivals without adjusting forecasts',
      },
      {
        fr: "Créer une équipe junior séparée qui apprendra seule",
        en: 'Create a separate junior team to learn on its own',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement de composition fait régresser l'équipe dans le modèle de Tuckman : ce coût se planifie (échelonnement, mentorat, vélocité ajustée). Développer les talents fait partie de la valeur long terme.",
      en: 'Any composition change regresses the team in Tuckman’s model: that cost is planned for (staggering, mentoring, adjusted velocity). Growing talent is part of long-term value.',
    },
  },
  {
    id: 'hp38',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "En comité, vous présentez un statut « rouge » assumé. Après la réunion, votre N+1 vous reproche de « l'avoir mis en difficulté » et exige de valider vos statuts avant diffusion. Que répondez-vous ?",
      en: 'In a committee, you present a deliberate “red” status. Afterwards, your manager scolds you for “embarrassing him” and demands to approve your statuses before release. How do you respond?',
    },
    options: [
      {
        fr: "Accepter de le pré-informer (pas de surprise), mais défendre l'intégrité du contenu : un statut se rapporte, il ne se négocie pas",
        en: 'Agree to pre-brief him (no surprises), but defend content integrity: a status is reported, not negotiated',
      },
      {
        fr: 'Accepter la validation préalable pour préserver la relation',
        en: 'Accept prior approval to preserve the relationship',
      },
      {
        fr: 'Refuser tout échange préalable au nom de la transparence',
        en: 'Refuse any pre-briefing in the name of transparency',
      },
      {
        fr: "Passer les statuts en « orange » par défaut à l'avenir",
        en: 'Default future statuses to “amber”',
      },
    ],
    correct: 0,
    explanation: {
      fr: "Distinguer la forme (pré-briefer les parties prenantes clés est une bonne pratique) du fond (l'exactitude du statut est non négociable). Céder sur le fond installerait le reporting pastèque.",
      en: 'Separate form (pre-briefing key stakeholders is good practice) from substance (status accuracy is non-negotiable). Yielding on substance institutionalizes watermelon reporting.',
    },
  },
  {
    id: 'hp39',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous animez un projet avec 40 % de prestataires d'une ESN dont le contrat arrive à échéance à mi-projet. Leur motivation décline : « On ne sait pas si on sera renouvelés. » Le renouvellement ne dépend pas de vous. Que faites-vous ?",
      en: 'You run a project with 40% contractors from a firm whose contract expires mid-project. Their motivation declines: “We don’t know if we will be renewed.” Renewal is not your call. What do you do?',
    },
    options: [
      {
        fr: "Escalader l'urgence de la décision de renouvellement en chiffrant le risque projet, et être transparent avec les prestataires sur le calendrier de décision",
        en: 'Escalate the urgency of the renewal decision by quantifying the project risk, and be transparent with contractors about the decision timeline',
      },
      {
        fr: 'Les rassurer en laissant entendre un renouvellement probable',
        en: 'Reassure them by hinting renewal is likely',
      },
      {
        fr: "Préparer leur remplacement sans le leur dire",
        en: 'Prepare their replacement without telling them',
      },
      {
        fr: "Ignorer : leur motivation relève de leur employeur",
        en: 'Ignore it: their motivation is their employer’s concern',
      },
    ],
    correct: 0,
    explanation: {
      fr: "L'incertitude prolongée est le vrai démotivateur : accélérer la décision (avec le coût du risque chiffré) et donner une visibilité honnête sur le processus. Les faux espoirs se paient au centuple.",
      en: 'Prolonged uncertainty is the real demotivator: accelerate the decision (with quantified risk cost) and give honest visibility on the process. False hope costs a hundredfold later.',
    },
  },
  {
    id: 'hp40',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Après un incident de production majeur causé par un déploiement de votre projet, deux départements se rejettent la faute en réunion de crise. La résolution technique piétine. En tant que facilitateur, quelle intervention faites-vous ?",
      en: 'After a major production incident caused by your project’s deployment, two departments trade blame in the crisis meeting. Technical resolution stalls. As facilitator, what intervention do you make?',
    },
    options: [
      {
        fr: "Séquencer : d'abord restaurer le service (qui fait quoi maintenant), ensuite un post-mortem sans blâme pour les causes",
        en: 'Sequence it: first restore service (who does what now), then a blameless post-mortem for causes',
      },
      {
        fr: 'Laisser le débat des responsabilités se vider d’abord',
        en: 'Let the accountability debate run its course first',
      },
      {
        fr: 'Établir immédiatement la responsabilité de chacun',
        en: 'Immediately establish each party’s responsibility',
      },
      {
        fr: 'Suspendre la réunion jusqu’au calme',
        en: 'Suspend the meeting until things calm down',
      },
    ],
    correct: 0,
    explanation: {
      fr: "En crise : stabiliser d'abord, analyser ensuite. Le débat de responsabilité pendant l'incident retarde la résolution et pollue l'analyse ; le post-mortem sans blâme viendra à froid.",
      en: 'In a crisis: stabilize first, analyze later. Debating blame during the incident delays resolution and poisons the analysis; the blameless post-mortem comes once cold.',
    },
  },
]
