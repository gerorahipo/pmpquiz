/**
 * Per-browser study progress for the domain/level glossary & revision-sheet
 * browser. Deliberately local-only (no backend sync).
 *
 * Glossary terms are self-rated after each flashcard ("Non" / "Presque" /
 * "Oui" — see StudyLevel), which gives a graded mastery signal instead of a
 * plain "seen" flag. Concept sheets stay a simple "read" boolean: opening
 * their detail page from a domain marks them read.
 */

export type GlossaryRating = 0 | 1 | 2 // Non / Presque / Oui

const GLOSSARY_KEY = 'pmpquiz:progress:glossary-ratings'
const CONCEPT_KEY = 'pmpquiz:progress:concepts'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage unavailable (private mode, quota) — progress just won't persist
  }
}

function readRatings(): Record<string, GlossaryRating> {
  return readJson(GLOSSARY_KEY, {} as Record<string, GlossaryRating>)
}

export function rateGlossaryTerm(id: string, rating: GlossaryRating) {
  const ratings = readRatings()
  ratings[id] = rating
  writeJson(GLOSSARY_KEY, ratings)
}

export function getGlossaryRating(id: string): GlossaryRating | undefined {
  return readRatings()[id]
}

/** Weighted mastery: Oui=100%, Presque=50%, Non=0%, unrated=0%. */
export function glossaryProgressPct(ids: string[]): number {
  if (ids.length === 0) return 0
  const ratings = readRatings()
  const points = ids.reduce((sum, id) => sum + (ratings[id] ?? 0), 0)
  return Math.round((points / (ids.length * 2)) * 100)
}

/** Number of terms rated at least once (including "Non" — still an attempt). */
export function glossaryAttemptedCount(ids: string[]): number {
  const ratings = readRatings()
  return ids.reduce((n, id) => n + (ratings[id] !== undefined ? 1 : 0), 0)
}

function readConceptSet(): Set<string> {
  return new Set(readJson(CONCEPT_KEY, [] as string[]))
}

export function markConceptSeen(id: string) {
  const set = readConceptSet()
  if (set.has(id)) return
  set.add(id)
  writeJson(CONCEPT_KEY, [...set])
}

export function isConceptSeen(id: string): boolean {
  return readConceptSet().has(id)
}
