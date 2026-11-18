import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ScrollReveal from './ScrollReveal.jsx'
import './styles.css'

// Reinicia a posição somente quando a página for recarregada.
const navigation = performance.getEntriesByType('navigation')[0]

if (navigation?.type === 'reload') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      '',
      window.location.pathname + window.location.search
    )
  }

  const resetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  resetScroll()

  if (document.readyState === 'complete') {
    resetScroll()
  } else {
    window.addEventListener('load', resetScroll, { once: true })
  }
}

createRoot(document.getElementById('root')).render(
  <ScrollReveal>
    <App />
  </ScrollReveal>
)
