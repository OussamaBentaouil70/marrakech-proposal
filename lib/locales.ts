export type Lang = 'en' | 'fr' | 'es'
export const LOCALE_LANGS: Array<'fr' | 'es'> = ['fr', 'es'] // non-default locales

export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split('/')[1]
  if (seg === 'fr') return 'fr'
  if (seg === 'es') return 'es'
  return 'en'
}

/** Returns the locale prefix for a path, or '' for English (root) */
export function localePath(lang: Lang, href: string): string {
  return lang === 'en' ? href : `/${lang}${href}`
}
