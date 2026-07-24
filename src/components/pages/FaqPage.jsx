import { faqs } from '../../content/siteContent'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'
import FaqList from '../ui/FaqList'

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Frequently asked questions"
        description="Answers about FLUX Digital case assessments, recovery limitations, production, AI, pricing, and growth work."
      />
      <PageHero
        eyebrow="Questions before commitment"
        title="Clear answers, including the limits."
        summary="Understand credentials, ownership, guarantees, payments, permissions, AI consent, and commercial scope before you share evidence or approve work."
        primaryCta={{ label: 'Ask a specific question', to: '/contact' }}
        secondaryCta={{ label: 'Read legal drafts', to: '/legal' }}
      />
      <main className="px-6 md:px-12 py-24 bg-[#060912]">
        <div className="max-w-4xl mx-auto">
          <FaqList items={faqs} />
        </div>
      </main>
    </>
  )
}
