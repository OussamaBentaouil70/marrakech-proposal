'use client'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/data/content'

export interface ModalItem {
  title: string
  description: string
  features?: string[]
  image?: string
  eyebrow?: string
  index?: number
}

interface CardModalProps {
  item: ModalItem | null
  onClose: () => void
  reserveLabel?: string
}

export default function CardModal({ item, onClose, reserveLabel = 'Reserve This Experience' }: CardModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [item, onClose])

  const handleReserve = () => {
    onClose()
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 350)
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-8"
          style={{ backgroundColor: 'rgba(47, 36, 29, 0.75)', backdropFilter: 'blur(10px)' }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-ivory w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Close button ── */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-primary/90 text-ivory hover:bg-gold hover:text-primary transition-all duration-300 text-sm"
            >
              ✕
            </button>

            {/* ── Left panel ── */}
            {item.image ? (
              /* With image */
              <div className="relative lg:w-[45%] aspect-[4/3] lg:aspect-auto flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                  <div className="gold-divider w-10 mb-4" />
                  {item.eyebrow && (
                    <p className="section-eyebrow text-beige/70 mb-3">{item.eyebrow}</p>
                  )}
                  <h2 className="font-heading text-ivory leading-tight"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                    {item.title}
                  </h2>
                </div>
              </div>
            ) : (
              /* Decorative panel — for WeddingTypes (no image) */
              <div className="relative lg:w-[38%] flex-shrink-0 bg-primary flex flex-col items-start justify-end p-8 lg:p-10 overflow-hidden min-h-[180px] lg:min-h-0">
                {/* Ornamental large number */}
                {item.index !== undefined && (
                  <span
                    className="absolute top-4 right-4 font-heading text-gold/10 select-none pointer-events-none"
                    style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', lineHeight: 1 }}
                  >
                    {String(item.index + 1).padStart(2, '0')}
                  </span>
                )}

                {/* Dot grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #C6A46A 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }}
                />

                <div className="relative z-10">
                  <div className="gold-divider w-10 mb-5" />
                  <p className="section-eyebrow text-gold/60 mb-3">Wedding Experience</p>
                  <h2 className="font-heading text-ivory leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                    {item.title}
                  </h2>
                </div>
              </div>
            )}

            {/* ── Right panel ── */}
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div className="flex-1 p-7 lg:p-10">
                <p className="font-body text-sm text-secondary/80 leading-relaxed mb-7">
                  {item.description}
                </p>

                {item.features && item.features.length > 0 && (
                  <>
                    <div className="gold-divider mb-6" />
                    <ul className="space-y-3">
                      {item.features.map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <span className="text-gold flex-shrink-0 text-sm">✦</span>
                          <span className="font-body text-sm text-secondary/70">{feat}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* ── CTA buttons ── */}
              <div className="p-7 lg:p-10 pt-0 flex flex-col gap-3">
                <div className="gold-divider mb-2" />

                <motion.button
                  onClick={handleReserve}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="btn-gold justify-center w-full"
                >
                  {reserveLabel}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 7h12M7 1l6 6-6 6"/>
                  </svg>
                </motion.button>

                <motion.a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.4 }}
                  className="btn-outline justify-center w-full border-primary/30 text-primary hover:bg-primary hover:text-ivory hover:border-primary"
                  onClick={onClose}
                >
                  <i className="fa fa-whatsapp text-base" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
