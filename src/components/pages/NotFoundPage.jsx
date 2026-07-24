import { Link } from 'react-router-dom'
import Seo from '../ui/Seo'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen px-6 flex items-center justify-center text-center relative overflow-hidden">
      <Seo title="Page not found" description="The requested FLUX Digital page could not be found." />
      <div className="relative z-10 max-w-2xl">
        <p className="font-sans text-[#00F0FF] tracking-[.24em] text-xs uppercase">Error 404</p>
        <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-[-0.04em] mt-5">Signal lost.</h1>
        <p className="text-white/48 mt-6">The page moved, the address is incomplete, or the route does not exist.</p>
        <Link to="/" className="btn-primary inline-flex mt-9">Return home</Link>
      </div>
    </main>
  )
}
