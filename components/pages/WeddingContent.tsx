'use client'
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
import { useLocale } from '@/components/providers/LocaleProvider'

export default function WeddingContent() {
  const { data } = useLocale()
  const { heroContent, statsContent, weddingExtrasContent, weddingTypesContent, commitmentContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, marqueeItems } = data

  return (
    <>
      <HeroSection {...heroContent.wedding} image="/images/home/destination-weddings.jpg" variant="page" showForm defaultService="Destination Wedding" />
      <MarqueeSection items={marqueeItems} />
      <StatsSection stats={statsContent.wedding} />
      <WeddingTypes {...weddingTypesContent} />
      <ServiceGrid eyebrow={weddingExtrasContent.eyebrow} title={weddingExtrasContent.title} subtitle={weddingExtrasContent.subtitle} items={weddingExtrasContent.extras} dark />
      <AboutSection content={aboutContent} />
      <CommitmentSection {...commitmentContent.wedding} dark={false} />
      <HowItWorks {...howItWorksContent.wedding} />
      <Testimonials {...testimonialsContent.wedding} dark />
      <CTASection {...ctaContent.wedding} backgroundImage="/images/home/destination-weddings.jpg" />
    </>
  )
}
