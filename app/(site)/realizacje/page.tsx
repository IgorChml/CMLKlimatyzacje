import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Realizacje – Przykłady Montażu Klimatyzacji i Pomp Ciepła',
  description:
    'Nasze realizacje – montaż klimatyzacji i pomp ciepła w domach, biurach i lokalach usługowych w Luboniu, Poznaniu i Wielkopolsce. Zobacz zdjęcia i opisy projektów.',
  openGraph: {
    title: 'Realizacje CML Klimatyzacje – Montaż Klimatyzacji i Pomp Ciepła',
    description:
      'Przykłady naszych realizacji w Luboniu, Poznaniu i Wielkopolsce.',
    url: 'https://cmlklimatyzacje.pl/realizacje',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'realizacje klimatyzacja',
    'montaż klimatyzacji zdjęcia',
    'przykłady instalacji klimatyzacji',
    'pompa ciepła realizacje',
  ],
}

const projects = [
  {
    title: 'Dom jednorodzinny – Luboń',
    type: 'Klimatyzacja',
    scope: 'System multi-split 3 × 2,5 kW Daikin',
    desc: 'Instalacja klimatyzacji dla całego domu: salon, sypialnia główna i sypialnia dziecięca. Jeden agregat zewnętrzny, trzy jednostki wewnętrzne.',
    area: '120 m²',
    time: '1 dzień',
  },
  {
    title: 'Biuro – Poznań, Grunwald',
    type: 'Klimatyzacja',
    scope: 'Klimatyzatory kasetonowe Mitsubishi 4 × 5 kW',
    desc: 'Klimatyzacja otwartego biura dla 20 osób. Cztery klimatyzatory kasetonowe w suficie podwieszanym, sterowanie strefowe.',
    area: '280 m²',
    time: '2 dni',
  },
  {
    title: 'Dom z pompą ciepła – Mosina',
    type: 'Pompa ciepła',
    scope: 'Pompa ciepła Daikin Altherma 8 kW',
    desc: 'Kompleksowa wymiana kotła gazowego na pompę ciepła powietrze-woda. Integracja z istniejącym ogrzewaniem podłogowym i zasobnikiem CWU.',
    area: '160 m²',
    time: '3 dni',
  },
  {
    title: 'Restauracja – Swarzędz',
    type: 'Serwis i klimatyzacja',
    scope: 'Montaż i serwis klimatyzacji gastronomicznej',
    desc: 'Instalacja klimatyzacji dla sali restauracyjnej i zaplecza kuchennego. Systemy wentylacji i klimatyzacji zintegrowane z istniejącą instalacją.',
    area: '200 m²',
    time: '2 dni',
  },
  {
    title: 'Apartament – Puszczykowo',
    type: 'Klimatyzacja',
    scope: 'Klimatyzator split Fujitsu 3,5 kW',
    desc: 'Montaż klimatyzatora w apartamencie. Instalacja przez ścianę zewnętrzną z minimalną ingerencją w elewację.',
    area: '65 m²',
    time: '5 h',
  },
  {
    title: 'Sklep – Kórnik',
    type: 'Klimatyzacja',
    scope: 'System VRF Daikin – 6 jednostek',
    desc: 'Klimatyzacja całego obiektu handlowego. System VRF z centralnym sterowaniem i odzyskiem ciepła.',
    area: '400 m²',
    time: '4 dni',
  },
]

const typeColors: Record<string, string> = {
  'Klimatyzacja': 'bg-sky/10 text-sky',
  'Pompa ciepła': 'bg-green-100 text-green-700',
  'Serwis i klimatyzacja': 'bg-orange/10 text-orange',
}

export default function RealizacjePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Realizacje', href: '/realizacje' },
          ]}
        />
      </div>

      <HeroSection
        title="Nasze realizacje"
        subtitle="Zrealizowaliśmy ponad 500 instalacji klimatyzacji i pomp ciepła w Luboniu, Poznaniu i całej Wielkopolsce. Oto wybrane projekty."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Wybrane projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
              <article key={project.title} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[project.type] ?? 'bg-gray-100 text-gray-600'}`}>
                    {project.type}
                  </span>
                </div>
                <h3 className="font-bold text-navy text-lg mb-1">{project.title}</h3>
                <p className="text-sky text-sm font-medium mb-2">{project.scope}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{project.desc}</p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex gap-4 text-xs text-gray-500">
                  <span>📐 {project.area}</span>
                  <span>⏱️ {project.time}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-bg py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Chcesz być naszym kolejnym zadowolonym klientem?</h2>
          <p className="text-gray-600 mb-8">
            Skontaktuj się z nami – bezpłatna wycena i konsultacja bez zobowiązań.
          </p>
          <a href="tel:691959013" className="btn-primary">📞 Zadzwoń: 691 959 013</a>
        </div>
      </section>
    </>
  )
}
