import type { Metadata } from 'next'
import WeddingContent from '@/components/pages/WeddingContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Luxury Destination Weddings in Marrakech',
  description: 'We plan luxury destination weddings in Marrakech — from multi-day celebrations to intimate ceremonies.',
}

export default function LangWeddingPage() {
  return <WeddingContent />
}
