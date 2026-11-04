import { useEffect, useRef } from 'react'

export default function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = window.innerWidth
    let height = window.innerHeight
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }
    resizeCanvas()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140,
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Particle nodes setup
    const particleCount = Math.min(Math.floor((width * height) / 30000), 42)
    const particles = []

    // Cyan and Green colors matching Rayqon AI logo
    const colors = [
      { r: 56, g: 189, b: 248 }, // Cyan #38bdf8
      { r: 2, g: 132, b: 199 },  // Blue #0284c7
      { r: 34, g: 197, b: 94 },  // Green #22c55e
      { r: 16, g: 185, b: 129 }, // Emerald #10b981
    ]

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        color: color,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI,
      })
    }

    // Connect distance
    const maxDistance = 145

    let lastFrame = 0
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const render = (timestamp = 0) => {
      if (!reducedMotion && timestamp - lastFrame < 40) {
        animationFrameId = requestAnimationFrame(render)
        return
      }
      lastFrame = timestamp
      ctx.clearRect(0, 0, width, height)
      const isLightTheme = document.documentElement.dataset.theme === 'light'

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.pulseVal += p.pulseSpeed

        // Bounce from walls
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse interaction (gentle attraction / hover push)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5
            if (dist > 0) {
              p.x += (dx / dist) * force * 0.8
              p.y += (dy / dist) * force * 0.8
            }
          }
        }

        const currentRadius = p.radius + Math.sin(p.pulseVal) * 0.6

        // Draw particle node with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.8, currentRadius), 0, Math.PI * 2)
        const particleColor = isLightTheme ? { r: 75, g: 132, b: 79 } : p.color
        ctx.globalAlpha = isLightTheme ? 0.72 : 1
        ctx.fillStyle = `rgb(${particleColor.r}, ${particleColor.g}, ${particleColor.b})`
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < maxDistance * maxDistance) {
            const alpha = (1 - Math.sqrt(distanceSquared) / maxDistance) * (isLightTheme ? 0.4 : 0.32)

            ctx.beginPath()
            ctx.strokeStyle = isLightTheme ? `rgba(58,125,73,${alpha})` : `rgba(${p1.color.r},${p1.color.g},${p1.color.b},${alpha})`
            ctx.lineWidth = 1
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Connect to mouse if close
        if (mouse.x !== null && mouse.y !== null) {
          const p = particles[i]
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45
            ctx.beginPath()
            ctx.strokeStyle = isLightTheme ? `rgba(58, 125, 73, ${alpha})` : `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 1.2
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      if (!reducedMotion && !document.hidden) animationFrameId = requestAnimationFrame(render)
    }

    render()
    const handleVisibility = () => {
      cancelAnimationFrame(animationFrameId)
      if (!document.hidden && !reducedMotion) animationFrameId = requestAnimationFrame(render)
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="neural-background fixed inset-0 pointer-events-none z-0 opacity-25"
      style={{ display: 'block' }}
    />
  )
}
