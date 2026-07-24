import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const baseId = useId()

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        return (
          <div
            key={item.q}
            className={`rounded-2xl border bg-[#0A0D18]/70 transition-colors ${
              isOpen ? 'border-[#00F0FF]/30' : 'border-white/[0.07] hover:border-white/15'
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between text-left gap-5 p-5 md:p-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-white/85 font-medium">{item.q}</span>
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#00F0FF] shrink-0">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div id={panelId} hidden={!isOpen}>
              <p className="px-5 md:px-6 pb-6 text-white/55 leading-relaxed text-sm md:text-base">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

