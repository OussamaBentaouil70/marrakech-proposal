import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'

export const metadata: Metadata = {
  title: 'Marrakech Proposal – Luxury Wedding & Event Planning in Marrakech',
  description: 'From romantic proposals and intimate elopements to luxury destination weddings, we create elegant, emotional, and beautifully curated experiences in Marrakech, Morocco.',
}

export default function HomePage() {
  return <HomeContent />
}
