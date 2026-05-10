import Header from '@/components/Header'
import Footer from '@/components/Footer'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CML Klimatyzacje',
  description: 'Montaż, serwis i odgrzybianie klimatyzacji oraz instalacja pomp ciepła.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Nowiny 5',
    addressLocality: 'Luboń',
    postalCode: '62-030',
    addressRegion: 'Wielkopolska',
    addressCountry: 'PL',
  },
  telephone: '691959013',
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
  url: 'https://cmlklimatyzacje.pl',
  areaServed: ['Luboń', 'Poznań', 'Mosina', 'Puszczykowo', 'Swarzędz', 'Kórnik'],
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* pb-16 on mobile makes room for the fixed bottom call bar */}
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
      </div>
    </>
  )
}
