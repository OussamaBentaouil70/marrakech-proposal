'use client'
import Image from 'next/image'
import Link from 'next/link'
import { blogPostsData, blogPostsDataFR, blogPostsDataES } from '@/data/blog-posts'
import { useLocale } from '@/components/providers/LocaleProvider'

export default function BlogPostContent({ slug }: { slug: string }) {
  const { data } = useLocale()
  // Detect locale by checking a locale-specific string
  const firstNav = data.navLinks[0]?.label ?? ''
  const locale = firstNav === 'Accueil' ? 'fr' : firstNav === 'Inicio' ? 'es' : 'en'

  const post =
    (locale === 'fr' && blogPostsDataFR[slug]) ? blogPostsDataFR[slug] :
    (locale === 'es' && blogPostsDataES[slug]) ? blogPostsDataES[slug] :
    blogPostsData[slug]

  if (!post) return null

  const isEn = locale === 'en' || (!blogPostsDataFR[slug] && !blogPostsDataES[slug])
  const backLabel = locale === 'fr' ? 'Retour au Journal' : locale === 'es' ? 'Volver al Diario' : 'Back to Journal'
  const ctaLabels = locale === 'fr'
    ? { eyebrow: 'Prêts à Commencer ?', title: 'Planifions Votre Mariage à Marrakech', body: 'Partagez votre vision — nous nous occupons de chaque détail.', btn: 'Commencer la Planification' }
    : locale === 'es'
    ? { eyebrow: '¿Listos para Empezar?', title: 'Planifiquemos Tu Boda en Marrakech', body: 'Comparte tu visión — nos encargamos de cada detalle.', btn: 'Empezar a Planificar' }
    : { eyebrow: 'Ready to Begin?', title: "Let's Plan Your Marrakech Wedding", body: "Share your vision with us — we'll take care of every detail.", btn: 'Start Planning' }

  void isEn

  return (
    <article className="bg-ivory min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-[900px] mx-auto px-6 lg:px-12 pb-14">
          <p className="section-eyebrow mb-4">{post.category}</p>
          <h1 className="font-heading text-ivory mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            {post.title}
          </h1>
          <p className="font-body text-beige/80 text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-ivory/60 font-body text-xs tracking-wider">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-0 py-16 lg:py-24">
        <Link href="/blog" className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-gold hover:text-secondary transition-colors duration-300 mb-12 group">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:-translate-x-1">
            <path d="M13 7H1M7 1L1 7l6 6" />
          </svg>
          {backLabel}
        </Link>

        <div className="gold-divider mb-12" />

        <div className="prose-luxury">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-12">
              {section.heading && (
                <h2 className="font-heading text-primary mb-5 leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  {section.heading}
                </h2>
              )}
              {section.image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden mb-6">
                  <Image src={section.image} alt={section.heading ?? post.title} fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
                </div>
              )}
              {section.body.map((paragraph, j) => (
                <p key={j} className="font-body text-secondary/80 text-sm lg:text-base leading-relaxed mb-4">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2 ml-4">
                  {section.list.map((item, k) => (
                    <li key={k} className="font-body text-sm text-secondary/70 leading-relaxed flex items-start gap-2">
                      <span className="text-gold mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="gold-divider mt-14 mb-14" />

        <div className="bg-primary px-8 py-12 text-center">
          <p className="section-eyebrow mb-4">{ctaLabels.eyebrow}</p>
          <h3 className="font-heading text-ivory text-2xl lg:text-3xl mb-4 leading-tight">{ctaLabels.title}</h3>
          <p className="font-body text-beige/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">{ctaLabels.body}</p>
          <Link href="/contact" className="btn-gold">
            {ctaLabels.btn}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
