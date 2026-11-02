import { Fondo } from './fondos/Fondo'
import { FondoPolvo } from './fondos/FondoPolvo'
import { TRABAJOS, type Foto } from '../data/trabajos'
import { RevealGroup, RevealItem } from './Reveal'
import { Container, SectionHeader } from './ui'

function Etiqueta({ children, despues }: { children: string; despues?: boolean }) {
  return (
    <span
      className={`absolute top-2.5 left-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${
        despues ? 'bg-wa/90 text-wa-ink' : 'bg-ink/75 text-fg-2'
      }`}
    >
      {children}
    </span>
  )
}

function Imagen({ foto }: { foto: Foto }) {
  return <img src={foto.src} alt={foto.alt} loading="lazy" className="block h-[200px] w-full object-cover" />
}

export function Trabajos() {
  return (
    <section id="trabajos" className="relative overflow-hidden py-16 md:py-24">
      <Fondo>
        <FondoPolvo />
      </Fondo>
      <Container className="relative">
        <SectionHeader
          eyebrow="Portafolio"
          title="Trabajos realizados"
          text="Algunos de los equipos que han pasado por nuestras manos."
        />
        <RevealGroup className="grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {TRABAJOS.map((t) =>
            t.tipo === 'single' ? (
              <RevealItem key={t.titulo} className="card overflow-hidden">
                <Imagen foto={t.foto} />
                <div className="px-4 py-3.5 text-sm font-semibold text-white">{t.titulo}</div>
              </RevealItem>
            ) : (
              <RevealItem key={t.titulo} className="card col-span-2 overflow-hidden">
                <div className="flex">
                  <div className="relative flex-1">
                    <Imagen foto={t.antes} />
                    <Etiqueta>Antes</Etiqueta>
                  </div>
                  <div className="w-0.5 shrink-0 bg-line" />
                  <div className="relative flex-1">
                    <Imagen foto={t.despues} />
                    <Etiqueta despues>Después</Etiqueta>
                  </div>
                </div>
                <div className="px-4 py-3.5 text-sm font-semibold text-white">{t.titulo}</div>
              </RevealItem>
            ),
          )}
        </RevealGroup>
      </Container>
    </section>
  )
}
