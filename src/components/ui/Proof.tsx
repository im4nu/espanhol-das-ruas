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
    <div className="eor-proof flex max-w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
      <div className="eor-dots shrink-0">
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
      <div className="min-w-0">
        <strong
          className="block text-[17px] leading-snug text-off-white sm:leading-none"
          style={{ fontFamily: 'var(--fonte-display)', fontWeight: 700 }}
        >
          Mais de 300 mensagens por dia
        </strong>
        <span
          className="mt-1 block text-[12px] leading-normal tracking-[0.04em] text-texto-fraco"
          style={{ fontFamily: 'var(--fonte-mono)' }}
        >
          Sala ativa todo dia no Discord · do zero à fluência real
        </span>
      </div>
    </div>
  )
}
