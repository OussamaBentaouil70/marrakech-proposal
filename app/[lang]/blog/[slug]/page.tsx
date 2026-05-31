import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPostsData } from '@/data/blog-posts'
import BlogPostContent from '@/components/pages/BlogPostContent'
import { LOCALE_LANGS } from '@/lib/locales'

interface Props {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  return LOCALE_LANGS.flatMap((lang) =>
    Object.keys(blogPostsData).map((slug) => ({ lang, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostsData[slug]
  if (!post) return {}
  return {
    title: `${post.title} – Marrakech Proposal`,
    description: post.excerpt,
  }
}

export default async function LangBlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!blogPostsData[slug]) notFound()
  return <BlogPostContent slug={slug} />
}
