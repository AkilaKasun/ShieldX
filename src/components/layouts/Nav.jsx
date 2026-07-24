import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { serviceHubs } from '../../content/siteContent'
import { trackEvent } from '../../lib/analytics'
import BrandLogo from '../ui/BrandLogo'

const secondaryLinks = [
  { label: 'Packages', to: '/packages' },
  { label: 'Proof', to: '/case-studies' },
  { label: 'About', to: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navClass = ({ isActive }) =>
    `text-xs xl:text-sm font-medium tracking-wide transition-colors ${
      isActive ? 'text-[#00F0FF]' : 'text-white/58 hover:text-white'
    }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050711]/92 backdrop-blur-2xl border-b border-[#00F0FF]/10 shadow-[0_12px_40px_rgba(0,0,0,.3)]'
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }`}
        aria-label="Primary navigation"
      >
        <div className={`max-w-[1500px] mx-auto px-5 md:px-8 flex items-center justify-between ${scrolled ? 'py-3' : 'py-5'}`}>
          <Link to="/" aria-label="FLUX Digital home">
            <BrandLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {serviceHubs.map((hub) => (
              <NavLink key={hub.slug} to={`/${hub.slug}`} className={navClass}>
                {hub.navLabel}
              </NavLink>
            ))}
            {secondaryLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2.5 text-sm text-white/65 hover:text-white">
              Contact
            </Link>
            <Link
              to="/emergency-reputation-rescue/book-case-assessment"
              className="px-5 py-2.5 bg-[#00F0FF] text-[#031015] font-bold text-sm rounded-full hover:bg-white transition-colors"
              onClick={() => trackEvent('emergency_cta_click', { placement: 'navigation' })}
            >
              Start assessment
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#00F0FF]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#050711]/98 backdrop-blur-3xl transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pt-28 pb-10">
          <div className="max-w-md mx-auto">
            <p className="font-sans text-[10px] tracking-[.25em] uppercase text-[#00F0FF]/60 mb-5">Service hubs</p>
            <div className="space-y-2">
              {serviceHubs.map((hub) => (
                <NavLink
                  key={hub.slug}
                  to={`/${hub.slug}`}
                  className="block text-3xl sm:text-4xl font-sans font-bold py-2 text-white/80 hover:text-[#00F0FF]"
                >
                  {hub.navLabel}
                </NavLink>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8 pt-8 border-t border-white/10">
              {[...secondaryLinks, { label: 'FAQ', to: '/faq' }, { label: 'Contact', to: '/contact' }].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="rounded-xl border border-white/10 px-4 py-3 text-white/60 hover:text-[#00F0FF]"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Link
              to="/emergency-reputation-rescue/book-case-assessment"
              className="btn-primary mt-8 flex justify-center"
              onClick={() => trackEvent('emergency_cta_click', { placement: 'mobile_navigation' })}
            >
              Start case assessment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
