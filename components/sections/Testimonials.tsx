'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

interface Testimonial {
  quote: string
  author: string
  type: string
}

interface TestimonialsProps {
  eyebrow: string
  title: string
  testimonials: Testimonial[]
  dark?: boolean
}

export default function Testimonials({ eyebrow, title, testimonials, dark = true }: TestimonialsProps) {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const bg = dark ? 'bg-secondary/20 backdrop-blur-sm' : 'bg-ivory'
  const outerBg = dark ? 'bg-primary' : 'bg-beige/30'

  return (
    <section ref={ref} className={`py-24 lg:py-36 ${outerBg} overflow-hidden`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow mb-5"
          >
            {eyebrow}
          </motion.p>
          <AnimatedText
            as="h2"
            text={title}
            variant="lines"
            className={`font-heading ${dark ? 'text-ivory' : 'text-primary'}`}
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', lineHeight: 1.05 } as React.CSSProperties}
          />
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`p-10 ${dark ? 'bg-secondary/20 border border-gold/10' : 'bg-white/60 border border-gold/10'} relative group`}
            >
              {/* Quote mark */}
              <p className="font-heading text-7xl text-gold/20 leading-none absolute top-4 left-8 group-hover:text-gold/40 transition-colors duration-500">
                "
              </p>

              {/* Quote */}
              <p className={`font-body text-sm leading-relaxed ${dark ? 'text-beige/80' : 'text-secondary/80'} mb-8 pt-8 relative z-10`}>
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Author */}
              <div>
                <p className={`font-heading text-lg ${dark ? 'text-ivory' : 'text-primary'}`}>
                  {t.author}
                </p>
                <p className="font-body text-xs text-gold tracking-widest uppercase mt-1">
                  {t.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
