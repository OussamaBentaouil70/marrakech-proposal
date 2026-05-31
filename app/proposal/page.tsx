import type { Metadata } from 'next'
import ProposalContent from '@/components/pages/ProposalContent'

export const metadata: Metadata = {
  title: 'Luxury Marriage Proposals in Marrakech',
  description: 'We create magical, personalized marriage proposal experiences in Marrakech — from Agafay Desert setups to rooftops, riads, and hot air balloon proposals.',
}

export default function ProposalPage() {
  return <ProposalContent />
}
