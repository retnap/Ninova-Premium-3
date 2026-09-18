import { Label } from './Label'
import { Reveal } from './Reveal'

const STATS: [string, string][] = [
  ['150+', 'Şantiye Denetimi'],
  ['İstanbul', 'Hizmet Bölgesi'],
  ['Ninova', 'İnşaat'],
]

export function About() {
  return (
    <section id="about" className="bg-white py-28 md:py-44">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-5">
            <Label className="mb-6">Hakkımızda</Label>
            <h2 className="font-display text-[36px] md:text-[50px] font-medium leading-[1.15]">
              Bizde güven
              <br />
              <em className="italic">esastır.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="text-[18px] md:text-[22px] font-display font-medium text-[#333333] leading-[1.5] mb-8">
              İstanbul'un gelişimine değer katan güçlü bir marka.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#6B6B6B] leading-[1.9] mb-6">
              İstanbul'un çeşitli bölgelerinde hayata geçirdiğimiz örnek projelerle kalite ve güvenin adresi
              haline geldik. Bünyemize Hazarbey Yapı Denetim A.Ş.'yi katarak profesyonel ekibimizle İstanbul
              genelinde 150'den fazla şantiyeyi denetliyoruz.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#6B6B6B] leading-[1.9]">
              Başladığımız bu yolda, her geçen gün şirketimize ve çevremize değer katma ilkesinden ayrılmadan
              sizlere hizmet ediyoruz.
            </p>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#E5E5E5] pt-10">
              {STATS.map(([n, l]) => (
                <div key={n}>
                  <p className="font-body text-[28px] font-light leading-none text-[#111111]">{n}</p>
                  <p className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase mt-2">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
