import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import LocalSeoText from '@/components/LocalSeoText'

export const metadata: Metadata = {
  title: 'Odgrzybianie Klimatyzacji – Dezynfekcja i Czyszczenie',
  description:
    'Profesjonalne odgrzybianie i dezynfekcja klimatyzatorów w Luboniu i Poznaniu. Eliminacja pleśni, grzybów i bakterii. Zdrowe powietrze w Twoim domu i biurze.',
  openGraph: {
    title: 'Odgrzybianie Klimatyzacji – Dezynfekcja | CML Klimatyzacje',
    description:
      'Odgrzybianie klimatyzacji Luboń, Poznań. Dezynfekcja, czyszczenie, eliminacja pleśni.',
    url: 'https://cmlklimatyzacje.pl/odgrzybianie-klimatyzacji',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'odgrzybianie klimatyzacji',
    'dezynfekcja klimatyzacji',
    'czyszczenie klimatyzacji Poznań',
    'pleśń w klimatyzacji',
    'bakterie klimatyzacja',
    'zdrowe powietrze klimatyzacja',
  ],
}

const faqs = [
  {
    question: 'Jak często należy odgrzybiać klimatyzację?',
    answer:
      'Zalecamy odgrzybianie raz w roku, najlepiej wiosną przed sezonem letnim. W pomieszczeniach o dużej wilgotności (łazienki, baseny, kuchnie) – co 6 miesięcy.',
  },
  {
    question: 'Jakie objawy wskazują na grzyby w klimatyzacji?',
    answer:
      'Charakterystyczny stęchły zapach przy uruchomieniu, widoczna ciemna osad na kratce nawiewu, objawy alergiczne (kichanie, łzawienie) po uruchomieniu urządzenia.',
  },
  {
    question: 'Czy środki dezynfekcyjne są bezpieczne dla ludzi i zwierząt?',
    answer:
      'Używamy preparatów certyfikowanych biobójczych, bezpiecznych po wyschnięciu. Po zabiegu należy przewietrzyć pomieszczenie przez 30 minut – po tym czasie klimatyzacja jest gotowa do użytku.',
  },
  {
    question: 'Czy odgrzybianie niszczy klimatyzację?',
    answer:
      'Nie – używamy metod i preparatów dedykowanych do klimatyzatorów. Zabieg jest całkowicie bezpieczny dla urządzenia i jego elektroniki.',
  },
]

export default function OdgrzybianieKlimatyzacjiPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Odgrzybianie klimatyzacji', href: '/odgrzybianie-klimatyzacji' },
          ]}
        />
      </div>

      <HeroSection
        title="Odgrzybianie i dezynfekcja klimatyzacji"
        subtitle="Eliminujemy pleśnie, grzyby i bakterie z Twojego klimatyzatora. Zadbaj o zdrowe powietrze w domu i biurze. Szybki zabieg, trwałe rezultaty."
        primaryCta={{ label: 'Zamów odgrzybianie: 691 959 013', href: 'tel:691959013' }}
      />

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Na czym polega odgrzybianie klimatyzacji?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="card">
              <h3 className="font-bold text-navy text-lg mb-4">Etapy zabiegu</h3>
              <ol className="space-y-3">
                {[
                  'Demontaż i czyszczenie mechaniczne filtrów',
                  'Chemiczne mycie parownika i lameli',
                  'Aplikacja biobójczego środka dezynfekcyjnego',
                  'Dezynfekcja tacy ociekowej i odpływu skroplin',
                  'Montaż i uruchomienie urządzenia',
                  'Kontrola zapachu i wydajności',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy text-lg mb-4">Dlaczego to ważne?</h3>
              <div className="space-y-4">
                {[
                  { icon: '🦠', title: 'Grzyby i bakterie', desc: 'Klimatyzator to idealne środowisko dla drobnoustrojów – ciepło, wilgoć i kurz.' },
                  { icon: '😷', title: 'Ryzyko zdrowotne', desc: 'Zanieczyszczone powietrze może powodować alergie, astmę i infekcje dróg oddechowych.' },
                  { icon: '⚡', title: 'Sprawność urządzenia', desc: 'Zabrudzony wymiennik ciepła zwiększa zużycie energii nawet o 30%.' },
                  { icon: '👃', title: 'Nieprzyjemne zapachy', desc: 'Typowy objaw zanieczyszczenia – charakterystyczny zatęchły zapach przy starcie.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-navy text-sm">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} title="FAQ – odgrzybianie klimatyzacji" />
      </div>
      <LocalSeoText />
    </>
  )
}
