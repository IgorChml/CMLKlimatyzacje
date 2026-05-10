import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Two-column grid: content left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Left column — headline + CTAs */}
          <div>
            {badge && (
              <span className="inline-block bg-sky/20 text-sky border border-sky/30 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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

            {/* Trust badges — below CTAs on the left */}
            <div className="mt-10 flex flex-wrap gap-4">
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

          {/* Right column — contact form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
