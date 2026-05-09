import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'CML Klimatyzacje – Montaż, Serwis, Pompy Ciepła | Luboń, Poznań',
    template: '%s | CML Klimatyzacje',
  },
  description:
    'Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Luboniu, Poznaniu i okolicach. Szybka wycena, doświadczeni monterzy, gwarancja jakości.',
  metadataBase: new URL('https://cmlklimatyzacje.pl'),
  openGraph: {
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
