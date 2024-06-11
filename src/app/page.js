import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import FooTer from '@/components/Footer/Footer'
import Hero from '@/components/LandingSection/Hero'
import Hero2 from '@/components/LandingSection/Hero2'
import Projects from '@/components/Projects/Projects'




export default function Home() {
  return (
    <main>
      {/* <Hero/> */}
      <Hero2/>
     {/* <Hero/> */}
     <About/>
     <Projects/>
     <Contact/>
     {/* <FooTer/> */}
    </main>
  )
}
