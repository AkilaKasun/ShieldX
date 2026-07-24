import { ShieldCheck } from 'lucide-react'

export default function TrustNotice({ compact = false }) {
  return (
    <div
      className={`border border-[#00F0FF]/20 bg-[#00F0FF]/[0.06] rounded-2xl ${
        compact ? 'p-4' : 'p-5 md:p-6'
      }`}
    >
      <div className="flex gap-4 items-start">
        <ShieldCheck className="text-[#00F0FF] shrink-0 mt-0.5" size={compact ? 18 : 22} />
        <p className={`${compact ? 'text-xs' : 'text-sm'} text-white/65 leading-relaxed`}>
          FLUX Digital is an independent agency. We use lawful, official platform and rights-enforcement routes
          and never guarantee a decision controlled by a third party.
        </p>
      </div>
    </div>
  )
}
