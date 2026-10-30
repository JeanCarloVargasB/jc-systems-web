import { FileSpreadsheet, KeyRound, Palette, Server, Shield, type LucideIcon } from 'lucide-react'

export type CategoriaLicencia = {
  icon: LucideIcon
  nombre: string
  productos: string[]
  garantia: string
  mensaje: string
}

// Main categories only (no prices): each card sends a pre-written WhatsApp message.
export const CATEGORIAS: CategoriaLicencia[] = [
  {
    icon: KeyRound,
    nombre: 'Windows',
    productos: ['Windows 11 Pro', 'Windows 11 Home', 'Windows Server 2016–2022'],
    garantia: 'Licencia permanente · garantía de 30 días',
    mensaje: 'Hola, me interesa una licencia de Windows.',
  },
  {
    icon: FileSpreadsheet,
    nombre: 'Office y Microsoft 365',
    productos: ['Office 2021 y 2024 Pro Plus', 'Microsoft 365 (1 año)', 'Office para Mac'],
    garantia: 'Office permanente o 365 por suscripción',
    mensaje: 'Hola, me interesa una licencia de Office / Microsoft 365.',
  },
  {
    icon: Shield,
    nombre: 'Antivirus',
    productos: ['Bitdefender', 'ESET', 'Kaspersky', 'McAfee', 'Avast', 'Trend Micro'],
    garantia: 'Suscripción de 1 año, de 1 a 10 equipos',
    mensaje: 'Hola, me interesa una licencia de antivirus.',
  },
  {
    icon: Palette,
    nombre: 'Diseño e ingeniería',
    productos: ['Autodesk (todas las apps)', 'Adobe Creative Cloud', 'Adobe Acrobat Pro', 'CorelDRAW'],
    garantia: 'Garantía por todo el tiempo de uso en Autodesk y Adobe',
    mensaje: 'Hola, me interesa una licencia de Autodesk / Adobe / CorelDRAW.',
  },
  {
    icon: Server,
    nombre: 'Project, Visio y SQL',
    productos: ['Project Professional', 'Visio Professional', 'SQL Server Standard'],
    garantia: 'Licencia permanente · garantía de 30 días',
    mensaje: 'Hola, me interesa una licencia de Project / Visio / SQL Server.',
  },
]
