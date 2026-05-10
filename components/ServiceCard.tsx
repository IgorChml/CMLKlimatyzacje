import Link from 'next/link'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  features?: string[]
}

export default function ServiceCard({ icon, title, description, href, features }: ServiceCardProps) {
  return (
    <article className="card group hover:-translate-y-1 flex flex-col h-full">
      <div className="mb-4 text-4xl flex items-center">{icon}</div>
      <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-sky transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      {features && features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-sky flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      {/* TODO: use .webp format when adding real photos */}
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1 text-sky font-semibold text-sm hover:text-orange transition-colors duration-300 min-h-[44px]"
      >
        Dowiedz się więcej →
      </Link>
    </article>
  )
}
