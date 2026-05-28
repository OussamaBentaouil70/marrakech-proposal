import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: {
    default: 'Marrakech Proposal – Luxury Wedding & Event Planning',
    template: '%s | Marrakech Proposal',
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
