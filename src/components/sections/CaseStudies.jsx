import { ArrowRight, CheckCircle2, Database, FileCheck2, TimerReset } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../../content/siteContent'
import ParticleNetwork from '../ui/ParticleNetwork'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 md:py-36 px-6 md:px-12 overflow-hidden bg-[#060912] relative">
      <ParticleNetwork className="opacity-28" maxParticles={48} density={19000} maxDist={145} />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-eyebrow reveal">Proof ledger</p>
          <h2 className="section-title text-white reveal">
            Evidence first. <span className="text-gradient">Claims second.</span>
          </h2>
          <p className="mt-6 text-white/48 leading-relaxed max-w-lg reveal">
            The fragile third-party image and unsupported performance metrics are gone. This self-contained ledger shows the publication standard for every future result.
          </p>

          <div className="mt-10 rounded-3xl overflow-hidden border border-[#00F0FF]/20 bg-[#07101A] min-h-[25rem] relative reveal">
            <div className="absolute inset-0 page-grid opacity-40" />
            <div className="absolute left-[12%] top-[15%] right-[12%] bottom-[15%] border border-[#00F0FF]/15 rounded-2xl" />
            <div className="absolute left-[20%] top-[25%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#00F0FF]/60 to-transparent" />
            <div className="absolute left-[20%] bottom-[31%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#00AFFF]/45 to-transparent" />
            <div className="absolute top-[23%] left-[30%] w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_22px_#00F0FF]" />
            <div className="absolute bottom-[29%] right-[27%] w-3 h-3 rounded-full bg-[#00AFFF] shadow-[0_0_22px_#00AFFF]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative">
                <Database className="mx-auto text-[#00F0FF]" size={42} strokeWidth={1.2} />
                <p className="font-sans text-[10px] uppercase tracking-[.25em] text-[#00F0FF]/70 mt-5">Source · period · definition</p>
                <p className="font-sans font-bold text-2xl mt-3">Proof before publication</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:pt-16">
          {caseStudies.map((item, index) => (
            <article key={item.id} className="rounded-3xl border border-white/[0.08] bg-[#090C15]/90 p-7 md:p-8 reveal-right">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[10px] uppercase tracking-[.2em] text-[#00F0FF]/60">{item.label}</span>
                {index === 0 ? <FileCheck2 size={18} className="text-[#00F0FF]" /> : <TimerReset size={18} className="text-white/25" />}
              </div>
              <h3 className="font-sans font-bold text-2xl mt-6 leading-tight tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-4 text-white/45 text-sm leading-relaxed">{item.summary}</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {item.facts.map((fact) => (
                  <span key={fact} className="flex gap-2 text-xs text-white/45">
                    <CheckCircle2 size={14} className="text-[#00F0FF] shrink-0" />
                    {fact}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <Link to="/case-studies" className="btn-ghost inline-flex items-center gap-2 mt-3">
            Open the full proof ledger <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
