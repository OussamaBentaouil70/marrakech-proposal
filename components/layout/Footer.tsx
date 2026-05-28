import Link from 'next/link'
import { navLinks, siteConfig } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-primary text-ivory">
      {/* Top ornament */}
      <div className="gold-divider" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-heading text-4xl leading-none text-ivory">Marrakech</p>
              <p className="font-heading text-4xl leading-none text-gold">Proposal</p>
            </div>
            <p className="font-body text-sm text-beige/70 leading-relaxed max-w-sm mb-8">
              Luxury wedding & event planning in Marrakech, Morocco. We create romantic proposals,
              intimate elopements, and destination weddings with elegance and intention.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 text-xs"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
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

          {/* Services */}
          <div>
            <p className="section-eyebrow mb-6">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-beige/60 hover:text-gold transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-beige/60 hover:text-gold transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="font-body text-sm text-beige/60">Marrakech, Morocco</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="section-eyebrow mb-3">Languages</p>
              <div className="flex gap-3">
                {['EN', 'FR', 'ES'].map((lang) => (
                  <button
                    key={lang}
                    className="font-body text-xs text-beige/50 hover:text-gold transition-colors duration-200 tracking-widest"
                  >
                    {lang}
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
