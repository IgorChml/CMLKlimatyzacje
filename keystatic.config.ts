import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  collections: {
    blog: collection({
      label: 'Wpisy blogowe',
      slugField: 'title',
      path: 'content/blog/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Tytuł' } }),
        publishedAt: fields.date({ label: 'Data publikacji' }),
        excerpt: fields.text({ label: 'Zajawka', multiline: true }),
        category: fields.select({
          label: 'Kategoria',
          options: [
            { label: 'Montaż', value: 'montaz' },
            { label: 'Serwis', value: 'serwis' },
            { label: 'Pompy ciepła', value: 'pompy' },
            { label: 'Porady', value: 'porady' },
            { label: 'Aktualności', value: 'aktualnosci' },
          ],
          defaultValue: 'porady',
        }),
        metaTitle: fields.text({ label: 'SEO: Meta Title (max 60 znaków)' }),
        metaDescription: fields.text({
          label: 'SEO: Meta Description (max 160 znaków)',
          multiline: true,
        }),
        content: fields.markdoc({ label: 'Treść wpisu' }),
      },
    }),
  },
})
