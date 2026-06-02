import { Suspense, lazy, useRef, useEffect, useState } from 'react'
import { useLenis, useReveal, useCountUp, useCursor } from './hooks'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { Volume2, VolumeX } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

// Layout
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'

// Sections
import Top from './components/sections/Top'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Services from './components/sections/Services'
import Takedowns from './components/sections/Takedowns'
import CaseStudies from './components/sections/CaseStudies'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

import bgMusic from './assets/bg-sound.mp3'

export default function App() {
  const scrollY = useRef(0)
  
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false) 

  // Hooks
  useLenis()
  useReveal()
  useCountUp()
  useCursor()

  // 2. Play on First Interaction (The Autoplay Workaround)
  useEffect(() => {
    const handleFirstInteraction = () => {
      // If the audio exists and is currently paused, play it!
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true); // Update the button icon to match
          })
          .catch((error) => {
            console.log("Browser blocked audio play:", error);
          });
      }
      
      // Once it plays, remove these listeners so it doesn't trigger on every click
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Listen for the user's first click or keypress anywhere on the document
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="noise">
      <audio 
        ref={audioRef} 
        src={bgMusic}
        loop 
        preload="auto" 
      />

      <button
        onClick={toggleSound}
        className="fixed bottom-8 left-8 z-[9999] w-12 h-12 rounded-full flex items-center justify-center bg-[#0A0D18]/80 backdrop-blur-md border border-[#00F0FF]/30 text-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition-all duration-300"
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <div
        id="cursor-dot"
        className="fixed w-2 h-2 bg-[#00AFFF] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ transition: 'none' }}
      />
      <div
        id="cursor-ring"
        className="fixed w-9 h-9 border border-[#00AFFF]/35 rounded-full pointer-events-none z-[9998]"
        style={{ transition: 'width 0.2s, height 0.2s, border-color 0.2s' }}
      />

      <Nav />

      <main>
        <Top /> 
        <Hero scrollY={scrollY} />
        <TrustBar />
        <Services />
        <Takedowns />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}