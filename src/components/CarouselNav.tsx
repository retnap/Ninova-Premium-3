interface CarouselNavProps {
  onPrev: () => void
  onNext: () => void
  current: number
  total: number
  className?: string
}

/** Centered prev/next arrows with a counter, placed beneath a layered image carousel. */
export function CarouselNav({ onPrev, onNext, current, total, className = '' }: CarouselNavProps) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Önceki görsel"
        className="w-11 h-11 border border-[#E5E5E5] flex items-center justify-center text-[18px] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
      >
        ‹
      </button>
      <span className="text-[11px] tracking-[0.2em] text-[#9B9B9B] uppercase w-16 text-center tabular-nums">
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button
        type="button"
        onClick={onNext}
        aria-label="Sonraki görsel"
        className="w-11 h-11 border border-[#E5E5E5] flex items-center justify-center text-[18px] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
      >
        ›
      </button>
    </div>
  )
}
