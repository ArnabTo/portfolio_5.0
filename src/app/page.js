import About from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import Nav from '@/components/Nav/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
     <Nav/>
     <Hero/>
     <About/>
    </main>
  )
}
