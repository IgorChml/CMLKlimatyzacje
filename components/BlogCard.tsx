import Link from 'next/link'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  category: string
  readingTime?: number
}

const categoryLabels: Record<string, string> = {
  montaz: 'Montaż',
  serwis: 'Serwis',
  pompy: 'Pompy ciepła',
  porady: 'Porady',
  aktualnosci: 'Aktualności',
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  publishedAt,
  category,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="card group hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-sky/10 text-sky text-xs font-semibold px-3 py-1 rounded-full">
          {categoryLabels[category] ?? category}
        </span>
        {readingTime && (
          <span className="text-gray-400 text-xs">{readingTime} min czytania</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-sky transition-colors duration-300 flex-1">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <time dateTime={publishedAt} className="text-gray-400 text-xs">
          {formattedDate}
        </time>
        <Link
          href={`/blog/${slug}`}
          className="text-sky text-sm font-semibold hover:text-orange transition-colors duration-300"
        >
          Czytaj →
        </Link>
      </div>
    </article>
  )
}
