import { Check, FileCheck2, LockKeyhole, Scale, ShieldCheck } from 'lucide-react'
import { proofLedger, trustPrinciples } from '../../content/siteContent'
import MetricCounter from '../ui/MetricCounter'
import ParticleNetwork from '../ui/ParticleNetwork'

const principles = [
  { icon: LockKeyhole, title: 'Credential-safe intake' },
  { icon: FileCheck2, title: 'Ownership before action' },
  { icon: Scale, title: 'Lawful official routes' },
  { icon: ShieldCheck, title: 'Scope before remediation' },
]

export default function Takedowns() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#060912] relative overflow-hidden">
      <ParticleNetwork className="opacity-25" density={20000} maxParticles={45} maxDist={135} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start relative z-10">
        <div>
          <p className="section-eyebrow reveal">Trust mechanics</p>
          <h2 className="section-title text-white reveal">
            The process is designed to <span className="text-gradient">reduce risk.</span>
          </h2>
          <p className="mt-6 text-white/48 leading-relaxed max-w-xl reveal">
            Outcome claims have been replaced with commitments FLUX Digital can control and package metrics that state their definition, source, and date.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {proofLedger.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[#00F0FF]/15 bg-[#00F0FF]/[0.035] p-5 reveal">
                <div className="font-sans font-bold text-3xl text-[#00F0FF]">
                  <MetricCounter value={item.value} suffix={item.suffix} />
                </div>
                <p className="text-white/55 text-xs mt-3 leading-snug">{item.label}</p>
                <p className="text-white/22 text-[9px] mt-3">{item.source} · {item.period}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4 lg:pt-12">
          {principles.map(({ icon: Icon, title }, index) => (
            <article key={title} className="rounded-2xl border border-white/[0.08] bg-[#090C15]/85 backdrop-blur p-6 flex gap-5 reveal-right">
              <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/[0.07] border border-[#00F0FF]/15 text-[#00F0FF] flex items-center justify-center shrink-0">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl leading-tight tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-white/45 text-sm leading-relaxed flex gap-2">
                  <Check size={15} className="text-[#00F0FF] shrink-0 mt-0.5" />
                  {trustPrinciples[index]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
