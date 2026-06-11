# Design System — Espanhol das Ruas

Identidade visual da comunidade de espanhol para brasileiros no Discord.

**Vibe:** animação clássica + Art Déco noturno. A cidade como pano de fundo, a Ñ como monumento.

> Simples · Icônico · Sombrio · Urbano

---

## Onde os tokens vivem

Todos os tokens estão em [`src/index.css`](../src/index.css):

- bloco `@theme` — cores e fontes expostas ao Tailwind (`bg-roxo-noturno`, `text-dourado-sutil`, etc.)
- bloco `:root` — variáveis CSS usadas em componentes (`.btn`, animações, etc.)

**Não** recriar `tokens.css` na raiz. Novas cores ou fontes entram em `src/index.css`.

---

## Paleta oficial

| Token | Nome | HEX / valor | Uso |
|---|---|---|---|
| `--preto-asfalto` | Preto Asfalto | `#0B0B0F` | Fundo base |
| `--roxo-noturno` | Roxo Noturno | `#7B2CFF` | Primária — botões, ações |
| `--vermelho-rubi` | Vermelho Rubi | `#BB0F2D` | Energia, acentos, lua |
| `--dourado-sutil` | Dourado Sutil | `#D4B46A` | Contornos, linhas déco |
| `--off-white` | Off-White | `#F2F2F2` | Texto principal |

### Superfícies

| Token | HEX | Uso |
|---|---|---|
| `--superficie-1` | `#131019` | Cards, banner Discord |
| `--superficie-2` | `#1B1626` | Cards elevados, bolhas de mensagem |
| `--superficie-lua` | `#2A0A12` | Fundo da seção de depoimentos |

### Texto e linhas

| Token | Valor |
|---|---|
| `--texto-roxo` | `#A875FF` |
| `--texto-medio` | `rgba(242,242,242,0.72)` |
| `--texto-fraco` | `rgba(242,242,242,0.50)` |
| `--linha-dourada` | `rgba(212,180,106,0.45)` |
| `--linha-sutil` | `rgba(242,242,242,0.12)` |

---

## Tipografia

Fontes carregadas em [`index.html`](../index.html) via Google Fonts:

| Família | Peso | Uso |
|---|---|---|
| **Big Shoulders Display** | 500–900 | Títulos, CTAs, números (display) |
| **Archivo** | 400–700 | Corpo de texto e UI |
| **Space Mono** | 400–700 | Eyebrows, tags, metadados |

### Variáveis CSS

```css
--fonte-display  /* Big Shoulders Display */
--fonte-corpo      /* Archivo */
--fonte-mono       /* Space Mono */
```

### Regras

- **Nunca** usar Inter, Roboto ou Arial como fonte de display.
- Títulos de destaque em uppercase com Big Shoulders Display.
- Eyebrows sempre em Space Mono, `letter-spacing: 0.22em`, cor dourada.

---

## Logo e assets

Arquivos em `public/assets/`:

| Arquivo | Uso |
|---|---|
| `simbolo.svg` | Logo principal (Nav, Hero, Splash, favicon) |
| `skyline.svg` | Faixa decorativa wireframe roxo (Hero, Footer) |

Referência no código: `/assets/simbolo.svg` e `/assets/skyline.svg`.

### Lockup tipográfico

O nome **ESPANHOL DAS RUAS** é renderizado como texto (componente `Logo`):

- linha 1: ESPANHOL — off-white
- linha 2: DAS (roxo) + RUAS (rubi)

### Regras de uso do logo

- Manter contraste suficiente para legibilidade
- O símbolo funciona sozinho (avatar, favicon)
- Respeitar a paleta oficial
- Não distorcer nem alterar proporções
- **Não** aplicar gradientes, sombras ou efeitos sobre o símbolo SVG

Efeitos de `drop-shadow` e `filter` no layout da página (Hero) são permitidos no contexto da página, não no arquivo da marca.

---

## Componentes CSS (`@layer components`)

Definidos em `src/index.css`. Preferir reutilizar antes de criar estilos novos.

| Classe | Uso |
|---|---|
| `.section-inner` | Container max 1200px centralizado |
| `.eyebrow` | Label de seção (mono, dourado, uppercase) |
| `.btn` / `.btn--primary` / `.btn--ghost` / `.btn--sm` | Botões |
| `.pillar-card` | Cards da seção "Como funciona" |
| `.testimonial-card` / `.testimonial-quote` | Depoimentos |
| `.discord-banner` e filhos | Seção comunidade Discord |
| `.hero-reveal` / `.nav-reveal` | Animações de entrada |
| `.back-to-top` | Botão voltar ao topo |

### Componentes React em `src/components/ui/`

| Componente | Descrição |
|---|---|
| `Button` | Botão ou link estilizado (`href` opcional) |
| `Eyebrow` | Label de seção |
| `Logo` | Símbolo + lockup tipográfico |
| `Proof` | Bolinhas + contagem de membros |
| `Skyline` | Imagem decorativa de skyline |

---

## Regras gerais de UI

- Fundo base: `var(--preto-asfalto)`
- Texto principal: `var(--off-white)` sobre fundos escuros
- Roxo noturno para ações e destaques
- Dourado sutil em contornos finos e detalhes déco
- Superfícies sólidas — sem gradientes decorativos na marca
- Animações de hover em botões: `0.18s ease`
- Seções: `padding: clamp(60px, 8vw, 120px) 5%`
- Breakpoints Tailwind padrão: `md` (768px), `lg` (1024px)
