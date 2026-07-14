import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n'
import { loadGlossary } from '../content'
import type { GlossaryCategory, GlossaryEntry } from '../data/glossary'

type View = 'cards' | 'list'

const CATEGORY_KEYS: Record<GlossaryCategory, 'glossFormula' | 'glossAgile' | 'glossProcess' | 'glossPeople'> = {
  formula: 'glossFormula',
  agile: 'glossAgile',
  process: 'glossProcess',
  people: 'glossPeople',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Glossary() {
  const { t, L } = useI18n()
  const [view, setView] = useState<View>('cards')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<GlossaryCategory | 'all'>('all')

  const [glossary, setGlossary] = useState<GlossaryEntry[] | null>(null)
  const [error, setError] = useState(false)

  // flashcard state
  const [order, setOrder] = useState<number[]>([])
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadGlossary()
      .then((g) => {
        if (cancelled) return
        setGlossary(g)
        setOrder(g.map((_, i) => i))
      })
      .catch(() => !cancelled && setError(true))
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (glossary ?? []).filter((e) => {
      if (category !== 'all' && e.category !== category) return false
      if (!q) return true
      return L(e.term).toLowerCase().includes(q) || L(e.definition).toLowerCase().includes(q)
    })
  }, [query, category, L, glossary])

  if (error) {
    return (
      <div className="page">
        <h1>{t('glossaryTitle')}</h1>
        <div className="card">
          <p>{t('loadError')}</p>
        </div>
      </div>
    )
  }

  if (glossary === null || order.length === 0) {
    return (
      <div className="page">
        <h1>{t('glossaryTitle')}</h1>
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  const card = glossary[order[pos]]

  const nextCard = () => {
    setFlipped(false)
    setPos((p) => (p + 1) % order.length)
  }
  const prevCard = () => {
    setFlipped(false)
    setPos((p) => (p - 1 + order.length) % order.length)
  }
  const shuffleCards = () => {
    setOrder(shuffle(glossary.map((_, i) => i)))
    setPos(0)
    setFlipped(false)
  }

  return (
    <div className="page">
      <h1>{t('glossaryTitle')}</h1>
      <p className="subtitle">{t('glossarySubtitle')}</p>

      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={view === 'cards'}
          className={`tab ${view === 'cards' ? 'active' : ''}`}
          onClick={() => setView('cards')}
        >
          {t('flashcards')}
        </button>
        <button
          role="tab"
          aria-selected={view === 'list'}
          className={`tab ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          {t('glossaryList')}
        </button>
      </div>

      {view === 'cards' ? (
        <div className="flashcard-wrap">
          <button
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            aria-label={flipped ? t('flashcardBack') : t('flashcardFront')}
          >
            <div className="flashcard-inner">
              <div className="flashcard-face flashcard-front">
                <span className="badge badge-neutral">{t(CATEGORY_KEYS[card.category])}</span>
                <span className="flashcard-term">{L(card.term)}</span>
                <span className="flashcard-hint">{t('tapToFlip')}</span>
              </div>
              <div className="flashcard-face flashcard-back">
                <span className="flashcard-def">{L(card.definition)}</span>
              </div>
            </div>
          </button>

          <div className="flashcard-controls">
            <button className="btn btn-secondary" onClick={prevCard}>
              ← {t('prev')}
            </button>
            <span className="flashcard-counter">
              {pos + 1} / {order.length}
            </span>
            <button className="btn btn-secondary" onClick={nextCard}>
              {t('next')} →
            </button>
          </div>
          <div className="btn-row flashcard-shuffle">
            <button className="btn btn-cta btn-small" onClick={shuffleCards}>
              {t('shuffle')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="gloss-filters">
            <input
              type="search"
              className="gloss-search"
              placeholder={t('searchPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={t('searchPlaceholder')}
            />
            <div className="tabs gloss-cats">
              <button className={`tab ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>
                {t('glossAll')}
              </button>
              {(Object.keys(CATEGORY_KEYS) as GlossaryCategory[]).map((c) => (
                <button key={c} className={`tab ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>
                  {t(CATEGORY_KEYS[c])}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="card">
              <p className="muted">{t('noResults')}</p>
            </div>
          ) : (
            <div className="gloss-list">
              {filtered.map((e) => (
                <div key={e.id} className="card gloss-item">
                  <div className="gloss-item-head">
                    <span className="gloss-term">{L(e.term)}</span>
                    <span className="badge badge-neutral">{t(CATEGORY_KEYS[e.category])}</span>
                  </div>
                  <p className="gloss-def">{L(e.definition)}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
