import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParticleNetwork from './ParticleNetwork'

export default function PageHero({
  eyebrow,
  title,
  summary,
  primaryCta,
  secondaryCta,
  children,
}) {
  return (
    <header className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 border-b border-white/[0.06]">
      <ParticleNetwork className="opacity-35" maxParticles={42} density={22000} maxDist={135} />
      <div className="absolute inset-0 page-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-12rem] w-[46rem] h-[46rem] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,.38), transparent 68%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="font-sans font-bold tracking-[-0.04em] leading-[1.02] max-w-6xl text-[clamp(2.45rem,6.5vw,6.5rem)] text-white text-balance">
          {title}
        </h1>
        <p className="mt-8 text-white/58 text-lg md:text-xl leading-relaxed max-w-3xl">{summary}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Link to={primaryCta.to} className="btn-primary inline-flex items-center justify-center gap-2">
                {primaryCta.label}
                <ArrowRight size={17} />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn-ghost inline-flex items-center justify-center">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </header>
  )
}
