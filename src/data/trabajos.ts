import pcArmada from '../assets/img/g-pc-armada.jpg'
import gabinete from '../assets/img/g-gabinete.jpg'
import pastaAntes from '../assets/img/g-pasta-antes.jpg'
import pastaDespues from '../assets/img/g-pasta-despues.jpg'
import mallaAntes from '../assets/img/g-malla-antes.jpg'
import mallaDespues from '../assets/img/g-malla-despues.jpg'
import ps5Antes from '../assets/img/g-ps5-antes.jpg'
import ps5Despues from '../assets/img/g-ps5-despues.jpg'
import amdAntes from '../assets/img/t-amd-antes.jpg'
import amdDespues from '../assets/img/t-amd-despues.jpg'
import gpuAntes from '../assets/img/t-gpu-antes.jpg'
import gpuDespues from '../assets/img/t-gpu-despues.jpg'
import msiPcAntes from '../assets/img/t-msi-pc-antes.jpg'
import msiPcDespues from '../assets/img/t-msi-pc-despues.jpg'
import filtro from '../assets/img/t-filtro.jpg'

export type Foto = { src: string; alt: string }
export type Trabajo =
  | { tipo: 'single'; titulo: string; foto: Foto }
  | { tipo: 'antes-despues'; titulo: string; antes: Foto; despues: Foto }

// Shown in this order, three per row on desktop: the before/after sliders first, then single photos.
export const TRABAJOS: Trabajo[] = [
  {
    tipo: 'antes-despues',
    titulo: 'Limpieza de computadora AMD',
    antes: { src: amdAntes, alt: 'Antes: ventilador y disipador de computadora AMD cubiertos de polvo' },
    despues: { src: amdDespues, alt: 'Después: interior de la computadora AMD limpio' },
  },
  {
    tipo: 'antes-despues',
    titulo: 'Limpieza de tarjeta de video MSI RTX',
    antes: { src: gpuAntes, alt: 'Antes: tarjeta de video MSI GeForce RTX con polvo' },
    despues: { src: gpuDespues, alt: 'Después: tarjeta de video MSI GeForce RTX limpia' },
  },
  {
    tipo: 'antes-despues',
    titulo: 'Cambio de pasta térmica',
    antes: { src: pastaAntes, alt: 'Antes: pasta térmica desgastada en procesador' },
    despues: { src: pastaDespues, alt: 'Después: pasta térmica nueva aplicada en procesador de laptop' },
  },
  {
    tipo: 'antes-despues',
    titulo: 'Computadora con MSI RTX',
    antes: { src: msiPcAntes, alt: 'Antes: computadora con tarjeta MSI RTX con polvo' },
    despues: { src: msiPcDespues, alt: 'Después: computadora con tarjeta MSI RTX limpia y con luces encendidas' },
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
  { tipo: 'single', titulo: 'Filtro frontal tapado de polvo', foto: { src: filtro, alt: 'Filtro frontal de una computadora cubierto de polvo antes de la limpieza' } },
  { tipo: 'single', titulo: 'Computadora armada de alta gama', foto: { src: pcArmada, alt: 'Computadora armada de alta gama' } },
  { tipo: 'single', titulo: 'Limpieza de equipo gaming', foto: { src: gabinete, alt: 'Limpieza y personalización de equipo gaming' } },
]
