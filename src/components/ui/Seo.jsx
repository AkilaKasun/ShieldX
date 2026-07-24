import { useEffect } from 'react'

export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title === 'FLUX Digital' ? title : `${title} | FLUX Digital`
    document.title = fullTitle

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description

    const canonicalUrl = new URL(window.location.pathname, window.location.origin).toString()
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [description, title])

  return null
}
