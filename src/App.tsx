import { useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ComoFunciona } from './components/ComoFunciona'
import { ProvaSocial } from './components/ProvaSocial'
import { Comunidade } from './components/Comunidade'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { SplashScreen } from './components/SplashScreen'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <header>
            <Nav />
          </header>
          <main>
            <Hero />
            <ComoFunciona />
            <ProvaSocial />
            <Comunidade />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  )
}
