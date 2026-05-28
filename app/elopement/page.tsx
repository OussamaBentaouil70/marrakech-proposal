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
  elopementTypesContent,
  howItWorksContent,
  testimonialsContent,
  ctaContent,
} from '@/data/content'

const elopementHowItWorks = {
  eyebrow: 'The Process',
  title: 'How It Works',
  steps: [
    {
      number: '01',
      title: 'The Discovery Call',
      description: 'We learn about your story, travel vision, preferred atmosphere, and the type of intimate experience you want to create together in Marrakech.',
    },
    {
      number: '02',
      title: 'The Experience Design',
      description: 'From romantic venues and photography to dinners, styling, accommodation, and activities — we curate a personalized elopement experience around your vision.',
    },
    {
      number: '03',
      title: 'Secure Your Date',
      description: 'Your dates and venues are confirmed once the deposit is received. We then finalize the planning timeline, logistics, and all experience details together.',
    },
    {
      number: '04',
      title: 'The Elopement Experience',
      description: 'On the day, we coordinate every detail behind the scenes while you focus entirely on living the moment and creating unforgettable memories.',
    },
  ],
}

const elopementCommitment = {
  eyebrow: 'Our Commitment',
  title: 'The Marrakech\nElopement Experience',
  items: [
    {
      icon: '✦',
      title: 'Intimate by Design',
      description: 'Thoughtfully curated elopements created to feel personal, emotional, elegant, and deeply meaningful.',
    },
    {
      icon: '◈',
      title: 'Romantic Hidden Locations',
      description: 'Private riads, desert camps, rooftops, gardens, and breathtaking landscapes selected for unforgettable moments.',
    },
    {
      icon: '◎',
      title: 'Stress-Free Escape',
      description: 'Accommodation, photography, styling, dinners, logistics, and timeline — everything seamlessly organized for you.',
    },
    {
      icon: '❋',
      title: 'Authentic & Timeless Atmosphere',
      description: 'A refined Moroccan experience blending romance, intimacy, and effortless luxury.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Intimate Elopements in Marrakech',
  description:
    'We design beautifully curated elopement experiences in Marrakech — intimate, elegant, and deeply personal. Photography, venues, private dinners, and seamless coordination.',
}

export default function ElopementPage() {
  return (
    <>
      <HeroSection
        {...heroContent.elopement}
        image="/images/elopements/private-dinner.png"
        variant="page"
        showForm
        defaultService="Intimate Elopement"
      />

      <MarqueeSection />

      <StatsSection stats={statsContent.elopement} />

      <ServiceGrid
        eyebrow={elopementTypesContent.eyebrow}
        title={elopementTypesContent.title}
        subtitle={elopementTypesContent.subtitle}
        items={elopementTypesContent.types}
        dark={false}
      />

      <AboutSection />

      <CommitmentSection {...elopementCommitment} dark={false} />

      <HowItWorks {...elopementHowItWorks} />

      <Testimonials {...testimonialsContent.elopement} dark />

      <CTASection
        {...ctaContent.elopement}
        backgroundImage="/images/elopements/agafay-desert.png"
      />
    </>
  )
}
