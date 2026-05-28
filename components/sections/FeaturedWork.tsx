'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { featuredWorkContent } from '@/data/content'
import AnimatedText from '@/components/ui/AnimatedText'

export default function FeaturedWork() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="featured-work" ref={ref} className="py-24 lg:py-36 bg-primary overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-5"
            >
              {featuredWorkContent.eyebrow}
            </motion.p>
            <AnimatedText
              as="h2"
              text={featuredWorkContent.title}
              variant="lines"
              className="font-heading text-ivory"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 } as React.CSSProperties}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm text-beige/60 max-w-sm leading-relaxed lg:text-right"
          >
            {featuredWorkContent.subtitle}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
          {featuredWorkContent.categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative overflow-hidden bg-secondary/20">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-card" />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary/80 backdrop-blur-sm text-gold font-body text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-body text-xs text-gold/80 tracking-widest uppercase mb-3">
                      {cat.subtitle}
                    </p>
                    <h3 className="font-heading text-ivory text-2xl lg:text-3xl leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="font-body text-xs text-beige/60 leading-relaxed mb-5 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <span className="font-body text-xs tracking-[0.15em] uppercase">Discover</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 7h12M7 1l6 6-6 6"/>
                        </svg>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
