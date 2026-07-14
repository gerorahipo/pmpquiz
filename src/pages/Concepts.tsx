import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadConcepts } from '../content'
import type { Concept, ConceptCategory } from '../types'

const CATEGORIES: { id: ConceptCategory; labelKey: 'catPrinciples' | 'catPerformance' | 'catTopics' }[] = [
  { id: 'principle', labelKey: 'catPrinciples' },
  { id: 'performance', labelKey: 'catPerformance' },
  { id: 'topic', labelKey: 'catTopics' },
]

export default function Concepts() {
  const { t, L } = useI18n()
  const [category, setCategory] = useState<ConceptCategory>('principle')
  const [concepts, setConcepts] = useState<Concept[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setError(false)
    loadConcepts()
      .then((c) => !cancelled && setConcepts(c))
      .catch(() => !cancelled && setError(true))
    return () => {
      cancelled = true
    }
  }, [])

  const items = concepts?.filter((c) => c.category === category) ?? []

  return (
    <div className="page">
      <h1>{t('conceptsTitle')}</h1>
      <p className="subtitle">{t('conceptsSubtitle')}</p>

      {error ? (
        <div className="card">
          <p>{t('loadError')}</p>
        </div>
      ) : concepts === null ? (
        <p className="muted">{t('loading')}</p>
      ) : (
        <>
          <div className="tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={category === cat.id}
                className={`tab ${category === cat.id ? 'active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>

          <div className="card-grid concepts-grid">
            {items.map((c) => (
              <Link key={c.id} to={`/concepts/${c.id}`} className="card concept-card">
                <h2>{L(c.title)}</h2>
                <p>{L(c.summary)}</p>
                <span className="read-more">{t('readMore')} →</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
