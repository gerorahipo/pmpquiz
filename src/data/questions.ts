import type { Difficulty, Question } from '../types'
import { BASE_QUESTIONS } from './questions-base'
import { EASY_QUESTIONS } from './questions-easy'
import { MEDIUM_QUESTIONS } from './questions-medium'
import { HARD_QUESTIONS_1 } from './questions-hard-1'
import { HARD_QUESTIONS_2 } from './questions-hard-2'
import { HARD_QUESTIONS_3 } from './questions-hard-3'
import { PMPDORE_QUESTIONS } from './questions-pmpdore'
import { EXTRA_QUESTIONS } from './questions-extra'
import { QUESTION_ECO_TASK } from './questionEcoTags'

/** Bump this version whenever the question bank changes (used by the API seed). */
export const QUESTIONS_VERSION = 5

/** Difficulty assignment for the original (v1) question bank. */
const BASE_EASY_IDS = new Set([
  'p03', 'p08', 'p12',
  'q03', 'q05', 'q06', 'q07', 'q08', 'q10', 'q15',
  'b02', 'b04',
])

const baseWithDifficulty: Question[] = BASE_QUESTIONS.map((q) => ({
  ...q,
  difficulty: (BASE_EASY_IDS.has(q.id) ? 'easy' : 'medium') as Difficulty,
}))

const RAW_QUESTIONS: Question[] = [
  ...baseWithDifficulty,
  ...EASY_QUESTIONS,
  ...MEDIUM_QUESTIONS,
  ...HARD_QUESTIONS_1,
  ...HARD_QUESTIONS_2,
  ...HARD_QUESTIONS_3,
  ...PMPDORE_QUESTIONS,
  ...EXTRA_QUESTIONS,
]

/** Attach the ECO task tag (for fine-grained weak-area tracking) to each question. */
export const QUESTIONS: Question[] = RAW_QUESTIONS.map((q) => ({
  ...q,
  ecoTask: QUESTION_ECO_TASK[q.id] ?? q.ecoTask,
}))
