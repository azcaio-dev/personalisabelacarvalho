import React, { useEffect, useRef, useState } from 'react'
import './student-results.css'

// Cadastre aqui somente resultados reais e autorizados pelos alunos.
// As imagens devem estar em public/images/.
const studentResults = [
  {
    id: 'aluno-1',
    before: 'antes.jpeg',
    after: 'depois.jpeg',
    beforePosition: 'center 10%',
    afterPosition: 'center top',
  },
  {
    id: 'aluno-2',
    before: 'antes-2.jpeg',
    after: 'depois-2.jpeg',
    beforePosition: 'center 45%',
    afterPosition: 'center 50%',
  },
  {
    id: 'aluno-3',
    before: 'antes-3.jpeg',
    after: 'depois-3.jpeg',
    beforePosition: 'center 20%',
    afterPosition: 'center 20%',
  },
]

const imagePath = name => `${import.meta.env.BASE_URL}images/${name}`

function Chevron({ direction }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6 6'} />
    </svg>
  )
}

function ResultCard({ result, index }) {
  return (
    <figure className="student-results__card" aria-label={`Comparação ${index + 1}`}>
      <div className="student-results__pair">
        <div className="student-results__photo">
          <img
            src={imagePath(result.before)}
            alt={`Aluno ${index + 1}: antes do acompanhamento`}
            style={{ objectPosition: result.beforePosition || 'center top' }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <span className="student-results__label">Antes</span>
        </div>
        <div className="student-results__photo">
          <img
            src={imagePath(result.after)}
            alt={`Aluno ${index + 1}: depois do acompanhamento`}
            style={{ objectPosition: result.afterPosition || 'center top' }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <span className="student-results__label student-results__label--after">Depois</span>
        </div>
      </div>
    </figure>
  )
}

export default function StudentResults() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [lastIndex, setLastIndex] = useState(0)

  // Sincroniza os indicadores com o tamanho da tela e o deslize manual.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const update = () => {
      const cards = Array.from(track.children)
      const visible = Number(getComputedStyle(track).getPropertyValue('--results-visible')) || 1
      const last = Math.max(0, cards.length - visible)
      const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0

      setLastIndex(last)
      setActive(step > 0 ? Math.max(0, Math.min(last, Math.round(track.scrollLeft / step))) : 0)
    }

    const observer = new ResizeObserver(update)
    observer.observe(track)
    track.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', update)
    }
  }, [])

  const goTo = index => {
    const track = trackRef.current
    if (!track) return

    const target = Math.max(0, Math.min(lastIndex, index))
    const first = track.children[0]
    const card = track.children[target]
    if (!first || !card) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: card.offsetLeft - first.offsetLeft,
      behavior: reduced ? 'instant' : 'smooth',
    })
  }

  const handleKeyDown = event => {
    if (lastIndex === 0) return
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(active + (event.key === 'ArrowRight' ? 1 : -1))
    }
  }

  return (
    <section id="resultados" className="student-results" aria-labelledby="student-results-title">
      <div className="container student-results__inner">
        <div className="student-results__intro">
          <div className="student-results__eyebrow">RESULTADOS REAIS</div>
          <h2 id="student-results-title">
            Transformações que <span>me motivam</span>
          </h2>
          <p>Confira a evolução de alguns alunos que confiaram no meu trabalho.</p>
        </div>

        <div className="student-results__carousel">
          <div
            ref={trackRef}
            id="student-results-track"
            className={`student-results__track${studentResults.length === 1 ? ' student-results__track--single' : ''}`}
            tabIndex={lastIndex > 0 ? 0 : undefined}
            onKeyDown={handleKeyDown}
            aria-label="Comparações de antes e depois"
          >
            {studentResults.map((result, index) => (
              <ResultCard key={result.id} result={result} index={index} />
            ))}
          </div>

          {lastIndex > 0 && (
            <div className="student-results__controls">
              <button
                type="button"
                className="student-results__arrow student-results__arrow--prev"
                aria-label="Resultado anterior"
                aria-controls="student-results-track"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
              >
                <Chevron direction="left" />
              </button>

              <div className="student-results__dots" aria-label="Posições do carrossel">
                {Array.from({ length: lastIndex + 1 }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`student-results__dot${active === index ? ' is-active' : ''}`}
                    aria-label={`Ir para a posição ${index + 1}`}
                    aria-current={active === index ? 'true' : undefined}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="student-results__arrow student-results__arrow--next"
                aria-label="Próximo resultado"
                aria-controls="student-results-track"
                onClick={() => goTo(active + 1)}
                disabled={active === lastIndex}
              >
                <Chevron direction="right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
