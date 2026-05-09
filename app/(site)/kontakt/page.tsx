import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Kontakt – CML Klimatyzacje | Luboń, Poznań',
  description:
    'Skontaktuj się z CML Klimatyzacje. Adres, telefon, e-mail, godziny otwarcia. Obsługujemy Luboń, Poznań, Mosinę, Puszczykowo, Swarzędz i Kórnik.',
  openGraph: {
    title: 'Kontakt – CML Klimatyzacje | Luboń, Poznań',
    description:
      'Dane kontaktowe CML Klimatyzacje. Zadzwoń lub napisz – odpowiemy w 24h.',
    url: 'https://cmlklimatyzacje.pl/kontakt',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: ['kontakt CML Klimatyzacje', 'klimatyzacje Luboń telefon', 'serwis klimatyzacji kontakt'],
}

export default function KontaktPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Kontakt', href: '/kontakt' },
          ]}
        />
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Kontakt</h1>
          <p className="section-subtitle">
            Jesteśmy do Twojej dyspozycji. Zadzwoń lub napisz – odpowiemy najszybciej jak to możliwe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="font-bold text-navy text-xl mb-6">Dane kontaktowe</h2>
                <address className="not-italic space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-navy">Adres</p>
                      <p className="text-gray-600 text-sm">
                        CML Klimatyzacje<br />
                        ul. Nowiny 5<br />
                        Luboń, 62-030<br />
                        woj. Wielkopolskie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <p className="font-semibold text-navy">Telefon</p>
                      <a
                        href="tel:691959013"
                        className="text-sky font-semibold text-lg hover:text-orange transition-colors"
                      >
                        691 959 013
                      </a>
                      <p className="text-gray-500 text-xs mt-1">Połączenia i SMS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">✉️</span>
                    <div>
                      <p className="font-semibold text-navy">E-mail</p>
                      <a
                        href="mailto:biuro@cmlklimatyzacje.pl"
                        className="text-sky hover:text-orange transition-colors text-sm"
                      >
                        biuro@cmlklimatyzacje.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">🕐</span>
                    <div>
                      <p className="font-semibold text-navy">Godziny pracy</p>
                      <dl className="text-gray-600 text-sm space-y-1 mt-1">
                        <div className="flex gap-4">
                          <dt className="w-28">Poniedziałek–Piątek</dt>
                          <dd className="font-medium text-navy">08:00–18:00</dd>
                        </div>
                        <div className="flex gap-4">
                          <dt className="w-28">Sobota</dt>
                          <dd className="font-medium text-navy">09:00–14:00</dd>
                        </div>
                        <div className="flex gap-4">
                          <dt className="w-28">Niedziela</dt>
                          <dd className="text-gray-400">Zamknięte</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </address>
              </div>

              <div className="card">
                <h2 className="font-bold text-navy text-xl mb-4">Obszar działania</h2>
                <div className="flex flex-wrap gap-2">
                  {['Luboń', 'Poznań', 'Mosina', 'Puszczykowo', 'Swarzędz', 'Kórnik', 'Śrem', 'Środa Wielkopolska'].map((city) => (
                    <span
                      key={city}
                      className="bg-sky/10 text-sky text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex flex-col gap-4">
              <div
                className="w-full rounded-2xl overflow-hidden bg-gray-bg border border-gray-200 flex items-center justify-center"
                style={{ minHeight: '400px' }}
                aria-label="Lokalizacja CML Klimatyzacje na mapie"
                role="img"
              >
                <div className="text-center text-gray-400 p-8">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="font-semibold text-lg text-gray-500">Mapa dojazdu</p>
                  <p className="text-sm mt-2">
                    CML Klimatyzacje<br />
                    ul. Nowiny 5, Luboń 62-030
                  </p>
                  <a
                    href="https://maps.google.com/?q=ul.+Nowiny+5,+62-030+Luboń"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block btn-secondary text-sm"
                  >
                    Otwórz w Google Maps
                  </a>
                </div>
              </div>

              <div className="card bg-navy text-white">
                <p className="font-semibold text-lg mb-2">⚡ Szybka wycena</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Zadzwoń na <strong className="text-sky">691 959 013</strong> lub napisz na{' '}
                  <strong className="text-sky">biuro@cmlklimatyzacje.pl</strong> – wycenę
                  przesyłamy w ciągu 24 godzin roboczych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
