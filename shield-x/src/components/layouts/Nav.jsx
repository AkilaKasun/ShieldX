"use client";

import { useState, useEffect } from 'react';

// Custom SVG Logo Component (from our earlier iterations)
function ShieldXLogo({ className = "w-40" }) {
  return (
    <div className={`group relative flex items-center gap-3 cursor-pointer ${className}`}>
      
      {/* Ambient Glow behind the logo on hover */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#00F0FF] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

      {/* The Shield Icon */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-10 h-10 shrink-0 transform group-hover:scale-105 transition-transform duration-500" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="navShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00AFFF" />
          </linearGradient>
        </defs>

        {/* Outer Cyber-Shield Geometry */}
        <path 
          d="M100 15 L175 45 L165 145 L100 185 L35 145 L25 45 Z" 
          fill="none" 
          stroke="url(#navShieldGradient)" 
          strokeWidth="12" 
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.7)] transition-all duration-500"
        />
        
        {/* Inner 'X' Architecture */}
        <path 
          d="M70 75 L130 135 M130 75 L70 135" 
          stroke="url(#navShieldGradient)" 
          strokeWidth="14" 
          strokeLinecap="round" 
          className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Center Power Node */}
        <circle 
          cx="100" 
          cy="105" 
          r="8" 
          fill="#ffffff" 
          className="origin-center scale-100 group-hover:scale-[1.7] transition-transform duration-300 shadow-[0_0_10px_#fff]"
        />
      </svg>

      {/* The Typography */}
      <div className="flex flex-col">
        <span className="font-sans font-black text-xl md:text-2xl tracking-tighter text-white leading-none">
          SHIELD<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00F0FF] to-[#00AFFF] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-300">X</span>
        </span>
        <span className="font-mono text-[8px] md:text-[9px] text-[#00F0FF]/60 uppercase tracking-[0.3em] mt-1 group-hover:text-[#00F0FF]/90 transition-colors duration-300">
          Cyber Defense
        </span>
      </div>

    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Case Studies', 'Process', 'FAQ', 'Contact'];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        transition-all duration-500 cursor-none font-sans
        ${scrolled
          ? 'px-6 md:px-10 py-4 bg-[#060912]/90 backdrop-blur-2xl border-b border-[#00F0FF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'px-6 md:px-10 py-7 bg-transparent'}
      `}>
        
        {/* Replaced text with our Custom SVG Logo */}
        <ShieldXLogo />

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-white/60 hover:text-[#00F0FF] text-sm font-medium tracking-wide transition-all duration-300 cursor-none relative group"
              >
                {l}
                {/* Modern Link Underline Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#00F0FF]" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 bg-[#00F0FF]/10 text-[#00F0FF] font-semibold text-sm tracking-wide rounded-full border border-[#00F0FF]/30 hover:bg-[#00F0FF] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 cursor-none transform hover:-translate-y-0.5">
          Free Consultation
        </button>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-[6px] cursor-none z-50 group p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-7 h-[2px] bg-[#00F0FF] transition-all duration-300 shadow-[0_0_5px_rgba(0,240,255,0.5)] ${open ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-7 h-[2px] bg-[#00F0FF] transition-all duration-300 shadow-[0_0_5px_rgba(0,240,255,0.5)] ${open ? 'opacity-0 translate-x-4' : ''}`} />
          <span className={`block w-7 h-[2px] bg-[#00F0FF] transition-all duration-300 shadow-[0_0_5px_rgba(0,240,255,0.5)] ${open ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`
        fixed inset-0 z-40 bg-[#060912]/95 backdrop-blur-3xl
        flex flex-col items-center justify-center gap-10
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${open ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}
      `}>
        
        {/* Large Background Watermark in Mobile Menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
           <svg viewBox="0 0 200 200" className="w-[120vw] h-[120vw]" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 15 L175 45 L165 145 L100 185 L35 145 L25 45 Z" fill="none" stroke="#00F0FF" strokeWidth="2" />
           </svg>
        </div>

        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(' ', '-')}`}
            className="font-sans text-4xl md:text-5xl font-black tracking-tight text-white/80 hover:text-[#00F0FF] transition-all duration-300 cursor-none relative z-10 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            style={{ 
              transitionDelay: open ? `${i * 100}ms` : '0ms',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)'
            }}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}

        {/* Mobile CTA */}
        <button 
          className="mt-8 px-8 py-4 bg-[#00F0FF] text-[#050505] font-bold text-lg tracking-wide rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-transform active:scale-95 cursor-none relative z-10"
          style={{ 
            transitionDelay: open ? `${links.length * 100}ms` : '0ms',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(20px)'
          }}
          onClick={() => setOpen(false)}
        >
          Book Consultation
        </button>
      </div>
    </>
  )
}