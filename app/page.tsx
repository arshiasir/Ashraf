import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Location />
      <Footer />
    </main>
  )
}

