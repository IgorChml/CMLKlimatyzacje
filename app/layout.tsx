import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'CML Klimatyzacje – Montaż, Serwis, Pompy Ciepła | Luboń, Poznań',
    template: '%s | CML Klimatyzacje',
  },
  description:
    'Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Luboniu, Poznaniu i okolicach. Szybka wycena, doświadczeni monterzy, gwarancja jakości.',
  metadataBase: new URL('https://cmlklimatyzacje.pl'),
  openGraph: {
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CML Klimatyzacje',
  description: 'Montaż, serwis i odgrzybianie klimatyzacji oraz instalacja pomp ciepła.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Luboń',
    addressRegion: 'Wielkopolska',
    addressCountry: 'PL',
  },
  telephone: '507000000',
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
  url: 'https://cmlklimatyzacje.pl',
  areaServed: [
    'Luboń', 'Poznań', 'Mosina', 'Puszczykowo', 'Swarzędz', 'Kórnik',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
