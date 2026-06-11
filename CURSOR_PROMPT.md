# Cursor Prompt — Landing Page · Espanhol das Ruas

## Contexto

Espanhol das Ruas é uma comunidade no Discord de espanhol para brasileiros.
Método prático, do zero à fluência real. Sem cara de cursinho.
Vibe visual: **animação clássica Art Déco noturno** (Batman TAS, cartaz urbano, noir).
A grande promessa: **"De zero a hablante — do jeito que o espanhol é falado de verdade"**.

---

## Arquivos do design system (já prontos no projeto)

```
tokens.css                       → variáveis de cor, fonte, espaçamento — USAR TUDO DAQUI
hero-styles.css                  → estilos da hero (referência)
assets/skyline.svg               → skyline wireframe roxo (decorativo)
assets/logo/simbolo.svg          → símbolo Ñ colorido (logo principal)
assets/logo/simbolo-mono-offwhite.svg
assets/logo/simbolo-mono-preto.svg
```

Importe no `<head>` de todas as páginas:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800;900&family=Archivo:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="tokens.css">
```

---

## Tokens essenciais (de tokens.css)

```css
--preto-asfalto:  #0B0B0F   /* fundo base */
--roxo-noturno:   #7B2CFF   /* primária — botões, destaques */
--vermelho-rubi:  #BB0F2D   /* energia, acentos */
--dourado-sutil:  #D4B46A   /* contornos finos, linhas déco */
--off-white:      #F2F2F2   /* texto principal */
--superficie-1:   #131019   /* cards */
--superficie-2:   #1B1626   /* cards elevados / hover */
--texto-medio:    rgba(242,242,242,0.72)
--texto-fraco:    rgba(242,242,242,0.50)
--linha-dourada:  rgba(212,180,106,0.45)
--linha-sutil:    rgba(242,242,242,0.12)

--fonte-display:  'Big Shoulders Display', Impact, 'Arial Narrow', sans-serif
--fonte-corpo:    'Archivo', system-ui, sans-serif
--fonte-mono:     'Space Mono', ui-monospace, monospace
```

---

## Estrutura da landing page

Arquivo: `index.html` (HTML + CSS puro, sem framework)

```
1. <header>  NAV
2. <section id="hero">     Hero — Cartaz Noturno
3. <section id="como">     Como funciona a comunidade (3 pilares)
4. <section id="prova">    Prova social — depoimentos + número de membros
5. <footer>                CTA final + links
```

Total de seções: **leve e direto**. Sem seção de preços por ora.

---

## Seção 1 — NAV

```html
<nav class="eor-nav">
  <!-- logo: imagem + lockup tipográfico -->
  <div class="eor-logo">
    <img src="assets/logo/simbolo.svg" alt="Espanhol das Ruas" height="44">
    <div class="eor-logo__word">
      <span class="l1">ESPANHOL</span>
      <span class="l2"><em class="roxo">DAS</em> <em class="rubi">RUAS</em></span>
    </div>
  </div>
  <!-- links centrais -->
  <ul class="eor-nav__links">
    <li><a href="#como">Como funciona</a></li>
    <li><a href="#prova">Comunidade</a></li>
    <li><a href="#footer">Planos</a></li>
  </ul>
  <!-- CTA -->
  <button class="btn btn--primary btn--sm">Entrar na comunidade</button>
</nav>
```

**CSS da NAV:**
- `position: sticky; top: 0; z-index: 100`
- `backdrop-filter: blur(14px)` + `background: rgba(11,11,15,.88)`
- `border-bottom: 1px solid var(--linha-sutil)`
- Flex, `justify-content: space-between`, padding `18px 5%`
- Em mobile (`< 768px`): links somem, só logo + botão

---

## Seção 2 — HERO (Cartaz Noturno — direção C)

**Layout:** largura total, altura `min-height: 100svh`.
Fundo: `var(--preto-asfalto)` + gradiente radial sutil roxo vindo do topo.
Skyline (`assets/skyline.svg`) como faixa decorativa na base, `position: absolute; bottom: 0`.

**Estrutura interna:**

```
[texto à esquerda]                   [símbolo à direita, sangrando na borda]
eyebrow mono dourado
H1 gigante condensado uppercase
  linha dourada fina (2px, 190px)
subtítulo corpo médio
CTAs (primário + ghost)
proof (bolinhas + "811 membros ativos")
```

**H1 (Big Shoulders Display, weight 900, ~9vw, line-height .84):**
```
DE ZERO
A HABLANTE
```
onde "A" é `var(--dourado-sutil)` e "HABLANTE" é `var(--texto-roxo)`.

**Bolinhas de prova social:**
```html
<div class="eor-proof">
  <div class="eor-dots">
    <!-- 4 círculos sobrepostos, gradiente roxo→rubi -->
    <span class="eor-dot" style="left:0"></span>
    <span class="eor-dot" style="left:22px"></span>
    <span class="eor-dot" style="left:44px"></span>
    <span class="eor-dot" style="left:66px"></span>
  </div>
  <div class="eor-proof__info">
    <strong>811 membros ativos</strong>
    <span>Sala ativa todo dia no Discord · do zero à fluência real</span>
  </div>
</div>
```
```css
.eor-dot {
  position: absolute; top: 0;
  width: 30px; height: 30px; border-radius: 50%;
  border: 2px solid var(--preto-asfalto);
  background: linear-gradient(135deg, var(--roxo-noturno), var(--vermelho-rubi));
}
.eor-proof__info strong {
  font-family: var(--fonte-display); font-weight: 700;
  font-size: 17px; color: var(--off-white); display: block; line-height: 1;
}
.eor-proof__info span {
  font-family: var(--fonte-mono); font-size: 12px;
  color: var(--texto-fraco); letter-spacing: .04em;
}
```

**Símbolo à direita:**
```css
.eor-poster-symbol {
  position: absolute; right: -130px; top: 54%; transform: translateY(-50%);
  height: 72vh; z-index: 1;
  filter: drop-shadow(0 0 60px rgba(187,15,45,.4));
}
```

**Responsivo da hero:**
- Mobile: símbolo fica `position: relative`, menor, centralizado acima do texto; layout vira coluna; H1 `~14vw`.

---

## Seção 3 — COMO FUNCIONA

**Eyebrow:** `— COMO FUNCIONA`
**Título:** `"Três pilares, uma fluência real."` (Big Shoulders Display, ~3.5rem)

**3 cards lado a lado** (grid `repeat(3, 1fr)`, gap `24px`):

| Ícone déco | Título | Descrição |
|---|---|---|
| `Ñ` em roxo | **Aulas ao vivo** | Toda semana, conversação guiada com correção na hora. Você fala desde o primeiro dia. |
| `↗` em dourado | **Comunidade ativa** | 811 membros conversando em espanhol no Discord — exercícios, dúvidas e cultura do dia a dia. |
| `▲` em rubi | **Método do zero** | Do absoluto zero à fluência. Estrutura clara, sem enrolação, sem apostila. |

**Estilo dos cards:**
```css
.pillar-card {
  background: var(--superficie-1);
  border: 1px solid var(--linha-sutil);
  border-radius: 12px;
  padding: 36px 30px;
  display: flex; flex-direction: column; gap: 16px;
  position: relative;
  overflow: hidden;
}
/* canto dourado decorativo */
.pillar-card::before {
  content: "";
  position: absolute; top: 0; left: 0;
  width: 40px; height: 2px;
  background: var(--dourado-sutil);
}
.pillar-card::after {
  content: "";
  position: absolute; top: 0; left: 0;
  width: 2px; height: 40px;
  background: var(--dourado-sutil);
}
.pillar-icon {
  font-family: var(--fonte-display);
  font-size: 42px; font-weight: 900;
  line-height: 1;
}
.pillar-title {
  font-family: var(--fonte-display);
  font-weight: 700; text-transform: uppercase;
  font-size: 22px; letter-spacing: .02em;
}
.pillar-desc {
  font-family: var(--fonte-corpo);
  font-size: 16px; color: var(--texto-medio); line-height: 1.55;
}
```

Mobile: coluna única.

---

## Seção 4 — PROVA SOCIAL

**Layout:** fundo `var(--superficie-lua)` (`#2A0A12`) pra dar contraste avermelhado escuro.

**Eyebrow:** `— O QUE DIZEM`
**Título:** `"Quem entrou, ficou."` (Big Shoulders Display)

**3 depoimentos** em grid `repeat(3,1fr)`:

```
"Travei 3 anos no Duolingo. Aqui falei espanhol de verdade na primeira semana."
— Lucas M., São Paulo

"A sala ao vivo muda tudo. Você aprende errando, sem vergonha, com gente legal."
— Fernanda R., Belo Horizonte

"Pensei que seria igual a curso normal. Não é. O método é prático e direto ao ponto."
— Rodrigo T., Porto Alegre
```

**Estilo dos cards de depoimento:**
```css
.testimonial-card {
  background: var(--superficie-1);
  border: 1px solid var(--linha-sutil);
  border-radius: 12px;
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 20px;
}
.testimonial-quote {
  font-family: var(--fonte-corpo);
  font-size: 17px; line-height: 1.6;
  color: var(--off-white);
  /* aspas decorativas */
  quotes: "\201C" "\201D";
}
.testimonial-quote::before { content: open-quote; font-family: var(--fonte-display); font-size: 48px; color: var(--dourado-sutil); line-height: 0; vertical-align: -18px; margin-right: 4px; }
.testimonial-author {
  font-family: var(--fonte-mono); font-size: 13px;
  color: var(--dourado-sutil); letter-spacing: .1em;
  text-transform: uppercase;
}
```

**Abaixo dos cards:** número em destaque centralizado:
```html
<div class="stat-block">
  <span class="stat-num">811</span>
  <span class="stat-label">brasileiros aprendendo espanhol de verdade</span>
</div>
```
```css
.stat-num {
  font-family: var(--fonte-display); font-weight: 900;
  font-size: clamp(5rem, 14vw, 10rem);
  color: transparent; -webkit-text-stroke: 2px var(--dourado-sutil);
  line-height: 1;
}
.stat-label {
  font-family: var(--fonte-mono); font-size: 14px;
  color: var(--texto-medio); letter-spacing: .2em; text-transform: uppercase;
}
```

Mobile: coluna única, número menor.

---

## Footer

**Fundo:** `var(--preto-asfalto)` + borda topo `1px solid var(--linha-dourada)`

**Layout:** 3 colunas no desktop → empilha no mobile

| Col 1 | Col 2 | Col 3 |
|---|---|---|
| Logo (símbolo + lockup) + tagline mono | Links: Como funciona · Comunidade · Discord · FAQ | CTA final: botão primário grande "Entrar na comunidade" |

**Skyline** repete como `position: absolute; bottom: 0` com `opacity: 0.3`.

**Copyright:** `font-family: var(--fonte-mono); font-size: 12px; color: var(--texto-fraco)` — linha central.

---

## Botões (referência)

```css
.btn {
  font-family: var(--fonte-display); font-weight: 700;
  text-transform: uppercase; letter-spacing: .045em;
  font-size: 18px; padding: 14px 26px;
  border-radius: 4px; cursor: pointer;
  border: 1px solid transparent; transition: .18s;
  line-height: 1; white-space: nowrap;
}
.btn--sm { font-size: 15px; padding: 11px 18px; }
.btn--primary {
  background: var(--roxo-noturno); color: var(--off-white);
  border-color: var(--dourado-sutil);
}
.btn--primary:hover {
  background: #8d45ff;
  box-shadow: 0 10px 34px -10px rgba(123,44,255,.35);
  transform: translateY(-1px);
}
.btn--ghost {
  background: transparent; color: var(--off-white);
  border-color: rgba(212,180,106,.45);
}
.btn--ghost:hover { border-color: var(--dourado-sutil); color: var(--dourado-sutil); }
```

---

## Eyebrow (referência)

```html
<div class="eyebrow">— SEÇÃO NOME</div>
```
```css
.eyebrow {
  font-family: var(--fonte-mono); font-size: 13px;
  letter-spacing: .22em; text-transform: uppercase;
  color: var(--dourado-sutil);
}
```

---

## Responsivo — breakpoints

```css
/* Mobile first */
@media (min-width: 768px)  { /* tablet: 2 cols onde couber */ }
@media (min-width: 1024px) { /* desktop: layout completo */ }
```

Regras obrigatórias de responsivo:
- NAV: mobile só logo + botão, sem links
- Hero: símbolo vira decoração de fundo com `opacity: .15` no mobile, texto ocupa 100%
- H1 do hero: `font-size: clamp(3.2rem, 12vw, 9rem)`
- Cards 3 colunas → 1 coluna em mobile
- Footer: coluna única centralizada

---

## Regras gerais

- Todo texto em `color: var(--off-white)` sobre `var(--preto-asfalto)`
- `font-family: var(--fonte-corpo)` no `body`
- `-webkit-font-smoothing: antialiased` no `html`
- Seções com `padding: clamp(60px, 8vw, 120px) 5%`
- `max-width: 1200px; margin: 0 auto` nos conteúdos internos
- Sem gradientes decorativos na marca
- Só fundos sólidos nas superfícies (preto asfalto, superfície-1, superfície-lua)
- Animações apenas em hover de botões (`.18s ease`)
- **Nunca** Inter, Roboto ou Arial como fonte de display
