import { useEffect, useState } from 'react'

const SPLASH_DURATION_MS = 1250
const EXIT_DURATION_MS = 400

type SplashScreenProps = {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const start = performance.now()
    let raf = 0
    let exitTimeout = 0

    const tick = (now: number) => {
      const elapsed = Math.min(now - start, SPLASH_DURATION_MS)
      setProgress((elapsed / SPLASH_DURATION_MS) * 100)

      if (elapsed < SPLASH_DURATION_MS) {
        raf = requestAnimationFrame(tick)
        return
      }

      setExiting(true)
      exitTimeout = window.setTimeout(() => {
        onComplete()
        document.body.style.overflow = ''
      }, EXIT_DURATION_MS)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(exitTimeout)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      className={`splash${exiting ? ' splash--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Carregando"
    >
      <img
        src="/assets/simbolo.svg"
        alt="Espanhol das Ruas"
        className="splash__logo"
        draggable={false}
      />

      <div className="splash__progress-track" aria-hidden>
        <div className="splash__progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
