"use client";

import { useEffect, useRef } from 'react';

function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.offsetWidth, H = canvas.offsetHeight;
    canvas.width = W; 
    canvas.height = H;


    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, 
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, 
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      o: Math.random() * 0.5 + 0.2, 
    }));

    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      

      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00F0FF';

      particles.forEach(p => {
        p.x += p.vx; 
        p.y += p.vy;
        
        // Wrap around edges 
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => {
      W = canvas.offsetWidth; 
      H = canvas.offsetHeight;
      canvas.width = W; 
      canvas.height = H;
    };
    
    window.addEventListener('resize', resize);
    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener('resize', resize); 
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-60" />;
}

export default function CTA() {
  return (
   
    <section id="contact" className="py-48 px-6 md:px-16 relative overflow-hidden bg-[#060912] font-sans">
      
     
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[700, 900, 1100].map((s, i) => (
          <div 
            key={i} 
            className="absolute rounded-full border border-[#00F0FF]/10 shadow-[0_0_30px_rgba(0,240,255,0.02)]"
            style={{ width: s, height: s }} 
          />
        ))}
      </div>

      <ParticleCanvas />


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.15), transparent 70%)' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
   
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#00F0FF] mb-6 flex items-center justify-center gap-2 reveal drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
          Ready to Begin
        </p>
        
      
        <h2
          className="font-sans font-black text-white leading-[1.0] tracking-tighter reveal mb-8 drop-shadow-lg"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Take Back Control<br />
          Of Your Digital<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            Presence
          </span>
        </h2>
        
        <p className="text-white/60 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 reveal">
          Whether you're protecting your reputation or scaling your business, we provide the expertise, technology, and strategy to make it happen — fast.
        </p>
        
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal">
          
          <button className="w-full sm:w-auto px-10 py-4 bg-[#00F0FF] text-[#050505] font-bold tracking-wide rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Book Free Consultation
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 bg-[#0A0D18]/80 text-[#00F0FF] font-medium tracking-wide rounded-full border border-[#00F0FF]/30 backdrop-blur-md hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            Talk To An Expert &rarr;
          </button>
          
        </div>
      </div>
    </section>
  );
}