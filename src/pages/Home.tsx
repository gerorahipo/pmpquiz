import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { api } from '../api'
import type { QuizMode } from '../types'
import type { UIKey } from '../i18n/translations'

interface ModeCard {
  mode: QuizMode
  labelKey: UIKey
  descKey: UIKey
  detail: string
  timed: boolean
}

const MODE_CARDS: ModeCard[] = [
  { mode: 'easy', labelKey: 'modeEasy', descKey: 'modeEasyDesc', detail: '10–15', timed: false },
  { mode: 'medium', labelKey: 'modeMedium', descKey: 'modeMediumDesc', detail: '50', timed: false },
  { mode: 'expert', labelKey: 'modeExpert', descKey: 'modeExpertDesc', detail: '120', timed: true },
  { mode: 'exam', labelKey: 'modeExam', descKey: 'modeExamDesc', detail: '180', timed: true },
]

export default function Home() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [missedCount, setMissedCount] = useState(0)

  useEffect(() => {
    api
      .dueReview()
      .then((m) => setMissedCount(m.length))
      .catch(() => setMissedCount(0))
  }, [])

  return (
    <div className="page">
      <section className="hero card">
        <h1>{t('homeTitle')}</h1>
        <p className="subtitle">{t('homeSubtitle')}</p>
      </section>

      <h2 className="section-title">{t('chooseLevel')}</h2>
      <div className="card-grid mode-grid">
        {MODE_CARDS.map((card) => (
          <section key={card.mode} className={`card mode-card mode-${card.mode}`}>
            <div className="mode-head">
              <h3>{t(card.labelKey)}</h3>
              <div className="mode-badges">
                <span className="badge badge-neutral">
                  {card.detail} {t('questionsLabel')}
                </span>
                {card.timed && (
                  <span className="badge badge-timed">
                    <svg viewBox="0 0 24 24" className="badge-icon" aria-hidden="true">
                      <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 9v4l2.5 2.5M9 2.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {t('timedLabel')}
                  </span>
                )}
              </div>
            </div>
            <p>{t(card.descKey)}</p>
            <button className="btn btn-cta" onClick={() => navigate(`/quiz?mode=${card.mode}`)}>
              {t('start')}
            </button>
          </section>
        ))}
      </div>

      <div className="card-grid">
        <section className="card feature-card">
          <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
            <path
              d="M12 20v-8m0 0l-3 3m3-3l3 3M5 4h14M7 4v3a5 5 0 0 0 10 0V4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>{t('missedTitle')}</h2>
          <p>
            {missedCount > 0 ? (
              <>
                <strong>{missedCount}</strong> {t('dueNowLabel')}
              </>
            ) : (
              t('missedEmpty')
            )}
          </p>
          <Link className="btn btn-secondary" to="/missed">
            {t('modeMissed')}
          </Link>
        </section>

        <section className="card feature-card">
          <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>{t('glossaryTitle')}</h2>
          <p>{t('glossaryCardDesc')}</p>
          <Link className="btn btn-secondary" to="/glossary">
            {t('openGlossary')}
          </Link>
        </section>

        <section className="card feature-card">
          <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
            <path
              d="M12 6.25c-2.5-1.7-5.5-1.9-8-1v13.5c2.5-.9 5.5-.7 8 1 2.5-1.7 5.5-1.9 8-1V5.25c-2.5-.9-5.5-.7-8 1zm0 0v13.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>{t('reviewCardTitle')}</h2>
          <p>{t('reviewCardDesc')}</p>
          <Link className="btn btn-secondary" to="/concepts">
            {t('openReview')}
          </Link>
        </section>

        <section className="card feature-card">
          <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
            <path
              d="M4 19.5V12m5.5 7.5v-13m5.5 13V9m5 10.5V5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <h2>{t('statsCardTitle')}</h2>
          <p>{t('statsCardDesc')}</p>
          <Link className="btn btn-secondary" to="/stats">
            {t('openStats')}
          </Link>
        </section>
      </div>
    </div>
  )
}
