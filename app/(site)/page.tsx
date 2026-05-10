import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqAccordion from '@/components/FaqAccordion'
import LocalSeoText from '@/components/LocalSeoText'
import ReviewsSection from '@/components/ReviewsSection'
import { fetchGoogleReviews } from '@/lib/google-reviews'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CML Klimatyzacje – Montaż, Serwis i Pompy Ciepła | Luboń, Poznań',
  description:
    'Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Luboniu, Poznaniu i okolicach Wielkopolski. Szybka wycena, certyfikowani monterzy, 5 lat gwarancji.',
  openGraph: {
    title: 'CML Klimatyzacje – Montaż, Serwis i Pompy Ciepła',
    description:
      'Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Luboniu i okolicach.',
    url: 'https://cmlklimatyzacje.pl',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'klimatyzacja Luboń',
    'montaż klimatyzacji Poznań',
    'serwis klimatyzacji Wielkopolska',
    'pompy ciepła Luboń',
    'klimatyzacja do domu',
    'CML Klimatyzacje',
  ],
}

const services = [
  {
    icon: '❄️',
    title: 'Klimatyzacja',
    description:
      'Sprzedaż i dobór urządzeń klimatyzacyjnych renomowanych marek. Pomożemy wybrać optymalne rozwiązanie dla Twojego domu lub biura.',
    href: '/klimatyzacja',
    features: ['Daikin, Mitsubishi, Fujitsu', 'Klimatyzatory ścienne i kasetonowe', 'Systemy multi-split'],
  },
  {
    icon: '🔧',
    title: 'Montaż klimatyzacji',
    description:
      'Profesjonalny montaż klimatyzacji przez certyfikowanych techników. Instalacja w ciągu jednego dnia roboczego.',
    href: '/montaz-klimatyzacji',
    features: ['Montaż w 1 dzień', 'Certyfikowani monterzy', 'Gwarancja instalacji'],
  },
  {
    icon: '🛠️',
    title: 'Serwis klimatyzacji',
    description:
      'Przeglądy, naprawy i czyszczenie klimatyzatorów. Utrzymaj sprawność urządzenia na lata.',
    href: '/serwis-klimatyzacji',
    features: ['Przeglądy roczne', 'Naprawy awarii', 'Uzupełnianie czynnika'],
  },
  {
    icon: '🧼',
    title: 'Odgrzybianie',
    description:
      'Profesjonalne odgrzybianie i dezynfekcja klimatyzatorów. Zadbaj o zdrowe powietrze w domu.',
    href: '/odgrzybianie-klimatyzacji',
    features: ['Dezynfekcja UV', 'Czyszczenie filtrów', 'Likwidacja pleśni i grzybów'],
  },
  {
    icon: '🌡️',
    title: 'Pompy ciepła',
    description:
      'Instalacja i serwis pomp ciepła powietrze-woda. Ekologiczne ogrzewanie z dofinansowaniem.',
    href: '/pompy-ciepla',
    features: ['Dofinansowanie Czyste Powietrze', 'Montaż i uruchomienie', 'Gwarancja fabryczna'],
  },
]

const faqs = [
  {
    question: 'Ile kosztuje montaż klimatyzacji?',
    answer:
      'Koszt montażu klimatyzacji zależy od rodzaju urządzenia, liczby jednostek wewnętrznych oraz trudności instalacji. Standardowy montaż jednostki split zaczyna się od ok. 800 zł. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.',
  },
  {
    question: 'Jak długo trwa montaż klimatyzacji?',
    answer:
      'Standardowy montaż jednej jednostki split zajmuje 4–6 godzin. W większości przypadków realizujemy instalację w ciągu jednego dnia roboczego.',
  },
  {
    question: 'Czy klimatyzacja ogrzewa pomieszczenia zimą?',
    answer:
      'Tak! Nowoczesne klimatyzatory inwerterowe działają efektywnie nawet przy -15°C na zewnątrz. To ekonomiczna alternatywa dla tradycyjnych grzejników elektrycznych.',
  },
  {
    question: 'Jak często należy serwisować klimatyzację?',
    answer:
      'Zalecamy przegląd co najmniej raz w roku – najlepiej przed sezonem letnim. Regularny serwis zapewnia wydajność urządzenia, dobry jakość powietrza i nie traci ważności gwarancji.',
  },
  {
    question: 'Czy oferujecie finansowanie zakupu klimatyzacji?',
    answer:
      'Współpracujemy z partnerami finansowymi oferującymi leasing i raty. Skontaktuj się z nami, aby poznać dostępne opcje finansowania.',
  },
]

export default async function HomePage() {
  const reviews = await fetchGoogleReviews()
  return (
    <>
      <HeroSection
        badge="Nr 1 w Luboniu i okolicach"
        title="Klimatyzacja i pompy ciepła dla Twojego domu"
        subtitle="Profesjonalny montaż, serwis i odgrzybianie klimatyzacji. Obsługujemy Luboń, Poznań i całą Wielkopolskę. Szybka wycena – odpowiadamy w ciągu 24h."
        primaryCta={{ label: 'Zadzwoń: 691 959 013', href: 'tel:691959013' }}
        secondaryCta={{ label: 'Sprawdź ofertę', href: '/oferta' }}
      />

      {/* Services section */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Nasze usługi</h2>
          <p className="section-subtitle text-center mx-auto">
            Kompleksowa obsługa klimatyzacji i pomp ciepła – od doboru urządzenia, przez montaż, po regularne serwisowanie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Dlaczego warto nam zaufać?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '🏆', title: '10+ lat doświadczenia', desc: 'Setki zrealizowanych instalacji w całej Wielkopolsce.' },
              { icon: '🎓', title: 'Certyfikowani technicy', desc: 'Posiadamy certyfikaty F-GAZ i uprawnienia do obsługi czynników chłodniczych.' },
              { icon: '⚡', title: 'Szybka realizacja', desc: 'Montaż najczęściej w ciągu 1-3 dni roboczych od zamówienia.' },
              { icon: '🛡️', title: '5 lat gwarancji', desc: 'Gwarancja obejmuje zarówno urządzenie, jak i wykonaną instalację.' },
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

      {/* CTA banner */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy na komfort przez cały rok?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Zadzwoń do nas lub napisz – bezpłatna wycena montażu klimatyzacji w ciągu 24h.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:691959013" className="btn-primary">
              📞 Zadzwoń teraz
            </a>
            <Link href="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>

      {reviews && <ReviewsSection data={reviews} />}

      <FaqAccordion items={faqs} />
      <LocalSeoText />
    </>
  )
}
