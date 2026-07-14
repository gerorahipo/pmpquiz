import type { Concept } from '../types'
import { CONCEPT_TRAPS } from './conceptTraps'
import { ADVANCED_CONCEPTS } from './concepts-advanced'

const BASE_CONCEPTS: Concept[] = [
  // ─────────────────────────── PRINCIPLES ───────────────────────────
  {
    id: 'pr-stewardship',
    category: 'principle',
    title: { fr: 'Intendance (Stewardship)', en: 'Stewardship' },
    summary: {
      fr: 'Agir de manière respectueuse, intègre et responsable.',
      en: 'Be a diligent, respectful and caring steward.',
    },
    body: {
      fr: "Le chef de projet agit avec intégrité, dans le respect des personnes, de l'organisation et de l'environnement. L'intendance couvre la conformité aux règles internes et externes, mais va au-delà : transparence, éthique (code de déontologie PMI®), usage responsable des ressources et prise en compte des impacts sociaux et environnementaux des décisions du projet.",
      en: 'The project manager acts with integrity and respect for people, the organization and the environment. Stewardship covers compliance with internal and external rules but goes further: transparency, ethics (PMI® code of conduct), responsible use of resources, and consideration of the social and environmental impacts of project decisions.',
    },
    details: {
      fr: "L'intendance s'étend à toutes les ressources confiées au chef de projet : financières, humaines, matérielles et environnementales. Elle s'appuie sur les quatre valeurs du code de déontologie et de conduite professionnelle du PMI® : responsabilité, respect, équité et honnêteté. Être un bon intendant signifie aussi exercer une diligence raisonnable : vérifier les faits avant d'agir sur une suspicion de fraude, déclarer un conflit d'intérêts avant qu'il n'influence une décision, et utiliser les canaux de signalement (lanceur d'alerte) prévus par l'organisation plutôt que de fermer les yeux ou d'agir seul dans la précipitation. L'intendance dépasse la simple conformité légale : elle implique un jugement éthique actif, même quand aucune règle explicite ne s'applique.",
      en: 'Stewardship extends to every resource entrusted to the project manager: financial, human, material and environmental. It rests on the four values of the PMI® Code of Ethics and Professional Conduct: responsibility, respect, fairness and honesty. Being a good steward also means exercising due diligence: verifying facts before acting on a suspicion of fraud, disclosing a conflict of interest before it influences a decision, and using the organization’s designated reporting channels (whistleblowing) rather than looking away or acting alone in haste. Stewardship goes beyond mere legal compliance: it requires active ethical judgment, even when no explicit rule applies.',
    },
    examples: {
      fr: "• Un chef de projet qui découvre qu'une facture fournisseur a été gonflée par un collègue vérifie les faits, puis signale l'anomalie par le canal officiel plutôt que de couvrir la situation.\n• Choisir un fournisseur légèrement plus cher mais correctement certifié plutôt qu'un fournisseur moins cher non conforme, même en l'absence de règle explicite l'imposant.\n• Déclarer un conflit d'intérêts personnel (un proche travaille chez un soumissionnaire) avant une décision d'achat, pour permettre à un tiers de valider l'impartialité du choix.",
      en: 'A project manager who discovers a supplier invoice was inflated by a colleague verifies the facts, then reports the anomaly through the official channel instead of covering it up.\nChoosing a slightly more expensive but properly certified supplier over a cheaper, non-compliant one, even without an explicit rule requiring it.\nDisclosing a personal conflict of interest (a relative works at a bidding vendor) before a procurement decision, so a third party can validate the impartiality of the choice.',
    },
  },
  {
    id: 'pr-team',
    category: 'principle',
    title: { fr: "Équipe collaborative", en: 'Collaborative team environment' },
    summary: {
      fr: "Créer un environnement d'équipe collaboratif et responsabilisant.",
      en: 'Create a collaborative and empowering team environment.',
    },
    body: {
      fr: "Les projets sont livrés par des équipes, pas par des individus. Un environnement collaboratif repose sur des accords d'équipe (charte d'équipe), des rôles clairs, la sécurité psychologique et l'autonomie de décision au bon niveau. Le chef de projet cultive la confiance, la diversité des points de vue et la responsabilité partagée des résultats.",
      en: 'Projects are delivered by teams, not individuals. A collaborative environment relies on team agreements (team charter), clear roles, psychological safety and decision-making authority at the right level. The project manager cultivates trust, diverse perspectives and shared ownership of outcomes.',
    },
    details: {
      fr: "La charte d'équipe formalise les valeurs, les règles de fonctionnement (horaires, canaux de communication), le processus de décision et la façon de traiter les désaccords — et elle est d'autant plus respectée qu'elle est co-écrite par l'équipe elle-même, pas imposée. La sécurité psychologique (concept popularisé par Amy Edmondson) désigne la capacité d'un membre à exprimer une erreur, un doute ou un désaccord sans craindre d'être blâmé ou dévalorisé : c'est ce qui permet de faire remonter les mauvaises nouvelles tôt. Le principe de subsidiarité veut que les décisions soient prises au niveau le plus proche du travail réel, par ceux qui ont l'information la plus fraîche.",
      en: 'The team charter formalizes values, working agreements (hours, communication channels), the decision-making process and how disagreements are handled — and it is respected far more when co-authored by the team itself rather than imposed. Psychological safety (a concept popularized by Amy Edmondson) is a team member’s ability to voice a mistake, a doubt or a disagreement without fear of blame or ridicule: it is what allows bad news to surface early. The subsidiarity principle holds that decisions should be made at the level closest to the actual work, by those with the freshest information.',
    },
    examples: {
      fr: "• L'équipe co-rédige sa charte lors de l'atelier de lancement, définissant des « heures noyau », la façon de signaler un désaccord et la définition de terminé.\n• Un développeur junior signale publiquement un risque d'architecture sans crainte d'être écarté, parce que les précédentes « mauvaises nouvelles » ont été accueillies avec ouverture, pas sanctionnées.\n• Le choix d'un outil de développement est délégué à l'équipe plutôt qu'imposé par le chef de projet, car ce sont les personnes qui l'utilisent au quotidien.",
      en: 'The team co-writes its charter during the kickoff workshop, defining “core hours”, how to raise a disagreement and the Definition of Done.\nA junior developer flags an architecture risk publicly without fear of being sidelined, because previous “bad news” was met with openness, not punishment.\nThe choice of development tool is delegated to the team rather than dictated by the project manager, since they are the ones using it daily.',
    },
  },
  {
    id: 'pr-stakeholders',
    category: 'principle',
    title: { fr: 'Engagement des parties prenantes', en: 'Stakeholder engagement' },
    summary: {
      fr: "S'engager efficacement avec les parties prenantes.",
      en: 'Effectively engage with stakeholders.',
    },
    body: {
      fr: "Les parties prenantes influencent le périmètre, les exigences, le calendrier, les coûts, et in fine le succès du projet. Il faut les identifier tôt, analyser leur pouvoir, intérêt et attitude, puis les engager de façon proactive et continue. Une partie prenante résistante se gère d'abord par l'écoute et la compréhension de ses préoccupations, jamais par l'exclusion.",
      en: 'Stakeholders influence scope, requirements, schedule, cost and ultimately project success. Identify them early, analyze their power, interest and attitude, then engage them proactively and continuously. A resistant stakeholder is handled first by listening and understanding their concerns, never by exclusion.',
    },
    details: {
      fr: "Au-delà de la grille pouvoir/intérêt, le modèle de saillance (salience model) affine l'analyse selon trois attributs : pouvoir, légitimité et urgence — une partie prenante cumulant les trois exige une attention prioritaire. La matrice d'évaluation de l'engagement compare l'état ACTUEL d'une partie prenante (inconsciente, résistante, neutre, favorable, moteur) à son état SOUHAITÉ, ce qui rend visible l'écart à combler et guide le plan d'action. L'engagement est un processus continu, pas un exercice ponctuel de lancement : le registre des parties prenantes doit être réévalué à chaque changement significatif (réorganisation, nouveau sponsor, changement réglementaire).",
      en: 'Beyond the power/interest grid, the salience model refines the analysis using three attributes: power, legitimacy and urgency — a stakeholder scoring high on all three demands priority attention. The stakeholder engagement assessment matrix compares a stakeholder’s CURRENT state (unaware, resistant, neutral, supportive, leading) to their DESIRED state, making the gap to close visible and guiding the action plan. Engagement is a continuous process, not a one-time kickoff exercise: the stakeholder register must be reassessed after any significant change (reorganization, new sponsor, regulatory shift).',
    },
    examples: {
      fr: "• Utiliser une grille pouvoir/intérêt pour décider qu'un cadre à fort pouvoir mais faible intérêt recevra une note de synthèse mensuelle plutôt que des réunions hebdomadaires.\n• Faire passer une partie prenante « résistante » à « favorable » en l'invitant à co-concevoir la solution plutôt qu'en lui présentant un résultat déjà figé.\n• Réévaluer le registre des parties prenantes après une réorganisation qui fait apparaître de nouveaux décideurs.",
      en: 'Using a power/interest grid to decide that a high-power, low-interest executive receives a monthly one-page summary rather than weekly meetings.\nMoving a “resistant” stakeholder to “supportive” by inviting them to co-design the solution rather than presenting a fait accompli.\nReassessing the stakeholder register after a reorganization reveals new decision-makers.',
    },
  },
  {
    id: 'pr-value',
    category: 'principle',
    title: { fr: 'Focalisation sur la valeur', en: 'Focus on value' },
    summary: {
      fr: 'La valeur est le but ultime de tout projet.',
      en: 'Value is the ultimate goal of any project.',
    },
    body: {
      fr: "Un projet réussi n'est pas celui qui produit des livrables, mais celui qui génère la valeur attendue : bénéfices financiers (ROI, VAN), amélioration de processus, conformité, satisfaction client ou apprentissage. La valeur guide la priorisation (backlog ordonné par valeur en agile) et doit être réévaluée en continu : si le business case n'est plus valide, la gouvernance doit en être alertée.",
      en: 'A successful project is not one that produces deliverables, but one that generates the expected value: financial benefits (ROI, NPV), process improvement, compliance, customer satisfaction or learning. Value drives prioritization (value-ordered backlog in agile) and must be continuously reassessed: if the business case is no longer valid, governance must be alerted.',
    },
    details: {
      fr: "Livrer plus tôt accélère la matérialisation de la valeur (valeur temps de l'argent) : c'est pourquoi la livraison incrémentale est privilégiée dès que possible, même en contexte prédictif. Le plan de management des bénéfices trace comment et QUAND chaque bénéfice sera mesuré — souvent bien après la fin du projet, ce qui implique un propriétaire des bénéfices désigné qui survit à la clôture du projet. Un business case n'est jamais figé : un changement de contexte (marché, réglementation, stratégie) peut l'invalider en cours de route, et le chef de projet a le devoir d'alerter la gouvernance plutôt que de poursuivre par inertie.",
      en: 'Delivering earlier accelerates value materialization (time value of money): this is why incremental delivery is favored whenever possible, even in a predictive context. The benefits management plan tracks how and WHEN each benefit will be measured — often well after project closure, which implies a designated benefits owner who outlives the project. A business case is never fixed: a change in context (market, regulation, strategy) can invalidate it mid-course, and the project manager has a duty to alert governance rather than continue out of inertia.',
    },
    examples: {
      fr: "• Publier un sous-ensemble de fonctionnalités plus tôt pour commencer à générer des revenus plutôt que d'attendre un lancement « big bang ».\n• Annuler une fonctionnalité en cours de projet parce qu'un mouvement concurrent a supprimé sa valeur attendue.\n• Mesurer les bénéfices six mois après la mise en service (taux d'adoption, économies réalisées) plutôt que de déclarer la victoire dès le déploiement.",
      en: 'Releasing a subset of features early to start generating revenue instead of waiting for a “big bang” launch.\nCanceling a feature mid-project because a competitor’s move eliminated its expected value.\nMeasuring benefits six months after go-live (adoption rate, realized savings) rather than declaring victory at deployment.',
    },
  },
  {
    id: 'pr-systems',
    category: 'principle',
    title: { fr: 'Pensée systémique', en: 'Systems thinking' },
    summary: {
      fr: 'Reconnaître et évaluer les interactions du système projet.',
      en: 'Recognize and evaluate system interactions.',
    },
    body: {
      fr: "Un projet est un système d'éléments interdépendants, lui-même intégré dans des systèmes plus larges (programme, portefeuille, organisation, environnement externe). Une décision sur le périmètre affecte le délai, les coûts, les risques, la qualité et les personnes. La pensée systémique invite à anticiper ces effets de bord et à considérer le projet de façon holistique plutôt qu'en silos.",
      en: 'A project is a system of interdependent parts, itself embedded in larger systems (program, portfolio, organization, external environment). A scope decision affects schedule, cost, risk, quality and people. Systems thinking means anticipating these ripple effects and viewing the project holistically rather than in silos.',
    },
    details: {
      fr: "Un piège classique est l'optimisation locale : améliorer la performance d'un seul composant peut dégrader la performance globale du système (par exemple accélérer un maillon qui n'était pas le goulot d'étranglement). La pensée systémique s'appuie aussi sur la notion de boucles de rétroaction : une boucle renforçante amplifie une tendance (le succès attire plus de ressources, qui accélèrent encore le succès), une boucle équilibrante la stabilise (un système qui s'auto-corrige). Le projet lui-même est un sous-système d'un programme, d'un portefeuille et de l'organisation : une décision locale peut avoir des répercussions à ces niveaux supérieurs qu'il faut anticiper.",
      en: 'A classic trap is local optimization: improving one component’s performance can degrade the overall system’s performance (for example, speeding up a link that was not the actual bottleneck). Systems thinking also relies on the concept of feedback loops: a reinforcing loop amplifies a trend (success attracts more resources, which further accelerates success), while a balancing loop stabilizes it (a self-correcting system). The project itself is a subsystem of a program, a portfolio and the organization: a local decision can have repercussions at these higher levels that must be anticipated.',
    },
    examples: {
      fr: "• Accélérer la phase de test d'une équipe crée un goulot d'étranglement en aval, au moment de l'intégration — anticipé avant de s'y engager.\n• Une décision d'économie sur les achats augmente le risque et le coût de reprise plus tard, pour un bilan global négatif.\n• Prendre en compte l'impact d'un changement de planning sur d'autres projets partageant le même pool de ressources.",
      en: 'Speeding up one team’s testing phase creates a downstream bottleneck at integration time — anticipated before committing to it.\nA cost-cutting decision in procurement increases risk and rework cost later, for a net negative overall outcome.\nConsidering how a schedule change ripples into other projects sharing the same shared resource pool.',
    },
  },
  {
    id: 'pr-leadership',
    category: 'principle',
    title: { fr: 'Leadership', en: 'Leadership' },
    summary: {
      fr: 'Démontrer des comportements de leadership adaptés au contexte.',
      en: 'Demonstrate leadership behaviors fit for the context.',
    },
    body: {
      fr: "Le leadership n'est pas réservé au chef de projet : chacun peut l'exercer. Le style dominant attendu est le leadership au service de l'équipe (servant leadership) : lever les obstacles, protéger l'équipe, développer les personnes, faciliter plutôt que commander. Le bon leader adapte son style (directif, coaching, délégatif…) à la maturité de l'équipe et à la situation.",
      en: 'Leadership is not reserved for the project manager: anyone can exercise it. The dominant expected style is servant leadership: removing impediments, shielding the team, growing people, facilitating rather than commanding. A good leader adapts their style (directive, coaching, delegating…) to team maturity and the situation.',
    },
    details: {
      fr: "Il est utile de distinguer leadership (faire les bonnes choses : vision, inspiration, adaptation) et management (bien faire les choses : planification, contrôle, exécution) — les deux sont nécessaires, mais l'examen valorise fortement les comportements de leadership. Le modèle de leadership situationnel (Hersey-Blanchard) propose quatre styles à faire évoluer selon la maturité de l'équipe : directif (donner des instructions précises), persuasif/coaching (expliquer et soutenir), participatif (partager la décision), délégatif (laisser l'équipe autonome). Le leadership au service de l'équipe peut être exercé par n'importe quel membre, pas seulement par la personne ayant l'autorité formelle.",
      en: 'It helps to distinguish leadership (doing the right things: vision, inspiration, adaptation) from management (doing things right: planning, control, execution) — both are needed, but the exam strongly favors leadership behaviors. The situational leadership model (Hersey-Blanchard) proposes four styles to evolve as team maturity grows: directing (giving precise instructions), coaching (explaining and supporting), supporting/participating (sharing the decision), and delegating (letting the team be autonomous). Servant leadership can be exercised by any team member, not only the person holding formal authority.',
    },
    examples: {
      fr: "• Un chef de projet adopte un style directif avec une équipe totalement nouvelle sur le domaine, puis évolue vers la délégation à mesure qu'elle gagne en maturité.\n• Un développeur sans autorité formelle prend l'initiative d'organiser une session de partage de connaissances — une démonstration de leadership.\n• Le chef de projet protège l'équipe des réunions inutiles pour qu'elle puisse se concentrer : du leadership au service de l'équipe en action.",
      en: 'A project manager uses a directing style with a brand-new team unfamiliar with the domain, then shifts toward delegating as the team matures.\nA developer with no formal authority takes the initiative to organize a knowledge-sharing session — a demonstration of leadership.\nThe project manager shields the team from unnecessary meetings so it can focus — servant leadership in action.',
    },
  },
  {
    id: 'pr-tailoring',
    category: 'principle',
    title: { fr: 'Adaptation (Tailoring)', en: 'Tailoring' },
    summary: {
      fr: "Adapter l'approche de livraison au contexte du projet.",
      en: 'Tailor the delivery approach to the project context.',
    },
    body: {
      fr: "Il n'existe pas d'approche unique. Chaque projet ajuste ses processus, son cycle de vie (prédictif, itératif, incrémental, agile, hybride), ses outils et ses rituels selon la taille, la criticité, l'incertitude des exigences, la culture et les contraintes réglementaires. Le tailoring vise « juste assez » de processus pour maximiser la valeur en minimisant la lourdeur.",
      en: 'There is no one-size-fits-all approach. Each project adjusts its processes, life cycle (predictive, iterative, incremental, agile, hybrid), tools and rituals based on size, criticality, requirements uncertainty, culture and regulatory constraints. Tailoring aims for “just enough” process to maximize value while minimizing overhead.',
    },
    details: {
      fr: "Le tailoring porte sur plusieurs dimensions : la cadence de livraison, les exigences de conformité, la culture organisationnelle, la taille et la répartition géographique de l'équipe. Adapter n'est pas synonyme de « sauter la gouvernance » : c'est une décision délibérée, justifiée et documentée, pas un raccourci informel. Deux excès symétriques guettent le chef de projet : le sous-tailoring (trop peu de processus, qui expose à des risques non maîtrisés) et le sur-ingénierie (trop de processus, qui alourdit sans ajouter de valeur). Le bon niveau se réévalue au fil du projet, pas seulement au lancement.",
      en: 'Tailoring spans several dimensions: delivery cadence, compliance requirements, organizational culture, and team size or geographic distribution. Tailoring does not mean “skip governance”: it is a deliberate, justified and documented decision, not an informal shortcut. Two symmetric traps await the project manager: under-tailoring (too little process, exposing the project to unmanaged risk) and over-engineering (too much process, adding overhead without adding value). The right level is reassessed throughout the project, not just at kickoff.',
    },
    examples: {
      fr: "• Une startup de 3 personnes se passe de comité formel de contrôle des changements, en utilisant une validation légère sur un canal de discussion — documentée à des fins d'audit.\n• Un projet pharmaceutique réglementé ajoute des jalons de conformité supplémentaires absents du modèle standard, en raison d'exigences légales.\n• Une équipe distribuée adapte sa cadence de communication (plus d'écrit asynchrone) par rapport à une équipe co-localisée qui privilégie les daily meetings en direct.",
      en: 'A 3-person startup skips a formal change control board, using a lightweight chat-based approval instead — documented for audit purposes.\nA regulated pharmaceutical project adds extra compliance gates absent from the standard template, due to legal requirements.\nA distributed team tailors its communication cadence (more asynchronous writing) compared to a co-located team that favors live daily stand-ups.',
    },
  },
  {
    id: 'pr-quality',
    category: 'principle',
    title: { fr: 'Qualité', en: 'Quality' },
    summary: {
      fr: 'Intégrer la qualité dans les processus et les livrables.',
      en: 'Build quality into processes and deliverables.',
    },
    body: {
      fr: "La qualité, c'est la conformité aux exigences ET l'aptitude à l'usage. Elle se construit (prévention) plutôt qu'elle ne se contrôle (inspection) : le coût de la prévention est inférieur au coût des défaillances. Distinguer qualité (satisfaction des exigences) et « grade » (niveau de gamme) : un produit d'entrée de gamme peut être de haute qualité s'il répond parfaitement à ses exigences.",
      en: 'Quality is conformance to requirements AND fitness for use. It is built in (prevention) rather than inspected in: the cost of prevention is lower than the cost of failure. Distinguish quality (meeting requirements) from grade (feature level): a low-grade product can be high quality if it perfectly meets its requirements.',
    },
    details: {
      fr: "Le coût de la qualité se décompose en quatre catégories, classées par coût croissant : prévention (former, concevoir correctement dès le départ), évaluation (inspecter, tester), défaillance interne (corriger un défaut avant livraison) et défaillance externe (corriger un défaut découvert par le client — la plus coûteuse, y compris en réputation). L'amélioration continue (Kaizen, cycle Plan-Do-Check-Act) s'appuie sur cette hiérarchie : mieux vaut investir en amont que réparer en aval. Le piège classique de l'examen consiste à confondre qualité et grade : un produit « bas de gamme » peut être parfaitement conforme à ses exigences (donc de haute qualité), tandis qu'un produit « haut de gamme » mal exécuté peut être de piètre qualité.",
      en: 'The cost of quality breaks down into four categories, ranked by increasing cost: prevention (training, designing correctly from the start), appraisal (inspecting, testing), internal failure (fixing a defect before delivery), and external failure (fixing a defect the customer discovers — the costliest, including in reputation). Continuous improvement (Kaizen, the Plan-Do-Check-Act cycle) rests on this hierarchy: it is better to invest upstream than to repair downstream. The classic exam trap is confusing quality with grade: a “low-grade” product can be perfectly conformant to its requirements (hence high quality), while a poorly executed “high-grade” product can be low quality.',
    },
    examples: {
      fr: "• Investir dans des tests automatisés (prévention) pour éviter de coûteux incidents en production (défaillance externe) plus tard.\n• Une voiture économique sans options peut être de « haute qualité » (aucun défaut, conforme à ses spécifications) tout en étant de « bas de gamme » (peu d'options) comparée à une voiture de luxe.\n• Organiser une rétrospective après une anomalie échappée en production pour en prévenir la récurrence, plutôt que de se contenter de corriger le bug.",
      en: 'Investing in automated tests (prevention) to avoid costly production incidents (external failure) later.\nA no-frills economy car can be “high quality” (no defects, fully meets its specifications) while being “low grade” (few features) compared to a luxury car.\nRunning a retrospective after a defect escapes to production, to prevent recurrence rather than just patching the bug.',
    },
  },
  {
    id: 'pr-complexity',
    category: 'principle',
    title: { fr: 'Complexité', en: 'Complexity' },
    summary: {
      fr: 'Naviguer dans la complexité du projet.',
      en: 'Navigate project complexity.',
    },
    body: {
      fr: "La complexité naît du comportement humain, des interactions entre systèmes, de l'incertitude et de l'ambiguïté. Elle ne se prédit pas entièrement : elle se détecte et se gère. Réponses typiques : découpler les composants, livrer par petits incréments pour apprendre vite, simuler, diversifier les points de vue, renforcer la communication.",
      en: 'Complexity emerges from human behavior, system interactions, uncertainty and ambiguity. It cannot be fully predicted: it is detected and managed. Typical responses: decouple components, deliver in small increments to learn fast, simulate, diversify perspectives, strengthen communication.',
    },
    details: {
      fr: "Le PMBOK® distingue quatre sources principales de complexité : le comportement humain (motivations et interactions imprévisibles), le comportement du système (interdépendances non linéaires), l'incertitude (probabilités inconnues) et l'ambiguïté (relation de cause à effet floue, ou existence de plusieurs interprétations possibles). Chaque source appelle une réponse différente : un spike technique ou un prototype réduit l'incertitude ; réunir des points de vue diversifiés aide à interpréter une situation ambiguë ; découpler l'architecture limite la propagation en cascade d'une défaillance locale. La complexité ne se « résout » pas une fois pour toutes : elle se surveille en continu et se réduit progressivement au fil du projet.",
      en: 'The PMBOK® identifies four main sources of complexity: human behavior (unpredictable motivations and interactions), system behavior (non-linear interdependencies), uncertainty (unknown probabilities) and ambiguity (unclear cause-and-effect relationships, or multiple possible interpretations). Each source calls for a different response: a technical spike or prototype reduces uncertainty; bringing together diverse perspectives helps interpret an ambiguous situation; decoupling the architecture limits the cascading spread of a local failure. Complexity is never “solved” once and for all: it is continuously monitored and progressively reduced throughout the project.',
    },
    examples: {
      fr: "• Réaliser un spike technique de deux jours avant de s'engager sur une technologie inconnue, pour réduire l'incertitude.\n• Découper un système monolithique en services faiblement couplés afin qu'une panne d'un module ne se propage pas en cascade.\n• Réunir des personnes de différents services pour interpréter une exigence réglementaire ambiguë.",
      en: 'Running a two-day technical spike before committing to an unfamiliar technology, to reduce uncertainty.\nSplitting a monolithic system into loosely coupled services so a failure in one module does not cascade.\nBringing together people from different departments to interpret an ambiguous regulatory requirement.',
    },
  },
  {
    id: 'pr-risk',
    category: 'principle',
    title: { fr: 'Risque', en: 'Risk' },
    summary: {
      fr: 'Optimiser les réponses aux risques (menaces et opportunités).',
      en: 'Optimize risk responses (threats and opportunities).',
    },
    body: {
      fr: "Un risque est un événement incertain qui, s'il survient, a un impact positif (opportunité) ou négatif (menace) sur les objectifs. L'attitude attendue est proactive : identifier tôt, analyser (probabilité × impact), planifier des réponses (éviter/transférer/atténuer/accepter pour les menaces ; exploiter/partager/améliorer/accepter pour les opportunités) et surveiller en continu, dans les limites du seuil de risque de l'organisation.",
      en: 'A risk is an uncertain event that, if it occurs, has a positive (opportunity) or negative (threat) impact on objectives. The expected posture is proactive: identify early, analyze (probability × impact), plan responses (avoid/transfer/mitigate/accept for threats; exploit/share/enhance/accept for opportunities) and monitor continuously, within the organization’s risk thresholds.',
    },
    details: {
      fr: "Il faut distinguer les risques individuels (un événement précis) du risque global du projet (l'exposition agrégée de tout le projet à l'incertitude, y compris les effets systémiques). L'appétence, la tolérance et le seuil de risque sont fixés par l'organisation, pas par le chef de projet : ils déterminent ce qui est acceptable sans action et ce qui doit être escaladé. L'analyse peut être qualitative (matrice probabilité-impact, simple et rapide) ou quantitative (valeur monétaire attendue, simulation de Monte-Carlo, pour des décisions à fort enjeu). Une réponse au risque peut elle-même engendrer un risque secondaire (créé par la réponse) ; ce qui reste du risque initial après traitement est le risque résiduel.",
      en: 'It is important to distinguish individual risks (a specific event) from overall project risk (the aggregate exposure of the whole project to uncertainty, including systemic effects). Risk appetite, tolerance and threshold are set by the organization, not the project manager: they determine what is acceptable without action and what must be escalated. Analysis can be qualitative (a simple, fast probability-impact matrix) or quantitative (expected monetary value, Monte Carlo simulation, for high-stakes decisions). A risk response can itself spawn a secondary risk (created by the response); what remains of the original risk after treatment is the residual risk.',
    },
    examples: {
      fr: "• Souscrire une assurance (transfert) pour un événement à faible probabilité mais fort impact, comme un dommage matériel majeur.\n• Réaliser une simulation de Monte-Carlo pour donner au sponsor une fourchette de confiance P50/P80 plutôt qu'une date unique.\n• Accepter un risque mineur sans action car il reste dans le seuil de tolérance fixé par l'organisation.",
      en: 'Buying insurance (transfer) for a low-probability, high-impact event such as major equipment damage.\nRunning a Monte Carlo simulation to give the sponsor a P50/P80 confidence range instead of a single date.\nAccepting a minor risk with no action because it falls within the tolerance threshold set by the organization.',
    },
  },
  {
    id: 'pr-adaptability',
    category: 'principle',
    title: { fr: 'Adaptabilité et résilience', en: 'Adaptability and resiliency' },
    summary: {
      fr: "Accepter le changement et rebondir face aux imprévus.",
      en: 'Embrace change and bounce back from setbacks.',
    },
    body: {
      fr: "Les projets rencontrent inévitablement des imprévus. L'adaptabilité est la capacité à ajuster l'approche face aux conditions changeantes ; la résilience est la capacité à absorber les chocs et à se rétablir rapidement. Concrètement : boucles de feedback courtes, apprentissage continu, plans alternatifs, marges et diversité des compétences dans l'équipe.",
      en: 'Projects inevitably meet the unexpected. Adaptability is the ability to adjust the approach to changing conditions; resiliency is the ability to absorb impacts and recover quickly. In practice: short feedback loops, continuous learning, alternative plans, buffers and diverse skills within the team.',
    },
    details: {
      fr: "Adaptabilité et résilience se distinguent par leur horizon temporel : l'adaptabilité agit en amont (ajuster proactivement l'approche face à des signaux de changement), la résilience agit après coup (absorber un choc déjà survenu et s'en remettre vite). Les mécanismes qui les rendent possibles sont souvent les mêmes : des boucles de feedback courtes (itérations, rétrospectives) qui permettent de détecter tôt un besoin d'ajustement ; des marges et de la redondance (compétences croisées, plans B) qui absorbent les chocs sans arrêter le projet. Une organisation ou une équipe « antifragile » ne se contente pas de résister au changement : elle en tire un apprentissage qui la renforce.",
      en: 'Adaptability and resiliency differ in their time horizon: adaptability acts upstream (proactively adjusting the approach in response to signals of change), while resiliency acts after the fact (absorbing a shock that has already occurred and recovering quickly). The mechanisms that enable both are often the same: short feedback loops (iterations, retrospectives) that surface the need to adjust early; buffers and redundancy (cross-trained skills, backup plans) that absorb shocks without halting the project. An “antifragile” organization or team does not merely withstand change: it draws learning from it that makes it stronger.',
    },
    examples: {
      fr: "• Après la défaillance d'un fournisseur, l'équipe qualifie rapidement un fournisseur de secours déjà identifié dans le plan de risques (résilience).\n• Passer d'une livraison « big bang » à des livraisons incrémentales après avoir constaté que les besoins utilisateurs évoluent vite (adaptabilité).\n• Former les membres de l'équipe de façon croisée pour absorber une absence imprévue sans perdre le rythme.",
      en: 'After a supplier fails, the team quickly qualifies a backup supplier already identified in the risk plan (resiliency).\nSwitching from a big-bang release to incremental releases after learning that user needs are shifting fast (adaptability).\nCross-training team members so the team can absorb an unexpected absence without losing momentum.',
    },
  },
  {
    id: 'pr-change',
    category: 'principle',
    title: { fr: 'Conduite du changement', en: 'Change management' },
    summary: {
      fr: "Permettre le changement pour atteindre l'état futur visé.",
      en: 'Enable change to achieve the envisioned future state.',
    },
    body: {
      fr: "Livrer un produit ne suffit pas : il faut que l'organisation et les utilisateurs adoptent le changement pour que la valeur se matérialise. Le chef de projet anticipe la résistance, implique les parties prenantes tôt, communique la vision et accompagne la transition (formation, support, sponsors du changement). Le changement organisationnel se pilote, il ne se décrète pas.",
      en: 'Delivering a product is not enough: the organization and users must adopt the change for value to materialize. The project manager anticipates resistance, involves stakeholders early, communicates the vision and supports the transition (training, support, change champions). Organizational change is managed, not decreed.',
    },
    details: {
      fr: "Une transition réussie combine généralement plusieurs leviers : créer la conscience du besoin de changement, susciter l'envie d'y participer, transmettre les connaissances et compétences nécessaires, donner la capacité réelle de changer (temps, outils, autorité), puis renforcer durablement le nouveau comportement pour éviter un retour en arrière. La résistance au changement est un phénomène normal et attendu, qu'il faut diagnostiquer (peur de perdre son statut ? manque de compréhension ? expérience passée négative ?) plutôt que réprimer. Un réseau de « sponsors du changement » ou « champions » relais, choisis pour leur influence informelle, démultiplie l'adoption bien au-delà du seul chef de projet. Le plan de conduite du changement doit être aligné avec le plan de management des bénéfices : le changement d'usage EST la condition de la réalisation de la valeur.",
      en: 'A successful transition typically combines several levers: building awareness of the need for change, generating a desire to take part, transferring the necessary knowledge and skills, providing the real ability to change (time, tools, authority), and then durably reinforcing the new behavior to prevent regression. Resistance to change is a normal, expected phenomenon that should be diagnosed (fear of losing status? lack of understanding? a negative past experience?) rather than suppressed. A network of “change champions” or sponsors, chosen for their informal influence, multiplies adoption far beyond the project manager alone. The change management plan must be aligned with the benefits management plan: the change in usage IS the condition for value realization.',
    },
    examples: {
      fr: "• Organiser des démonstrations précoces avec les futurs utilisateurs pour qu'ils s'approprient la solution avant la mise en service, plutôt que d'être surpris.\n• Identifier des « champions du changement » influents dans chaque service pour relayer le message et répondre aux questions de leurs pairs.\n• Prévoir une période de transition où l'ancien et le nouveau système coexistent, pour réduire l'anxiété, avec une date de fin claire pour l'ancien système.",
      en: 'Running early demos with future users so they build ownership of the solution before go-live, rather than being surprised.\nIdentifying influential “change champions” in each department to relay the message and answer their peers’ questions.\nPlanning a transition period where the old and new systems run in parallel to ease anxiety, with a clear sunset date for the old system.',
    },
  },

  // ──────────────────────── PERFORMANCE DOMAINS ────────────────────────
  {
    id: 'pd-stakeholders',
    category: 'performance',
    title: { fr: 'Parties prenantes', en: 'Stakeholders' },
    summary: {
      fr: 'Identifier, analyser et engager tout au long du projet.',
      en: 'Identify, analyze and engage throughout the project.',
    },
    body: {
      fr: "Ce domaine couvre le cycle complet : identifier → comprendre (pouvoir, intérêt, attentes) → analyser → prioriser → engager → surveiller. Les outils clés : registre des parties prenantes, grille pouvoir/intérêt, matrice d'évaluation de l'engagement (inconscient, résistant, neutre, favorable, moteur). L'engagement efficace repose sur une communication adaptée à chaque groupe.",
      en: 'This domain covers the full cycle: identify → understand (power, interest, expectations) → analyze → prioritize → engage → monitor. Key tools: stakeholder register, power/interest grid, stakeholder engagement assessment matrix (unaware, resistant, neutral, supportive, leading). Effective engagement relies on communication adapted to each group.',
    },
    details: {
      fr: "La matrice d'évaluation de l'engagement se lit en deux colonnes : l'état ACTUEL (C) de chaque partie prenante et son état SOUHAITÉ (D). L'écart entre les deux colonnes révèle où concentrer les efforts d'engagement. Trois styles de communication complètent la boîte à outils : la communication push (envoyer l'information, ex. rapport, courriel), pull (mettre l'information à disposition, ex. intranet, portail) et interactive (échanger en direct, ex. réunion, atelier) — le bon style dépend de l'urgence, de la complexité et du nombre de destinataires. Le registre des parties prenantes n'est jamais figé : il doit être mis à jour dès qu'un événement change la carte des pouvoirs (réorganisation, nouveau régulateur, changement de sponsor).",
      en: 'The stakeholder engagement assessment matrix reads in two columns: each stakeholder’s CURRENT state (C) and their DESIRED state (D). The gap between the two columns reveals where to focus engagement efforts. Three communication styles complete the toolkit: push (sending information, e.g., a report or email), pull (making information available, e.g., an intranet or portal) and interactive (exchanging live, e.g., a meeting or workshop) — the right style depends on urgency, complexity and the number of recipients. The stakeholder register is never static: it must be updated whenever an event reshuffles the power map (reorganization, new regulator, change of sponsor).',
    },
    examples: {
      fr: "• Marquer l'engagement actuel d'une partie prenante comme « résistant » (C) avec un état souhaité « neutre » (D), puis planifier des actions ciblées pour combler l'écart.\n• Envoyer un rapport technique détaillé (pull) à un cadre peu intéressé tout en animant un atelier interactif avec un groupe d'utilisateurs impliqués.\n• Mettre à jour le registre des parties prenantes après avoir découvert qu'un organisme réglementaire non répertorié doit approuver le lancement.",
      en: 'Marking a stakeholder’s current engagement as “resistant” (C) with a desired state of “neutral” (D), then planning targeted actions to close the gap.\nSending a detailed technical report (pull) to an uninterested executive while running an interactive workshop with an engaged user group.\nUpdating the stakeholder register after discovering an unlisted regulatory body must approve the launch.',
    },
  },
  {
    id: 'pd-team',
    category: 'performance',
    title: { fr: 'Équipe', en: 'Team' },
    summary: {
      fr: "Construire une équipe performante et la faire grandir.",
      en: 'Build a high-performing team and help it grow.',
    },
    body: {
      fr: "Ce domaine traite de la culture d'équipe, du leadership et du développement des personnes. Repères d'examen : modèle de Tuckman (forming, storming, norming, performing, adjourning), charte d'équipe, sécurité psychologique, motivation (Maslow, Herzberg, McGregor), gestion des conflits (la collaboration est la meilleure approche), équipes virtuelles et inclusion.",
      en: 'This domain deals with team culture, leadership and people development. Exam anchors: Tuckman’s model (forming, storming, norming, performing, adjourning), team charter, psychological safety, motivation theories (Maslow, Herzberg, McGregor), conflict management (collaborating is best), virtual teams and inclusion.',
    },
    details: {
      fr: "Trois théories de la motivation reviennent régulièrement à l'examen. La pyramide de Maslow ordonne les besoins (physiologiques, sécurité, appartenance, estime, accomplissement) : un besoin inférieur non satisfait bloque la motivation aux niveaux supérieurs. La théorie bifactorielle de Herzberg distingue les facteurs d'hygiène (salaire, conditions de travail — leur absence démotive mais leur présence ne motive pas durablement) des facteurs de motivation (reconnaissance, responsabilité, accomplissement — les seuls à engager réellement). La théorie X/Y de McGregor oppose un management qui suppose que les employés évitent le travail (X) à un management qui suppose qu'ils s'y épanouissent naturellement si les conditions le permettent (Y). Ces théories éclairent pourquoi une prime ne suffit jamais à elle seule à motiver durablement une équipe.",
      en: 'Three motivation theories come up regularly on the exam. Maslow’s hierarchy orders needs (physiological, safety, belonging, esteem, self-actualization): an unmet lower need blocks motivation at higher levels. Herzberg’s two-factor theory distinguishes hygiene factors (pay, working conditions — their absence demotivates but their presence does not durably motivate) from motivators (recognition, responsibility, achievement — the only ones that truly engage people). McGregor’s Theory X/Y contrasts management that assumes employees avoid work (X) with management that assumes they naturally thrive given the right conditions (Y). These theories explain why a bonus alone never durably motivates a team.',
    },
    examples: {
      fr: "• En appliquant Herzberg : augmenter le salaire (facteur d'hygiène) n'a pas réduit le turnover, mais donner plus d'autonomie et de reconnaissance (facteurs de motivation) l'a fait.\n• Utiliser la collaboration/résolution de problème pour régler un désaccord entre deux leads sur l'architecture, plutôt que d'imposer une décision.\n• Faire tourner les horaires de réunion entre fuseaux horaires pour qu'un même site ne porte pas toujours le créneau le plus contraignant.",
      en: 'Applying Herzberg: raising salary (a hygiene factor) did not reduce turnover, but giving more autonomy and recognition (motivators) did.\nUsing collaborating/problem-solving to settle a disagreement between two leads about architecture, instead of forcing a decision.\nRotating meeting times across time zones so the same site does not always bear the most inconvenient slot.',
    },
  },
  {
    id: 'pd-approach',
    category: 'performance',
    title: {
      fr: 'Approche de développement et cycle de vie',
      en: 'Development approach and life cycle',
    },
    summary: {
      fr: 'Choisir entre prédictif, agile, itératif ou hybride.',
      en: 'Choose between predictive, agile, iterative or hybrid.',
    },
    body: {
      fr: "L'approche dépend du produit, des exigences et du contexte : prédictif quand les exigences sont stables et connues ; agile quand l'incertitude est forte et le feedback fréquent nécessaire ; hybride pour combiner (ex. conception prédictive + construction itérative). Le cycle de vie définit les phases du projet et leurs jalons ou cadences. C'est une décision de tailoring majeure, réévaluable en cours de route.",
      en: 'The approach depends on the product, requirements and context: predictive when requirements are stable and known; agile when uncertainty is high and frequent feedback is needed; hybrid to combine (e.g., predictive design + iterative build). The life cycle defines project phases and their milestones or cadences. It is a major tailoring decision that can be revisited.',
    },
    details: {
      fr: "Le choix se situe sur un continuum plutôt que sur un choix binaire : à une extrémité le prédictif (exigences figées tôt, une seule livraison finale), à l'autre l'agile pur (exigences émergentes, livraisons continues), avec entre les deux l'itératif (prototypes affinés successivement) et l'incrémental (livraisons partielles cumulatives). Les critères qui orientent le choix incluent la volatilité des exigences, le coût et le risque d'un changement tardif, le besoin de retours fréquents du client, et les contraintes réglementaires qui imposent parfois une documentation exhaustive en amont. Rien n'empêche de changer d'approche en cours de route si le contexte évolue significativement — ce n'est pas un engagement irréversible pris une fois pour toutes au lancement.",
      en: 'The choice sits on a continuum rather than a binary decision: at one end, predictive (requirements frozen early, a single final delivery), at the other, pure agile (emerging requirements, continuous delivery), with iterative (successively refined prototypes) and incremental (cumulative partial deliveries) in between. The criteria guiding the choice include requirements volatility, the cost and risk of a late change, the need for frequent customer feedback, and regulatory constraints that sometimes mandate exhaustive upfront documentation. Nothing prevents changing the approach mid-course if the context shifts significantly — it is not an irreversible commitment made once and for all at kickoff.',
    },
    examples: {
      fr: "• Un projet de construction de pont utilise un cycle de vie prédictif car les exigences sont stables et une reprise physique serait exorbitante.\n• Une nouvelle fonctionnalité d'application mobile utilise Scrum car les retours clients réorientent fréquemment les priorités.\n• Un produit matériel + logiciel adopte une approche hybride : prédictive pour la fabrication du matériel, agile pour l'application compagnon.",
      en: 'A bridge construction project uses a predictive life cycle because requirements are stable and physical rework would be prohibitively expensive.\nA new mobile app feature set uses Scrum because customer feedback frequently reshapes priorities.\nA hardware-plus-software product uses a hybrid approach: predictive for hardware manufacturing, agile for the companion app.',
    },
  },
  {
    id: 'pd-planning',
    category: 'performance',
    title: { fr: 'Planification', en: 'Planning' },
    summary: {
      fr: 'Organiser et coordonner le travail, au bon niveau de détail.',
      en: 'Organize and coordinate the work, at the right level of detail.',
    },
    body: {
      fr: "La planification couvre périmètre (WBS / backlog), échéancier (chemin critique, dépendances, planification par vagues), coûts (estimations, référence de base, réserves), ressources, communications et achats. Le bon plan est « juste suffisant » : assez pour coordonner et s'engager, pas au point de figer ce qui doit rester adaptable. En agile, la planification est continue (release planning, sprint planning).",
      en: 'Planning covers scope (WBS / backlog), schedule (critical path, dependencies, rolling wave planning), cost (estimates, baseline, reserves), resources, communications and procurement. A good plan is “just enough”: sufficient to coordinate and commit, without freezing what must stay adaptable. In agile, planning is continuous (release planning, sprint planning).',
    },
    details: {
      fr: "L'élaboration progressive signifie que le plan se précise au fur et à mesure que l'information devient disponible : même en approche prédictive, planifier n'est jamais un exercice unique figé au lancement. La planification par vagues (rolling wave planning) illustre ce principe : le travail proche est détaillé finement, le travail lointain reste à un niveau macro et sera affiné plus tard. Toute modification de la référence de base (périmètre, coûts, échéancier) doit passer par le processus de maîtrise des changements, même s'il s'agit d'un ajustement mineur. En agile, la planification se déploie à plusieurs niveaux emboîtés : feuille de route produit, plan de release, planification de sprint, puis ajustement quotidien — chaque niveau avec un horizon et une précision différents.",
      en: 'Progressive elaboration means the plan becomes more precise as information becomes available: even in a predictive approach, planning is never a one-time exercise frozen at kickoff. Rolling wave planning illustrates this principle: near-term work is detailed finely, while distant work stays at a high level and will be refined later. Any change to the baseline (scope, cost, schedule) must go through the change control process, even for a seemingly minor adjustment. In agile, planning unfolds at several nested levels: product roadmap, release plan, sprint planning, and then daily adjustment — each level with a different horizon and precision.',
    },
    examples: {
      fr: "• Détailler entièrement le prochain sprint tout en gardant la release à 3 sprints d'échéance sous forme d'epics macro (planification par vagues).\n• Re-baseliner l'échéancier après un changement de périmètre approuvé, en suivant le processus de maîtrise des changements.\n• Un projet hybride maintient une WBS pour les achats de matériel et un backlog pour les fonctionnalités logicielles, en parallèle.",
      en: 'Detailing the next sprint fully while keeping the release 3 sprints away as high-level epics (rolling wave planning).\nRebaselining the schedule after an approved scope change, following the change control process.\nA hybrid project maintains a WBS for hardware procurement and a backlog for software features, in parallel.',
    },
  },
  {
    id: 'pd-work',
    category: 'performance',
    title: { fr: 'Travail du projet', en: 'Project work' },
    summary: {
      fr: "Exécuter, communiquer, gérer les ressources et les achats.",
      en: 'Execute, communicate, manage resources and procurement.',
    },
    body: {
      fr: "Ce domaine concerne l'exécution efficace : établir les processus de travail, gérer les communications (la majorité du temps du chef de projet), les ressources physiques, les achats et contrats (prix forfaitaire, coûts remboursables, temps et matériaux), et l'apprentissage continu (leçons apprises tout au long du projet, pas seulement à la fin).",
      en: 'This domain is about effective execution: establishing work processes, managing communications (most of a project manager’s time), physical resources, procurement and contracts (fixed price, cost-reimbursable, time & materials), and continuous learning (lessons learned throughout the project, not only at the end).',
    },
    details: {
      fr: "La formule du nombre de canaux de communication, n(n−1)/2, illustre pourquoi la complexité de la communication croît presque au carré de la taille de l'équipe : passer de 8 à 11 personnes ne fait pas qu'ajouter 3 relations, cela ajoute 25 nouveaux canaux potentiels. Sur les contrats, le risque financier se répartit différemment selon le type choisi : au prix forfaitaire (FFP), le risque de dépassement de coût est porté par le fournisseur ; en coûts remboursables (CPFF, CPIF), il est porté par l'acheteur ; en temps et matériaux (T&M), le risque est partagé et ce type convient bien à un périmètre encore flou. Les leçons apprises doivent être capturées à chaud (rétrospectives régulières, registre vivant) : un exercice unique en fin de projet ne produit qu'un contenu générique et peu exploitable.",
      en: 'The communication channel formula, n(n−1)/2, illustrates why communication complexity grows almost with the square of team size: going from 8 to 11 people does not just add 3 relationships, it adds 25 new potential channels. On contracts, financial risk is allocated differently depending on the type chosen: under fixed price (FFP), cost-overrun risk sits with the seller; under cost-reimbursable (CPFF, CPIF), it sits with the buyer; under time & materials (T&M), risk is shared, and this type suits still-fuzzy scope well. Lessons learned must be captured fresh (regular retrospectives, a living register): a single end-of-project exercise only produces generic, barely actionable content.',
    },
    examples: {
      fr: "• Calculer qu'ajouter 3 personnes à une équipe de 8 crée 25 nouveaux canaux de communication, justifiant un changement dans la structure des réunions.\n• Choisir un contrat en temps et matériaux pour un travail exploratoire au périmètre flou, et un prix forfaitaire pour des livrables bien définis.\n• Consigner une leçon apprise juste après un incident de déploiement plutôt que d'attendre la clôture du projet.",
      en: 'Calculating that adding 3 people to an 8-person team creates 25 new communication channels, justifying a change in meeting structure.\nChoosing a time & materials contract for exploratory work with unclear scope, and a fixed price contract for well-defined deliverables.\nLogging a lesson learned right after a deployment hiccup rather than waiting for project closure.',
    },
  },
  {
    id: 'pd-delivery',
    category: 'performance',
    title: { fr: 'Livraison', en: 'Delivery' },
    summary: {
      fr: 'Livrer le périmètre et la qualité qui produisent la valeur.',
      en: 'Deliver the scope and quality that produce value.',
    },
    body: {
      fr: "La livraison relie exigences → périmètre → livrables → acceptation → valeur. Notions clés : définition de terminé (DoD), critères d'acceptation, dérive de périmètre (scope creep) vs élaboration progressive, coût de la qualité (prévention < évaluation < défaillance interne < défaillance externe). La valeur peut être livrée en continu (agile), par incréments ou en fin de projet.",
      en: 'Delivery links requirements → scope → deliverables → acceptance → value. Key notions: Definition of Done (DoD), acceptance criteria, scope creep vs progressive elaboration, cost of quality (prevention < appraisal < internal failure < external failure). Value can be delivered continuously (agile), in increments, or at project end.',
    },
    details: {
      fr: "Il faut bien distinguer la définition de terminé (DoD), un standard de qualité générique qui s'applique à TOUT élément de travail (ex. « codé, testé, documenté »), des critères d'acceptation, spécifiques à UN élément particulier et négociés avec le client ou le Product Owner. La dérive de périmètre (scope creep) désigne un ajout de travail non approuvé qui s'infiltre progressivement sans passer par la maîtrise des changements — à ne pas confondre avec l'élaboration progressive, qui est un raffinement légitime et prévu du périmètre. Le « gold plating » est une forme particulière de dérive : ajouter une fonctionnalité non demandée, même bien intentionnée, sans validation du propriétaire de la valeur — cela ajoute du risque et du coût de maintenance sans bénéfice arbitré.",
      en: 'It is important to distinguish the Definition of Done (DoD), a generic quality standard that applies to EVERY work item (e.g., “coded, tested, documented”), from acceptance criteria, which are specific to ONE particular item and negotiated with the customer or Product Owner. Scope creep refers to unapproved work that gradually creeps in without going through change control — not to be confused with progressive elaboration, which is a legitimate, planned refinement of scope. “Gold plating” is a specific form of creep: adding an unrequested feature, even with good intentions, without the value owner’s approval — it adds risk and maintenance cost without an arbitrated benefit.',
    },
    examples: {
      fr: "• Une story est « terminée » selon la DoD (codée, testée, documentée) mais doit encore voir ses critères d'acceptation spécifiques validés par le Product Owner avant d'être comptée comme acceptée.\n• Un développeur ajoute discrètement une fonctionnalité « sympa » non demandée (gold plating) — repérée en revue de code et déplacée dans le backlog pour arbitrage.\n• Les coûts de prévention (revues de conception) l'emportent toujours sur le coût d'une défaillance externe (un défaut signalé par le client après livraison).",
      en: 'A story is “done” per the DoD (coded, tested, documented) but still needs its specific acceptance criteria verified with the Product Owner before it counts as accepted.\nA developer quietly adds a nice-to-have feature that was not requested (gold plating) — flagged in code review and moved to the backlog for arbitration.\nPrevention costs (design reviews) always outweigh the cost of an external failure (a defect the customer reports after release).',
    },
  },
  {
    id: 'pd-measurement',
    category: 'performance',
    title: { fr: 'Mesure', en: 'Measurement' },
    summary: {
      fr: 'Évaluer la performance et agir sur les écarts.',
      en: 'Assess performance and act on variances.',
    },
    body: {
      fr: "Mesurer sert à décider, pas à décorer des rapports. Outils : valeur acquise (EV, PV, AC, SPI, CPI, EAC), burndown/burnup, vélocité, lead time et cycle time, tableaux de bord et informations visuelles (big visible charts). Attention aux indicateurs pastèque (verts dehors, rouges dedans) et à l'effet de mesures mal choisies sur les comportements.",
      en: 'Measurement exists to inform decisions, not to decorate reports. Tools: earned value (EV, PV, AC, SPI, CPI, EAC), burndown/burnup, velocity, lead time and cycle time, dashboards and big visible charts. Beware watermelon metrics (green outside, red inside) and the behavioral side effects of poorly chosen measures.',
    },
    details: {
      fr: "Le lead time mesure le délai total entre la demande d'un élément et sa livraison, tandis que le cycle time ne mesure que le temps de traitement actif une fois le travail commencé — un écart croissant entre les deux révèle une file d'attente qui s'allonge. La loi de Goodhart s'applique directement au reporting de projet : dès qu'un indicateur devient une cible, il cesse d'être une bonne mesure, car les équipes finissent par optimiser l'indicateur plutôt que la réalité qu'il est censé représenter (ex. compter les anomalies fermées incite à traiter les plus simples en priorité, pas les plus critiques). Un tableau d'information visible en continu (big visible chart) réduit le besoin de rapports formels et rend les dérives détectables immédiatement, par tous.",
      en: 'Lead time measures the total time between a request for an item and its delivery, while cycle time measures only the active processing time once work has started — a growing gap between the two reveals a lengthening queue. Goodhart’s law applies directly to project reporting: as soon as a metric becomes a target, it stops being a good measure, because teams end up optimizing the metric rather than the reality it is meant to represent (e.g., counting closed defects incentivizes fixing the easiest ones first, not the most critical). A continuously visible information radiator (big visible chart) reduces the need for formal reports and makes drift immediately detectable by everyone.',
    },
    examples: {
      fr: "• Un CPI de 0,85 signale que chaque dollar dépensé ne rapporte que 0,85 dollar de valeur — un signal d'alerte à investiguer avant qu'il ne soit trop tard.\n• Une tendance à la hausse du temps de cycle sur le tableau kanban révèle un goulot d'étranglement caché en revue de code, déclenchant une réponse en essaim (swarming).\n• Une équipe abandonne un indicateur de vanité (« nombre de bugs fermés ») qui incitait à traiter les bugs faciles plutôt que les critiques.",
      en: 'A CPI of 0.85 signals that every dollar spent earns only $0.85 of value — a red flag to investigate before it is too late.\nAn upward trend in cycle time on the kanban board reveals a hidden bottleneck in code review, prompting a swarming response.\nA team retires a vanity metric (“number of bugs closed”) that incentivized fixing easy bugs instead of critical ones.',
    },
  },
  {
    id: 'pd-uncertainty',
    category: 'performance',
    title: { fr: 'Incertitude', en: 'Uncertainty' },
    summary: {
      fr: 'Gérer risques, ambiguïté, complexité et volatilité.',
      en: 'Handle risk, ambiguity, complexity and volatility.',
    },
    body: {
      fr: "L'incertitude englobe le risque (mesurable) mais aussi l'ambiguïté et la volatilité. Réponses générales : collecter de l'information, livrer par petits lots, construire de la résilience, prévoir des réserves (pour aléas = risques identifiés ; de management = imprévus). Le registre des risques, l'analyse qualitative (probabilité × impact) et les stratégies de réponse structurent la partie « risque ».",
      en: 'Uncertainty includes risk (measurable) but also ambiguity and volatility. General responses: gather information, deliver in small batches, build resilience, set reserves (contingency = identified risks; management = unknowns). The risk register, qualitative analysis (probability × impact) and response strategies structure the risk part.',
    },
    details: {
      fr: "Il est utile de séparer trois notions souvent confondues : le risque (un événement identifiable dont la probabilité peut être estimée, donc « connu inconnu »), l'ambiguïté (une relation de cause à effet floue, ou une situation où plusieurs interprétations sont possibles) et la volatilité (des changements rapides et imprévisibles de l'environnement). Chacune appelle une réponse différente : le risque se gère par l'analyse et des réponses planifiées ; l'ambiguïté se réduit en expérimentant et en questionnant ; la volatilité se contient en gardant l'architecture et les plans flexibles (options, réserves) plutôt qu'en essayant vainement de tout prévoir à l'avance.",
      en: 'It helps to separate three often-confused notions: risk (an identifiable event whose probability can be estimated, hence a “known unknown”), ambiguity (an unclear cause-and-effect relationship, or a situation with multiple possible interpretations) and volatility (rapid, unpredictable changes in the environment). Each calls for a different response: risk is managed through analysis and planned responses; ambiguity is reduced by experimenting and questioning; volatility is contained by keeping architecture and plans flexible (options, reserves) rather than vainly trying to predict everything in advance.',
    },
    examples: {
      fr: "• Lancer un pilote restreint dans une seule région avant un déploiement national, pour réduire l'ambiguïté sur l'adoption utilisateur.\n• Fixer une réserve pour aléas dédiée à un risque technique identifié, distincte d'une réserve de management pour les imprévus inconnus.\n• Garder une architecture flexible (indicateurs de fonctionnalité, conception modulaire) pour absorber des exigences de marché volatiles sans refonte complète.",
      en: 'Running a small pilot in one region before a nationwide rollout, to reduce ambiguity about user adoption.\nSetting a contingency reserve dedicated to a known technical risk, separate from a management reserve for unknown unknowns.\nKeeping the architecture flexible (feature flags, modular design) to absorb volatile market requirements without a full redesign.',
    },
  },

  // ─────────────────────────── EXAM TOPICS ───────────────────────────
  {
    id: 'tp-eco',
    category: 'topic',
    title: { fr: "Structure de l'examen (ECO)", en: 'Exam structure (ECO)' },
    summary: {
      fr: '180 questions réparties sur 3 domaines : Personnes, Processus, Environnement d’affaires.',
      en: '180 questions across 3 domains: People, Process, Business Environment.',
    },
    body: {
      fr: "L'examen PMP® comporte 180 questions en 230 minutes, avec deux pauses de 10 minutes. Répartition de l'ECO : Personnes ≈ 42 %, Processus ≈ 50 %, Environnement d'affaires ≈ 8 %. Environ la moitié des questions porte sur des contextes agiles ou hybrides. Les questions sont majoritairement situationnelles : choisir la MEILLEURE action, souvent « comprendre avant d'agir, analyser avant d'escalader ».",
      en: 'The PMP® exam has 180 questions in 230 minutes, with two 10-minute breaks. ECO distribution: People ≈ 42%, Process ≈ 50%, Business Environment ≈ 8%. About half the questions involve agile or hybrid contexts. Questions are mostly situational: choose the BEST action, usually “understand before acting, analyze before escalating”.',
    },
    details: {
      fr: "Le format de l'examen peut inclure plusieurs types de questions au-delà du QCM classique : choix multiple à réponse unique, réponses multiples, association d'éléments (matching), zone sensible (hotspot) et quelques questions à compléter. Les scénarios agiles ou hybrides ne sont PAS cantonnés à un domaine particulier : une situation de conflit dans une équipe Scrum relève du domaine « Personnes » au même titre qu'un conflit dans un projet prédictif. La philosophie de l'examen n'est pas « qu'a fait ce chef de projet dans le passé » mais « que DEVRAIT faire un chef de projet compétent maintenant » — d'où la préférence systématique pour comprendre et analyser avant d'agir ou d'escalader.",
      en: 'The exam format may include several question types beyond the classic single-choice: multiple response, matching, hotspot, and a few fill-in-the-blank items. Agile or hybrid scenarios are NOT confined to one particular domain: a conflict situation in a Scrum team falls under the “People” domain just as much as a conflict in a predictive project. The exam’s philosophy is not “what did this project manager do in the past” but “what SHOULD a competent project manager do now” — hence the systematic preference for understanding and analyzing before acting or escalating.',
    },
    examples: {
      fr: "• Une question décrivant un conflit dans une équipe Scrum reste classée dans le domaine « Personnes », même s'il s'agit d'un scénario agile.\n• Face à deux réponses plausibles, choisir « recueillir de l'information / comprendre la cause racine » plutôt que « escalader immédiatement » reflète le raisonnement privilégié par l'examen.\n• Gérer son temps de pause : utiliser stratégiquement les deux pauses de 10 minutes pour rester concentré sur les 230 minutes de l'examen.",
      en: 'A question describing a conflict in a Scrum team is still classified under the “People” domain, even though it is an agile scenario.\nFaced with two plausible answers, choosing “gather information / understand the root cause” over “escalate immediately” reflects the exam’s preferred reasoning.\nManaging break time: using both 10-minute breaks strategically to stay sharp over the 230-minute exam.',
    },
  },
  {
    id: 'tp-evm',
    category: 'topic',
    title: { fr: 'Valeur acquise (EVM)', en: 'Earned Value Management (EVM)' },
    summary: {
      fr: 'Les formules indispensables : SV, CV, SPI, CPI, EAC.',
      en: 'The must-know formulas: SV, CV, SPI, CPI, EAC.',
    },
    body: {
      fr: "PV = valeur planifiée ; EV = valeur acquise (travail réellement accompli, valorisé) ; AC = coût réel. Écarts : SV = EV − PV ; CV = EV − AC (négatif = mauvais). Indices : SPI = EV/PV ; CPI = EV/AC (< 1 = mauvais). Prévisions : EAC = BAC/CPI (si la tendance continue) ; ETC = EAC − AC ; VAC = BAC − EAC ; TCPI = (BAC − EV)/(BAC − AC). Mémo : E comme « earned » vient toujours en premier dans les formules d'écart.",
      en: 'PV = planned value; EV = earned value (work actually done, valued); AC = actual cost. Variances: SV = EV − PV; CV = EV − AC (negative = bad). Indices: SPI = EV/PV; CPI = EV/AC (< 1 = bad). Forecasts: EAC = BAC/CPI (if the trend continues); ETC = EAC − AC; VAC = BAC − EAC; TCPI = (BAC − EV)/(BAC − AC). Mnemonic: E for “earned” always comes first in variance formulas.',
    },
    details: {
      fr: "L'EAC = BAC/CPI suppose que l'écart de performance observé est REPRÉSENTATIF et se poursuivra sur le reste du projet (variance « typique »). Si l'écart est jugé exceptionnel et ne se reproduira pas, la formule appropriée devient EAC = AC + (BAC − EV), qui suppose que le reste du travail se fera au coût initialement budgété. Le TCPI indique l'efficacité qu'il faudrait désormais atteindre pour respecter un objectif de coût : un TCPI très supérieur au CPI actuel signale un objectif probablement irréaliste sans changement majeur (renégociation de budget ou de périmètre). Un exemple chiffré complet aide à mémoriser l'ensemble des formules d'un seul coup.",
      en: 'EAC = BAC/CPI assumes the observed performance variance is REPRESENTATIVE and will continue for the remainder of the project (a “typical” variance). If the variance is judged exceptional and unlikely to recur, the appropriate formula becomes EAC = AC + (BAC − EV), which assumes the remaining work will be completed at the originally budgeted cost. TCPI indicates the efficiency that must now be achieved to meet a cost target: a TCPI far above the current CPI signals a probably unrealistic goal without a major change (renegotiating budget or scope). A complete worked numeric example helps memorize the whole formula set at once.',
    },
    examples: {
      fr: "• BAC = 100 k€, PV = 50 k€, EV = 40 k€, AC = 45 k€ → SV = −10 k€ (retard), CV = −5 k€ (dépassement), SPI = 0,8, CPI ≈ 0,89.\n• EAC = BAC/CPI = 100/0,89 ≈ 112 k€ si la tendance de coût actuelle est censée se poursuivre.\n• TCPI = (BAC−EV)/(BAC−AC) = (100−40)/(100−45) ≈ 1,09 : l'efficacité nécessaire sur le travail restant pour tenir le budget initial.",
      en: 'BAC = $100k, PV = $50k, EV = $40k, AC = $45k → SV = −$10k (behind schedule), CV = −$5k (over budget), SPI = 0.8, CPI ≈ 0.89.\nEAC = BAC/CPI = 100/0.89 ≈ $112k if the current cost trend is expected to continue.\nTCPI = (BAC−EV)/(BAC−AC) = (100−40)/(100−45) ≈ 1.09 — the efficiency needed on the remaining work to hit the original budget.',
    },
  },
  {
    id: 'tp-agile',
    category: 'topic',
    title: { fr: 'Agile et hybride', en: 'Agile and hybrid' },
    summary: {
      fr: 'Rôles, événements et artefacts à connaître absolument.',
      en: 'Roles, events and artifacts you must know.',
    },
    body: {
      fr: "Rôles Scrum : Product Owner (valeur, backlog), Scrum Master (facilitation, obstacles), équipe de développement (auto-organisée, pluridisciplinaire). Événements : planification de sprint, daily (15 min), revue de sprint (produit), rétrospective (processus). Artefacts : backlog produit, backlog de sprint, incrément + définition de terminé. Kanban : flux tiré, limites de travail en cours (WIP), lead time. Hybride : combiner prédictif et agile selon les composantes du projet.",
      en: 'Scrum roles: Product Owner (value, backlog), Scrum Master (facilitation, impediments), development team (self-organizing, cross-functional). Events: sprint planning, daily (15 min), sprint review (product), retrospective (process). Artifacts: product backlog, sprint backlog, increment + Definition of Done. Kanban: pull flow, WIP limits, lead time. Hybrid: combine predictive and agile per project component.',
    },
    details: {
      fr: "Le Scrum Master ne sert pas que l'équipe de développement : il accompagne aussi le Product Owner (par exemple sur les techniques de gestion de backlog) et l'organisation dans son ensemble (adoption des valeurs agiles, suppression des obstacles organisationnels). Le Product Owner est responsable de la VALEUR et de l'ordre du backlog, pas de la gestion des personnes — un point souvent testé pour distinguer son rôle de celui d'un chef de projet traditionnel. Kanban ajoute la notion de classes de service (une politique explicite par type de demande, par exemple une voie « expedite » à capacité limitée pour les urgences réelles), qui rend visible et gouverné ce qui serait sinon traité de façon informelle. En hybride, chaque composante du projet garde son propre mécanisme de gouvernance (comité de contrôle des changements pour la partie prédictive, re-priorisation du backlog pour la partie agile), mais les décisions qui touchent les deux volets doivent être coordonnées.",
      en: 'The Scrum Master does not only serve the development team: they also support the Product Owner (for example on backlog management techniques) and the organization as a whole (adopting agile values, removing organizational impediments). The Product Owner is accountable for VALUE and backlog ordering, not for managing people — a point often tested to distinguish the role from a traditional project manager. Kanban adds the notion of classes of service (an explicit policy per request type, e.g., a capacity-limited “expedite” lane for genuine emergencies), which makes visible and governed what would otherwise be handled informally. In hybrid setups, each project component keeps its own governance mechanism (a change control board for the predictive part, backlog reprioritization for the agile part), but decisions touching both must be coordinated.',
    },
    examples: {
      fr: "• Un Scrum Master accompagne l'organisation dans l'adoption des valeurs agiles, pas seulement l'animation des rituels de l'équipe.\n• Un tableau kanban ajoute une voie « expedite » avec une limite de WIP explicite de 1, réservée aux urgences réelles.\n• Un programme hybride planifie les jalons matériels de façon prédictive tandis que l'équipe firmware travaille en sprints de deux semaines.",
      en: 'A Scrum Master coaches the organization on adopting agile values, not just facilitating the team’s ceremonies.\nA kanban board adds an “expedite” lane with an explicit WIP limit of 1, reserved for genuine emergencies.\nA hybrid program plans hardware milestones predictively while the firmware team runs two-week sprints.',
    },
  },
  {
    id: 'tp-conflict',
    category: 'topic',
    title: { fr: 'Résolution de conflits', en: 'Conflict resolution' },
    summary: {
      fr: 'Cinq approches, de la collaboration au retrait.',
      en: 'Five approaches, from collaborating to withdrawing.',
    },
    body: {
      fr: "Les cinq techniques : collaborer / résoudre le problème (gagnant-gagnant, la meilleure) ; compromis (chacun cède un peu, perdant-perdant modéré) ; aplanir / accommoder (souligner les accords, apaiser temporairement) ; forcer (imposer, gagnant-perdant, en urgence seulement) ; éviter / se retirer (reporter, la moins efficace). À l'examen : privilégier la collaboration, aborder le conflit tôt, en privé, et se concentrer sur les problèmes, pas les personnes.",
      en: 'The five techniques: collaborate / problem-solve (win-win, the best); compromise (each side gives some, mild lose-lose); smooth / accommodate (stress agreements, temporary relief); force (impose, win-lose, emergencies only); avoid / withdraw (postpone, least effective). On the exam: prefer collaboration, address conflict early, privately, and focus on issues, not people.',
    },
    details: {
      fr: "Aucune des cinq techniques n'est mauvaise en soi : chacune convient à un contexte précis, et le choisir correctement est ce que l'examen évalue. Forcer est justifié uniquement en situation d'urgence réelle (sécurité, conformité légale immédiate) — jamais comme réflexe de gain de temps. Éviter peut être temporairement approprié quand les émotions sont trop vives pour un dialogue constructif immédiat, à condition d'y revenir vite. Aplanir soulage la tension à court terme mais ne résout rien sur le fond : utile pour préserver une relation en attendant un moment plus propice à la collaboration. Le compromis est un pis-aller rapide sous contrainte de temps, pas un idéal à rechercher.",
      en: 'None of the five techniques is inherently bad: each fits a specific context, and choosing correctly is exactly what the exam tests. Forcing is justified only in a genuine emergency (safety, immediate legal compliance) — never as a time-saving reflex. Avoiding can be temporarily appropriate when emotions run too high for immediate constructive dialogue, provided you return to it quickly. Smoothing relieves short-term tension but resolves nothing substantively: useful for preserving a relationship while waiting for a better moment to collaborate. Compromise is a quick stopgap under time pressure, not an ideal to strive for.',
    },
    examples: {
      fr: "• Collaboration : deux leads reconcoivent ensemble l'interface après avoir cartographié leurs préoccupations sous-jacentes respectives.\n• Compromis : partager un budget contesté à 50/50 comme solution rapide et temporaire sous contrainte de temps.\n• Forcer : un responsable sécurité impose l'arrêt immédiat d'un travail dangereux, justifié uniquement par l'urgence réelle de la situation.",
      en: 'Collaborating: two leads jointly redesign the interface after mapping out both their underlying concerns.\nCompromising: splitting a disputed budget 50/50 as a quick, temporary fix under time pressure.\nForcing: a safety officer overrides preferences to immediately halt unsafe work, justified only by the genuine urgency of the situation.',
    },
  },
  {
    id: 'tp-change',
    category: 'topic',
    title: { fr: 'Maîtrise des changements', en: 'Change control' },
    summary: {
      fr: 'Le réflexe examen : analyser l’impact avant tout.',
      en: 'The exam reflex: analyze impact first.',
    },
    body: {
      fr: "En approche prédictive, tout changement suit le processus de maîtrise intégrée des changements : 1) documenter la demande, 2) analyser l'impact (périmètre, délai, coût, qualité, risques), 3) soumettre au comité de contrôle des changements (CCB), 4) mettre à jour plans et références de base si approuvé, 5) communiquer. En agile, le changement est absorbé par la re-priorisation du backlog par le Product Owner. Ne jamais implémenter un changement « à la demande » sans passer par le processus.",
      en: 'In predictive approaches, every change follows integrated change control: 1) document the request, 2) analyze the impact (scope, schedule, cost, quality, risk), 3) submit to the change control board (CCB), 4) update plans and baselines if approved, 5) communicate. In agile, change is absorbed through backlog reprioritization by the Product Owner. Never implement a change “on request” without the process.',
    },
    details: {
      fr: "Toutes les demandes ne sont pas des changements de périmètre : une action corrective ou préventive (remettre le projet sur la trajectoire prévue) ou une réparation de défaut (corriger un livrable non conforme) suivent un traitement plus léger, mais restent tout de même consignées dans le journal des changements pour traçabilité. Une procédure d'urgence existe pour les changements qui ne peuvent attendre une réunion du CCB (ex. faille de sécurité critique) : l'action est appliquée immédiatement, puis documentée et validée a posteriori dans un délai court. Une demande de changement REJETÉE doit elle aussi être consignée avec sa justification, car elle nourrit l'historique des décisions et les leçons apprises futures.",
      en: 'Not every request is a scope change: a corrective or preventive action (bringing the project back on its planned trajectory) or a defect repair (fixing a non-conforming deliverable) follows a lighter process, but is still logged in the change log for traceability. An emergency procedure exists for changes that cannot wait for a CCB meeting (e.g., a critical security flaw): the action is applied immediately, then documented and approved after the fact within a short window. A REJECTED change request must also be logged with its rationale, since it feeds the decision history and future lessons learned.',
    },
    examples: {
      fr: "• Une « action corrective » qui remédie à une déviation de processus ne requiert pas la même approbation du CCB qu'un véritable changement de périmètre, mais reste tout de même consignée.\n• Un correctif d'urgence en production est appliqué immédiatement, puis formellement documenté et approuvé par le CCB sous 48 heures.\n• Une demande de changement rejetée est tout de même consignée dans le journal des changements avec sa justification, pour l'audit et les leçons apprises futures.",
      en: 'A “corrective action” fixing a process deviation does not require the same CCB approval as an actual scope change, but is still logged.\nAn emergency production fix is applied immediately, then formally documented and approved by the CCB within 48 hours.\nA rejected change request is still logged in the change log with its rationale, for future audit and lessons learned.',
    },
  },
  {
    id: 'tp-risk',
    category: 'topic',
    title: { fr: 'Management des risques', en: 'Risk management' },
    summary: {
      fr: 'Stratégies de réponse pour menaces et opportunités.',
      en: 'Response strategies for threats and opportunities.',
    },
    body: {
      fr: "Menaces : éviter (éliminer la cause), transférer (assurance, sous-traitance), atténuer (réduire probabilité/impact), accepter (avec ou sans réserve), escalader (hors du périmètre du projet). Opportunités : exploiter, partager, améliorer, accepter, escalader. Réserves : pour aléas (risques identifiés, dans la référence de base) vs de management (imprévus, hors référence de base). Le registre des risques vit pendant tout le projet.",
      en: 'Threats: avoid (remove the cause), transfer (insurance, outsourcing), mitigate (reduce probability/impact), accept (with or without reserve), escalate (beyond project scope). Opportunities: exploit, share, enhance, accept, escalate. Reserves: contingency (identified risks, inside the baseline) vs management (unknowns, outside the baseline). The risk register lives throughout the project.',
    },
    details: {
      fr: "Un moyen mnémotechnique utile : les cinq réponses aux menaces (éviter, transférer, atténuer, accepter, escalader) ont chacune un miroir presque symétrique côté opportunités (éviter → exploiter, transférer → partager, atténuer → améliorer, accepter → accepter, escalader → escalader) — mémoriser la structure côté menace permet de retrouver l'équivalent côté opportunité. Le registre des risques (working document détaillé, mis à jour en continu) doit être distingué du rapport des risques (synthèse destinée à la gouvernance, présentant l'exposition globale du projet). L'escalade signifie transmettre un risque à un niveau de décision qui dépasse l'autorité du chef de projet (programme, portefeuille, direction) — ce n'est ni une réponse de menace ni un aveu d'échec, c'est la réponse correcte quand le risque sort du périmètre d'action du projet.",
      en: 'A useful mnemonic: the five threat responses (avoid, transfer, mitigate, accept, escalate) each have an almost symmetric mirror on the opportunity side (avoid → exploit, transfer → share, mitigate → enhance, accept → accept, escalate → escalate) — memorizing the threat-side structure lets you recover the opportunity-side equivalent. The risk register (a detailed working document, continuously updated) must be distinguished from the risk report (a governance-facing summary presenting the project’s overall risk exposure). Escalating means passing a risk to a decision level beyond the project manager’s authority (program, portfolio, leadership) — it is neither a threat response nor an admission of failure, it is the correct answer when a risk falls outside the project’s scope of action.',
    },
    examples: {
      fr: "• Menace : atténuer en ajoutant un cycle de test supplémentaire pour réduire la probabilité d'une anomalie critique.\n• Opportunité : exploiter en accélérant le calendrier pour profiter d'un changement réglementaire favorable et lancer avant la concurrence.\n• Escalader un risque qui dépasse l'appétence au risque du projet vers le niveau programme, car il sort de l'autorité du chef de projet à l'accepter seul.",
      en: 'Threat: mitigate by adding an extra QA cycle to reduce the probability of a critical defect.\nOpportunity: exploit by fast-tracking the schedule to benefit from a favorable regulatory change and launch ahead of competitors.\nEscalating a risk that exceeds the project’s risk appetite to the program level, since it is beyond the project manager’s authority to accept alone.',
    },
  },
  {
    id: 'tp-schedule',
    category: 'topic',
    title: { fr: 'Échéancier et chemin critique', en: 'Schedule and critical path' },
    summary: {
      fr: 'Chemin critique, marges, compression : crashing vs fast tracking.',
      en: 'Critical path, float, compression: crashing vs fast tracking.',
    },
    body: {
      fr: "Le chemin critique est le chemin le plus long du réseau : marge totale nulle, tout retard décale la fin du projet. Marge totale = retard possible sans impacter la fin ; marge libre = sans impacter le successeur. Compression : crashing = ajouter des ressources (coût ↑) ; fast tracking = paralléliser des activités séquentielles (risque ↑). Nivellement des ressources (contrainte ressources, peut allonger le délai) vs lissage (dans les marges).",
      en: 'The critical path is the longest path through the network: zero total float, any delay shifts the project finish. Total float = possible delay without impacting the finish; free float = without impacting the successor. Compression: crashing = add resources (cost ↑); fast tracking = overlap sequential activities (risk ↑). Resource leveling (resource constraint, may extend schedule) vs smoothing (within float).',
    },
    details: {
      fr: "Un exemple chiffré fixe durablement la notion de marge : si deux chemins parallèles convergent vers la même activité de fin, avec un chemin A de 17 jours et un chemin B de 15 jours, alors B dispose de 2 jours de marge totale tandis que A est critique (marge nulle). Il est essentiel de retenir que la compression (crashing et fast tracking) ne s'applique JAMAIS à une activité hors chemin critique : la raccourcir ne change rien à la date de fin du projet, puisqu'elle dispose déjà de marge. Après toute compression, il faut impérativement recalculer le réseau : compresser une activité peut faire apparaître un nouveau chemin critique ailleurs (un chemin auparavant non critique peut le devenir).",
      en: 'A worked numeric example anchors the notion of float durably: if two parallel paths converge on the same finish activity, with path A at 17 days and path B at 15 days, then B has 2 days of total float while A is critical (zero float). It is essential to remember that compression (crashing and fast tracking) NEVER applies to an activity outside the critical path: shortening it changes nothing about the project finish date, since it already has float. After any compression, the network must be recalculated: compressing one activity can create a new critical path elsewhere (a previously non-critical path can become critical).',
    },
    examples: {
      fr: "• Le chemin A (17 jours) et le chemin B (15 jours) partagent la même fin : le chemin B dispose de 2 jours de marge, le chemin A est critique (marge nulle).\n• Compresser le chemin critique en ajoutant un second relecteur pour gagner 2 jours, en acceptant un surcoût de 4 k€.\n• Paralléliser en démarrant la recette utilisateur avant que le développement soit terminé à 100 %, en acceptant le risque d'intégration.",
      en: 'Path A (17 days) and path B (15 days) share the same finish: path B has 2 days of float, path A is critical (zero float).\nCrashing the critical path by adding a second reviewer to save 2 days, accepting a $4k cost increase.\nFast tracking by starting user acceptance testing before development is 100% complete, accepting integration risk.',
    },
  },
  {
    id: 'tp-pmbok8',
    category: 'topic',
    title: { fr: 'Du PMBOK® 7 au PMBOK® 8', en: 'From PMBOK® 7 to PMBOK® 8' },
    summary: {
      fr: 'Principes + domaines de performance + retour des processus.',
      en: 'Principles + performance domains + processes are back.',
    },
    body: {
      fr: "Le PMBOK® 7 a introduit une approche par principes (12) et domaines de performance (8), remplaçant les processus détaillés. Le PMBOK® 8 poursuit cette logique en réintégrant une dimension processus plus opérationnelle, articulée avec les principes et les domaines, et en renforçant la place du tailoring, de la valeur et des approches adaptatives. Pour l'examen : raisonnez toujours « principes et valeur d'abord », puis appuyez-vous sur les outils et processus adaptés au contexte prédictif, agile ou hybride.",
      en: 'PMBOK® 7 introduced a principles-based approach (12 principles) and 8 performance domains, replacing detailed processes. PMBOK® 8 continues this logic while reintegrating a more operational process dimension, articulated with the principles and domains, and strengthening tailoring, value and adaptive approaches. For the exam: always reason “principles and value first”, then rely on the tools and processes suited to the predictive, agile or hybrid context.',
    },
    details: {
      fr: "Le retour d'une dimension processus dans le PMBOK® 8 ne signifie pas un retour en arrière vers le PMBOK® 6 : les processus y sont présentés comme des outils au service des principes et des domaines de performance, pas comme une check-list rigide à appliquer telle quelle. Cette articulation est particulièrement utile dans les contextes réglementés ou hybrides, où une trace documentaire de processus est exigée par un auditeur, tout en gardant la flexibilité et l'orientation valeur des approches adaptatives. Quelle que soit l'édition en vigueur au moment de l'examen, le raisonnement attendu reste stable : face à un choix entre deux options, préférer celle qui sert le mieux un principe (intendance, engagement des parties prenantes, valeur) plutôt que celle qui suit mécaniquement une étape de processus.",
      en: 'The return of a process dimension in PMBOK® 8 does not mean a step back to PMBOK® 6: processes are presented there as tools serving the principles and performance domains, not as a rigid checklist to apply verbatim. This articulation is especially useful in regulated or hybrid contexts, where an auditor requires documented process evidence, while still keeping the flexibility and value orientation of adaptive approaches. Regardless of which edition is current at exam time, the expected reasoning stays stable: when facing a choice between two options, prefer the one that best serves a principle (stewardship, stakeholder engagement, value) over the one that mechanically follows a process step.',
    },
    examples: {
      fr: "• Un projet d'industrie réglementée s'appuie sur le détail des processus façon PMBOK® 8 pour satisfaire un auditeur, tout en justifiant ses choix de tailoring par les principes du PMBOK® 7.\n• Une équipe agile utilise principalement les 8 domaines de performance comme grille de lecture, et ne recourt au détail des processus que pour les volets fortement réglementés comme les achats.\n• À l'examen, face à un choix difficile, privilégier l'option qui sert le mieux la « valeur » ou un principe (comme l'intendance ou l'engagement des parties prenantes) plutôt que celle qui suit mécaniquement une étape de processus.",
      en: 'A regulated-industry project leans on PMBOK® 8-style process detail to satisfy an auditor, while justifying its tailoring choices through PMBOK® 7 principles.\nAn agile team primarily uses the 8 performance domains as a reading grid, resorting to process detail only for heavily regulated areas like procurement.\nOn the exam, facing a difficult choice, favoring the option that best serves “value” or a principle (such as stewardship or stakeholder engagement) over one that mechanically follows a process step.',
    },
  },
]

/** Merge the exam-trap content into each sheet and append the advanced sheets. */
export const CONCEPTS: Concept[] = [
  ...BASE_CONCEPTS.map((c) => ({ ...c, traps: CONCEPT_TRAPS[c.id] ?? c.traps })),
  ...ADVANCED_CONCEPTS,
]
