import type { Question } from '../types'

/**
 * Multi-response ("select N") questions — the PMP exam's second item format
 * alongside single-answer multiple choice. Scored as correct only when the
 * selection exactly matches correctMultiple (no partial credit), mirroring
 * real exam scoring.
 */
export const MULTI_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xs01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-03',
    question: {
      fr: "Sélectionnez les DEUX stratégies de réponse appropriées face à une MENACE (risque négatif).",
      en: 'Select the TWO response strategies appropriate for a THREAT (negative risk).',
    },
    options: [
      { fr: 'Atténuer', en: 'Mitigate' },
      { fr: 'Exploiter', en: 'Exploit' },
      { fr: 'Transférer', en: 'Transfer' },
      { fr: 'Améliorer', en: 'Enhance' },
      { fr: 'Partager', en: 'Share' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Atténuer et transférer traitent les menaces. Exploiter, améliorer et partager sont les réponses symétriques réservées aux OPPORTUNITÉS (risques positifs).",
      en: 'Mitigate and transfer address threats. Exploit, enhance and share are the symmetric responses reserved for OPPORTUNITIES (positive risks).',
    },
  },
  {
    id: 'xs02',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-01',
    question: {
      fr: "Selon les techniques classiques de résolution de conflit, lesquelles DEUX sont considérées comme les MOINS efficaces à long terme ?",
      en: 'Among the classic conflict-resolution techniques, which TWO are considered LEAST effective long-term?',
    },
    options: [
      { fr: 'Collaborer / résoudre le problème', en: 'Collaborate / problem-solve' },
      { fr: 'Éviter / se retirer', en: 'Avoid / withdraw' },
      { fr: 'Forcer / imposer', en: 'Force / direct' },
      { fr: 'Compromis', en: 'Compromise' },
    ],
    correct: 1,
    correctMultiple: [1, 2],
    explanation: {
      fr: "Éviter (reporte sans résoudre) et forcer (gagnant-perdant, use l'autorité) sont les techniques les moins efficaces à long terme. Collaborer est la meilleure ; le compromis est un pis-aller acceptable sous contrainte de temps.",
      en: 'Avoiding (postpones without resolving) and forcing (win-lose, uses authority) are the least effective long-term. Collaborating is best; compromise is an acceptable stopgap under time pressure.',
    },
  },
  {
    id: 'xs03',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-11',
    question: {
      fr: "Parmi les éléments suivants, lesquels DEUX sont des types de contrat à COÛTS REMBOURSABLES ?",
      en: 'Among the following, which TWO are COST-REIMBURSABLE contract types?',
    },
    options: [
      { fr: 'Prix forfaitaire ferme (FFP)', en: 'Firm Fixed Price (FFP)' },
      { fr: 'Coûts remboursables avec honoraires fixes (CPFF)', en: 'Cost Plus Fixed Fee (CPFF)' },
      { fr: 'Temps et matériaux (T&M)', en: 'Time & Materials (T&M)' },
      { fr: 'Coûts remboursables avec intéressement (CPIF)', en: 'Cost Plus Incentive Fee (CPIF)' },
    ],
    correct: 1,
    correctMultiple: [1, 3],
    explanation: {
      fr: "CPFF et CPIF sont deux variantes de contrats à coûts remboursables (le risque de coût pèse sur l'acheteur). FFP est à prix fixe (risque fournisseur) ; T&M est une catégorie hybride distincte.",
      en: 'CPFF and CPIF are two variants of cost-reimbursable contracts (cost risk sits with the buyer). FFP is fixed-price (seller risk); T&M is a distinct hybrid category.',
    },
  },
  {
    id: 'xs04',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'people-06',
    question: {
      fr: "Selon le modèle de Tuckman, lesquelles TROIS sont des étapes du développement d'une équipe ?",
      en: "According to Tuckman's model, which THREE are stages of team development?",
    },
    options: [
      { fr: 'Storming (turbulence)', en: 'Storming' },
      { fr: 'Norming (normalisation)', en: 'Norming' },
      { fr: 'Escalating (escalade)', en: 'Escalating' },
      { fr: 'Performing (performance)', en: 'Performing' },
      { fr: 'Negotiating (négociation)', en: 'Negotiating' },
    ],
    correct: 0,
    correctMultiple: [0, 1, 3],
    explanation: {
      fr: "Les cinq étapes réelles sont : forming, storming, norming, performing, adjourning. « Escalating » et « negotiating » ne font pas partie du modèle — des distracteurs plausibles mais inventés.",
      en: 'The five real stages are: forming, storming, norming, performing, adjourning. “Escalating” and “negotiating” are not part of the model — plausible but invented distractors.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xs05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-13',
    question: {
      fr: "Lesquels DEUX de ces facteurs favorisent le choix d'une approche AGILE plutôt que prédictive ?",
      en: 'Which TWO of these factors favor an AGILE approach over predictive?',
    },
    options: [
      { fr: 'Exigences instables, susceptibles d’évoluer fréquemment', en: 'Unstable requirements, likely to evolve frequently' },
      { fr: 'Besoin de retours fréquents du client sur des increments', en: 'Need for frequent customer feedback on increments' },
      { fr: 'Coût de changement tardif extrêmement élevé (ex. génie civil)', en: 'Extremely high cost of late change (e.g., civil engineering)' },
      { fr: 'Obligation réglementaire de documentation exhaustive amont', en: 'Regulatory requirement for exhaustive upfront documentation' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Exigences volatiles et besoin de feedback fréquent orientent vers l'agile. Un coût de changement tardif très élevé ou une documentation amont imposée orientent au contraire vers le prédictif.",
      en: 'Volatile requirements and the need for frequent feedback point to agile. A very high cost of late change or mandated upfront documentation point instead to predictive.',
    },
  },
  {
    id: 'xs06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-07',
    question: {
      fr: "Lesquelles TROIS de ces activités relèvent du CONTRÔLE qualité (et non de l'assurance qualité) ?",
      en: 'Which THREE of these activities belong to quality CONTROL (not quality assurance)?',
    },
    options: [
      { fr: 'Inspecter un livrable par rapport aux critères d’acceptation', en: 'Inspect a deliverable against acceptance criteria' },
      { fr: 'Auditer le respect du processus de revue de code défini', en: 'Audit compliance with the defined code-review process' },
      { fr: 'Mesurer le temps de réponse d’une API en production', en: 'Measure an API’s response time in production' },
      { fr: 'Tester une fonctionnalité par rapport à ses critères d’acceptation', en: 'Test a feature against its acceptance criteria' },
      { fr: 'Former l’équipe à un nouveau standard de codage', en: 'Train the team on a new coding standard' },
    ],
    correct: 0,
    correctMultiple: [0, 2, 3],
    explanation: {
      fr: "Le contrôle qualité porte sur les PRODUITS : inspection, mesure, test. L'audit de processus relève de l'assurance qualité (processus) ; la formation est une action d'amélioration/prévention, en amont des deux.",
      en: 'Quality control is about PRODUCTS: inspection, measurement, testing. Process auditing belongs to quality assurance (process); training is an improvement/prevention action, upstream of both.',
    },
  },
  {
    id: 'xs07',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'people-14',
    question: {
      fr: "Selon la théorie bifactorielle de Herzberg, lesquels DEUX sont des facteurs de MOTIVATION (et non d'hygiène) ?",
      en: "Per Herzberg's two-factor theory, which TWO are MOTIVATORS (not hygiene factors)?",
    },
    options: [
      { fr: 'Le salaire', en: 'Salary' },
      { fr: 'La reconnaissance du travail accompli', en: 'Recognition for accomplished work' },
      { fr: 'Les conditions de travail', en: 'Working conditions' },
      { fr: 'Les responsabilités confiées', en: 'Responsibilities entrusted' },
    ],
    correct: 1,
    correctMultiple: [1, 3],
    explanation: {
      fr: "Reconnaissance et responsabilité sont des motivateurs (engagement durable). Salaire et conditions de travail sont des facteurs d'hygiène : leur absence démotive, mais leur présence n'engage pas durablement.",
      en: 'Recognition and responsibility are motivators (durable engagement). Salary and working conditions are hygiene factors: their absence demotivates, but their presence does not durably engage.',
    },
  },
  {
    id: 'xs08',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-06',
    question: {
      fr: "Lesquels DEUX énoncés sur la marge (float) sont CORRECTS ?",
      en: 'Which TWO statements about float are CORRECT?',
    },
    options: [
      { fr: 'Les activités du chemin critique ont une marge totale nulle', en: 'Critical path activities have zero total float' },
      { fr: 'La marge libre protège la fin du projet, pas le successeur', en: 'Free float protects the project finish, not the successor' },
      { fr: 'La marge totale peut être consommée sans retarder la fin du projet', en: 'Total float can be consumed without delaying the project finish' },
      { fr: 'Le nivellement des ressources ne modifie jamais les marges', en: 'Resource leveling never changes float' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Chemin critique = marge totale nulle. La marge totale protège justement la FIN DU PROJET (on peut la consommer sans la décaler). C'est la marge LIBRE qui protège le successeur — l'énoncé inversé est faux. Le nivellement, lui, consomme des marges.",
      en: 'Critical path = zero total float. Total float precisely protects the PROJECT FINISH (it can be consumed without delaying it). It is FREE float that protects the successor — the reversed statement is wrong. Leveling, in turn, consumes float.',
    },
  },
  {
    id: 'xs09',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Lesquels TROIS sont des exemples d'indicateurs AVANCÉS (leading), utiles pour piloter pendant le déploiement plutôt que constater après coup ?",
      en: 'Which THREE are examples of LEADING indicators, useful to steer during rollout rather than observe after the fact?',
    },
    options: [
      { fr: "Taux d'adoption du nouveau processus", en: 'Adoption rate of the new process' },
      { fr: 'Économies cumulées réalisées sur 12 mois', en: 'Cumulative savings realized over 12 months' },
      { fr: 'Volume de transactions traité via le nouveau circuit', en: 'Transaction volume processed through the new workflow' },
      { fr: "Taux d'abandon de l'ancien système", en: 'Abandonment rate of the old system' },
    ],
    correct: 0,
    correctMultiple: [0, 2, 3],
    explanation: {
      fr: "Adoption, volume traité et abandon de l'ancien système sont mesurables PENDANT le déploiement et prédisent le bénéfice. Les économies cumulées sur 12 mois sont un indicateur RETARDÉ (lagging) : quand il bouge, il est trop tard pour corriger.",
      en: 'Adoption, volume processed and old-system abandonment are measurable DURING rollout and predict the benefit. Cumulative 12-month savings is a LAGGING indicator: by the time it moves, it is too late to correct.',
    },
  },
  {
    id: 'xs10',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-08',
    question: {
      fr: "Dans la priorisation MoSCoW, lesquels DEUX énoncés sont EXACTS ?",
      en: 'In MoSCoW prioritization, which TWO statements are CORRECT?',
    },
    options: [
      { fr: 'Les « Must have » sont non négociables : le produit est inutilisable sans eux', en: '“Must haves” are non-negotiable: the product is unusable without them' },
      { fr: 'Les « Won’t have » sont simplement reportés à une date à définir plus tard dans le projet', en: '“Won’t haves” are simply deferred to a later date within the same project' },
      { fr: 'Les « Could have » sont les premiers sacrifiés en cas de contrainte de capacité', en: '“Could haves” are the first to be sacrificed under capacity constraints' },
      { fr: 'Les catégories doivent toutes recevoir un pourcentage égal du périmètre', en: 'All categories must receive an equal percentage of scope' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Must = non négociable ; Could = premier sacrifié. Won't have est exclu D'EMBLÉE de cette itération/version (pas automatiquement reporté) ; il n'y a pas de règle de répartition égale entre catégories.",
      en: 'Must = non-negotiable; Could = first to go. Won’t have is excluded UPFRONT from this iteration/release (not automatically deferred); there is no rule requiring equal allocation across categories.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xs11',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-03',
    question: {
      fr: "Un risque identifié a été transféré via une assurance. Lesquels DEUX énoncés décrivent correctement la situation résultante ?",
      en: 'An identified risk was transferred via insurance. Which TWO statements correctly describe the resulting situation?',
    },
    options: [
      { fr: "L'impact FINANCIER du risque a été déplacé vers l'assureur", en: 'The FINANCIAL impact of the risk has moved to the insurer' },
      { fr: 'Le risque opérationnel (retard, perturbation) a disparu du projet', en: 'The operational risk (delay, disruption) has disappeared from the project' },
      { fr: "Un risque secondaire peut apparaître (ex. délai de traitement du sinistre)", en: 'A secondary risk may appear (e.g., claim processing delay)' },
      { fr: 'Le registre des risques peut être clôturé pour ce risque', en: 'The risk register can be closed for this risk' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Transférer déplace l'impact FINANCIER, pas l'impact opérationnel (le projet subit toujours le retard/la perturbation le temps que l'assurance s'active). La réponse elle-même peut générer un risque secondaire à documenter — le risque n'est jamais « clos » par le simple fait de le transférer.",
      en: 'Transfer moves the FINANCIAL impact, not the operational one (the project still suffers the delay/disruption while the insurance kicks in). The response itself can generate a secondary risk to document — the risk is never “closed” by the mere act of transferring it.',
    },
  },
  {
    id: 'xs12',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-05',
    question: {
      fr: "BAC = 500 k€, EV = 200 k€, AC = 260 k€, PV = 250 k€. Lesquels TROIS énoncés sont corrects ?",
      en: 'BAC = $500K, EV = $200K, AC = $260K, PV = $250K. Which THREE statements are correct?',
    },
    options: [
      { fr: 'Le projet est en retard sur le planning (SV négatif)', en: 'The project is behind schedule (negative SV)' },
      { fr: 'Le projet est en dépassement de coût (CV négatif)', en: 'The project is over budget (negative CV)' },
      { fr: 'Le CPI est supérieur à 1', en: 'CPI is greater than 1' },
      { fr: "L'EAC en cas d'écart typique est supérieur au BAC", en: 'EAC assuming a typical variance is greater than BAC' },
      { fr: 'Le SPI est supérieur à 1', en: 'SPI is greater than 1' },
    ],
    correct: 0,
    correctMultiple: [0, 1, 3],
    explanation: {
      fr: "SV = 200−250 = −50 (retard) ; CV = 200−260 = −60 (dépassement) ; CPI = 200/260 ≈ 0,77 < 1 (donc l'option CPI>1 est fausse) ; EAC = BAC/CPI = 500/0,77 ≈ 649 k€ > BAC (vrai) ; SPI = 200/250 = 0,8 < 1 (donc faux).",
      en: 'SV = 200−250 = −50 (behind); CV = 200−260 = −60 (over budget); CPI = 200/260 ≈ 0.77 < 1 (so CPI>1 is false); EAC = BAC/CPI = 500/0.77 ≈ $649K > BAC (true); SPI = 200/250 = 0.8 < 1 (so false).',
    },
  },
  {
    id: 'xs13',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-02',
    question: {
      fr: "Lesquelles DEUX affirmations sur le leadership situationnel (Hersey-Blanchard) sont EXACTES ?",
      en: 'Which TWO statements about situational leadership (Hersey-Blanchard) are CORRECT?',
    },
    options: [
      { fr: 'Le style se choisit selon la maturité de la personne POUR LA TÂCHE en question', en: 'The style is chosen based on the person’s readiness FOR THE SPECIFIC TASK' },
      { fr: 'Une fois délégatif atteint avec une équipe, le style ne doit plus jamais redevenir directif', en: 'Once delegating is reached with a team, the style must never become directive again' },
      { fr: 'La maturité situationnelle peut régresser sous stress aigu ou face à une tâche nouvelle', en: 'Situational readiness can regress under acute stress or when facing a new task' },
      { fr: 'Le style directif est toujours contre-productif, quelle que soit la situation', en: 'The directive style is always counterproductive, regardless of the situation' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Le style dépend de la maturité PAR TÂCHE, qui peut régresser (crise, nouveauté) et appeler un retour temporaire à un style plus directif. Prétendre que le directif est « toujours » mauvais ou que le délégatif est irréversible ignore cette nuance.",
      en: 'Style depends on readiness PER TASK, which can regress (crisis, novelty) and call for a temporary return to a more directive style. Claiming directive is “always” bad or delegating is irreversible ignores this nuance.',
    },
  },
  {
    id: 'xs14',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-10',
    question: {
      fr: "Lesquelles TROIS de ces demandes doivent passer par le processus formel de maîtrise des changements (approche prédictive) ?",
      en: 'Which THREE of these requests must go through formal change control (predictive approach)?',
    },
    options: [
      { fr: "Une extension de périmètre demandée par le client", en: 'A scope extension requested by the customer' },
      { fr: "Une action corrective mineure remettant le projet sur sa trajectoire planifiée", en: 'A minor corrective action bringing the project back onto its planned trajectory' },
      { fr: "Un ajustement de la couleur d'un bouton d'interface, jugé insignifiant par un développeur", en: 'A button color tweak a developer considers insignificant' },
      { fr: "Une modification de la date de fin de la référence de base de l'échéancier", en: 'A change to the schedule baseline’s finish date' },
      { fr: "La correction d'un défaut non conforme aux critères d'acceptation initiaux", en: 'A defect repair to meet the original acceptance criteria' },
    ],
    correct: 0,
    correctMultiple: [0, 1, 3],
    explanation: {
      fr: "Extension de périmètre, action corrective et modification de référence de base passent TOUS par la maîtrise des changements (même une action corrective, avec un traitement plus léger, reste tracée). Un ajustement visuel jugé insignifiant par un développeur seul et une réparation de défaut RAMENANT au périmètre déjà approuvé ne modifient pas une référence de base et ne nécessitent pas ce même circuit formel.",
      en: 'Scope extension, corrective action and baseline changes ALL go through change control (even a corrective action, with lighter treatment, stays logged). A visual tweak a lone developer deems insignificant and a defect repair that RESTORES already-approved scope do not touch a baseline and do not need this same formal path.',
    },
  },
  {
    id: 'xs15',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-01',
    question: {
      fr: "Lesquels DEUX comportements relèvent d'une violation du code de déontologie et de conduite professionnelle du PMI® ?",
      en: 'Which TWO behaviors constitute a violation of the PMI® Code of Ethics and Professional Conduct?',
    },
    options: [
      { fr: 'Influencer un auditeur pour requalifier une non-conformité en simple observation', en: 'Influencing an auditor to downgrade a non-conformity to a mere observation' },
      { fr: "Déclarer un conflit d'intérêts avant une décision d'achat", en: 'Disclosing a conflict of interest before a procurement decision' },
      { fr: "Verser un paiement de facilitation via un intermédiaire local pour accélérer un permis", en: 'Making a facilitation payment through a local intermediary to speed up a permit' },
      { fr: 'Escalader un risque dépassant le seuil défini dans le plan de management des risques', en: 'Escalating a risk that exceeds the threshold defined in the risk management plan' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Influencer un audit et verser un paiement de facilitation (même via un intermédiaire) sont deux violations caractérisées d'intégrité. Déclarer un conflit d'intérêts et respecter un seuil d'escalade de gouvernance sont au contraire des BONNES pratiques attendues.",
      en: 'Influencing an audit and making a facilitation payment (even through an intermediary) are two clear integrity violations. Disclosing a conflict of interest and honoring a governance escalation threshold are, on the contrary, expected GOOD practices.',
    },
  },
  {
    id: 'xs16',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-07',
    question: {
      fr: "Sur une carte de contrôle, lesquels DEUX signaux indiquent qu'un processus est probablement HORS CONTRÔLE ?",
      en: 'On a control chart, which TWO signals indicate a process is likely OUT OF CONTROL?',
    },
    options: [
      { fr: 'Un point dépasse la limite de contrôle supérieure ou inférieure', en: 'A point exceeds the upper or lower control limit' },
      { fr: "Tous les points se trouvent à l'intérieur des limites de spécification client", en: 'All points fall within the customer specification limits' },
      { fr: 'Sept points consécutifs se trouvent du même côté de la moyenne (règle des sept)', en: 'Seven consecutive points fall on the same side of the mean (rule of seven)' },
      { fr: "La moyenne du processus est légèrement inférieure à la cible visée", en: 'The process mean is slightly below the target' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Un dépassement des limites de contrôle et la règle des sept (motif non aléatoire) signalent tous deux une cause assignable à investiguer. Être dans les limites de SPÉCIFICATION ne dit rien sur la stabilité STATISTIQUE du processus (deux notions distinctes) ; une moyenne légèrement décalée sans autre signal n'est pas en soi hors contrôle.",
      en: 'Exceeding control limits and the rule of seven (a non-random pattern) both signal an assignable cause to investigate. Being within SPECIFICATION limits says nothing about the process’s STATISTICAL stability (two distinct notions); a slightly offset mean with no other signal is not by itself out of control.',
    },
  },
  {
    id: 'xs17',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'people-08',
    question: {
      fr: "En négociation, lesquelles TROIS pratiques relèvent d'une approche fondée sur des critères OBJECTIFS (negotiation raisonnée) plutôt que sur le rapport de force ?",
      en: 'In negotiation, which THREE practices reflect a principled (objective-criteria) approach rather than a power-based one?',
    },
    options: [
      { fr: "Préparer une alternative crédible (BATNA) avant d'entrer en négociation", en: 'Preparing a credible alternative (BATNA) before entering negotiation' },
      { fr: "Séparer les personnes du problème à résoudre", en: 'Separating the people from the problem to be solved' },
      { fr: "Menacer de rompre la relation pour obtenir une concession rapide", en: 'Threatening to end the relationship to force a quick concession' },
      { fr: "Se concentrer sur les intérêts sous-jacents plutôt que sur les positions affichées", en: 'Focusing on underlying interests rather than stated positions' },
    ],
    correct: 0,
    correctMultiple: [0, 1, 3],
    explanation: {
      fr: "BATNA, séparation personnes/problème et focalisation sur les intérêts sont les piliers de la négociation raisonnée (méthode de Harvard). Menacer la relation est une tactique de pouvoir qui produit des accords fragiles et dégrade la confiance.",
      en: 'BATNA, separating people from the problem, and focusing on interests are the pillars of principled negotiation (Harvard method). Threatening the relationship is a power tactic that produces fragile agreements and erodes trust.',
    },
  },
  {
    id: 'xs18',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-17',
    question: {
      fr: "Pour la clôture d'un projet arrêté PRÉMATURÉMENT (décision stratégique), lesquelles TROIS actions restent requises ?",
      en: 'For the closure of a project terminated PREMATURELY (strategic decision), which THREE actions are still required?',
    },
    options: [
      { fr: 'Documenter et archiver l’état des livrables partiels réutilisables', en: 'Document and archive the state of reusable partial deliverables' },
      { fr: 'Capturer les leçons apprises malgré l’arrêt anticipé', en: 'Capture lessons learned despite the early termination' },
      { fr: 'Libérer formellement les ressources et clore les contrats ouverts', en: 'Formally release resources and close open contracts' },
      { fr: 'Détruire toute trace du projet pour ne pas ternir son bilan', en: 'Destroy all trace of the project so as not to tarnish its record' },
    ],
    correct: 0,
    correctMultiple: [0, 1, 2],
    explanation: {
      fr: "Un arrêt prématuré suit le MÊME processus de clôture qu'une fin normale : archivage des actifs réutilisables, capture des leçons, libération des ressources et clôture contractuelle. Détruire les traces est à l'opposé de la transparence et de l'intendance attendues.",
      en: 'Premature termination follows the SAME closure process as a normal end: archiving reusable assets, capturing lessons, releasing resources and closing contracts. Destroying records is the opposite of the expected transparency and stewardship.',
    },
  },
]
