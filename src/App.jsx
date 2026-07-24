import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Volume2, VolumeX } from 'lucide-react'
import { useCursor, useLenis, useReveal } from './hooks'
import { serviceDetails, serviceHubs } from './content/siteContent'
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'
import ServicePage from './components/pages/ServicePage'
import ServiceDetailPage from './components/pages/ServiceDetailPage'
import bgMusic from './assets/bg-sound.mp3'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const PackagesPage = lazy(() => import('./components/pages/PackagesPage'))
const CaseStudiesPage = lazy(() => import('./components/pages/CaseStudiesPage'))
const AboutPage = lazy(() => import('./components/pages/AboutPage'))
const FaqPage = lazy(() => import('./components/pages/FaqPage'))
const PricingConsultationsPage = lazy(() => import('./components/pages/PricingConsultationsPage'))
const ContactPage = lazy(() => import('./components/pages/ContactPage'))
const AssessmentPage = lazy(() => import('./components/pages/AssessmentPage'))
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'))
const LegalIndexPage = lazy(() =>
  import('./components/pages/LegalPages').then((module) => ({ default: module.LegalIndexPage })),
)
const LegalDocumentPage = lazy(() =>
  import('./components/pages/LegalPages').then((module) => ({ default: module.LegalDocumentPage })),
)

function RouteProgress() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-9 h-9 rounded-full border border-[#00F0FF]/20 border-t-[#00F0FF] animate-spin" />
    </div>
  )
}

export default function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { pathname } = useLocation()

  useLenis()
  useReveal(pathname)
  useCursor(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  const toggleSound = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="noise min-h-screen">
      <audio ref={audioRef} src={bgMusic} loop preload="none" />

      <button
        type="button"
        onClick={toggleSound}
        className="fixed bottom-5 left-5 z-[60] w-11 h-11 rounded-full flex items-center justify-center bg-[#0A0D18]/88 backdrop-blur-md border border-[#00F0FF]/25 text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <div id="cursor-dot" className="custom-cursor fixed w-2 h-2 bg-[#00AFFF] rounded-full pointer-events-none z-[9999] mix-blend-screen" />
      <div id="cursor-ring" className="custom-cursor fixed w-9 h-9 border border-[#00AFFF]/35 rounded-full pointer-events-none z-[9998]" />

      <Nav />
      <Suspense fallback={<RouteProgress />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {serviceHubs.map((hub) => (
            <Route key={hub.slug} path={`/${hub.slug}`} element={<ServicePage hub={hub} />} />
          ))}
          {serviceDetails.map((detail) => (
            <Route key={detail.path} path={detail.path} element={<ServiceDetailPage />} />
          ))}
          <Route path="/emergency-reputation-rescue/book-case-assessment" element={<AssessmentPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/pricing-consultations" element={<PricingConsultationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalIndexPage />} />
          <Route path="/legal/:legalSlug" element={<LegalDocumentPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
