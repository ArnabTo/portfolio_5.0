import AboutSec from '@/components/About/AboutSec'
import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import Hero from '@/components/LandingSection/Hero'
import Navbar from '@/components/Nav/Navbar'
import Projects from '@/components/Projects/Projects'
import TechStacks from '@/components/TechStaks/TechStacks'
import './custom.css'
import ExperienceSec from '@/components/Experience/Exp_sec'


export default function Home() {
  return (
    <main>
      <div className='relative z-20 bg-[#060606]'>
        <Navbar />
        <Hero />
        <AboutSec />
        <TechStacks />
        <ExperienceSec/>
        <Projects />
        <Contact />
      </div>
      {/* <FooTer/> need to fix the hidration error */}
    </main>
  )
}
