import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadConcepts } from '../content'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { chunkIntoLevels } from '../lib/studyLevels'
import { countSeen, isSeen } from '../lib/studyProgress'
import { pluralWord } from '../lib/pluralize'
import DomainIcon from '../components/DomainIcon'
import type { Concept } from '../types'

export default function StudyDomainDetail() {
  const { t, L } = useI18n()
  const { domainId } = useParams()
  const [, forceTick] = useState(0)
  useEffect(() => forceTick((n) => n + 1), [])

  const [concepts, setConcepts] = useState<Concept[] | null>(null)
  useEffect(() => {
    let cancelled = false
    loadConcepts()
      .then((c) => !cancelled && setConcepts(c))
      .catch(() => !cancelled && setConcepts([]))
    return () => {
      cancelled = true
    }
  }, [])

  const domain = STUDY_DOMAINS.find((d) => d.id === domainId)
  if (!domain) {
    return (
      <div className="page">
        <Link className="btn btn-secondary" to="/glossary/domains">
          ← {t('back')}
        </Link>
      </div>
    )
  }

  const levels = chunkIntoLevels(domain.glossaryIds)
  const seenTotal = countSeen(domain.glossaryIds, 'glossary')
  const pctTotal = domain.glossaryIds.length ? Math.round((seenTotal / domain.glossaryIds.length) * 100) : 0

  const domainConcepts = (concepts ?? []).filter((c) => domain.conceptIds.includes(c.id))

  return (
    <div className="page">
      <Link className="btn btn-secondary study-back-link" to="/glossary/domains">
        ← {t('back')}
      </Link>

      <section className={`study-domain-banner domain-${domain.color}`}>
        <div className="study-domain-banner-icon">
          <DomainIcon icon={domain.icon} className="study-domain-icon-svg" />
        </div>
        <div>
          <h1>{L(domain.title)}</h1>
          <p>{L(domain.description)}</p>
          <div className="study-progress-bar study-progress-bar-lg" aria-hidden="true">
            <span style={{ width: `${pctTotal}%` }} />
          </div>
          <span className="study-progress-pct">
            {t('studyDomainProgress')} {pctTotal}%
          </span>
        </div>
      </section>

      <h2 className="section-title">{t('studyLevelsHeading')}</h2>
      <div className="card-grid study-level-grid">
        {levels.map((levelIds, i) => {
          const seen = countSeen(levelIds, 'glossary')
          const pct = Math.round((seen / levelIds.length) * 100)
          const started = seen > 0
          return (
            <div key={i} className="card study-level-card">
              <div className="study-level-head">
                <span className="study-level-eyebrow">
                  {t('studyLevelLabel')} {i + 1}
                </span>
                <span className="badge badge-neutral study-level-badge">{i + 1}</span>
              </div>
              <h3>
                {levelIds.length} {pluralWord(levelIds.length, t('studyTermSingular'), t('studyTermPlural'))}
              </h3>
              <p className="muted">{t('studyLevelOnly')}</p>
              <p className="study-level-status">
                {levelIds.length} {pluralWord(levelIds.length, t('studyCardSingular'), t('studyCardPlural'))} ·{' '}
                {pct === 100 ? t('studyDone') : started ? t('studyInProgress') : t('studyNotStarted')}
              </p>
              <div className="study-progress-bar" aria-hidden="true">
                <span style={{ width: `${pct}%` }} />
              </div>
              <Link className="btn btn-cta btn-small" to={`/glossary/domains/${domain.id}/levels/${i}`}>
                {t('studyStudyLevel')}
              </Link>
            </div>
          )
        })}
      </div>

      {domainConcepts.length > 0 && (
        <>
          <h2 className="section-title">{t('studySheetsHeading')}</h2>
          <div className="card-grid study-sheet-grid">
            {domainConcepts.map((c) => (
              <Link key={c.id} to={`/concepts/${c.id}`} className="card concept-card study-sheet-card">
                <h2>{L(c.title)}</h2>
                <p>{L(c.summary)}</p>
                <span className="read-more">
                  {isSeen(c.id, 'concepts') ? t('studyRead') : t('readMore')} →
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
