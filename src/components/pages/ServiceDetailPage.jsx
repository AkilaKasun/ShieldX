import { ArrowLeft, Check } from 'lucide-react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { serviceDetails, serviceHubs } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'
import TrustNotice from '../ui/TrustNotice'
import FaqList from '../ui/FaqList'

export default function ServiceDetailPage() {
  const { pathname } = useLocation()
  const detail = serviceDetails.find((item) => item.path === pathname)
  if (!detail) return <Navigate to="/404" replace />

  const hub = serviceHubs.find((item) => item.slug === detail.hub)
  const Icon = detail.icon

  return (
    <>
      <Seo title={detail.title} description={detail.summary} />
      <PageHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        summary={detail.summary}
        primaryCta={hub.primaryCta}
        secondaryCta={{ label: `Back to ${hub.navLabel}`, to: `/${hub.slug}` }}
      />
      <main>
        <section className="px-6 md:px-12 py-16 bg-[#060912]">
          <div className="max-w-7xl mx-auto">
            <TrustNotice />
          </div>
        </section>
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[.75fr_1.25fr] gap-14">
            <div>
              <Icon size={44} className="text-[#00F0FF]" strokeWidth={1.3} />
              <p className="section-eyebrow mt-8">Assessment output</p>
              <h2 className="section-title text-white">A useful first decision, not a vague promise.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {detail.deliverables.map((item) => (
                <article key={item} className="glass-card rounded-2xl p-6">
                  <Check size={19} className="text-[#00F0FF]" />
                  <h3 className="mt-8 font-sans text-base md:text-lg font-bold tracking-[-0.025em] text-white/80 leading-snug">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 md:px-12 py-24 bg-[#060912]">
          <div className="max-w-4xl mx-auto">
            <p className="section-eyebrow">Service questions</p>
            <h2 className="section-title text-white mb-10">What to know before you start.</h2>
            <FaqList items={hub.faqs} />
            <Link to={`/${hub.slug}`} className="mt-10 inline-flex items-center gap-2 text-[#00F0FF] hover:text-white">
              <ArrowLeft size={17} />
              Full service overview
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
