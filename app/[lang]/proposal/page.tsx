import type { Metadata } from 'next'
import ProposalContent from '@/components/pages/ProposalContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Luxury Marriage Proposals in Marrakech',
  description: 'We create magical, personalized marriage proposal experiences in Marrakech — from Agafay Desert setups to rooftops, riads, and hot air balloon proposals.',
}

export default function LangProposalPage() {
  return <ProposalContent />
}
