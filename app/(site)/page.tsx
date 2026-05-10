import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import StepsSection from '@/components/StepsSection'
import WhyUsSection from '@/components/WhyUsSection'
import BrandsSection from '@/components/BrandsSection'
import FaqAccordion from '@/components/FaqAccordion'
import LocalSeoText from '@/components/LocalSeoText'
import ReviewsSection from '@/components/ReviewsSection'
import { fetchGoogleReviews } from '@/lib/google-reviews'
import { Wind, Wrench, Sprout, Building2 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CML Klimatyzacje – Montaż, Serwis i Pompy Ciepła | Luboń, Poznań',
  description:
    'Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Luboniu, Poznaniu i okolicach Wielkopolski. Szybka wycena, certyfikowani monterzy, 3 lata gwarancji.',
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
    icon: <Wind className="w-10 h-10 text-sky" strokeWidth={1.5} />,
    title: 'Montaż klimatyzacji',
    description:
      'Profesjonalny montaż klimatyzacji przez certyfikowanych techników F-GAZ. Instalacja nawet w ciągu jednego dnia roboczego.',
    href: '/montaz-klimatyzacji',
    features: ['Montaż w 1 dzień', 'Certyfikowani monterzy F-GAZ', 'Gwarancja instalacji'],
  },
  {
    icon: <Wrench className="w-10 h-10 text-sky" strokeWidth={1.5} />,
    title: 'Serwis klimatyzacji',
    description:
      'Przeglądy, naprawy i czyszczenie klimatyzatorów. Utrzymaj sprawność urządzenia przez lata.',
    href: '/serwis-klimatyzacji',
    features: ['Przeglądy roczne', 'Naprawy awarii', 'Uzupełnianie czynnika'],
  },
  {
    icon: <Sprout className="w-10 h-10 text-sky" strokeWidth={1.5} />,
    title: 'Odgrzybianie klimatyzacji',
    description:
      'Profesjonalne odgrzybianie i dezynfekcja klimatyzatorów. Zdrowe powietrze w Twoim domu i biurze.',
    href: '/odgrzybianie-klimatyzacji',
    features: ['Dezynfekcja biobójcza', 'Czyszczenie filtrów', 'Likwidacja pleśni i grzybów'],
  },
  {
    icon: <Building2 className="w-10 h-10 text-sky" strokeWidth={1.5} />,
    title: 'Klimatyzacja do biur',
    description:
      'Kompleksowe rozwiązania klimatyzacyjne dla firm, biur, restauracji i obiektów komercyjnych.',
    href: '/oferta',
    features: ['Systemy multi-split', 'Klimatyzatory kasetonowe', 'Umowy serwisowe'],
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
      'Zalecamy przegląd co najmniej raz w roku – najlepiej przed sezonem letnim. Regularny serwis zapewnia wydajność urządzenia, dobrą jakość powietrza i nie traci ważności gwarancji.',
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
      {/* 1. Hero */}
      <HeroSection
        badge="Luboń, Poznań i Wielkopolska"
        title="Komfortowa temperatura w Twoim domu w 48h. Montaż i serwis klimatyzacji"
        subtitle="Certyfikowani technicy F-GAZ, 3 lata gwarancji, bezpłatna wycena. Obsługujemy Luboń, Poznań i okolice."
        primaryCta={{ label: 'Poproś o darmową wycenę', href: '/kontakt' }}
        secondaryCta={{ label: 'Zobacz ofertę', href: '/oferta' }}
      />

      {/* 2. 3 kroki */}
      <StepsSection />

      {/* 3. Services */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Nasze usługi</h2>
          <p className="section-subtitle text-center mx-auto">
            Kompleksowa obsługa klimatyzacji – od montażu, przez serwis, po odgrzybianie i rozwiązania dla firm.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brands */}
      <BrandsSection />

      {/* 5. Why us */}
      <WhyUsSection />

      {/* 6. CTA banner */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy na komfort przez cały rok?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Zadzwoń do nas lub napisz – bezpłatna wycena montażu klimatyzacji w ciągu 24h.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:691959013"
              className="btn-primary min-h-[44px]"
            >
              📞 Zadzwoń teraz
            </a>
            <Link
              href="/kontakt"
              className="btn-outline border-white text-white hover:bg-white hover:text-navy min-h-[44px]"
            >
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Google Reviews */}
      {reviews && <ReviewsSection data={reviews} />}

      {/* 8. FAQ */}
      <FaqAccordion items={faqs} />

      {/* 9. Local SEO */}
      <LocalSeoText />
    </>
  )
}
