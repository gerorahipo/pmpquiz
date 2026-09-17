/**
 * Per-browser study progress for the domain/level glossary & revision-sheet
 * browser. Deliberately local-only (no backend sync): it tracks "seen"
 * glossary terms (flipped in a level's flashcard session) and "read"
 * concept sheets (opened from a domain page), purely to drive the progress
 * bars on the domains/levels UI.
 */

const GLOSSARY_KEY = 'pmpquiz:progress:glossary'
const CONCEPT_KEY = 'pmpquiz:progress:concepts'

function readSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

function writeSet(key: string, set: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]))
  } catch {
    // storage unavailable (private mode, quota) — progress just won't persist
  }
}

export function markGlossarySeen(id: string) {
  const set = readSet(GLOSSARY_KEY)
  if (set.has(id)) return
  set.add(id)
  writeSet(GLOSSARY_KEY, set)
}

export function markConceptSeen(id: string) {
  const set = readSet(CONCEPT_KEY)
  if (set.has(id)) return
  set.add(id)
  writeSet(CONCEPT_KEY, set)
}

export function countSeen(ids: string[], kind: 'glossary' | 'concepts'): number {
  const set = readSet(kind === 'glossary' ? GLOSSARY_KEY : CONCEPT_KEY)
  return ids.reduce((n, id) => n + (set.has(id) ? 1 : 0), 0)
}

export function isSeen(id: string, kind: 'glossary' | 'concepts'): boolean {
  return readSet(kind === 'glossary' ? GLOSSARY_KEY : CONCEPT_KEY).has(id)
}
