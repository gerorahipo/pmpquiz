import { useState } from 'react'
import { useI18n } from '../i18n'
import { useAuth } from '../auth'
import { LANGS } from '../i18n/translations'
import { ApiError } from '../api'
import type { Lang } from '../types'

type Mode = 'login' | 'register'

function Logo() {
  return (
    <svg viewBox="0 0 512 512" className="auth-logo" aria-hidden="true">
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

export default function Auth() {
  const { t, lang, setLang } = useI18n()
  const { login, register } = useAuth()

  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // store the error as an i18n key so it re-translates when the language changes
  const [errorKey, setErrorKey] = useState<'errNetwork' | 'errInvalidCredentials' | 'errEmailTaken' | 'errValidation' | 'errGeneric' | null>(null)
  const [busy, setBusy] = useState(false)

  const errorKeyFor = (err: unknown): typeof errorKey => {
    if (err instanceof ApiError) {
      if (err.status === 0) return 'errNetwork'
      if (err.status === 401) return 'errInvalidCredentials'
      if (err.status === 409) return 'errEmailTaken'
      if (err.status === 422) return 'errValidation'
    }
    return 'errGeneric'
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorKey(null)
    setBusy(true)
    try {
      if (mode === 'login') await login(email.trim(), password)
      else await register(email.trim(), password)
      // success → AuthProvider updates user, App swaps to the app shell
    } catch (err) {
      setErrorKey(errorKeyFor(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-lang">
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
      </div>

      <div className="card auth-card">
        <div className="auth-head">
          <Logo />
          <h1>{t('appName')}</h1>
          <p className="subtitle">{t('tagline')}</p>
        </div>

        <div className="tabs auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={mode === 'login'}
            className={`tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setErrorKey(null) }}
          >
            {t('login')}
          </button>
          <button
            role="tab"
            aria-selected={mode === 'register'}
            className={`tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setErrorKey(null) }}
          >
            {t('register')}
          </button>
        </div>

        <form className="auth-form" onSubmit={submit}>
          <label className="field">
            <span>{t('email')}</span>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="field">
            <span>{t('password')}</span>
            <input
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {mode === 'register' && <small className="field-hint">{t('passwordHint')}</small>}
          </label>

          {errorKey && <p className="auth-error" role="alert">{t(errorKey)}</p>}

          <button className="btn btn-cta auth-submit" type="submit" disabled={busy}>
            {busy ? t('loading') : mode === 'login' ? t('login') : t('register')}
          </button>
        </form>
      </div>

      <p className="footer auth-footer">
        PMP®, PMBOK® — Project Management Institute, Inc.
      </p>
    </div>
  )
}
