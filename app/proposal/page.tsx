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
import { getContent } from '@/lib/get-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Luxury Marriage Proposals in Marrakech',
  description:
    'We create magical, personalized marriage proposal experiences in Marrakech — from Agafay Desert setups to rooftops, riads, and hot air balloon proposals.',
}

export default async function ProposalPage() {
  const data = await getContent()
  const { heroContent, statsContent, proposalTypesContent, commitmentContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, marqueeItems } = data

  return (
    <>
      <HeroSection
        {...heroContent.proposal}
        image="/images/proposals/desert-proposal.png"
        variant="page"
        showForm
        defaultService="Marriage Proposal"
      />

      <MarqueeSection items={marqueeItems} />

      <StatsSection stats={statsContent.proposal} />

      <ServiceGrid
        eyebrow={proposalTypesContent.eyebrow}
        title={proposalTypesContent.title}
        subtitle={proposalTypesContent.subtitle}
        items={proposalTypesContent.types}
        dark={false}
      />

      <AboutSection content={aboutContent} />

      <CommitmentSection {...commitmentContent.proposal} dark={false} />

      <HowItWorks {...howItWorksContent.proposal} />

      <Testimonials {...testimonialsContent.proposal} dark />

      <CTASection
        {...ctaContent.proposal}
        backgroundImage="/images/proposals/rooftop-proposal.png"
      />
    </>
  )
}
