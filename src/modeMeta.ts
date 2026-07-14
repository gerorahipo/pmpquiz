import type { QuizMode } from './types'
import type { UIKey } from './i18n/translations'

export const MODE_LABEL_KEYS: Record<QuizMode, UIKey> = {
  easy: 'modeEasy',
  medium: 'modeMedium',
  expert: 'modeExpert',
  exam: 'modeExam',
  missed: 'modeMissed',
}

export function parseMode(value: string | null): QuizMode {
  return value === 'easy' || value === 'medium' || value === 'expert' || value === 'exam' || value === 'missed'
    ? value
    : 'easy'
}

/** Time limit per mode, in seconds (undefined = untimed). Mirrors the API's config. */
export const MODE_TIME_LIMIT: Record<QuizMode, number | undefined> = {
  easy: undefined,
  medium: undefined,
  expert: 150 * 60, // 120 hard questions, exam pace
  exam: 230 * 60, // full 180-question mock exam
  missed: undefined,
}

/** expert and exam modes run as a faithful exam simulation (no per-question feedback). */
export function isExamMode(mode: QuizMode): boolean {
  return mode === 'exam' || mode === 'expert'
}

export function formatDuration(totalSec: number): string {
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = Math.floor(totalSec % 60)
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}
