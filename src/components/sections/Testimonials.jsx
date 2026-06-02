const testimonials = [
  {
    quote: "ShieldX removed content that had been destroying my reputation for two years — within 3 weeks. I had given up hope. These guys are miracle workers.",
    name: 'Ashan Perera',
    role: 'Entrepreneur, Colombo',
    init: 'AP',
  },
  {
    quote: "Our organic traffic tripled in 6 months. The SEO team is exceptional — they actually explain what they're doing and why. Zero black-box nonsense.",
    name: 'Nadeesha Silva',
    role: 'CEO, Fashion Brand',
    init: 'NS',
  },
  {
    quote: "Professional, discreet, and devastatingly effective. Our crisis was resolved in under two weeks. I recommend ShieldX to every business owner I know.",
    name: 'Ruwan Jayawardena',
    role: 'Public Figure, Kandy',
    init: 'RJ',
  },
]

export default function Testimonials() {
  return (
    <section className="py-36 px-6 md:px-16 bg-[#020308]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-eyebrow reveal">Client Stories</p>
          <h2 className="font-sans section-title text-white reveal">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex flex-col hover:border-white/15 transition-all duration-300 reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-hover
            >
              <div className="flex gap-1 mb-6 text-[#00AFFF]">
                {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <blockquote className="text-white/60 text-sm leading-relaxed font-light italic flex-1 mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00AFFF] to-[#2D7FF9] flex items-center justify-center font-display font-bold text-black text-xs flex-shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
