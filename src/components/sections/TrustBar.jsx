const regions = [
  '🇱🇰 Sri Lanka', '🇬🇧 United Kingdom', '🇦🇺 Australia',
  '🇦🇪 UAE', '🇨🇦 Canada', '🇸🇬 Singapore',
  '🇺🇸 United States', '🇮🇳 India',
]

export default function TrustBar() {
  const doubled = [...regions, ...regions]

  return (
    <div className="py-8 border-y border-white/[0.06] bg-white/[0.01] overflow-hidden">
      <p className="text-center text-[0.65rem] tracking-[0.2em] uppercase text-white/25 mb-5">
        Trusted by brands across
      </p>
      <div className="relative">

        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050505, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050505, transparent)' }} />

        <div className="flex gap-16 animate-marquee w-max">
          {doubled.map((r, i) => (
            <span
              key={i}
              className="text-sm font-display font-semibold text-white/20 tracking-widest uppercase whitespace-nowrap hover:text-white/50 transition-colors cursor-none"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
