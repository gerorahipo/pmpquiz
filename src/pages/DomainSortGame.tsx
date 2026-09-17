import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { ECO_SORT_TASKS } from '../data/ecoTaskSort'
import DomainIcon from '../components/DomainIcon'

type Mode = 'sort' | 'fix'
/** null = still in the unsorted pool */
type Placements = Record<string, string | null>

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function freshPlacements(mode: Mode): Placements {
  const placements: Placements = {}
  for (const task of ECO_SORT_TASKS) {
    if (mode === 'sort') {
      placements[task.id] = null
    } else {
      const wrong = STUDY_DOMAINS.filter((d) => d.id !== task.domainId)
      placements[task.id] = wrong[Math.floor(Math.random() * wrong.length)].id
    }
  }
  return placements
}

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function DomainSortGame() {
  const { t, L } = useI18n()
  const [mode, setMode] = useState<Mode>('sort')
  const [placements, setPlacements] = useState<Placements>(() => freshPlacements('sort'))
  const [poolOrder, setPoolOrder] = useState<string[]>(() => shuffle(ECO_SORT_TASKS.map((tk) => tk.id)))
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setElapsed((s) => s + 1), 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const taskById = useMemo(() => new Map(ECO_SORT_TASKS.map((tk) => [tk.id, tk])), [])

  const reset = (nextMode: Mode) => {
    setMode(nextMode)
    setPlacements(freshPlacements(nextMode))
    setPoolOrder(shuffle(ECO_SORT_TASKS.map((tk) => tk.id)))
    setSelected(null)
    setRevealed(false)
    setElapsed(0)
  }

  const shufflePool = () => setPoolOrder((order) => shuffle(order))

  const place = (taskId: string, domainId: string | null) => {
    setPlacements((p) => ({ ...p, [taskId]: domainId }))
    setSelected(null)
  }

  const toggleSelect = (taskId: string) => {
    setSelected((cur) => (cur === taskId ? null : taskId))
  }

  const showSolution = () => {
    const solved: Placements = {}
    for (const task of ECO_SORT_TASKS) solved[task.id] = task.domainId
    setPlacements(solved)
    setRevealed(true)
    setSelected(null)
  }

  const answered = ECO_SORT_TASKS.filter((tk) => placements[tk.id] !== null).length
  const correct = ECO_SORT_TASKS.filter((tk) => placements[tk.id] === tk.domainId).length

  const cardClass = (taskId: string, domainId: string | null) => {
    const classes = ['study-sort-card']
    if (selected === taskId) classes.push('study-sort-card-selected')
    if (revealed && domainId !== null) {
      classes.push(taskById.get(taskId)?.domainId === domainId ? 'study-sort-card-correct' : 'study-sort-card-wrong')
    }
    return classes.join(' ')
  }

  const pool = poolOrder.filter((id) => placements[id] === null)

  return (
    <div className="page">
      <h1>{t('sortGameTitle')}</h1>
      <p className="subtitle">{t('sortGameSubtitle')}</p>

      <div className="tabs" role="tablist">
        <button role="tab" aria-selected={mode === 'sort'} className={`tab ${mode === 'sort' ? 'active' : ''}`} onClick={() => reset('sort')}>
          {t('sortGameModeSort')}
        </button>
        <button role="tab" aria-selected={mode === 'fix'} className={`tab ${mode === 'fix' ? 'active' : ''}`} onClick={() => reset('fix')}>
          {t('sortGameModeFix')}
        </button>
      </div>
      <p className="muted study-sort-mode-desc">{mode === 'sort' ? t('sortGameModeSortDesc') : t('sortGameModeFixDesc')}</p>

      <div className="study-sort-stats">
        <div className="card study-stat-card">
          <span className="study-stat-value">
            {answered}/{ECO_SORT_TASKS.length}
          </span>
          <span className="study-stat-label">{t('sortGameProgress')}</span>
        </div>
        <div className="card study-stat-card">
          <span className="study-stat-value">{revealed ? `${correct}/${ECO_SORT_TASKS.length}` : '—'}</span>
          <span className="study-stat-label">{t('sortGameScore')}</span>
        </div>
        <div className="card study-stat-card">
          <span className="study-stat-value">{formatTime(elapsed)}</span>
          <span className="study-stat-label">{t('sortGameTime')}</span>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-cta" onClick={() => setRevealed(true)}>
          {t('sortGameVerify')}
        </button>
        <button className="btn btn-secondary" onClick={shufflePool} disabled={pool.length === 0}>
          {t('shuffle')}
        </button>
        <button className="btn btn-secondary" onClick={() => reset(mode)}>
          {t('sortGameRestart')}
        </button>
        <button className="btn btn-secondary" onClick={showSolution}>
          {t('sortGameSolution')}
        </button>
      </div>

      <h2 className="section-title">{t('sortGamePoolHeading')}</h2>
      <div
        className={`study-sort-zone study-sort-pool ${selected ? 'study-sort-zone-active' : ''}`}
        onClick={() => selected && place(selected, null)}
      >
        {pool.length === 0 ? (
          <p className="muted study-sort-empty">{t('sortGamePoolEmpty')}</p>
        ) : (
          pool.map((id) => (
            <button
              key={id}
              className={cardClass(id, null)}
              onClick={(e) => {
                e.stopPropagation()
                toggleSelect(id)
              }}
            >
              {L(taskById.get(id)!.title)}
            </button>
          ))
        )}
      </div>

      <h2 className="section-title">{t('sortGameDomainsHeading')}</h2>
      <div className="study-sort-domains">
        {STUDY_DOMAINS.map((d) => {
          const items = ECO_SORT_TASKS.filter((tk) => placements[tk.id] === d.id)
          return (
            <div
              key={d.id}
              className={`card study-sort-zone domain-${d.color} ${selected ? 'study-sort-zone-active' : ''}`}
              onClick={() => selected && place(selected, d.id)}
            >
              <div className="study-sort-zone-head">
                <DomainIcon icon={d.icon} className="study-sort-zone-icon" />
                <h3>{L(d.title)}</h3>
                <span className="badge badge-neutral">{items.length}</span>
              </div>
              <div className="study-sort-zone-cards">
                {items.length === 0 ? (
                  <p className="muted study-sort-empty">{t('sortGameDropHere')}</p>
                ) : (
                  items.map((tk) => (
                    <button
                      key={tk.id}
                      className={cardClass(tk.id, d.id)}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleSelect(tk.id)
                      }}
                    >
                      {L(tk.title)}
                    </button>
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
