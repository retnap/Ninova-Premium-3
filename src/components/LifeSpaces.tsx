import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

const ITEMS = [
  {
    img: IMG.lifeA,
    imgSm: IMG.lifeASm,
    label: 'SALON · YEMEK',
    desc: 'Açık plan yerleşimi ile salon ve yemek alanı, aile yaşamının doğal merkezi haline gelir.',
  },
  {
    img: IMG.lifeB,
    imgSm: IMG.lifeBSm,
    label: 'DİNLENME · UYKU',
    desc: 'Sakin ve huzurlu yatak odaları, günün yorgunluğunu üzerinizden atmanızı sağlar.',
  },
]

export function LifeSpaces() {
  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden">
      <Reveal className="max-w-[1440px] mx-auto px-8 md:px-14 mb-14">
        <Label className="mb-5">Yaşam</Label>
        <h2 className="font-display text-[36px] md:text-[52px] font-medium leading-[1.15]">Her mekan bir deneyim.</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.1}
            scale={0.97}
            className="relative aspect-[4/5] md:aspect-auto md:h-[640px] overflow-hidden bg-[#E0E0DE] group"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={item.imgSm} />
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="text-[10px] tracking-[0.3em] text-white/70 uppercase mb-3">{item.label}</p>
              <p className="text-[14px] text-white/80 max-w-[300px] leading-[1.7]">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
