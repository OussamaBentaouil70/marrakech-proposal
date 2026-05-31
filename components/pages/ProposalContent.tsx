'use client'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import AboutSection from '@/components/sections/AboutSection'
import CommitmentSection from '@/components/sections/CommitmentSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import { useLocale } from '@/components/providers/LocaleProvider'

export default function ProposalContent() {
  const { data } = useLocale()
  const { heroContent, statsContent, proposalTypesContent, commitmentContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, marqueeItems } = data

  return (
    <>
      <HeroSection {...heroContent.proposal} image="/images/proposals/desert-proposal.png" variant="page" showForm defaultService="Marriage Proposal" />
      <MarqueeSection items={marqueeItems} />
      <StatsSection stats={statsContent.proposal} />
      <ServiceGrid eyebrow={proposalTypesContent.eyebrow} title={proposalTypesContent.title} subtitle={proposalTypesContent.subtitle} items={proposalTypesContent.types} dark={false} />
      <AboutSection content={aboutContent} />
      <CommitmentSection {...commitmentContent.proposal} dark={false} />
      <HowItWorks {...howItWorksContent.proposal} />
      <Testimonials {...testimonialsContent.proposal} dark />
      <CTASection {...ctaContent.proposal} backgroundImage="/images/proposals/rooftop-proposal.png" />
    </>
  )
}
