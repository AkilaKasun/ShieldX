import { Check, Shield, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trustPrinciples } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'

const pillars = [
  {
    icon: Shield,
    title: 'Recover',
    copy: 'Triage digital incidents, verify authority, and use lawful official routes.',
  },
  {
    icon: Sparkles,
    title: 'Create',
    copy: 'Build production and AI-assisted creative with consent, rights, and human review.',
  },
  {
    icon: Target,
    title: 'Grow',
    copy: 'Connect web, media, distribution, and measurement to a clear commercial outcome.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="FLUX Digital is a Sri Lanka-based digital resilience, responsible creative, and growth partner."
      />
      <PageHero
        eyebrow="One accountable team"
        title="Recover. Create. Grow — with the risk visible."
        summary="FLUX Digital brings digital rescue, responsible production, and growth execution into one operating model. The modernization expands that model while making safety, scope, and proof explicit."
        primaryCta={{ label: 'Start a conversation', to: '/contact' }}
        secondaryCta={{ label: 'Read our proof standard', to: '/case-studies' }}
      />
      <main>
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
            {pillars.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-3xl border border-white/[0.08] p-8 bg-white/[0.02]">
                <Icon className="text-[#00F0FF]" size={32} strokeWidth={1.4} />
                <h2 className="font-sans text-2xl md:text-3xl font-bold leading-tight tracking-[-0.035em] mt-10">{title}</h2>
                <p className="text-white/48 leading-relaxed mt-4">{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-eyebrow">Operating standard</p>
              <h2 className="section-title text-white">Trust is part of the deliverable.</h2>
            </div>
            <ul className="space-y-4">
              {trustPrinciples.map((principle) => (
                <li key={principle} className="rounded-2xl border border-[#00F0FF]/15 p-5 flex gap-4 text-white/62">
                  <Check className="text-[#00F0FF] shrink-0" size={18} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="px-6 md:px-12 py-28 text-center">
          <h2 className="section-title text-white">Choose the intent. We will shape the scope.</h2>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/emergency-reputation-rescue" className="btn-primary">
              I need help now
            </Link>
            <Link to="/packages" className="btn-ghost">
              I am planning a project
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
