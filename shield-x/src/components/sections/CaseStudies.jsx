"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const cases = [
  { tag: 'Reputation Recovery', metric: '92%', title: 'Negative results removed from first page', progress: 92 },
  { tag: 'SEO Growth', metric: '430%', title: 'Organic traffic increase in 8 months', progress: 85 },
  { tag: 'Social Growth', metric: '150K+', title: 'Followers gained across platforms', progress: 75 },
  { tag: 'Content Removal', metric: '287', title: 'Harmful URLs removed in under 30 days', progress: 98 },
  { tag: 'Paid Advertising', metric: '340%', title: 'Return on ad spend for retail client', progress: 68 },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const itemsRef = useRef([]);
  
  const [isLoaded, setIsLoaded] = useState(false);

  itemsRef.current = [];

  // 1. LAZY LOADING OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. CANVAS & GSAP ANIMATIONS
  useEffect(() => {
    if (!isLoaded) return;

    // --- HIGH-PERFORMANCE NEURAL NETWORK ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // PERFORMANCE FIX 1: Cap the maximum number of particles to 70 to prevent exponential math lag on 4K screens
      const particleCount = Math.min(Math.floor((width * height) / 12000), 70); 
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const renderNetwork = () => {
      ctx.clearRect(0, 0, width, height);
      
      // PERFORMANCE FIX 2: REMOVED ctx.shadowBlur (This causes massive CPU lag).
      // We now handle the glow using GPU-accelerated CSS drop-shadows on the canvas element itself.

      const maxDist = 160;
      const maxDistSq = maxDist * maxDist; // Pre-calculated for fast comparison

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
          
          // PERFORMANCE FIX 3: Avoid Math.sqrt unless absolutely necessary
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const opacity = 1 - distance / maxDist;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.8})`;
            ctx.lineWidth = 1.5; 
            ctx.stroke();
          }
        }
      });
    };

    window.addEventListener('resize', resize);
    resize();
    gsap.ticker.add(renderNetwork);

    // --- SETUP GSAP UI ANIMATIONS ---
    const ctxGsap = gsap.context(() => {
      gsap.fromTo([headerRef.current, imageRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.fromTo(validItems,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            }
          }
        );

        gsap.fromTo(".progress-fill",
          { width: "0%" },
          {
            width: (i) => `${cases[i].progress}%`,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    }, sectionRef);

    return () => {
      window.removeEventListener('resize', resize);
      gsap.ticker.remove(renderNetwork);
      ctxGsap.revert();
    };
  }, [isLoaded]);

  return (
    // Added will-change-transform to hint the GPU for smooth scrolling
    <section id="case-studies" ref={sectionRef} className="py-24 md:py-36 overflow-hidden bg-[#060912] font-sans relative min-h-screen will-change-transform">
      
      {/* PERFORMANCE FIX 4: Added drop-shadow CSS filter. 
        This applies the neon glow using your graphics card instead of your CPU! 
      */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-60 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" 
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)' }} 
      />

      {isLoaded && (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="relative w-full h-full lg:col-span-7">
              <div ref={imageRef} className="lg:sticky lg:top-24 w-full h-[400px] lg:h-[750px] rounded-3xl overflow-hidden border border-[#00F0FF]/20 bg-[#00F0FF]/5 backdrop-blur-md group flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                
                <div className="absolute inset-0 bg-[#00F0FF] opacity-10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />

                <img 
                  src="https://imgs.search.brave.com/RUrPu4maMjew3yRbi0A52Xmhdqby7LeZdTnJcQXCeNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/MDczLzM4OC9zbWFs/bC9hLWNsb3NldXAt/b2YtYS1odW1hbi1l/eWUtb24tYS1ncmVl/bi10ZWNoLWJhY2tn/cm91bmQtc3ltYm9s/aXplcy1jeWJlci1z/ZWN1cml0eS1hbmQt/aW5ub3ZhdGlvbi1o/aWdobGlnaHRpbmct/dGhlLW5lZWQtZm9y/LXZpZ2lsYW5jZS1p/bi1hLXJhcGlkbHkt/Y2hhbmdpbmctbGFu/ZHNjYXBlLWZ1bGwt/b2YtcG90ZW50aWFs/LXRocmVhdHMtcGhv/dG8uanBn" 
                  alt="System Analysis Dashboard" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 z-10"
                />

                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00F0FF]/50 m-6 rounded-tl-lg z-20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF]/50 m-6 rounded-br-lg z-20" />
              </div>
            </div>

            <div className="flex flex-col py-0 lg:py-10 lg:col-span-5">
              
              <div ref={headerRef} className="mb-12 text-left">
                <p className="text-[#00F0FF] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                  System Performance
                </p>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-[1.1]">
                  Operational <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">Metrics</span>
                </h2>
              </div>

              <div className="space-y-8">
                {cases.map((c, i) => (
                  <div 
                    key={i} 
                    ref={(el) => (itemsRef.current[i] = el)}
                    className="relative group p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex justify-between items-end mb-4 gap-4">
                      
                      <div className="pr-4">
                        <span className="inline-block text-[#00F0FF] text-[10px] font-mono uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5">
                          {c.tag}
                        </span>
                        <h3 className="text-base md:text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                          {c.title}
                        </h3>
                      </div>

                      <div 
                        className="text-3xl md:text-4xl font-mono font-bold tracking-tighter shrink-0 mb-1"
                        style={{ color: '#00F0FF', textShadow: '0 0 20px rgba(0,240,255,0.4)' }}
                      >
                        {c.metric}
                      </div>
                    </div>
                    
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative mt-1">
                      <div 
                        className="progress-fill absolute top-0 left-0 h-full rounded-full bg-[#00F0FF]"
                        style={{ width: '0%', boxShadow: '0 0 15px 2px rgba(0,240,255,0.8)' }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}