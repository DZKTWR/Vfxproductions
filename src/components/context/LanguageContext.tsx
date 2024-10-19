'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type LanguageContextType = {
  language: 'en' | 'es'
  setLanguage: (lang: 'en' | 'es') => void
  t: (text: string) => string
}

const translations: { [key: string]: string } = {
    'Coureses': 'Cursos',
    'Gallery': 'Galleria',
    'Recourses': 'Recursos',
    'About': 'Acerca',
    'Login': 'Iniciar Seccion',
    'SingUp': 'Registro',
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as 'en' | 'es'
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      const browserLang = navigator.language.split('-')[0]
      setLanguage(browserLang === 'es' ? 'es' : 'en')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (text: string): string => {
    if (language === 'en') return text
    return translations[text] || text
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