import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import AnimatedText from '@/components/ui/AnimatedText'
import { siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact – Plan Your Marrakech Celebration',
  description:
    'Ready to begin planning your dream proposal, elopement, or wedding in Marrakech? Get in touch with our team — we respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C6A46A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="section-eyebrow mb-5">Get In Touch</p>
          <AnimatedText
            as="h1"
            text={"Let's Begin Your\nMarrakech Story"}
            variant="lines"
            className="font-heading text-ivory mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.0 } as React.CSSProperties}
          />
          <p className="font-body text-sm text-beige/60 max-w-lg leading-relaxed">
            Whether you're dreaming of an intimate proposal, a romantic elopement, or a luxury destination wedding,
            we'd love to hear your vision. Share your story with us — we respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactForm />
    </>
  )
}
