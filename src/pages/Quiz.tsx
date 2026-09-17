import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n'
import { api } from '../api'
import { loadEcoTasks, loadConcepts } from '../content'
import { MODE_LABEL_KEYS, parseMode, formatDuration, MODE_TIME_LIMIT, isExamMode } from '../modeMeta'
import { isMultiSelect, selectCount, isAnswerCorrect, shuffleOptions } from '../quizLogic'
import type { Attempt, Domain, DomainScore, Localized, Question } from '../types'

const DOMAIN_LABEL_KEYS = {
  people: 'domainPeople',
  process: 'domainProcess',
  business: 'domainBusiness',
} as const

function emptyDomainScores(): Record<Domain, DomainScore> {
  return {
    people: { total: 0, correct: 0 },
    process: { total: 0, correct: 0 },
    business: { total: 0, correct: 0 },
  }
}

/** Toggle option `i` in a selection array, respecting the max pick count for this question. */
function toggleSelection(current: number[], i: number, max: number): number[] {
  if (max === 1) return [i]
  if (current.includes(i)) return current.filter((x) => x !== i)
  if (current.length < max) return [...current, i]
  return current
}

export default function Quiz() {
  const { t, L } = useI18n()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const mode = parseMode(searchParams.get('mode'))
  const taskId = searchParams.get('task') || undefined
  const taskIdsParam = searchParams.get('tasks')
  const taskIds = taskIdsParam ? taskIdsParam.split(',').filter(Boolean) : undefined
  const conceptId = searchParams.get('concept') || undefined
  const examSim = isExamMode(mode)
  const timeLimitSec = MODE_TIME_LIMIT[mode]

  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [taskLabel, setTaskLabel] = useState<Localized | null>(null)
  const [conceptTitle, setConceptTitle] = useState<Localized | null>(null)
  const [done, setDone] = useState(false)
  const [index, setIndex] = useState(0)

  // shared per-question state — each entry is the array of selected option
  // indices for that question (empty = unanswered; multi-select questions
  // hold up to selectCount(question) indices).
  const [selections, setSelections] = useState<number[][]>([])
  // practice mode: whether the answer for a question has been revealed/locked
  const [revealed, setRevealed] = useState<boolean[]>([])
  // exam mode: flagged-for-review questions + palette visibility
  const [flags, setFlags] = useState<boolean[]>([])
  const [showPalette, setShowPalette] = useState(false)

  const [remainingSec, setRemainingSec] = useState<number | null>(null)
  const [elapsedSec, setElapsedSec] = useState(0)
  const [timedOut, setTimedOut] = useState(false)
  const startRef = useRef<number>(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)
    api
      .questionsForMode(mode, taskId, taskIds)
      .then((qs) => {
        if (cancelled) return
        const prepared = qs.map(shuffleOptions)
        setQuestions(prepared)
        setSelections(prepared.map(() => []))
        setRevealed(new Array(prepared.length).fill(false))
        setFlags(new Array(prepared.length).fill(false))
        startRef.current = Date.now()
        if (timeLimitSec) setRemainingSec(timeLimitSec)
        setLoading(false)
        if (prepared.length === 0) setDone(true)
      })
      .catch(() => {
        if (cancelled) return
        setError(true)
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, taskId, taskIdsParam, timeLimitSec])

  // resolve the ECO task label for the focused-practice badge
  useEffect(() => {
    if (!taskId) {
      setTaskLabel(null)
      return
    }
    let cancelled = false
    loadEcoTasks()
      .then((tasks) => {
        if (!cancelled) setTaskLabel(tasks.find((tk) => tk.id === taskId)?.label ?? null)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [taskId])

  // resolve the concept title for the drill-practice badge
  useEffect(() => {
    if (!conceptId) {
      setConceptTitle(null)
      return
    }
    let cancelled = false
    loadConcepts()
      .then((concepts) => {
        if (!cancelled) setConceptTitle(concepts.find((c) => c.id === conceptId)?.title ?? null)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [conceptId])

  // ticking clock (drives countdown for timed modes and pacing indicator)
  useEffect(() => {
    if (loading || done) return
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000)
      setElapsedSec(elapsed)
      if (timeLimitSec) {
        const left = timeLimitSec - elapsed
        setRemainingSec(left > 0 ? left : 0)
        if (left <= 0) {
          setTimedOut(true)
          setDone(true)
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [loading, done, timeLimitSec])

  const current = questions[index]
  const isAnswered = (i: number) => (selections[i]?.length ?? 0) === selectCount(questions[i])
  const answeredCount = questions.reduce((n, _q, i) => n + (isAnswered(i) ? 1 : 0), 0)

  const finalize = () => {
    // record each answered question for spaced repetition + task stats
    questions.forEach((q, i) => {
      void api.recordAnswer(q.id, isAnswerCorrect(q, selections[i] ?? []))
    })
    setDone(true)
  }

  // ── practice mode actions ──
  const selectOption = (i: number) => {
    if (revealed[index]) return
    setSelections((prev) => {
      const next = [...prev]
      next[index] = toggleSelection(next[index] ?? [], i, selectCount(current))
      return next
    })
  }

  const validate = () => {
    if (!isAnswered(index)) return
    setRevealed((prev) => {
      const next = [...prev]
      next[index] = true
      return next
    })
  }

  const nextPractice = () => {
    if (index + 1 < questions.length) setIndex(index + 1)
    else finalize()
  }

  // ── exam mode actions ──
  const chooseExam = (i: number) => {
    setSelections((prev) => {
      const next = [...prev]
      next[index] = toggleSelection(next[index] ?? [], i, selectCount(current))
      return next
    })
  }

  const toggleFlag = () => {
    setFlags((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  const goTo = (i: number) => {
    setIndex(i)
    setShowPalette(false)
  }

  const confirmFinish = (msgKey: 'confirmFinishEarly' | 'confirmSubmit') => {
    if (window.confirm(t(msgKey))) finalize()
  }

  // ── scoring (shared) ──
  const domainScores = useMemo(() => {
    const scores = emptyDomainScores()
    questions.forEach((q, i) => {
      scores[q.domain].total++
      if (isAnswerCorrect(q, selections[i] ?? [])) scores[q.domain].correct++
    })
    return scores
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selections, questions])

  const correctCount = useMemo(
    () => questions.reduce((n, q, i) => n + (isAnswerCorrect(q, selections[i] ?? []) ? 1 : 0), 0),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions, selections],
  )

  // persist the attempt once, when the quiz is done with at least one answer
  useEffect(() => {
    if (!done || questions.length === 0 || answeredCount === 0) return
    const attempt: Attempt = {
      date: Date.now(),
      mode,
      total: questions.length,
      correct: correctCount,
      domains: domainScores,
      durationSec: timeLimitSec ? Math.min(elapsedSec, timeLimitSec) : undefined,
    }
    void api.createAttempt(attempt)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  if (loading) {
    return (
      <div className="page">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page">
        <div className="card">
          <p>{t('loadError')}</p>
          <div className="btn-row">
            <button className="btn btn-cta" onClick={() => navigate(0)}>
              {t('retry')}
            </button>
            <Link className="btn btn-secondary" to="/">
              {t('backHome')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ───────────────────────── RESULTS ─────────────────────────
  if (done) {
    if (questions.length === 0 || answeredCount === 0) {
      return (
        <div className="page">
          <div className="card">
            <p>{mode === 'missed' && !taskId ? t('missedEmpty') : t('quizEmpty')}</p>
            <Link className="btn btn-secondary" to="/">
              {t('backHome')}
            </Link>
          </div>
        </div>
      )
    }
    const total = questions.length
    const pct = Math.round((correctCount / total) * 100)
    const message = pct >= 80 ? t('greatJob') : pct >= 60 ? t('goodJob') : t('keepGoing')
    const unanswered = total - answeredCount
    const badgeLabel = conceptTitle ? L(conceptTitle) : taskId ? t('focusedPractice') : t(MODE_LABEL_KEYS[mode])
    return (
      <div className="page">
        <div className="card results">
          <span className="badge badge-neutral">{badgeLabel}</span>
          <h1>{t('resultsTitle')}</h1>
          {timedOut && <p className="timeup-banner">{t('timeUp')}</p>}
          <div
            className={`score-ring ${pct >= 80 ? 'good' : pct >= 60 ? 'mid' : 'low'}`}
            role="img"
            aria-label={`${t('yourScore')}: ${pct}%`}
          >
            <span className="score-value">{pct}%</span>
            <span className="score-detail">
              {correctCount} / {total}
            </span>
          </div>
          <p className="result-message">{message}</p>
          <p className="muted">
            {unanswered > 0 && (
              <>
                {unanswered} {t('unansweredLabel')}
                {timeLimitSec ? ' · ' : ''}
              </>
            )}
            {timeLimitSec ? (
              <>
                {t('durationLabel')} : {formatDuration(Math.min(elapsedSec, timeLimitSec))}
              </>
            ) : null}
          </p>

          <h2>{t('byDomain')}</h2>
          <div className="domain-bars">
            {(Object.keys(domainScores) as Domain[])
              .filter((d) => domainScores[d].total > 0)
              .map((d) => {
                const s = domainScores[d]
                const dpct = Math.round((s.correct / s.total) * 100)
                return (
                  <div key={d} className="domain-bar">
                    <span className="domain-bar-label">
                      {t(DOMAIN_LABEL_KEYS[d])} — {s.correct}/{s.total}
                    </span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${dpct}%` }} />
                    </div>
                  </div>
                )
              })}
          </div>

          <div className="btn-row">
            <button className="btn btn-cta" onClick={() => navigate(0)}>
              {t('restartQuiz')}
            </button>
            <Link className="btn btn-secondary" to="/">
              {t('backHome')}
            </Link>
          </div>
        </div>

        {/* full answer review, most useful after an exam simulation */}
        <div className="card review-answers">
          <h2>{t('reviewAnswers')}</h2>
          <div className="review-list">
            {questions.map((q, i) => {
              const sel = selections[i] ?? []
              const good = isAnswerCorrect(q, sel)
              const correctSet = new Set(q.correctMultiple ?? [q.correct])
              return (
                <details key={q.id} className="review-item">
                  <summary>
                    <span className={`review-dot ${sel.length === 0 ? 'skipped' : good ? 'good' : 'bad'}`}>
                      {i + 1}
                    </span>
                    <span className="review-summary-text">{L(q.question)}</span>
                  </summary>
                  <div className="review-body">
                    {q.options.map((opt, oi) => {
                      let cls = 'review-option'
                      if (correctSet.has(oi)) cls += ' right'
                      else if (sel.includes(oi)) cls += ' wrong'
                      return (
                        <div key={oi} className={cls}>
                          <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                          <span>{L(opt)}</span>
                        </div>
                      )
                    })}
                    <p className="review-explanation">
                      <strong>{t('explanation')} : </strong>
                      {L(q.explanation)}
                    </p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  if (!current) return null

  const currentMulti = isMultiSelect(current)
  const currentMax = selectCount(current)

  // ───────────────────────── EXAM SIMULATION ─────────────────────────
  if (examSim) {
    const benchmarkPerQ = timeLimitSec ? timeLimitSec / questions.length : 0
    const expectedElapsed = benchmarkPerQ * (index + 1)
    const behind = timeLimitSec ? elapsedSec > expectedElapsed : false
    const lowTime = remainingSec !== null && remainingSec < 300

    if (showPalette) {
      return (
        <div className="page quiz-page">
          <div className="quiz-header">
            <span className="quiz-progress-label">{t('reviewGrid')}</span>
            <button className="btn btn-secondary btn-small" onClick={() => setShowPalette(false)}>
              {t('backToQuestion')}
            </button>
          </div>
          <div className="card">
            <div className="palette-legend">
              <span><span className="pal-swatch answered" /> {t('legendAnswered')}</span>
              <span><span className="pal-swatch" /> {t('legendUnanswered')}</span>
              <span><span className="pal-swatch flagged" /> {t('legendFlagged')}</span>
            </div>
            <div className="palette-grid">
              {questions.map((_, i) => {
                let cls = 'palette-cell'
                if (isAnswered(i)) cls += ' answered'
                if (flags[i]) cls += ' flagged'
                if (i === index) cls += ' current'
                return (
                  <button key={i} className={cls} onClick={() => goTo(i)}>
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div className="btn-row">
              <button className="btn btn-cta" onClick={() => confirmFinish('confirmSubmit')}>
                {t('submitExam')}
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="page quiz-page">
        <div className="quiz-header">
          <span className="quiz-progress-label">
            {t('questionXofY', { x: index + 1, y: questions.length })}
          </span>
          <div className="quiz-header-right">
            {timeLimitSec && (
              <span className={`pace ${behind ? 'pace-behind' : 'pace-ok'}`}>
                {behind ? t('paceBehind') : t('paceOk')}
              </span>
            )}
            {remainingSec !== null && (
              <span className={`timer ${lowTime ? 'timer-low' : ''}`} aria-label={t('timeLeft')}>
                <svg viewBox="0 0 24 24" className="badge-icon" aria-hidden="true">
                  <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 9v4l2.5 2.5M9 2.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {formatDuration(remainingSec)}
              </span>
            )}
          </div>
        </div>
        <div className="bar-track quiz-progress">
          <div className="bar-fill" style={{ width: `${Math.round((answeredCount / questions.length) * 100)}%` }} />
        </div>

        <div className="card question-card">
          <div className="exam-toolbar">
            <span className={`badge badge-${current.domain}`}>{t(DOMAIN_LABEL_KEYS[current.domain])}</span>
            <button
              className={`flag-btn ${flags[index] ? 'flagged' : ''}`}
              aria-pressed={flags[index]}
              onClick={toggleFlag}
            >
              <svg viewBox="0 0 24 24" className="badge-icon" aria-hidden="true">
                <path d="M5 21V4h11l-1.5 4L16 12H5" fill={flags[index] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {flags[index] ? t('flagged') : t('flag')}
            </button>
          </div>

          <h1 className="question-text">{L(current.question)}</h1>
          {currentMulti && (
            <p className="select-hint">{t('selectCountHint', { n: currentMax })}</p>
          )}
          <div className="options" role={currentMulti ? 'group' : 'radiogroup'} aria-label={L(current.question)}>
            {current.options.map((opt, i) => {
              const picked = (selections[index] ?? []).includes(i)
              return (
                <button
                  key={i}
                  className={`option ${picked ? 'selected' : ''}`}
                  aria-pressed={picked}
                  onClick={() => chooseExam(i)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{L(opt)}</span>
                </button>
              )
            })}
          </div>

          <div className="exam-nav">
            <button className="btn btn-secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>
              ← {t('prev')}
            </button>
            <button className="btn btn-secondary btn-small" onClick={() => setShowPalette(true)}>
              {t('reviewGrid')} ({answeredCount}/{questions.length})
            </button>
            {index + 1 < questions.length ? (
              <button className="btn btn-cta" onClick={() => setIndex(index + 1)}>
                {t('next')} →
              </button>
            ) : (
              <button className="btn btn-cta" onClick={() => confirmFinish('confirmSubmit')}>
                {t('submitExam')}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ───────────────────────── PRACTICE (learning) MODE ─────────────────────────
  const isRevealed = revealed[index]
  const selectedNow = selections[index] ?? []
  const correctSet = new Set(current.correctMultiple ?? [current.correct])
  const answeredCorrectly = isRevealed && isAnswerCorrect(current, selectedNow)
  const progressPct = Math.round((index / questions.length) * 100)
  const badgeLabel = conceptTitle ? L(conceptTitle) : null

  return (
    <div className="page quiz-page">
      <div className="quiz-header">
        <span className="quiz-progress-label">
          {t('questionXofY', { x: index + 1, y: questions.length })}
        </span>
        <div className="quiz-header-right">
          {badgeLabel && <span className="badge badge-neutral">{badgeLabel}</span>}
          {taskLabel && <span className="badge badge-neutral">{L(taskLabel)}</span>}
          <span className={`badge badge-${current.domain}`}>{t(DOMAIN_LABEL_KEYS[current.domain])}</span>
        </div>
      </div>
      <div className="bar-track quiz-progress">
        <div className="bar-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="card question-card">
        <h1 className="question-text">{L(current.question)}</h1>
        {currentMulti && !isRevealed && (
          <p className="select-hint">{t('selectCountHint', { n: currentMax })}</p>
        )}
        <div className="options" role={currentMulti ? 'group' : 'radiogroup'} aria-label={L(current.question)}>
          {current.options.map((opt, i) => {
            let cls = 'option'
            const picked = selectedNow.includes(i)
            if (!isRevealed && picked) cls += ' selected'
            if (isRevealed) {
              if (correctSet.has(i)) cls += ' right'
              else if (picked) cls += ' wrong'
              else cls += ' dimmed'
            }
            return (
              <button
                key={i}
                className={cls}
                disabled={isRevealed}
                aria-pressed={picked}
                onClick={() => selectOption(i)}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{L(opt)}</span>
              </button>
            )
          })}
        </div>

        {isRevealed && (
          <div className={`feedback ${answeredCorrectly ? 'feedback-good' : 'feedback-bad'}`}>
            <p className="feedback-title">
              {answeredCorrectly ? t('correctAnswer') : t('wrongAnswer')}
            </p>
            <p>
              <strong>{t('explanation')} : </strong>
              {L(current.explanation)}
            </p>
          </div>
        )}

        <div className="btn-row">
          {!isRevealed ? (
            <button className="btn btn-cta" disabled={!isAnswered(index)} onClick={validate}>
              {t('validate')}
            </button>
          ) : (
            <button className="btn btn-cta" onClick={nextPractice}>
              {index + 1 < questions.length ? t('next') : t('seeResults')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
