import { Logo } from './ui/Logo'
import { Button } from './ui/Button'
import { Skyline } from './ui/Skyline'
import { DISCORD_INVITE_URL } from '../lib/constants'

const footerLinks = [
  { href: '#como', label: 'Como funciona' },
  { href: '#footer', label: 'Planos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#comunidade', label: 'Discord' },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-linha-dourada bg-preto-asfalto px-[5%] py-[clamp(60px,8vw,120px)]"
    >
      <div className="section-inner relative z-[1] grid grid-cols-1 items-start gap-12 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Logo />
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {footerLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[15px] text-texto-medio no-underline transition-colors duration-150 hover:text-off-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <Button
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[320px] md:w-auto"
          >
            Entrar na comunidade
          </Button>
        </div>
      </div>

      <p
        className="relative z-[1] mt-16 text-center text-[12px] text-texto-fraco"
        style={{ fontFamily: 'var(--fonte-mono)' }}
      >
        © {new Date().getFullYear()} Espanhol das Ruas. Todos os direitos reservados.
      </p>

      <Skyline opacity={0.3} />
    </footer>
  )
}
