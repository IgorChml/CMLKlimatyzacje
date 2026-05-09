import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import LocalSeoText from '@/components/LocalSeoText'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Klimatyzacja – Dobór i Sprzedaż Klimatyzatorów',
  description:
    'Klimatyzatory renomowanych marek: Daikin, Mitsubishi, Fujitsu, LG. Dobór urządzenia do Twoich potrzeb i budżetu. Luboń, Poznań, Wielkopolska.',
  openGraph: {
    title: 'Klimatyzacja – Dobór i Sprzedaż Klimatyzatorów | CML Klimatyzacje',
    description:
      'Klimatyzatory renomowanych marek. Dobór urządzenia do Twoich potrzeb i budżetu. Luboń, Poznań.',
    url: 'https://cmlklimatyzacje.pl/klimatyzacja',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'klimatyzacja Luboń',
    'klimatyzatory Poznań',
    'Daikin klimatyzacja',
    'Mitsubishi klimatyzacja',
    'klimatyzator do domu',
    'klimatyzacja split',
  ],
}

const faqs = [
  {
    question: 'Jaką klimatyzację wybrać do domu?',
    answer:
      'Wybór klimatyzacji zależy od powierzchni pomieszczenia, jego izolacji i preferencji. Do małych pokoi (do 20 m²) wystarczy urządzenie 2,5 kW. Dla większych przestrzeni polecamy system multi-split lub klimatyzatory kasetonowe.',
  },
  {
    question: 'Czy klimatyzacja inwerterowa jest lepsza?',
    answer:
      'Tak – klimatyzatory inwerterowe dostosowują moc do aktualnego zapotrzebowania, co zmniejsza zużycie energii nawet o 40% w porównaniu do urządzeń on/off. Wyższy koszt zakupu szybko się zwraca.',
  },
  {
    question: 'Jakie są najbardziej polecane marki klimatyzatorów?',
    answer:
      'Polecamy urządzenia Daikin, Mitsubishi Electric, Fujitsu i LG. To marki o sprawdzonej niezawodności, dobrym serwisie gwarancyjnym i wysokiej efektywności energetycznej.',
  },
]

const brands = [
  { name: 'Daikin', desc: 'Lider rynku, japońska niezawodność, klasa A+++' },
  { name: 'Mitsubishi Electric', desc: 'Cicha praca, zaawansowane filtry powietrza' },
  { name: 'Fujitsu', desc: 'Wysoka efektywność, sprawdzone rozwiązania' },
  { name: 'LG', desc: 'Nowoczesny design, sterowanie Wi-Fi w standardzie' },
  { name: 'Samsung', desc: 'Technologia Wind-Free, komfort bez przeciągów' },
  { name: 'Panasonic', desc: 'Nanoe X – jonizacja i oczyszczanie powietrza' },
]

export default function KlimatyzacjaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Klimatyzacja', href: '/klimatyzacja' },
          ]}
        />
      </div>

      <HeroSection
        title="Klimatyzacja do domu i biura"
        subtitle="Dobieramy i sprzedajemy klimatyzatory renomowanych marek. Pomagamy wybrać optymalne urządzenie dopasowane do Twoich potrzeb i budżetu."
        primaryCta={{ label: 'Zapytaj o wycenę', href: 'tel:691959013' }}
        secondaryCta={{ label: 'Montaż klimatyzacji', href: '/montaz-klimatyzacji' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Marki, które oferujemy</h2>
          <p className="section-subtitle">
            Współpracujemy wyłącznie z producentami o ugruntowanej renomie i szeroką siecią serwisową w Polsce.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div key={brand.name} className="card">
                <h3 className="text-lg font-bold text-navy mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Rodzaje klimatyzatorów</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Split (ścienny)',
                desc: 'Najczęściej wybierany typ. Jedna jednostka zewnętrzna, jedna wewnętrzna. Idealny do pojedynczych pomieszczeń.',
                icon: '🏠',
              },
              {
                title: 'Multi-split',
                desc: 'Jedna jednostka zewnętrzna obsługuje 2–5 wewnętrznych. Ekonomiczne rozwiązanie dla całego mieszkania lub domu.',
                icon: '🏢',
              },
              {
                title: 'Kasetonowy',
                desc: 'Montowany w suficie podwieszanym. Równomierna dystrybucja powietrza na całe pomieszczenie. Popularne w biurach.',
                icon: '🏗️',
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} title="FAQ – klimatyzacja" />
      </div>
      <LocalSeoText />
    </>
  )
}
