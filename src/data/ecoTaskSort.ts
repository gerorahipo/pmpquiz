import type { Localized } from '../types'
import type { StudyDomain } from './studyDomains'

/**
 * The 26 ECO 2026 tasks (1.1-3.8), each tagged with the study domain
 * (src/data/studyDomains.ts) its golden-rule mnemonic was integrated into
 * — see conceptTraps.ts / concepts-advanced.ts "ECO 2026 task X.Y" bullets.
 * Powers the domain-sorting game (place each task under its domain).
 */
export interface EcoSortTask {
  id: string
  title: Localized
  domainId: StudyDomain['id']
}

export const ECO_SORT_TASKS: EcoSortTask[] = [
  { id: 't1-1', domainId: 'leadership', title: { fr: 'Élaborer une vision commune', en: 'Develop a shared vision' } },
  { id: 't1-2', domainId: 'leadership', title: { fr: 'Gérer les conflits', en: 'Manage conflict' } },
  { id: 't1-3', domainId: 'leadership', title: { fr: "Diriger l'équipe de projet", en: 'Lead the project team' } },
  { id: 't1-4', domainId: 'stakeholders', title: { fr: 'Impliquer les parties prenantes', en: 'Engage stakeholders' } },
  { id: 't1-5', domainId: 'stakeholders', title: { fr: 'Aligner les attentes des parties prenantes', en: 'Align stakeholder expectations' } },
  { id: 't1-6', domainId: 'stakeholders', title: { fr: 'Gérer les attentes des parties prenantes', en: 'Manage stakeholder expectations' } },
  { id: 't1-7', domainId: 'procurement', title: { fr: 'Assurer le transfert des connaissances', en: 'Ensure knowledge transfer' } },
  { id: 't1-8', domainId: 'stakeholders', title: { fr: 'Planifier et gérer la communication', en: 'Plan and manage communication' } },
  { id: 't2-1', domainId: 'planning', title: { fr: 'Élaborer un plan de management de projet intégré et planifier la livraison', en: 'Develop an integrated project management plan and plan delivery' } },
  { id: 't2-2', domainId: 'scope', title: { fr: 'Développer et gérer le périmètre du projet', en: 'Develop and manage project scope' } },
  { id: 't2-3', domainId: 'fundamentals', title: { fr: 'Garantir une livraison axée sur la valeur', en: 'Ensure value-driven delivery' } },
  { id: 't2-4', domainId: 'procurement', title: { fr: 'Planifier et gérer les ressources', en: 'Plan and manage resources' } },
  { id: 't2-5', domainId: 'procurement', title: { fr: 'Planifier et gérer les approvisionnements', en: 'Plan and manage procurement' } },
  { id: 't2-6', domainId: 'risk', title: { fr: 'Planifier et gérer les finances', en: 'Plan and manage finances' } },
  { id: 't2-7', domainId: 'scope', title: { fr: 'Planifier et optimiser la qualité des produits/livrables', en: 'Plan and optimize product/deliverable quality' } },
  { id: 't2-8', domainId: 'planning', title: { fr: "Planifier et gérer l'échéancier", en: 'Plan and manage the schedule' } },
  { id: 't2-9', domainId: 'planning', title: { fr: "Évaluer l'état d'avancement du projet", en: 'Assess project progress' } },
  { id: 't2-10', domainId: 'scope', title: { fr: 'Gérer la clôture du projet', en: 'Manage project closure' } },
  { id: 't3-1', domainId: 'governance', title: { fr: 'Définir et établir la gouvernance du projet', en: 'Define and establish project governance' } },
  { id: 't3-2', domainId: 'governance', title: { fr: 'Planifier et gérer la conformité du projet', en: 'Plan and manage project compliance' } },
  { id: 't3-3', domainId: 'governance', title: { fr: 'Gérer et contrôler les changements', en: 'Manage and control changes' } },
  { id: 't3-4', domainId: 'risk', title: { fr: 'Éliminer les obstacles et gérer les points à traiter', en: 'Remove obstacles and manage issues' } },
  { id: 't3-5', domainId: 'risk', title: { fr: 'Planifier et gérer les risques', en: 'Plan and manage risk' } },
  { id: 't3-6', domainId: 'procurement', title: { fr: 'Amélioration continue', en: 'Continuous improvement' } },
  { id: 't3-7', domainId: 'governance', title: { fr: 'Soutenir le changement organisationnel', en: 'Support organizational change' } },
  { id: 't3-8', domainId: 'risk', title: { fr: "Évaluer les changements de l'environnement commercial externe", en: 'Evaluate changes in the external business environment' } },
]
