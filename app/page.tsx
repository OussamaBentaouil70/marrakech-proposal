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
import { getContent } from '@/lib/get-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Marrakech Proposal – Luxury Wedding & Event Planning in Marrakech',
  description:
    'From romantic proposals and intimate elopements to luxury destination weddings, we create elegant, emotional, and beautifully curated experiences in Marrakech, Morocco.',
}

export default async function HomePage() {
  const data = await getContent()
  const { heroContent, statsContent, commitmentContent, homeBeyondContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, featuredWorkContent, marqueeItems } = data

  return (
    <>
      <HeroSection
        {...heroContent.home}
        image="/images/home/luxury-proposal.png"
        variant="home"
      />

      <MarqueeSection items={marqueeItems} />

      <StatsSection stats={statsContent.home} />

      <FeaturedWork content={featuredWorkContent} />

      <AboutSection content={aboutContent} />

      <CommitmentSection
        {...commitmentContent.home}
        dark={false}
      />

      <BeyondSection {...homeBeyondContent} />

      <HowItWorks {...howItWorksContent.home} />

      <Testimonials {...testimonialsContent.home} dark />

      <CTASection
        {...ctaContent.home}
        backgroundImage="/images/home/destination-weddings.jpg"
      />
    </>
  )
}
