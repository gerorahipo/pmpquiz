import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadConcepts, loadGlossary } from '../content'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { chunkIntoLevels } from '../lib/studyLevels'

export default function StudyLanding() {
  const { t } = useI18n()
  const [glossaryCount, setGlossaryCount] = useState<number | null>(null)
  const [conceptCount, setConceptCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    loadGlossary()
      .then((g) => !cancelled && setGlossaryCount(g.length))
      .catch(() => !cancelled && setGlossaryCount(0))
    loadConcepts()
      .then((c) => !cancelled && setConceptCount(c.length))
      .catch(() => !cancelled && setConceptCount(0))
    return () => {
      cancelled = true
    }
  }, [])

  const levelCount = STUDY_DOMAINS.reduce((n, d) => n + chunkIntoLevels(d.glossaryIds).length, 0)

  return (
    <div className="page study-landing">
      <section className="study-hero">
        <p className="study-hero-eyebrow">{t('studyEyebrow')}</p>
        <h1>{t('studyHeroTitle')}</h1>
        <p className="study-hero-sub">{t('studyHeroSub')}</p>
        <Link className="btn btn-cta btn-lg" to="/glossary/domains">
          {t('studyStartNow')}
        </Link>
      </section>

      <div className="study-stats-grid">
        <div className="card study-stat-card">
          <span className="study-stat-value">{glossaryCount ?? '—'}</span>
          <span className="study-stat-label">{t('studyStatTerms')}</span>
        </div>
        <div className="card study-stat-card">
          <span className="study-stat-value">{STUDY_DOMAINS.length}</span>
          <span className="study-stat-label">{t('studyStatDomains')}</span>
        </div>
        <div className="card study-stat-card">
          <span className="study-stat-value">{levelCount}</span>
          <span className="study-stat-label">{t('studyStatLevels')}</span>
        </div>
        <div className="card study-stat-card">
          <span className="study-stat-value">{conceptCount ?? '—'}</span>
          <span className="study-stat-label">{t('studyStatSheets')}</span>
        </div>
      </div>

      <p className="study-landing-footer">
        {t('studyAllTermsHint')}{' '}
        <Link to="/glossary/all">{t('studyAllTermsLink')}</Link>
      </p>
    </div>
  )
}
