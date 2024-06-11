import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import Hero from '@/components/LandingSection/Hero'
import Projects from '@/components/Projects/Projects'




export default function Home() {
  return (
    <main>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     {/* <FooTer/> */}
    </main>
  )
}
