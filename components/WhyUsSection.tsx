import { Award, ShieldCheck, BadgeCheck } from 'lucide-react'

const advantages = [
  {
    Icon: Award,
    title: '5 lat doświadczenia',
    desc: 'Zrealizowaliśmy setki montaży klimatyzacji w domach i firmach w Luboniu, Poznaniu i całej Wielkopolsce.',
  },
  {
    Icon: ShieldCheck,
    title: 'Certyfikaty F-gazowe',
    desc: 'Posiadamy wymagane certyfikaty do pracy z czynnikami chłodniczymi zgodnie z przepisami UE.',
  },
  {
    Icon: BadgeCheck,
    title: '3 lata gwarancji',
    desc: 'Oferujemy 3 lata gwarancji na wykonane usługi i zamontowane urządzenia klimatyzacyjne.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-3">
          Dlaczego my?
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Wybierając CML Klimatyzacje, stawiasz na sprawdzoną jakość i pełne bezpieczeństwo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mb-5">
                <Icon className="w-8 h-8 text-sky" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
