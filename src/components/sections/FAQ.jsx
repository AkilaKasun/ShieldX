import { Link } from 'react-router-dom'
import { faqs } from '../../content/siteContent'
import FaqList from '../ui/FaqList'
import ParticleNetwork from '../ui/ParticleNetwork'

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#060912] overflow-hidden">
      <ParticleNetwork className="opacity-25" density={22000} maxParticles={40} maxDist={135} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-eyebrow reveal">Common questions</p>
          <h2 className="section-title text-white reveal">
            Read the limits <span className="text-gradient">before you begin.</span>
          </h2>
        </div>
        <FaqList items={faqs.slice(0, 6)} />
        <div className="text-center mt-10">
          <Link to="/faq" className="text-[#00F0FF] text-sm font-semibold hover:text-white">
            View all questions →
          </Link>
        </div>
      </div>
    </section>
  )
}

