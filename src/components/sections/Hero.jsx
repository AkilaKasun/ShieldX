import { lazy, Suspense, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { proofLedger } from '../../content/siteContent'
import MetricCounter from '../ui/MetricCounter'
import TrustNotice from '../ui/TrustNotice'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Protected lazy-load boundary: the existing CyberEarth module remains unchanged.
const CyberEarth = lazy(() => import('./CyberEarth'))

export default function Hero({ scrollY }) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const globeRef = useRef(null)
  const headlineRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word-inner')
        words.forEach((word, index) => {
          word.style.animationDelay = `${0.2 + index * 0.15}s`
        })
      }

      if (globeRef.current && sectionRef.current) {
        gsap.to(globeRef.current, {
          scale: 0.4,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      }

      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.querySelectorAll('.reveal'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] font-sans" id="hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 mix-blend-screen"
            style={{
              background:
                'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,175,255,0.05) 40%, transparent 70%)',
            }}
          />
        </div>

        <div ref={globeRef} className="absolute inset-0 origin-center pointer-events-none">
          <Suspense fallback={null}>
            <CyberEarth scrollY={scrollY} />
          </Suspense>
        </div>

        <div ref={titleRef} className="relative z-10 text-center pointer-events-none select-none w-full px-6">
          <div className="overflow-hidden mb-6">
            <p className="word-wrap">
              <span
                className="word-inner inline-block font-sans font-bold text-[0.7rem] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] uppercase"
                style={{ opacity: 0, animation: 'wordReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards' }}
              >
                Sri Lanka-based · Built for local and global brands
              </span>
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              className="word-inner font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] opacity-80 text-sm tracking-[0.25em] uppercase mx-auto"
              style={{ opacity: 0, animation: 'wordReveal 1s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              Recover · Create · Grow
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#00F0FF] font-sans font-bold">
            Scroll
          </span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#00F0FF] to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 bg-[#050505]">
        <div ref={headlineRef} className="min-h-screen flex flex-col items-center justify-center py-32 px-6">
          <div className="max-w-6xl text-center mx-auto">
            <p className="section-eyebrow text-center reveal">One accountable team</p>
            <h1
              className="font-sans font-bold leading-[1.02] tracking-[-0.045em] mb-8 text-white reveal"
              style={{ fontSize: 'clamp(2.5rem, 6.4vw, 6.6rem)' }}
            >
              <span className="block overflow-hidden pb-2">Recover what&apos;s at risk.</span>
              <span className="block overflow-hidden pb-2">
                Create what people <span className="text-gradient">remember.</span>
              </span>
              <span className="block overflow-hidden pb-2">Grow what you built.</span>
            </h1>

            <p className="mt-8 text-white/60 font-sans font-light text-lg max-w-3xl mx-auto leading-relaxed reveal">
              FLUX Digital combines emergency account rescue, responsible creative production, AI-assisted
              campaign work, web development, and paid media under one clearly scoped team.
            </p>

            <div className="mt-10 max-w-3xl mx-auto reveal">
              <TrustNotice compact />
            </div>

            <div className="mt-10 flex gap-4 justify-center flex-wrap reveal">
              <Link
                to="/emergency-reputation-rescue/book-case-assessment"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] text-[#050505] font-bold tracking-wide hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                Start a Case Assessment
              </Link>
              <Link
                to="/contact?intent=production"
                className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold tracking-wide hover:bg-white/5 hover:border-[#00F0FF]/40 transition-all duration-300"
              >
                Plan a Commercial Shoot →
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {proofLedger.map((item, index) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-5 md:p-6 reveal bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-[#00F0FF]/30 transition-all duration-300"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="font-sans font-bold text-gradient text-3xl md:text-4xl mb-2 leading-none">
                    <MetricCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <div className="text-white/55 text-[10px] md:text-xs tracking-wider uppercase mt-2 font-semibold">
                    {item.label}
                  </div>
                  <div className="text-white/24 text-[9px] mt-3 leading-relaxed">
                    {item.source} · {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
