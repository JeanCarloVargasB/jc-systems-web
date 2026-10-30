import { Gamepad2, Monitor, ShieldCheck, ShoppingBag, Wrench, type LucideIcon } from 'lucide-react'

export type Servicio = { icon: LucideIcon; titulo: string; texto: string }

export const SERVICIOS: Servicio[] = [
  {
    icon: Monitor,
    titulo: 'Reparación de computadoras',
    texto: 'Diagnóstico, limpieza interna, cambio de piezas y optimización para equipos de escritorio y laptop.',
  },
  {
    icon: Wrench,
    titulo: 'Mantenimiento preventivo',
    texto: 'Limpieza interna, cambio de pasta térmica y revisión periódica para que tu equipo no pierda rendimiento.',
  },
  {
    icon: Gamepad2,
    titulo: 'Mantenimiento PS4 y PS5',
    texto: 'Limpieza interna profunda y cambio de pasta térmica para que tu consola vuelva a correr silenciosa y fresca.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Software con licencia original',
    texto: 'Instalación de Windows, Office Pro Plus / 365, Autodesk y antivirus, todo con activación 100% legítima.',
  },
  {
    icon: ShoppingBag,
    titulo: 'Venta de equipos',
    texto: 'Computadoras y laptops nuevos y de segunda mano, revisados y listos para trabajar o jugar.',
  },
]
