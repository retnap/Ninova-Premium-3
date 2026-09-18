import { useMemo, useState } from 'react'
import { CEPHE_OPTIONS, FLOOR_PLANS } from '../data/floorPlans'
import type { Cephe } from '../types/content'
import { Label } from './Label'
import { Reveal } from './Reveal'

const TYPE_TITLES: Record<string, string> = {
  '2+1': 'İki Artı Bir',
  '3+1': 'Üç Artı Bir',
}

export function FloorPlans() {
  const [cephe, setCephe] = useState<Cephe>('A')
  const plansForCephe = useMemo(() => FLOOR_PLANS.filter((p) => p.cephe === cephe), [cephe])
  const [planId, setPlanId] = useState(plansForCephe[0].id)

  const plan = plansForCephe.find((p) => p.id === planId) ?? plansForCephe[0]

  function selectCephe(next: Cephe) {
    setCephe(next)
    const first = FLOOR_PLANS.find((p) => p.cephe === next)
    if (first) setPlanId(first.id)
  }

  return (
    <section id="floor-plans" className="bg-[#F8F8F7] py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Reveal>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <div>
              <Label className="mb-5">Kat Planları</Label>
              <h2 className="font-display text-[36px] md:text-[50px] font-medium">{TYPE_TITLES[plan.type]}</h2>
              <p className="text-[12px] tracking-[0.12em] text-[#9B9B9B] mt-2">
                {plan.cephe} Cephesi — Daire Alanı {plan.daireAlani} m²
              </p>
            </div>

            {/* Cephe toggle */}
            <div className="flex flex-wrap border border-[#E5E5E5] bg-white">
              {CEPHE_OPTIONS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCephe(c)}
                  className={`px-8 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 ${
                    cephe === c ? 'bg-[#111111] text-white' : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  {c} Cephesi
                </button>
              ))}
            </div>
          </div>

          {/* Plan variant chips for the selected cephe */}
          <div className="flex flex-wrap gap-1 mb-10">
            {plansForCephe.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlanId(p.id)}
                className={`text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 transition-all duration-200 ${
                  plan.id === p.id
                    ? 'bg-[#111111] text-white'
                    : 'text-[#6B6B6B] hover:text-[#111111] border border-transparent hover:border-[#E5E5E5] bg-white'
                }`}
              >
                {p.type} · {p.daireAlani} m²
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Plan image */}
          <Reveal className="md:col-span-7 bg-white p-4 md:p-6">
            <div className="w-full aspect-[1800/1272] bg-[#F8F8F7]">
              <img
                key={plan.id}
                src={plan.image}
                alt={`${plan.cephe} Cephesi ${plan.type} kat planı`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[9px] tracking-[0.15em] text-[#C0C0C0] uppercase mt-4 text-center">
              Kaynak: Ninova Premium proje kat planları
            </p>
          </Reveal>

          {/* Real plan data */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="bg-white p-8">
              <p className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase mb-6">Plan Bilgileri</p>

              <div className="divide-y divide-[#F0F0EE]">
                <div className="flex justify-between items-center py-4">
                  <span className="text-[13px] text-[#333333]">Cephe</span>
                  <span className="text-[13px] font-medium text-[#111111] font-body">{plan.cephe} Cephesi</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-[13px] text-[#333333]">Daire Tipi</span>
                  <span className="text-[13px] font-medium text-[#111111] font-body">{plan.type}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-[13px] text-[#333333]">Otopark ve Sosyal Tesis Alanı</span>
                  <span className="text-[13px] font-medium text-[#111111] font-body">{plan.ortakAlan} m²</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] tracking-[0.15em] text-[#9B9B9B] uppercase">Daire Alanı</span>
                  <span className="font-display text-[22px] font-medium">{plan.daireAlani} m²</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <p className="text-[11px] tracking-[0.15em] text-[#9B9B9B] uppercase mb-3">Uygulandığı Daireler</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {plan.floors.map((f) => (
                    <span key={f.daireNo} className="text-[12px] text-[#6B6B6B]">
                      {f.kat}. Kat — {f.daireNo}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 w-full block text-center border border-[#111111] text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-[#111111] hover:text-white transition-all duration-200"
              >
                Bilgi Al
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
