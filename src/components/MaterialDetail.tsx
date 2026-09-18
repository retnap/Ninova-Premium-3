import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

const FEATURES = ['Kaliteli İşçilik', 'Doğal Işık Odaklı Plan', 'Premium Kaplama Malzemeleri', 'Akıllı Depolama Sistemleri']

export function MaterialDetail() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <Reveal className="md:col-span-4 md:sticky md:top-32">
            <Label className="mb-6">Malzeme &amp; Detay</Label>
            <h2 className="font-display text-[32px] md:text-[42px] font-medium italic leading-[1.2] mb-6">Her detay, bir tercih.</h2>
            <p className="text-[14px] md:text-[16px] text-[#6B6B6B] leading-[1.9]">
              Malzeme seçiminden ışık tasarımına, renk paletinden yüzey dokusuna kadar her unsur, konfor ile
              estetiği buluşturan bir anlayışla özenle kurgulanmıştır.
            </p>
            <div className="mt-10 pt-8 border-t border-[#E5E5E5] space-y-4">
              {FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#9B9B9B]" />
                  <span className="text-[13px] text-[#6B6B6B]">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="md:col-span-8 grid grid-cols-2 gap-4">
            <Reveal delay={0.1} scale={0.97} className="col-span-2 aspect-[16/8] overflow-hidden bg-[#E0E0DE]">
              <img
                src={IMG.interiorMosaicWide}
                alt="İç mekan detay"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.2} className="aspect-[4/5] overflow-hidden bg-[#E8E8E6]">
              <img
                src={IMG.interiorMosaicPortraitA}
                alt="Yaşam alanı"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.3} className="aspect-[4/5] overflow-hidden bg-[#E0E0DE]">
              <img
                src={IMG.interiorMosaicPortraitB}
                alt="Mutfak detay"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
