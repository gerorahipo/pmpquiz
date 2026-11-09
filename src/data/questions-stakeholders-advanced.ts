import type { Question } from '../types'

/**
 * Advanced stakeholder-engagement scenarios, written to raise the difficulty
 * of the stakeholder domain (process-04 "Engage stakeholders", people-09
 * "Collaborate with stakeholders", process-02 communications).
 *
 * Inspired by the scenario-style screenshots in samples/parties prenantes —
 * contexts, numbers and wording are original. What makes them harder than the
 * existing bank: every distractor is a plausible "good-looking" action
 * (escalate, produce more reports, ask the sponsor to impose, add training…)
 * and the best answer hinges on sequence (analyse before act), on dynamic
 * re-assessment, on decision rights / governance, or on real vs. stated
 * engagement.
 */
export const STAKEHOLDERS_ADVANCED_QUESTIONS: Question[] = [
  {
    id: 'xp01',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "La matrice d'évaluation de l'engagement indique (actuel → souhaité) : directrice financière : résistante → neutre ; responsable des opérations : neutre → neutre ; représentant syndical : non informé → favorable ; sponsor : favorable → leader. Pour quelle partie prenante le plan d'engagement ne prévoit-il AUCUNE action d'évolution du niveau d'engagement ?",
      en: 'The stakeholder engagement assessment matrix shows (current → desired): finance director: resistant → neutral; operations manager: neutral → neutral; union representative: unaware → supportive; sponsor: supportive → leading. For which stakeholder does the engagement plan require NO action to change the engagement level?',
    },
    options: [
      { fr: 'La directrice financière', en: 'The finance director' },
      { fr: 'Le responsable des opérations', en: 'The operations manager' },
      { fr: 'Le représentant syndical', en: 'The union representative' },
      { fr: 'Le sponsor', en: 'The sponsor' },
    ],
    correct: 1,
    explanation: {
      fr: "Ce sont les ÉCARTS entre l'engagement actuel (C) et souhaité (D) qui génèrent les actions du plan. Le responsable des opérations est déjà au niveau souhaité : on le maintient et on le surveille, sans action d'évolution. Le sponsor reste un piège classique : il est « favorable », mais l'objectif est « leader » — il y a donc un écart à combler.",
      en: 'It is the GAPS between current (C) and desired (D) engagement that generate the plan’s actions. The operations manager is already at the desired level: maintain and monitor, no change action. The sponsor is the classic trap — "supportive" but the target is "leading", so there is a gap to close.',
    },
  },
  {
    id: 'xp02',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Un collectif de riverains peut bloquer l'accès au chantier par des actions de protestation (pouvoir) et exige des réponses immédiates (urgence), mais n'a aucun lien contractuel ni aucune relation reconnue avec le projet (pas de légitimité). Selon le modèle de saillance (pouvoir, légitimité, urgence), comment classer cette partie prenante ?",
      en: 'A residents’ group can block site access through protests (power) and demands immediate answers (urgency), but has no contractual link or recognized relationship with the project (no legitimacy). According to the salience model (power, legitimacy, urgency), how should this stakeholder be classified?',
    },
    options: [
      { fr: 'Dominante (pouvoir + légitimité)', en: 'Dominant (power + legitimacy)' },
      { fr: 'Dépendante (légitimité + urgence)', en: 'Dependent (legitimacy + urgency)' },
      { fr: 'Dangereuse (pouvoir + urgence)', en: 'Dangerous (power + urgency)' },
      { fr: 'Définitive (pouvoir + légitimité + urgence)', en: 'Definitive (power + legitimacy + urgency)' },
    ],
    correct: 2,
    explanation: {
      fr: "Le modèle de saillance combine trois attributs. Pouvoir + urgence sans légitimité = partie prenante « dangereuse » : elle peut perturber fortement le projet sans reconnaissance formelle. Dominante = pouvoir + légitimité ; dépendante = légitimité + urgence ; définitive = les trois. Savoir classer ne dispense pas d'engager : on cherche à comprendre ses préoccupations de façon légitime et sûre.",
      en: 'The salience model combines three attributes. Power + urgency without legitimacy = a "dangerous" stakeholder: able to seriously disrupt the project with no formal recognition. Dominant = power + legitimacy; dependent = legitimacy + urgency; definitive = all three. Classifying does not replace engaging: understand their concerns in a legitimate, safe way.',
    },
  },
  {
    id: 'xp03',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Le sponsor a délégué à un conseiller le droit de valider les décisions courantes du projet. À trois reprises en deux mois, le sponsor a ensuite remis en cause ces validations, ce qui a obligé l'équipe à refaire du travail. Que doit faire le chef de projet ?",
      en: 'The sponsor delegated to an advisor the right to approve routine project decisions. Three times in two months, the sponsor then overturned those approvals, forcing the team to redo work. What should the project manager do?',
    },
    options: [
      { fr: "Clarifier avec le sponsor, formellement, l'étendue de la délégation (types de décisions, seuils, escalade) et la consigner dans le cadre de gouvernance", en: 'Formally clarify with the sponsor the scope of the delegation (decision types, thresholds, escalation) and record it in the governance framework' },
      { fr: 'Exiger une validation écrite du sponsor pour chaque décision, quelle que soit son importance', en: 'Require written sponsor approval for every decision, whatever its importance' },
      { fr: 'Soumettre chaque reprise de travail comme une demande de changement facturable au sponsor', en: 'Submit each rework as a chargeable change request to the sponsor' },
      { fr: 'Demander au sponsor de remplacer son conseiller par un représentant plus proche de lui', en: 'Ask the sponsor to replace the advisor with a representative closer to them' },
    ],
    correct: 0,
    explanation: {
      fr: "Le problème est un flou sur les droits de décision, pas la personne. Il faut établir qui décide de quoi (délégation, seuils, escalade) et le documenter. Tout faire valider par le sponsor crée un goulot d'étranglement ; facturer le retravail n'adresse pas la cause ; remplacer le conseiller déplace le problème.",
      en: 'The problem is unclear decision rights, not the person. Establish who decides what (delegation, thresholds, escalation) and document it. Requiring sponsor sign-off on everything creates a bottleneck; charging the rework does not address the cause; replacing the advisor just moves the problem.',
    },
  },
  {
    id: 'xp04',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Un hôpital déploie un nouveau dossier patient. Malgré la formation et le soutien de la direction, l'utilisation stagne en chirurgie. Le chef de projet apprend que l'infirmière référente du service, sans position hiérarchique mais très écoutée de ses collègues, juge l'outil dangereux et le dit autour d'elle. Quelle est la MEILLEURE action ?",
      en: 'A hospital is rolling out a new patient-record system. Despite training and management support, usage stalls in surgery. The project manager learns that the ward’s lead nurse — no formal authority but highly respected by colleagues — considers the tool unsafe and says so around her. What is the BEST action?',
    },
    options: [
      { fr: "Demander au chef de service d'imposer l'utilisation de l'outil", en: 'Ask the head of department to mandate use of the tool' },
      { fr: "Ajouter une session de formation obligatoire pour tout le service", en: 'Add a mandatory training session for the whole ward' },
      { fr: "Rencontrer l'infirmière pour comprendre ses craintes précises, la recenser comme partie prenante clé et l'associer aux ajustements et aux tests", en: 'Meet the nurse to understand her specific concerns, record her as a key stakeholder, and involve her in adjustments and testing' },
      { fr: "Limiter la diffusion des informations qu'elle reçoit pour réduire la propagation de son discours", en: 'Limit the information she receives to reduce the spread of her views' },
    ],
    correct: 2,
    explanation: {
      fr: "L'influence informelle est plus forte que le pouvoir hiérarchique : elle n'avait pas été identifiée. On l'ajoute au registre, on cherche à comprendre ses préoccupations (peut-être légitimes pour la sécurité) et on la transforme en alliée. Imposer, former encore ou la tenir à l'écart traitent le symptôme, voire aggravent la résistance.",
      en: 'Informal influence outweighs formal authority — and she had not been identified. Add her to the register, understand her concerns (possibly legitimate safety ones) and turn her into an ally. Mandating, more training, or isolating her treats the symptom and may worsen resistance.',
    },
  },
  {
    id: 'xp05',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-02',
    question: {
      fr: "Le comité exécutif reçoit chaque semaine le même rapport de 30 diapositives que l'équipe projet. Les dirigeants l'ouvrent rarement et posent en réunion des questions dont les réponses y figurent. Quelle est la meilleure action du chef de projet ?",
      en: 'The executive committee receives the same 30-slide weekly report as the project team. Executives rarely open it and ask in meetings questions whose answers are in it. What is the project manager’s best action?',
    },
    options: [
      { fr: 'Réduire unilatéralement le rapport à une seule diapositive de synthèse', en: 'Unilaterally cut the report down to a single summary slide' },
      { fr: "Échanger avec les dirigeants pour définir leurs besoins (contenu, format, fréquence) et mettre à jour le plan de gestion des communications", en: 'Talk to the executives to define their needs (content, format, frequency) and update the communications management plan' },
      { fr: "Envoyer le rapport plus tôt afin qu'ils aient plus de temps pour le lire", en: 'Send the report earlier so they have more time to read it' },
      { fr: 'Présenter oralement le rapport complet au début de chaque réunion', en: 'Present the full report orally at the start of each meeting' },
    ],
    correct: 1,
    explanation: {
      fr: "Raccourcir « à l'instinct » repose sur une hypothèse non vérifiée sur ce dont les dirigeants ont besoin. L'analyse des besoins de communication se fait AVEC eux ; on met ensuite à jour le plan (contenu orienté décision, format, fréquence). Envoyer plus tôt ou présenter plus longuement ne change pas l'inadéquation du message.",
      en: 'Cutting "by instinct" rests on an unverified assumption about what executives need. Communication-requirements analysis is done WITH them, then the plan is updated (decision-oriented content, format, frequency). Sending earlier or presenting longer does not fix the mismatch.',
    },
  },
  {
    id: 'xp06',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Un chef de projet veut détecter AU PLUS TÔT une baisse d'engagement chez les décideurs clés, avant qu'elle ne bloque le projet. Quel indicateur est le plus utile ?",
      en: 'A project manager wants to detect EARLY a drop in engagement among key decision-makers, before it blocks the project. Which indicator is most useful?',
    },
    options: [
      { fr: "Le nombre de livrables produits par l'équipe ce mois-ci", en: 'The number of deliverables the team produced this month' },
      { fr: "Le nombre de courriels envoyés aux parties prenantes", en: 'The number of emails sent to stakeholders' },
      { fr: "Le pourcentage d'avancement du planning", en: 'Schedule percent complete' },
      { fr: "L'allongement du délai de réponse aux demandes de décision et la baisse de participation des décideurs", en: 'Longer response times to decision requests and lower participation by decision-makers' },
    ],
    correct: 3,
    explanation: {
      fr: "Un bon indicateur d'engagement mesure le COMPORTEMENT des parties prenantes (réactivité, participation, qualité des échanges), pas l'activité du chef de projet (courriels, réunions) ni l'avancement technique. Les délais de décision et l'absentéisme sont des signaux précurseurs.",
      en: 'A good engagement indicator measures stakeholder BEHAVIOR (responsiveness, participation, quality of exchanges), not the project manager’s activity (emails, meetings) or technical progress. Decision lead time and absenteeism are leading signals.',
    },
  },
  {
    id: 'xp07',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Un directeur régional classé « tenir satisfait » (pouvoir élevé, intérêt faible) apprend que le projet réduira le budget de son département de 15 %. Il demande soudain des réunions et exige des informations détaillées. Que doit faire le chef de projet ?",
      en: 'A regional director classified as "keep satisfied" (high power, low interest) learns that the project will cut their department’s budget by 15%. They suddenly request meetings and detailed information. What should the project manager do?',
    },
    options: [
      { fr: 'Continuer à le tenir satisfait avec les rapports mensuels existants', en: 'Keep him satisfied with the existing monthly reports' },
      { fr: "Le reclasser en « gérer de près », revoir l'analyse et adapter la stratégie d'engagement en commençant par comprendre ses préoccupations", en: 'Reclassify him as "manage closely", revisit the analysis and adapt the engagement strategy, starting by understanding his concerns' },
      { fr: "Le traiter comme résistant et limiter l'information pour éviter un conflit", en: 'Treat him as resistant and limit information to avoid conflict' },
      { fr: "Rediriger toutes ses demandes vers le sponsor pour préserver le temps de l'équipe", en: 'Redirect all his requests to the sponsor to protect the team’s time' },
    ],
    correct: 1,
    explanation: {
      fr: "Le positionnement pouvoir/intérêt n'est pas figé : un événement (ici l'impact budgétaire) fait passer l'intérêt de faible à élevé. La stratégie doit suivre (gérer de près). Le reclasser « résistant » avant de l'avoir écouté serait une supposition ; le renvoyer au sponsor évite le dialogue.",
      en: 'Power/interest positioning is not fixed: an event (here the budget impact) moves interest from low to high, and the strategy must follow (manage closely). Labeling him "resistant" before listening is an assumption; pushing him to the sponsor avoids the conversation.',
    },
  },
  {
    id: 'xp08',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-09',
    question: {
      fr: "Dans un projet agile, le product owner désigné est un analyste sans pouvoir de décision. Plusieurs fois, un directeur métier modifie en cours de sprint les priorités validées par le PO, ce qui crée des conflits avec l'équipe. Que doit faire le chef de projet (ou le Scrum Master) ?",
      en: 'On an agile project, the designated product owner is an analyst with no decision-making authority. Several times a business director changes mid-sprint the priorities the PO validated, creating conflict with the team. What should the project manager (or Scrum Master) do?',
    },
    options: [
      { fr: "Demander à l'équipe d'ignorer les demandes du directeur", en: 'Tell the team to ignore the director’s requests' },
      { fr: "Laisser le directeur prioriser directement le backlog avec l'équipe", en: 'Let the director prioritize the backlog directly with the team' },
      { fr: "Demander au sponsor de donner au PO un mandat clair et l'autorité de priorisation, et de convenir comment le directeur contribue (via le PO)", en: 'Ask the sponsor to give the PO a clear mandate and prioritization authority, and agree how the director contributes (through the PO)' },
      { fr: 'Ajouter un second product owner issu du métier pour partager les arbitrages', en: 'Add a second business-side product owner to share trade-offs' },
    ],
    correct: 2,
    explanation: {
      fr: "Le product owner doit être habilité à prioriser le backlog ; sinon les décisions sont contournées. La cause racine est un mandat insuffisant, qu'on traite avec le sponsor, tout en donnant au directeur un canal de contribution légitime. Ignorer le directeur ou doubler les PO aggrave la confusion.",
      en: 'The PO must be empowered to prioritize the backlog; otherwise decisions get bypassed. The root cause is an insufficient mandate, addressed with the sponsor while giving the director a legitimate channel to contribute. Ignoring the director or doubling POs worsens confusion.',
    },
  },
  {
    id: 'xp09',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Un fournisseur A demande au chef de projet les prix proposés par un fournisseur concurrent B, afin d'ajuster son offre, en affirmant que « tout le monde est informé de toute façon ». Le chef de projet a eu accès à ces prix pendant l'évaluation. Que doit-il faire ?",
      en: 'Supplier A asks the project manager for the prices proposed by competing supplier B to adjust their bid, claiming "everybody is informed anyway". The project manager had access to those prices during evaluation. What should they do?',
    },
    options: [
      { fr: 'Communiquer les prix pour garantir une concurrence équitable', en: 'Share the prices to ensure fair competition' },
      { fr: 'Communiquer seulement une fourchette approximative', en: 'Share only an approximate range' },
      { fr: "Refuser de divulguer ces informations confidentielles, rappeler le processus d'appel d'offres et orienter vers la fonction achats", en: 'Refuse to disclose the confidential information, restate the tender process and refer to procurement' },
      { fr: 'Ne pas répondre à la demande', en: 'Not respond to the request' },
    ],
    correct: 2,
    explanation: {
      fr: "Les informations confidentielles d'un soumissionnaire ne se divulguent pas, même partiellement : cela fausserait la concurrence et violerait l'éthique de l'approvisionnement. On répond clairement et on renvoie vers le canal officiel plutôt que de laisser la demande sans réponse.",
      en: 'A bidder’s confidential information is not disclosed, even partially: it would distort competition and breach procurement ethics. Answer clearly and refer to the official channel rather than leaving the request unanswered.',
    },
  },
  {
    id: 'xp10',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-02',
    question: {
      fr: "Une équipe projet de 6 personnes (chef de projet inclus) travaille avec le sponsor et 3 autres parties prenantes clés. Le plan prévoit d'ajouter 4 nouvelles parties prenantes issues d'un autre département. De combien le nombre de canaux de communication potentiels augmente-t-il ?",
      en: 'A project team of 6 (project manager included) works with the sponsor and 3 other key stakeholders. The plan adds 4 new stakeholders from another department. By how much does the number of potential communication channels increase?',
    },
    options: [
      { fr: '4', en: '4' },
      { fr: '40', en: '40' },
      { fr: '46', en: '46' },
      { fr: '91', en: '91' },
    ],
    correct: 2,
    explanation: {
      fr: "Canaux = n(n−1)/2. Avant : 6 + 1 + 3 = 10 personnes → 45 canaux. Après : 14 personnes → 91 canaux. Augmentation = 91 − 45 = 46. Le piège est de répondre 91 (le total) au lieu de la variation.",
      en: 'Channels = n(n−1)/2. Before: 6 + 1 + 3 = 10 people → 45 channels. After: 14 people → 91 channels. Increase = 91 − 45 = 46. The trap is answering 91 (the total) instead of the change.',
    },
  },
  {
    id: 'xp11',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-02',
    question: {
      fr: "Une équipe offshore a livré un composant qui ne correspond pas aux attentes, alors que l'exigence avait été expliquée en visioconférence et que l'équipe avait répondu « oui, c'est compris ». Quelle pratique de communication aurait le mieux réduit ce risque ?",
      en: 'An offshore team delivered a component that does not match expectations, although the requirement had been explained by video call and the team had answered "yes, understood". Which communication practice would best have reduced this risk?',
    },
    options: [
      { fr: 'Multiplier les visioconférences de suivi', en: 'Hold more follow-up video calls' },
      { fr: "Exiger un rapport quotidien de présence", en: 'Require a daily attendance report' },
      { fr: "Envoyer l'exigence uniquement par courriel (communication push)", en: 'Send the requirement by email only (push communication)' },
      { fr: "Faire reformuler l'exigence par l'équipe avec ses propres mots et confirmer par écrit (compte rendu, critères d'acceptation)", en: 'Have the team restate the requirement in their own words and confirm in writing (minutes, acceptance criteria)' },
    ],
    correct: 3,
    explanation: {
      fr: "Un message est efficace quand il est COMPRIS, pas seulement transmis : un « oui » ne prouve pas la compréhension (barrières de langue, de culture, de distance). La reformulation (feedback) puis la confirmation écrite fermant la boucle de communication. Plus de réunions ou l'envoi unilatéral n'apportent pas cette vérification.",
      en: 'A message is effective when UNDERSTOOD, not merely sent: a "yes" does not prove understanding (language, culture, distance barriers). Restating (feedback) then written confirmation closes the communication loop. More meetings or one-way sending adds no such check.',
    },
  },
  {
    id: 'xp12',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'process-02',
    question: {
      fr: "Un organisme de régulation exige une notification écrite et horodatée pour toute modification pouvant affecter la conformité du produit. Une telle modification vient d'être approuvée. Quelle est la méthode de communication la plus appropriée ?",
      en: 'A regulatory body requires a written, time-stamped notice for any change that may affect product compliance. Such a change has just been approved. What is the most appropriate communication method?',
    },
    options: [
      { fr: "Un appel téléphonique au référent de l'organisme, plus rapide", en: 'A phone call to the regulator’s contact, which is faster' },
      { fr: 'Une notification écrite formelle (push) conforme à l’exigence, avec accusé de réception conservé', en: 'A formal written notice (push) meeting the requirement, with the acknowledgment of receipt kept' },
      { fr: 'La publication de la modification sur le portail du projet (pull)', en: 'Posting the change on the project portal (pull)' },
      { fr: 'Une présentation lors de la prochaine réunion d’avancement', en: 'A presentation at the next progress meeting' },
    ],
    correct: 1,
    explanation: {
      fr: "Quand une exigence externe impose la forme (écrit, daté, traçable), la méthode se choisit pour la conformité : communication formelle écrite et poussée, avec preuve de réception. Le téléphone et la réunion ne laissent pas de trace ; un portail (pull) ne garantit pas que le destinataire en prenne connaissance.",
      en: 'When an external requirement dictates the form (written, dated, traceable), the method is chosen for compliance: formal written, pushed communication with proof of receipt. Phone calls and meetings leave no record; a portal (pull) does not guarantee the recipient sees it.',
    },
  },
  {
    id: 'xp13',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Une directrice déclare publiquement soutenir le projet, mais depuis deux mois elle ne libère pas les experts de son service pourtant promis pour les tests. Lorsque le chef de projet l'interroge, elle répond « je suis totalement avec vous ». Quelle est la MEILLEURE action ?",
      en: 'A director publicly states support for the project, but for two months has not released the experts from her department promised for testing. When the project manager asks, she replies "I’m fully with you". What is the BEST action?',
    },
    options: [
      { fr: 'La considérer favorable et attendre que les experts soient libérés', en: 'Treat her as supportive and wait for the experts to be released' },
      { fr: 'La reclasser comme résistante et escalader immédiatement', en: 'Reclassify her as resistant and escalate immediately' },
      { fr: "Demander au sponsor de lui imposer la libération des experts", en: 'Ask the sponsor to force the release of the experts' },
      { fr: "Clarifier avec elle ses contraintes réelles et convenir d'actions concrètes et datées, en réévaluant son engagement réel (et non déclaré)", en: 'Clarify her real constraints and agree concrete, dated actions, reassessing her actual (not stated) engagement' },
    ],
    correct: 3,
    explanation: {
      fr: "L'engagement se juge sur les actes, pas sur les déclarations. Il y a un écart entre l'engagement affiché et l'engagement réel : on cherche la cause (charge, priorités concurrentes) et on obtient des engagements précis. Escalader ou imposer sans dialogue risque de la transformer en opposante.",
      en: 'Engagement is judged by actions, not statements. There is a gap between displayed and actual engagement: find the cause (workload, competing priorities) and obtain specific commitments. Escalating or imposing without dialogue risks turning her into an opponent.',
    },
  },
  {
    id: 'xp14',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'process-14',
    question: {
      fr: "Deux membres du comité de pilotage, tous deux décisionnaires, sont en désaccord sur l'orientation du produit. Le chef de projet a animé deux séances de travail avec des analyses d'impact, sans convergence. La décision relève du comité et conditionne le chemin critique dans trois semaines. Que doit faire le chef de projet ?",
      en: 'Two steering-committee members, both decision-makers, disagree on the product direction. The project manager has facilitated two working sessions with impact analyses, without convergence. The decision belongs to the committee and drives the critical path in three weeks. What should the project manager do?',
    },
    options: [
      { fr: "Escalader au sponsor selon le cadre de gouvernance, en présentant les options, leurs impacts et la date limite de décision", en: 'Escalate to the sponsor per the governance framework, presenting the options, their impacts and the decision deadline' },
      { fr: "Trancher en faveur de l'option la moins risquée pour tenir le planning", en: 'Decide in favor of the least risky option to keep the schedule' },
      { fr: "Reporter la décision jusqu'à ce qu'un consensus apparaisse", en: 'Postpone the decision until a consensus emerges' },
      { fr: 'Demander à chacun de décider pour sa partie du périmètre', en: 'Ask each to decide for their own part of the scope' },
    ],
    correct: 0,
    explanation: {
      fr: "Faciliter vient en premier, mais ici c'est fait et la décision dépasse l'autorité du chef de projet. L'escalade devient la bonne réponse : via la gouvernance, avec options, impacts et échéance — pas pour « se débarrasser » du problème. Trancher soi-même sort de son rôle ; attendre met le chemin critique en danger ; scinder le périmètre fragmente le produit.",
      en: 'Facilitation comes first, but here it has been done and the decision exceeds the project manager’s authority. Escalation is now correct: through governance, with options, impacts and deadline — not to "dump" the problem. Deciding alone exceeds the role; waiting endangers the critical path; splitting scope fragments the product.',
    },
  },
  {
    id: 'xp15',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Lors des revues de sprint, seuls des utilisateurs avancés donnent du feedback. Après la mise en production, les utilisateurs occasionnels, majoritaires, rejettent l'ergonomie. Quelle pratique aurait dû être mise en œuvre ?",
      en: 'In sprint reviews, only power users give feedback. After go-live, the occasional users — the majority — reject the usability. Which practice should have been applied?',
    },
    options: [
      { fr: 'Organiser davantage de revues de sprint', en: 'Hold more sprint reviews' },
      { fr: 'Faire valider chaque incrément par le sponsor', en: 'Have each increment approved by the sponsor' },
      { fr: 'Ajouter des sessions de formation pour les utilisateurs occasionnels', en: 'Add training sessions for occasional users' },
      { fr: "Réexaminer l'identification des parties prenantes pour inclure des représentants de chaque groupe d'utilisateurs et les impliquer dès les revues", en: 'Revisit stakeholder identification to include representatives of every user group and involve them from the reviews on' },
    ],
    correct: 3,
    explanation: {
      fr: "Le problème est la représentativité : un groupe utilisateur numériquement majoritaire n'a jamais été identifié ni engagé. La réponse est d'identifier et d'engager tous les groupes pertinents, tôt. Plus de revues avec les mêmes personnes ou de la formation après coup ne corrigent pas le biais.",
      en: 'The issue is representativeness: a numerically major user group was never identified or engaged. The answer is to identify and engage all relevant groups early. More reviews with the same people, or training after the fact, does not fix the bias.',
    },
  },
  {
    id: 'xp16',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Au lancement d'un projet de réseau d'énergie dans une région que l'équipe connaît mal, le chef de projet craint de passer à côté de parties prenantes. Quelle approche réduit le mieux ce risque ?",
      en: 'At the start of an energy-network project in a region the team barely knows, the project manager fears missing stakeholders. Which approach best reduces that risk?',
    },
    options: [
      { fr: "Se baser sur l'organigramme de l'organisation cliente", en: 'Rely on the client organization’s org chart' },
      { fr: 'Attendre que les parties prenantes se manifestent', en: 'Wait for stakeholders to come forward' },
      { fr: "Demander aux parties prenantes déjà identifiées qui d'autre est concerné, et croiser avec le registre et les leçons apprises de projets similaires", en: 'Ask the already-identified stakeholders who else is affected, and cross-check with registers and lessons learned from similar projects' },
      { fr: 'Envoyer un questionnaire général à tous les habitants de la région', en: 'Send a general questionnaire to everyone in the region' },
    ],
    correct: 2,
    explanation: {
      fr: "Identifier est itératif : on part des parties prenantes connues pour découvrir les autres (« qui d'autre ? »), et on s'appuie sur l'historique d'organisation (registres, leçons apprises). L'organigramme ignore les acteurs externes ; attendre revient à les découvrir en crise ; un questionnaire généraliste est coûteux et peu ciblé.",
      en: 'Identification is iterative: start from known stakeholders to discover others ("who else?") and leverage organizational history (registers, lessons learned). An org chart ignores external actors; waiting means discovering them in crisis; a blanket questionnaire is costly and unfocused.',
    },
  },
  {
    id: 'xp17',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'process-02',
    question: {
      fr: "Lors d'une réunion avec un partenaire issu d'une culture où l'on évite de dire « non » directement, un responsable répond « nous allons essayer » à une demande de livraison avancée de trois semaines. Le chef de projet reçoit ensuite des signaux de retard. Quelle est la meilleure approche ?",
      en: 'In a meeting with a partner from a culture that avoids saying "no" directly, a manager answers "we will try" to a request to deliver three weeks earlier. The project manager then receives signs of delay. What is the best approach?',
    },
    options: [
      { fr: 'Interpréter la réponse comme un engagement ferme et le consigner', en: 'Interpret the answer as a firm commitment and record it' },
      { fr: 'Exiger un engagement écrit signé sous 24 heures', en: 'Demand a signed written commitment within 24 hours' },
      { fr: "Clarifier en privé, par des questions ouvertes, les conditions et contraintes réelles, puis confirmer la compréhension par écrit", en: 'Clarify privately, with open questions, the real conditions and constraints, then confirm the understanding in writing' },
      { fr: 'Escalader au sponsor pour obtenir une décision', en: 'Escalate to the sponsor for a decision' },
    ],
    correct: 2,
    explanation: {
      fr: "Les différences culturelles (communication à fort contexte implicite) changent le sens d'une réponse. On ne suppose ni un « oui » ni un « non » : on explore, avec respect et en privé (préserver la face), les vraies contraintes, puis on formalise. Exiger un écrit immédiat ou escalader pourrait être perçu comme un affront et fermer le dialogue.",
      en: 'Cultural differences (high-context communication) change the meaning of an answer. Assume neither a "yes" nor a "no": explore, respectfully and privately (saving face), the real constraints, then formalize. Demanding an immediate written commitment or escalating may be seen as an affront and close the dialogue.',
    },
  },
  {
    id: 'xp18',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Un responsable métier favorable est invité à toutes les réunions hebdomadaires de l'équipe (environ 12 h par semaine). Il s'absente de plus en plus et se plaint de manquer de temps, mais continue de soutenir le projet et valide les points clés. Que doit faire le chef de projet ?",
      en: 'A supportive business manager is invited to all weekly team meetings (about 12 hours a week). He is increasingly absent and complains of lack of time, but still supports the project and approves key points. What should the project manager do?',
    },
    options: [
      { fr: 'Exiger sa présence à toutes les réunions pour préserver son engagement', en: 'Require his attendance at all meetings to preserve engagement' },
      { fr: 'Le retirer du registre des parties prenantes actives', en: 'Remove him from the active stakeholder register' },
      { fr: "Le remplacer par un délégué sans pouvoir de décision", en: 'Replace him with a delegate with no decision authority' },
      { fr: "Adapter le mode d'engagement : le réserver aux moments décisionnels, lui envoyer une synthèse ciblée et convenir ensemble de cette fréquence", en: 'Adapt the engagement mode: reserve him for decision points, send a targeted summary and agree on that frequency together' },
    ],
    correct: 3,
    explanation: {
      fr: "S'engager n'est pas « être présent partout ». Pour un soutien déjà acquis, on optimise l'effort : on cible ses interventions là où sa valeur est maximale, avec une communication adaptée (le plan d'engagement et de communication se met à jour). Forcer la présence risque de transformer un allié en partie prenante épuisée ; le remplacer par un délégué sans pouvoir fait perdre ses décisions.",
      en: 'Engaging is not "being present everywhere". For already-won support, optimize effort: target his involvement where value is highest, with tailored communication (the engagement and communication plans are updated). Forcing attendance risks turning an ally into an exhausted stakeholder; a delegate with no authority loses his decisions.',
    },
  },
  {
    id: 'xp19',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-09',
    question: {
      fr: "Deux directeurs confient chacun, en privé, au chef de projet une priorité contradictoire pour la prochaine version et lui demandent de ne rien dire à l'autre. Que doit faire le chef de projet ?",
      en: 'Two directors each privately tell the project manager a conflicting priority for the next release and ask them to say nothing to the other. What should the project manager do?',
    },
    options: [
      { fr: "Encourager chacun à exposer ouvertement sa position et organiser une séance commune pour aligner les priorités sur les objectifs du projet", en: 'Encourage each to state their position openly and hold a joint session to align priorities with project objectives' },
      { fr: 'Garder les deux confidences et suivre la priorité du plus influent', en: 'Keep both confidences and follow the more influential one’s priority' },
      { fr: "Révéler à chacun ce que l'autre a dit afin d'accélérer la résolution", en: 'Reveal to each what the other said to speed up resolution' },
      { fr: 'Choisir la priorité qui lui semble la meilleure sans en informer personne', en: 'Pick the priority he or she thinks best without telling anyone' },
    ],
    correct: 0,
    explanation: {
      fr: "Il ne faut ni trahir les confidences ni jouer un camp : on pousse la transparence (chacun présente sa position) et on facilite l'alignement sur les objectifs et la valeur. Suivre le plus influent ou décider seul court-circuite la collaboration et l'équité.",
      en: 'Neither betray confidences nor take sides: push transparency (each presents their position) and facilitate alignment with objectives and value. Following the more influential or deciding alone bypasses collaboration and fairness.',
    },
  },
  {
    id: 'xp20',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes concernant le registre des parties prenantes et le plan d'engagement des parties prenantes.",
      en: 'Select the TWO accurate statements about the stakeholder register and the stakeholder engagement plan.',
    },
    options: [
      { fr: "Le registre consigne l'identification, l'évaluation (attentes, influence, intérêt) et la classification des parties prenantes", en: 'The register records stakeholder identification, assessment (expectations, influence, interest) and classification' },
      { fr: "Le plan d'engagement est figé après l'approbation de la charte", en: 'The engagement plan is frozen after the charter is approved' },
      { fr: "Le plan d'engagement décrit les stratégies et actions pour faire évoluer l'engagement actuel vers l'engagement souhaité", en: 'The engagement plan describes the strategies and actions to move current engagement toward desired engagement' },
      { fr: 'Le registre est produit une seule fois pendant le démarrage', en: 'The register is produced once during initiation' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Le registre (qui ? attentes, influence, classification) alimente le plan d'engagement (comment passer de l'engagement actuel au souhaité). Les deux sont des documents VIVANTS : ils sont revus et mis à jour tout au long du projet à mesure que les parties prenantes et leur position évoluent.",
      en: 'The register (who? expectations, influence, classification) feeds the engagement plan (how to move from current to desired engagement). Both are LIVING documents: reviewed and updated throughout the project as stakeholders and positions change.',
    },
  },
  {
    id: 'xp21',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'process-02',
    question: {
      fr: "Une ONG environnementale critique publiquement le projet dans les médias avec des chiffres partiellement inexacts. Le chef de projet doit réagir. Quelle est la MEILLEURE approche ?",
      en: 'An environmental NGO publicly criticizes the project in the media using partly inaccurate figures. The project manager must react. What is the BEST approach?',
    },
    options: [
      { fr: "Se coordonner avec le sponsor et la communication de l'organisation pour une réponse factuelle via le porte-parole désigné, et ouvrir un dialogue avec l'ONG pour comprendre ses préoccupations", en: 'Coordinate with the sponsor and the organization’s communications to give a factual response via the designated spokesperson, and open a dialogue with the NGO to understand its concerns' },
      { fr: 'Publier un démenti sur les réseaux sociaux au nom du projet', en: 'Post a rebuttal on social media on behalf of the project' },
      { fr: 'Ne pas réagir pour ne pas amplifier la polémique', en: 'Not react so as not to amplify the controversy' },
      { fr: "Demander au service juridique d'envoyer une mise en demeure à l'ONG", en: 'Ask the legal department to send the NGO a formal notice' },
    ],
    correct: 0,
    explanation: {
      fr: "Face à une partie prenante externe influente, on évite les réactions individuelles : le message passe par le circuit de communication de l'organisation (porte-parole, sponsor), reste factuel, et s'accompagne d'un dialogue pour traiter la préoccupation de fond. Le silence laisse la rumeur s'installer ; le recours juridique aggrave la défiance.",
      en: 'With an influential external stakeholder, avoid individual reactions: the message goes through the organization’s communication channel (spokesperson, sponsor), stays factual, and comes with dialogue addressing the underlying concern. Silence lets the narrative settle; legal action deepens distrust.',
    },
  },
  {
    id: 'xp22',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "Un chef de projet invite d'emblée les 60 parties prenantes recensées à tous les ateliers de conception. Les ateliers deviennent ingérables et plusieurs parties prenantes clés se sentent noyées. Quelle étape du processus d'engagement a été négligée ?",
      en: 'A project manager invites all 60 identified stakeholders to every design workshop from the start. The workshops become unmanageable and several key stakeholders feel swamped. Which step of the engagement process was neglected?',
    },
    options: [
      { fr: "L'identification des parties prenantes", en: 'Stakeholder identification' },
      { fr: "L'analyse et la priorisation, qui permettent de planifier un engagement adapté (qui, quand, comment)", en: 'Analysis and prioritization, which enable planning tailored engagement (who, when, how)' },
      { fr: "Le suivi de l'engagement des parties prenantes", en: 'Monitoring stakeholder engagement' },
      { fr: "La clôture des relations avec les parties prenantes", en: 'Closing out stakeholder relationships' },
    ],
    correct: 1,
    explanation: {
      fr: "L'identification est faite (60 parties prenantes recensées). Il manque l'analyse (pouvoir, intérêt, attentes, engagement actuel vs souhaité) et la planification qui en découle : toutes les parties prenantes n'ont pas besoin du même niveau d'implication ni des mêmes ateliers. Surveiller ou clôturer intervient plus tard.",
      en: 'Identification is done (60 stakeholders listed). Missing are the analysis (power, interest, expectations, current vs desired engagement) and the planning that follows: not every stakeholder needs the same involvement or the same workshops. Monitoring and closing come later.',
    },
  },
  {
    id: 'xp23',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Lors de la revue de fin d'itération, un directeur déclare que l'incrément ne correspond pas à ce qu'il avait demandé six semaines plus tôt. La user story validée par le product owner correspond pourtant bien à sa demande écrite d'alors. Que doit faire le chef de projet ?",
      en: 'In the iteration review, a director says the increment does not match what he asked for six weeks earlier. The user story approved by the product owner does match his written request at the time. What should the project manager do?',
    },
    options: [
      { fr: 'Lui rappeler que la story validée correspond à sa demande écrite et clore le sujet', en: 'Remind him the approved story matches his written request and close the matter' },
      { fr: "Intégrer immédiatement la modification dans l'itération en cours pour le satisfaire", en: 'Immediately add the change to the current iteration to satisfy him' },
      { fr: "Escalader la divergence au sponsor pour obtenir son arbitrage", en: 'Escalate the divergence to the sponsor for arbitration' },
      { fr: "Échanger avec lui pour comprendre l'évolution de son besoin, puis faire inscrire le nouvel élément au backlog pour que le product owner le priorise", en: 'Talk with him to understand how his need evolved, then have the new item added to the backlog for the product owner to prioritize' },
    ],
    correct: 3,
    explanation: {
      fr: "Dans un cadre agile, les besoins évoluent : on cherche à comprendre le besoin réel d'aujourd'hui plutôt que de défendre l'ancien (ce n'est pas un procès) et on passe par le backlog et le product owner pour arbitrer la valeur et la priorité. Insérer le changement à chaud ou escalader court-circuite le processus.",
      en: 'In an agile setting, needs evolve: seek to understand today’s real need rather than defend the old one (this is not a trial) and use the backlog and product owner to arbitrate value and priority. Inserting the change ad hoc or escalating bypasses the process.',
    },
  },
  {
    id: 'xp24',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-03',
    question: {
      fr: "L'analyse des parties prenantes révèle qu'un fournisseur stratégique pourrait se désengager du projet si le budget était réduit. Où et comment ce constat doit-il être traité ?",
      en: 'Stakeholder analysis reveals that a strategic supplier might withdraw from the project if the budget were cut. Where and how should this finding be handled?',
    },
    options: [
      { fr: 'Dans le journal des problèmes, avec une action immédiate de résolution', en: 'In the issue log, with an immediate resolution action' },
      { fr: "Dans le registre des risques, avec une réponse et un responsable, en la reliant aux actions du plan d'engagement", en: 'In the risk register, with a response and an owner, linked to the engagement plan actions' },
      { fr: 'Dans le journal des modifications, comme demande de changement anticipée', en: 'In the change log, as an anticipated change request' },
      { fr: 'Uniquement dans le plan de communication, sous forme de point de contact régulier', en: 'Only in the communications plan, as a regular touch point' },
    ],
    correct: 1,
    explanation: {
      fr: "Le désengagement n'est pas encore survenu : c'est un événement incertain, donc un RISQUE (lié aux parties prenantes). On l'inscrit au registre des risques avec une stratégie de réponse et un responsable, et on aligne le plan d'engagement. Un problème (issue) est un événement déjà réalisé ; le journal des modifications sert aux changements demandés.",
      en: 'The withdrawal has not happened yet: it is an uncertain event, hence a (stakeholder-related) RISK. Log it in the risk register with a response strategy and owner, and align the engagement plan. An issue is an event that has already occurred; the change log is for requested changes.',
    },
  },
]
