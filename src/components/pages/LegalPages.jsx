import { ArrowRight, FileText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { legalDocuments } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'

const links = [
  { slug: 'privacy', label: 'Privacy notice' },
  { slug: 'terms', label: 'Website terms' },
  { slug: 'recovery-service-terms', label: 'Recovery service terms' },
  { slug: 'refund-cancellation', label: 'Refund & cancellation' },
  { slug: 'ai-use-disclosure', label: 'AI use disclosure' },
  { slug: 'content-rights', label: 'Content rights' },
]

export function LegalIndexPage() {
  return (
    <>
      <Seo
        title="Legal"
        description="FLUX Digital legal and compliance drafts for privacy, website use, recovery services, refunds, and responsible AI."
      />
      <PageHero
        eyebrow="Legal & compliance"
        title="The rules should be visible before the work begins."
        summary="These pages establish the website’s operating baseline. They are clearly marked as drafts until the contracting entity, processors, payment flow, and final legal review are confirmed."
        primaryCta={{ label: 'Read recovery terms', to: '/legal/recovery-service-terms' }}
        secondaryCta={{ label: 'Contact FLUX Digital', to: '/contact' }}
      />
      <main className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {links.map((item) => (
            <Link
              key={item.slug}
              to={`/legal/${item.slug}`}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 group hover:border-[#00F0FF]/30 transition-colors"
            >
              <FileText size={25} className="text-[#00F0FF]" />
              <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em] mt-8">{item.label}</h2>
              <span className="mt-5 inline-flex gap-2 items-center text-sm text-white/42 group-hover:text-[#00F0FF]">
                Read draft <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export function LegalDocumentPage() {
  const { legalSlug } = useParams()
  const document = legalDocuments[legalSlug]
  if (!document) return <Navigate to="/404" replace />

  return (
    <>
      <Seo title={document.title} description={document.intro} />
      <PageHero eyebrow="Legal draft" title={document.title} summary={document.intro} />
      <main className="px-6 md:px-12 py-20 md:py-24 bg-[#060912]">
        <article className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5 text-amber-50/65 text-sm">
            {document.updated}. This is website scaffolding, not a substitute for advice from qualified Sri Lankan counsel.
          </div>
          <div className="mt-12 space-y-12">
            {document.sections.map(([title, copy], index) => (
              <section key={title} className="grid md:grid-cols-[3rem_1fr] gap-5">
                <span className="font-sans text-xs text-[#00F0FF]/60 pt-1">0{index + 1}</span>
                <div>
                  <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em]">{title}</h2>
                  <p className="mt-4 text-white/55 leading-8">{copy}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            {links
              .filter((item) => item.slug !== legalSlug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/legal/${item.slug}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 hover:text-[#00F0FF]"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </article>
      </main>
    </>
  )
}
