import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  badge?: string
}

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy/95 to-sky/30 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block bg-sky/20 text-sky border border-sky/30 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="btn-primary min-h-[44px] min-w-[44px]"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn-outline border-white text-white hover:bg-white hover:text-navy min-h-[44px] min-w-[44px]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap gap-6">
          {[
            { icon: '✅', text: 'Certyfikowani monterzy' },
            { icon: '⚡', text: 'Montaż w 1 dzień' },
            { icon: '🛡️', text: '3 lata gwarancji' },
            { icon: '📍', text: 'Luboń i okolice' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
