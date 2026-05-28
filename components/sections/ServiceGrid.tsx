'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'
import CardModal, { ModalItem } from '@/components/ui/CardModal'

interface ServiceItem {
  title: string
  description: string
  features: string[]
  image: string
}

interface ServiceGridProps {
  eyebrow: string
  title: string
  subtitle: string
  items: ServiceItem[]
  dark?: boolean
}

export default function ServiceGrid({ eyebrow, title, subtitle, items, dark = false }: ServiceGridProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [selected, setSelected] = useState<ModalItem | null>(null)

  const bg = dark ? 'bg-primary' : 'bg-ivory'
  const textMain = dark ? 'text-ivory' : 'text-primary'
  const textSub = dark ? 'text-beige/60' : 'text-secondary/70'
  const cardBg = dark ? 'bg-secondary/30' : 'bg-beige/30'

  return (
    <>
    <section ref={ref} className={`py-24 lg:py-36 ${bg} overflow-hidden`}>
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
            className={`font-heading ${textMain} mb-6`}
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', lineHeight: 1.05 } as React.CSSProperties}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`font-body text-sm leading-relaxed ${textSub}`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer"
              onClick={() => setSelected({ title: item.title, description: item.description, features: item.features, image: item.image, eyebrow })}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                {/* View Details overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="flex items-center gap-2 bg-gold text-primary font-body text-xs tracking-widest uppercase px-5 py-2.5">
                    View Details
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 7h12M7 1l6 6-6 6"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`${cardBg} p-8`}>
                <h3 className={`font-heading text-2xl ${textMain} mb-3 group-hover:text-gold transition-colors duration-300`}>
                  {item.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${textSub} mb-6`}>
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gold text-sm mt-0.5 flex-shrink-0">✦</span>
                      <span className={`font-body text-xs ${textSub} leading-relaxed`}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <CardModal item={selected} onClose={() => setSelected(null)} reserveLabel="Reserve This Experience" />
    </>
  )
}
