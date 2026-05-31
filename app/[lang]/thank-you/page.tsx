import type { Metadata } from 'next'
import ThankYouPage from '@/app/thank-you/page'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Thank You – Marrakech Proposal',
}

export default function LangThankYouPage() {
  return <ThankYouPage />
}
