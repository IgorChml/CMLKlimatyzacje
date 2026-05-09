'use client'

import Link from 'next/link'
import { useState } from 'react'

const klimatyzacjeItems = [
  { label: 'Montaż', href: '/montaz-klimatyzacji' },
  { label: 'Serwis', href: '/serwis-klimatyzacji' },
  { label: 'Odgrzybianie', href: '/odgrzybianie-klimatyzacji' },
]

const navLinks = [
  { label: 'Pompy ciepła', href: '/pompy-ciepla' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [klimatyzacjeOpen, setKlimatyzacjeOpen] = useState(false)

  return (
    <header className="bg-navy text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-sky">CML</span>
            <span className="text-white">Klimatyzacje</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Główna nawigacja">

            {/* Klimatyzacje dropdown */}
            <div className="relative group">
              <Link
                href="/klimatyzacja"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium hover:bg-sky/20 hover:text-sky transition-all duration-300"
              >
                Klimatyzacje
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className="absolute top-full left-0 pt-2 z-20
                           opacity-0 invisible -translate-y-1
                           group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                           transition-all duration-300"
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden min-w-[210px] py-1">
                  {klimatyzacjeItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-sky/10 hover:text-sky transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-sky/20 hover:text-sky transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:691959013" className="btn-primary text-sm py-2 px-4">
              📞 691 959 013
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menu mobilne">

            {/* Klimatyzacje — tap to expand */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-sky/20 hover:text-sky transition-all duration-300"
                onClick={() => setKlimatyzacjeOpen(!klimatyzacjeOpen)}
                aria-expanded={klimatyzacjeOpen}
              >
                <span>Klimatyzacje</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${klimatyzacjeOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {klimatyzacjeOpen && (
                <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-sky/30 pl-3">
                  {klimatyzacjeItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-sky hover:bg-sky/10 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-sky/20 hover:text-sky transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a href="tel:691959013" className="mt-2 btn-primary text-sm text-center">
              📞 691 959 013
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
