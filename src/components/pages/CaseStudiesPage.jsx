import { CheckCircle2, Clock3 } from 'lucide-react'
import { caseStudies, proofLedger } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'
import MetricCounter from '../ui/MetricCounter'

export default function CaseStudiesPage() {
  return (
    <>
      <Seo
        title="Proof ledger"
        description="FLUX Digital proof standards, package-scope metrics, and the publication framework for future case studies."
      />
      <PageHero
        eyebrow="Proof ledger"
        title="Claims should be inspectable, not decorative."
        summary="The previous website displayed unsupported performance numbers. Those claims are removed. This ledger publishes only defined package scope and documents the evidence required before outcomes appear."
        primaryCta={{ label: 'Discuss a documented case', to: '/contact?intent=case-study' }}
        secondaryCta={{ label: 'View service packages', to: '/packages' }}
      />
      <main>
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {proofLedger.map((item) => (
                <article key={item.label} className="rounded-2xl border border-[#00F0FF]/16 bg-[#00F0FF]/[0.035] p-6">
                  <div className="font-sans text-4xl font-bold text-[#00F0FF]">
                    <MetricCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <h2 className="mt-4 font-sans text-lg font-bold leading-snug tracking-[-0.025em] text-white/85">{item.label}</h2>
                  <p className="mt-3 text-xs leading-relaxed text-white/42">{item.definition}</p>
                  <dl className="mt-5 pt-4 border-t border-white/[0.07] text-[11px] text-white/35">
                    <div className="flex justify-between gap-3">
                      <dt>Source</dt>
                      <dd className="text-right">{item.source}</dd>
                    </div>
                    <div className="flex justify-between gap-3 mt-2">
                      <dt>Period</dt>
                      <dd>{item.period}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-7xl mx-auto">
            <p className="section-eyebrow">Publication queue</p>
            <h2 className="section-title text-white max-w-4xl">Evidence templates ready for approved client work.</h2>
            <div className="grid lg:grid-cols-3 gap-5 mt-12">
              {caseStudies.map((item) => (
                <article key={item.id} className="rounded-3xl border border-white/[0.08] bg-[#090C15] p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[.18em] text-[#00F0FF]/65">{item.label}</span>
                    <Clock3 size={16} className="text-white/25" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold mt-7 leading-tight tracking-[-0.035em]">{item.title}</h3>
                  <p className="text-white/48 leading-relaxed text-sm mt-4">{item.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {item.facts.map((fact) => (
                      <li key={fact} className="flex gap-2 text-sm text-white/58">
                        <CheckCircle2 size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 pt-5 border-t border-white/[0.07] text-xs text-white/30">{item.status}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
