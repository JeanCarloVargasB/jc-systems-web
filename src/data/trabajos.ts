import pcArmada from '../assets/img/g-pc-armada.jpg'
import gabinete from '../assets/img/g-gabinete.jpg'
import pastaAntes from '../assets/img/g-pasta-antes.jpg'
import pastaDespues from '../assets/img/g-pasta-despues.jpg'
import mallaAntes from '../assets/img/g-malla-antes.jpg'
import mallaDespues from '../assets/img/g-malla-despues.jpg'
import ps5Antes from '../assets/img/g-ps5-antes.jpg'
import ps5Despues from '../assets/img/g-ps5-despues.jpg'

export type Foto = { src: string; alt: string }
export type Trabajo =
  | { tipo: 'single'; titulo: string; foto: Foto }
  | { tipo: 'antes-despues'; titulo: string; antes: Foto; despues: Foto }

export const TRABAJOS: Trabajo[] = [
  { tipo: 'single', titulo: 'Computadora armada de alta gama', foto: { src: pcArmada, alt: 'Computadora armada de alta gama' } },
  { tipo: 'single', titulo: 'Limpieza de equipo gaming', foto: { src: gabinete, alt: 'Limpieza y personalización de equipo gaming' } },
  {
    tipo: 'antes-despues',
    titulo: 'Cambio de pasta térmica',
    antes: { src: pastaAntes, alt: 'Antes: pasta térmica desgastada en procesador' },
    despues: { src: pastaDespues, alt: 'Después: pasta térmica nueva aplicada en procesador de laptop' },
  },
  {
    tipo: 'antes-despues',
    titulo: 'Limpieza de malla de ventilador',
    antes: { src: mallaAntes, alt: 'Antes: malla de ventilador de computadora de escritorio con polvo' },
    despues: { src: mallaDespues, alt: 'Después: malla de ventilador limpia' },
  },
  {
    tipo: 'antes-despues',
    titulo: 'Limpieza de ventilador PS5',
    antes: { src: ps5Antes, alt: 'Antes: ventilador de PS5 con suciedad' },
    despues: { src: ps5Despues, alt: 'Después: ventilador de PS5 limpio' },
  },
]
