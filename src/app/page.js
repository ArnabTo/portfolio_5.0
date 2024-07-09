import AboutSec from '@/components/About/AboutSec'
import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import Hero from '@/components/LandingSection/Hero'
import Navbar from '@/components/Nav/Navbar'
import Projects from '@/components/Projects/Projects'
import TechStacks from '@/components/TechStaks/TechStacks'



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSec />
      <TechStacks/>
      <Projects />
      <Contact />
      {/* <FooTer/> */}
    </main>
  )
}
