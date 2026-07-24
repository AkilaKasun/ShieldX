import { Check, CircleOff, Quote, ShieldCheck } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { serviceHubs } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'
import TrustNotice from '../ui/TrustNotice'
import FaqList from '../ui/FaqList'

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title text-white">{title}</h2>
      {copy && <p className="mt-5 text-white/52 leading-relaxed">{copy}</p>}
    </div>
  )
}

export default function ServicePage({ hub: suppliedHub }) {
  const { hubSlug } = useParams()
  const hub = suppliedHub || serviceHubs.find((item) => item.slug === hubSlug)

  if (!hub) return <Navigate to="/404" replace />

  const Icon = hub.icon

  return (
    <>
      <Seo title={hub.eyebrow} description={hub.summary} />
      <PageHero
        eyebrow={hub.eyebrow}
        title={hub.title}
        summary={hub.summary}
        primaryCta={hub.primaryCta}
        secondaryCta={hub.secondaryCta}
      >
        <div className="mt-12 grid md:grid-cols-3 gap-3 max-w-4xl">
          {hub.proof.map((item) => (
            <div key={item} className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 text-sm text-white/65">
              <ShieldCheck size={16} className="text-[#00F0FF] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <main>
        <section className="px-6 md:px-12 py-16 bg-[#060912]">
          <div className="max-w-7xl mx-auto">
            <TrustNotice />
          </div>
        </section>

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading eyebrow="Fit check" title="Who this is — and is not — for." />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.04] p-7 md:p-9">
                <h3 className="font-sans text-xl font-bold leading-tight tracking-[-0.03em] mb-6">A strong fit</h3>
                <ul className="space-y-4">
                  {hub.forItems.map((item) => (
                    <li key={item} className="flex gap-3 text-white/62 leading-relaxed">
                      <Check size={18} className="text-[#00F0FF] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <h3 className="font-sans text-xl font-bold leading-tight tracking-[-0.03em] mb-6">Not a fit</h3>
                <ul className="space-y-4">
                  {hub.notFor.map((item) => (
                    <li key={item} className="flex gap-3 text-white/52 leading-relaxed">
                      <CircleOff size={18} className="text-white/35 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[.8fr_1.2fr] gap-16">
            <SectionHeading
              eyebrow="Deliverables"
              title="Know what the engagement produces."
              copy="The final proposal defines the exact quantities, responsibilities, dependencies, and acceptance criteria."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {hub.deliverables.map((item, index) => (
                <article key={item} className="glass-card rounded-2xl p-6 min-h-36">
                  <span className="font-sans text-xs text-[#00F0FF]/60">0{index + 1}</span>
                  <h3 className="mt-4 font-sans text-base md:text-lg font-bold tracking-[-0.025em] text-white/85 leading-snug">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeading eyebrow="Process" title="A visible path from brief to decision." />
            <div className="grid md:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
              {hub.process.map((item, index) => (
                <div key={item} className="bg-[#050505] p-6 md:min-h-44">
                  <span className="text-[#00F0FF] font-sans text-xs">0{index + 1}</span>
                  <h3 className="mt-10 font-sans font-bold text-lg leading-snug tracking-[-0.025em] text-white/85">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#00F0FF]/10 to-[#00AFFF]/[0.03] border border-[#00F0FF]/20">
              <SectionHeading eyebrow="Portfolio standard" title="Proof with provenance." copy={hub.portfolio} />
              <Link to="/case-studies" className="text-[#00F0FF] text-sm font-semibold hover:text-white transition-colors">
                View the proof ledger →
              </Link>
            </div>
            <div className="rounded-3xl p-8 md:p-10 border border-white/[0.08] bg-[#090C15]">
              <SectionHeading eyebrow="Pricing" title="Scope before commitment." copy={hub.pricing} />
              <Link to="/packages" className="text-[#00F0FF] text-sm font-semibold hover:text-white transition-colors">
                Review package baselines →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_.8fr] gap-14">
            <div>
              <SectionHeading eyebrow="Exclusions" title="What the scope does not promise." />
              <ul className="space-y-4">
                {hub.exclusions.map((item) => (
                  <li key={item} className="rounded-xl border border-white/[0.07] px-5 py-4 text-white/55 flex gap-3">
                    <CircleOff size={18} className="text-[#00F0FF]/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-3xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.04] p-8 self-start">
              <Quote className="text-[#00F0FF]" />
              <h3 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em] mt-6">Review policy</h3>
              <p className="mt-4 text-white/55 leading-relaxed">{hub.reviewStandard}</p>
            </aside>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="Questions" title="Before you begin." />
            <FaqList items={hub.faqs} />
          </div>
        </section>

        <section className="px-6 md:px-12 py-28 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <Icon size={42} className="text-[#00F0FF] mx-auto mb-7" strokeWidth={1.4} />
            <p className="section-eyebrow">Next step</p>
            <h2 className="section-title text-white">Start with a clear, written brief.</h2>
            <p className="mt-6 text-white/52 max-w-2xl mx-auto">
              Tell us the outcome you need. We will confirm fit, dependencies, and the next responsible step.
            </p>
            <Link to={hub.primaryCta.to} className="btn-primary mt-9 inline-flex">
              {hub.primaryCta.label}
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
