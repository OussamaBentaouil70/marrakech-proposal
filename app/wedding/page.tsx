import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import WeddingTypes from '@/components/sections/WeddingTypes'
import AboutSection from '@/components/sections/AboutSection'
import CommitmentSection from '@/components/sections/CommitmentSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import {
  heroContent,
  statsContent,
  weddingExtrasContent,
  weddingTypesContent,
  testimonialsContent,
  ctaContent,
} from '@/data/content'

const weddingHowItWorks = {
  eyebrow: 'The Process',
  title: 'How It Works',
  steps: [
    {
      number: '01',
      title: 'The Consultation',
      description: 'We take the time to understand your vision, culture, guest experience, style, and priorities to begin designing a wedding that truly reflects your story.',
    },
    {
      number: '02',
      title: 'The Planning & Design',
      description: 'Our team curates venues, suppliers, décor, experiences, logistics, and atmosphere. You receive structured planning, detailed timelines, and personalized guidance.',
    },
    {
      number: '03',
      title: 'Secure Your Date',
      description: 'Your wedding dates and venues are officially secured once the agreed deposit is received. All details, payment schedules, and event scope are confirmed in writing.',
    },
    {
      number: '04',
      title: 'The Celebration',
      description: 'From setup and supplier coordination to guest flow and on-site management, our team orchestrates every detail so you can fully enjoy an unforgettable experience.',
    },
  ],
}

const weddingCommitment = {
  eyebrow: 'Our Commitment',
  title: 'The Marrakech\nWedding Experience',
  items: [
    {
      icon: '✦',
      title: 'Bespoke Wedding Design',
      description: 'Every wedding is thoughtfully curated around your culture, vision, guest experience, and personal story.',
    },
    {
      icon: '◈',
      title: 'Exceptional Venues',
      description: 'Luxury palaces, private villas, riads, gardens, and desert settings carefully selected to match your celebration style.',
    },
    {
      icon: '◎',
      title: 'Full Wedding Coordination',
      description: 'From venue sourcing and supplier management to logistics, production, and guest flow — every detail handled seamlessly.',
    },
    {
      icon: '❋',
      title: 'Luxury with Meaning',
      description: 'Elegant multi-day celebrations blending Moroccan hospitality, refined aesthetics, emotion, and unforgettable experiences.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Luxury Destination Weddings in Marrakech',
  description:
    'We plan luxury destination weddings in Marrakech — from multi-day Indian celebrations to intimate ceremonies, with exceptional venues, full coordination, and elegant execution.',
}

export default function WeddingPage() {
  return (
    <>
      <HeroSection
        {...heroContent.wedding}
        image="/images/home/destination-weddings.jpg"
        variant="page"
        showForm
        defaultService="Destination Wedding"
      />

      <MarqueeSection />

      <StatsSection stats={statsContent.wedding} />

      {/* Wedding types grid */}
      <WeddingTypes {...weddingTypesContent} />

      {/* Beyond wedding extras */}
      <ServiceGrid
        eyebrow={weddingExtrasContent.eyebrow}
        title={weddingExtrasContent.title}
        subtitle={weddingExtrasContent.subtitle}
        items={weddingExtrasContent.extras}
        dark
      />

      <AboutSection />

      <CommitmentSection {...weddingCommitment} dark={false} />

      <HowItWorks {...weddingHowItWorks} />

      <Testimonials {...testimonialsContent.wedding} dark />

      <CTASection
        {...ctaContent.wedding}
        backgroundImage="/images/home/destination-weddings.jpg"
      />
    </>
  )
}
