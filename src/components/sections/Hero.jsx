"use client";

import { useRef, useEffect, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CyberEarth = lazy(() => import('./CyberEarth'));

export default function Hero({ scrollY }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const globeRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial fade-in for the main left-aligned Hero content
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word-inner');
        words.forEach((w, i) => {
          w.style.animationDelay = `${0.2 + i * 0.15}s`;
        });
      }

      // 2. Earth shrink/grow scroll animation
      if (globeRef.current && sectionRef.current) {
        gsap.to(globeRef.current, {
          scale: 0.4,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });
      }

      // 3. ScrollTrigger to reveal the lower headline and stats when scrolled into view
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.querySelectorAll('.reveal'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 80%", 
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] font-sans" id="hero">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

  
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[800px] h-[800px] rounded-full
            bg-radial-gradient opacity-30 mix-blend-screen"
            style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,175,255,0.05) 40%, transparent 70%)' }}
          />
        </div>

        {/* Three.js Globe */}
        <div ref={globeRef} className="absolute inset-0 origin-center pointer-events-none">
          <Suspense fallback={null}>
            <CyberEarth scrollY={scrollY} />
          </Suspense>
        </div>


        <div
          ref={titleRef}
          className="relative z-10 text-center pointer-events-none select-none w-full"
        >
     
          <div className="overflow-hidden mb-6">
            <p className="word-wrap">
              <span
                className="word-inner inline-block font-sans font-bold text-[0.75rem] tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] uppercase"
                style={{ opacity: 0, animation: 'wordReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards' }}
              >
                Sri Lanka's Leading Digital Protection Agency
              </span>
            </p>
          </div>

    
          <div className="overflow-hidden">
            <p
              className="word-inner font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] opacity-80 text-sm tracking-[0.25em] uppercase mx-auto"
              style={{ opacity: 0, animation: 'wordReveal 1s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              Protecting Reputations · Driving Growth · Delivering Results
            </p>
          </div>
        </div>

  
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#00F0FF] font-sans font-bold">Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#00F0FF] to-transparent animate-pulse" />
        </div>
      </div>

  
      <div className="relative z-10 bg-[#050505]">

       
        <div ref={headlineRef} className="min-h-screen flex flex-col items-center justify-center py-32 px-6">
          <div className="max-w-5xl text-center mx-auto">

            <p className="section-eyebrow text-center reveal text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] font-bold tracking-widest uppercase mb-4">
              Our Mission
            </p>

        
            <h1
              className="font-sans font-black leading-[1.05] tracking-[-0.04em] mb-8 text-white reveal"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
            >
              <span className="block overflow-hidden pb-1">
                we protect,
              </span>
              <span className="block overflow-hidden pb-1">
                we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">grow,</span>
              </span>
              <span className="block overflow-hidden pb-1">
                we dominate
              </span>
            </h1>


            {/* <h1 
  className="font-sans font-black leading-[1.05] tracking-[-0.04em] mb-8 text-white reveal"
  style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}
>
  <span className="block overflow-hidden pb-1">
    Secure your legacy.
  </span>
  <span className="block overflow-hidden pb-1">
    Accelerate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00AFFF]">reach.</span>
  </span>
  <span className="block overflow-hidden pb-1">
    Define the market.
  </span>
</h1> */}
            <p className="mt-8 text-white/60 font-sans font-light text-lg max-w-2xl mx-auto leading-relaxed reveal">
              Digital protection, content removal, SEO, web development, and growth marketing
              for brands that can't afford to lose online.
            </p>

            {/* Buttons centered */}
            <div className="mt-12 flex gap-4 justify-center flex-wrap reveal">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] text-[#050505] font-bold tracking-wide hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold tracking-wide hover:bg-white/5 hover:border-[#00F0FF]/40 transition-all duration-300">
                View Case Studies →
              </button>
            </div>

        
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { num: 98, suffix: '%', label: 'Removal Success' },
                { num: 340, suffix: '%', label: 'Avg Marketing ROI' },
                { num: 200, suffix: '+', label: 'Brands Protected' },
                { num: null, raw: '24/7', label: 'Crisis Response' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 reveal bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-[#00F0FF]/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#00F0FF] to-[#00AFFF] text-4xl mb-2 leading-none">
                    {s.raw ? s.raw : (
                      <><span data-count={s.num} data-suffix={s.suffix}>0{s.suffix}</span></>
                    )}
                  </div>
                  <div className="text-white/50 text-xs tracking-widest uppercase mt-2 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}