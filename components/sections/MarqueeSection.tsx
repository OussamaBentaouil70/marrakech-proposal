import { marqueeItems as defaultItems } from '@/data/content'

export default function MarqueeSection({ items }: { items?: string[] }) {
  const list = items ?? defaultItems
  const doubled = [...list, ...list]

  return (
    <div className="bg-primary py-5 overflow-hidden border-y border-gold/20">
      <div className="flex">
        <div className="marquee-inner">
          {doubled.map((item: string, i: number) => (
            <span key={i} className="inline-flex items-center gap-6 text-beige/60 font-body text-xs tracking-[0.18em] uppercase">
              <span className="text-gold text-base leading-none">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
