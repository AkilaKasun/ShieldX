const allowedEvents = new Set([
  'emergency_cta_click',
  'assessment_started',
  'assessment_completed',
  'assessment_payment_success',
  'assessment_to_quote',
  'quote_accepted',
  'shoot_brief_started',
  'shoot_brief_completed',
  'package_selected',
  'portfolio_play',
  'contact_click',
  'qualified_lead',
  'proposal_sent',
  'project_won',
])

export function trackEvent(name, properties = {}) {
  if (!allowedEvents.has(name)) {
    if (import.meta.env.DEV) console.warn(`[analytics] Unknown event: ${name}`)
    return
  }

  const payload = {
    event: name,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...properties,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  window.dispatchEvent(new CustomEvent('shieldx:analytics', { detail: payload }))

  if (import.meta.env.DEV) console.info('[analytics]', payload)
}

export function trackedContactHref(kind = 'email') {
  trackEvent('contact_click', { kind })
}

