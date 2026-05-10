const brands = [
  { name: 'Haier', slug: 'haier' },
  // TODO: replace with actual logo image (.webp format) when available
]

export default function BrandsSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Marki, z którymi współpracujemy
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map(({ name, slug }) => (
            <div
              key={slug}
              className="flex items-center justify-center border border-gray-200 rounded-2xl px-8 py-4 min-w-[120px] min-h-[64px] grayscale hover:grayscale-0 transition-all duration-300 hover:border-sky/40 hover:shadow-md"
              aria-label={name}
            >
              {/* TODO: replace with actual logo image (.webp format) when available */}
              <span className="text-lg font-bold text-gray-500 tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
