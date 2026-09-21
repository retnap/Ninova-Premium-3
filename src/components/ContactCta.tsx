import { Label } from './Label'
import { Reveal } from './Reveal'

const CATALOG_HREF = '/downloads/ninova-premium-katalog.pdf'

export function ContactCta() {
  return (
    <section id="contact" className="bg-[#F8F8F7] py-28 md:py-52 text-center">
      <Reveal className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Label className="mb-10 text-center">Ninova Premium</Label>
        <h2 className="font-display text-[48px] md:text-[80px] lg:text-[100px] font-medium leading-[1.05] mb-8 max-w-[900px] mx-auto">
          İstanbul'da yeni bir yaşam deneyimi.
        </h2>
        <p className="text-[15px] md:text-[17px] text-[#6B6B6B] leading-[1.85] max-w-[480px] mx-auto mb-14">
          Ninova Premium ile ilgili sorularınız, ziyaret talepleriniz ve yatırım fırsatları için bizimle
          iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#project-intro"
            className="text-[11px] tracking-[0.25em] uppercase px-10 py-4 bg-[#111111] text-white hover:bg-[#333333] transition-colors duration-200"
          >
            Projeyi İncele
          </a>
          <a
            href={CATALOG_HREF}
            download
            className="text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200"
          >
            Kataloğu İndir
          </a>
          <a
            href="tel:+905303575008"
            className="text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-[#E5E5E5] text-[#6B6B6B] hover:border-[#111111] hover:text-[#111111] transition-all duration-200"
          >
            İletişime Geç
          </a>
        </div>
      </Reveal>
    </section>
  )
}
