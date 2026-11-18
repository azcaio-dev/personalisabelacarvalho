import { useLayoutEffect } from 'react'
import './scroll-reveal.css'

// O hero possui uma animação de entrada própria no CSS.
// Os demais elementos são animados quando entram de fato na tela.
const selectors = [
  '.services .section-title',
  '.service-grid .service-card',
  '.about-grid .portrait-frame',
  '.about-copy',
  '.knee-rehab-copy',
  '.knee-gallery',
  '.modalities .section-title',
  '.mode-grid .mode-card',
  '.student-results__intro',
  '.student-results__carousel',
  '.student-results__note',
  '.benefits .section-title',
  '.benefit-grid',
  '.closing-inner',
]

export default function ScrollReveal({ children }) {
  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(
      document.querySelectorAll(
        selectors.map(selector => `main ${selector}`).join(', ')
      )
    )

    // Elementos altos não precisam ocupar 40% de sua própria altura
    // quando isso exigiria uma área maior do que a tela oferece.
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const elementHeight = entry.boundingClientRect.height
        const viewportHeight = entry.rootBounds?.height ?? window.innerHeight

        const requiredHeight = Math.min(
          elementHeight * 0.4,
          viewportHeight * 0.32
        )

        if (entry.intersectionRect.height >= requiredHeight) {
          reveal(entry.target)
        }
      })
    }, {
      threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 1],
      rootMargin: '0px 0px -32px 0px',
    })

    function reveal(element) {
      element.dataset.scrollReveal = 'visible'
      observer.unobserve(element)
    }

    elements.forEach(element => {
      const rect = element.getBoundingClientRect()

      // Não esconder itens que já estejam inteiramente acima da tela.
      if (rect.bottom <= 0) return

      const stagger = element.matches('.service-card, .mode-card')
        ? Math.min(Array.from(element.parentElement.children).indexOf(element), 3) * 65
        : 0

      element.style.setProperty('--scroll-reveal-delay', `${stagger}ms`)
      element.dataset.scrollReveal = 'pending'
      observer.observe(element)
    })

    // Permitir o acesso imediato via navegação por teclado.
    const handleFocus = event => {
      const target = event.target.closest?.('[data-scroll-reveal="pending"]')
      if (target) reveal(target)
    }

    document.addEventListener('focusin', handleFocus)

    // Caso a preferência de movimento seja alterada com a página aberta,
    // remover os estados pendentes sem ocultar nenhum conteúdo.
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = event => {
      if (event.matches) {
        observer.disconnect()
        elements.forEach(element => {
          delete element.dataset.scrollReveal
          element.style.removeProperty('--scroll-reveal-delay')
        })
      }
    }
    motion.addEventListener?.('change', handleMotionChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('focusin', handleFocus)
      motion.removeEventListener?.('change', handleMotionChange)

      elements.forEach(element => {
        delete element.dataset.scrollReveal
        element.style.removeProperty('--scroll-reveal-delay')
      })
    }
  }, [])

  return children
}
