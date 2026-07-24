import { useRef } from 'react'
import Top from '../sections/Top'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import Services from '../sections/Services'
import Takedowns from '../sections/Takedowns'
import CaseStudies from '../sections/CaseStudies'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'
import Seo from '../ui/Seo'

export default function HomePage() {
  const scrollY = useRef(0)

  return (
    <>
      <Seo
        title="FLUX Digital"
        description="Recover what is at risk, create what people remember, and grow what you built with FLUX Digital."
      />
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
    </>
  )
}
