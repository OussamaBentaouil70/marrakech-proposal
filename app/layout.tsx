import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import { getContent } from '@/lib/get-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: {
    default: 'Marrakech Proposal – Luxury Wedding & Event Planning',
    template: '%s | Marrakech Proposal',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  description:
    'From romantic proposals and intimate elopements to luxury destination weddings, we create elegant, emotional, and beautifully curated experiences in Marrakech, Morocco.',
  keywords: [
    'Marrakech wedding planner',
    'luxury wedding Marrakech',
    'marriage proposal Marrakech',
    'elopement Marrakech',
    'destination wedding Morocco',
    'Agafay desert proposal',
    'luxury event planner Morocco',
  ],
  openGraph: {
    title: 'Marrakech Proposal – Luxury Wedding & Event Planning',
    description: 'Elegant, emotional, and beautifully curated celebrations in Marrakech, Morocco.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'Z97v183xWmxoZeqaLo8ELRI9debqeZ1bkMwtfn0nKbQ',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getContent()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="gtm-head" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W2T8PHND');`}</Script>
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2T8PHND" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <LenisProvider>
          <CustomCursor />
          <Navbar navLinks={data.navLinks} siteConfig={data.siteConfig} />
          <main>{children}</main>
          <Footer navLinks={data.navLinks} siteConfig={data.siteConfig} />
        </LenisProvider>
      </body>
    </html>
  )
}
