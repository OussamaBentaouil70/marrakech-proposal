'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import HeroForm from '@/components/ui/HeroForm'

interface HeroSectionProps {
  eyebrow: string
  title: string
  subtitle: string
  cta: string
  ctaHref?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  image: string
  variant?: 'home' | 'page'
  showForm?: boolean
  defaultService?: string
}

const slides = [
  '/images/home/luxury-proposal.png',
  '/images/home/intimate-elopement.png',
  '/images/home/destination-weddings.jpg',
]

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  cta,
  ctaHref = '/contact',
  ctaSecondary,
  ctaSecondaryHref = '#featured-work',
  image,
  variant = 'page',
  showForm = false,
  defaultService = '',
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const isHome = variant === 'home'

  // Parallax on scroll — lazy-load GSAP to avoid SSR issues
  useEffect(() => {
    const el = imageRef.current
    const trigger = heroRef.current
    if (!el || !trigger) return

    let cleanup: (() => void) | undefined

    async function initParallax() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const tween = gsap.to(el, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      cleanup = () => {
        tween.kill()
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === trigger) t.kill()
        })
      }
    }

    initParallax()
    return () => cleanup?.()
  }, [])

  // Slideshow for home variant
  useEffect(() => {
    if (!isHome) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isHome])

  const titleLines = title.split('\n')

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' as const },
    },
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: 'easeOut' as const },
    }),
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative overflow-hidden flex items-end bg-primary ${showForm ? 'min-h-[100svh] h-auto lg:h-[100svh]' : 'h-[100svh] min-h-[640px]'}`}
    >
      {/* Background Images */}
      <div ref={imageRef} className="absolute inset-0 scale-110 will-change-transform">
        {isHome ? (
          slides.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              animate={{ opacity: i === activeSlide ? 1 : 0 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          ))
        ) : (
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent" />
      {showForm && (
        <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-primary/20 to-transparent" />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-10 lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {showForm ? (
          /* Two-column layout: text left, form right */
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-6 lg:gap-14 items-end">
            {/* Left: text content — desktop only */}
            <div className="hidden lg:block">
              <motion.p variants={fadeVariants} custom={0} className="section-eyebrow mb-4">
                {eyebrow}
              </motion.p>

              <h1
                className="font-heading text-ivory mb-5"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.025em',
                }}
              >
                {titleLines.map((line, i) => (
                  <motion.span key={i} variants={lineVariants} className="block">
                    {i % 2 === 1 ? <em className="italic">{line}</em> : line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={fadeVariants}
                custom={0.5}
                className="font-body text-beige/75 text-sm leading-relaxed mb-8 max-w-md"
              >
                {subtitle}
              </motion.p>

              <motion.div variants={fadeVariants} custom={0.7} className="flex flex-wrap items-center gap-4">
                <Link href={ctaHref} className="btn-outline">
                  {cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Form — full width on mobile, right column on desktop */}
            <div className="w-full">
              {/* Mobile-only compact heading above form */}
              <div className="lg:hidden mb-5 pt-24">
                <motion.p variants={fadeVariants} custom={0} className="section-eyebrow mb-3">
                  {eyebrow}
                </motion.p>
                <h1
                  className="font-heading text-ivory leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 7vw, 2.5rem)', lineHeight: 1.05 }}
                >
                  {titleLines.map((line, i) => (
                    <span key={i} className="block">
                      {i % 2 === 1 ? <em className="italic">{line}</em> : line}
                    </span>
                  ))}
                </h1>
              </div>
              <HeroForm defaultService={defaultService} />
            </div>
          </div>
        ) : (
          /* Single-column layout (home or pages without form) */
          <div className="max-w-3xl">
            <motion.p variants={fadeVariants} custom={0} className="section-eyebrow mb-5">
              {eyebrow}
            </motion.p>

            <h1
              className="font-heading text-ivory mb-7"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.025em',
              }}
            >
              {titleLines.map((line, i) => (
                <motion.span key={i} variants={lineVariants} className="block">
                  {i % 2 === 1 ? <em className="italic">{line}</em> : line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeVariants}
              custom={0.5}
              className="font-body text-beige/80 text-sm lg:text-base leading-relaxed mb-10 max-w-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeVariants}
              custom={0.7}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href={ctaHref} className="btn-gold">
                {cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
              {ctaSecondary && (
                <Link href={ctaSecondaryHref} className="btn-outline">
                  {ctaSecondary}
                </Link>
              )}
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Slide indicators (home only) */}
      {isHome && (
        <div className="absolute bottom-8 right-12 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={cn(
                'transition-all duration-500',
                i === activeSlide
                  ? 'w-8 h-0.5 bg-gold'
                  : 'w-2 h-0.5 bg-ivory/40 hover:bg-ivory/70'
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-12 z-10 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-gold/40 relative overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-full bg-gold"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <p
          className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-ivory/50"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
