import { Fondo } from './fondos/Fondo'
import { FondoPolvo } from './fondos/FondoPolvo'
import { TRABAJOS } from '../data/trabajos'
import { ALTO_FOTO, Comparador } from './Comparador'
import { RevealGroup, RevealItem } from './Reveal'
import { Container, SectionHeader } from './ui'

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
          text="Desliza la barra sobre cada foto para comparar el antes y el después."
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRABAJOS.map((t) => (
            <RevealItem key={t.titulo} className="card overflow-hidden">
              {t.tipo === 'antes-despues' ? (
                <Comparador antes={t.antes} despues={t.despues} titulo={t.titulo} />
              ) : (
                <img src={t.foto.src} alt={t.foto.alt} loading="lazy" className={`block ${ALTO_FOTO} w-full object-cover`} />
              )}
              <div className="px-4 py-3.5 text-sm font-semibold text-white">{t.titulo}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
