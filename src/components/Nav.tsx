import { Logo } from './ui/Logo'
import { Button } from './ui/Button'
import { DISCORD_INVITE_URL } from '../lib/constants'

const links = [
  { href: '#como', label: 'Como funciona' },
  { href: '#footer', label: 'Planos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#comunidade', label: 'Discord' },
]

export function Nav() {
  return (
    <nav className="eor-nav nav-reveal fixed inset-x-0 top-0 z-[100] flex w-full items-center justify-between border-b border-linha-sutil bg-[rgba(11,11,15,0.88)] px-[5%] py-[18px] backdrop-blur-[14px]">
      <div className="eor-logo">
        <Logo />
      </div>

      <ul className="eor-nav__links hidden list-none flex-wrap items-center gap-[34px] md:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-[15px] font-medium tracking-[0.01em] text-texto-medio no-underline transition-[color] duration-150 hover:text-off-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <Button size="sm" href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
        Entrar na comunidade
      </Button>
    </nav>
  )
}
