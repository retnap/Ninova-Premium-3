import { CountUp } from './CountUp'
import { Label } from './Label'
import { Reveal } from './Reveal'

const STAT_STAGGER = 0.12

const STATS = [
  { value: 200, label: 'Daire' },
  { value: 35, label: 'Dükkan' },
  { text: '2+1', label: 'Daire Tipi' },
  { text: '3+1', label: 'Daire Tipi' },
  { text: '7/24', label: 'Güvenlik' },
] as const

const FEATURES = [
  {
    title: 'Merkezi Konum',
    body: "Gaziosmanpaşa / Küçükköy, İstanbul'un ulaşım ağlarına yakın, gelişim potansiyeli yüksek bir bölgede.",
  },
  {
    title: 'Ticari Canlılık',
    body: 'Zemin kattaki 35 dükkan ile proje çevresine sosyal ve ekonomik bir dinamizm katmaktadır.',
  },
  {
    title: 'Yatırım Değeri',
    body: "İstanbul'un dönüşüm sürecindeki bu bölgesinde mülk sahibi olmak, uzun vadeli değer anlamına gelir.",
  },
]

export function Highlights() {
  return (
    <section className="bg-white py-28 md:py-44">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Label className="mb-20">Proje Özellikleri</Label>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-[#E5E5E5]">
            {STATS.map((item, i) => (
              <div
                key={item.label + ('value' in item ? item.value : item.text)}
                className="border-r border-[#E5E5E5] last:border-r-0 px-6 py-10 md:py-14 first:pl-0"
              >
                <p className="font-body text-[50px] md:text-[64px] font-light leading-none tracking-[-0.02em] text-[#111111]">
                  {'value' in item ? <CountUp to={item.value} delay={i * STAT_STAGGER} /> : item.text}
                </p>
                <p className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase mt-4">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#E5E5E5] pt-14">
          {FEATURES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <p className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase mb-4">0{i + 1}</p>
              <h3 className="font-display text-[22px] font-medium mb-4">{item.title}</h3>
              <p className="text-[14px] text-[#6B6B6B] leading-[1.8]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
