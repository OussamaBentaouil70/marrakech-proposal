'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import enData from '@/data/locales/en.json'
import frData from '@/data/locales/fr.json'
import esData from '@/data/locales/es.json'
import { getLangFromPath, type Lang } from '@/lib/locales'

type LocaleData = typeof enData

const localeMap: Record<Lang, LocaleData> = { en: enData, fr: frData, es: esData }

interface LocaleContextType {
  data: LocaleData
  setLocale: (locale: Lang) => void
}

const LocaleContext = createContext<LocaleContextType>({ data: enData, setLocale: () => {} })

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [data, setData] = useState<LocaleData>(localeMap[getLangFromPath(pathname)])

  // Sync when client-side navigation changes the URL
  useEffect(() => {
    setData(localeMap[getLangFromPath(pathname)])
  }, [pathname])

  const setLocale = (locale: Lang) => setData(localeMap[locale])

  return <LocaleContext.Provider value={{ data, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}
