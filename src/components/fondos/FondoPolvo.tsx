import { useEffect, useRef } from 'react'

type Particula = { x: number; y: number; r: number; vx: number; vy: number; vida: number; max: number }

// Fine dust drifting up and fading out, drawn on a canvas so dozens of specks stay cheap.
export function FondoPolvo() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let w = 0
    let h = 0
    let particulas: Particula[] = []
    const nueva = (alAzar: boolean): Particula => ({
      x: Math.random() * w,
      y: alAzar ? Math.random() * h : h + 10,
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(0.1 + Math.random() * 0.3),
      vida: alAzar ? Math.random() * 600 : 0,
      max: 500 + Math.random() * 500,
    })
    const medir = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const cantidad = w < 640 ? 30 : 70
      particulas = Array.from({ length: cantidad }, () => nueva(true))
    }
    medir()
    window.addEventListener('resize', medir)

    let frame = 0
    const dibujar = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particulas) {
        p.x += p.vx + Math.sin((p.vida + p.max) / 60) * 0.12
        p.y += p.vy
        p.vida += 1
        if (p.vida > p.max || p.y < -10) Object.assign(p, nueva(false))
        // fade in, hold, fade out across the particle's life
        const t = p.vida / p.max
        const alfa = Math.min(t * 4, 1, (1 - t) * 4) * 0.55
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190, 205, 230, ${alfa})`
        ctx.fill()
      }
      frame = requestAnimationFrame(dibujar)
    }
    frame = requestAnimationFrame(dibujar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', medir)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />
}
