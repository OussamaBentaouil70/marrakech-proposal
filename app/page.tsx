import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import StatsSection from '@/components/sections/StatsSection'
import FeaturedWork from '@/components/sections/FeaturedWork'
import AboutSection from '@/components/sections/AboutSection'
import CommitmentSection from '@/components/sections/CommitmentSection'
import BeyondSection from '@/components/sections/BeyondSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import {
  heroContent,
  statsContent,
  commitmentContent,
  homeBeyondContent,
  howItWorksContent,
  testimonialsContent,
  ctaContent,
} from '@/data/content'

export const metadata: Metadata = {
  title: 'Marrakech Proposal – Luxury Wedding & Event Planning in Marrakech',
  description:
    'From romantic proposals and intimate elopements to luxury destination weddings, we create elegant, emotional, and beautifully curated experiences in Marrakech, Morocco.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        {...heroContent.home}
        image="/images/home/luxury-proposal.png"
        variant="home"
      />

      {/* Marquee ticker */}
      <MarqueeSection />

      {/* Stats */}
      <StatsSection stats={statsContent.home} />

      {/* Featured Work (dark bg) */}
      <FeaturedWork />

      {/* About / Who We Are */}
      <AboutSection />

      {/* Commitment */}
      <CommitmentSection
        {...commitmentContent.home}
        dark={false}
      />

      {/* Beyond Celebrations */}
      <BeyondSection {...homeBeyondContent} />

      {/* How It Works */}
      <HowItWorks {...howItWorksContent.home} />

      {/* Testimonials */}
      <Testimonials {...testimonialsContent.home} dark />

      {/* CTA */}
      <CTASection
        {...ctaContent.home}
        backgroundImage="/images/home/destination-weddings.jpg"
      />
    </>
  )
}
