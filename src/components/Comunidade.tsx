import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from './ui/Eyebrow'
import { Button } from './ui/Button'
import { DISCORD_INVITE_URL } from '../lib/constants'

type FeedMessage = {
  id: number
  init: string
  name: string
  text: string
  minutesAgo: number
}

const TICKER_TARGET = 300
const MAX_MESSAGES = 5
const ROTATE_INTERVAL = 4000

const initialMessages: Omit<FeedMessage, 'id'>[] = [
  { init: 'L', name: 'Lucas M.', text: 'alguien vio Narcos Mexico? el acento es muy diferente 👀', minutesAgo: 0 },
  { init: 'F', name: 'Fernanda R.', text: 'sí! y la jerga de los 90s es muy diferente de hoy', minutesAgo: 1 },
  { init: 'R', name: 'Rodrigo T.', text: '¿cuál dialecto les parece más difícil de entender?', minutesAgo: 2 },
  { init: 'A', name: 'Ana C.', text: 'para mí el rioplatense! el voseo me confunde jajaja', minutesAgo: 3 },
  { init: 'T', name: 'Thiago N.', text: 'la profe corrigió mi pronunciación en tiempo real 👌', minutesAgo: 4 },
]

const messagePool: Omit<FeedMessage, 'id' | 'minutesAgo'>[] = [
  { init: 'M', name: 'Mariana P.', text: '¿probaron hablar con nativos por acá? 🔥' },
  { init: 'G', name: 'Gabriel S.', text: 'hoy aprendí 3 modismos nuevos en la clase en vivo' },
  { init: 'C', name: 'Camila L.', text: 'el subjuntivo me mató pero ya lo entendí jaja' },
  { init: 'D', name: 'Diego F.', text: '¿alguien quiere practicar conmigo esta tarde?' },
  { init: 'J', name: 'Julia W.', text: 'ya entiendo casi todo en Rebelde sin subtítulos' },
  { init: 'B', name: 'Bruno K.', text: 'alguien más confunde ser y estar todo el tiempo? jaja' },
  { init: 'P', name: 'Paula S.', text: '¡hoy hablé 20 minutos seguidos en español! 🎉' },
]

let nextMessageId = 0

function createMessage(data: Omit<FeedMessage, 'id'>): FeedMessage {
  nextMessageId += 1
  return { id: nextMessageId, ...data }
}

function formatTime(minutesAgo: number) {
  return minutesAgo === 0 ? 'agora' : `${minutesAgo} min`
}

export function Comunidade() {
  const sectionRef = useRef<HTMLElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const poolIndexRef = useRef(0)
  const hasAnimatedRef = useRef(false)
  const rafRef = useRef(0)

  const [count, setCount] = useState(0)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [messages, setMessages] = useState<FeedMessage[]>(() =>
    initialMessages.map((msg) => createMessage(msg)),
  )

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) return

        hasAnimatedRef.current = true
        const duration = 1800
        const start = performance.now()

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setCount(Math.round(eased * TICKER_TARGET))
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(step)
          }
        }

        rafRef.current = requestAnimationFrame(step)
      },
      { threshold: 0.55, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(ticker)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isSectionVisible) return

    const interval = window.setInterval(() => {
      setMessages((current) => {
        const advanced = current.map((msg) => ({
          ...msg,
          minutesAgo: msg.minutesAgo + 1,
        }))

        const next = messagePool[poolIndexRef.current % messagePool.length]
        poolIndexRef.current += 1

        const incoming = createMessage({
          init: next.init,
          name: next.name,
          text: next.text,
          minutesAgo: 0,
        })

        return [incoming, ...advanced].slice(0, MAX_MESSAGES)
      })
    }, ROTATE_INTERVAL)

    return () => window.clearInterval(interval)
  }, [isSectionVisible])

  return (
    <section ref={sectionRef} id="comunidade" className="discord-banner">
      <div className="discord-banner__inner section-inner">
        <div className="discord-banner__left">
          <Eyebrow className="mb-7">— Comunidade ativa</Eyebrow>

          <div ref={tickerRef} className="ticker-wrap">
            <div className="ticker-num">
              <span className="plus">+</span>
              <span>{count}</span>
            </div>
            <div className="ticker-label">mensagens por dia</div>
          </div>

          <div className="disc-divider" />

          <p className="discord-banner__desc">
            Todo dia, brasileiros discutindo séries, músicas e gírias em espanhol. Entra na sala e
            fala de verdade — desde o primeiro dia.
          </p>

          <p className="discord-banner__meta mt-4">
            * Média de comunidades ativas de idiomas no Discord
          </p>
        </div>

        <div className="discord-banner__right">
          <div className="live-badge">
            <span className="live-dot" aria-hidden />
            Sala ativa agora
          </div>

          <div className="msg-feed">
            {messages.map((msg) => (
              <div key={msg.id} className="msg-bubble">
                <div className="msg-avatar">{msg.init}</div>
                <div className="msg-body">
                  <div className="msg-author">{msg.name}</div>
                  <div className="msg-text">{msg.text}</div>
                </div>
                <div className="msg-time">{formatTime(msg.minutesAgo)}</div>
              </div>
            ))}
          </div>

          <Button
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="discord-banner__cta"
          >
            Entrar na comunidade →
          </Button>
        </div>
      </div>
    </section>
  )
}
