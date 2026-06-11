type SkylineProps = {
  opacity?: number
  className?: string
  style?: React.CSSProperties
}

export function Skyline({ opacity = 0.9, className = '', style }: SkylineProps) {
  return (
    <img
      src="/assets/skyline.svg"
      alt=""
      aria-hidden
      className={`pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[210px] w-full object-cover ${className}`.trim()}
      style={{ opacity, ...style }}
    />
  )
}
