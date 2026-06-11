import { Eyebrow } from './ui/Eyebrow'

const pillars = [
  {
    icon: 'Ñ',
    iconClass: 'text-roxo-noturno',
    title: 'Aulas ao vivo',
    description:
      'Toda semana, conversação guiada com correção na hora. Você fala desde o primeiro dia.',
  },
  {
    icon: '↗',
    iconClass: 'text-dourado-sutil',
    title: 'Comunidade ativa',
    description:
      'Mais de 300 mensagens por dia no Discord — exercícios, dúvidas e cultura do dia a dia.',
  },
  {
    icon: '▲',
    iconClass: 'text-vermelho-rubi',
    title: 'Método do zero',
    description:
      'Do absoluto zero à fluência. Estrutura clara, sem enrolação, sem apostila.',
  },
]

export function ComoFunciona() {
  return (
    <section id="como" className="px-[5%] py-[clamp(60px,8vw,120px)]">
      <div className="section-inner">
        <Eyebrow>— COMO FUNCIONA</Eyebrow>
        <h2
          className="mt-4 mb-12 text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] text-off-white"
          style={{ fontFamily: 'var(--fonte-display)', fontWeight: 800 }}
        >
          Três pilares, uma fluência real.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ icon, iconClass, title, description }) => (
            <article key={title} className="pillar-card">
              <span
                className={`text-[42px] leading-none font-black ${iconClass}`}
                style={{ fontFamily: 'var(--fonte-display)' }}
              >
                {icon}
              </span>
              <h3
                className="text-[22px] font-bold uppercase tracking-[0.02em] text-off-white"
                style={{ fontFamily: 'var(--fonte-display)' }}
              >
                {title}
              </h3>
              <p className="m-0 text-base leading-[1.55] text-texto-medio">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
