import { api } from './api'
import type { Concept } from './types'
import type { GlossaryEntry } from './data/glossary'
import type { EcoTask } from './data/ecoTasks'

/**
 * Memoized loaders for the (public, immutable) content served by the API.
 * A failed request clears its cache so it can be retried on the next call.
 */
function memo<T>(loader: () => Promise<T>): () => Promise<T> {
  let cache: Promise<T> | null = null
  return () => {
    if (!cache) {
      cache = loader().catch((err) => {
        cache = null
        throw err
      })
    }
    return cache
  }
}

export const loadConcepts = memo<Concept[]>(() => api.getConcepts())
export const loadGlossary = memo<GlossaryEntry[]>(() => api.getGlossary())
export const loadEcoTasks = memo<EcoTask[]>(() => api.getEcoTasks())
