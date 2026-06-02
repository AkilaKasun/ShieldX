"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Trash2, TrendingUp, Globe, Megaphone, DollarSign } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Shield,
    title: 'Reputation Protection',
    desc: 'Comprehensive reputation monitoring, crisis management, and long-term protection strategies for individuals and brands.',
    tags: ['Crisis Response', 'Brand Monitoring', 'Narrative Control'],
  },
  {
    icon: Trash2,
    title: 'Content Removal',
    desc: 'DMCA takedowns, Google deindexing, platform removals, and leak suppression executed with a 98% success rate.',
    tags: ['DMCA', 'Google Deindex', 'Platform Removals'],
  },
  {
    icon: TrendingUp,
    title: 'SEO & Growth',
    desc: 'Technical SEO, content strategy, and authority building that compounds over time into sustainable organic traffic.',
    tags: ['Technical SEO', 'Link Building', 'Content Strategy'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Premium, performance-first websites and web applications built for conversion, speed, and lasting impressions.',
    tags: ['React / Next.js', 'Performance', 'Conversion CRO'],
  },
  {
    icon: Megaphone,
    title: 'Social Media',
    desc: 'Community growth, content creation, and paid social campaigns that build loyal audiences and drive real results.',
    tags: ['Content Creation', 'Community', 'Paid Social'],
  },
  {
    icon: DollarSign,
    title: 'Paid Advertising',
    desc: 'Data-driven Google Ads, Meta, and programmatic campaigns optimized for ROAS — average 3.4x return for our clients.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic'],
  },
];

const ServiceCard = React.forwardRef(({ icon: Icon, title, desc, tags }, ref) => {
  return (
  
    <div ref={ref} className="opacity-0">
 
      <div className="h-full rounded-3xl p-8 group transition-all duration-500 relative overflow-hidden border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] backdrop-blur-2xl border border-white/[0.08] hover:bg-white/[0.04] hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-[1.03]">

      
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(0,240,255,0.1), transparent 70%)' }}
        />

        <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-[#00F0FF]/30 mb-5 text-white/80 shadow-[0_0_10px_rgba(0,240,255,0.15)] group-hover:text-[#00F0FF] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.6),0_0_60px_rgba(0,240,255,0.25)] transition-all duration-500">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="font-display font-sans text-xl mb-3 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00F0FF] group-hover:to-[#00AFFF] transition-all duration-300">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed font-light mb-6 group-hover:text-white/70 transition-colors">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-white/40 border border-white/[0.1] rounded-full px-3 py-1 group-hover:border-[#00F0FF]/30 group-hover:text-[#00F0FF]/90 group-hover:bg-[#00F0FF]/5 transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);

  cardsRef.current = [];

  useEffect(() => {
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let anchors = [];

    const buildMaskAnchors = (cx, cy, scale) => {
      const pts = [];
      const add = (x, y) => pts.push({ x: cx + x * scale, y: cy + y * scale });

      for (let t = 0; t <= 1; t += 0.05) { add(-0.35 + t * 0.25, -0.3 + t * 0.15); add(0.35 - t * 0.25, -0.3 + t * 0.15); }
      for (let t = 0; t <= 1; t += 0.08) { add(-0.28 + t * 0.15, -0.15 + t * 0.05); add(0.28 - t * 0.15, -0.15 + t * 0.05); }
      for (let t = -1; t <= 1; t += 0.04) { add(t * 0.4, 0.15 - Math.pow(Math.abs(t), 2.5) * 0.15); }
      for (let t = -1; t <= 1; t += 0.04) { add(t * 0.3, 0.28 + Math.pow(Math.abs(t), 2) * 0.15); }
      for (let t = 0; t <= 1; t += 0.08) { add(0, 0.4 + t * 0.15); add(-0.03, 0.4 + t * 0.15); add(0.03, 0.4 + t * 0.15); }
      for (let t = 0.1; t <= Math.PI - 0.1; t += 0.08) { add(Math.cos(t) * 0.45, 0.15 + Math.sin(t) * 0.5); }
      add(-0.35, 0.1); add(-0.4, 0.05); add(0.35, 0.1); add(0.4, 0.05);

      return pts;
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;

      const cx = width > 1024 ? width * 0.7 : width * 0.5;
      const cy = height * 0.5;
      const scale = Math.min(width, height) * 0.7;

      anchors = buildMaskAnchors(cx, cy, scale);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      anchors.forEach(anchor => {
        for (let i = 0; i < 2; i++) {
          particles.push({
            baseX: anchor.x,
            baseY: anchor.y,
            x: anchor.x + (Math.random() - 0.5) * 20,
            y: anchor.y + (Math.random() - 0.5) * 20,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.01 + 0.005,
            radius: Math.random() * 1.2 + 0.5,
            orbitSize: Math.random() * 15 + 5
          });
        }
      });
    };

    const renderNetwork = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.angle += p.speed;
        p.x = p.baseX + Math.cos(p.angle) * p.orbitSize;
        p.y = p.baseY + Math.sin(p.angle) * p.orbitSize;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 175, 255, 0.8)';
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 35) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - distance / 35;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    window.addEventListener('resize', resize);
    resize();
    gsap.ticker.add(renderNetwork);


    const timer = setTimeout(() => {
      const ctxGsap = gsap.context(() => {
        const validCards = cardsRef.current.filter(Boolean);

        validCards.forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.8, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              }
            }
          );
        });
      }, sectionRef);

      return () => ctxGsap.revert();
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resize);
      gsap.ticker.remove(renderNetwork);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-36 px-6 md:px-16 relative">

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 max-w-xl bg-[#030409]/40 backdrop-blur-sm p-6 rounded-2xl border border-white/[0.02]">
        
          <p className="text-[#00F0FF] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            What We Do
          </p>

          <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-[1.1] mb-6">
            Full-Spectrum<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">
              Digital Services
            </span>
          </h2>

          <p className="text-white/50 font-light leading-relaxed">
            From crisis response to long-term growth — we operate at the intersection
            of digital protection and marketing excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              {...s}
            />
          ))}
        </div>
      </div>
    </section>
  );
}