export const assessmentFee = 3000

export function getAssessmentCheckoutUrl(caseId, email) {
  const configuredUrl = import.meta.env.VITE_ASSESSMENT_CHECKOUT_URL
  if (!configuredUrl) return null

  const url = new URL(configuredUrl)
  url.searchParams.set('reference', caseId)
  url.searchParams.set('amount', assessmentFee.toString())
  url.searchParams.set('currency', 'LKR')
  url.searchParams.set('email', email)
  return url.toString()
}

