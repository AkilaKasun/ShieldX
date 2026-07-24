import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParticleNetwork from '../ui/ParticleNetwork'

export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden bg-[#060912]">
      <ParticleNetwork className="opacity-35" density={17000} maxParticles={62} maxDist={155} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[650, 880, 1110].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-[#00F0FF]/[0.07]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <p className="section-eyebrow reveal">Choose the right first step</p>
        <h2 className="font-sans font-bold text-white leading-[1.02] tracking-[-0.04em] reveal text-[clamp(2.5rem,6.4vw,6.4rem)]">
          Recover control.<br />
          Build what <span className="text-gradient">comes next.</span>
        </h2>
        <p className="text-white/52 text-lg max-w-2xl mx-auto leading-relaxed mt-8 reveal">
          Start a confidential case assessment for an incident, or send a commercial brief for production, AI, web, growth, distribution, or security planning.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Link to="/emergency-reputation-rescue/book-case-assessment" className="btn-primary inline-flex items-center justify-center gap-2">
            Start case assessment <ArrowRight size={17} />
          </Link>
          <Link to="/contact" className="btn-ghost inline-flex items-center justify-center gap-2">
            Send a project brief <Mail size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
