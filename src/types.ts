export type Lang = 'fr' | 'en'

export type Localized = Record<Lang, string>

/** ECO exam domains (Examination Content Outline) */
export type Domain = 'people' | 'process' | 'business'

export type Difficulty = 'easy' | 'medium' | 'hard'

/** Question as authored in the legacy base bank (difficulty assigned in the index) */
export interface BaseQuestion {
  id: string
  domain: Domain
  question: Localized
  options: Localized[]
  /** index of the correct option (single-answer questions; ignored when correctMultiple is set) */
  correct: number
  /**
   * Indices of ALL correct options, for "select N" multi-response questions
   * (the real PMP exam's other item format). When present with length > 1,
   * the question is rendered as a multi-select and must be answered with
   * exactly that many choices, all correct, to count as right.
   */
  correctMultiple?: number[]
  explanation: Localized
}

export interface Question extends BaseQuestion {
  difficulty: Difficulty
  /** id of the PMI ECO task this question exercises, for fine-grained weak-area tracking */
  ecoTask?: string
}

/**
 * Quiz modes:
 * - easy: 10–15 random easy questions
 * - medium: 50 medium questions
 * - expert: 120 hard questions, timed
 * - exam: full 180-question timed mock exam (ECO domain ratios)
 * - missed: untimed review of previously missed questions
 */
export type QuizMode = 'easy' | 'medium' | 'expert' | 'exam' | 'missed'

export interface DomainScore {
  total: number
  correct: number
}

export interface Attempt {
  id?: number
  date: number
  mode?: QuizMode
  total: number
  correct: number
  domains: Record<Domain, DomainScore>
  /** seconds actually spent, for timed modes */
  durationSec?: number
}

/**
 * A question tracked for targeted, spaced-repetition review. Created on the
 * first wrong answer; progresses through increasing review intervals as it
 * is answered correctly, and is removed once "mastered" (interval long
 * enough). A wrong answer at any point resets its progression.
 */
export interface MissedEntry {
  questionId: string
  /** number of times answered incorrectly, ever */
  count: number
  lastMissed: number
  /** consecutive correct reviews since the last miss */
  streak: number
  /** current spaced-repetition interval, in days */
  intervalDays: number
  /** SM-2-style ease factor, 1.3–2.8 */
  easeFactor: number
  /** timestamp: this entry is due for review once now >= dueDate */
  dueDate: number
}

/** Running accuracy for one ECO task, incremented as questions are answered. */
export interface TaskStat {
  taskId: string
  correct: number
  total: number
}

export type ConceptCategory = 'principle' | 'performance' | 'topic'

export interface Concept {
  id: string
  category: ConceptCategory
  title: Localized
  summary: Localized
  body: Localized
  details?: Localized
  examples?: Localized
  /** common exam traps and wrong-answer patterns for this concept */
  traps?: Localized
}
