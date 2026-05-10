import { ClipboardCheck, Wrench, HeartHandshake } from 'lucide-react'

const steps = [
  {
    Icon: ClipboardCheck,
    number: '01',
    title: 'Bezpłatny audyt',
    desc: 'Przyjeżdżamy, oceniamy pomieszczenie i dobieramy optymalne urządzenie. Bez żadnych ukrytych kosztów.',
  },
  {
    Icon: Wrench,
    number: '02',
    title: 'Szybki montaż',
    desc: 'Instalujemy klimatyzację w ciągu jednego dnia roboczego. Certyfikowani technicy z doświadczeniem.',
  },
  {
    Icon: HeartHandshake,
    number: '03',
    title: 'Serwis i opieka',
    desc: 'Zapewniamy przeglądy, naprawy i pełną opiekę posprzedażową. Jesteśmy zawsze dostępni dla naszych klientów.',
  },
]

export default function StepsSection() {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          3 kroki do Twojej klimatyzacji
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* connector line visible on desktop */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-sky/30" />

          {steps.map(({ Icon, number, title, desc }) => (
            <div
              key={number}
              className="bg-white/10 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-full bg-sky/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-sky" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-2 -right-3 text-xs font-extrabold text-sky/60">
                  {number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
