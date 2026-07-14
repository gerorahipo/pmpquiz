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
]
