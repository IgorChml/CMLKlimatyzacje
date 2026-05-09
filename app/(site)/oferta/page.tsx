import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oferta – Klimatyzacja, Montaż, Serwis, Pompy Ciepła',
  description:
    'Pełna oferta CML Klimatyzacje: montaż klimatyzacji, serwis, odgrzybianie, pompy ciepła. Konkurencyjne ceny, gwarancja jakości, obsługa Luboń i Poznań.',
  openGraph: {
    title: 'Oferta CML Klimatyzacje – Montaż, Serwis, Pompy Ciepła',
    description:
      'Pełna oferta: montaż klimatyzacji, serwis, odgrzybianie, pompy ciepła. Luboń, Poznań.',
    url: 'https://cmlklimatyzacje.pl/oferta',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'oferta klimatyzacje Luboń',
    'cennik montaż klimatyzacji',
    'serwis klimatyzacji cena',
    'pompa ciepła oferta',
  ],
}

const services = [
  {
    icon: '❄️',
    title: 'Klimatyzacja',
    description: 'Dobór i sprzedaż klimatyzatorów Daikin, Mitsubishi, Fujitsu, LG, Samsung.',
    href: '/klimatyzacja',
    features: ['Klimatyzatory ścienne split', 'Systemy multi-split', 'Klimatyzatory kasetonowe', 'Klimatyzatory przenośne'],
  },
  {
    icon: '🔧',
    title: 'Montaż klimatyzacji',
    description: 'Profesjonalny montaż przez certyfikowanych techników F-GAZ. Instalacja w 1 dzień.',
    href: '/montaz-klimatyzacji',
    features: ['Domy jednorodzinne', 'Mieszkania i bloki', 'Biura i lokale usługowe', 'Hale produkcyjne'],
  },
  {
    icon: '🛠️',
    title: 'Serwis klimatyzacji',
    description: 'Przeglądy, naprawy, czyszczenie. Protokoły serwisowe do gwarancji.',
    href: '/serwis-klimatyzacji',
    features: ['Przeglądy roczne', 'Naprawa awarii 24h', 'Uzupełnianie czynnika', 'Umowy serwisowe'],
  },
  {
    icon: '🧼',
    title: 'Odgrzybianie',
    description: 'Dezynfekcja i odgrzybianie klimatyzatorów. Zdrowe powietrze w domu.',
    href: '/odgrzybianie-klimatyzacji',
    features: ['Eliminacja pleśni i grzybów', 'Dezynfekcja biobójcza', 'Czyszczenie wymiennika', 'Certyfikat czystości'],
  },
  {
    icon: '🌡️',
    title: 'Pompy ciepła',
    description: 'Montaż i serwis pomp ciepła. Pomoc w dofinansowaniu Czyste Powietrze.',
    href: '/pompy-ciepla',
    features: ['Pompy ciepła powietrze-woda', 'Dofinansowanie Czyste Powietrze', 'Integracja z fotowoltaiką', 'Ogrzewanie podłogowe'],
  },
]

export default function OfertaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Oferta', href: '/oferta' },
          ]}
        />
      </div>

      <HeroSection
        title="Nasza oferta – kompleksowa obsługa klimatyzacji"
        subtitle="Od doboru urządzenia, przez montaż, po serwis i odgrzybianie. Realizujemy projekty dla domów, mieszkań, biur i zakładów przemysłowych."
        primaryCta={{ label: 'Zadzwoń po wycenę', href: 'tel:691959013' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Co oferujemy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Dla kogo pracujemy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: '🏠', title: 'Klienci indywidualni', desc: 'Domy jednorodzinne, mieszkania w blokach i kamienicach. Kompleksowa obsługa od wyceny po serwis.' },
              { icon: '🏢', title: 'Firmy i biura', desc: 'Klimatyzacja biur, restauracji, sklepów i lokali usługowych. Umowy serwisowe dla firm.' },
              { icon: '🏭', title: 'Deweloperzy', desc: 'Realizacje dla budownictwa mieszkaniowego i komercyjnego. Projekty wielolokalowe.' },
            ].map((group) => (
              <div key={group.title} className="card text-center">
                <div className="text-4xl mb-3">{group.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-2">{group.title}</h3>
                <p className="text-gray-600 text-sm">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Zapytaj o bezpłatną wycenę</h2>
          <p className="text-gray-300 mb-8">
            Zadzwoń lub napisz – odpowiemy w ciągu 24 godzin i przygotujemy indywidualną ofertę.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:691959013" className="btn-primary">📞 691 959 013</a>
            <Link href="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              Dane kontaktowe
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
