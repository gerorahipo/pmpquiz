import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n'
import { loadGlossary } from '../content'
import { STUDY_DOMAINS } from '../data/studyDomains'
import { chunkIntoLevels } from '../lib/studyLevels'
import { rateGlossaryTerm, glossaryProgressPct, type GlossaryRating } from '../lib/studyProgress'
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
  const [finished, setFinished] = useState(false)

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

  const restart = () => {
    setPos(0)
    setFlipped(false)
    setFinished(false)
  }

  if (finished) {
    const pct = glossaryProgressPct(levelIds)
    return (
      <div className="page">
        <Link className="btn btn-secondary study-back-link" to={`/glossary/domains/${domain.id}`}>
          ← {t('back')}
        </Link>
        <div className={`card study-level-done domain-${domain.color}`}>
          <h1>{t('studyLevelComplete')}</h1>
          <p className="study-progress-pct study-level-done-pct">{pct}%</p>
          <div className="btn-row">
            <button className="btn btn-cta" onClick={restart}>
              {t('studyRestartLevel')}
            </button>
            <Link className="btn btn-secondary" to={`/glossary/domains/${domain.id}`}>
              {t('studyBackToDomain')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const card = cards[pos]

  const flip = () => setFlipped(true)

  const rate = (rating: GlossaryRating) => {
    if (!card) return
    rateGlossaryTerm(card.id, rating)
    if (pos + 1 >= cards.length) {
      setFinished(true)
    } else {
      setPos((p) => p + 1)
      setFlipped(false)
    }
  }

  return (
    <div className="page">
      <Link className="btn btn-secondary study-back-link" to={`/glossary/domains/${domain.id}`}>
        ← {t('back')}
      </Link>
      <div className="study-level-header">
        <h1>
          {L(domain.title)} — {t('studyLevelLabel')} {idx + 1}
        </h1>
        {cards.length > 0 && (
          <span className="study-level-counter">
            {pos + 1} {t('studyCounterOf')} {cards.length}
          </span>
        )}
      </div>

      {card ? (
        <div className="flashcard-wrap">
          <button
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={flip}
            disabled={flipped}
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

          {flipped && (
            <div className="study-rate">
              <p className="study-rate-prompt">{t('studyDidYouKnow')}</p>
              <div className="study-rate-buttons">
                <button className="study-rate-btn study-rate-no" onClick={() => rate(0)}>
                  <span aria-hidden="true">✗</span> {t('studyRateNo')}
                </button>
                <button className="study-rate-btn study-rate-almost" onClick={() => rate(1)}>
                  <span aria-hidden="true">−</span> {t('studyRateAlmost')}
                </button>
                <button className="study-rate-btn study-rate-yes" onClick={() => rate(2)}>
                  <span aria-hidden="true">✓</span> {t('studyRateYes')}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="muted">{t('noResults')}</p>
      )}
    </div>
  )
}
