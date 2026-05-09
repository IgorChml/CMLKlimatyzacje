import Link from 'next/link'

const serviceLinks = [
  { label: 'Klimatyzacja', href: '/klimatyzacja' },
  { label: 'Montaż klimatyzacji', href: '/montaz-klimatyzacji' },
  { label: 'Serwis klimatyzacji', href: '/serwis-klimatyzacji' },
  { label: 'Odgrzybianie klimatyzacji', href: '/odgrzybianie-klimatyzacji' },
  { label: 'Pompy ciepła', href: '/pompy-ciepla' },
]

const companyLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-2xl mb-3">
              <span className="text-sky">CML</span> Klimatyzacje
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Profesjonalny montaż, serwis i odgrzybianie klimatyzacji oraz instalacja
              pomp ciepła w Luboniu, Poznaniu i całej Wielkopolsce.
            </p>
            <a
              href="tel:691959013"
              className="text-sky font-semibold text-lg hover:text-white transition-colors"
            >
              📞 691 959 013
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Usługi</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-sky text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Firma</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-sky text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>📍 Luboń, Wielkopolska</p>
              <p>
                📞{' '}
                <a href="tel:691959013" className="hover:text-sky transition-colors">
                  691 959 013
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href="mailto:biuro@cmlklimatyzacje.pl" className="hover:text-sky transition-colors">
                  biuro@cmlklimatyzacje.pl
                </a>
              </p>
              <p>🕐 Pon–Pt: 08:00–18:00</p>
              <p>🕐 Sob: 09:00–14:00</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CML Klimatyzacje. Wszelkie prawa zastrzeżone.</p>
          <p>
            Obsługujemy:{' '}
            <span className="text-gray-400">
              Luboń, Poznań, Mosina, Puszczykowo, Swarzędz, Kórnik
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
