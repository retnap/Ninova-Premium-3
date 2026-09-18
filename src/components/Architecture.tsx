import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

export function Architecture() {
  return (
    <section id="architecture" className="bg-[#F8F8F7] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Reveal>
          <div className="mb-16">
            <Label>Proje</Label>
            <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display text-[40px] md:text-[56px] font-medium italic leading-[1.1]">Mimari</h2>
              <p className="text-[11px] tracking-[0.2em] text-[#9B9B9B] uppercase max-w-[280px] text-right leading-[1.8]">
                Çağdaş cephe dili
                <br />
                Kalıcı malzeme anlayışı
                <br />
                İnsan ölçekli planlama
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <Reveal scale={0.97} className="md:col-span-8 aspect-[16/10] overflow-hidden bg-[#E0E0DE]">
            <img
              src={IMG.archLarge}
              alt="Ninova Premium genel görünüm"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </Reveal>
          <div className="md:col-span-4 flex flex-col gap-5">
            <Reveal delay={0.1} className="flex-1 overflow-hidden bg-[#E0E0DE] min-h-[200px]">
              <img
                src={IMG.archSmall}
                alt="Ninova Premium cephe detayı"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.2} className="bg-white px-7 py-8">
              <p className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase mb-4">Konsept</p>
              <p className="font-display text-[22px] leading-[1.35] font-medium text-[#111111] mb-4">
                Modern mimari dil, kalıcı yaşam standardı.
              </p>
              <p className="text-[13px] text-[#6B6B6B] leading-[1.8]">
                Zemin katlarda ticari ünitlerin yarattığı canlılık, üst katlarda konutların sunduğu huzur ile
                Ninova Premium, karma kullanım anlayışının en başarılı örneklerinden biri olarak öne çıkar.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
