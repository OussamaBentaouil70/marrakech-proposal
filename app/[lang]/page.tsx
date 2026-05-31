import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Marrakech Proposal – Luxury Wedding & Event Planning',
  description: 'From romantic proposals and intimate elopements to luxury destination weddings, we create elegant experiences in Marrakech, Morocco.',
}

export default function LangHomePage() {
  return <HomeContent />
}
