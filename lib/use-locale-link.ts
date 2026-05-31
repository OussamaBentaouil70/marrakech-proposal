'use client'
import { usePathname } from 'next/navigation'
import { getLangFromPath, localePath } from './locales'

export function useLocaleLink() {
  const pathname = usePathname()
  const lang = getLangFromPath(pathname)
  return (href: string) => localePath(lang, href)
}
