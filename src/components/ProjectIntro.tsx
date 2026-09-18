import { IMG } from '../data/images'
import { Label } from './Label'
import { MaskedReveal } from './MaskedReveal'
import { Reveal } from './Reveal'

const METADATA = [
  ['200', 'Daire'],
  ['35', 'Dükkan'],
] as const

export function ProjectIntro() {
  return (
    <section id="project-intro" className="bg-white py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-7 md:col-start-1">
            <Reveal>
              <Label className="mb-8">Ninova Premium</Label>
            </Reveal>

            <MaskedReveal
              as="h2"
              delay={0.1}
              className="font-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.15] font-medium text-[#111111] mb-10"
            >
              İstanbul'un gelişimine değer katan güçlü bir yaşam ve yatırım deneyimi.
            </MaskedReveal>

            <MaskedReveal
              as="p"
              delay={0.25}
              className="text-[15px] md:text-[17px] text-[#6B6B6B] leading-[1.85] max-w-[560px]"
            >
              Gaziosmanpaşa'nın kalbinde hayata geçen Ninova Premium, 200 daire ve 35 ticari ünit ile
              İstanbul'un sosyal ve ekonomik dönüşümüne doğrudan katkı sunan bir proje. Modern mimari
              anlayış, kaliteli malzeme seçimi ve işlevsel plan şemasıyla tasarlanan her daire, yaşam
              konforunu ve yatırım değerini bir arada sunar.
            </MaskedReveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-[#E5E5E5]">
                {METADATA.map(([num, label]) => (
                  <div key={label}>
                    <p className="font-body text-[38px] font-light leading-none text-[#111111]">{num}</p>
                    <p className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase mt-2">{label}</p>
                  </div>
                ))}
                <div>
                  <p className="font-body text-[24px] font-light leading-none text-[#111111]">2+1 · 3+1</p>
                  <p className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase mt-2">Daire Tipleri</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:-mt-32 hidden md:block">
            <Reveal delay={0.15}>
              <div className="aspect-[3/4] overflow-hidden bg-[#F0F0EE]">
                <img src={IMG.introSide} alt="Ninova Premium mimari" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase">01</span>
                <div className="flex-1 mx-4 h-px bg-[#E5E5E5]" />
                <span className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase">Mimari</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
