import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceHubs } from '../../content/siteContent'
import ParticleNetwork from '../ui/ParticleNetwork'

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <ParticleNetwork className="opacity-25" density={21000} maxParticles={44} maxDist={130} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14">
          <p className="section-eyebrow reveal">Four service hubs</p>
          <h2 className="section-title text-white reveal">
            One system for <span className="text-gradient">rescue, creation, and growth.</span>
          </h2>
          <p className="mt-6 text-white/50 leading-relaxed max-w-2xl reveal">
            Each hub has its own intake path, responsibilities, exclusions, pricing logic, and evidence standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {serviceHubs.map((hub, index) => {
            const Icon = hub.icon
            return (
              <Link
                key={hub.slug}
                to={`/${hub.slug}`}
                className="group rounded-3xl p-7 md:p-9 border border-white/[0.08] bg-[#090C15]/80 backdrop-blur-xl hover:border-[#00F0FF]/35 transition-all reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex justify-between items-start gap-5">
                  <div className="w-13 h-13 rounded-2xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] text-[#00F0FF] flex items-center justify-center p-3">
                    <Icon size={27} strokeWidth={1.4} />
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#00F0FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="font-sans text-[10px] uppercase tracking-[.2em] text-[#00F0FF]/60 mt-10">
                  Hub 0{index + 1}
                </p>
                <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-[-0.035em] mt-3 leading-tight group-hover:text-[#00F0FF] transition-colors">
                  {hub.eyebrow}
                </h3>
                <p className="text-white/48 leading-relaxed mt-4">{hub.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {hub.proof.map((item) => (
                    <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-white/38">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
