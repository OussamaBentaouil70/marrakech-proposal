'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'

interface Step {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  eyebrow: string
  title: string
  steps: Step[]
  dark?: boolean
}

export default function HowItWorks({ eyebrow, title, steps, dark = false }: HowItWorksProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const bg = dark ? 'bg-secondary/20' : 'bg-primary'
  const textMain = 'text-ivory'
  const textSub = 'text-beige/60'

  return (
    <section ref={ref} className={`py-24 lg:py-36 bg-primary overflow-hidden`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 lg:mb-20">
          <div>
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
              className={`font-heading ${textMain}`}
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', lineHeight: 1.05 } as React.CSSProperties}
            />
          </div>
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-32 h-px bg-gold mt-8"
          />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gold/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-primary p-10 relative group hover:bg-secondary/20 transition-colors duration-500"
            >
              {/* Number */}
              <p className="font-heading text-6xl text-gold/20 leading-none mb-8 group-hover:text-gold/40 transition-colors duration-500">
                {step.number}
              </p>

              {/* Title */}
              <h3 className={`font-heading text-xl ${textMain} mb-4 group-hover:text-gold transition-colors duration-300`}>
                {step.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className={`font-body text-sm leading-relaxed ${textSub}`}>
                {step.description}
              </p>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] -right-px w-px h-8 bg-gold/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
