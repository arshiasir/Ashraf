'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import faTranslations from '@/translations/fa'
import enTranslations from '@/translations/en'

type Language = 'fa' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fa: faTranslations,
  en: enTranslations,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'fa' || savedLanguage === 'en') {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      // Update HTML dir attribute for RTL support
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    }
  }

  useEffect(() => {
    if (!mounted) return
    // Update HTML attributes when language changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'
    }
  }, [language, mounted])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

