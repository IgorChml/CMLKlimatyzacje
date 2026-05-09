/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [] },
  async redirects() {
    return [
      { source: '/montaz', destination: '/montaz-klimatyzacji', permanent: true },
    ]
  },
}

module.exports = nextConfig
