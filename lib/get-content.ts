import { cookies } from 'next/headers'
import enData from '@/data/locales/en.json'
import frData from '@/data/locales/fr.json'
import esData from '@/data/locales/es.json'

export type Locale = 'en' | 'fr' | 'es'

export async function getContent() {
  try {
    const cookieStore = await cookies()
    const locale = cookieStore.get('locale')?.value
    if (locale === 'fr') return frData
    if (locale === 'es') return esData
  } catch {
    // cookies() unavailable outside request context — fall through
  }
  return enData
}
