import type { Metadata } from 'next'
import BlogContent from '@/components/pages/BlogContent'
import { LOCALE_LANGS } from '@/lib/locales'

export function generateStaticParams() {
  return LOCALE_LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Blog – Wedding & Event Planning Guides for Marrakech',
  description: 'Discover our journal of real weddings, proposals, elopements, and planning guides to inspire your Marrakech celebration.',
}

export default function LangBlogPage() {
  return <BlogContent />
}
