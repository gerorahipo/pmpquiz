import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadConcepts } from '../content'
import type { Concept } from '../types'

export default function ConceptDetail() {
  const { t, L } = useI18n()
  const { id } = useParams()
  const [expanded, setExpanded] = useState(false)
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

  if (concepts === null) {
    return (
      <div className="page">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  const concept = concepts.find((c) => c.id === id)
  if (!concept) {
    return (
      <div className="page">
        <Link className="btn btn-secondary" to="/concepts">
          ← {t('back')}
        </Link>
      </div>
    )
  }

  const categoryLabel =
    concept.category === 'principle'
      ? t('catPrinciples')
      : concept.category === 'performance'
        ? t('catPerformance')
        : t('catTopics')

  const hasMore = Boolean(concept.details || concept.examples || concept.traps)

  return (
    <div className="page concept-detail">
      <Link className="back-link" to="/concepts">
        ← {t('back')}
      </Link>
      <article className="card">
        <span className="badge badge-neutral">{categoryLabel}</span>
        <h1>{L(concept.title)}</h1>
        <p className="concept-summary">{L(concept.summary)}</p>
        <p className="concept-body">{L(concept.body)}</p>

        {hasMore && (
          <div className="concept-disclosure">
            <button
              type="button"
              className="disclosure-toggle"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                className={`disclosure-chevron ${expanded ? 'open' : ''}`}
                aria-hidden="true"
              >
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {expanded ? t('hideDetails') : t('seeDetails')}
            </button>

            {expanded && (
              <div className="disclosure-content">
                {concept.details && (
                  <section className="disclosure-section">
                    <h2>{t('detailsHeading')}</h2>
                    <p className="concept-details">{L(concept.details)}</p>
                  </section>
                )}
                {concept.examples && (
                  <section className="disclosure-section">
                    <h2>{t('examplesHeading')}</h2>
                    <p className="concept-examples">{L(concept.examples)}</p>
                  </section>
                )}
                {concept.traps && (
                  <section className="disclosure-section disclosure-traps">
                    <h2>{t('trapsHeading')}</h2>
                    <p className="concept-traps">{L(concept.traps)}</p>
                  </section>
                )}
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  )
}
