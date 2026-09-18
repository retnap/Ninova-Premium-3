import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

const CATALOG_HREF = '/downloads/ninova-premium-katalog.pdf'

export function Catalog() {
  return (
    <section id="catalog" className="bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={IMG.catalogBgSm} />
          <img src={IMG.catalogBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        </picture>
      </div>
      <Reveal className="relative max-w-[1440px] mx-auto px-8 md:px-14 py-36 md:py-52">
        <div className="max-w-[640px]">
          <Label className="mb-8 text-white/50">Proje Kataloğu</Label>
          <h2 className="font-display text-[42px] md:text-[60px] font-medium text-white leading-[1.1] mb-8">
            Ninova Premium'u
            <br />
            <em className="italic">bütünüyle keşfedin.</em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/60 leading-[1.9] mb-14 max-w-[500px]">
            Projeyi, daire tiplerini, mimari yaklaşımı ve mevcut planları tüm detaylarıyla inceleyin. Eksiksiz
            proje kataloğu için aşağıdaki bağlantıları kullanabilirsiniz.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CATALOG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.25em] uppercase px-10 py-4 bg-white text-[#111111] hover:bg-white/90 transition-colors duration-200"
            >
              Kataloğu İncele
            </a>
            <a
              href={CATALOG_HREF}
              download
              className="text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-white/40 text-white hover:border-white transition-colors duration-200"
            >
              PDF'i İndir
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
