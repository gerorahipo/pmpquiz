import { NavLink, Route, Routes } from 'react-router-dom'
import { useI18n } from './i18n'
import { useAuth } from './auth'
import { LANGS } from './i18n/translations'
import type { Lang } from './types'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Concepts from './pages/Concepts'
import ConceptDetail from './pages/ConceptDetail'
import Missed from './pages/Missed'
import Glossary from './pages/Glossary'
import Stats from './pages/Stats'
import Auth from './pages/Auth'

function Logo() {
  return (
    <svg viewBox="0 0 512 512" className="logo" aria-hidden="true">
      <rect width="512" height="512" rx="112" fill="#4F46E5" />
      <path
        d="M156 356V156h96a72 72 0 0 1 0 144h-48v56z"
        fill="none"
        stroke="#EEF2FF"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="352" cy="332" r="60" fill="#22C55E" />
      <path
        d="M328 332l18 18 32-36"
        fill="none"
        stroke="#EEF2FF"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const { t, lang, setLang } = useI18n()
  const { user, ready, logout } = useAuth()

  // Wait for the initial token check before deciding what to render.
  if (!ready) {
    return (
      <div className="app boot">
        <p className="muted">{t('loading')}</p>
      </div>
    )
  }

  // Account-required: no session → the auth screen is the whole app.
  if (!user) {
    return <Auth />
  }

  return (
    <div className="app">
      <header className="header">
        <NavLink to="/" className="brand">
          <Logo />
          <span>{t('appName')}</span>
        </NavLink>
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>
            {t('navHome')}
          </NavLink>
          <NavLink to="/concepts">{t('navReview')}</NavLink>
          <NavLink to="/glossary">{t('navGlossary')}</NavLink>
          <NavLink to="/stats">{t('navStats')}</NavLink>
        </nav>
        <div className="header-account">
          <span className="account-email" title={user.email}>{user.email}</span>
          <button className="btn-logout" onClick={logout}>
            {t('logout')}
          </button>
        </div>
        <label className="lang-switch">
          <span className="visually-hidden">{t('languageLabel')}</span>
          <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/concepts/:id" element={<ConceptDetail />} />
          <Route path="/missed" element={<Missed />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          PMP®, PMBOK® — marques déposées du Project Management Institute, Inc. / registered
          trademarks of the Project Management Institute, Inc.
        </p>
      </footer>
    </div>
  )
}
