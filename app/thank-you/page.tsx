'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden px-6">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C6A46A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Large faded ornament */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute font-heading text-gold select-none pointer-events-none"
        style={{ fontSize: 'clamp(18rem, 40vw, 36rem)', lineHeight: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        aria-hidden
      >
        ✦
      </motion.span>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,164,106,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image
            src="/images/logo.png"
            alt="Marrakech Proposal"
            width={180}
            height={64}
            className="h-16 w-auto object-contain mx-auto brightness-0 invert"
            priority
          />
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-divider w-16 mx-auto mb-10"
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="section-eyebrow mb-6"
        >
          Marrakech Proposal
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-ivory mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
        >
          Thank You<br />
          <em className="text-gold">for Reaching Out</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="font-body text-sm text-beige/65 leading-relaxed max-w-md mx-auto mb-10"
        >
          Your vision has been received. Our team will review your request and
          reach out personally within <span className="text-gold">24 hours</span> with a
          tailored response crafted around your dream celebration.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="gold-divider w-12 mx-auto mb-10"
        />

        {/* While you wait block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mb-12 px-8 py-6 border border-gold/20 bg-ivory/[0.03]"
        >
          <p className="section-eyebrow mb-3">While You Wait</p>
          <p className="font-body text-xs text-beige/50 leading-relaxed">
            Explore our portfolio of curated proposals, intimate elopements, and luxury destination weddings
            — each one a uniquely crafted story of love in Marrakech.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/" className="btn-gold">
            Return to Home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </Link>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <i className="fa fa-whatsapp text-base" />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 font-body text-[0.625rem] text-gold/30 tracking-[0.2em] uppercase"
        >
          Luxury Wedding & Event Planning · Marrakech, Morocco
        </motion.p>

      </div>
    </div>
  )
}
