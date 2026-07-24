import { useMemo, useState } from 'react'
import { CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { company, serviceHubs } from '../../content/siteContent'
import { trackEvent, trackedContactHref } from '../../lib/analytics'
import Seo from '../ui/Seo'
import PageHero from '../ui/PageHero'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultIntent = searchParams.get('intent') || ''
  const selectedPackage = searchParams.get('package') || ''
  const selectedTier = searchParams.get('tier') || ''
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    intent: defaultIntent,
    message: selectedPackage
      ? `I would like to validate package "${selectedPackage}", tier ${selectedTier}.`
      : '',
  })

  const subject = useMemo(
    () => `FLUX Digital enquiry${form.intent ? ` – ${form.intent}` : ''}`,
    [form.intent],
  )

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submit = (event) => {
    event.preventDefault()
    trackEvent('contact_click', { kind: 'brief', intent: form.intent || 'unspecified' })
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.company || 'Not provided'}`,
      `Intent: ${form.intent || 'General enquiry'}`,
      '',
      form.message,
    ].join('\n')
    setSubmitted(true)
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact FLUX Digital about production, AI studio, web, growth, distribution, or security planning."
      />
      <PageHero
        eyebrow="Start with intent"
        title="Tell us what needs to change."
        summary="Use the secure assessment for account incidents. Use this brief for production, AI, web, growth, distribution, security planning, or a general question."
      />
      <main className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[.75fr_1.25fr] gap-12">
          <aside>
            <div className="rounded-3xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.04] p-7">
              <ShieldCheck className="text-[#00F0FF]" />
              <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.035em] mt-7">Account or harmful-content emergency?</h2>
              <p className="text-white/50 leading-relaxed mt-4 text-sm">
                Do not put passwords, OTPs, recovery codes, or sensitive evidence in a general email.
              </p>
              <Link to="/emergency-reputation-rescue/book-case-assessment" className="btn-primary mt-7 inline-flex">
                Use secure case intake
              </Link>
            </div>
            <div className="mt-7 space-y-4">
              <a
                href={`mailto:${company.email}`}
                onClick={() => trackedContactHref('email')}
                className="rounded-2xl border border-white/[0.08] p-5 flex gap-4 items-center text-white/60 hover:text-[#00F0FF]"
              >
                <Mail size={20} />
                {company.email}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                onClick={() => trackedContactHref('phone')}
                className="rounded-2xl border border-white/[0.08] p-5 flex gap-4 items-center text-white/60 hover:text-[#00F0FF]"
              >
                <Phone size={20} />
                {company.phoneDisplay}
              </a>
            </div>
          </aside>

          <section className="rounded-3xl border border-white/[0.08] bg-[#090C15] p-6 md:p-9">
            {submitted && (
              <div className="mb-7 rounded-xl bg-emerald-300/10 border border-emerald-300/20 p-4 flex gap-3 text-sm text-emerald-100/75">
                <CheckCircle2 size={18} className="shrink-0" />
                Your email application should now contain the prepared brief. Review it, then send it to FLUX Digital.
              </div>
            )}
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="form-label">
                  Name
                  <input className="form-input" name="name" value={form.name} onChange={update} required autoComplete="name" />
                </label>
                <label className="form-label">
                  Email
                  <input className="form-input" type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
                </label>
              </div>
              <label className="form-label">
                Organization
                <input className="form-input" name="company" value={form.company} onChange={update} autoComplete="organization" />
              </label>
              <label className="form-label">
                What are you planning?
                <select className="form-input" name="intent" value={form.intent} onChange={update} required>
                  <option value="">Choose an intent</option>
                  {serviceHubs.slice(1).map((hub) => (
                    <option key={hub.slug} value={hub.slug}>{hub.eyebrow}</option>
                  ))}
                  <option value="enterprise-security">Enterprise account security</option>
                  <option value="general">General question</option>
                </select>
              </label>
              <label className="form-label">
                Brief
                <textarea
                  className="form-input min-h-40 resize-y"
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  placeholder="Outcome, audience, timing, location, channels, and any known constraints."
                />
              </label>
              <p className="text-xs text-white/35">
                This form prepares an email in your device’s mail application. It does not upload sensitive evidence.
              </p>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Prepare email brief
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
