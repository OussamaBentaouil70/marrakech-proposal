'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/components/providers/LocaleProvider'

export default function Footer() {
  const { data } = useLocale()
  const { navLinks, siteConfig } = data
  return (
    <footer className="bg-primary text-ivory">
      {/* Top ornament */}
      <div className="gold-divider" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Marrakech Proposal"
                width={280}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-beige/70 leading-relaxed max-w-sm mb-8">
              Luxury wedding & event planning in Marrakech, Morocco. We create romantic proposals,
              intimate elopements, and destination weddings with elegance and intention.
            </p>
            {/* WhatsApp only */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
              aria-label="WhatsApp"
            >
              <i className="fa fa-whatsapp text-base" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-eyebrow mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-beige/60 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-eyebrow mb-6">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-beige/60 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="fa fa-envelope-o text-gold/60 w-4 text-center" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-beige/60 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="fa fa-whatsapp text-gold/60 w-4 text-center" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa fa-map-marker text-gold/60 w-4 text-center" />
                <span className="font-body text-sm text-beige/60">Marrakech, Morocco</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="section-eyebrow mb-3">Languages</p>
              <div className="flex gap-4">
                {[
                  { code: 'en', label: 'EN', flag: 'fi-gb' },
                  { code: 'fr', label: 'FR', flag: 'fi-fr' },
                  { code: 'es', label: 'ES', flag: 'fi-es' },
                ].map(({ code, label, flag }) => (
                  <button
                    key={code}
                    className="flex items-center gap-1.5 font-body text-xs text-beige/50 hover:text-gold transition-colors duration-200 tracking-widest"
                  >
                    <span className={`fi ${flag} rounded-sm`} style={{ width: '1.1em', height: '0.85em' }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-xs text-beige/40 tracking-wide">
            © {new Date().getFullYear()} Marrakech Proposal. All rights reserved.
          </p>
          <p className="font-body text-xs text-beige/40 tracking-wide">
            Luxury Wedding & Event Planning · Marrakech, Morocco
          </p>
        </div>
      </div>
    </footer>
  )
}
