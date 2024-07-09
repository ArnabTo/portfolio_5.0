import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import Hero from '@/components/LandingSection/Hero'
import Navbar from '@/components/Nav/Navbar'
import Projects from '@/components/Projects/Projects'
import AboutSec from '@/components/TechStacks.jsx/TechStacks'
import TechStacks from '@/components/TechStacks.jsx/TechStacks'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSec />
      <TechStacks />
      <Projects />
      <Contact />
      {/* <FooTer/> */}
    </main>
  )
}
