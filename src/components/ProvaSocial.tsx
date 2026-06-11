import { Eyebrow } from './ui/Eyebrow'

const testimonials = [
  {
    quote:
      'Travei 3 anos no Duolingo. Aqui falei espanhol de verdade na primeira semana.',
    author: 'Lucas M., São Paulo',
  },
  {
    quote:
      'A sala ao vivo muda tudo. Você aprende errando, sem vergonha, com gente legal.',
    author: 'Fernanda R., Belo Horizonte',
  },
  {
    quote:
      'Pensei que seria igual a curso normal. Não é. O método é prático e direto ao ponto.',
    author: 'Rodrigo T., Porto Alegre',
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
      </div>
    </section>
  )
}
