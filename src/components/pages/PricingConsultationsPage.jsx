import { ArrowRight, Check, CreditCard, FileText, SearchCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'
import TrustNotice from '../ui/TrustNotice'

const paths = [
  {
    icon: SearchCheck,
    title: 'Preliminary case assessment',
    price: 'LKR 3,000',
    copy: 'For account, restriction, impersonation, and harmful-content incidents. Includes preliminary investigation and a written assessment only.',
    to: '/emergency-reputation-rescue/book-case-assessment',
    cta: 'Start assessment',
  },
  {
    icon: FileText,
    title: 'Commercial scope call',
    price: 'Scope-led',
    copy: 'For production, AI studio, web, growth, distribution, and account-security planning. A written proposal follows if there is a fit.',
    to: '/contact?intent=commercial',
    cta: 'Send a project brief',
  },
  {
    icon: CreditCard,
    title: 'Package validation',
    price: 'Draft baselines',
    copy: 'Use the package architecture to identify a likely tier, then validate variable costs, rights, capacity, tax, and timeline.',
    to: '/packages',
    cta: 'Review packages',
  },
]

export default function PricingConsultationsPage() {
  return (
    <>
      <Seo
        title="Pricing & consultations"
        description="Choose a FLUX Digital preliminary case assessment, commercial scope call, or package validation path."
      />
      <PageHero
        eyebrow="Choose the right first step"
        title="Pay for a defined decision — not a vague promise."
        summary="Emergency work begins with a paid written assessment. Commercial work begins with a brief and scope review. Further fees are agreed in writing before delivery starts."
      />
      <main>
        <section className="px-6 md:px-12 py-16 bg-[#060912]">
          <div className="max-w-7xl mx-auto"><TrustNotice /></div>
        </section>
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5">
            {paths.map(({ icon: Icon, title, price, copy, to, cta }) => (
              <article key={title} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
                <Icon className="text-[#00F0FF]" size={30} strokeWidth={1.4} />
                <p className="mt-8 text-[#00F0FF] font-sans font-semibold text-xs uppercase tracking-widest">{price}</p>
                <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em] mt-3">{title}</h2>
                <p className="mt-4 text-white/48 leading-relaxed flex-1">{copy}</p>
                <Link to={to} className="mt-8 inline-flex items-center gap-2 text-[#00F0FF] font-semibold text-sm">
                  {cta} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#00F0FF]/20 p-8 md:p-10 bg-[#00F0FF]/[0.04]">
            <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em]">Every quote separates variable costs.</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {['Media spend', 'Travel and accommodation', 'Permits and talent', 'Licensing and platform fees', 'Taxes and payment fees', 'Out-of-scope revisions'].map((item) => (
                <li key={item} className="flex gap-3 text-white/55">
                  <Check size={17} className="text-[#00F0FF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
