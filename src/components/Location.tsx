import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

const DETAILS: [string, string][] = [
  ['Proje', 'Ninova Premium'],
  ['Konum', 'Küçükköy, Gaziosmanpaşa'],
  ['Şehir', 'İstanbul'],
]

export function Location() {
  return (
    <section id="location" className="bg-white py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <Reveal className="md:col-span-5">
            <Label className="mb-6">Konum</Label>
            <h2 className="font-display text-[48px] md:text-[70px] lg:text-[82px] font-medium leading-[1.0] mb-8">
              Gazios-
              <br />
              manpaşa
            </h2>
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

          <Reveal delay={0.15} scale={0.97} className="md:col-span-7 aspect-[4/3] overflow-hidden bg-[#E0E0DE]">
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
