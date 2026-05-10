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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
