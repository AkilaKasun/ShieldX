"use client";

import React from 'react';

// Custom SVG Logo Component
function ShieldXLogo({ className = "w-40" }) {
  return (
    <div className={`group relative flex items-center gap-3 cursor-pointer ${className}`}>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#00F0FF] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
      <svg 
        viewBox="0 0 200 200" 
        className="w-10 h-10 shrink-0 transform group-hover:scale-105 transition-transform duration-500" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="footerShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00AFFF" />
          </linearGradient>
        </defs>
        <path 
          d="M100 15 L175 45 L165 145 L100 185 L35 145 L25 45 Z" 
          fill="none" 
          stroke="url(#footerShieldGradient)" 
          strokeWidth="12" 
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.7)] transition-all duration-500"
        />
        <path 
          d="M70 75 L130 135 M130 75 L70 135" 
          stroke="url(#footerShieldGradient)" 
          strokeWidth="14" 
          strokeLinecap="round" 
          className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <circle 
          cx="100" 
          cy="105" 
          r="8" 
          fill="#ffffff" 
          className="origin-center scale-100 group-hover:scale-[1.7] transition-transform duration-300 shadow-[0_0_10px_#fff]"
        />
      </svg>
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

const cols = [
  {
    title: 'Services',
    links: ['Content Removal', 'Reputation Management', 'SEO & Growth', 'Web Development', 'Social Media', 'Paid Advertising'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Privacy Policy', 'Terms'],
  },
  {
    title: 'Resources',
    links: ['DMCA Guide', 'SEO Checklist', 'Crisis Toolkit', 'Free Audit', 'Partner Program'],
  },
];

export default function Footer() {
  return (
    // Changed bg-[#060912] to ultra-dark bg-[#020308]
    <footer className="bg-[#020308] border-t border-[#00F0FF]/10 px-6 md:px-16 pt-24 pb-12 relative overflow-hidden font-sans">
      
      {/* Subtle Ambient Background Glow - Reduced opacity to 5% so it stays very dark */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-5 mix-blend-screen translate-y-1/2 translate-x-1/3"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, transparent 70%)' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            
            <ShieldXLogo className="mb-6" />
            
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-[280px]">
              Sri Lanka's leading digital protection and growth partner. 
              Protecting reputations and scaling businesses since 2019.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {['in', '𝕏', 'ig', 'fb'].map(s => (
                <a 
                  key={s} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xs font-mono bg-white/[0.02] hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/50 hover:text-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-none"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {cols.map(col => (
            <div key={col.title} className="col-span-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]/60 font-mono font-semibold mb-6 drop-shadow-[0_0_8px_rgba(0,240,255,0.2)]">
                {col.title}
              </div>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l}>
                    <a 
                      href="#" 
                      className="text-white/60 text-sm font-light hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 cursor-none block w-fit"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            © {new Date().getFullYear()} ShieldX. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-xs font-light">
            <span>Colombo, Sri Lanka</span>
            <span className="w-1 h-1 rounded-full bg-[#00F0FF]/40"></span>
            <a href="mailto:hello@shieldx.lk" className="hover:text-[#00F0FF] transition-colors duration-300 cursor-none">
              hello@shieldx.lk
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}