/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cmlklimatyzacje.pl',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/keystatic/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/klimatyzacja'),
    await config.transform(config, '/montaz-klimatyzacji'),
    await config.transform(config, '/odgrzybianie-klimatyzacji'),
    await config.transform(config, '/serwis-klimatyzacji'),
    await config.transform(config, '/pompy-ciepla'),
    await config.transform(config, '/o-nas'),
    await config.transform(config, '/oferta'),
    await config.transform(config, '/realizacje'),
    await config.transform(config, '/kontakt'),
    await config.transform(config, '/blog'),
  ],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/klimatyzacja': 0.8,
      '/montaz-klimatyzacji': 0.8,
      '/odgrzybianie-klimatyzacji': 0.8,
      '/serwis-klimatyzacji': 0.8,
      '/pompy-ciepla': 0.8,
      '/oferta': 0.8,
      '/o-nas': 0.6,
      '/kontakt': 0.6,
      '/realizacje': 0.7,
      '/blog': 0.7,
    }
    const changefreqs = {
      '/': 'monthly',
      '/blog': 'weekly',
    }
    return {
      loc: path,
      changefreq: changefreqs[path] || (path.startsWith('/blog/') ? 'weekly' : 'monthly'),
      priority: priorities[path] || (path.startsWith('/blog/') ? 0.6 : 0.7),
      lastmod: new Date().toISOString(),
    }
  },
}
