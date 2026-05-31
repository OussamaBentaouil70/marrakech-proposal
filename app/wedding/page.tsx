import type { Metadata } from 'next'
import WeddingContent from '@/components/pages/WeddingContent'

export const metadata: Metadata = {
  title: 'Luxury Destination Weddings in Marrakech',
  description: 'We plan luxury destination weddings in Marrakech — from multi-day Indian celebrations to intimate ceremonies, with exceptional venues, full coordination, and elegant execution.',
}

export default function WeddingPage() {
  return <WeddingContent />
}
