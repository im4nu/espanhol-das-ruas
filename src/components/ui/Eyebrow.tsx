type EyebrowProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <div className={`eyebrow ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
