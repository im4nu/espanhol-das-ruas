import { Eyebrow } from './ui/Eyebrow'
import { Button } from './ui/Button'
import { Proof } from './ui/Proof'
import { Skyline } from './ui/Skyline'
import { DISCORD_INVITE_URL } from '../lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-preto-asfalto text-off-white"
      style={{
        background:
          'radial-gradient(120% 90% at 50% -10%, rgba(123,44,255,0.10), transparent 55%), var(--preto-asfalto)',
      }}
    >
      <img
        src="/assets/simbolo.svg"
        alt="Espanhol das Ruas"
        className="eor-poster-symbol hero-reveal hero-reveal--poster pointer-events-none absolute right-[-130px] top-[54%] z-[1] hidden h-[72vh] md:block"
        style={{
          filter: 'drop-shadow(0 0 60px rgba(187,15,45,0.4))',
          '--hero-delay': '200ms',
        } as React.CSSProperties}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[8%] z-0 -translate-x-1/2 md:hidden"
        aria-hidden
      >
        <img
          src="/assets/simbolo.svg"
          alt=""
          className="hero-reveal hero-reveal--faint h-[40vh] max-h-[320px] w-auto max-w-none"
          style={{ '--hero-delay': '0ms' } as React.CSSProperties}
        />
      </div>

      <div className="relative z-[3] flex min-h-[calc(100svh-80px)] flex-col justify-center px-[5%] py-16 md:max-w-[1000px] md:py-0">
        <Eyebrow className="hero-reveal mb-6" style={{ '--hero-delay': '80ms' } as React.CSSProperties}>
          Comunidade no Discord
        </Eyebrow>

        <h1
          className="hero-reveal m-0 uppercase leading-[0.84] tracking-[0.005em] text-off-white"
          style={{
            fontFamily: 'var(--fonte-display)',
            fontWeight: 900,
            fontSize: 'clamp(3.2rem, 12vw, 9rem)',
            '--hero-delay': '160ms',
          } as React.CSSProperties}
        >
          DE ZERO
          <br />
          <span className="text-dourado-sutil">A</span>{' '}
          <span className="text-texto-roxo">HABLANTE</span>
        </h1>

        <div
          className="hero-reveal my-6 h-0.5 w-[190px] bg-dourado-sutil"
          style={{ '--hero-delay': '240ms' } as React.CSSProperties}
        />

        <p
          className="hero-reveal m-0 max-w-[520px] text-xl leading-normal text-texto-medio"
          style={{ '--hero-delay': '320ms' } as React.CSSProperties}
        >
          O espanhol de verdade, do dia a dia. Entre na sala, treine na prática e saia falando.
        </p>

        <div
          className="hero-reveal mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          style={{ '--hero-delay': '400ms' } as React.CSSProperties}
        >
          <Button href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
            Entrar na comunidade
          </Button>
          <Button variant="ghost" href="#como">
            Ver como funciona →
          </Button>
        </div>

        <div className="hero-reveal mt-10" style={{ '--hero-delay': '480ms' } as React.CSSProperties}>
          <Proof />
        </div>
      </div>

      <Skyline opacity={0.6} />
    </section>
  )
}
