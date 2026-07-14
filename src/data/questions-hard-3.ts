import type { Question } from '../types'

/** Hard questions — Process part 2 (hq31–hq62) + Business (hb01–hb08). */
export const HARD_QUESTIONS_3: Question[] = [
  {
    id: 'hq31',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Vous devez raccourcir le projet de 2 semaines. Options de crashing : activité A (critique) −1 sem pour 8 k€ ; B (critique) −1 sem pour 5 k€ ; C (non critique, marge 3 sem) −2 sem pour 3 k€. Que faites-vous ?",
      en: 'You must shorten the project by 2 weeks. Crashing options: activity A (critical) −1 wk for $8K; B (critical) −1 wk for $5K; C (non-critical, 3 wks float) −2 wks for $3K. What do you do?',
    },
    options: [
      { fr: 'Compresser B puis A (13 k€) : seules les activités critiques raccourcissent le projet', en: 'Crash B then A ($13K): only critical activities shorten the project' },
      { fr: 'Compresser C : c’est la moins chère', en: 'Crash C: it is the cheapest' },
      { fr: 'Compresser B et C (8 k€)', en: 'Crash B and C ($8K)' },
      { fr: 'Compresser A, B et C pour sécuriser', en: 'Crash A, B and C to be safe' },
    ],
    correct: 0,
    explanation: {
      fr: "Compresser une activité non critique (C) ne raccourcit pas le projet : elle a déjà de la marge. On compresse le chemin critique au moindre coût par semaine (B à 5 k€, puis A à 8 k€), en revérifiant le chemin critique après chaque compression.",
      en: 'Crashing a non-critical activity (C) does not shorten the project: it already has float. Crash the critical path at the lowest cost per week (B at $5K, then A at $8K), rechecking the critical path after each step.',
    },
  },
  {
    id: 'hq32',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Priorisation WSJF : fonctionnalité X (valeur+urgence+réduction de risque = 24, taille 8) ; Y (score 15, taille 3) ; Z (score 30, taille 15). Quel ordre de traitement ?",
      en: 'WSJF prioritization: feature X (value+urgency+risk reduction = 24, size 8); Y (score 15, size 3); Z (score 30, size 15). What processing order?',
    },
    options: [
      { fr: 'Y (5,0) → X (3,0) → Z (2,0)', en: 'Y (5.0) → X (3.0) → Z (2.0)' },
      { fr: 'Z → X → Y : le score brut prime', en: 'Z → X → Y: raw score first' },
      { fr: 'X → Y → Z : équilibre score/taille', en: 'X → Y → Z: score/size balance' },
      { fr: 'Z → Y → X : les gros lots d’abord', en: 'Z → Y → X: big items first' },
    ],
    correct: 0,
    explanation: {
      fr: 'WSJF = coût du délai / taille : Y = 15/3 = 5 ; X = 24/8 = 3 ; Z = 30/15 = 2. Les éléments à fort ratio valeur/effort passent d’abord — pas les plus « gros » scores bruts.',
      en: 'WSJF = cost of delay / size: Y = 15/3 = 5; X = 24/8 = 3; Z = 30/15 = 2. Highest value-to-effort ratio goes first — not the biggest raw scores.',
    },
  },
  {
    id: 'hq33',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Une crise médiatique touche votre projet : un défaut produit est relayé sur les réseaux sociaux. Le plan de communication prévoit un reporting mensuel aux parties prenantes. Que faites-vous ?",
      en: 'A media crisis hits your project: a product defect is spreading on social media. The communications plan specifies monthly stakeholder reporting. What do you do?',
    },
    options: [
      {
        fr: "Basculer en communication de crise : messages proactifs, fréquents et coordonnés avec la communication d'entreprise — le plan mensuel est inadapté à la situation",
        en: 'Switch to crisis communication: proactive, frequent messaging coordinated with corporate communications — the monthly plan does not fit the situation',
      },
      { fr: 'Respecter le plan : le prochain rapport est dans 3 semaines', en: 'Follow the plan: the next report is in 3 weeks' },
      { fr: 'Ne rien communiquer tant que les faits ne sont pas certains', en: 'Communicate nothing until facts are certain' },
      { fr: 'Répondre personnellement sur les réseaux sociaux', en: 'Respond personally on social media' },
    ],
    correct: 0,
    explanation: {
      fr: "Le plan de communication est un outil, pas une contrainte : en crise, la fréquence et les canaux s'adaptent immédiatement, en coordination avec les fonctions compétentes (communication, juridique). Le silence alimente la crise.",
      en: 'The communications plan is a tool, not a straitjacket: in a crisis, frequency and channels adapt immediately, coordinated with the competent functions (comms, legal). Silence feeds the crisis.',
    },
  },
  {
    id: 'hq34',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe veut ajouter au produit une optimisation « élégante » non demandée qui améliorerait les performances de 15 %. Le sprint a de la capacité disponible. Le PO n'a pas été consulté. Comment qualifier et traiter cette initiative ?",
      en: 'Your team wants to add an unrequested “elegant” optimization improving performance by 15%. The sprint has spare capacity. The PO has not been consulted. How should this initiative be classified and handled?',
    },
    options: [
      {
        fr: "C'est du gold plating tant que le PO n'a pas arbitré : proposer l'optimisation comme élément de backlog que le PO priorise selon la valeur",
        en: 'It is gold plating until the PO arbitrates: propose the optimization as a backlog item for the PO to prioritize on value',
      },
      { fr: "L'implémenter : la capacité est disponible", en: 'Implement it: capacity is available' },
      { fr: "L'interdire : toute optimisation est du gaspillage", en: 'Forbid it: any optimization is waste' },
      { fr: "L'implémenter sans le dire pour faire une bonne surprise", en: 'Implement it quietly as a nice surprise' },
    ],
    correct: 0,
    explanation: {
      fr: "Ajouter de la valeur supposée sans décision du propriétaire de la valeur est du gold plating — même « gratuit », cela ajoute du risque et du code à maintenir. Le réflexe : en faire un élément de backlog arbitré.",
      en: 'Adding presumed value without the value owner’s decision is gold plating — even “free”, it adds risk and code to maintain. The reflex: turn it into an arbitrated backlog item.',
    },
  },
  {
    id: 'hq35',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le burnup de release montre : ligne « terminé » régulière, mais la ligne « périmètre total » monte plus vite qu'elle depuis 3 sprints. Qu'en concluez-vous ?",
      en: 'The release burnup shows: a steady “completed” line, but the “total scope” line has been rising faster than it for 3 sprints. What do you conclude?',
    },
    options: [
      {
        fr: "Le périmètre croît plus vite que la livraison : à ce rythme la release ne convergera jamais — il faut maîtriser l'ajout de périmètre ou re-négocier la cible",
        en: 'Scope is growing faster than delivery: at this rate the release will never converge — scope additions must be controlled or the target renegotiated',
      },
      { fr: "L'équipe ralentit : il faut la renforcer", en: 'The team is slowing: it must be reinforced' },
      { fr: 'Tout va bien : les deux lignes montent', en: 'All is well: both lines are rising' },
      { fr: 'Le graphique burnup est inadapté aux releases', en: 'Burnup charts are unsuitable for releases' },
    ],
    correct: 0,
    explanation: {
      fr: "C'est exactement ce que le burnup révèle (et que le burndown masque) : la divergence entre croissance du périmètre et rythme de livraison. La convergence exige de fermer le robinet ou de déplacer la cible.",
      en: 'This is precisely what a burnup reveals (and a burndown hides): divergence between scope growth and delivery rate. Convergence requires closing the tap or moving the target.',
    },
  },
  {
    id: 'hq36',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Un fournisseur en contrat à coûts remboursables (CPFF) multiplie les heures facturées sans progrès visible. Vous soupçonnez un pilotage laxiste de sa part. Quel levier contractuel et de processus actionnez-vous d'abord ?",
      en: 'A vendor on a cost-plus-fixed-fee (CPFF) contract keeps billing hours with no visible progress. You suspect loose management on their side. Which contractual and process lever do you pull first?',
    },
    options: [
      {
        fr: "Exiger l'application des clauses de suivi : jalons de contrôle, justification des heures, audits — et lier la suite du travail à des critères de performance mesurables",
        en: 'Enforce the monitoring clauses: control milestones, hours justification, audits — and tie further work to measurable performance criteria',
      },
      { fr: 'Résilier immédiatement le contrat', en: 'Terminate the contract immediately' },
      { fr: 'Convertir unilatéralement le contrat en forfait', en: 'Unilaterally convert the contract to fixed price' },
      { fr: 'Cesser de payer les factures en attendant', en: 'Stop paying invoices in the meantime' },
    ],
    correct: 0,
    explanation: {
      fr: "En CPFF, le risque de coût est chez l'acheteur : le contrôle passe par les mécanismes contractuels de surveillance et de jalonnement. Résilier ou cesser de payer sans processus expose à des réclamations.",
      en: 'Under CPFF, cost risk sits with the buyer: control operates through the contract’s monitoring and milestone mechanisms. Terminating or withholding payment without process invites claims.',
    },
  },
  {
    id: 'hq37',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "L'équipe A (interne) attend une API de l'équipe B (autre département, hors de votre autorité) dans 3 semaines. B vient de perdre deux développeurs. Votre jalon en dépend. Quelle est la MEILLEURE combinaison d'actions ?",
      en: 'Team A (internal) expects an API from team B (another department, outside your authority) in 3 weeks. B just lost two developers. Your milestone depends on it. What is the BEST combination of actions?',
    },
    options: [
      {
        fr: "Traiter la dépendance comme un risque actif : escalade coordonnée, plan B technique (bouchon/simulateur pour avancer), et suivi rapproché avec B",
        en: 'Treat the dependency as an active risk: coordinated escalation, a technical plan B (stub/simulator to keep moving), and close tracking with B',
      },
      { fr: 'Attendre : B a promis la date', en: 'Wait: B promised the date' },
      { fr: "Développer l'API vous-même sans prévenir B", en: 'Build the API yourself without telling B' },
      { fr: 'Reporter votre jalon immédiatement', en: 'Immediately postpone your milestone' },
    ],
    correct: 0,
    explanation: {
      fr: "Les dépendances externes se gèrent activement : visibilité (suivi), influence (escalade au bon niveau) et découplage technique (stub) pour ne pas subir. Une promesse fragilisée par les faits n'est plus un plan.",
      en: 'External dependencies are actively managed: visibility (tracking), influence (right-level escalation) and technical decoupling (stub) to avoid being hostage. A promise undermined by facts is no longer a plan.',
    },
  },
  {
    id: 'hq38',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "On vous demande de reprendre les « leçons apprises » d'un projet similaire. Vous découvrez qu'elles se réduisent à un fichier rempli le dernier jour, générique et sans contexte. Pour VOTRE projet, que mettez-vous en place ?",
      en: 'You are asked to reuse a similar project’s “lessons learned”. You discover they amount to a generic, context-free file filled in on the last day. For YOUR project, what do you set up?',
    },
    options: [
      {
        fr: "Une capture continue : rétrospectives régulières, registre des leçons vivant, et intégration des enseignements dans les plans au fil de l'eau",
        en: 'Continuous capture: regular retrospectives, a living lessons register, and integrating insights into plans as you go',
      },
      { fr: 'Un atelier leçons apprises plus long en fin de projet', en: 'A longer lessons-learned workshop at project end' },
      { fr: 'Un modèle de fichier plus détaillé', en: 'A more detailed file template' },
      { fr: "Rien : les leçons apprises ne servent jamais", en: 'Nothing: lessons learned are never useful' },
    ],
    correct: 0,
    explanation: {
      fr: "La valeur des leçons vient de leur capture À CHAUD et de leur application immédiate. Le registre des leçons apprises se tient tout au long du projet — la synthèse finale n'en est que la consolidation.",
      en: 'Lessons derive value from being captured FRESH and applied immediately. The lessons-learned register is maintained throughout the project — the final summary is merely its consolidation.',
    },
  },
  {
    id: 'hq39',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre organisation impose une « definition of ready » stricte avant qu'une story entre en sprint. L'équipe s'en plaint : « Le backlog est bloqué, le PO n'a pas le temps de tout préparer. » Le flux entrant s'assèche. Quelle analyse est correcte ?",
      en: 'Your organization mandates a strict Definition of Ready before stories enter a sprint. The team complains: “The backlog is stuck, the PO has no time to prepare everything.” Inflow is drying up. Which analysis is correct?',
    },
    options: [
      {
        fr: "La DoR est devenue une barrière au flux : alléger au « suffisamment prêt » et investir dans le raffinement collaboratif plutôt que dans un contrôle d'entrée rigide",
        en: 'The DoR has become a flow barrier: relax it to “ready enough” and invest in collaborative refinement rather than a rigid entry gate',
      },
      { fr: 'Il faut renforcer la DoR pour forcer la préparation', en: 'The DoR must be tightened to force preparation' },
      { fr: 'Il faut un deuxième PO', en: 'A second PO is needed' },
      { fr: "L'équipe doit attendre sans rien changer", en: 'The team must wait without changing anything' },
    ],
    correct: 0,
    explanation: {
      fr: "Une DoR trop stricte reproduit le « tout spécifier avant » en miniature et affame l'équipe. Le raffinement est une activité continue et collaborative — l'incertitude résiduelle se lève pendant le sprint.",
      en: 'An overly strict DoR recreates “specify everything upfront” in miniature and starves the team. Refinement is a continuous, collaborative activity — residual uncertainty is resolved during the sprint.',
    },
  },
  {
    id: 'hq40',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Deux options de correction d'un défaut : option R (rapide, 2 j, mais fragilise l'architecture) ; option P (propre, 8 j, durable). La release est dans 10 jours et le défaut bloque la recette client. Comment structurez-vous la décision ?",
      en: 'Two options to fix a defect: option Q (quick, 2d, but weakens the architecture); option C (clean, 8d, durable). Release is in 10 days and the defect blocks customer acceptance. How do you structure the decision?',
    },
    options: [
      {
        fr: "Décision explicite avec le PO/parties prenantes : option R possible SI la dette créée est tracée, priorisée et planifiée — sinon option P avec impact sur la release",
        en: 'Explicit decision with the PO/stakeholders: option Q acceptable IF the created debt is logged, prioritized and scheduled — otherwise option C with its release impact',
      },
      { fr: 'Option R systématiquement : la date prime', en: 'Always option Q: the date rules' },
      { fr: 'Option P systématiquement : la qualité prime', en: 'Always option C: quality rules' },
      { fr: "Laisser le développeur choisir seul", en: 'Let the developer decide alone' },
    ],
    correct: 0,
    explanation: {
      fr: "Le compromis vitesse/dette est un arbitrage de valeur, pas un dogme : il se décide explicitement avec les responsables de la valeur, et la dette consciemment créée entre au backlog avec une échéance — sinon elle devient invisible et permanente.",
      en: 'The speed/debt trade-off is a value decision, not a dogma: it is made explicitly with the value owners, and consciously created debt enters the backlog with a due date — otherwise it becomes invisible and permanent.',
    },
  },
  {
    id: 'hq41',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre projet a consommé 80 % de la réserve pour aléas alors qu'il n'est qu'à 45 % d'avancement. Les risques restants sont stables. Que faites-vous EN PREMIER ?",
      en: 'Your project has consumed 80% of its contingency reserve at only 45% completion. Remaining risks are stable. What do you do FIRST?',
    },
    options: [
      {
        fr: "Analyser la consommation : quels risques ont tiré la réserve, sont-ils récurrents, et la réserve restante couvre-t-elle l'exposition résiduelle quantifiée ?",
        en: 'Analyze the drawdown: which risks consumed the reserve, are they recurring, and does the remaining reserve cover the quantified residual exposure?',
      },
      { fr: 'Demander immédiatement une rallonge de réserve', en: 'Immediately request a reserve top-up' },
      { fr: 'Basculer les dépenses sur la réserve de management', en: 'Shift spending to the management reserve' },
      { fr: 'Geler toute utilisation de la réserve restante', en: 'Freeze any use of the remaining reserve' },
    ],
    correct: 0,
    explanation: {
      fr: "Avant de demander ou geler quoi que ce soit : comprendre. Si la consommation vient de risques non anticipés récurrents, le profil de risque réel dépasse l'analyse initiale — c'est CE constat documenté qui justifiera une demande à la gouvernance.",
      en: 'Before requesting or freezing anything: understand. If the drawdown stems from recurring unanticipated risks, the real risk profile exceeds the initial analysis — THAT documented finding justifies a governance request.',
    },
  },
  {
    id: 'hq42',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le client exige d'assister aux daily meetings de l'équipe « pour la transparence ». Depuis sa venue, l'équipe ne mentionne plus aucun problème. Que proposez-vous ?",
      en: 'The customer insists on attending the team’s daily stand-ups “for transparency”. Since they joined, the team no longer mentions any problems. What do you propose?',
    },
    options: [
      {
        fr: "Offrir au client des canaux de transparence adaptés (revues, tableau de bord, points dédiés) et rendre le daily à l'équipe",
        en: 'Give the customer suitable transparency channels (reviews, dashboard, dedicated syncs) and return the daily to the team',
      },
      { fr: 'Maintenir sa présence : la transparence est une valeur agile', en: 'Keep them attending: transparency is an agile value' },
      { fr: "Briefer l'équipe pour qu'elle parle librement devant lui", en: 'Brief the team to speak freely in front of them' },
      { fr: 'Créer un second daily « privé »', en: 'Create a second “private” daily' },
    ],
    correct: 0,
    explanation: {
      fr: "Le daily est un outil de coordination d'équipe, pas une instance de reporting : la présence du client a tué la franchise. La transparence client se sert par les bons canaux (revue de sprint, indicateurs) — un daily fantôme doublerait l'hypocrisie.",
      en: 'The daily is a team coordination tool, not a reporting forum: the customer’s presence killed candor. Customer transparency is served through proper channels (sprint review, metrics) — a shadow daily would double the hypocrisy.',
    },
  },
  {
    id: 'hq43',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Estimation à trois points d'une activité : optimiste 4 j, plus probable 6 j, pessimiste 14 j. Quelle est l'estimation PERT (bêta) et que révèle l'écart avec la moyenne simple ?",
      en: 'Three-point estimate for an activity: optimistic 4d, most likely 6d, pessimistic 14d. What is the PERT (beta) estimate and what does the gap with the simple average reveal?',
    },
    options: [
      {
        fr: 'PERT = (4 + 4×6 + 14)/6 = 7 j ; la moyenne simple (8 j) surpondère le pessimiste — la distribution est asymétrique vers le risque',
        en: 'PERT = (4 + 4×6 + 14)/6 = 7d; the simple average (8d) overweights the pessimistic — the distribution is risk-skewed',
      },
      { fr: 'PERT = 8 j : la moyenne des trois valeurs', en: 'PERT = 8d: the average of the three values' },
      { fr: 'PERT = 6 j : la valeur la plus probable', en: 'PERT = 6d: the most likely value' },
      { fr: 'PERT = 9 j : (4 + 14)/2', en: 'PERT = 9d: (4 + 14)/2' },
    ],
    correct: 0,
    explanation: {
      fr: "PERT bêta = (O + 4M + P)/6 = 42/6 = 7 j. La queue pessimiste longue (14 vs 4) signale un risque asymétrique : à investiguer (cause du scénario noir) plutôt qu'à moyenner aveuglément.",
      en: 'Beta PERT = (O + 4M + P)/6 = 42/6 = 7d. The long pessimistic tail (14 vs 4) signals asymmetric risk: investigate the dark scenario’s cause rather than blindly averaging.',
    },
  },
  {
    id: 'hq44',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre tableau kanban gère des demandes standard et des urgences de production. Les urgences désorganisent le flux à chaque arrivée. Quelle pratique kanban structure ce problème ?",
      en: 'Your kanban board handles standard requests and production emergencies. Emergencies disrupt the flow every time they arrive. Which kanban practice structures this problem?',
    },
    options: [
      {
        fr: 'Des classes de service : une voie « expedite » à capacité limitée avec règles explicites, sans détruire le flux standard',
        en: 'Classes of service: a capacity-limited “expedite” lane with explicit policies, without destroying the standard flow',
      },
      { fr: 'Traiter les urgences en dehors du tableau', en: 'Handle emergencies off the board' },
      { fr: 'Doubler les limites de WIP', en: 'Double the WIP limits' },
      { fr: 'Refuser les urgences en cours de semaine', en: 'Refuse emergencies mid-week' },
    ],
    correct: 0,
    explanation: {
      fr: "Les classes de service rendent la politique de priorité EXPLICITE : une voie expedite bornée (souvent 1 slot) absorbe les vraies urgences avec un coût de flux connu et visible — hors tableau, elles deviennent du travail invisible.",
      en: 'Classes of service make priority policy EXPLICIT: a bounded expedite lane (often 1 slot) absorbs true emergencies at a known, visible flow cost — off the board they become invisible work.',
    },
  },
  {
    id: 'hq45',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le sponsor veut annuler la phase pilote pour « gagner 2 mois » : « Le produit a été testé, déployons partout. » Le pilote devait valider l'adoption terrain dans 3 contextes métier différents. Que défendez-vous ?",
      en: 'The sponsor wants to cancel the pilot phase to “save 2 months”: “The product has been tested, deploy everywhere.” The pilot was to validate field adoption across 3 different business contexts. What do you defend?',
    },
    options: [
      {
        fr: "La valeur d'apprentissage du pilote : les tests valident le produit, le pilote valide l'ADOPTION — proposer au pire un pilote raccourci sur le contexte le plus risqué",
        en: 'The pilot’s learning value: tests validate the product, the pilot validates ADOPTION — at worst propose a shortened pilot on the riskiest context',
      },
      { fr: "Accepter : les tests suffisent", en: 'Accept: testing is enough' },
      { fr: 'Refuser tout compromis sur la durée du pilote', en: 'Refuse any compromise on pilot duration' },
      { fr: 'Déployer partout avec une hotline renforcée', en: 'Deploy everywhere with a beefed-up hotline' },
    ],
    correct: 0,
    explanation: {
      fr: "Tests et pilote réduisent des risques DIFFÉRENTS (produit vs adoption/contexte). La réponse experte n'est ni la capitulation ni la rigidité : réduire le pilote à son cœur d'apprentissage à plus forte valeur.",
      en: 'Testing and piloting reduce DIFFERENT risks (product vs adoption/context). The expert answer is neither capitulation nor rigidity: shrink the pilot to its highest-value learning core.',
    },
  },
  {
    id: 'hq46',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Vous découvrez qu'un jalon contractuel de votre fournisseur a été validé par un membre de votre équipe alors que les critères n'étaient pas remplis, « pour ne pas bloquer sa facturation ». Que faites-vous ?",
      en: 'You discover a vendor’s contractual milestone was signed off by one of your team members although the criteria were not met, “to avoid blocking their invoicing”. What do you do?',
    },
    options: [
      {
        fr: "Traiter les deux volets : notifier formellement l'écart au fournisseur (réserves, plan de complétion) et recadrer en interne la délégation de validation",
        en: 'Address both sides: formally notify the vendor of the gap (reservations, completion plan) and internally reset the sign-off delegation',
      },
      { fr: 'Annuler rétroactivement le paiement du fournisseur', en: 'Retroactively cancel the vendor’s payment' },
      { fr: "Laisser passer : le jalon suivant compensera", en: 'Let it slide: the next milestone will compensate' },
      { fr: 'Sanctionner publiquement le membre fautif', en: 'Publicly sanction the offending member' },
    ],
    correct: 0,
    explanation: {
      fr: "Une validation de complaisance crée un fait contractuel qu'il faut corriger vite et formellement (avant qu'il ne se consolide), ET un problème de gouvernance interne (qui peut valider quoi) à recadrer sans lynchage public.",
      en: 'A courtesy sign-off creates a contractual fact that must be corrected quickly and formally (before it solidifies), AND an internal governance issue (who may sign what) to reset without public shaming.',
    },
  },
  {
    id: 'hq47',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Projet de 18 mois : la direction exige un reporting d'avancement en % physique, mais 60 % du travail est du développement logiciel dont « 90 % fait » stagne depuis 6 semaines. Quelle mesure d'avancement corrige ce biais ?",
      en: 'An 18-month project: leadership requires physical % complete reporting, but 60% of the work is software where “90% done” has stalled for 6 weeks. Which progress measure corrects this bias?',
    },
    options: [
      {
        fr: "Des jalons binaires à granularité fine (terminé/non terminé, règle 0/100 ou 50/50) fondés sur des livrables vérifiables — le « % ressenti » est invérifiable",
        en: 'Fine-grained binary milestones (done/not done, 0/100 or 50/50 rule) based on verifiable deliverables — “felt %” is unverifiable',
      },
      { fr: 'Demander des % plus précis (à la décimale)', en: 'Ask for more precise percentages (to the decimal)' },
      { fr: "Faire estimer le % par le management", en: 'Have management estimate the %' },
      { fr: 'Mesurer les heures passées', en: 'Measure hours spent' },
    ],
    correct: 0,
    explanation: {
      fr: "Le syndrome des « 90 % finis » vient de la subjectivité du % déclaratif. Les règles de crédit d'avancement objectives (0/100, 50/50, jalons vérifiables) et un découpage fin rendent l'avancement mesurable. Les heures passées mesurent l'effort, pas le résultat.",
      en: 'The “90% done” syndrome stems from subjective declared %. Objective earning rules (0/100, 50/50, verifiable milestones) and fine decomposition make progress measurable. Hours spent measure effort, not outcome.',
    },
  },
  {
    id: 'hq48',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "En clôture d'un projet arrêté prématurément (décision stratégique), que devez-vous faire des livrables partiels et des enseignements ?",
      en: 'Closing a prematurely terminated project (strategic decision), what must you do with partial deliverables and learnings?',
    },
    options: [
      {
        fr: "Une clôture complète et formelle : inventorier et transférer les livrables partiels réutilisables, documenter l'état, archiver, capturer les leçons et libérer les ressources proprement",
        en: 'A full formal closure: inventory and hand over reusable partial deliverables, document the state, archive, capture lessons and release resources cleanly',
      },
      { fr: 'Rien : le projet annulé n’a plus de valeur', en: 'Nothing: a cancelled project has no more value' },
      { fr: 'Garder l’équipe jusqu’à épuisement du budget', en: 'Keep the team until the budget runs out' },
      { fr: 'Détruire les livrables partiels non validés', en: 'Destroy unvalidated partial deliverables' },
    ],
    correct: 0,
    explanation: {
      fr: "Un arrêt prématuré suit le MÊME processus de clôture qu'une fin normale : les actifs partiels et les enseignements ont souvent une valeur résiduelle importante pour l'organisation — la bâcler la détruit.",
      en: 'Premature termination follows the SAME closure process as a normal end: partial assets and learnings often hold significant residual value for the organization — a sloppy closure destroys it.',
    },
  },
  {
    id: 'hq49',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre organisation applique un cadre agile à grande échelle. Deux trains de release doivent synchroniser une livraison commune au T3. Le train A glisse d'un incrément. Quel mécanisme du cadre traitez-vous en priorité ?",
      en: 'Your organization runs a scaled agile framework. Two release trains must synchronize a joint delivery in Q3. Train A slips one increment. Which framework mechanism do you engage first?',
    },
    options: [
      {
        fr: "La coordination inter-trains (rôles et événements de synchronisation) pour ré-arbitrer périmètre, dépendances et date au niveau de la solution",
        en: 'Cross-train coordination (sync roles and events) to re-arbitrate scope, dependencies and date at the solution level',
      },
      { fr: 'Ajouter des équipes au train A', en: 'Add teams to train A' },
      { fr: "Laisser chaque train gérer indépendamment", en: 'Let each train manage independently' },
      { fr: 'Avancer la date du train B pour compenser', en: 'Move train B’s date earlier to compensate' },
    ],
    correct: 0,
    explanation: {
      fr: "À l'échelle, les glissements se traitent au niveau où vivent les dépendances : les instances de coordination inter-trains ré-arbitrent périmètre/date de la solution. Ajouter des équipes tard aggrave souvent le retard (loi de Brooks).",
      en: 'At scale, slips are handled at the level where dependencies live: cross-train coordination re-arbitrates solution scope/date. Adding teams late often worsens delay (Brooks’s law).',
    },
  },
  {
    id: 'hq50',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Audit de mi-projet : votre plan de management de la qualité prévoit des inspections que personne ne réalise, « remplacées » informellement par de la revue de code automatisée plus efficace. Que faites-vous ?",
      en: 'Mid-project audit: your quality management plan mandates inspections nobody performs, informally “replaced” by more effective automated code review. What do you do?',
    },
    options: [
      {
        fr: "Mettre le plan à jour formellement pour refléter la pratique supérieure (avec preuves d'efficacité), via le processus de changement du plan",
        en: 'Formally update the plan to reflect the superior practice (with effectiveness evidence), through the plan change process',
      },
      { fr: 'Réimposer les inspections prévues au plan', en: 'Re-impose the planned inspections' },
      { fr: "Laisser l'écart : la pratique fonctionne", en: 'Leave the gap: the practice works' },
      { fr: "Cacher l'écart à l'auditeur", en: 'Hide the gap from the auditor' },
    ],
    correct: 0,
    explanation: {
      fr: "Deux erreurs possibles : la rigidité (réimposer une pratique inférieure) et le laisser-aller (plan et réalité divergents = perte de maîtrise). La réponse : aligner formellement le plan sur la meilleure pratique démontrée.",
      en: 'Two possible errors: rigidity (re-imposing an inferior practice) and drift (plan and reality diverging = loss of control). The answer: formally align the plan with the demonstrated better practice.',
    },
  },
  {
    id: 'hq51',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Fin d'itération : 8 stories « presque finies » (codées, non testées), 0 story livrable. Le PO est frustré. Quelle recommandation faites-vous à l'équipe pour l'itération suivante ?",
      en: 'End of iteration: 8 stories “almost done” (coded, untested), 0 shippable stories. The PO is frustrated. What do you recommend to the team for the next iteration?',
    },
    options: [
      {
        fr: "Limiter le travail en cours et « swarmer » : finir les stories une à une (flux) plutôt que toutes les commencer en parallèle",
        en: 'Limit WIP and swarm: finish stories one by one (flow) rather than starting them all in parallel',
      },
      { fr: 'Allonger la durée des itérations', en: 'Lengthen the iterations' },
      { fr: 'Compter les stories codées dans la vélocité', en: 'Count coded stories in velocity' },
      { fr: 'Ajouter un testeur dédié en fin d’itération', en: 'Add a dedicated tester at iteration end' },
    ],
    correct: 0,
    explanation: {
      fr: "« Presque fini » = zéro valeur livrable. Le problème est le parallélisme excessif : limiter le WIP et finir ensemble maximise le nombre de stories réellement TERMINÉES. Compter le travail non fini fausserait la vélocité.",
      en: '“Almost done” = zero shippable value. The problem is excessive parallelism: limiting WIP and finishing together maximizes truly DONE stories. Counting unfinished work would corrupt velocity.',
    },
  },
  {
    id: 'hq52',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre projet dépend d'une subvention versée par tranches conditionnées à des jalons. Un retard fournisseur menace le jalon de la tranche 2 (400 k€). La trésorerie ne couvre que 6 semaines au-delà. Quel enchaînement pilotage adoptez-vous ?",
      en: 'Your project depends on a grant paid in milestone-gated tranches. A vendor delay threatens the tranche-2 milestone ($400K). Cash covers only 6 weeks beyond it. Which management sequence do you adopt?',
    },
    options: [
      {
        fr: "Traiter comme risque de financement critique : compression ciblée du chemin du jalon, dialogue anticipé avec le financeur sur les conditions, et plan de trésorerie de secours",
        en: 'Treat it as a critical funding risk: targeted compression of the milestone path, early dialogue with the funder about conditions, and a backup cash plan',
      },
      { fr: 'Attendre le jalon et négocier ensuite', en: 'Wait for the milestone and negotiate afterwards' },
      { fr: 'Déclarer le jalon atteint sur la base du travail prévu', en: 'Declare the milestone met based on planned work' },
      { fr: "Suspendre les paiements fournisseurs pour préserver la trésorerie", en: 'Suspend vendor payments to preserve cash' },
    ],
    correct: 0,
    explanation: {
      fr: "Le financement conditionnel lie échéancier et trésorerie : la réponse combine action sur le délai (compression du chemin concerné), transparence anticipée avec le financeur (renégociation possible AVANT l'échec) et résilience financière. Falsifier le jalon est une fraude.",
      en: 'Conditional funding couples schedule and cash: the response combines schedule action (compressing the relevant path), early funder transparency (renegotiation is possible BEFORE failure) and financial resilience. Faking the milestone is fraud.',
    },
  },
  {
    id: 'hq53',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "L'analyse de la valeur acquise donne CPI = 1,15 et SPI = 1,10 depuis 4 mois. L'équipe demande à « rendre » la réserve non utilisée. Pourquoi est-ce prématuré ?",
      en: 'Earned value analysis shows CPI = 1.15 and SPI = 1.10 for 4 months. The team proposes “returning” the unused reserve. Why is this premature?',
    },
    options: [
      {
        fr: "La réserve couvre les risques RESTANTS, pas la performance passée : elle ne se libère qu'à mesure que les risques associés expirent ou se referment",
        en: 'The reserve covers REMAINING risks, not past performance: it is released only as the associated risks expire or close',
      },
      { fr: "Ce n'est pas prématuré : la performance justifie la libération", en: 'It is not premature: performance justifies the release' },
      { fr: 'La réserve ne se libère jamais avant la clôture', en: 'Reserves are never released before closure' },
      { fr: 'Le SPI doit dépasser 1,2 pour libérer la réserve', en: 'SPI must exceed 1.2 to release reserves' },
    ],
    correct: 0,
    explanation: {
      fr: "Bonne performance ≠ risques disparus : un CPI de 1,15 ne protège pas d'un risque majeur en fin de projet. La libération de réserve suit l'analyse du profil de risque résiduel, éventuellement par paliers aux jalons.",
      en: 'Good performance ≠ vanished risks: a 1.15 CPI does not protect against a major late-project risk. Reserve release follows residual risk profile analysis, possibly stepwise at milestones.',
    },
  },
  {
    id: 'hq54',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre plan de bascule prévoit un gel des changements (freeze) de 2 semaines avant la mise en production. Le marketing exige une « micro-modification » du texte d'accueil pendant le gel. Que faites-vous ?",
      en: 'Your cutover plan includes a 2-week change freeze before go-live. Marketing demands a “micro-change” to the welcome text during the freeze. What do you do?',
    },
    options: [
      {
        fr: "Appliquer le processus d'exception du gel : évaluation d'impact expresse et décision par l'autorité désignée — pas de contournement informel, même « micro »",
        en: 'Apply the freeze exception process: expedited impact assessment and decision by the designated authority — no informal bypass, even “micro”',
      },
      { fr: "Accepter : un texte ne casse rien", en: 'Accept: text cannot break anything' },
      { fr: 'Refuser sans examen : le gel est absolu', en: 'Refuse without review: the freeze is absolute' },
      { fr: 'Reporter la mise en production', en: 'Postpone the go-live' },
    ],
    correct: 0,
    explanation: {
      fr: "Un gel efficace prévoit sa propre procédure d'exception (rapide, tracée, avec autorité claire). Le danger n'est pas ce changement-ci mais le précédent : chaque contournement informel érode le gel pour les suivants.",
      en: 'An effective freeze includes its own exception procedure (fast, traced, clear authority). The danger is not this change but the precedent: each informal bypass erodes the freeze for the next ones.',
    },
  },
  {
    id: 'hq55',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Sur 200 anomalies ouvertes, l'équipe corrige en priorité les plus simples pour « faire baisser le compteur ». Les 12 anomalies critiques stagnent. Quel dispositif corrige ce biais ?",
      en: 'Out of 200 open defects, the team fixes the easiest ones first to “bring the counter down”. The 12 critical defects stagnate. Which mechanism corrects this bias?',
    },
    options: [
      {
        fr: "Une priorisation par sévérité×impact avec SLA par classe de sévérité, et un indicateur suivi sur les critiques (pas le volume brut)",
        en: 'Severity×impact prioritization with per-severity SLAs, and a tracked metric on criticals (not raw volume)',
      },
      { fr: 'Un objectif de réduction du nombre total', en: 'A total-count reduction target' },
      { fr: 'Une prime au nombre d’anomalies corrigées', en: 'A bonus per defect fixed' },
      { fr: 'Un gel des nouvelles fonctionnalités', en: 'A freeze on new features' },
    ],
    correct: 0,
    explanation: {
      fr: "Le compteur brut incite au cherry-picking (loi de Goodhart). Prioriser par criticité avec des SLA et mesurer CE qui compte (résolution des critiques, âge des anomalies) aligne le comportement sur la valeur.",
      en: 'The raw counter incentivizes cherry-picking (Goodhart’s law). Criticality-based priorities with SLAs and measuring WHAT matters (critical resolution, defect age) aligns behavior with value.',
    },
  },
  {
    id: 'hq56',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre analyse des parties prenantes du processus d'approvisionnement révèle que le service juridique met 6 semaines à valider chaque contrat, ce qui est devenu LE goulot du projet. Que faites-vous ?",
      en: 'Your procurement process analysis reveals the legal department takes 6 weeks to approve each contract, now THE project bottleneck. What do you do?',
    },
    options: [
      {
        fr: "Collaborer avec le juridique sur le flux : modèles pré-approuvés, seuils de délégation, lots de revue — et anticiper les demandes dans le planning",
        en: 'Work with legal on the flow: pre-approved templates, delegation thresholds, batched reviews — and front-load requests in the schedule',
      },
      { fr: 'Contourner le juridique pour les petits contrats', en: 'Bypass legal for small contracts' },
      { fr: 'Escalader le juridique comme risque au sponsor', en: 'Escalate legal as a risk to the sponsor' },
      { fr: 'Accepter le délai et décaler tous les jalons', en: 'Accept the delay and shift all milestones' },
    ],
    correct: 0,
    explanation: {
      fr: "Le juridique est une partie prenante avec ses contraintes, pas un obstacle : les solutions de flux (standardisation, délégation, anticipation) traitent le goulot durablement. Contourner crée un risque juridique ; escalader sans avoir collaboré est prématuré.",
      en: 'Legal is a stakeholder with constraints, not an obstacle: flow solutions (standardization, delegation, anticipation) fix the bottleneck durably. Bypassing creates legal risk; escalating before collaborating is premature.',
    },
  },
  {
    id: 'hq57',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "L'équipe estime une epic complexe à « 3 à 8 sprints » et le sponsor exige un engagement ferme avant tout développement. Quel compromis professionnel proposez-vous ?",
      en: 'The team estimates a complex epic at “3 to 8 sprints” and the sponsor demands a firm commitment before any development. What professional compromise do you propose?',
    },
    options: [
      {
        fr: "Un jalon de ré-estimation financé : 1-2 sprints d'exploration qui réduisent l'incertitude, puis un engagement fondé sur des données réelles",
        en: 'A funded re-estimation milestone: 1-2 exploration sprints that reduce uncertainty, then a commitment based on real data',
      },
      { fr: "S'engager sur 8 sprints (le pire cas)", en: 'Commit to 8 sprints (the worst case)' },
      { fr: "S'engager sur 3 sprints (le meilleur cas)", en: 'Commit to 3 sprints (the best case)' },
      { fr: "S'engager sur 5,5 sprints (la moyenne)", en: 'Commit to 5.5 sprints (the average)' },
    ],
    correct: 0,
    explanation: {
      fr: "L'incertitude 3-8 signale un manque d'information, pas un manque de courage : acheter de l'information (exploration courte) avant de s'engager est la réponse experte. Pire cas, meilleur cas et moyenne sont trois façons de deviner.",
      en: 'A 3-8 spread signals missing information, not missing courage: buying information (short exploration) before committing is the expert answer. Worst case, best case and average are three ways of guessing.',
    },
  },
  {
    id: 'hq58',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Un test de charge tardif révèle que l'architecture ne tiendra pas le volume cible. Le correctif estimé : 2 mois. La date de lancement, annoncée publiquement, est dans 6 semaines. Quelles options présentez-vous à la gouvernance ?",
      en: 'A late load test reveals the architecture will not sustain the target volume. Estimated fix: 2 months. The publicly announced launch is in 6 weeks. Which options do you present to governance?',
    },
    options: [
      {
        fr: "Des options chiffrées avec risques : lancement limité (volume plafonné/progressif), report, ou lancement à risque documenté — avec votre recommandation",
        en: 'Costed options with risks: limited launch (capped/progressive volume), postponement, or documented at-risk launch — with your recommendation',
      },
      { fr: 'Le maintien du lancement : la date est publique', en: 'Holding the launch: the date is public' },
      { fr: 'Le report : seule option responsable', en: 'Postponement: the only responsible option' },
      { fr: "Un correctif « allégé » en 6 semaines non testé", en: 'An untested “lite” fix in 6 weeks' },
    ],
    correct: 0,
    explanation: {
      fr: "Le rôle du chef de projet : élargir l'espace de décision (le lancement progressif à volume limité est souvent la voie médiane) et le documenter avec risques et recommandation. Imposer une seule option — même « prudente » — appauvrit la décision.",
      en: 'The project manager’s role: widen the decision space (progressive, volume-capped launch is often the middle path) and document it with risks and a recommendation. Forcing a single option — even a “prudent” one — impoverishes the decision.',
    },
  },
  {
    id: 'hq59',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le projet précédent a échoué avec la même équipe et le même périmètre. Votre analyse montre : estimations imposées d'en haut, risques identifiés mais jamais traités, reporting embelli. Par quoi commencez-vous VOTRE gouvernance ?",
      en: 'The previous project failed with the same team and scope. Your analysis shows: top-down imposed estimates, risks identified but never acted on, embellished reporting. Where do you start YOUR governance?',
    },
    options: [
      {
        fr: "Rétablir la boucle information → décision : estimations par ceux qui font, revues de risques AVEC actions et propriétaires, reporting factuel protégé",
        en: 'Restore the information → decision loop: estimates by those who do the work, risk reviews WITH actions and owners, protected factual reporting',
      },
      { fr: 'Changer l’équipe pour repartir à neuf', en: 'Replace the team for a fresh start' },
      { fr: 'Ajouter des niveaux de validation supplémentaires', en: 'Add extra approval layers' },
      { fr: 'Réduire le périmètre de moitié par prudence', en: 'Halve the scope out of caution' },
    ],
    correct: 0,
    explanation: {
      fr: "Les trois symptômes partagent une cause : un système où l'information vraie ne pilote pas les décisions. La correction est systémique (qui estime, qui traite les risques, protection de la vérité) — pas cosmétique (équipe, périmètre, bureaucratie).",
      en: 'The three symptoms share one cause: a system where true information does not drive decisions. The fix is systemic (who estimates, who owns risks, protecting truth) — not cosmetic (team, scope, bureaucracy).',
    },
  },
  {
    id: 'hq60',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre projet doit intégrer les livrables de trois sous-traitants aux plannings indépendants. Chaque intégration tardive des uns bloque les tests des autres. Quel dispositif de pilotage inter-fournisseurs instaurez-vous ?",
      en: 'Your project must integrate deliverables from three subcontractors with independent schedules. Each late integration blocks the others’ testing. Which cross-vendor management mechanism do you establish?',
    },
    options: [
      {
        fr: "Un planning d'intégration maître partagé : jalons d'interface contractualisés, environnement d'intégration continue et instance de coordination récurrente",
        en: 'A shared master integration schedule: contracted interface milestones, a continuous integration environment and a recurring coordination forum',
      },
      { fr: 'Des pénalités de retard plus sévères pour chacun', en: 'Harsher delay penalties for each vendor' },
      { fr: 'Un intégrateur unique choisi parmi les trois', en: 'A single integrator picked from the three' },
      { fr: "Des tests d'intégration repoussés en fin de projet", en: 'Integration tests deferred to project end' },
    ],
    correct: 0,
    explanation: {
      fr: "Les dépendances inter-fournisseurs exigent une ORCHESTRATION : jalons d'interface opposables, intégration précoce et continue (pas en big bang final) et coordination régulière. Les pénalités motivent mais n'orchestrent rien.",
      en: 'Cross-vendor dependencies demand ORCHESTRATION: enforceable interface milestones, early continuous integration (not a final big bang) and regular coordination. Penalties motivate but orchestrate nothing.',
    },
  },
  {
    id: 'hq61',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "À 3 semaines de la fin, il reste 45 anomalies mineures ouvertes et le contrat prévoit « zéro anomalie » à la livraison. Les corriger toutes coûterait 5 semaines. Quelle démarche adoptez-vous ?",
      en: 'Three weeks from the end, 45 minor defects remain open and the contract stipulates “zero defects” at delivery. Fixing them all would take 5 weeks. What approach do you take?',
    },
    options: [
      {
        fr: "Négocier avec le client une acceptation avec réserves : liste des anomalies classées, plan de correction daté post-livraison, et avenant formalisant l'accord",
        en: 'Negotiate acceptance with reservations: a classified defect list, a dated post-delivery fix plan, and an amendment formalizing the agreement',
      },
      { fr: 'Livrer en masquant les anomalies connues', en: 'Deliver while concealing the known defects' },
      { fr: 'Repousser unilatéralement la livraison de 5 semaines', en: 'Unilaterally push delivery by 5 weeks' },
      { fr: 'Requalifier les anomalies en « améliorations »', en: 'Reclassify the defects as “enhancements”' },
    ],
    correct: 0,
    explanation: {
      fr: "Le « zéro anomalie » absolu est rarement atteignable ni utile pour des anomalies mineures : la transparence + un accord contractuel formel (réserves, plan daté) protège les deux parties. Masquer ou requalifier est de la dissimulation.",
      en: 'Absolute “zero defects” is rarely achievable or useful for minor issues: transparency + a formal contractual agreement (reservations, dated plan) protects both parties. Concealing or relabeling is deception.',
    },
  },
  {
    id: 'hq62',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre successeur reprend le projet à mi-parcours. Vous avez une semaine de tuilage. Que priorisez-vous dans le transfert ?",
      en: 'Your successor takes over the project midway. You have one week of overlap. What do you prioritize in the handover?',
    },
    options: [
      {
        fr: "Ce qui n'est PAS dans les documents : dynamiques des parties prenantes, risques sensibles, engagements informels, historique des décisions — et des introductions en personne",
        en: 'What is NOT in the documents: stakeholder dynamics, sensitive risks, informal commitments, decision history — plus in-person introductions',
      },
      { fr: 'La relecture ensemble de tout le plan de management', en: 'Reading the whole management plan together' },
      { fr: "La liste des tâches en cours dans l'outil", en: 'The list of open tasks in the tool' },
      { fr: 'Un rapport de transfert écrit exhaustif', en: 'An exhaustive written handover report' },
    ],
    correct: 0,
    explanation: {
      fr: "Les documents survivent au départ ; le savoir tacite, non. Le tuilage sert à transférer le contexte politique et historique invisible et à transférer la CONFIANCE des parties prenantes par des introductions directes.",
      en: 'Documents survive the departure; tacit knowledge does not. Overlap time exists to transfer the invisible political and historical context and to transfer stakeholder TRUST through direct introductions.',
    },
  },

  // ─────────────── BUSINESS hb01–hb08 ───────────────
  {
    id: 'hb01',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Deux projets en compétition pour le budget : P1 (VAN 800 k€, payback 4 ans) ; P2 (VAN 500 k€, payback 18 mois). L'entreprise traverse une crise de trésorerie. Que recommandez-vous et pourquoi ?",
      en: 'Two projects compete for budget: P1 (NPV $800K, payback 4 years); P2 (NPV $500K, payback 18 months). The company faces a cash crisis. What do you recommend and why?',
    },
    options: [
      {
        fr: "P2 peut primer : en crise de trésorerie, le délai de récupération devient un critère de survie qui peut supplanter la VAN — la recommandation doit expliciter ce compromis",
        en: 'P2 can prevail: in a cash crisis, payback becomes a survival criterion that may outweigh NPV — the recommendation must make this trade-off explicit',
      },
      { fr: 'P1 toujours : la VAN est le critère supérieur', en: 'Always P1: NPV is the superior criterion' },
      { fr: 'P2 toujours : le payback prime en toute situation', en: 'Always P2: payback always comes first' },
      { fr: 'Les deux : couper chaque budget de moitié', en: 'Both: halve each budget' },
    ],
    correct: 0,
    explanation: {
      fr: "La VAN maximise la valeur théorique, mais le contexte (contrainte de liquidité) change la pondération des critères : une entreprise qui ne passe pas l'année ne touchera jamais la VAN de P1. Les critères de sélection servent la stratégie, pas l'inverse.",
      en: 'NPV maximizes theoretical value, but context (liquidity constraint) changes the criteria weighting: a company that does not survive the year never collects P1’s NPV. Selection criteria serve strategy, not the other way round.',
    },
  },
  {
    id: 'hb02',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Votre projet a déjà consommé 2 M€ sur 3. Une analyse récente montre que les bénéfices attendus ont fondu de 70 % (marché retourné). Le sponsor veut continuer « pour ne pas perdre les 2 M€ investis ». Que lui opposez-vous ?",
      en: 'Your project has spent $2M of $3M. A recent analysis shows expected benefits have shrunk 70% (market shift). The sponsor wants to continue “so the $2M invested is not wasted”. What do you counter with?',
    },
    options: [
      {
        fr: "Le biais des coûts irrécupérables : la décision ne doit comparer que le coût RESTANT (1 M€) aux bénéfices résiduels — les 2 M€ sont dépensés quelle que soit la décision",
        en: 'The sunk cost fallacy: the decision must compare only the REMAINING cost ($1M) to residual benefits — the $2M is spent regardless of the decision',
      },
      { fr: "Rien : terminer ce qu'on commence est une règle saine", en: 'Nothing: finishing what you start is a healthy rule' },
      { fr: 'Un compromis : ne dépenser que 500 k€ de plus', en: 'A compromise: spend only $500K more' },
      { fr: "L'arrêt immédiat sans analyse supplémentaire", en: 'Immediate termination without further analysis' },
    ],
    correct: 0,
    explanation: {
      fr: "Les coûts passés sont irrécupérables et ne doivent pas influencer la décision d'avenir : si 1 M€ restant > bénéfices résiduels, continuer détruit de la valeur supplémentaire. La décision formelle revient à la gouvernance, éclairée par cette analyse.",
      en: 'Past costs are unrecoverable and must not influence the forward decision: if the remaining $1M exceeds residual benefits, continuing destroys additional value. The formal decision rests with governance, informed by this analysis.',
    },
  },
  {
    id: 'hb03',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Votre produit conforme au règlement actuel sera visé par une nouvelle norme dans 14 mois (texte adopté, décrets en attente). L'adapter maintenant coûte +15 % ; attendre les décrets risque un retrofit à +40 %. Que proposez-vous ?",
      en: 'Your product complies with current regulation but will fall under a new standard in 14 months (law passed, implementing rules pending). Adapting now costs +15%; waiting for the rules risks a +40% retrofit. What do you propose?',
    },
    options: [
      {
        fr: "Une stratégie d'anticipation modulée : implémenter maintenant les exigences déjà certaines, isoler architecturalement les zones incertaines, et suivre activement les décrets",
        en: 'A modulated anticipation strategy: implement the already-certain requirements now, architecturally isolate the uncertain areas, and actively track the implementing rules',
      },
      { fr: 'Tout adapter immédiatement aux exigences supposées', en: 'Adapt everything now to the assumed requirements' },
      { fr: 'Attendre les décrets : rien n’est encore obligatoire', en: 'Wait for the rules: nothing is mandatory yet' },
      { fr: "Livrer tel quel : la conformité actuelle suffit", en: 'Ship as-is: current compliance suffices' },
    ],
    correct: 0,
    explanation: {
      fr: "Entre le tout-maintenant (risque de sur-adaptation à des exigences devinées) et l'attentisme (retrofit coûteux), la réponse experte découple : agir sur le certain, rendre le reste adaptable, réduire l'incertitude par la veille.",
      en: 'Between all-now (over-adapting to guessed requirements) and waiting (costly retrofit), the expert answer decouples: act on the certain, keep the rest adaptable, reduce uncertainty through monitoring.',
    },
  },
  {
    id: 'hb04',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Six mois après la livraison de votre projet, le sponsor rapporte que les bénéfices mesurés atteignent 30 % de la cible : les utilisateurs ont massivement conservé l'ancien processus « en parallèle ». Quelle leçon systémique en tirez-vous pour les projets futurs ?",
      en: 'Six months after your project’s delivery, the sponsor reports measured benefits at 30% of target: users massively kept the old process “in parallel”. What systemic lesson do you draw for future projects?',
    },
    options: [
      {
        fr: "La réalisation des bénéfices exige un plan de transition avec extinction de l'ancien processus, des mesures d'adoption et un propriétaire des bénéfices actif APRÈS la livraison",
        en: 'Benefits realization requires a transition plan with retirement of the old process, adoption metrics and an active benefits owner AFTER delivery',
      },
      { fr: 'Les utilisateurs étaient simplement réfractaires', en: 'The users were simply resistant' },
      { fr: 'Les bénéfices cibles étaient trop ambitieux', en: 'The benefit targets were too ambitious' },
      { fr: "Le projet a échoué techniquement", en: 'The project failed technically' },
    ],
    correct: 0,
    explanation: {
      fr: "Un ancien processus laissé vivant est la première cause de bénéfices fantômes : sans extinction organisée, mesure d'adoption et responsabilité post-projet, la valeur reste théorique. C'est une leçon de conception de projet, pas un défaut des utilisateurs.",
      en: 'A legacy process left alive is the top cause of phantom benefits: without organized retirement, adoption measurement and post-project ownership, value stays theoretical. It is a project design lesson, not a user defect.',
    },
  },
  {
    id: 'hb05',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Le comité stratégique réoriente l'entreprise vers un nouveau marché. Votre projet, à 60 % d'avancement, servait l'ancien axe. Le sponsor tarde à statuer et l'équipe continue de produire. Quel est le RISQUE principal de cette situation ?",
      en: 'The strategy committee pivots the company to a new market. Your project, 60% complete, served the old direction. The sponsor delays a ruling while the team keeps producing. What is the MAIN risk of this situation?',
    },
    options: [
      {
        fr: "Détruire de la valeur en continuant d'investir dans un objectif potentiellement caduc — il faut forcer une décision rapide avec des options chiffrées (pivot, arrêt, poursuite)",
        en: 'Destroying value by continuing to invest in a possibly obsolete objective — force a rapid decision with costed options (pivot, stop, continue)',
      },
      { fr: "Démotiver l'équipe par l'incertitude", en: 'Demotivating the team through uncertainty' },
      { fr: 'Perdre la face devant le comité', en: 'Losing face before the committee' },
      { fr: "Rater le jalon du trimestre", en: 'Missing the quarterly milestone' },
    ],
    correct: 0,
    explanation: {
      fr: "Chaque semaine de production non alignée est un investissement potentiellement perdu : le coût de l'indécision croît linéairement. Le chef de projet provoque la décision en la rendant facile : options documentées, chiffrées, avec échéance.",
      en: 'Every week of misaligned production is potentially lost investment: the cost of indecision grows linearly. The project manager forces the decision by making it easy: documented, costed options with a deadline.',
    },
  },
  {
    id: 'hb06',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Votre projet d'usine peut choisir : procédé standard (12 M€) ou procédé bas-carbone (13,5 M€) réduisant les émissions de 40 %. Aucune obligation légale actuelle, mais une taxe carbone est débattue au parlement et vos clients B2B fixent des objectifs d'achats responsables. Comment cadrez-vous la décision ?",
      en: 'Your plant project can choose: standard process ($12M) or low-carbon process ($13.5M) cutting emissions 40%. No current legal obligation, but a carbon tax is being debated in parliament and your B2B customers set responsible sourcing targets. How do you frame the decision?',
    },
    options: [
      {
        fr: "Une analyse de valeur élargie : scénarios de taxe carbone, exigences clients futures, risque d'actif échoué et image — le surcoût de 12,5 % s'évalue contre ces flux, pas seulement contre le CAPEX",
        en: 'An extended value analysis: carbon tax scenarios, future customer requirements, stranded asset risk and reputation — the 12.5% premium is weighed against those flows, not just CAPEX',
      },
      { fr: 'Le standard : 1,5 M€ d’économie certaine prime', en: 'Standard: the certain $1.5M saving prevails' },
      { fr: 'Le bas-carbone : l’écologie prime toujours', en: 'Low-carbon: ecology always prevails' },
      { fr: "Attendre l'issue du débat parlementaire", en: 'Wait for the parliamentary outcome' },
    ],
    correct: 0,
    explanation: {
      fr: "Ni dogme ni myopie : la durabilité s'intègre au business case par des scénarios quantifiés (taxe, marché, risque d'obsolescence réglementaire). Un actif industriel vit 20-30 ans : l'analyse doit couvrir cet horizon, pas le seul CAPEX initial.",
      en: 'Neither dogma nor myopia: sustainability enters the business case through quantified scenarios (tax, market, regulatory obsolescence risk). An industrial asset lives 20-30 years: the analysis must cover that horizon, not just initial CAPEX.',
    },
  },
  {
    id: 'hb07',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Une élue locale critique publiquement votre projet d'infrastructure, relayant des inquiétudes de riverains sur le bruit du chantier. Le permis est valide et le planning serré. Votre directeur suggère de « laisser passer l'orage ». Quel est le risque de cette approche et que proposez-vous ?",
      en: 'A local councillor publicly criticizes your infrastructure project, echoing residents’ concerns about construction noise. The permit is valid and the schedule tight. Your director suggests “letting the storm pass”. What is the risk of that approach, and what do you propose?',
    },
    options: [
      {
        fr: "L'inaction laisse l'opposition se structurer (recours, blocages) : engager les riverains et l'élue maintenant — mesures d'atténuation, canal de plaintes, communication de chantier",
        en: 'Inaction lets opposition organize (appeals, blockades): engage residents and the councillor now — mitigation measures, a complaints channel, construction communication',
      },
      { fr: "Aucun risque : le permis protège juridiquement le projet", en: 'No risk: the permit legally protects the project' },
      { fr: 'Répondre à l’élue par voie de presse', en: 'Answer the councillor through the press' },
      { fr: 'Accélérer les travaux bruyants avant la contestation', en: 'Rush the noisy work before protests grow' },
    ],
    correct: 0,
    explanation: {
      fr: "La licence légale n'est pas la licence sociale : une opposition locale ignorée se transforme en recours et blocages bien plus coûteux que des mesures d'engagement précoces. Les parties prenantes externes se gèrent AVANT la crise.",
      en: 'A legal license is not a social license: ignored local opposition turns into appeals and blockades far costlier than early engagement measures. External stakeholders are managed BEFORE the crisis.',
    },
  },
  {
    id: 'hb08',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Votre PMO calcule que votre projet affiche un ROI de 22 %, mais vous découvrez que le calcul omet les coûts de formation et de maintenance des 3 premières années (qui ramèneraient le ROI à 9 %, sous le seuil de 12 % du portefeuille). Le projet est déjà approuvé. Que faites-vous ?",
      en: 'Your PMO calculates a 22% ROI for your project, but you discover the calculation omits training and first-3-years maintenance costs (which would drop ROI to 9%, below the portfolio’s 12% threshold). The project is already approved. What do you do?',
    },
    options: [
      {
        fr: "Corriger et faire remonter le calcul complet à la gouvernance : la décision de poursuivre doit reposer sur des données exactes, même si elle vous est défavorable",
        en: 'Correct the figures and raise the complete calculation to governance: the continue decision must rest on accurate data, even if unfavorable to you',
      },
      { fr: "Ne rien dire : l'approbation est acquise", en: 'Say nothing: approval is secured' },
      { fr: 'Réduire les coûts de formation pour remonter le ROI', en: 'Cut training costs to lift the ROI' },
      { fr: 'Signaler l’erreur au PMO de façon anonyme', en: 'Report the error to the PMO anonymously' },
    ],
    correct: 0,
    explanation: {
      fr: "Intégrité et intendance : maintenir sciemment une décision fondée sur des chiffres faux est une tromperie de la gouvernance. Couper la formation pour « sauver le ROI » détruirait l'adoption — donc les bénéfices réels eux-mêmes.",
      en: 'Integrity and stewardship: knowingly upholding a decision based on wrong numbers deceives governance. Cutting training to “save the ROI” would destroy adoption — and thus the very benefits.',
    },
  },
]
