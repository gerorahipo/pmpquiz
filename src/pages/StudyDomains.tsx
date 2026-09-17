import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { chunkIntoLevels } from '../lib/studyLevels'
import { glossaryProgressPct } from '../lib/studyProgress'
import { pluralWord } from '../lib/pluralize'
import DomainIcon from '../components/DomainIcon'

export default function StudyDomains() {
  const { t, L } = useI18n()
  // re-render once on mount so progress bars reflect localStorage state
  const [, forceTick] = useState(0)
  useEffect(() => forceTick((n) => n + 1), [])

  return (
    <div className="page">
      <div className="study-domains-head">
        <div>
          <h1>{t('studyDomainsTitle')}</h1>
          <p className="subtitle">{t('studyDomainsSubtitle')}</p>
        </div>
        <Link className="btn btn-secondary" to="/glossary/game">
          {t('sortGameTitle')}
        </Link>
      </div>

      <div className="card-grid study-domain-grid">
        {STUDY_DOMAINS.map((d) => {
          const levels = chunkIntoLevels(d.glossaryIds)
          const pct = glossaryProgressPct(d.glossaryIds)
          return (
            <Link key={d.id} to={`/glossary/domains/${d.id}`} className={`card study-domain-card domain-${d.color}`}>
              <div className="study-domain-icon">
                <DomainIcon icon={d.icon} className="study-domain-icon-svg" />
              </div>
              <h2>{L(d.title)}</h2>
              <p>{L(d.description)}</p>
              <div className="study-domain-meta">
                <span>
                  {d.glossaryIds.length} {pluralWord(d.glossaryIds.length, t('studyTermSingular'), t('studyTermPlural'))}
                </span>
                <span>
                  {levels.length} {pluralWord(levels.length, t('studyLevelSingular'), t('studyLevelPlural'))}
                </span>
              </div>
              <div className="study-progress-bar" aria-hidden="true">
                <span style={{ width: `${pct}%` }} />
              </div>
              <span className="study-progress-pct">{pct}%</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
