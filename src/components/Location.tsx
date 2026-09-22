import { useLayoutEffect, useRef, useState } from 'react'
import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

const DETAILS: [string, string][] = [
  ['Proje', 'Ninova Premium'],
  ['Konum', 'Küçükköy, Gaziosmanpaşa'],
  ['Şehir', 'İstanbul'],
]

const HEADING_TEXT = 'Gaziosmanpaşa'
// Figma's intended sizes. These stay untouched whenever the column is wide enough
// to fit the word on one line at this size — the fit-to-width effect below only ever scales down.
const HEADING_SIZE_CLASS = 'text-[48px] md:text-[70px] lg:text-[82px]'
// Keeps a hair of breathing room so sub-pixel rounding/antialiasing can never tip it back into wrapping.
const FIT_SAFETY_MARGIN = 0.98

/**
 * "Gaziosmanpaşa" must never break across two lines (previously hard-coded as "Gazios-" / "manpaşa").
 * At this heading's Figma-specified sizes the word is wider than its column at several viewport
 * widths, so a fixed font-size alone can't guarantee one line without overflow. Instead we measure
 * the word's natural width against the available column width and shrink the font-size — never
 * below what's needed to fit — so it always renders on a single line.
 *
 * The natural width is measured off a hidden clone rather than the live heading itself: mutating
 * the live heading's own font-size to "reset" it before each measurement changes its height, which
 * re-triggers the ResizeObserver watching its container, which resets it again — a feedback loop
 * that fights with React's re-render bailout and can leave the shrink silently never applied. A
 * separate, always-at-base-size clone sidesteps that entirely.
 */
function useFitOneLine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLHeadingElement>(null)
  const [fontSizePx, setFontSizePx] = useState<number | null>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const measureEl = measureRef.current
    if (!container || !measureEl) return

    function measure() {
      if (!container || !measureEl) return
      const naturalWidth = measureEl.scrollWidth
      const available = container.clientWidth
      if (naturalWidth === 0 || naturalWidth <= available) {
        setFontSizePx(null)
        return
      }
      const naturalSize = parseFloat(getComputedStyle(measureEl).fontSize)
      setFontSizePx(naturalSize * (available / naturalWidth) * FIT_SAFETY_MARGIN)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    // Re-measure once the real webfont swaps in (font-display: swap serves a fallback first,
    // which has different metrics than Playfair Display and would otherwise go unmeasured).
    document.fonts?.ready.then(measure)
    return () => observer.disconnect()
  }, [])

  return { containerRef, measureRef, fontSizePx }
}

// Mobile keeps the original single-column stacking gap untouched. From md up, the two columns sit
// side by side, so `gap-y` no longer does anything visible — only `gap-x` matters there. Giving the
// text column a fixed (not proportional) width means growing that gap always comes out of the
// image's share of the row, never the heading's — so the heading never has to shrink further just
// because the gap grew.
const GRID_CLASS =
  'grid grid-cols-1 md:grid-cols-[clamp(280px,38vw,520px)_1fr] gap-y-12 md:gap-y-0 md:gap-x-[clamp(40px,7vw,120px)] items-start'

export function Location() {
  const { containerRef, measureRef, fontSizePx } = useFitOneLine()
  const headingClassName = `font-display ${HEADING_SIZE_CLASS} font-medium leading-[1.0] whitespace-nowrap`

  return (
    <section id="location" className="bg-white py-28 md:py-40 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className={GRID_CLASS}>
          <Reveal>
            <Label className="mb-6">Konum</Label>
            <div ref={containerRef} className="relative mb-8">
              <h2 className={headingClassName} style={fontSizePx != null ? { fontSize: `${fontSizePx}px` } : undefined}>
                {HEADING_TEXT}
              </h2>
              {/* Invisible, always-at-base-size clone used only to measure the word's natural width. */}
              <h2 ref={measureRef} aria-hidden="true" className={`${headingClassName} absolute top-0 left-0 invisible pointer-events-none`}>
                {HEADING_TEXT}
              </h2>
            </div>
            <p className="text-[14px] md:text-[16px] text-[#6B6B6B] leading-[1.9] mb-10 max-w-[420px]">
              İstanbul'un dinamik ilçelerinden Gaziosmanpaşa'nın Küçükköy bölgesinde konumlanan Ninova Premium,
              şehrin sunduğu tüm olanaklara yakın, aynı zamanda sakin bir yaşam çevresi sunmaktadır.
            </p>
            <div className="space-y-4 text-[13px] text-[#333333]">
              {DETAILS.map(([k, v]) => (
                <div key={k} className="flex gap-6 border-b border-[#F0F0EE] pb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B9B9B] w-20 shrink-0">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} scale={0.97} className="aspect-[4/3] overflow-hidden bg-[#E0E0DE]">
            <picture>
              <source media="(max-width: 768px)" srcSet={IMG.locationSm} />
              <img
                src={IMG.location}
                alt="İstanbul — Galata Kulesi ve Haliç"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </picture>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
