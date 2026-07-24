import { useEffect, useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  CreditCard,
  FileUp,
  LockKeyhole,
  ShieldAlert,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { assessmentSteps, company } from '../../content/siteContent'
import { trackEvent } from '../../lib/analytics'
import { assessmentFee, getAssessmentCheckoutUrl } from '../../lib/payment'
import Seo from '../ui/Seo'
import TrustNotice from '../ui/TrustNotice'

const storageKey = 'shieldx-assessment-draft-v1'

const initialForm = {
  caseType: '',
  incidentSummary: '',
  urgency: '',
  accessState: '',
  ownerRole: '',
  ownershipConfirmed: false,
  evidenceUrls: '',
  fullName: '',
  email: '',
  phone: '',
  country: 'Sri Lanka',
  contactPreference: 'email',
  accuracyConsent: false,
  termsConsent: false,
  assessmentConsent: false,
}

function loadDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey))
    return saved ? { ...initialForm, ...saved } : initialForm
  } catch {
    return initialForm
  }
}

function generateCaseId() {
  const day = new Date().toISOString().slice(0, 10).replaceAll('-', '')
  const random = crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0, 6).toUpperCase()
  return `SX-${day}-${random}`
}

function FieldGroup({ title, description, children }) {
  return (
    <fieldset>
      <legend className="font-sans text-2xl md:text-3xl font-bold leading-tight tracking-[-0.035em]">{title}</legend>
      {description && <p className="text-white/45 leading-relaxed mt-3 mb-7">{description}</p>}
      <div className="space-y-4 mt-7">{children}</div>
    </fieldset>
  )
}

function Choice({ name, value, checked, onChange, title, copy }) {
  return (
    <label className={`block rounded-2xl border p-5 cursor-pointer transition-colors ${
      checked ? 'border-[#00F0FF]/50 bg-[#00F0FF]/[0.07]' : 'border-white/[0.08] bg-white/[0.018] hover:border-white/20'
    }`}>
      <span className="flex gap-4 items-start">
        <input
          type="radio"
          className="mt-1 accent-[#00F0FF]"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span>
          <span className="font-semibold text-white/85 block">{title}</span>
          {copy && <span className="text-sm text-white/42 leading-relaxed block mt-1">{copy}</span>}
        </span>
      </span>
    </label>
  )
}

function Checkbox({ name, checked, onChange, children }) {
  return (
    <label className="flex gap-4 items-start rounded-2xl border border-white/[0.08] p-5 cursor-pointer">
      <input
        type="checkbox"
        className="mt-1 accent-[#00F0FF]"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm text-white/58 leading-relaxed">{children}</span>
    </label>
  )
}

export default function AssessmentPage() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(loadDraft)
  const [files, setFiles] = useState([])
  const [error, setError] = useState('')
  const [caseId, setCaseId] = useState(searchParams.get('case_id') || '')
  const [paymentStatus, setPaymentStatus] = useState(
    searchParams.get('payment') === 'success' ? 'verification-pending' : 'pending',
  )
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(form))
  }, [form])

  useEffect(() => {
    const marker = 'shieldx-assessment-started'
    if (!sessionStorage.getItem(marker)) {
      sessionStorage.setItem(marker, 'true')
      trackEvent('assessment_started')
    }
  }, [])

  useEffect(() => {
    if (searchParams.get('payment') !== 'success') return
    setPaymentStatus('verification-pending')
    setStep(7)
  }, [searchParams])

  const update = (event) => {
    const { name, type, checked, value } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setError('')
  }

  const checkoutUrl = useMemo(
    () => (caseId ? getAssessmentCheckoutUrl(caseId, form.email) : null),
    [caseId, form.email],
  )

  const validateStep = () => {
    if (step === 0 && (!form.caseType || form.incidentSummary.trim().length < 20)) {
      return 'Choose the incident type and add at least 20 characters describing what happened.'
    }
    if (step === 1 && (!form.urgency || !form.accessState)) {
      return 'Choose both urgency and current access state.'
    }
    if (step === 2 && (!form.ownerRole || !form.ownershipConfirmed)) {
      return 'Choose your authority and confirm that ownership can be documented.'
    }
    if (step === 4 && (!form.fullName.trim() || !form.email.includes('@'))) {
      return 'Add your name and a valid email address.'
    }
    if (step === 5 && (!form.accuracyConsent || !form.termsConsent || !form.assessmentConsent)) {
      return 'All three acknowledgements are required before payment.'
    }
    return ''
  }

  const next = () => {
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }

    if (step === 5) {
      const provisionalId = caseId || generateCaseId()
      setCaseId(provisionalId)
      trackEvent('assessment_completed', {
        case_id: provisionalId,
        case_type: form.caseType,
        urgency: form.urgency,
      })
    }
    setStep((current) => Math.min(current + 1, assessmentSteps.length - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const back = () => {
    setError('')
    setStep((current) => Math.max(current - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const savePending = () => {
    setPaymentStatus('pending')
    setStep(7)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyCaseId = async () => {
    await navigator.clipboard.writeText(caseId)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const paymentRequestHref = useMemo(() => {
    const subject = `Secure assessment payment link – ${caseId}`
    const body = [
      `Provisional case ID: ${caseId}`,
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Case type: ${form.caseType}`,
      '',
      'Please send the secure LKR 3,000 preliminary-assessment payment link.',
      'I understand this fee is for the assessment only and does not guarantee recovery or another platform-controlled outcome.',
    ].join('\n')
    return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [caseId, form.caseType, form.email, form.fullName])

  return (
    <>
      <Seo
        title="Book a case assessment"
        description="Start a FLUX Digital preliminary assessment without sharing passwords, OTPs, or recovery codes."
      />
      <main className="min-h-screen pt-28 pb-20 px-5 md:px-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <Link to="/emergency-reputation-rescue" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-[#00F0FF]">
            <ArrowLeft size={16} />
            Emergency rescue
          </Link>

          <div className="mt-8 grid lg:grid-cols-[.42fr_.58fr] gap-8 items-start">
            <aside className="lg:sticky lg:top-28">
              <p className="section-eyebrow">Confidential preliminary review</p>
              <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-[-0.04em] leading-[1.02]">
                Start with a real case assessment.
              </h1>
              <p className="text-white/48 leading-relaxed mt-5">
                Tell us what happened without sharing your password, OTP, recovery code, or full payment-card data.
              </p>

              <div className="mt-8 rounded-2xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/48 text-sm">Assessment fee</span>
                  <span className="font-sans font-bold text-2xl text-[#00F0FF]">LKR {assessmentFee.toLocaleString()}</span>
                </div>
                <p className="text-xs text-white/35 leading-relaxed mt-3">
                  Preliminary investigation and written assessment only. No recovery guarantee.
                </p>
              </div>

              <ol className="mt-8 space-y-2" aria-label="Assessment progress">
                {assessmentSteps.map((label, index) => (
                  <li
                    key={label}
                    className={`flex items-center gap-3 text-sm py-2 ${index === step ? 'text-[#00F0FF]' : index < step ? 'text-white/55' : 'text-white/25'}`}
                    aria-current={index === step ? 'step' : undefined}
                  >
                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-sans text-[10px] ${
                      index <= step ? 'border-[#00F0FF]/40' : 'border-white/10'
                    }`}>
                      {index < step ? <Check size={13} /> : index + 1}
                    </span>
                    {label}
                  </li>
                ))}
              </ol>
            </aside>

            <section className="rounded-3xl border border-white/[0.08] bg-[#090C15] p-6 md:p-9 min-h-[38rem]">
              {step === 0 && (
                <FieldGroup title="What happened?" description="Choose the closest category. You can add context without submitting secret credentials.">
                  {[
                    ['hacked-account', 'Hacked or lost account', 'Facebook, Instagram, YouTube, or another owned account.'],
                    ['restriction', 'Restriction or monetization issue', 'Ad account, business asset, channel, policy, or monetization notice.'],
                    ['harmful-content', 'Sensitive or harmful content', 'Impersonation, rights issue, harmful URL, or content-removal concern.'],
                    ['security', 'Post-incident security hardening', 'Access cleanup, recovery planning, and continuity after an incident.'],
                  ].map(([value, title, copy]) => (
                    <Choice key={value} name="caseType" value={value} checked={form.caseType === value} onChange={update} title={title} copy={copy} />
                  ))}
                  <label className="form-label pt-3">
                    Incident summary
                    <textarea
                      className="form-input min-h-36 resize-y"
                      name="incidentSummary"
                      value={form.incidentSummary}
                      onChange={update}
                      placeholder="When did it start, what changed, and which official notices have you received?"
                    />
                  </label>
                </FieldGroup>
              )}

              {step === 1 && (
                <FieldGroup title="Urgency and access" description="This helps FLUX Digital prioritize response. It is a response indicator, not a resolution promise.">
                  <p className="form-label">Urgency</p>
                  {[
                    ['critical', 'Critical – active harm or business interruption'],
                    ['high', 'High – serious risk, access partially available'],
                    ['standard', 'Standard – assessment and planning'],
                  ].map(([value, title]) => (
                    <Choice key={value} name="urgency" value={value} checked={form.urgency === value} onChange={update} title={title} />
                  ))}
                  <p className="form-label pt-3">Current access</p>
                  {[
                    ['none', 'No access'],
                    ['partial', 'Partial access'],
                    ['full', 'Full access, but restricted or at risk'],
                  ].map(([value, title]) => (
                    <Choice key={value} name="accessState" value={value} checked={form.accessState === value} onChange={update} title={title} />
                  ))}
                </FieldGroup>
              )}

              {step === 2 && (
                <FieldGroup title="Ownership and authority" description="FLUX Digital verifies the right to request work before handling a case.">
                  {[
                    ['owner', 'I am the account, content, or business owner'],
                    ['authorized', 'I am formally authorized by the owner'],
                    ['guardian', 'I am a lawful guardian or representative'],
                  ].map(([value, title]) => (
                    <Choice key={value} name="ownerRole" value={value} checked={form.ownerRole === value} onChange={update} title={title} />
                  ))}
                  <Checkbox name="ownershipConfirmed" checked={form.ownershipConfirmed} onChange={update}>
                    I can provide non-secret evidence of ownership or authority when FLUX Digital requests it.
                  </Checkbox>
                </FieldGroup>
              )}

              {step === 3 && (
                <FieldGroup title="Evidence inventory" description="List relevant public URLs and choose files for your own review. This static preview records file names only; it does not upload evidence.">
                  <div className="rounded-2xl border border-red-300/20 bg-red-300/[0.06] p-5 flex gap-4">
                    <ShieldAlert className="text-red-200 shrink-0" />
                    <p className="text-sm text-red-50/70 leading-relaxed">
                      Never upload or paste passwords, OTPs, backup codes, recovery codes, card details, or private identity documents into an unverified channel.
                    </p>
                  </div>
                  <label className="form-label">
                    Relevant public URLs
                    <textarea
                      className="form-input min-h-32 resize-y"
                      name="evidenceUrls"
                      value={form.evidenceUrls}
                      onChange={update}
                      placeholder="One URL per line"
                    />
                  </label>
                  <label className="rounded-2xl border border-dashed border-white/15 p-7 flex flex-col items-center text-center cursor-pointer hover:border-[#00F0FF]/35">
                    <FileUp className="text-[#00F0FF]" />
                    <span className="mt-4 font-medium">Choose non-secret evidence files</span>
                    <span className="text-xs text-white/35 mt-2">Names are listed locally; files are not transmitted by this build.</span>
                    <input
                      type="file"
                      multiple
                      className="sr-only"
                      accept=".png,.jpg,.jpeg,.pdf,.txt"
                      onChange={(event) => setFiles(Array.from(event.target.files || []))}
                    />
                  </label>
                  {files.length > 0 && (
                    <ul className="text-xs text-white/45 space-y-2">
                      {files.map((file) => <li key={`${file.name}-${file.size}`}>{file.name} – {Math.ceil(file.size / 1024)} KB</li>)}
                    </ul>
                  )}
                </FieldGroup>
              )}

              {step === 4 && (
                <FieldGroup title="How should we contact you?" description="Use an address and number you control. FLUX Digital will not ask for an OTP by email, phone, or message.">
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="form-label">
                      Full name
                      <input className="form-input" name="fullName" value={form.fullName} onChange={update} required autoComplete="name" />
                    </label>
                    <label className="form-label">
                      Email
                      <input className="form-input" type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
                    </label>
                    <label className="form-label">
                      Phone
                      <input className="form-input" name="phone" value={form.phone} onChange={update} autoComplete="tel" />
                    </label>
                    <label className="form-label">
                      Country
                      <input className="form-input" name="country" value={form.country} onChange={update} autoComplete="country-name" />
                    </label>
                  </div>
                  <label className="form-label">
                    Preferred contact
                    <select className="form-input" name="contactPreference" value={form.contactPreference} onChange={update}>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </label>
                </FieldGroup>
              )}

              {step === 5 && (
                <FieldGroup title="Review and consent" description="These acknowledgements protect both the requester and the integrity of the assessment.">
                  <TrustNotice compact />
                  <Checkbox name="accuracyConsent" checked={form.accuracyConsent} onChange={update}>
                    I confirm that the information supplied is accurate to the best of my knowledge and that I have authority to request this assessment.
                  </Checkbox>
                  <Checkbox name="termsConsent" checked={form.termsConsent} onChange={update}>
                    I agree to the <Link to="/legal/terms" className="text-[#00F0FF]">website terms</Link>, <Link to="/legal/privacy" className="text-[#00F0FF]">privacy notice</Link>, and <Link to="/legal/recovery-service-terms" className="text-[#00F0FF]">recovery service terms</Link>.
                  </Checkbox>
                  <Checkbox name="assessmentConsent" checked={form.assessmentConsent} onChange={update}>
                    I understand that the LKR 3,000 payment is for preliminary investigation and a written assessment only. It does not purchase or guarantee recovery, reinstatement, removal, or another third-party decision.
                  </Checkbox>
                </FieldGroup>
              )}

              {step === 6 && (
                <div>
                  <CreditCard className="text-[#00F0FF]" size={34} />
                  <h2 className="font-sans text-3xl font-bold leading-tight tracking-[-0.035em] mt-7">Assessment payment</h2>
                  <div className="mt-7 rounded-2xl border border-white/[0.08] p-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/42">Preliminary case assessment</p>
                      <p className="text-xs text-white/28 mt-1">Reference {caseId}</p>
                    </div>
                    <p className="font-sans text-2xl font-bold">LKR {assessmentFee.toLocaleString()}</p>
                  </div>
                  <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5 flex gap-4">
                    <AlertTriangle className="text-amber-200 shrink-0" />
                    <p className="text-sm text-amber-50/68 leading-relaxed">
                      This payment is for a preliminary investigation and written case assessment only. It does not purchase or guarantee account recovery, reinstatement, content removal, or any decision controlled by a third-party platform. If FLUX Digital determines it can lawfully assist, you will receive a separate scope and fee quotation before further work begins.
                    </p>
                  </div>

                  {checkoutUrl ? (
                    <a
                      href={checkoutUrl}
                      className="btn-primary mt-8 w-full flex items-center justify-center gap-2"
                    >
                      Continue to secure payment
                      <LockKeyhole size={17} />
                    </a>
                  ) : (
                    <div className="mt-8">
                      <p className="text-sm text-white/40 leading-relaxed">
                        The merchant checkout is awaiting production credentials. Save the provisional case and request a secure payment link from FLUX Digital.
                      </p>
                      <button type="button" className="btn-primary mt-5 w-full" onClick={savePending}>
                        Save case and request payment link
                      </button>
                    </div>
                  )}
                </div>
              )}

              {step === 7 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full border border-[#00F0FF]/35 bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={30} />
                  </div>
                  <p className="section-eyebrow mt-8">
                    {paymentStatus === 'verification-pending' ? 'Payment return received – verification pending' : 'Intake saved – payment pending'}
                  </p>
                  <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight tracking-[-0.035em]">Your provisional case reference</h2>
                  <button
                    type="button"
                    onClick={copyCaseId}
                    className="mt-7 rounded-2xl border border-[#00F0FF]/25 bg-[#00F0FF]/[0.05] px-6 py-4 font-sans font-semibold text-[#00F0FF] text-lg inline-flex gap-3 items-center"
                  >
                    {caseId}
                    <Copy size={16} />
                  </button>
                  {copied && <p className="text-xs text-emerald-200 mt-2">Copied</p>}
                  <p className="mt-7 text-white/45 leading-relaxed max-w-xl mx-auto">
                    {paymentStatus === 'verification-pending'
                      ? 'Keep this reference for all communication. FLUX Digital must verify the provider callback and ownership before substantive case work.'
                      : 'This device has saved your intake draft, but no payment or evidence has been transmitted. Use the prepared email below to request the secure payment link.'}
                  </p>
                  {paymentStatus === 'pending' && (
                    <a href={paymentRequestHref} className="btn-primary mt-8 inline-flex">
                      Request secure payment link
                    </a>
                  )}
                  <div className="mt-10 pt-8 border-t border-white/[0.08]">
                    <Link to="/" className="text-sm text-white/45 hover:text-[#00F0FF]">Return to homepage</Link>
                  </div>
                </div>
              )}

              {error && (
                <div role="alert" className="mt-7 rounded-xl border border-red-300/20 bg-red-300/[0.06] p-4 text-red-100/75 text-sm">
                  {error}
                </div>
              )}

              {step < 6 && (
                <div className="mt-10 pt-7 border-t border-white/[0.08] flex justify-between gap-4">
                  <button
                    type="button"
                    className="px-5 py-3 text-white/45 hover:text-white disabled:opacity-0"
                    onClick={back}
                    disabled={step === 0}
                  >
                    Back
                  </button>
                  <button type="button" className="btn-primary inline-flex gap-2 items-center" onClick={next}>
                    {step === 5 ? 'Create payment reference' : 'Continue'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
