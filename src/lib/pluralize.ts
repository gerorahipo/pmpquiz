/** Pick the singular or plural translated word for a count, without pulling in a full i18n plural library. */
export function pluralWord(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural
}
