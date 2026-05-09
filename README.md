# CML Klimatyzacje – Website

Multi-page Next.js 14 website for CML Klimatyzacje, built with Keystatic CMS, Tailwind CSS, and full SEO support.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **CMS:** Keystatic (local mode, Git-based)
- **Styling:** Tailwind CSS with custom design tokens
- **SEO:** `generateMetadata()` per page + `next-sitemap`
- **Hosting:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Visit [localhost:3000](http://localhost:3000) to see the website.

Visit [localhost:3000/keystatic](http://localhost:3000/keystatic) to manage blog content via the CMS.

### 3. Build for production

```bash
npm run build
```

This runs `next build` followed by `next-sitemap` to generate `sitemap.xml` and `robots.txt`.

## Blog Content Management

Blog posts are managed via **Keystatic CMS** at `/keystatic`. Posts are stored as `.mdoc` files in `content/blog/`. No database required – everything is Git-based.

Each post supports:
- Title, excerpt, category, publish date
- Custom SEO meta title and description
- Rich Markdoc content

## Deployment to Vercel

1. Push this repository to GitHub
2. Connect the GitHub repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js – no build configuration needed
4. **Custom domain:** Point `cmlklimatyzacje.pl` DNS to Vercel (add A/CNAME records as instructed in Vercel dashboard)

## Environment Variables

No environment variables required for basic operation.

Optional:
- `SITE_URL` – override the site URL in `next-sitemap.config.js` (defaults to `https://cmlklimatyzacje.pl`)

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout with Header, Footer, LocalBusiness JSON-LD
  page.tsx              # Homepage
  klimatyzacja/         # Klimatyzacja page
  montaz-klimatyzacji/  # Montaż page
  serwis-klimatyzacji/  # Serwis page
  odgrzybianie-klimatyzacji/ # Odgrzybianie page
  pompy-ciepla/         # Pompy ciepła page
  o-nas/                # About page
  oferta/               # Services overview page
  realizacje/           # Portfolio page
  kontakt/              # Contact page (no form)
  blog/                 # Blog listing + [slug] dynamic pages
  api/keystatic/        # Keystatic API route handler
components/             # Reusable React components
  Header.tsx
  Footer.tsx
  HeroSection.tsx
  ServiceCard.tsx
  FaqAccordion.tsx      # With FAQPage JSON-LD schema
  Breadcrumb.tsx        # With BreadcrumbList JSON-LD schema
  LocalSeoText.tsx      # Local SEO crawlable section
  BlogCard.tsx
content/blog/           # Keystatic blog posts (.mdoc files)
keystatic.config.ts     # CMS schema configuration
next-sitemap.config.js  # Sitemap generation config
```
