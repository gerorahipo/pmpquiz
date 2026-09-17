import type { Localized } from '../types'

export type GlossaryCategory = 'formula' | 'agile' | 'process' | 'people'

export interface GlossaryEntry {
  id: string
  category: GlossaryCategory
  term: Localized
  definition: Localized
}

/** Bilingual PMP glossary — key terms and formulas for quick flashcard revision. */
export const GLOSSARY: GlossaryEntry[] = [
  // ─────────────── FORMULAS ───────────────
  {
    id: 'g-ev',
    category: 'formula',
    term: { fr: 'Valeur acquise (EV)', en: 'Earned Value (EV)' },
    definition: {
      fr: 'Valeur du travail réellement accompli, exprimée en budget. EV = % réel achevé × BAC.',
      en: 'Value of the work actually completed, expressed in budget terms. EV = % actually complete × BAC.',
    },
  },
  {
    id: 'g-pv',
    category: 'formula',
    term: { fr: 'Valeur planifiée (PV)', en: 'Planned Value (PV)' },
    definition: {
      fr: 'Budget prévu pour le travail censé être achevé à une date donnée.',
      en: 'Budget authorized for the work scheduled to be completed by a given date.',
    },
  },
  {
    id: 'g-ac',
    category: 'formula',
    term: { fr: 'Coût réel (AC)', en: 'Actual Cost (AC)' },
    definition: {
      fr: 'Coût réellement encouru pour le travail accompli à une date donnée.',
      en: 'Actual cost incurred for the work performed by a given date.',
    },
  },
  {
    id: 'g-sv',
    category: 'formula',
    term: { fr: 'Écart de délai (SV)', en: 'Schedule Variance (SV)' },
    definition: {
      fr: 'SV = EV − PV. Négatif = en retard sur le planning.',
      en: 'SV = EV − PV. Negative = behind schedule.',
    },
  },
  {
    id: 'g-cv',
    category: 'formula',
    term: { fr: 'Écart de coût (CV)', en: 'Cost Variance (CV)' },
    definition: {
      fr: 'CV = EV − AC. Négatif = dépassement de budget.',
      en: 'CV = EV − AC. Negative = over budget.',
    },
  },
  {
    id: 'g-spi',
    category: 'formula',
    term: { fr: 'Indice de performance des délais (SPI)', en: 'Schedule Performance Index (SPI)' },
    definition: {
      fr: 'SPI = EV / PV. < 1 = en retard ; > 1 = en avance.',
      en: 'SPI = EV / PV. < 1 = behind schedule; > 1 = ahead.',
    },
  },
  {
    id: 'g-cpi',
    category: 'formula',
    term: { fr: 'Indice de performance des coûts (CPI)', en: 'Cost Performance Index (CPI)' },
    definition: {
      fr: 'CPI = EV / AC. < 1 = dépassement ; > 1 = sous le budget.',
      en: 'CPI = EV / AC. < 1 = over budget; > 1 = under budget.',
    },
  },
  {
    id: 'g-bac',
    category: 'formula',
    term: { fr: 'Budget à l’achèvement (BAC)', en: 'Budget at Completion (BAC)' },
    definition: {
      fr: 'Budget total approuvé pour l’ensemble du projet (référence de base des coûts).',
      en: 'Total approved budget for the whole project (the cost baseline).',
    },
  },
  {
    id: 'g-eac',
    category: 'formula',
    term: { fr: 'Coût final estimé (EAC)', en: 'Estimate at Completion (EAC)' },
    definition: {
      fr: 'Coût total prévu du projet. Si la tendance continue : EAC = BAC / CPI.',
      en: 'Expected total project cost. If the trend continues: EAC = BAC / CPI.',
    },
  },
  {
    id: 'g-etc',
    category: 'formula',
    term: { fr: 'Coût du travail restant (ETC)', en: 'Estimate to Complete (ETC)' },
    definition: {
      fr: 'Coût prévu du travail restant. ETC = EAC − AC.',
      en: 'Expected cost of the remaining work. ETC = EAC − AC.',
    },
  },
  {
    id: 'g-vac',
    category: 'formula',
    term: { fr: 'Écart à l’achèvement (VAC)', en: 'Variance at Completion (VAC)' },
    definition: {
      fr: 'Écart de budget prévu à la fin. VAC = BAC − EAC.',
      en: 'Expected budget variance at the end. VAC = BAC − EAC.',
    },
  },
  {
    id: 'g-tcpi',
    category: 'formula',
    term: { fr: 'Indice de performance à achever (TCPI)', en: 'To-Complete Performance Index (TCPI)' },
    definition: {
      fr: 'Efficacité requise sur le travail restant. TCPI = (BAC − EV) / (BAC − AC).',
      en: 'Efficiency required on the remaining work. TCPI = (BAC − EV) / (BAC − AC).',
    },
  },
  {
    id: 'g-pert',
    category: 'formula',
    term: { fr: 'Estimation PERT (à trois points)', en: 'PERT (three-point) estimate' },
    definition: {
      fr: 'Moyenne pondérée bêta : (Optimiste + 4 × Probable + Pessimiste) / 6.',
      en: 'Beta-weighted average: (Optimistic + 4 × Most likely + Pessimistic) / 6.',
    },
  },
  {
    id: 'g-emv',
    category: 'formula',
    term: { fr: 'Valeur monétaire attendue (EMV)', en: 'Expected Monetary Value (EMV)' },
    definition: {
      fr: 'EMV = probabilité × impact. Base de l’analyse d’arbre de décision des risques.',
      en: 'EMV = probability × impact. Basis of risk decision-tree analysis.',
    },
  },
  {
    id: 'g-channels',
    category: 'formula',
    term: { fr: 'Canaux de communication', en: 'Communication channels' },
    definition: {
      fr: 'Nombre de canaux = n(n − 1) / 2, où n est le nombre de personnes.',
      en: 'Number of channels = n(n − 1) / 2, where n is the number of people.',
    },
  },
  {
    id: 'g-float',
    category: 'formula',
    term: { fr: 'Marge totale (float)', en: 'Total float' },
    definition: {
      fr: 'Retard possible d’une activité sans retarder la fin du projet. = LS − ES (ou LF − EF).',
      en: 'Delay an activity can absorb without delaying project finish. = LS − ES (or LF − EF).',
    },
  },
  {
    id: 'g-pta',
    category: 'formula',
    term: { fr: 'Point d’hypothèse totale (PTA)', en: 'Point of Total Assumption (PTA)' },
    definition: {
      fr: 'Contrat FPIF : coût cible + (plafond − prix cible) / part acheteur. Au-delà, le fournisseur porte tout le surcoût.',
      en: 'FPIF contract: target cost + (ceiling − target price) / buyer share. Beyond it, the seller bears all overrun.',
    },
  },

  // ─────────────── AGILE ───────────────
  {
    id: 'g-velocity',
    category: 'agile',
    term: { fr: 'Vélocité', en: 'Velocity' },
    definition: {
      fr: 'Quantité de travail (points) qu’une équipe achève en moyenne par itération.',
      en: 'Amount of work (points) a team completes on average per iteration.',
    },
  },
  {
    id: 'g-backlog',
    category: 'agile',
    term: { fr: 'Backlog produit', en: 'Product backlog' },
    definition: {
      fr: 'Liste ordonnée par valeur de tout le travail potentiel, gérée par le Product Owner.',
      en: 'Value-ordered list of all potential work, managed by the Product Owner.',
    },
  },
  {
    id: 'g-dod',
    category: 'agile',
    term: { fr: 'Définition de terminé (DoD)', en: 'Definition of Done (DoD)' },
    definition: {
      fr: 'Standard de qualité générique qu’un incrément doit respecter pour être « terminé ».',
      en: 'Generic quality standard an increment must meet to be considered “done”.',
    },
  },
  {
    id: 'g-dor',
    category: 'agile',
    term: { fr: 'Définition de prêt (DoR)', en: 'Definition of Ready (DoR)' },
    definition: {
      fr: 'Critères qu’un élément de backlog doit remplir avant d’entrer dans un sprint.',
      en: 'Criteria a backlog item must meet before it can enter a sprint.',
    },
  },
  {
    id: 'g-wip',
    category: 'agile',
    term: { fr: 'Limite de travail en cours (WIP)', en: 'Work In Progress (WIP) limit' },
    definition: {
      fr: 'Kanban : plafond du nombre d’éléments simultanés dans une étape, pour fluidifier le flux.',
      en: 'Kanban: cap on the number of concurrent items in a stage, to smooth flow.',
    },
  },
  {
    id: 'g-leadtime',
    category: 'agile',
    term: { fr: 'Délai de traversée (lead time)', en: 'Lead time' },
    definition: {
      fr: 'Temps total entre la demande d’un élément et sa livraison.',
      en: 'Total time from when an item is requested to when it is delivered.',
    },
  },
  {
    id: 'g-cycletime',
    category: 'agile',
    term: { fr: 'Temps de cycle (cycle time)', en: 'Cycle time' },
    definition: {
      fr: 'Temps de traitement actif d’un élément, une fois le travail commencé.',
      en: 'Active processing time of an item, once work has started.',
    },
  },
  {
    id: 'g-burndown',
    category: 'agile',
    term: { fr: 'Graphique d’avancement (burndown)', en: 'Burndown chart' },
    definition: {
      fr: 'Montre le travail restant qui décroît vers zéro au fil du temps.',
      en: 'Shows remaining work decreasing toward zero over time.',
    },
  },
  {
    id: 'g-burnup',
    category: 'agile',
    term: { fr: 'Graphique cumulatif (burnup)', en: 'Burnup chart' },
    definition: {
      fr: 'Montre le travail achevé qui croît, avec une ligne de périmètre total — révèle la dérive de périmètre.',
      en: 'Shows completed work rising, with a total-scope line — reveals scope creep.',
    },
  },
  {
    id: 'g-spike',
    category: 'agile',
    term: { fr: 'Spike', en: 'Spike' },
    definition: {
      fr: 'Activité de recherche courte et bornée pour réduire une incertitude technique.',
      en: 'A short, time-boxed research activity to reduce a technical uncertainty.',
    },
  },
  {
    id: 'g-servant',
    category: 'agile',
    term: { fr: 'Leadership au service (servant leadership)', en: 'Servant leadership' },
    definition: {
      fr: 'Style où le leader lève les obstacles, protège et développe l’équipe plutôt que commander.',
      en: 'Style where the leader removes impediments, protects and grows the team rather than commanding.',
    },
  },
  {
    id: 'g-timebox',
    category: 'agile',
    term: { fr: 'Boîte de temps (timebox)', en: 'Timebox' },
    definition: {
      fr: 'Durée fixe et non extensible allouée à une activité ou un événement.',
      en: 'A fixed, non-extendable duration allocated to an activity or event.',
    },
  },
  {
    id: 'g-wsjf',
    category: 'agile',
    term: { fr: 'WSJF (Weighted Shortest Job First)', en: 'WSJF (Weighted Shortest Job First)' },
    definition: {
      fr: 'Priorisation = coût du délai / taille du travail. Le ratio le plus élevé passe en premier.',
      en: 'Prioritization = cost of delay / job size. Highest ratio goes first.',
    },
  },

  // ─────────────── PROCESS ───────────────
  {
    id: 'g-critpath',
    category: 'process',
    term: { fr: 'Chemin critique', en: 'Critical path' },
    definition: {
      fr: 'Séquence d’activités la plus longue du réseau ; détermine la durée minimale du projet (marge nulle).',
      en: 'Longest sequence of activities in the network; sets the minimum project duration (zero float).',
    },
  },
  {
    id: 'g-crashing',
    category: 'process',
    term: { fr: 'Compression (crashing)', en: 'Crashing' },
    definition: {
      fr: 'Ajouter des ressources au chemin critique pour raccourcir la durée — augmente le coût.',
      en: 'Adding resources to the critical path to shorten duration — increases cost.',
    },
  },
  {
    id: 'g-fasttrack',
    category: 'process',
    term: { fr: 'Exécution accélérée (fast tracking)', en: 'Fast tracking' },
    definition: {
      fr: 'Paralléliser des activités normalement séquentielles — augmente le risque de reprise.',
      en: 'Overlapping normally sequential activities — increases rework risk.',
    },
  },
  {
    id: 'g-baseline',
    category: 'process',
    term: { fr: 'Référence de base (baseline)', en: 'Baseline' },
    definition: {
      fr: 'Version approuvée du périmètre, de l’échéancier ou du coût, modifiable uniquement par maîtrise des changements.',
      en: 'Approved version of scope, schedule or cost, changed only through change control.',
    },
  },
  {
    id: 'g-ccb',
    category: 'process',
    term: { fr: 'Comité de contrôle des changements (CCB)', en: 'Change Control Board (CCB)' },
    definition: {
      fr: 'Instance qui approuve ou rejette formellement les demandes de changement.',
      en: 'Body that formally approves or rejects change requests.',
    },
  },
  {
    id: 'g-contingency',
    category: 'process',
    term: { fr: 'Réserve pour aléas', en: 'Contingency reserve' },
    definition: {
      fr: 'Budget/temps pour les risques identifiés (« known unknowns »), inclus dans la référence de base.',
      en: 'Budget/time for identified risks (“known unknowns”), included in the baseline.',
    },
  },
  {
    id: 'g-mgmtreserve',
    category: 'process',
    term: { fr: 'Réserve de management', en: 'Management reserve' },
    definition: {
      fr: 'Budget/temps pour les imprévus (« unknown unknowns »), hors référence de base, contrôlé par la direction.',
      en: 'Budget/time for unforeseen work (“unknown unknowns”), outside the baseline, controlled by management.',
    },
  },
  {
    id: 'g-scopecreep',
    category: 'process',
    term: { fr: 'Dérive de périmètre (scope creep)', en: 'Scope creep' },
    definition: {
      fr: 'Ajout de travail non approuvé qui s’infiltre sans passer par la maîtrise des changements.',
      en: 'Unapproved work that creeps in without going through change control.',
    },
  },
  {
    id: 'g-goldplating',
    category: 'process',
    term: { fr: 'Sur-qualité (gold plating)', en: 'Gold plating' },
    definition: {
      fr: 'Ajouter des fonctionnalités non demandées — du gaspillage non arbitré par le client.',
      en: 'Adding unrequested features — waste not arbitrated by the customer.',
    },
  },
  {
    id: 'g-wbs',
    category: 'process',
    term: { fr: 'Structure de découpage (WBS)', en: 'Work Breakdown Structure (WBS)' },
    definition: {
      fr: 'Décomposition hiérarchique de 100 % du périmètre en lots de travaux.',
      en: 'Hierarchical decomposition of 100% of the scope into work packages.',
    },
  },
  {
    id: 'g-raci',
    category: 'process',
    term: { fr: 'Matrice RACI', en: 'RACI matrix' },
    definition: {
      fr: 'Responsible, Accountable, Consulted, Informed — clarifie les rôles (un seul « A » par tâche).',
      en: 'Responsible, Accountable, Consulted, Informed — clarifies roles (one “A” per task).',
    },
  },
  {
    id: 'g-costofquality',
    category: 'process',
    term: { fr: 'Coût de la qualité (CoQ)', en: 'Cost of Quality (CoQ)' },
    definition: {
      fr: 'Prévention < évaluation < défaillance interne < défaillance externe (coût croissant).',
      en: 'Prevention < appraisal < internal failure < external failure (increasing cost).',
    },
  },
  {
    id: 'g-secondaryrisk',
    category: 'process',
    term: { fr: 'Risque secondaire', en: 'Secondary risk' },
    definition: {
      fr: 'Nouveau risque créé par la mise en œuvre d’une réponse à un autre risque.',
      en: 'A new risk created by implementing a response to another risk.',
    },
  },
  {
    id: 'g-residualrisk',
    category: 'process',
    term: { fr: 'Risque résiduel', en: 'Residual risk' },
    definition: {
      fr: 'Ce qui reste d’un risque après application de la réponse planifiée.',
      en: 'What remains of a risk after the planned response is applied.',
    },
  },
  {
    id: 'g-rollingwave',
    category: 'process',
    term: { fr: 'Planification par vagues', en: 'Rolling wave planning' },
    definition: {
      fr: 'Détailler finement le travail proche, garder le lointain en macro, affiner progressivement.',
      en: 'Detail near-term work finely, keep distant work high-level, refine progressively.',
    },
  },

  // ─────────────── PEOPLE ───────────────
  {
    id: 'g-tuckman',
    category: 'people',
    term: { fr: 'Modèle de Tuckman', en: 'Tuckman ladder' },
    definition: {
      fr: 'Phases de développement d’équipe : forming, storming, norming, performing, adjourning.',
      en: 'Team development stages: forming, storming, norming, performing, adjourning.',
    },
  },
  {
    id: 'g-psafety',
    category: 'people',
    term: { fr: 'Sécurité psychologique', en: 'Psychological safety' },
    definition: {
      fr: 'Climat où chacun peut exprimer erreur, doute ou désaccord sans crainte de blâme.',
      en: 'Climate where anyone can voice a mistake, doubt or disagreement without fear of blame.',
    },
  },
  {
    id: 'g-charter',
    category: 'people',
    term: { fr: 'Charte d’équipe', en: 'Team charter' },
    definition: {
      fr: 'Accord co-écrit fixant valeurs, règles de communication et de décision de l’équipe.',
      en: 'Co-authored agreement setting the team’s values, communication and decision rules.',
    },
  },
  {
    id: 'g-herzberg',
    category: 'people',
    term: { fr: 'Théorie de Herzberg', en: 'Herzberg’s two-factor theory' },
    definition: {
      fr: 'Facteurs d’hygiène (salaire…) évitent l’insatisfaction ; motivateurs (reconnaissance…) engagent réellement.',
      en: 'Hygiene factors (pay…) prevent dissatisfaction; motivators (recognition…) truly engage.',
    },
  },
  {
    id: 'g-conflict',
    category: 'people',
    term: { fr: 'Résolution de conflit (collaborer)', en: 'Conflict resolution (collaborate)' },
    definition: {
      fr: 'Collaborer / résoudre le problème est l’approche gagnant-gagnant préférée à l’examen.',
      en: 'Collaborating / problem-solving is the win-win approach the exam prefers.',
    },
  },
  {
    id: 'g-salience',
    category: 'people',
    term: { fr: 'Modèle de saillance', en: 'Salience model' },
    definition: {
      fr: 'Classe les parties prenantes selon pouvoir, légitimité et urgence.',
      en: 'Classifies stakeholders by power, legitimacy and urgency.',
    },
  },

  // ─────────────── FORMULAS (batch 2 — financial & schedule) ───────────────
  {
    id: 'g-npv',
    category: 'formula',
    term: { fr: 'Valeur actuelle nette (VAN)', en: 'Net present value (NPV)' },
    definition: {
      fr: 'Somme des flux de trésorerie futurs actualisés moins l’investissement initial. Positive = création de valeur.',
      en: 'Sum of discounted future cash flows minus the initial investment. Positive = value creation.',
    },
  },
  {
    id: 'g-roi',
    category: 'formula',
    term: { fr: 'Retour sur investissement (ROI)', en: 'Return on investment (ROI)' },
    definition: {
      fr: 'Gain ou perte d’un investissement rapporté à son coût. Accepter si > 0.',
      en: 'Gain or loss of an investment relative to its cost. Accept if > 0.',
    },
  },
  {
    id: 'g-irr',
    category: 'formula',
    term: { fr: 'Taux de rentabilité interne (TRI)', en: 'Internal rate of return (IRR)' },
    definition: {
      fr: 'Taux d’actualisation pour lequel la VAN vaut zéro. Accepter si > coût du capital.',
      en: 'Discount rate at which NPV equals zero. Accept if > cost of capital.',
    },
  },
  {
    id: 'g-bcr',
    category: 'formula',
    term: { fr: 'Ratio bénéfices/coûts (BCR)', en: 'Benefit-cost ratio (BCR)' },
    definition: {
      fr: 'Bénéfices actualisés ÷ coûts actualisés. > 1 = projet rentable.',
      en: 'Discounted benefits ÷ discounted costs. > 1 = profitable project.',
    },
  },
  {
    id: 'g-presentvalue',
    category: 'formula',
    term: { fr: 'Valeur actuelle (financière)', en: 'Present value (financial)' },
    definition: {
      fr: 'Valeur aujourd’hui d’un flux de trésorerie futur. Ne pas confondre avec la Valeur Planifiée (PV) de l’EVM — même sigle, notion différente.',
      en: 'Today’s worth of a future cash flow. Do not confuse with EVM’s Planned Value (PV) — same acronym, different concept.',
    },
  },
  {
    id: 'g-payback',
    category: 'formula',
    term: { fr: 'Délai de récupération', en: 'Payback period' },
    definition: {
      fr: 'Temps nécessaire pour récupérer l’investissement initial. Ignore la valeur temps de l’argent.',
      en: 'Time needed to recover the initial investment. Ignores the time value of money.',
    },
  },
  {
    id: 'g-tripleconstraint',
    category: 'formula',
    term: { fr: 'Triple contrainte', en: 'Triple constraint' },
    definition: {
      fr: 'Périmètre, délai et coût s’équilibrent mutuellement : modifier l’un affecte au moins un autre.',
      en: 'Scope, schedule and cost balance each other: changing one affects at least one other.',
    },
  },
  {
    id: 'g-8020',
    category: 'formula',
    term: { fr: 'Règle des 80/20 (Pareto)', en: '80/20 rule (Pareto)' },
    definition: {
      fr: '80 % des effets proviennent souvent de 20 % des causes — sert à prioriser les causes à traiter.',
      en: '80% of effects often come from 20% of causes — used to prioritize which causes to address.',
    },
  },
  {
    id: 'g-freefloat',
    category: 'formula',
    term: { fr: 'Marge libre', en: 'Free float' },
    definition: {
      fr: 'Retard qu’une activité peut absorber sans retarder la date de DÉBUT au plus tôt de l’activité suivante.',
      en: 'Delay an activity can absorb without delaying the early start of the NEXT activity.',
    },
  },
  {
    id: 'g-directcost',
    category: 'formula',
    term: { fr: 'Coûts directs vs indirects', en: 'Direct vs indirect costs' },
    definition: {
      fr: 'Direct : imputable au seul projet (salaires de l’équipe). Indirect : partagé entre plusieurs projets (loyer, administration).',
      en: 'Direct: attributable to this project alone (team salaries). Indirect: shared across projects (rent, administration).',
    },
  },

  // ─────────────── PROCESS (batch 2 — tools, docs, procurement) ───────────────
  {
    id: 'g-opa',
    category: 'process',
    term: { fr: 'Actifs organisationnels (OPA)', en: 'Organizational process assets (OPA)' },
    definition: {
      fr: 'Plans, politiques, procédures et connaissances réutilisables de l’organisation — on peut les adapter.',
      en: 'The organization’s reusable plans, policies, procedures and knowledge — you can tailor them.',
    },
  },
  {
    id: 'g-eef',
    category: 'process',
    term: { fr: 'Facteurs environnementaux de l’entreprise (EEF)', en: 'Enterprise environmental factors (EEF)' },
    definition: {
      fr: 'Conditions internes ou externes imposées au projet (culture, marché, réglementation) — on ne les choisit pas.',
      en: 'Internal or external conditions imposed on the project (culture, market, regulation) — you do not choose them.',
    },
  },
  {
    id: 'g-ishikawa',
    category: 'process',
    term: { fr: 'Diagramme d’Ishikawa', en: 'Ishikawa diagram' },
    definition: {
      fr: 'Diagramme causes-effet (« arête de poisson ») pour remonter à la cause racine d’un défaut.',
      en: 'Cause-and-effect (“fishbone”) diagram to trace a defect back to its root cause.',
    },
  },
  {
    id: 'g-gantt',
    category: 'process',
    term: { fr: 'Diagramme de Gantt', en: 'Gantt chart' },
    definition: {
      fr: 'Représentation en barres horizontales de l’échéancier du projet dans le temps.',
      en: 'Horizontal-bar representation of the project schedule over time.',
    },
  },
  {
    id: 'g-swot',
    category: 'process',
    term: { fr: 'Analyse SWOT', en: 'SWOT analysis' },
    definition: {
      fr: 'Forces, faiblesses, opportunités, menaces — utile pour identifier des risques et options stratégiques.',
      en: 'Strengths, weaknesses, opportunities, threats — useful to surface risks and strategic options.',
    },
  },
  {
    id: 'g-montecarlo',
    category: 'process',
    term: { fr: 'Simulation de Monte-Carlo', en: 'Monte Carlo simulation' },
    definition: {
      fr: 'Simulation répétée qui modélise la distribution des résultats possibles d’un projet (coût, délai).',
      en: 'Repeated simulation modeling the distribution of a project’s possible outcomes (cost, schedule).',
    },
  },
  {
    id: 'g-rtm',
    category: 'process',
    term: { fr: 'Matrice de traçabilité des exigences (RTM)', en: 'Requirements traceability matrix (RTM)' },
    definition: {
      fr: 'Relie chaque exigence à son origine et aux livrables qui la satisfont, du début à la fin du projet.',
      en: 'Links each requirement to its origin and to the deliverables that satisfy it, start to finish.',
    },
  },
  {
    id: 'g-powerinterest',
    category: 'process',
    term: { fr: 'Grille pouvoir/intérêt', en: 'Power/interest grid' },
    definition: {
      fr: 'Classe les parties prenantes selon leur pouvoir et leur intérêt pour prioriser l’engagement.',
      en: 'Classifies stakeholders by power and interest to prioritize engagement effort.',
    },
  },
  {
    id: 'g-riskregister',
    category: 'process',
    term: { fr: 'Registre des risques', en: 'Risk register' },
    definition: {
      fr: 'Document listant les risques identifiés, leur propriétaire, leur analyse et leurs réponses planifiées.',
      en: 'Document listing identified risks, their owner, analysis and planned responses.',
    },
  },
  {
    id: 'g-reserveanalysis',
    category: 'process',
    term: { fr: 'Analyse de la réserve', en: 'Reserve analysis' },
    definition: {
      fr: 'Évalue si les réserves de budget et de délai restantes suffisent à couvrir le risque résiduel du projet.',
      en: 'Assesses whether remaining budget and schedule reserves are enough to cover the project’s residual risk.',
    },
  },
  {
    id: 'g-sensitivity',
    category: 'process',
    term: { fr: 'Analyse de sensibilité', en: 'Sensitivity analysis' },
    definition: {
      fr: 'Mesure l’impact de la variation d’UNE seule variable sur le résultat du projet, toutes choses égales par ailleurs.',
      en: 'Measures the impact of varying ONE single variable on the project outcome, all else held equal.',
    },
  },
  {
    id: 'g-5whys',
    category: 'process',
    term: { fr: 'Technique des 5 pourquoi', en: '5 Whys technique' },
    definition: {
      fr: 'Questionner « pourquoi » en cascade pour remonter d’un symptôme à sa cause racine.',
      en: 'Cascading “why” questions to trace a symptom back to its root cause.',
    },
  },
  {
    id: 'g-sow',
    category: 'process',
    term: { fr: 'Énoncé des travaux (SOW)', en: 'Statement of work (SOW)' },
    definition: {
      fr: 'Description narrative des produits, services ou résultats à fournir, souvent dans un cadre contractuel.',
      en: 'Narrative description of the products, services or results to be delivered, often contractual.',
    },
  },
  {
    id: 'g-rfp',
    category: 'process',
    term: { fr: 'Demande de proposition (RFP)', en: 'Request for proposal (RFP)' },
    definition: {
      fr: 'Document demandant une proposition détaillée (approche + prix) à des fournisseurs potentiels.',
      en: 'Document requesting a detailed proposal (approach + price) from potential sellers.',
    },
  },
  {
    id: 'g-rfi',
    category: 'process',
    term: { fr: 'Demande d’information (RFI)', en: 'Request for information (RFI)' },
    definition: {
      fr: 'Document demandant des informations générales à des fournisseurs potentiels, sans engagement d’achat.',
      en: 'Document requesting general information from potential sellers, with no purchase commitment.',
    },
  },
  {
    id: 'g-ffp',
    category: 'process',
    term: { fr: 'Contrat à prix forfaitaire ferme (FFP)', en: 'Firm fixed price contract (FFP)' },
    definition: {
      fr: 'Prix fixe non révisable ; tout risque de dépassement de coût est porté par le vendeur.',
      en: 'Fixed, non-adjustable price; all cost-overrun risk sits with the seller.',
    },
  },
  {
    id: 'g-cpff',
    category: 'process',
    term: { fr: 'Contrat à coûts remboursables + honoraires fixes (CPFF)', en: 'Cost-plus-fixed-fee contract (CPFF)' },
    definition: {
      fr: 'L’acheteur rembourse les coûts et verse des honoraires fixes ; le risque de dépassement est côté acheteur.',
      en: 'The buyer reimburses costs and pays a fixed fee; overrun risk sits with the buyer.',
    },
  },
  {
    id: 'g-configmgmt',
    category: 'process',
    term: { fr: 'Système de gestion de la configuration', en: 'Configuration management system' },
    definition: {
      fr: 'Contrôle et documente les versions des livrables et documents du projet au fil du temps.',
      en: 'Controls and documents the versions of the project’s deliverables and documents over time.',
    },
  },
  {
    id: 'g-controlchart',
    category: 'process',
    term: { fr: 'Cartes de contrôle', en: 'Control charts' },
    definition: {
      fr: 'Suivent la stabilité d’un processus dans le temps via une moyenne et des limites de contrôle statistiques.',
      en: 'Track a process’s stability over time using a mean and statistical control limits.',
    },
  },
  {
    id: 'g-coneofuncertainty',
    category: 'process',
    term: { fr: 'Cône d’incertitude', en: 'Cone of uncertainty' },
    definition: {
      fr: 'L’incertitude sur les estimations diminue au fil du projet, à mesure que l’information s’affine.',
      en: 'Estimate uncertainty narrows as the project progresses and information sharpens.',
    },
  },
  {
    id: 'g-assumptionlog',
    category: 'process',
    term: { fr: 'Journal des hypothèses', en: 'Assumption log' },
    definition: {
      fr: 'Registre des hypothèses et contraintes du projet, à valider et réévaluer en continu.',
      en: 'Register of the project’s assumptions and constraints, validated and reassessed continuously.',
    },
  },
  {
    id: 'g-issuelog',
    category: 'process',
    term: { fr: 'Journal des points à traiter', en: 'Issue log' },
    definition: {
      fr: 'Registre des problèmes actifs du projet nécessitant une action ou une décision.',
      en: 'Register of the project’s active issues requiring action or a decision.',
    },
  },
  {
    id: 'g-changelog',
    category: 'process',
    term: { fr: 'Journal des changements', en: 'Change log' },
    definition: {
      fr: 'Historique des demandes de changement et de leur statut (approuvé, rejeté, en attente).',
      en: 'History of change requests and their status (approved, rejected, pending).',
    },
  },
  {
    id: 'g-workauth',
    category: 'process',
    term: { fr: 'Système d’autorisation du travail', en: 'Work authorization system' },
    definition: {
      fr: 'Procédure formelle qui autorise le démarrage d’un lot de travail donné.',
      en: 'Formal procedure that authorizes a given work package to begin.',
    },
  },
  {
    id: 'g-airegister',
    category: 'process',
    term: { fr: 'Registre d’usage de l’IA', en: 'AI usage register' },
    definition: {
      fr: 'Trace les cas d’usage, contenus générés et décisions assistées par l’IA sur le projet, pour audit et traçabilité.',
      en: 'Tracks AI use cases, generated content and AI-assisted decisions on the project, for audit and traceability.',
    },
  },
  {
    id: 'g-aihumanvalidation',
    category: 'process',
    term: { fr: 'Validation humaine (IA)', en: 'Human validation (AI)' },
    definition: {
      fr: 'Principe selon lequel tout contenu ou décision assisté par IA doit être revu et validé par une personne responsable avant usage.',
      en: 'Principle that any AI-assisted content or decision must be reviewed and validated by an accountable person before use.',
    },
  },
  {
    id: 'g-aitraceability',
    category: 'process',
    term: { fr: 'Traçabilité des décisions assistées par IA', en: 'Traceability of AI-assisted decisions' },
    definition: {
      fr: 'Capacité à retracer quelles données et quel outil d’IA ont contribué à une décision ou un livrable du projet.',
      en: 'Ability to trace which data and AI tool contributed to a project decision or deliverable.',
    },
  },

  // ─────────────── AGILE (batch 2) ───────────────
  {
    id: 'g-invest',
    category: 'agile',
    term: { fr: 'Critères INVEST', en: 'INVEST criteria' },
    definition: {
      fr: 'Une bonne user story est Indépendante, Négociable, de Valeur, Estimable, Small (petite), Testable.',
      en: 'A good user story is Independent, Negotiable, of Value, Estimable, Small, Testable.',
    },
  },
  {
    id: 'g-deep',
    category: 'agile',
    term: { fr: 'Critères DEEP', en: 'DEEP criteria' },
    definition: {
      fr: 'Un bon backlog est Détaillé de façon appropriée, Estimé, Émergent, Priorisé.',
      en: 'A good backlog is appropriately Detailed, Estimated, Emergent, Prioritized.',
    },
  },
  {
    id: 'g-planningpoker',
    category: 'agile',
    term: { fr: 'Planning Poker', en: 'Planning Poker' },
    definition: {
      fr: 'Technique d’estimation collaborative par cartes, pour converger sur une taille relative sans ancrage.',
      en: 'Card-based collaborative estimation technique, converging on relative size without anchoring.',
    },
  },
  {
    id: 'g-fibonacci',
    category: 'agile',
    term: { fr: 'Suite de Fibonacci (estimation)', en: 'Fibonacci sequence (estimation)' },
    definition: {
      fr: 'Séquence (1, 2, 3, 5, 8, 13…) utilisée en story points pour refléter l’incertitude croissante.',
      en: 'Sequence (1, 2, 3, 5, 8, 13…) used in story points to reflect growing uncertainty.',
    },
  },
  {
    id: 'g-kanbanboard',
    category: 'agile',
    term: { fr: 'Tableau Kanban', en: 'Kanban board' },
    definition: {
      fr: 'Visualise le flux de travail par colonnes (à faire / en cours / terminé) avec des limites de travail en cours.',
      en: 'Visualizes workflow through columns (to do / doing / done) with work-in-progress limits.',
    },
  },
  {
    id: 'g-scrum',
    category: 'agile',
    term: { fr: 'Scrum', en: 'Scrum' },
    definition: {
      fr: 'Cadre agile itératif organisé en sprints, avec rôles, événements et artefacts définis.',
      en: 'Iterative agile framework organized in sprints, with defined roles, events and artifacts.',
    },
  },
  {
    id: 'g-scrummaster',
    category: 'agile',
    term: { fr: 'Scrum Master', en: 'Scrum Master' },
    definition: {
      fr: 'Facilite le cadre Scrum, lève les obstacles et protège l’équipe — sans autorité hiérarchique.',
      en: 'Facilitates the Scrum framework, removes impediments and shields the team — with no hierarchical authority.',
    },
  },
  {
    id: 'g-productowner',
    category: 'agile',
    term: { fr: 'Product Owner', en: 'Product Owner' },
    definition: {
      fr: 'Responsable de maximiser la valeur du produit et de prioriser le backlog.',
      en: 'Responsible for maximizing product value and prioritizing the backlog.',
    },
  },
  {
    id: 'g-sprintreview',
    category: 'agile',
    term: { fr: 'Revue de sprint', en: 'Sprint review' },
    definition: {
      fr: 'Événement de fin de sprint où l’équipe présente l’incrément aux parties prenantes pour recueillir leurs retours.',
      en: 'End-of-sprint event where the team presents the increment to stakeholders for feedback.',
    },
  },
  {
    id: 'g-sprintretro',
    category: 'agile',
    term: { fr: 'Rétrospective de sprint', en: 'Sprint retrospective' },
    definition: {
      fr: 'Événement où l’équipe examine son fonctionnement et identifie des améliorations pour le prochain sprint.',
      en: 'Event where the team examines how it worked and identifies improvements for the next sprint.',
    },
  },
  {
    id: 'g-dailystandup',
    category: 'agile',
    term: { fr: 'Mêlée quotidienne (daily standup)', en: 'Daily standup' },
    definition: {
      fr: 'Point de synchronisation quotidien, bref et limité dans le temps, pour l’équipe de développement.',
      en: 'Brief, time-boxed daily synchronization for the development team.',
    },
  },
  {
    id: 'g-mvp',
    category: 'agile',
    term: { fr: 'Produit minimal viable (MVP)', en: 'Minimum viable product (MVP)' },
    definition: {
      fr: 'Version la plus simple d’un produit permettant de tester une hypothèse et d’apprendre rapidement.',
      en: 'The simplest version of a product that lets you test a hypothesis and learn quickly.',
    },
  },
  {
    id: 'g-safe',
    category: 'agile',
    term: { fr: 'SAFe (Scaled Agile Framework)', en: 'SAFe (Scaled Agile Framework)' },
    definition: {
      fr: 'Cadre pour appliquer l’agilité à grande échelle, sur plusieurs équipes et trains de mise en production.',
      en: 'Framework for scaling agility across multiple teams and release trains.',
    },
  },
  {
    id: 'g-storymap',
    category: 'agile',
    term: { fr: 'Cartographie des récits (story mapping)', en: 'Story mapping' },
    definition: {
      fr: 'Organise les user stories selon un flux narratif pour visualiser le produit et ses priorités dans son ensemble.',
      en: 'Organizes user stories along a narrative flow to visualize the whole product and its priorities.',
    },
  },
  {
    id: 'g-epic',
    category: 'agile',
    term: { fr: 'Épopée (epic)', en: 'Epic' },
    definition: {
      fr: 'Ensemble important de travail regroupant plusieurs user stories liées, produisant un résultat métier spécifique.',
      en: 'A large body of work grouping several related user stories, producing a specific business outcome.',
    },
  },

  // ─────────────── PEOPLE (batch 2) ───────────────
  {
    id: 'g-theoryxy',
    category: 'people',
    term: { fr: 'Théories X et Y (McGregor)', en: 'Theory X and Theory Y (McGregor)' },
    definition: {
      fr: 'X : les gens évitent l’effort (contrôle nécessaire). Y : les gens s’épanouissent au travail (autonomie) — référence de l’examen.',
      en: 'X: people avoid effort (control needed). Y: people thrive in work (autonomy) — the exam’s reference.',
    },
  },
  {
    id: 'g-expectancy',
    category: 'people',
    term: { fr: 'Théorie des attentes (Vroom)', en: 'Expectancy theory (Vroom)' },
    definition: {
      fr: 'Motivation = attente × instrumentalité × valence ; si un facteur est nul, la motivation s’effondre.',
      en: 'Motivation = expectancy × instrumentality × valence; if one factor is zero, motivation collapses.',
    },
  },
  {
    id: 'g-mcclelland',
    category: 'people',
    term: { fr: 'Théorie des trois besoins (McClelland)', en: 'Three needs theory (McClelland)' },
    definition: {
      fr: 'Chacun est dominé par un besoin d’accomplissement, de pouvoir ou d’affiliation — à diagnostiquer avant d’agir.',
      en: 'Each person is dominated by a need for achievement, power or affiliation — diagnose before acting.',
    },
  },
  {
    id: 'g-maslow',
    category: 'people',
    term: { fr: 'Hiérarchie des besoins de Maslow', en: 'Maslow’s hierarchy of needs' },
    definition: {
      fr: 'Les besoins inférieurs (sécurité…) doivent être comblés avant que les besoins supérieurs ne motivent.',
      en: 'Lower needs (safety…) must be met before higher needs can motivate.',
    },
  },
  {
    id: 'g-ei',
    category: 'people',
    term: { fr: 'Intelligence émotionnelle (IE)', en: 'Emotional intelligence (EI)' },
    definition: {
      fr: 'Capacité à percevoir, comprendre et gérer ses propres émotions et celles des autres.',
      en: 'Ability to perceive, understand and manage one’s own emotions and those of others.',
    },
  },
  {
    id: 'g-powersources',
    category: 'people',
    term: { fr: 'Sources de pouvoir du chef de projet', en: 'Sources of project manager power' },
    definition: {
      fr: 'Expert et référent créent une influence durable ; récompense, sanction et pouvoir formel ne fonctionnent qu’à court terme.',
      en: 'Expert and referent power create durable influence; reward, penalty and formal power work only short-term.',
    },
  },
  {
    id: 'g-agilecoach',
    category: 'people',
    term: { fr: 'Coach agile', en: 'Agile coach' },
    definition: {
      fr: 'Accompagne une ou plusieurs équipes dans l’adoption et l’amélioration continue des pratiques agiles.',
      en: 'Guides one or more teams in adopting and continuously improving agile practices.',
    },
  },
  {
    id: 'g-pmosupport',
    category: 'people',
    term: { fr: 'PMO de soutien', en: 'Supportive PMO' },
    definition: {
      fr: 'Rôle consultatif, contrôle faible : conseils, modèles, bibliothèque de leçons apprises.',
      en: 'Consultative role, low control: advice, templates, lessons-learned library.',
    },
  },
  {
    id: 'g-pmocontrol',
    category: 'people',
    term: { fr: 'PMO de contrôle', en: 'Controlling PMO' },
    definition: {
      fr: 'Contrôle modéré : exige la conformité à un cadre méthodologique et à des gabarits.',
      en: 'Moderate control: requires compliance with a methodology framework and templates.',
    },
  },
  {
    id: 'g-pmodirective',
    category: 'people',
    term: { fr: 'PMO directif', en: 'Directive PMO' },
    definition: {
      fr: 'Contrôle fort : gère directement les projets et fournit les chefs de projet.',
      en: 'High control: directly manages projects and supplies the project managers.',
    },
  },
  {
    id: 'g-matrixorg',
    category: 'people',
    term: { fr: 'Organisation matricielle', en: 'Matrix organization' },
    definition: {
      fr: 'Autorité partagée entre responsables fonctionnels et chef de projet, à trois degrés : faible, équilibrée, forte.',
      en: 'Shared authority between functional managers and the PM, in three degrees: weak, balanced, strong.',
    },
  },
  {
    id: 'g-functionalorg',
    category: 'people',
    term: { fr: 'Organisation fonctionnelle', en: 'Functional organization' },
    definition: {
      fr: 'Le responsable fonctionnel détient l’autorité ; le chef de projet a peu ou pas de pouvoir formel.',
      en: 'The functional manager holds authority; the PM has little or no formal power.',
    },
  },
  {
    id: 'g-projectizedorg',
    category: 'people',
    term: { fr: 'Organisation orientée projet', en: 'Projectized organization' },
    definition: {
      fr: 'Le chef de projet a une autorité quasi totale ; l’équipe lui est rattachée à plein temps.',
      en: 'The PM has near-total authority; the team reports to them full-time.',
    },
  },
]
