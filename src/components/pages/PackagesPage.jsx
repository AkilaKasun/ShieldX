import { ArrowRight, Check, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { packages } from '../../content/siteContent'
import { trackEvent } from '../../lib/analytics'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'

export default function PackagesPage() {
  return (
    <>
      <Seo
        title="Packages"
        description="FLUX Digital launch-planning package baselines for digital rescue, production, AI creative, growth, and account security."
      />
      <PageHero
        eyebrow="Package architecture"
        title="Clear starting points. Written scope before commitment."
        summary="These figures are planning baselines from the modernization brief, not binding offers. FLUX Digital must validate cost, margin, capacity, tax, travel, rights, and payment terms before a package is sold."
        primaryCta={{ label: 'Discuss the right scope', to: '/pricing-consultations' }}
        secondaryCta={{ label: 'Start a case assessment', to: '/emergency-reputation-rescue/book-case-assessment' }}
      />

      <main className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-5 border border-amber-300/20 bg-amber-300/[0.06] flex gap-4 mb-16">
            <Info className="text-amber-200 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-amber-50/70 leading-relaxed">
              Draft commercial content: prices shown below require written FLUX Digital approval before publication as an offer.
              Variable costs and third-party fees are excluded unless the final proposal states otherwise.
            </p>
          </div>

          <div className="space-y-24">
            {packages.map((pkg, packageIndex) => (
              <section key={pkg.id} id={pkg.id} className="scroll-mt-28">
                <div className="max-w-3xl mb-9">
                  <p className="section-eyebrow">{pkg.category}</p>
                  <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-[-0.035em] leading-tight">{pkg.title}</h2>
                  <p className="mt-4 text-white/48 leading-relaxed">{pkg.description}</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-5">
                  {pkg.tiers.map((tier, tierIndex) => (
                    <article
                      key={tier.name}
                      className={`rounded-3xl border p-7 flex flex-col ${
                        tierIndex === 1
                          ? 'border-[#00F0FF]/35 bg-[#00F0FF]/[0.055] shadow-[0_0_50px_rgba(0,240,255,.08)]'
                          : 'border-white/[0.08] bg-white/[0.018]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-sans text-[10px] tracking-[.2em] uppercase text-[#00F0FF]/70">
                          Tier 0{tierIndex + 1}
                        </p>
                        {tierIndex === 1 && (
                          <span className="text-[10px] uppercase tracking-wider rounded-full bg-[#00F0FF] text-[#031015] px-3 py-1 font-bold">
                            Core
                          </span>
                        )}
                      </div>
                      <h3 className="mt-7 font-sans font-bold text-xl leading-tight tracking-[-0.03em] min-h-14">{tier.name}</h3>
                      <div className="mt-5 pb-6 border-b border-white/[0.08]">
                        <p className="text-3xl font-bold tracking-tight">LKR {tier.lkr}</p>
                        <p className="text-white/35 text-sm mt-1">
                          USD {tier.usd}
                          {pkg.recurring ? ' / month' : ''}
                        </p>
                      </div>
                      <ul className="space-y-3 py-7 flex-1">
                        {tier.items.map((item) => (
                          <li key={item} className="text-white/55 text-sm leading-relaxed flex gap-3">
                            <Check size={16} className="text-[#00F0FF] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/contact?package=${encodeURIComponent(pkg.id)}&tier=${tierIndex + 1}`}
                        className="rounded-full border border-[#00F0FF]/25 text-[#00F0FF] px-5 py-3 inline-flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#00F0FF] hover:text-black transition-colors"
                        onClick={() =>
                          trackEvent('package_selected', {
                            package_id: pkg.id,
                            tier: tierIndex + 1,
                            position: packageIndex + 1,
                          })
                        }
                      >
                        Validate this scope
                        <ArrowRight size={16} />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
