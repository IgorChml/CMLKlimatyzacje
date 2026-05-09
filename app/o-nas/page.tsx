import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'O Nas – CML Klimatyzacje | Luboń, Poznań',
  description:
    'Poznaj CML Klimatyzacje – firmę z Lubonia z ponad 10-letnim doświadczeniem w montażu i serwisie klimatyzacji oraz pomp ciepła w Wielkopolsce.',
  openGraph: {
    title: 'O Nas – CML Klimatyzacje | Luboń, Poznań',
    description:
      'CML Klimatyzacje – ponad 10 lat doświadczenia, certyfikowani technicy, setki zadowolonych klientów.',
    url: 'https://cmlklimatyzacje.pl/o-nas',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: ['CML Klimatyzacje', 'firma klimatyzacje Luboń', 'o nas klimatyzacje Poznań'],
}

const team = [
  { name: 'Marek Kowalski', role: 'Właściciel & Główny Technik', cert: 'Certyfikat F-GAZ, 15 lat doświadczenia' },
  { name: 'Piotr Nowak', role: 'Technik instalacyjny', cert: 'Certyfikat F-GAZ, specjalista pompy ciepła' },
  { name: 'Anna Wiśniewska', role: 'Obsługa klienta', cert: 'Koordynacja projektów i serwisów' },
]

export default function ONasPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'O nas', href: '/o-nas' },
          ]}
        />
      </div>

      <HeroSection
        title="Jesteśmy CML Klimatyzacje"
        subtitle="Od ponad 10 lat montujemy i serwisujemy klimatyzację w Luboniu, Poznaniu i całej Wielkopolsce. Stawiamy na jakość, terminowość i pełne zadowolenie klientów."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Nasza historia</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CML Klimatyzacje powstało w Luboniu jako jednoosobowa działalność gospodarcza.
                Przez lata solidnej pracy zyskaliśmy zaufanie setek klientów w Luboniu, Poznaniu,
                Mosinie, Puszczykowie, Swarzędzu i Kórniku.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dziś jesteśmy certyfikowanym partnerem wiodących marek klimatyzacyjnych –
                Daikin, Mitsubishi Electric i Fujitsu. Nasz zespół posiada certyfikaty F-GAZ
                uprawniające do pracy z czynnikami chłodniczymi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Rozszerzyliśmy działalność o instalację pomp ciepła, pomagamy klientom
                w uzyskaniu dofinansowania z programu Czyste Powietrze.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Zrealizowanych instalacji' },
                { value: '10+', label: 'Lat doświadczenia' },
                { value: '98%', label: 'Zadowolonych klientów' },
                { value: '24h', label: 'Czas odpowiedzi na wycenę' },
              ].map((stat) => (
                <div key={stat.label} className="card text-center bg-gray-bg">
                  <div className="text-3xl font-extrabold text-sky mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Nasz zespół</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-sky/20 flex items-center justify-center text-2xl mx-auto mb-4">
                  👤
                </div>
                <h3 className="font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-sky text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-2">{member.cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Nasze certyfikaty i partnerstwa</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Certyfikat F-GAZ', 'Partner Daikin', 'Partner Mitsubishi Electric', 'Partner Fujitsu', 'Program Czyste Powietrze'].map((cert) => (
              <span
                key={cert}
                className="bg-navy text-white px-6 py-3 rounded-2xl font-semibold text-sm"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
