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

export default function ElopementContent() {
  const { data } = useLocale()
  const { heroContent, statsContent, elopementTypesContent, commitmentContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, marqueeItems } = data

  return (
    <>
      <HeroSection {...heroContent.elopement} image="/images/elopements/private-dinner.png" variant="page" showForm defaultService="Intimate Elopement" />
      <MarqueeSection items={marqueeItems} />
      <StatsSection stats={statsContent.elopement} />
      <ServiceGrid eyebrow={elopementTypesContent.eyebrow} title={elopementTypesContent.title} subtitle={elopementTypesContent.subtitle} items={elopementTypesContent.types} dark={false} sectionId="elopement-types" />
      <AboutSection content={aboutContent} />
      <CommitmentSection {...commitmentContent.elopement} dark={false} />
      <HowItWorks {...howItWorksContent.elopement} />
      <Testimonials {...testimonialsContent.elopement} dark />
      <CTASection {...ctaContent.elopement} backgroundImage="/images/elopements/agafay-desert.png" />
    </>
  )
}
