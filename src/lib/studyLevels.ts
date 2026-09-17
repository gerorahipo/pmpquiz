/** Target size for a study level's flashcard set — matches a focused ~10-15 min session. */
const LEVEL_SIZE = 15

/** Split a domain's glossary ids into fixed-size, ordered study levels. */
export function chunkIntoLevels(ids: string[], size = LEVEL_SIZE): string[][] {
  if (ids.length === 0) return []
  const levels: string[][] = []
  for (let i = 0; i < ids.length; i += size) {
    levels.push(ids.slice(i, i + size))
  }
  return levels
}
