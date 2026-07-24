import { Link } from 'react-router-dom'
import { company, serviceHubs } from '../../content/siteContent'
import { trackedContactHref } from '../../lib/analytics'
import BrandLogo from '../ui/BrandLogo'

const legalLinks = [
  { label: 'Privacy', to: '/legal/privacy' },
  { label: 'Website terms', to: '/legal/terms' },
  { label: 'Recovery terms', to: '/legal/recovery-service-terms' },
  { label: 'Refunds', to: '/legal/refund-cancellation' },
  { label: 'AI disclosure', to: '/legal/ai-use-disclosure' },
  { label: 'Content rights', to: '/legal/content-rights' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Proof ledger', to: '/case-studies' },
  { label: 'Pricing & consultations', to: '/pricing-consultations' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="font-sans text-[10px] tracking-[.22em] uppercase text-[#00F0FF]/60 mb-5">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-white/48 hover:text-[#00F0FF] text-sm transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#020308] border-t border-[#00F0FF]/10 px-6 md:px-12 pt-20 pb-10 relative overflow-hidden">
      <div
        className="absolute -bottom-60 -right-40 w-[40rem] h-[40rem] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,.5), transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" aria-label="FLUX Digital home">
              <BrandLogo className="mb-6" />
            </Link>
            <p className="text-white/48 text-sm leading-relaxed max-w-sm">
              Sri Lanka-based digital rescue, responsible creative production, web, growth, and account-security planning for local and global teams.
            </p>
            <div className="mt-7 space-y-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                onClick={() => trackedContactHref('email')}
                className="block text-white/60 hover:text-[#00F0FF]"
              >
                {company.email}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                onClick={() => trackedContactHref('phone')}
                className="block text-white/60 hover:text-[#00F0FF]"
              >
                {company.phoneDisplay}
              </a>
              <p className="text-white/35">{company.location}</p>
            </div>
          </div>

          <FooterColumn
            title="Service hubs"
            links={serviceHubs.map((hub) => ({ label: hub.navLabel, to: `/${hub.slug}` }))}
          />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-16 pt-7 border-t border-white/[0.07] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-white/28 text-xs">© {new Date().getFullYear()} FLUX Digital. All rights reserved.</p>
          <p className="text-white/28 text-xs max-w-xl md:text-right">
            Independent agency. No affiliation with third-party platforms. No platform-controlled outcome guarantee.
          </p>
        </div>
      </div>
    </footer>
  )
}
