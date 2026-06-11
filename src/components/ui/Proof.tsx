type ProofProps = {
  count?: string
}

export function Proof({ count = '811' }: ProofProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-[30px] w-[118px]">
        {[0, 22, 44, 66].map((left) => (
          <span key={left} className="eor-dot" style={{ left }} />
        ))}
      </div>
      <div>
        <strong
          className="block text-[17px] leading-none text-off-white"
          style={{ fontFamily: 'var(--fonte-display)', fontWeight: 700 }}
        >
          {count} membros ativos
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
