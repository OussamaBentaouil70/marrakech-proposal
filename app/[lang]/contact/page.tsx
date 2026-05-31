import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Contact – Plan Your Marrakech Celebration',
  description: 'Ready to begin planning your dream proposal, elopement, or wedding in Marrakech? Get in touch — we respond within 24 hours.',
}

export default function LangContactPage() {
  return <ContactContent />
}
