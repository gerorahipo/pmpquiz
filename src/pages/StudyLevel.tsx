import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadGlossary } from '../content'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { chunkIntoLevels } from '../lib/studyLevels'
import { markGlossarySeen } from '../lib/studyProgress'
import type { GlossaryCategory, GlossaryEntry } from '../data/glossary'

const CATEGORY_KEYS: Record<GlossaryCategory, 'glossFormula' | 'glossAgile' | 'glossProcess' | 'glossPeople'> = {
  formula: 'glossFormula',
  agile: 'glossAgile',
  process: 'glossProcess',
  people: 'glossPeople',
}

export default function StudyLevel() {
  const { t, L } = useI18n()
  const { domainId, levelIndex } = useParams()
  const [glossary, setGlossary] = useState<GlossaryEntry[] | null>(null)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadGlossary()
      .then((g) => !cancelled && setGlossary(g))
      .catch(() => !cancelled && setGlossary([]))
    return () => {
      cancelled = true
    }
  }, [])

  const domain = STUDY_DOMAINS.find((d) => d.id === domainId)
  const idx = Number(levelIndex)
  const levelIds = useMemo(() => (domain ? chunkIntoLevels(domain.glossaryIds)[idx] : undefined), [domain, idx])

  const cards = useMemo(() => {
    if (!glossary || !levelIds) return []
    const byId = new Map(glossary.map((e) => [e.id, e]))
    return levelIds.map((id) => byId.get(id)).filter((e): e is GlossaryEntry => Boolean(e))
  }, [glossary, levelIds])

  if (!domain || !levelIds) {
    return (
      <div className="page">
        <Link className="btn btn-secondary" to="/glossary/domains">
          ← {t('back')}
        </Link>
      </div>
    )
  }

  if (glossary === null) {
    return (
      <div className="page">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  const card = cards[pos]

  const flip = () => {
    setFlipped((f) => {
      const next = !f
      if (next && card) markGlossarySeen(card.id)
      return next
    })
  }
  const nextCard = () => {
    setFlipped(false)
    setPos((p) => (p + 1) % cards.length)
  }
  const prevCard = () => {
    setFlipped(false)
    setPos((p) => (p - 1 + cards.length) % cards.length)
  }

  return (
    <div className="page">
      <Link className="btn btn-secondary study-back-link" to={`/glossary/domains/${domain.id}`}>
        ← {t('back')}
      </Link>
      <h1>
        {L(domain.title)} — {t('studyLevelLabel')} {idx + 1}
      </h1>

      {card ? (
        <div className="flashcard-wrap">
          <button
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={flip}
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
              {pos + 1} / {cards.length}
            </span>
            <button className="btn btn-secondary" onClick={nextCard}>
              {t('next')} →
            </button>
          </div>
        </div>
      ) : (
        <p className="muted">{t('noResults')}</p>
      )}
    </div>
  )
}
