import type { Metadata } from 'next'
import BlogContent from '@/components/pages/BlogContent'

export const metadata: Metadata = {
  title: 'Blog – Wedding & Event Planning Guides for Marrakech',
  description: 'Discover our journal of real weddings, proposals, elopements, and planning guides to inspire your Marrakech celebration.',
}

export default function BlogPage() {
  return <BlogContent />
}
