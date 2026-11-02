import { Fondo } from './fondos/Fondo'
import { FondoVentilador } from './fondos/FondoVentilador'
import { EQUIPOS } from '../data/equipos'
import { waLink } from '../data/site'
import { RevealGroup, RevealItem } from './Reveal'
import { Container, SectionHeader } from './ui'

export function Equipos() {
  return (
    <section id="equipos" className="relative overflow-hidden border-y border-line-2 bg-ink-2 py-16 md:py-24">
      <Fondo>
        <FondoVentilador />
      </Fondo>
      <Container className="relative">
        <SectionHeader
          eyebrow="Venta de equipos"
          title="Equipos nuevos y de segunda, listos para usar"
          text="Computadoras, laptops y equipo de punto de venta. Cada equipo de segunda pasa por revisión y mantenimiento antes de salir de nuestras manos."
        />
        <RevealGroup className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {EQUIPOS.map((e) => (
            <RevealItem key={e.titulo} className="relative overflow-hidden rounded-2xl border border-line">
              <img src={e.src} alt={e.alt} loading="lazy" className="block h-[200px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-[18px] py-4 text-sm font-semibold text-white">
                {e.titulo}
              </div>
            </RevealItem>
          ))}
          <RevealItem className="card flex flex-col justify-center bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02))] p-[30px] sm:col-span-2">
            <h3 className="font-display text-lg font-bold text-white">¿Buscás un equipo específico?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Contanos qué necesitás y te confirmamos disponibilidad y precio por WhatsApp.
            </p>
            <a
              href={waLink('Hola, estoy buscando un equipo: ')}
              target="_blank"
              rel="noopener"
              className="mt-4 text-sm font-bold text-brand hover:text-brand-hi"
            >
              Consultar disponibilidad →
            </a>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
