import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPostsData } from '@/data/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({ slug }))
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPostsData[slug]
  if (!post) notFound()

  return (
    <article className="bg-ivory min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-[900px] mx-auto px-6 lg:px-12 pb-14">
          <p className="section-eyebrow mb-4">{post.category}</p>
          <h1
            className="font-heading text-ivory mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            {post.title}
          </h1>
          <p className="font-body text-beige/80 text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
            {post.subtitle}
          </p>
          <div className="flex items-center gap-4 text-ivory/60 font-body text-xs tracking-wider">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-0 py-16 lg:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-gold hover:text-secondary transition-colors duration-300 mb-12 group"
        >
          <svg
            width="14" height="14" viewBox="0 0 14 14"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M13 7H1M7 1L1 7l6 6" />
          </svg>
          Back to Journal
        </Link>

        {/* Gold divider */}
        <div className="gold-divider mb-12" />

        {/* Content sections */}
        <div className="prose-luxury">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2
                  className="font-heading text-primary mb-5 leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  {section.heading}
                </h2>
              )}
              {section.body.map((paragraph, j) => (
                <p
                  key={j}
                  className="font-body text-secondary/80 text-sm lg:text-base leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2 ml-4">
                  {section.list.map((item, k) => (
                    <li
                      key={k}
                      className="font-body text-sm text-secondary/70 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="gold-divider mt-14 mb-14" />

        {/* CTA */}
        <div className="bg-primary px-8 py-12 text-center">
          <p className="section-eyebrow mb-4">Ready to Begin?</p>
          <h3 className="font-heading text-ivory text-2xl lg:text-3xl mb-4 leading-tight">
            Let&apos;s Plan Your Marrakech Wedding
          </h3>
          <p className="font-body text-beige/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Share your vision with us — we&apos;ll take care of every detail to create a truly
            unforgettable celebration.
          </p>
          <Link href="/contact" className="btn-gold">
            Start Planning
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
