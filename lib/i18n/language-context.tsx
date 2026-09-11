'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'en' | 'zh'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const STORAGE_KEY = 'vega-language'

// A default value (rather than `undefined`) means components/hooks that use
// this context still work in isolation (e.g. in unit tests) without needing
// to be wrapped in <LanguageProvider>. The real app always wraps everything
// in the provider (see app/layout.tsx) so toggling + persistence works.
const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'en' || stored === 'zh') {
        setLanguageState(stored)
      }
    } catch {
      // localStorage can throw in some privacy modes — fall back to default.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore write failures (private browsing, storage disabled, etc.)
    }
  }

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
