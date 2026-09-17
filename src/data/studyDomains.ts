import type { Localized } from '../types'

/**
 * Thematic study domains grouping the glossary and revision sheets for
 * browsing (landing → domains → levels), independent of the glossary's
 * `category` field and the concept sheets' `category` field, which serve
 * other purposes (flashcard tint, revision-page tabs).
 *
 * `glossaryIds` is ordered roughly simple-to-technical within each domain;
 * the UI chunks it into fixed-size "levels" for progressive study.
 */
export interface StudyDomain {
  id: string
  icon: 'book' | 'people' | 'compass' | 'building' | 'target' | 'calendar' | 'handshake' | 'shield' | 'refresh'
  color: 'navy' | 'blue' | 'teal' | 'purple' | 'green' | 'orange' | 'amber' | 'red' | 'cyan'
  title: Localized
  description: Localized
  /** revision-sheet ids (src/data/concepts.ts + concepts-advanced.ts) covered by this domain */
  conceptIds: string[]
  /** glossary term ids (src/data/glossary.ts) covered by this domain */
  glossaryIds: string[]
}

export const STUDY_DOMAINS: StudyDomain[] = [
  {
    id: 'fundamentals',
    icon: 'book',
    color: 'navy',
    title: { fr: 'Fondamentaux du management de projet', en: 'Project management fundamentals' },
    description: {
      fr: 'Les 12 principes, la structure de l’examen, le code d’éthique et les bases stratégiques du projet.',
      en: 'The 12 principles, exam structure, code of ethics and the project’s strategic basics.',
    },
    conceptIds: [
      'pr-stewardship', 'pr-value', 'pr-systems', 'pr-tailoring', 'pr-complexity',
      'pr-adaptability', 'tp-eco', 'tp-pmbok8', 'tp-ethics', 'tp-mindset',
    ],
    glossaryIds: [
      'g-tripleconstraint', 'g-opa', 'g-eef', 'g-swot', 'g-staceymodel', 'g-projectcharter',
      'g-visionstatement', 'g-defactojure', 'g-catalyseurs', 'g-eco2026', 'g-pmiethicsvalues',
    ],
  },
  {
    id: 'stakeholders',
    icon: 'people',
    color: 'blue',
    title: { fr: 'Parties prenantes & communication', en: 'Stakeholders & communication' },
    description: {
      fr: 'Identifier, analyser et engager les parties prenantes ; planifier une communication efficace.',
      en: 'Identify, analyze and engage stakeholders; plan effective communication.',
    },
    conceptIds: ['pr-stakeholders', 'pd-stakeholders', 'tp-communications'],
    glossaryIds: ['g-salience', 'g-powerinterest', 'g-raci', 'g-channels'],
  },
  {
    id: 'leadership',
    icon: 'compass',
    color: 'teal',
    title: { fr: 'Leadership, équipe & motivation', en: 'Leadership, team & motivation' },
    description: {
      fr: 'Diriger l’équipe, gérer les conflits, et les théories de motivation testées à l’examen.',
      en: 'Leading the team, managing conflict, and the motivation theories the exam tests.',
    },
    conceptIds: ['pr-team', 'pr-leadership', 'pd-team', 'tp-motivation', 'tp-conflict'],
    glossaryIds: [
      'g-tuckman', 'g-psafety', 'g-charter', 'g-conflict', 'g-leaslevels', 'g-servant',
      'g-herzberg', 'g-maslow', 'g-theoryxy', 'g-expectancy', 'g-mcclelland', 'g-ei',
      'g-eidomains', 'g-powersources', 'g-growthmindset', 'g-rewardsrecognition', 'g-votingmethods',
    ],
  },
  {
    id: 'governance',
    icon: 'building',
    color: 'purple',
    title: { fr: 'Gouvernance, conformité & changement', en: 'Governance, compliance & change' },
    description: {
      fr: 'Structures organisationnelles, PMO, conformité, maîtrise des changements et changement organisationnel.',
      en: 'Organizational structures, the PMO, compliance, change control and organizational change.',
    },
    conceptIds: ['tp-governance', 'tp-compliance', 'tp-org-structures', 'tp-change', 'pr-change'],
    glossaryIds: [
      'g-threshold', 'g-tolerance', 'g-ccb', 'g-changelog', 'g-workauth', 'g-configmgmt',
      'g-pmosupport', 'g-pmocontrol', 'g-pmodirective', 'g-matrixorg', 'g-functionalorg',
      'g-projectizedorg', 'g-agilecoach', 'g-communityofpractice', 'g-jobshadowing', 'g-kotter',
      'g-pestle', 'g-tecop', 'g-vuca', 'g-airegister', 'g-aihumanvalidation', 'g-aitraceability',
    ],
  },
  {
    id: 'scope',
    icon: 'target',
    color: 'green',
    title: { fr: 'Périmètre, livrables & qualité', en: 'Scope, deliverables & quality' },
    description: {
      fr: 'WBS, exigences, définition de terminé, et les outils qui construisent la qualité en amont.',
      en: 'WBS, requirements, definition of done, and the tools that build quality in upfront.',
    },
    conceptIds: ['pr-quality', 'pd-delivery', 'tp-quality-tools', 'tp-wbs', 'tp-requirements'],
    glossaryIds: [
      'g-scopecreep', 'g-goldplating', 'g-wbs', 'g-rtm', 'g-dod', 'g-dor', 'g-invest', 'g-deep',
      'g-costofquality', 'g-5whys', 'g-ishikawa', 'g-8020', 'g-controlchart',
    ],
  },
  {
    id: 'planning',
    icon: 'calendar',
    color: 'orange',
    title: { fr: 'Planification, échéancier & suivi', en: 'Planning, schedule & tracking' },
    description: {
      fr: 'Chemin critique, estimation, valeur acquise (EVM) : construire et suivre un plan fiable.',
      en: 'Critical path, estimating, earned value (EVM): building and tracking a reliable plan.',
    },
    conceptIds: ['pd-planning', 'pd-measurement', 'tp-schedule', 'tp-estimation', 'tp-evm'],
    glossaryIds: [
      'g-critpath', 'g-crashing', 'g-fasttrack', 'g-baseline', 'g-float', 'g-freefloat',
      'g-rollingwave', 'g-gantt', 'g-coneofuncertainty', 'g-pert', 'g-triangular', 'g-planningpoker',
      'g-fibonacci', 'g-costperpoint', 'g-ev', 'g-pv', 'g-ac', 'g-sv', 'g-cv', 'g-spi', 'g-cpi',
      'g-bac', 'g-eac', 'g-etc', 'g-vac', 'g-tcpi',
    ],
  },
  {
    id: 'procurement',
    icon: 'handshake',
    color: 'amber',
    title: { fr: 'Achats, ressources & finances', en: 'Procurement, resources & finance' },
    description: {
      fr: 'Types de contrats, sélection de projets, ressources et critères financiers (VAN, TRI…).',
      en: 'Contract types, project selection, resources and financial criteria (NPV, IRR…).',
    },
    conceptIds: ['pd-work', 'tp-procurement', 'tp-selection'],
    glossaryIds: [
      'g-npv', 'g-roi', 'g-irr', 'g-bcr', 'g-presentvalue', 'g-payback', 'g-capex-opex',
      'g-directcost', 'g-sow', 'g-rfp', 'g-rfi', 'g-ffp', 'g-cpff', 'g-pta', 'g-warranty',
      'g-waiver', 'g-contractmods', 'g-benefitsowner',
    ],
  },
  {
    id: 'risk',
    icon: 'shield',
    color: 'red',
    title: { fr: 'Risques & problèmes', en: 'Risk & issues' },
    description: {
      fr: 'Identifier, analyser et répondre aux risques ; distinguer un risque d’un point à traiter.',
      en: 'Identifying, analyzing and responding to risk; telling a risk apart from an issue.',
    },
    conceptIds: ['pr-risk', 'pd-uncertainty', 'tp-risk'],
    glossaryIds: [
      'g-emv', 'g-secondaryrisk', 'g-residualrisk', 'g-riskregister', 'g-reserveanalysis',
      'g-sensitivity', 'g-montecarlo', 'g-riskvsissue', 'g-fmea', 'g-tornado', 'g-decisiontree',
      'g-rbs', 'g-issuelog', 'g-assumptionlog', 'g-contingency', 'g-mgmtreserve',
    ],
  },
  {
    id: 'agile',
    icon: 'refresh',
    color: 'cyan',
    title: { fr: 'Agile & hybride', en: 'Agile & hybrid' },
    description: {
      fr: 'Scrum, Kanban, mesures de flux et pratiques hybrides qui combinent prédictif et agile.',
      en: 'Scrum, Kanban, flow metrics and the hybrid practices blending predictive and agile.',
    },
    conceptIds: ['pd-approach', 'tp-agile'],
    glossaryIds: [
      'g-scrum', 'g-scrummaster', 'g-productowner', 'g-backlog', 'g-sprintreview', 'g-sprintretro',
      'g-dailystandup', 'g-mvp', 'g-epic', 'g-storymap', 'g-kanbanboard',
      'g-wip', 'g-leadtime', 'g-cycletime', 'g-throughput', 'g-burndown', 'g-burnup', 'g-velocity',
      'g-spike', 'g-timebox', 'g-wsjf', 'g-safe', 'g-devops', 'g-hypercare',
    ],
  },
]

/** Reverse lookup: which domain's accent color to use for a given concept sheet id (revision page tinting). */
export const CONCEPT_DOMAIN_COLOR: Record<string, StudyDomain['color']> = Object.fromEntries(
  STUDY_DOMAINS.flatMap((d) => d.conceptIds.map((id) => [id, d.color] as const)),
)
