import { motion } from 'framer-motion'
import hero from '../assets/img/hero-portada.jpg'
import { Estrellas, LogoArmandose } from './LogoArmandose'
import { EASE } from './Reveal'
import { Container, Eyebrow, WhatsAppButton, scrollToId } from './ui'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-[72px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(91,155,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(91,155,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_70%)]"
        aria-hidden="true"
      />
      <Estrellas />
      <LogoArmandose className="pointer-events-none absolute top-6 left-1/2 h-[300px] -translate-x-1/2 opacity-20 md:top-4 md:right-[4%] md:left-auto md:h-[440px] md:translate-x-0 md:opacity-40" />
      <LogoArmandose className="pointer-events-none absolute top-40 left-[3%] hidden h-[220px] -scale-x-100 opacity-15 lg:block" />

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Eyebrow>Servicio técnico · Computadoras · Consolas</Eyebrow>
          <h1 className="font-display text-[34px] font-extrabold leading-[1.1] text-balance text-white md:text-5xl">
            Reparamos, mantenemos y equipamos tu tecnología
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Mantenimiento y reparación de computadoras de escritorio, laptops y consolas PS4/PS5. Instalación de
            software con licencias 100% originales y venta de equipos nuevos y de segunda.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
            <WhatsAppButton />
            <button
              type="button"
              onClick={() => scrollToId('servicios')}
              className="inline-flex items-center rounded-xl border border-[#2a3448] bg-ink/60 px-[26px] py-[15px] text-[15px] font-bold text-fg transition-colors hover:bg-panel"
            >
              Ver servicios
            </button>
          </div>
        </motion.div>
        <motion.div
          className="relative mt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          <div className="absolute -inset-6 bg-[radial-gradient(circle_at_50%_30%,rgba(91,155,255,0.22),transparent_60%)] blur-2xl" />
          <img
            src={hero}
            alt="JC Systems — reparación de computadoras, licencias de software y mantenimiento de consolas"
            className="relative w-full rounded-[20px] border border-line"
          />
        </motion.div>
      </Container>
    </section>
  )
}
