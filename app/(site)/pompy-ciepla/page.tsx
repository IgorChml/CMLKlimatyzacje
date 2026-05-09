import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import LocalSeoText from '@/components/LocalSeoText'

export const metadata: Metadata = {
  title: 'Pompy Ciepła – Montaż i Serwis Pomp Ciepła Powietrze-Woda',
  description:
    'Montaż i serwis pomp ciepła powietrze-woda w Luboniu i Poznaniu. Dofinansowanie Czyste Powietrze, oszczędne ogrzewanie, ekologiczne rozwiązania dla domu.',
  openGraph: {
    title: 'Pompy Ciepła – Montaż i Serwis | CML Klimatyzacje',
    description:
      'Pompy ciepła Luboń, Poznań. Dofinansowanie Czyste Powietrze. Montaż i serwis.',
    url: 'https://cmlklimatyzacje.pl/pompy-ciepla',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'pompy ciepła Luboń',
    'pompy ciepła Poznań',
    'montaż pompy ciepła',
    'pompa ciepła powietrze-woda',
    'Czyste Powietrze dofinansowanie',
    'ogrzewanie pompą ciepła',
  ],
}

const faqs = [
  {
    question: 'Czym jest pompa ciepła powietrze-woda?',
    answer:
      'Pompa ciepła powietrze-woda pobiera energię z powietrza zewnętrznego i przetwarza ją w ciepło do ogrzewania domu i przygotowania ciepłej wody użytkowej. Urządzenie działa efektywnie nawet przy -20°C na zewnątrz.',
  },
  {
    question: 'Czy mogę otrzymać dofinansowanie na pompę ciepła?',
    answer:
      'Tak – w ramach programu Czyste Powietrze można uzyskać dofinansowanie nawet do 135 000 zł na pompę ciepła. Pomagamy w przygotowaniu dokumentacji i złożeniu wniosku.',
  },
  {
    question: 'Ile można zaoszczędzić na ogrzewaniu z pompą ciepła?',
    answer:
      'W porównaniu do ogrzewania elektrycznego lub gazowego pompa ciepła pozwala zaoszczędzić 60–75% kosztów ogrzewania. COP (wskaźnik efektywności) nowoczesnych pomp wynosi 3–5, co oznacza, że z 1 kW energii elektrycznej uzyska się 3–5 kW ciepła.',
  },
  {
    question: 'Jak długo trwa montaż pompy ciepła?',
    answer:
      'Standardowy montaż pompy ciepła powietrze-woda zajmuje 2–3 dni. Obejmuje montaż jednostki zewnętrznej, zasobnika ciepłej wody, podłączenie do instalacji centralnego ogrzewania i uruchomienie.',
  },
  {
    question: 'Czy pompa ciepła wymaga specjalnego przygotowania domu?',
    answer:
      'Pompa ciepła najlepiej współpracuje z ogrzewaniem podłogowym lub grzejnikami niskotemperaturowymi. Może również pracować ze standardowymi grzejnikami po zastosowaniu odpowiedniej konfiguracji.',
  },
]

export default function PompyCieplaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Pompy ciepła', href: '/pompy-ciepla' },
          ]}
        />
      </div>

      <HeroSection
        badge="Dofinansowanie Czyste Powietrze"
        title="Pompy ciepła – ekologiczne ogrzewanie Twojego domu"
        subtitle="Montujemy i serwisujemy pompy ciepła powietrze-woda. Pomożemy w uzyskaniu dofinansowania z programu Czyste Powietrze. Oszczędzaj na ogrzewaniu do 75%."
        primaryCta={{ label: 'Zapytaj o wycenę: 691 959 013', href: 'tel:691959013' }}
        secondaryCta={{ label: 'Dowiedz się więcej', href: '/oferta' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Dlaczego warto wybrać pompę ciepła?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { icon: '💰', title: 'Oszczędność do 75%', desc: 'Znacznie niższe rachunki za ogrzewanie w porównaniu do gazu czy prądu.' },
              { icon: '🌿', title: 'Ekologia', desc: 'Zeroemisyjne ogrzewanie domu – brak spalania paliw kopalnych.' },
              { icon: '🏡', title: 'Komfort całoroczny', desc: 'Ogrzewanie zimą, chłodzenie latem i ciepła woda użytkowa przez cały rok.' },
              { icon: '📋', title: 'Dofinansowanie', desc: 'Program Czyste Powietrze – do 135 000 zł dofinansowania.' },
              { icon: '🔇', title: 'Cicha praca', desc: 'Nowoczesne pompy ciepła pracują cicho – poniżej 40 dB(A).' },
              { icon: '🛡️', title: 'Trwałość 20+ lat', desc: 'Żywotność pompy ciepła wynosi 20–25 lat przy regularnym serwisie.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Oferowane modele pomp ciepła</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { brand: 'Daikin Altherma', power: '4–16 kW', feature: 'Monoblok, integracja z fotowoltaiką', icon: '🏆' },
              { brand: 'Mitsubishi Ecodan', power: '5–14 kW', feature: 'Cicha praca, efektywność A+++', icon: '⭐' },
              { brand: 'Samsung EHS', power: '6–16 kW', feature: 'AI-sterowanie, szybki montaż', icon: '🔬' },
            ].map((model) => (
              <div key={model.brand} className="card border-2 border-sky/20 hover:border-sky transition-colors">
                <div className="text-3xl mb-3">{model.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-1">{model.brand}</h3>
                <p className="text-sky font-semibold text-sm mb-2">Moc: {model.power}</p>
                <p className="text-gray-600 text-sm">{model.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} title="FAQ – pompy ciepła" />
      </div>
      <LocalSeoText />
    </>
  )
}
