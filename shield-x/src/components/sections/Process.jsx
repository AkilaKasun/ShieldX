"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Map, Zap, LineChart } from 'lucide-react'; 

// Register plugin outside of component lifecycle
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We begin with a comprehensive audit of your digital footprint — identifying threats, vulnerabilities, opportunities, and quick wins.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    desc: 'A tailored roadmap built specifically for your situation — protection protocols, content strategy, growth targets, and timeline milestones.',
    icon: Map,
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our team moves fast. Takedown requests go out within 24 hours. Growth campaigns launch within 72 hours. Everything tracked in real-time.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Optimization & Reporting',
    desc: 'Weekly reports, monthly reviews, and continuous optimization. We compound results over time — not set and forget.',
    icon: LineChart,
  },
];

export default function HorizontalScroller() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null); // Added ref for the Neural Network

  // --- HIGH-PERFORMANCE NEURAL NETWORK ---
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
      // Capped at 50 particles max to ensure the horizontal scroll stays buttery smooth
      const particleCount = Math.min(Math.floor((width * height) / 15000), 50); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
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

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF'; 
        ctx.fill();

        // Connect nearby nodes
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
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.5})`;
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

  // --- GSAP HORIZONTAL SCROLL ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const getScrollAmount = () => {
        let containerWidth = containerRef.current.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      gsap.to(containerRef.current, {
        x: getScrollAmount,
        ease: "none", 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`, 
          pin: true,        
          scrub: 1,         
          invalidateOnRefresh: true, 
        }
      });

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-[#060912] overflow-hidden flex items-center"
    >
      
      {/* 1. Neon Neural Network Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" 
      />

      {/* 2. Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] pointer-events-none opacity-20 mix-blend-screen z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.15) 0%, transparent 70%)' }} 
      />

      <div 
        ref={containerRef} 
        className="flex flex-nowrap h-full items-center pl-[10vw] pr-[30vw] z-10"
      >
        
        {/* Intro Slide */}
        <div className="w-[80vw] md:w-[50vw] shrink-0 mr-20">
          <p className="text-[#00F0FF] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
            Defense Protocols
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Unbreakable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">
              Architecture
            </span>
          </h2>
        </div>

        {/* Horizontal Cards */}
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div 
              key={i} 
              className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[50vh] shrink-0 mr-8 lg:mr-12 relative group"
            >
              {/* Outer Hover Glow */}
              <div className="absolute inset-0 bg-[#00F0FF] opacity-0 blur-2xl group-hover:opacity-10 transition-opacity duration-700 rounded-3xl" />
              
              <div className="w-full h-full p-8 md:p-10 rounded-3xl bg-[#0A0D18]/80 border border-[#00F0FF]/10 backdrop-blur-xl flex flex-col hover:border-[#00F0FF]/30 transition-colors duration-500 relative overflow-hidden">
                
                {/* BIG BACKGROUND WATERMARK ICON */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] text-[#00F0FF] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                  <Icon size={240} strokeWidth={1} />
                </div>
                
                {/* Top Header Row */}
                <div className="flex justify-between items-start mb-auto relative z-10">
                  <span className="font-mono text-5xl font-black text-white/5 group-hover:text-[#00F0FF]/20 transition-colors duration-500">
                    {service.num}
                  </span>
                  
                  {/* Small Active Icon Box */}
                  <div className="w-14 h-14 rounded-2xl border border-[#00F0FF]/20 flex items-center justify-center bg-[#00F0FF]/5 text-[#00F0FF] group-hover:bg-[#00F0FF]/20 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:-translate-y-1 transition-all duration-300">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Tech Divider Line */}
                <div className="w-full flex items-center gap-4 my-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
                  <div className="h-[1px] w-8 bg-[#00F0FF]" />
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00F0FF]/50 to-transparent" />
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}