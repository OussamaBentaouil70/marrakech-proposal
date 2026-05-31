'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import enData from '@/data/locales/en.json'
import frData from '@/data/locales/fr.json'
import esData from '@/data/locales/es.json'

type LocaleData = typeof enData
type Locale = 'en' | 'fr' | 'es'

const localeMap: Record<Locale, LocaleData> = { en: enData, fr: frData, es: esData }

interface LocaleContextType {
  data: LocaleData
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType>({ data: enData, setLocale: () => {} })

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<LocaleData>(enData)

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)locale=([^;]+)/)
    const locale = match?.[1] as Locale
    if (locale && localeMap[locale]) setData(localeMap[locale])
  }, [])

  const setLocale = (locale: Locale) => {
    if (localeMap[locale]) {
      setData(localeMap[locale])
      document.cookie = `locale=${locale}; path=/; max-age=31536000`
    }
  }

  return <LocaleContext.Provider value={{ data, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}
