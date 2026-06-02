"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, BarChart3, Flag } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  const featuresRefs = useRef([]);
  const canvasRef = useRef(null);


  statsRefs.current = [];
  featuresRefs.current = [];

  const features = [
    {
      icon: Shield,
      title: '100% Confidential',
      desc: 'Every assessment handled with absolute discretion. Zero data retention means 100% control given.',
    },
    {
      icon: Zap,
      title: '24/7 Crisis Response',
      desc: "Digital emergencies can't wait. Our team responds around the clock to mitigate reputation ruin.",
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting',
      desc: "Real-time dashboards and weekly reports. You always know exactly what's happening.",
    },
    {
      icon: Flag,
      title: "Sri Lanka's Most Trusted",
      desc: "Locally rooted, globally focused. The only full-service digital partner you'll ever need.",
    },
  ];

  const stats = [
    { num: 98, suffix: '%', label: 'Takedown Success' },
    { num: 96, suffix: '%', label: 'Client Retention' },
    { num: 92, suffix: '%', label: 'On-Time Delivery' },
    { num: 4.5, suffix: '', label: 'Satisfaction' },
  ];

  useEffect(() => {

    const canvas = canvasRef.current;
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
      const particleCount = Math.floor((width * height) / 15000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, 
          vy: (Math.random() - 0.5) * 0.5, 
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const renderNetwork = () => {
      ctx.clearRect(0, 0, width, height);
      
    
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

      
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 175, 255, 0.5)';
        ctx.fill();

   
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
           
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.2})`;
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
        
       
        statsRefs.current.forEach((el) => {
          if (!el) return;
          const targetValue = parseFloat(el.getAttribute('data-value'));
          const isDecimal = targetValue % 1 !== 0;
          const counter = { val: 0 };
          
          gsap.to(counter, {
            val: targetValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.innerText = isDecimal ? counter.val.toFixed(1) : Math.round(counter.val);
            }
          });
        });

       
        const validFeatures = featuresRefs.current.filter(Boolean);
        if (validFeatures.length > 0) {
          gsap.fromTo(validFeatures,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: validFeatures[0], 
                start: "top 85%",
                toggleActions: "play none none none",
              }
            }
          );
        }
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
    <section ref={sectionRef} className="py-36 px-6 md:px-16 bg-[#060912] relative overflow-hidden">
      
   
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-40 z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(0,175,255,0.15) 0%, transparent 60%)' }} 
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div>
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-[1.1] mb-12">
            ShieldX is different<br />
            because we<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AFFF] to-[#00F0FF]">
              actually deliver.
            </span>
          </h2>

          <div className="bg-[#0A0D18]/50 border border-white/[0.05] rounded-3xl p-10 backdrop-blur-md shadow-[0_0_40px_rgba(0,175,255,0.05)]">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-sans font-bold text-[#00AFFF] mb-2 flex">
                    <span ref={(el) => (statsRefs.current[i] = el)} data-value={stat.num}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-white/60 text-sm font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:pl-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                ref={(el) => (featuresRefs.current[i] = el)} 
                // Added glassmorphism classes to these cards
                className="flex gap-6 group opacity-0 translate-x-[100px] bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300" 
              >
                <div className="mt-1 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#00AFFF]/10 border border-[#00AFFF]/20 flex items-center justify-center text-[#00AFFF] group-hover:scale-110 group-hover:bg-[#00AFFF]/20 group-hover:shadow-[0_0_15px_rgba(0,175,255,0.3)] transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 tracking-tight group-hover:text-[#00F0FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed font-light text-sm md:text-base">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}