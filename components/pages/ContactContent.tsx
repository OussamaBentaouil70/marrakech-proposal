'use client'
import type React from 'react'
import ContactForm from '@/components/sections/ContactForm'
import AnimatedText from '@/components/ui/AnimatedText'
import { useLocale } from '@/components/providers/LocaleProvider'

export default function ContactContent() {
  const { data } = useLocale()
  const { contactContent } = data

  return (
    <>
      <div className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C6A46A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="section-eyebrow mb-5">{contactContent.hero.eyebrow}</p>
          <AnimatedText as="h1" text={contactContent.hero.title} variant="lines" className="font-heading text-ivory mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.0 } as React.CSSProperties} />
          <p className="font-body text-sm text-beige/60 max-w-lg leading-relaxed">{contactContent.hero.subtitle}</p>
        </div>
      </div>
      <ContactForm content={contactContent.form} />
    </>
  )
}
