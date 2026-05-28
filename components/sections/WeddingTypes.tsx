'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'
import CardModal, { ModalItem } from '@/components/ui/CardModal'

interface WeddingType {
  title: string
  description: string
}

interface WeddingTypesProps {
  eyebrow: string
  title: string
  subtitle: string
  types: WeddingType[]
}

export default function WeddingTypes({ eyebrow, title, subtitle, types }: WeddingTypesProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [selected, setSelected] = useState<ModalItem | null>(null)

  return (
    <>
    <section ref={ref} className="py-24 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 lg:mb-20">
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
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', lineHeight: 1.05 } as React.CSSProperties}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm text-secondary/70 max-w-xs leading-relaxed lg:text-right mt-4 lg:mt-8"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gold/10">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-ivory p-10 group hover:bg-beige/40 transition-colors duration-500 cursor-pointer"
              onClick={() => setSelected({ title: type.title, description: type.description, index: i })}
            >
              {/* Number */}
              <p className="font-heading text-5xl text-gold/20 leading-none mb-6 group-hover:text-gold/40 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </p>

              {/* Title */}
              <h3 className="font-heading text-2xl text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                {type.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="font-body text-sm text-secondary/70 leading-relaxed">
                {type.description}
              </p>

              {/* Explore hint */}
              <p className="mt-6 font-body text-xs text-gold/0 group-hover:text-gold/70 transition-colors duration-300 tracking-widest uppercase flex items-center gap-1.5">
                Explore
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 7h12M7 1l6 6-6 6"/>
                </svg>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CardModal item={selected} onClose={() => setSelected(null)} reserveLabel="Reserve This Experience" />
    </>
  )
}
