const AVATAR_OFFSET = 22

const avatars = [
  { type: 'image' as const, src: '/assets/client_emmanuel.jpg', alt: 'Emmanuel' },
  { type: 'initial' as const, letter: 'G' },
  { type: 'image' as const, src: '/assets/client_ramon.jpg', alt: 'Ramon' },
  { type: 'initial' as const, letter: 'C' },
  { type: 'initial' as const, letter: 'E' },
]

export function Proof() {
  return (
    <div className="flex items-center gap-4">
      <div className="eor-dots">
        {avatars.map((avatar, index) => (
          <span
            key={index}
            className={`eor-dot ${avatar.type === 'initial' ? 'eor-dot--initial' : 'eor-dot--photo'}`}
            style={{ left: index * AVATAR_OFFSET }}
          >
            {avatar.type === 'image' ? (
              <img src={avatar.src} alt={avatar.alt} draggable={false} />
            ) : (
              avatar.letter
            )}
          </span>
        ))}
      </div>
      <div>
        <strong
          className="block text-[17px] leading-none text-off-white"
          style={{ fontFamily: 'var(--fonte-display)', fontWeight: 700 }}
        >
          Mais de 300 mensagens por dia
        </strong>
        <span
          className="text-[12px] tracking-[0.04em] text-texto-fraco"
          style={{ fontFamily: 'var(--fonte-mono)' }}
        >
          Sala ativa todo dia no Discord · do zero à fluência real
        </span>
      </div>
    </div>
  )
}
