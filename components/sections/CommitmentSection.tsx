'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'

interface CommitmentItem {
  icon: string
  title: string
  description: string
}

interface CommitmentSectionProps {
  eyebrow: string
  title: string
  items: CommitmentItem[]
  dark?: boolean
}

export default function CommitmentSection({ eyebrow, title, items, dark = false }: CommitmentSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const bg = dark ? 'bg-primary' : 'bg-ivory'
  const textMain = dark ? 'text-ivory' : 'text-primary'
  const textSub = dark ? 'text-beige/60' : 'text-secondary/70'

  return (
    <section id="approach" ref={ref} className={`py-24 lg:py-36 ${bg}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
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

        {/* Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${bg} p-10 group hover:bg-gold/5 transition-colors duration-500`}
            >
              {/* Icon */}
              <p className="text-gold text-2xl mb-6 font-body">{item.icon}</p>

              {/* Title */}
              <h3 className={`font-heading text-xl mb-4 ${textMain} group-hover:text-gold transition-colors duration-300`}>
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className={`font-body text-sm leading-relaxed ${textSub}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
