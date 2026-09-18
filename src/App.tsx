import { About } from './components/About'
import { Architecture } from './components/Architecture'
import { Catalog } from './components/Catalog'
import { ContactCta } from './components/ContactCta'
import { DayNight } from './components/DayNight'
import { FloorPlans } from './components/FloorPlans'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { InteriorExperience } from './components/InteriorExperience'
import { LifeSpaces } from './components/LifeSpaces'
import { Location } from './components/Location'
import { MaterialDetail } from './components/MaterialDetail'
import { Navbar } from './components/Navbar'
import { ProjectIntro } from './components/ProjectIntro'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <div className="font-body bg-white text-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <ProjectIntro />
        <Architecture />
        <Highlights />
        <InteriorExperience />
        <MaterialDetail />
        <FloorPlans />
        <LifeSpaces />
        <DayNight />
        <Location />
        <Gallery />
        <Catalog />
        <About />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
