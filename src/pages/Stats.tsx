import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { api } from '../api'
import { MODE_LABEL_KEYS, formatDuration } from '../modeMeta'
import type { Attempt, Domain } from '../types'

const DOMAIN_LABEL_KEYS = {
  people: 'domainPeople',
  process: 'domainProcess',
  business: 'domainBusiness',
} as const

export default function Stats() {
  const { t, lang } = useI18n()
  const [attempts, setAttempts] = useState<Attempt[] | null>(null)

  useEffect(() => {
    api.listAttempts().then(setAttempts).catch(() => setAttempts([]))
  }, [])

  if (attempts === null) {
    return (
      <div className="page">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  const pct = (a: Attempt) => Math.round((a.correct / a.total) * 100)

  const avg =
    attempts.length > 0 ? Math.round(attempts.reduce((s, a) => s + pct(a), 0) / attempts.length) : 0
  const best = attempts.length > 0 ? Math.max(...attempts.map(pct)) : 0
  const last = attempts.length > 0 ? pct(attempts[0]) : 0

  const domainTotals: Record<Domain, { total: number; correct: number }> = {
    people: { total: 0, correct: 0 },
    process: { total: 0, correct: 0 },
    business: { total: 0, correct: 0 },
  }
  for (const a of attempts) {
    for (const d of Object.keys(domainTotals) as Domain[]) {
      domainTotals[d].total += a.domains[d].total
      domainTotals[d].correct += a.domains[d].correct
    }
  }

  const reset = async () => {
    if (!window.confirm(t('confirmReset'))) return
    await api.clearAttempts()
    setAttempts([])
  }

  const dateFormatter = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <div className="page">
      <h1>{t('statsTitle')}</h1>

      {attempts.length === 0 ? (
        <div className="card">
          <p>{t('statsEmpty')}</p>
        </div>
      ) : (
        <>
          <div className="stat-grid">
            <div className="card stat-card">
              <span className="stat-value">{attempts.length}</span>
              <span className="stat-label">{t('attemptsCount')}</span>
            </div>
            <div className="card stat-card">
              <span className="stat-value">{avg}%</span>
              <span className="stat-label">{t('avgScore')}</span>
            </div>
            <div className="card stat-card">
              <span className="stat-value">{best}%</span>
              <span className="stat-label">{t('bestScore')}</span>
            </div>
            <div className="card stat-card">
              <span className="stat-value">{last}%</span>
              <span className="stat-label">{t('lastScore')}</span>
            </div>
          </div>

          <section className="card">
            <h2>{t('byDomain')}</h2>
            <div className="domain-bars">
              {(Object.keys(domainTotals) as Domain[])
                .filter((d) => domainTotals[d].total > 0)
                .map((d) => {
                  const s = domainTotals[d]
                  const dpct = Math.round((s.correct / s.total) * 100)
                  return (
                    <div key={d} className="domain-bar">
                      <span className="domain-bar-label">
                        {t(DOMAIN_LABEL_KEYS[d])} — {dpct}% ({s.correct}/{s.total})
                      </span>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: `${dpct}%` }} />
                      </div>
                    </div>
                  )
                })}
            </div>
          </section>

          <section className="card">
            <h2>{t('history')}</h2>
            <table className="history-table">
              <thead>
                <tr>
                  <th>{t('date')}</th>
                  <th>{t('modeLabel')}</th>
                  <th>{t('score')}</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((a) => (
                  <tr key={a.id ?? a.date}>
                    <td>{dateFormatter.format(new Date(a.date))}</td>
                    <td>
                      {a.mode ? t(MODE_LABEL_KEYS[a.mode]) : '—'}
                      {a.durationSec !== undefined && (
                        <span className="muted"> · {formatDuration(a.durationSec)}</span>
                      )}
                    </td>
                    <td>
                      <strong>{pct(a)}%</strong>{' '}
                      <span className="muted">
                        ({a.correct}/{a.total})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-danger" onClick={reset}>
              {t('resetData')}
            </button>
          </section>
        </>
      )}
    </div>
  )
}
