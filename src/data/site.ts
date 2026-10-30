export const WHATSAPP_NUMBER = '50661850450'
export const WHATSAPP_DISPLAY = '6185-0450'
export const INSTAGRAM_URL = 'https://www.instagram.com/systems.jc/'
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61589594553432'

/** WhatsApp link, optionally with a message already typed for the customer. */
export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const NAV = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'licencias', label: 'Licencias' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'equipos', label: 'Equipos' },
  { id: 'contacto', label: 'Contacto' },
] as const
