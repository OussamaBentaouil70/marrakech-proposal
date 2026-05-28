import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import AboutSection from '@/components/sections/AboutSection'
import CommitmentSection from '@/components/sections/CommitmentSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import {
  heroContent,
  statsContent,
  proposalTypesContent,
  howItWorksContent,
  testimonialsContent,
  ctaContent,
} from '@/data/content'

const proposalCommitment = {
  eyebrow: 'Our Commitment',
  title: 'The Marrakech\nProposal Promise',
  items: [
    {
      icon: '✦',
      title: 'Tailored Romantic Design',
      description: 'Every proposal is created around your love story, personality, style, and the emotion you want to create.',
    },
    {
      icon: '◈',
      title: 'Iconic Marrakech Locations',
      description: 'From Agafay Desert sunsets to private riads, rooftops, gardens, and luxury venues, we select the perfect setting for your moment.',
    },
    {
      icon: '◎',
      title: 'Discreet Planning',
      description: 'We handle the setup, timing, logistics, suppliers, and surprise details so everything feels effortless.',
    },
    {
      icon: '❋',
      title: 'Emotion with Elegance',
      description: 'Romantic, refined, and unforgettable experiences designed with Moroccan beauty, warmth, and soul.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Luxury Marriage Proposals in Marrakech',
  description:
    'We create magical, personalized marriage proposal experiences in Marrakech — from Agafay Desert setups to rooftops, riads, and hot air balloon proposals.',
}

export default function ProposalPage() {
  return (
    <>
      <HeroSection
        {...heroContent.proposal}
        image="/images/proposals/desert-proposal.png"
        variant="page"
        showForm
        defaultService="Marriage Proposal"
      />

      <MarqueeSection />

      <StatsSection stats={statsContent.proposal} />

      <ServiceGrid
        eyebrow={proposalTypesContent.eyebrow}
        title={proposalTypesContent.title}
        subtitle={proposalTypesContent.subtitle}
        items={proposalTypesContent.types}
        dark={false}
      />

      <AboutSection />

      <CommitmentSection {...proposalCommitment} dark={false} />

      <HowItWorks {...howItWorksContent.proposal} />

      <Testimonials {...testimonialsContent.proposal} dark />

      <CTASection
        {...ctaContent.proposal}
        backgroundImage="/images/proposals/rooftop-proposal.png"
      />
    </>
  )
}
