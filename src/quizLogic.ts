import type { Question } from './types'

/** True for "select N" multi-response questions (the real exam's other item format). */
export function isMultiSelect(q: Pick<Question, 'correctMultiple'>): boolean {
  return Array.isArray(q.correctMultiple) && q.correctMultiple.length > 1
}

/** How many options must be picked to answer this question. */
export function selectCount(q: Pick<Question, 'correct' | 'correctMultiple'>): number {
  return isMultiSelect(q) ? q.correctMultiple!.length : 1
}

/**
 * A multi-response question is correct only if the selection is EXACT: same
 * count, all correct, none extra — matching real exam scoring (no partial
 * credit). A single-answer question is correct if the one selection matches.
 */
export function isAnswerCorrect(q: Question, selected: number[]): boolean {
  if (isMultiSelect(q)) {
    const want = new Set(q.correctMultiple)
    return selected.length === want.size && selected.every((i) => want.has(i))
  }
  return selected.length === 1 && selected[0] === q.correct
}

/** Shuffle a question's options, remapping correct / correctMultiple indices to match. */
export function shuffleOptions(q: Question): Question {
  const order = q.options.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    correct: order.indexOf(q.correct),
    correctMultiple: q.correctMultiple?.map((ci) => order.indexOf(ci)),
  }
}
