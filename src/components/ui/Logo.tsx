type LogoProps = {
  symbolHeight?: number
  className?: string
}

export function Logo({ symbolHeight = 44, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <img
        src="/assets/simbolo.svg"
        alt="Símbolo Ñ — Espanhol das Ruas"
        height={symbolHeight}
        className="block h-auto w-auto"
        style={{ height: symbolHeight }}
      />
      <div
        className="leading-[0.92]"
        style={{ fontFamily: 'var(--fonte-display)', fontWeight: 800, letterSpacing: '0.02em' }}
      >
        <span className="block text-[18px] text-off-white">ESPANHOL</span>
        <span className="flex gap-1.5 text-[18px]">
          <em className="not-italic text-texto-roxo">DAS</em>
          <em className="not-italic text-vermelho-rubi">RUAS</em>
        </span>
      </div>
    </div>
  )
}
