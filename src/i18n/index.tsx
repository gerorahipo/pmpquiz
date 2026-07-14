import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, Localized } from '../types'
import { translations, type UIKey } from './translations'

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** translate a UI string key, with optional {placeholder} params */
  t: (key: UIKey, params?: Record<string, string | number>) => string
  /** pick the current language variant of a localized content object */
  L: (value: Localized) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectLang(): Lang {
  const stored = localStorage.getItem('pmpquiz-lang')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem('pmpquiz-lang', next)
  }, [])

  const t = useCallback(
    (key: UIKey, params?: Record<string, string | number>) => {
      let text: string = translations[lang][key]
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(`{${k}}`, String(v))
        }
      }
      return text
    },
    [lang],
  )

  const L = useCallback((value: Localized) => value[lang], [lang])

  return <I18nContext.Provider value={{ lang, setLang, t, L }}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
