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
  title: 'Intimate Elopements in Marrakech',
  description:
    'We design beautifully curated elopement experiences in Marrakech — intimate, elegant, and deeply personal. Photography, venues, private dinners, and seamless coordination.',
}

export default async function ElopementPage() {
  const data = await getContent()
  const { heroContent, statsContent, elopementTypesContent, commitmentContent, howItWorksContent, testimonialsContent, ctaContent, aboutContent, marqueeItems } = data

  return (
    <>
      <HeroSection
        {...heroContent.elopement}
        image="/images/elopements/private-dinner.png"
        variant="page"
        showForm
        defaultService="Intimate Elopement"
      />

      <MarqueeSection items={marqueeItems} />

      <StatsSection stats={statsContent.elopement} />

      <ServiceGrid
        eyebrow={elopementTypesContent.eyebrow}
        title={elopementTypesContent.title}
        subtitle={elopementTypesContent.subtitle}
        items={elopementTypesContent.types}
        dark={false}
      />

      <AboutSection content={aboutContent} />

      <CommitmentSection {...commitmentContent.elopement} dark={false} />

      <HowItWorks {...howItWorksContent.elopement} />

      <Testimonials {...testimonialsContent.elopement} dark />

      <CTASection
        {...ctaContent.elopement}
        backgroundImage="/images/elopements/agafay-desert.png"
      />
    </>
  )
}
