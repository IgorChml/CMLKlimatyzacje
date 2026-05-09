import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import LocalSeoText from '@/components/LocalSeoText'

export const metadata: Metadata = {
  title: 'Serwis Klimatyzacji – Przeglądy, Naprawy, Czyszczenie',
  description:
    'Serwis i przeglądy klimatyzacji w Luboniu, Poznaniu i okolicach. Naprawy, czyszczenie, uzupełnianie czynnika. Autoryzowany serwis Daikin, Mitsubishi, Fujitsu.',
  openGraph: {
    title: 'Serwis Klimatyzacji – Przeglądy i Naprawy | CML Klimatyzacje',
    description:
      'Serwis klimatyzacji Luboń, Poznań. Przeglądy, naprawy, czyszczenie urządzeń.',
    url: 'https://cmlklimatyzacje.pl/serwis-klimatyzacji',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'serwis klimatyzacji Luboń',
    'serwis klimatyzacji Poznań',
    'przegląd klimatyzacji',
    'naprawa klimatyzacji',
    'czyszczenie klimatyzacji',
    'uzupełnianie czynnika chłodniczego',
  ],
}

const services = [
  { icon: '🔍', title: 'Przegląd roczny', desc: 'Kompleksowy przegląd wszystkich podzespołów, czyszczenie filtrów, sprawdzenie ciśnień i elektryki.' },
  { icon: '🔧', title: 'Naprawa awarii', desc: 'Szybka diagnoza i naprawa awarii. Wyjeżdżamy do klienta w ciągu 24–48 godzin.' },
  { icon: '❄️', title: 'Uzupełnianie czynnika', desc: 'Sprawdzenie szczelności instalacji i uzupełnianie czynnika chłodniczego R32/R410A.' },
  { icon: '🧹', title: 'Czyszczenie i dezynfekcja', desc: 'Chemiczne czyszczenie wymiennika ciepła, parownika i kratki nawiewu.' },
  { icon: '📋', title: 'Protokół serwisowy', desc: 'Po każdym serwisie wystawiamy protokół – wymagany do utrzymania gwarancji.' },
  { icon: '🌐', title: 'Serwis zdalny', desc: 'Diagnoza problemów przez Wi-Fi i aktualizacje oprogramowania sterownika.' },
]

const faqs = [
  {
    question: 'Jak często serwisować klimatyzację?',
    answer:
      'Zalecamy przegląd co najmniej raz w roku, najlepiej przed sezonem letnim (kwiecień–maj). Urządzenia używane całorocznie warto serwisować dwa razy w roku.',
  },
  {
    question: 'Co obejmuje standardowy przegląd klimatyzacji?',
    answer:
      'Standardowy przegląd obejmuje: czyszczenie filtrów i wymiennika, sprawdzenie ciśnień czynnika, kontrolę elektryki, pomiar temperatur nawiewu i powrotu oraz protokół z zaleceniami.',
  },
  {
    question: 'Czy serwis jest potrzebny do utrzymania gwarancji?',
    answer:
      'Tak – większość producentów wymaga regularnych przeglądów autoryzowanego serwisu jako warunku utrzymania gwarancji. Wystawiamy protokoły serwisowe akceptowane przez producentów.',
  },
  {
    question: 'Ile kosztuje przegląd klimatyzacji?',
    answer:
      'Przegląd jednej jednostki wewnętrznej to koszt od 250 zł. Przy umowach serwisowych na kilka urządzeń udzielamy rabatów. Zapraszamy do kontaktu po indywidualną wycenę.',
  },
]

export default function SerwisKlimatyzacjiPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Serwis klimatyzacji', href: '/serwis-klimatyzacji' },
          ]}
        />
      </div>

      <HeroSection
        title="Serwis klimatyzacji – szybko i rzetelnie"
        subtitle="Przeglądy, naprawy i czyszczenie klimatyzatorów w Luboniu, Poznaniu i całej Wielkopolsce. Protokoły serwisowe, gwarancja na naprawy, doświadczeni technicy."
        primaryCta={{ label: 'Umów serwis: 691 959 013', href: 'tel:691959013' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Zakres usług serwisowych</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} title="FAQ – serwis klimatyzacji" />
      </div>
      <LocalSeoText />
    </>
  )
}
