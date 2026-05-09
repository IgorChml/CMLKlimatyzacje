export default function LocalSeoText() {
  return (
    <section className="bg-gray-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-navy mb-4">
          Klimatyzacja i pompy ciepła – Luboń, Poznań i okolice
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
          CML Klimatyzacje świadczy profesjonalne usługi montażu i serwisu klimatyzacji
          na terenie <strong>Lubonia</strong>, <strong>Poznania</strong>,{' '}
          <strong>Mosiny</strong>, <strong>Puszczykowa</strong>,{' '}
          <strong>Swarzędza</strong> oraz <strong>Kórnika</strong>. Obsługujemy zarówno
          klientów indywidualnych, jak i firmy oraz deweloperów. Działamy w całej
          Wielkopolsce – szybko, solidnie i z pełną gwarancją. Skontaktuj się z nami,
          aby uzyskać bezpłatną wycenę montażu klimatyzacji lub pompy ciepła w Twoim
          domu lub biurze.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            'klimatyzacja Luboń',
            'klimatyzacja Poznań',
            'montaż klimatyzacji Mosina',
            'serwis klimatyzacji Puszczykowo',
            'pompy ciepła Swarzędz',
            'klimatyzacja Kórnik',
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
