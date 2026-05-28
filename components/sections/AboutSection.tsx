'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutContent as defaultAboutContent } from '@/data/content'
import AnimatedText from '@/components/ui/AnimatedText'

type AboutContent = typeof defaultAboutContent

export default function AboutSection({ content }: { content?: AboutContent }) {
  const aboutContent = content ?? defaultAboutContent
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const bodyParagraphs = aboutContent.body.split('\n\n')

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={aboutContent.image}
                alt="Erica – Luxury Wedding & Proposal Planner in Marrakech"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative gold frame */}
              <div className="absolute -inset-4 border border-gold/20 pointer-events-none" style={{ zIndex: -1 }} />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-beige/40 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/20 -z-10" />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 -right-4 lg:-right-8 bg-primary px-6 py-5"
            >
              <p className="font-heading text-4xl text-gold leading-none">10+</p>
              <p className="font-body text-[0.625rem] text-beige/60 tracking-widest uppercase mt-1">Years in</p>
              <p className="font-body text-[0.625rem] text-beige/60 tracking-widest uppercase">Luxury Events</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="section-eyebrow mb-5"
            >
              {aboutContent.eyebrow}
            </motion.p>

            <AnimatedText
              as="h2"
              text={aboutContent.title}
              variant="lines"
              delay={0.3}
              className="font-heading text-primary mb-2"
              style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.0 } as React.CSSProperties}
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-xs text-gold tracking-widest uppercase mb-8"
            >
              {aboutContent.subtitle}
            </motion.p>

            <div className="gold-divider mb-8 w-16" />

            <div className="space-y-5 mb-10">
              {bodyParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                  className="font-body text-sm text-secondary/80 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Link href="/contact" className="btn-gold">
                {aboutContent.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 7h12M7 1l6 6-6 6"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
