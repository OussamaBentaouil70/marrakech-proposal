'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface StatItem {
  number: string
  label: string
}

interface StatsSectionProps {
  stats: StatItem[]
  dark?: boolean
}

export default function StatsSection({ stats, dark = false }: StatsSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${dark ? 'bg-primary' : 'bg-ivory'}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* Number */}
              <div className="stat-number mb-3">
                {stat.number}
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Label */}
              <p className={`font-body text-xs tracking-widest uppercase leading-relaxed ${dark ? 'text-beige/60' : 'text-secondary/60'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
