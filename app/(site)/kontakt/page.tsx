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
                        href="mailto:kontakt@cmlklimatyzacje.pl"
                        className="text-sky hover:text-orange transition-colors text-sm"
                      >
                        kontakt@cmlklimatyzacje.pl
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

            {/* Google Maps embed */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&height=400&hl=pl&q=CML+Klimatyzacje%2C+ul.+Nowiny+5%2C+Lub%C3%B3n&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja CML Klimatyzacje — ul. Nowiny 5, Luboń 62-030"
                />
              </div>

              <div className="card bg-navy text-white">
                <p className="font-semibold text-lg mb-2">⚡ Szybka wycena</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Zadzwoń na <strong className="text-sky">691 959 013</strong> lub napisz na{' '}
                  <strong className="text-sky">kontakt@cmlklimatyzacje.pl</strong> – wycenę
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
