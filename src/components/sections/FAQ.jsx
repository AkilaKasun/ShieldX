"use client";

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  { q: 'How long does content removal take?', a: 'Most content is removed within 24–72 hours for clear-cut DMCA cases. Complex situations involving multiple platforms or legal grey areas can take 2–4 weeks. We provide real-time updates throughout.' },
  { q: 'Is the process completely confidential?', a: 'Absolutely. Every client engagement is protected by a strict NDA. Your name, situation, and work details never leave our secure systems. We handle cases for public figures, executives, and government officials.' },
  { q: 'Do you guarantee content removal?', a: 'We maintain a 98% success rate across all removal requests. While no agency can guarantee 100% removal in every case, we offer a money-back guarantee on cases we assess as actionable.' },
  { q: 'How much does SEO cost?', a: 'SEO packages start from $500/month for local businesses and scale based on competitiveness and scope. We offer a free audit and strategy session before any commitment. Enterprise plans are custom-quoted.' },
  { q: 'Do you work with international clients?', a: 'Yes — we work with clients across Sri Lanka, UK, Australia, UAE, Canada, Singapore, and the US. All work is conducted remotely and our team is available across time zones for urgent matters.' },
  { q: 'How quickly can you start?', a: 'For urgent reputation crises, we begin within 2 hours of engagement. For growth campaigns, onboarding typically takes 48–72 hours to set up tracking, access, and strategy.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 18000), 40); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const maxDist = 150;
      const maxDistSq = maxDist * maxDist;

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF'; 
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const opacity = 1 - distance / maxDist;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1; 
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="faq" className="relative py-36 px-6 md:px-16 bg-[#060912] overflow-hidden">
      
  
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" 
      />


      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 mix-blend-screen z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.15) 0%, transparent 70%)' }} 
      />

      <div className="max-w-3xl mx-auto relative z-10">
        

        <div className="text-center mb-20">
          <p className="text-[#00F0FF] font-mono text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2 reveal">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
            Common Questions
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] reveal">
            Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">Asked</span>
          </h2>
        </div>

    
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                
              
                <div 
                  className={`border border-white/5 bg-[#0A0D18]/60 backdrop-blur-md rounded-2xl transition-all duration-300 ${
                    isOpen ? 'border-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'hover:bg-[#0A0D18]/90 hover:border-white/10'
                  }`} 
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left group cursor-none"
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-hover
                  >
                    <span className={`text-base md:text-lg font-medium transition-colors duration-300 pr-8 ${
                      isOpen ? 'text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {f.q}
                    </span>
                    
                 
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-500 ease-out ${
                      isOpen 
                        ? 'border-[#00F0FF] text-[#00F0FF] rotate-45 shadow-[0_0_15px_rgba(0,240,255,0.5)]' 
                        : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'
                    }`}>
                      +
                    </span>
                  </button>
                  
                 
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light px-6 pb-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}