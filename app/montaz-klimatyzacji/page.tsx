import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import LocalSeoText from '@/components/LocalSeoText'

export const metadata: Metadata = {
  title: 'Montaż Klimatyzacji – Profesjonalna Instalacja w 1 Dzień',
  description:
    'Montaż klimatyzacji przez certyfikowanych techników F-GAZ w Luboniu, Poznaniu i okolicach. Instalacja nawet w 1 dzień, gwarancja 5 lat, konkurencyjne ceny.',
  openGraph: {
    title: 'Montaż Klimatyzacji – Profesjonalna Instalacja | CML Klimatyzacje',
    description:
      'Montaż klimatyzacji w 1 dzień. Certyfikowani technicy F-GAZ. Luboń, Poznań, Wielkopolska.',
    url: 'https://cmlklimatyzacje.pl/montaz-klimatyzacji',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'montaż klimatyzacji Luboń',
    'montaż klimatyzacji Poznań',
    'instalacja klimatyzacji',
    'technik klimatyzacji F-GAZ',
    'klimatyzacja cena montażu',
  ],
}

const steps = [
  { step: '01', title: 'Bezpłatna wycena', desc: 'Omawiamy potrzeby, dobieramy urządzenie, podajemy finalną cenę bez ukrytych kosztów.' },
  { step: '02', title: 'Ustalenie terminu', desc: 'Wyznaczamy termin montażu – zazwyczaj w ciągu 1–3 dni roboczych.' },
  { step: '03', title: 'Montaż i uruchomienie', desc: 'Certyfikowani technicy wykonują instalację, testują urządzenie i szkolą z obsługi.' },
  { step: '04', title: 'Dokumentacja i gwarancja', desc: 'Przekazujemy dokumentację powykonawczą, kartę gwarancyjną i zalecenia eksploatacyjne.' },
]

const faqs = [
  {
    question: 'Ile trwa montaż klimatyzacji?',
    answer:
      'Standardowy montaż jednej jednostki split zajmuje 4–6 godzin. System multi-split z 2–3 jednostkami wewnętrznymi montujemy w ciągu 1 dnia roboczego.',
  },
  {
    question: 'Czy montaż klimatyzacji wymaga pozwolenia budowlanego?',
    answer:
      'W większości przypadków nie. Montaż klimatyzatora na własnym budynku jednorodzinnym lub w mieszkaniu nie wymaga pozwolenia. Wyjątkiem są budynki wpisane do rejestru zabytków.',
  },
  {
    question: 'Co jest potrzebne do montażu klimatyzacji?',
    answer:
      'Potrzebne jest miejsce na jednostkę zewnętrzną (balkon, ściana zewnętrzna, dach), dostęp do gniazdka elektrycznego oraz odpowiednia grubość ściany do przepustu instalacyjnego.',
  },
  {
    question: 'Czy montujecie klimatyzację w bloku?',
    answer:
      'Tak, montujemy klimatyzacje w blokach i kamienicach. W przypadku spółdzielni lub wspólnoty mieszkaniowej może być potrzebna zgoda zarządcy. Służymy radą w tej kwestii.',
  },
]

export default function MontazKlimatyzacjiPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Montaż klimatyzacji', href: '/montaz-klimatyzacji' },
          ]}
        />
      </div>

      <HeroSection
        title="Montaż klimatyzacji – szybko i profesjonalnie"
        subtitle="Certyfikowani technicy F-GAZ przeprowadzą instalację klimatyzacji w Twoim domu, mieszkaniu lub biurze. Montaż w 1 dzień, 5-letnia gwarancja."
        primaryCta={{ label: 'Zamów montaż: 507 000 000', href: 'tel:507000000' }}
        secondaryCta={{ label: 'Sprawdź cennik', href: '/oferta' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Jak wygląda montaż?</h2>
          <p className="section-subtitle">Prosty, 4-etapowy proces od wyceny do gotowej instalacji.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="card">
                <div className="text-4xl font-extrabold text-sky/30 mb-2">{s.step}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Cennik montażu</h2>
          <div className="overflow-x-auto mt-8">
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Usługa</th>
                  <th className="px-6 py-4 text-left font-semibold">Cena od</th>
                  <th className="px-6 py-4 text-left font-semibold">Czas realizacji</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { service: 'Montaż klimatyzatora split 2,5–3,5 kW', price: '800 zł', time: '4–5 h' },
                  { service: 'Montaż klimatyzatora split 5–7 kW', price: '950 zł', time: '5–6 h' },
                  { service: 'System multi-split (2 jedn. wewn.)', price: '1 800 zł', time: '1 dzień' },
                  { service: 'System multi-split (3 jedn. wewn.)', price: '2 500 zł', time: '1–2 dni' },
                  { service: 'Klimatyzator kasetonowy', price: '1 200 zł', time: '6–8 h' },
                ].map((row) => (
                  <tr key={row.service} className="hover:bg-gray-bg transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{row.service}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-navy">{row.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            * Ceny orientacyjne. Ostateczna wycena po oględzinach miejsca montażu. Ceny netto.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} title="FAQ – montaż klimatyzacji" />
      </div>
      <LocalSeoText />
    </>
  )
}
