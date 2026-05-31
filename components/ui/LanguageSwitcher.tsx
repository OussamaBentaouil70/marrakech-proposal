'use client'
import { useRef, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/locales'

const LOCALES: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: 'fi-gb' },
  { code: 'fr', label: 'FR', flag: 'fi-fr' },
  { code: 'es', label: 'ES', flag: 'fi-es' },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const seg = pathname.split('/')[1]
  const current: Lang = seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en'
  const active = LOCALES.find((l) => l.code === current)!

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = (code: Lang) => {
    setOpen(false)
    const segments = pathname.split('/')
    const hasLang = ['fr', 'es'].includes(segments[1])
    const basePath = hasLang ? '/' + segments.slice(2).join('/') : pathname
    const cleanBase = basePath === '/' || basePath === '' ? '' : basePath
    const newPath = code === 'en' ? cleanBase || '/' : `/${code}${cleanBase || '/'}`
    router.push(newPath)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-body text-xs tracking-[0.12em] uppercase text-beige/70 hover:text-gold transition-colors duration-300"
        aria-label="Switch language"
      >
        <span className={cn('fi', active.flag, 'rounded-sm')} style={{ width: '1.1em', height: '0.85em' }} />
        <span>{active.label}</span>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
          className={cn('transition-transform duration-300', open && 'rotate-180')}>
          <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-3 bg-primary border border-gold/20 shadow-xl min-w-[90px] z-50"
          >
            {LOCALES.map((loc) => (
              <li key={loc.code}>
                <button
                  onClick={() => select(loc.code)}
                  className={cn(
                    'w-full flex items-center gap-2.5 px-4 py-2.5 font-body text-xs tracking-[0.12em] uppercase transition-colors duration-200',
                    current === loc.code ? 'text-gold bg-gold/10' : 'text-beige/60 hover:text-gold hover:bg-gold/5'
                  )}
                >
                  <span className={cn('fi', loc.flag, 'rounded-sm')} style={{ width: '1.1em', height: '0.85em' }} />
                  {loc.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
