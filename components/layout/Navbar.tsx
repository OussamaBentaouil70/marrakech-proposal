'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useLocale } from '@/components/providers/LocaleProvider'

export default function Navbar() {
  const { data } = useLocale()
  const { navLinks, siteConfig } = data
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 60)
      setHidden(currentScrollY > 200 && currentScrollY > lastScrollY.current)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-primary/95 backdrop-blur-sm py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Marrakech Proposal"
              width={220}
              height={76}
              className={cn(
                'w-auto object-contain transition-all duration-500',
                scrolled ? 'h-16' : 'h-24 brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group',
                    pathname === link.href ? 'text-gold' : 'text-beige hover:text-gold'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher />
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-3 px-6"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5 relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block h-px bg-ivory transition-all duration-400',
                menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              )}
            />
            <span
              className={cn(
                'block h-px bg-ivory transition-all duration-300',
                menuOpen ? 'w-0 opacity-0' : 'w-4'
              )}
            />
            <span
              className={cn(
                'block h-px bg-ivory transition-all duration-400',
                menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              )}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center px-8"
          >
            <div className="mb-12">
              <p className="section-eyebrow mb-2">Navigation</p>
              <div className="gold-divider w-12" />
            </div>
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-heading text-5xl leading-none transition-colors duration-200',
                      pathname === link.href ? 'text-gold' : 'text-ivory hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-16 flex flex-col gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="btn-outline self-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <div className="mt-2">
                <LanguageSwitcher />
              </div>
              <p className="font-body text-xs text-taupe tracking-widest uppercase mt-2">
                {siteConfig.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
