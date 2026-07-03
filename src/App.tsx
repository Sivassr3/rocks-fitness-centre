import './index.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// UI
import ScrollProgress from './components/ui/ScrollProgress'

// Sections
import Hero from './components/sections/Hero'
import WhyChoose from './components/sections/WhyChoose'
import GymExperience from './components/sections/GymExperience'
import Programs from './components/sections/Programs'
import Equipment from './components/sections/Equipment'
import Trainers from './components/sections/Trainers'
import Transformation from './components/sections/Transformation'
import Reviews from './components/sections/Reviews'
import Statistics from './components/sections/Statistics'
import MembershipCTA from './components/sections/MembershipCTA'
import Location from './components/sections/Location'

function App() {
  useLenis()

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="bg-[#050505] min-h-screen noise-overlay">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <WhyChoose />
        <Programs />
        <GymExperience />
        <Equipment />
        <Trainers />
        <Transformation />
        <Reviews />
        <MembershipCTA />
        <Location />
      </main>

      <Footer />
    </div>
  )
}

export default App
