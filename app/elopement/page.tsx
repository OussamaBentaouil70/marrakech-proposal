import type { Metadata } from 'next'
import ElopementContent from '@/components/pages/ElopementContent'

export const metadata: Metadata = {
  title: 'Intimate Elopements in Marrakech',
  description: 'We design beautifully curated elopement experiences in Marrakech — intimate, elegant, and deeply personal. Photography, venues, private dinners, and seamless coordination.',
}

export default function ElopementPage() {
  return <ElopementContent />
}
