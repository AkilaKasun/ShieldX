import { BarChart3, CalendarRange, Database, UserCheck } from 'lucide-react'

const standards = [
  {
    icon: Database,
    title: 'Source named',
    copy: 'Every published metric identifies the system, record, or approved evidence behind it.',
  },
  {
    icon: CalendarRange,
    title: 'Date range shown',
    copy: 'Results state the measurement window so a number cannot float free of context.',
  },
  {
    icon: BarChart3,
    title: 'Contribution qualified',
    copy: 'FLUX Digital work is separated from media spend, platform decisions, market effects, and client inputs.',
  },
  {
    icon: UserCheck,
    title: 'Consent recorded',
    copy: 'Names, quotes, and identifiable case details appear only with documented permission.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#020308]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-14">
          <div>
            <p className="section-eyebrow reveal">Review policy</p>
            <h2 className="section-title text-white reveal">No invented praise.</h2>
            <p className="mt-6 text-white/45 leading-relaxed reveal">
              The previous named testimonials could not be verified from the repository. They are replaced with the publication standard FLUX Digital will apply to approved client evidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {standards.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 reveal" style={{ transitionDelay: `${index * 70}ms` }}>
                <Icon size={22} className="text-[#00F0FF]" strokeWidth={1.4} />
                <h3 className="font-sans font-bold text-xl leading-tight tracking-[-0.03em] mt-7">{title}</h3>
                <p className="text-white/42 text-sm leading-relaxed mt-3">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
