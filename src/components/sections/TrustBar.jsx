import { trustPrinciples } from '../../content/siteContent'

export default function TrustBar() {
  const items = [...trustPrinciples, ...trustPrinciples]

  return (
    <section className="py-7 border-y border-white/[0.06] bg-white/[0.012] overflow-hidden" aria-label="FLUX Digital trust principles">
      <p className="text-center text-[0.62rem] tracking-[0.22em] uppercase text-white/28 mb-5">Operating standard</p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />
        <div className="flex gap-14 animate-marquee w-max">
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="text-xs font-sans font-semibold text-white/30 tracking-wider uppercase whitespace-nowrap">
              <span className="text-[#00F0FF] mr-4">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
