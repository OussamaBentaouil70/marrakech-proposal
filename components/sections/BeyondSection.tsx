'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'

interface BeyondItem {
  title: string
  description: string
  image: string
  href: string
}

interface BeyondSectionProps {
  eyebrow: string
  title: string
  subtitle: string
  items: BeyondItem[]
}

export default function BeyondSection({ eyebrow, title, subtitle, items }: BeyondSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="experiences" ref={ref} className="py-24 lg:py-36 bg-beige/30 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-5"
            >
              {eyebrow}
            </motion.p>
            <AnimatedText
              as="h2"
              text={title}
              variant="lines"
              className="font-heading text-primary"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 } as React.CSSProperties}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm text-secondary/70 max-w-sm leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Editorial Grid */}
        <div className="grid lg:grid-cols-3 gap-0.5">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={item.href} className="group block relative overflow-hidden bg-primary/5">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ paddingBottom: i === 1 ? '130%' : '110%' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-card" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <p className="font-body text-xs text-gold/80 tracking-widest uppercase mb-2">
                      {item.description}
                    </p>
                    <h3 className="font-heading text-ivory text-2xl lg:text-3xl leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="font-body text-xs tracking-[0.15em] uppercase">Explore</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 7h12M7 1l6 6-6 6"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
