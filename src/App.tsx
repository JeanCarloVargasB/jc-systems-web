import { MotionConfig } from 'framer-motion'
import { Contacto } from './components/Contacto'
import { Equipos } from './components/Equipos'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Licencias } from './components/Licencias'
import { Navbar } from './components/Navbar'
import { Servicios } from './components/Servicios'
import { Trabajos } from './components/Trabajos'
import { TrustBar } from './components/TrustBar'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Servicios />
        <Licencias />
        <Trabajos />
        <Equipos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}
