/* global React */
const { useState } = React;

/* ---------------- Shared bits ---------------- */

function Logo({ size = 40, showWord = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img src="assets/logo/simbolo.svg" alt="" style={{ height: size, width: "auto", display: "block" }} />
      {showWord && (
        <div style={{ lineHeight: 0.92, fontFamily: "var(--fonte-display)", fontWeight: 800, letterSpacing: ".02em" }}>
          <div style={{ fontSize: 18, color: "var(--off-white)" }}>ESPANHOL</div>
          <div style={{ fontSize: 18, display: "flex", gap: 6 }}>
            <span style={{ color: "var(--texto-roxo)" }}>DAS</span>
            <span style={{ color: "var(--vermelho-rubi)" }}>RUAS</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Nav() {
  const links = ["Como funciona", "Comunidade", "Planos", "FAQ"];
  return (
    <nav className="eor-nav">
      <Logo size={42} />
      <div className="eor-nav__links">
        {links.map((l) => <a key={l} href="#" className="eor-navlink">{l}</a>)}
      </div>
      <button className="btn btn--primary btn--sm">Entrar na comunidade</button>
    </nav>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow eor-eyebrow"><span className="eor-tick" />{children}</div>;
}

function CTAs({ stack = false }) {
  return (
    <div className="eor-ctas" style={{ flexDirection: stack ? "column" : "row" }}>
      <button className="btn btn--primary">Entrar na comunidade</button>
      <button className="btn btn--ghost">Ver como funciona →</button>
    </div>
  );
}

function Proof({ count = "811" }) {
  return (
    <div className="eor-proof">
      <div className="eor-dots">
        {[0,1,2,3].map(i => <span key={i} className="eor-dot" style={{ left: i*22 }} />)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--fonte-display)", fontWeight: 700, fontSize: 17, color: "var(--off-white)", letterSpacing: ".03em", lineHeight: 1 }}>{count} membros ativos</span>
        <span className="eor-proof__txt">Sala ativa todo dia no Discord · do zero à fluência real</span>
      </div>
    </div>
  );
}

function Skyline({ opacity = 0.9 }) {
  return <img src="assets/skyline.svg" alt="" className="eor-skyline" style={{ opacity }} />;
}

/* ---------------- A · Lua Central ---------------- */
function HeroCentral() {
  return (
    <div className="eor-hero eor-hero--center">
      <Nav />
      <div className="eor-center-stack">
        <Eyebrow>Comunidade de espanhol · para brasileiros</Eyebrow>
        <div className="eor-symbol-wrap">
          <img src="assets/logo/simbolo.svg" alt="Espanhol das Ruas" className="eor-symbol" />
        </div>
        <h1 className="titulo-display eor-h1">
          De zero a <span className="roxo">hablante</span>
        </h1>
        <p className="eor-sub">Do jeito que o espanhol é falado de verdade — na rua, no trampo e na viagem. Sem apostila, sem cara de escola.</p>
        <CTAs />
        <Proof />
      </div>
      <Skyline opacity={0.85} />
    </div>
  );
}

/* ---------------- B · Split Manifesto ---------------- */
function HeroSplit() {
  return (
    <div className="eor-hero eor-hero--split">
      <Nav />
      <div className="eor-split-grid">
        <div className="eor-split-left">
          <Eyebrow>De zero a hablante</Eyebrow>
          <h1 className="titulo-display eor-h1 eor-h1--xl">
            Aprenda o<br />espanhol<br /><span className="roxo">das ruas.</span>
          </h1>
          <p className="eor-sub">Método prático que tira você do "portunhol" e te coloca pra conversar de verdade — rápido, e dentro de uma comunidade que fala todo dia.</p>
          <CTAs />
          <Proof />
        </div>
        <div className="eor-split-right">
          <div className="eor-frame">
            <span className="eor-corner tl" /><span className="eor-corner tr" />
            <span className="eor-corner bl" /><span className="eor-corner br" />
            <img src="assets/logo/simbolo.svg" alt="Espanhol das Ruas" className="eor-frame-symbol" />
            <div className="eor-frame-tag">SIMPLES · ICÔNICO · SOMBRIO · URBANO</div>
          </div>
        </div>
      </div>
      <Skyline opacity={0.7} />
    </div>
  );
}

/* ---------------- C · Cartaz Noturno ---------------- */
function HeroPoster() {
  return (
    <div className="eor-hero eor-hero--poster">
      <Nav />
      <img src="assets/logo/simbolo.svg" alt="Espanhol das Ruas" className="eor-poster-symbol" />
      <div className="eor-poster-side">ESPANHOL · DAS · RUAS · ESPANHOL · DAS · RUAS</div>
      <div className="eor-poster-content">
        <Eyebrow>Comunidade no Discord</Eyebrow>
        <h1 className="titulo-display eor-poster-h1">
          DE ZERO<br /><span className="dourado">A</span> <span className="roxo">HABLANTE</span>
        </h1>
        <div className="eor-rule" />
        <p className="eor-sub eor-sub--poster">O espanhol de verdade, do dia a dia. Entre na sala, treine na prática e saia falando.</p>
        <CTAs />
        <Proof count="811" />
      </div>
      <Skyline opacity={0.6} />
    </div>
  );
}

window.HeroCentral = HeroCentral;
window.HeroSplit = HeroSplit;
window.HeroPoster = HeroPoster;
