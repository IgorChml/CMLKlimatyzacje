interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  title?: string
}

export default function FaqAccordion({ items, title = 'Często zadawane pytania' }: FaqAccordionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="section-title text-center">{title}</h2>
      <div className="mt-8 max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="card group border border-gray-100 cursor-pointer"
          >
            <summary className="flex items-center justify-between font-semibold text-navy text-base list-none cursor-pointer select-none">
              <span>{item.question}</span>
              <span className="ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-sky/10 text-sky text-sm transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
