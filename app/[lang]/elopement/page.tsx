import type { Metadata } from 'next'
import ElopementContent from '@/components/pages/ElopementContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Intimate Elopements in Marrakech',
  description: 'We design beautifully curated elopement experiences in Marrakech — intimate, elegant, and deeply personal.',
}

export default function LangElopementPage() {
  return <ElopementContent />
}
