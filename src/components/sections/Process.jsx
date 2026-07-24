import { useLayoutEffect, useRef } from 'react'
import { FileCheck2, LineChart, Search, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleNetwork from '../ui/ParticleNetwork'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: '01',
    title: 'Define the request',
    copy: 'Capture the incident or commercial outcome without collecting unsafe credentials or vague promises.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Verify and scope',
    copy: 'Confirm authority, evidence, rights, responsibilities, dependencies, price, and acceptance criteria.',
    icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Execute visibly',
    copy: 'Move through the agreed official, production, creative, or campaign workflow with clear status updates.',
    icon: Send,
  },
  {
    number: '04',
    title: 'Report the evidence',
    copy: 'Close with decisions, outputs, sources, date ranges, exclusions, and the responsible next step.',
    icon: LineChart,
  },
]

export default function Process() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const getDistance = () => Math.max(containerRef.current.scrollWidth - window.innerWidth, 0)
      const animation = gsap.to(containerRef.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
      return () => {
        animation.scrollTrigger?.kill(true)
        animation.kill()
      }
    })

    return () => {
      media.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen md:h-screen bg-[#060912] overflow-hidden flex items-center py-24 md:py-0"
    >
      <ParticleNetwork className="opacity-25" density={21000} maxParticles={46} maxDist={145} />
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col md:flex-row md:flex-nowrap w-full md:w-max h-full md:items-center px-6 md:pl-[10vw] md:pr-[25vw] gap-5 md:gap-0"
      >
        <div className="w-full md:w-[52vw] shrink-0 md:mr-20 mb-8 md:mb-0">
          <p className="section-eyebrow">Delivery architecture</p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-[-0.04em] leading-[1.05]">
            A visible path<br />
            <span className="text-gradient">from risk to result.</span>
          </h2>
          <p className="mt-6 text-white/45 max-w-lg leading-relaxed">
            The same operating pattern works across rescue, production, AI, web, growth, and security planning.
          </p>
        </div>

        {steps.map(({ number, title, copy, icon: Icon }) => (
          <article key={number} className="w-full md:w-[42vw] lg:w-[30vw] md:h-[54vh] shrink-0 md:mr-7 lg:mr-10 group">
            <div className="w-full h-full min-h-80 p-7 md:p-9 rounded-3xl bg-[#0A0D18]/88 border border-[#00F0FF]/10 backdrop-blur-xl flex flex-col hover:border-[#00F0FF]/30 transition-colors relative overflow-hidden">
              <Icon size={220} strokeWidth={0.8} className="absolute -right-12 -bottom-12 text-[#00F0FF]/[0.035] group-hover:text-[#00F0FF]/[0.07] transition-colors" />
              <div className="flex justify-between items-start relative z-10">
                <span className="font-sans text-5xl font-black text-white/[0.06]">{number}</span>
                <span className="w-13 h-13 p-3 rounded-2xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] text-[#00F0FF]">
                  <Icon size={26} strokeWidth={1.4} />
                </span>
              </div>
              <div className="mt-auto relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-[#00F0FF]/60 to-transparent mb-7" />
                <h3 className="font-sans text-2xl md:text-3xl font-bold leading-tight tracking-[-0.035em]">{title}</h3>
                <p className="text-white/50 leading-relaxed mt-4 text-sm md:text-base">{copy}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
