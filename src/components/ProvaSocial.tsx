import { Eyebrow } from './ui/Eyebrow'
import { PREPLY_REVIEWS_URL } from '../lib/constants'

const testimonials = [
  {
    quote:
      'Se liga, eu tava precisando aprender o idioma rapidamente pra uma vaga e ele estudou jargões da área e trouxe logo na nossa primeira aula. A metologia é adequada ao cliente então se você precisar de algo mais técnico, acadêmico, corporativo ou cotidiano é só alinhar com ele. Super recomendo!',
    author: 'Emmanuel R.',
  },
  {
    quote:
      'Ótimo professor! As aulas são bem focadas na conversação, o que ajuda muito a destravar a fala e ganhar confiança no espanhol.',
    author: 'Guilherme',
  },
  {
    quote:
      'Aula muito dinamica e divertida, gosto do foco em pratica de conversação.',
    author: 'Ramon',
  },
]

export function ProvaSocial() {
  return (
    <section id="depoimentos" className="bg-superficie-lua px-[5%] py-[clamp(60px,8vw,120px)]">
      <div className="section-inner">
        <Eyebrow>— O QUE DIZEM</Eyebrow>
        <h2
          className="mt-4 mb-12 text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] text-off-white"
          style={{ fontFamily: 'var(--fonte-display)', fontWeight: 800 }}
        >
          Quem entrou, ficou.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, author }) => (
            <article key={author} className="testimonial-card">
              <blockquote className="testimonial-quote m-0">{quote}</blockquote>
              <cite className="testimonial-author not-italic">— {author}</cite>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center text-[13px] text-texto-fraco"
          style={{ fontFamily: 'var(--fonte-mono)', letterSpacing: '0.06em' }}
        >
          Depoimentos de alunos via{' '}
          <a
            href={PREPLY_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dourado-sutil underline decoration-dourado-sutil/40 underline-offset-[3px] transition-colors duration-150 hover:text-off-white hover:decoration-off-white/50"
          >
            Preply
          </a>
          {' '}—{' '}
          <a
            href={PREPLY_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-texto-medio underline decoration-linha-sutil underline-offset-[3px] transition-colors duration-150 hover:text-off-white"
          >
            consultar mais avaliações
          </a>
        </p>
      </div>
    </section>
  )
}
