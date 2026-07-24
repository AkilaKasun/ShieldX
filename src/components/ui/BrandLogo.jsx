export default function BrandLogo({ className = '', compact = false }) {
  const logoSrc = `${import.meta.env.BASE_URL}brand/flux-digital-logo.jpg`
  const logoSize = compact
    ? 'w-[108px] h-9'
    : 'w-[150px] h-[50px] md:w-[176px] md:h-[58px]'

  return (
    <span className={`group relative inline-flex items-center ${className}`}>
      <span className="absolute inset-2 bg-gradient-to-r from-[#4811FF]/35 via-[#9A28BC]/30 to-[#F85A16]/30 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span className={`${logoSize} relative block shrink-0 overflow-hidden rounded-sm bg-black`}>
        <img
          src={logoSrc}
          alt="FLUX Digital — Digital Marketing Agency"
          className="absolute inset-x-0 top-[-94%] w-full max-w-none origin-center transition-transform duration-500 group-hover:scale-[1.025]"
          decoding="async"
        />
      </span>
    </span>
  )
}
