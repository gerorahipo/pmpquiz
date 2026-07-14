import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { api } from '../api'
import { loadEcoTasks } from '../content'
import type { EcoTask } from '../data/ecoTasks'
import type { Domain, MissedEntry, Question, TaskStat } from '../types'

const DOMAIN_LABEL_KEYS = {
  people: 'domainPeople',
  process: 'domainProcess',
  business: 'domainBusiness',
} as const

type Tab = 'review' | 'weak'

interface MissedItem {
  entry: MissedEntry
  question: Question
}

/** A weak-area row: an ECO task with enough attempts and imperfect accuracy. */
interface WeakArea {
  taskId: string
  domain: Domain
  correct: number
  total: number
  pct: number
}

export default function Missed() {
  const { t, L } = useI18n()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('review')

  const [due, setDue] = useState<MissedItem[] | null>(null)
  const [allMissed, setAllMissed] = useState<MissedItem[]>([])
  const [stats, setStats] = useState<TaskStat[]>([])
  const [ecoTasks, setEcoTasks] = useState<EcoTask[]>([])
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    api.dueReview().then(setDue).catch(() => setDue([]))
    api.allReview().then(setAllMissed).catch(() => setAllMissed([]))
    api.taskStats().then(setStats).catch(() => setStats([]))
    loadEcoTasks().then(setEcoTasks).catch(() => setEcoTasks([]))
  }, [])

  const weakAreas = useMemo<WeakArea[]>(() => {
    const byId = new Map(stats.map((s) => [s.taskId, s]))
    return ecoTasks.map((task) => {
      const s = byId.get(task.id)
      const total = s?.total ?? 0
      const correct = s?.correct ?? 0
      return { taskId: task.id, domain: task.domain, correct, total, pct: total ? Math.round((correct / total) * 100) : 0 }
    })
      .filter((w) => w.total >= 2 && w.pct < 100)
      .sort((a, b) => a.pct - b.pct)
  }, [stats, ecoTasks])

  if (due === null) {
    return (
      <div className="page">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  const taskLabel = (id: string) => {
    const task = ecoTasks.find((tk) => tk.id === id)
    return task ? L(task.label) : id
  }

  return (
    <div className="page">
      <h1>{t('missedTitle')}</h1>
      <p className="subtitle">{t('missedSubtitle')}</p>

      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'review'}
          className={`tab ${tab === 'review' ? 'active' : ''}`}
          onClick={() => setTab('review')}
        >
          {t('tabReview')}
        </button>
        <button
          role="tab"
          aria-selected={tab === 'weak'}
          className={`tab ${tab === 'weak' ? 'active' : ''}`}
          onClick={() => setTab('weak')}
        >
          {t('tabWeakAreas')}
        </button>
      </div>

      {tab === 'review' ? (
        <>
          <div className="missed-header">
            <div>
              <p className="due-count">
                <strong>{due.length}</strong> {t('dueNowLabel')}
              </p>
              {allMissed.length > due.length && (
                <p className="muted small">
                  {allMissed.length - due.length} {t('scheduledLaterLabel')}
                </p>
              )}
            </div>
            <button
              className="btn btn-cta"
              disabled={due.length === 0}
              onClick={() => navigate('/quiz?mode=missed')}
            >
              {t('startMissedReview')}
            </button>
          </div>

          {allMissed.length === 0 ? (
            <div className="card">
              <p>{t('missedEmpty')}</p>
            </div>
          ) : (
            <div className="missed-list">
              {allMissed.map(({ entry, question }) => {
                const open = openId === question.id
                const isDue = entry.dueDate <= Date.now()
                return (
                  <div key={question.id} className="card missed-card">
                    <div className="missed-meta">
                      <span className={`badge badge-${question.domain}`}>
                        {t(DOMAIN_LABEL_KEYS[question.domain])}
                      </span>
                      <span className="badge badge-missed">{t('missedTimes', { n: entry.count })}</span>
                      <span className={`badge ${isDue ? 'badge-due' : 'badge-scheduled'}`}>
                        {isDue ? t('dueNow') : t('scheduled')}
                      </span>
                    </div>
                    <p className="missed-question">{L(question.question)}</p>
                    <button
                      className="btn btn-secondary btn-small"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : question.id)}
                    >
                      {t('showAnswer')}
                    </button>
                    {open && (
                      <div className="feedback feedback-good missed-answer">
                        <p className="feedback-title">{L(question.options[question.correct])}</p>
                        <p>{L(question.explanation)}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <>
          {weakAreas.length === 0 ? (
            <div className="card">
              <p>{t('weakEmpty')}</p>
            </div>
          ) : (
            <div className="weak-list">
              {weakAreas.map((w) => (
                <div key={w.taskId} className="card weak-card">
                  <div className="weak-head">
                    <span className={`badge badge-${w.domain}`}>{t(DOMAIN_LABEL_KEYS[w.domain])}</span>
                    <span className="weak-pct">{w.pct}%</span>
                  </div>
                  <p className="weak-label">{taskLabel(w.taskId)}</p>
                  <div className="bar-track">
                    <div
                      className={`bar-fill ${w.pct < 60 ? 'bar-low' : w.pct < 80 ? 'bar-mid' : ''}`}
                      style={{ width: `${w.pct}%` }}
                    />
                  </div>
                  <div className="weak-footer">
                    <span className="muted small">
                      {w.correct}/{w.total}
                    </span>
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => navigate(`/quiz?mode=easy&task=${w.taskId}`)}
                    >
                      {t('practiceThisTask')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
