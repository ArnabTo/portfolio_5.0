import AboutSec from '@/components/About/AboutSec'
import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import HomePage from '@/components/Home/HomePage'
import Hero from '@/components/LandingSection/Hero'
import Navbar from '@/components/Nav/Navbar'
import Projects from '@/components/Projects/Projects'
import TechStacks from '@/components/TechStaks/TechStacks'



export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <HomePage/>
      {/* <Hero />
      <AboutSec />
      <TechStacks/>
      <Projects />
      <Contact /> */}
      {/* <FooTer/> */}
    </main>
  )
}
