import { LOGO } from '../data/images'

const PROJECT_LINKS = [
  { label: 'Mimari', href: '#architecture' },
  { label: 'İç Mekan', href: '#interior' },
  { label: 'Kat Planları', href: '#floor-plans' },
  { label: 'Konum', href: '#location' },
]

const CORPORATE_LINKS = [
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Katalog', href: '#catalog' },
  { label: 'İletişim', href: '#contact' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/ninovapremium/'

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img src={LOGO.full} alt="Ninova Premium" className="h-12 w-auto mb-6" />
            <p className="text-[10px] tracking-[0.15em] text-[#9B9B9B] uppercase mb-8">by Ninova İnşaat</p>
            <p className="text-[13px] text-[#6B6B6B] leading-[1.8]">
              Fevzi Çakmak Mahallesi
              <br />
              Gebzeli Caddesi 738B
              <br />
              Ninova Premium Projesi
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:info@ninovainsaat.com" className="block text-[13px] text-[#6B6B6B] hover:text-[#111111] transition-colors">
                info@ninovainsaat.com
              </a>
              <a href="tel:+905303575008" className="block text-[13px] text-[#6B6B6B] hover:text-[#111111] transition-colors">
                +90 530 357 50 08
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9B9B9B] mb-5">Proje</p>
            <div className="space-y-3">
              {PROJECT_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="block text-[13px] text-[#6B6B6B] hover:text-[#111111] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9B9B9B] mb-5">Kurumsal</p>
            <div className="space-y-3">
              {CORPORATE_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="block text-[13px] text-[#6B6B6B] hover:text-[#111111] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9B9B9B] mb-5">Bağlantı</p>
            <div className="space-y-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[13px] text-[#6B6B6B] hover:text-[#111111] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F0F0EE] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-[#C0C0C0]">© 2024 Ninova İnşaat. Tüm hakları saklıdır.</p>
          <p className="text-[11px] text-[#C0C0C0] tracking-[0.12em]">NINOVA PREMIUM — Gaziosmanpaşa, İstanbul</p>
        </div>
      </div>
    </footer>
  )
}
