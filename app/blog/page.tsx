import type { Metadata } from 'next'
import type React from 'react'
import BlogGrid from '@/components/sections/BlogGrid'
import CTASection from '@/components/sections/CTASection'
import AnimatedText from '@/components/ui/AnimatedText'
import { getContent } from '@/lib/get-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog – Wedding & Event Planning Guides for Marrakech',
  description:
    'Discover our journal of real weddings, proposals, elopements, and planning guides to inspire your Marrakech celebration.',
}

export default async function BlogPage() {
  const data = await getContent()
  const { blogContent, ctaContent } = data

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C6A46A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="section-eyebrow mb-5">{blogContent.eyebrow}</p>
          <AnimatedText
            as="h1"
            text={blogContent.title}
            variant="lines"
            className="font-heading text-ivory mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.0 } as React.CSSProperties}
          />
          <p className="font-body text-sm text-beige/60 max-w-lg leading-relaxed">
            {blogContent.subtitle}
          </p>
        </div>
      </div>

      <BlogGrid posts={blogContent.posts} readLabel={blogContent.readLabel} />

      <CTASection
        {...ctaContent.home}
        backgroundImage="/images/blog/blog-3.jpg"
      />
    </>
  )
}
