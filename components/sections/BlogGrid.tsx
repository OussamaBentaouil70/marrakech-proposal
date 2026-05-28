'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface BlogPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  slug: string
}

export default function BlogGrid({ posts, readLabel = 'Read Article' }: { posts: BlogPost[]; readLabel?: string }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-body text-[0.625rem] text-gold tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-taupe/40" />
                  <span className="font-body text-[0.625rem] text-taupe tracking-wider">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-primary text-2xl leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-body text-sm text-secondary/70 leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-gold">
                  <span className="font-body text-xs tracking-[0.15em] uppercase">{readLabel}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14"
                    fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M1 7h12M7 1l6 6-6 6"/>
                  </svg>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
