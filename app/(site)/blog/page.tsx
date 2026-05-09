import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCard from '@/components/BlogCard'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

export const metadata: Metadata = {
  title: 'Blog – Porady o Klimatyzacji i Pompach Ciepła',
  description:
    'Blog CML Klimatyzacje – porady dotyczące klimatyzacji, serwisu, odgrzybiania i pomp ciepła. Praktyczna wiedza od ekspertów z Lubonia i Poznania.',
  openGraph: {
    title: 'Blog CML Klimatyzacje – Porady o Klimatyzacji',
    description:
      'Praktyczne porady o klimatyzacji, serwisie i pompach ciepła od ekspertów.',
    url: 'https://cmlklimatyzacje.pl/blog',
    siteName: 'CML Klimatyzacje',
    locale: 'pl_PL',
  },
  keywords: [
    'blog klimatyzacja',
    'porady klimatyzacja',
    'jak serwisować klimatyzację',
    'pompa ciepła poradnik',
  ],
}

function estimateReadingTime(content: unknown): number {
  const text = JSON.stringify(content ?? '')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

const categoryLabels: Record<string, string> = {
  montaz: 'Montaż',
  serwis: 'Serwis',
  pompy: 'Pompy ciepła',
  porady: 'Porady',
  aktualnosci: 'Aktualności',
}

export default async function BlogPage() {
  const reader = createReader(process.cwd(), keystaticConfig)
  const posts = await reader.collections.blog.all()

  const sorted = posts
    .filter((p) => p.entry.publishedAt)
    .sort((a, b) =>
      new Date(b.entry.publishedAt!).getTime() - new Date(a.entry.publishedAt!).getTime()
    )

  const categories = Array.from(new Set(posts.map((p) => p.entry.category)))

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
        />
      </div>

      <section className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog CML Klimatyzacje</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Praktyczne porady o klimatyzacji, serwisie, odgrzybianiu i pompach ciepła od naszych ekspertów.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-full">
              Wszystkie
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full hover:border-sky hover:text-sky transition-colors cursor-pointer"
              >
                {categoryLabels[cat] ?? cat}
              </span>
            ))}
          </div>

          {sorted.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">✍️</div>
              <p className="text-xl font-semibold text-gray-500">Brak wpisów blogowych</p>
              <p className="text-sm mt-2">
                Dodaj pierwsze wpisy przez panel{' '}
                <a href="/keystatic" className="text-sky underline">Keystatic CMS</a>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.entry.title}
                  excerpt={post.entry.excerpt ?? ''}
                  publishedAt={post.entry.publishedAt ?? new Date().toISOString()}
                  category={post.entry.category}
                  readingTime={estimateReadingTime(post.entry.content)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
