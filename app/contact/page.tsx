import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'

export const metadata: Metadata = {
  title: 'Contact – Plan Your Marrakech Celebration',
  description: 'Ready to begin planning your dream proposal, elopement, or wedding in Marrakech? Get in touch with our team — we respond within 24 hours.',
}

export default function ContactPage() {
  return <ContactContent />
}
