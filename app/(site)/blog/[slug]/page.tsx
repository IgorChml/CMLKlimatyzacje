import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createReader } from '@keystatic/core/reader'
import Markdoc from '@markdoc/markdoc'
import React from 'react'
import keystaticConfig from '@/keystatic.config'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

const categoryLabels: Record<string, string> = {
  montaz: 'Montaż',
  serwis: 'Serwis',
  pompy: 'Pompy ciepła',
  porady: 'Porady',
  aktualnosci: 'Aktualności',
}

function estimateReadingTime(content: unknown): number {
  const text = JSON.stringify(content ?? '')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), keystaticConfig)
  const slugs = await reader.collections.blog.list()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const reader = createReader(process.cwd(), keystaticConfig)
  const post = await reader.collections.blog.read(params.slug)
  if (!post) return {}

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || ''

  return {
    title,
    description,
    openGraph: {
      title: `${title} | CML Klimatyzacje`,
      description,
      url: `https://cmlklimatyzacje.pl/blog/${params.slug}`,
      siteName: 'CML Klimatyzacje',
      locale: 'pl_PL',
      type: 'article',
      publishedTime: post.publishedAt ?? undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const reader = createReader(process.cwd(), keystaticConfig)
  const post = await reader.collections.blog.read(params.slug)
  if (!post) notFound()

  const allPosts = await reader.collections.blog.all()
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== params.slug &&
        p.entry.category === post.category &&
        p.entry.publishedAt
    )
    .sort(
      (a, b) =>
        new Date(b.entry.publishedAt!).getTime() -
        new Date(a.entry.publishedAt!).getTime()
    )
    .slice(0, 2)

  const recentPosts = allPosts
    .filter((p) => p.slug !== params.slug && p.entry.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.entry.publishedAt!).getTime() -
        new Date(a.entry.publishedAt!).getTime()
    )
    .slice(0, 4)

  const contentResult = await post.content()
  // Keystatic markdoc fields return { node: ... }; fall back gracefully
  const rawNode = (contentResult as { node?: unknown })?.node ?? contentResult
  const renderable = Markdoc.transform(rawNode as Parameters<typeof Markdoc.transform>[0])
  const contentHtml = Markdoc.renderers.html(renderable)

  const readingTime = estimateReadingTime(rawNode)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt ?? '',
    datePublished: post.publishedAt ?? undefined,
    author: {
      '@type': 'Organization',
      name: 'CML Klimatyzacje',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CML Klimatyzacje',
      url: 'https://cmlklimatyzacje.pl',
    },
    url: `https://cmlklimatyzacje.pl/blog/${params.slug}`,
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Strona główna', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${params.slug}` },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <article className="lg:col-span-2">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-sky/10 text-sky text-sm font-semibold px-3 py-1 rounded-full">
                  {categoryLabels[post.category] ?? post.category}
                </span>
                <span className="text-gray-400 text-sm">{readingTime} min czytania</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
                {post.title}
              </h1>
              {formattedDate && (
                <time dateTime={post.publishedAt ?? ''} className="text-gray-400 text-sm">
                  Opublikowano: {formattedDate}
                </time>
              )}
              {post.excerpt && (
                <p className="mt-4 text-lg text-gray-600 leading-relaxed border-l-4 border-sky pl-4">
                  {post.excerpt}
                </p>
              )}
            </header>

            <div
              className="prose prose-lg max-w-none prose-headings:text-navy prose-a:text-sky prose-strong:text-navy"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA phone widget */}
            <div className="card bg-navy text-white sticky top-20">
              <p className="font-bold text-xl mb-2">Potrzebujesz pomocy?</p>
              <p className="text-gray-300 text-sm mb-4">
                Zadzwoń do nas – bezpłatna wycena i szybka realizacja.
              </p>
              <a href="tel:691959013" className="btn-primary w-full text-center justify-center">
                📞 691 959 013
              </a>
              <Link
                href="/kontakt"
                className="mt-3 block text-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Dane kontaktowe →
              </Link>
            </div>

            {/* Recent posts */}
            {recentPosts.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-navy text-lg mb-4">Ostatnie wpisy</h3>
                <ul className="space-y-3">
                  {recentPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-sm text-gray-700 hover:text-sky transition-colors leading-snug block"
                      >
                        {p.entry.title}
                      </Link>
                      {p.entry.publishedAt && (
                        <time className="text-xs text-gray-400">
                          {new Date(p.entry.publishedAt).toLocaleDateString('pl-PL')}
                        </time>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Categories */}
            <div className="card">
              <h3 className="font-bold text-navy text-lg mb-4">Kategorie</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <Link
                    key={value}
                    href="/blog"
                    className="bg-gray-bg text-gray-600 text-sm px-3 py-1.5 rounded-full hover:bg-sky/10 hover:text-sky transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-6">Przeczytaj również</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.entry.title}
                  excerpt={p.entry.excerpt ?? ''}
                  publishedAt={p.entry.publishedAt ?? new Date().toISOString()}
                  category={p.entry.category}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
