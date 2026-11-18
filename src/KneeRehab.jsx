import React from 'react'
import './knee-rehab.css'
import { messages } from './config.js'

const imagePath = (name) => `${import.meta.env.BASE_URL}images/${name}.jpeg`

const advantages = [
  'Fortalecimento com foco funcional',
  'Exercícios progressivos e individualizados',
  'Mais atenção ao controle do movimento',
  'Acompanhamento com olhar técnico',
]

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m7.5 12 3 3 6-6" />
    </svg>
  )
}

function CoursePhoto({ name, alt, className }) {
  return (
    <div className={`knee-photo ${className}`}>
      <img
        src={imagePath(name)}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function KneeRehab({ ContactButton, onContact }) {
  return (
    <section
      id="reabilitacao"
      className="knee-rehab"
      aria-labelledby="knee-rehab-title"
    >
      <div className="container knee-rehab-grid">
        <div className="knee-rehab-copy">
          <div className="eyebrow">APERFEIÇOAMENTO PROFISSIONAL</div>

          <h2 id="knee-rehab-title">
            Reabilitação de joelho{' '}
            <span>com mais segurança e direção</span>
          </h2>

          <p>
            Busco aperfeiçoamento constante para conduzir treinos com
            foco em fortalecimento, controle do movimento e retorno
            progressivo às atividades, respeitando a individualidade
            de cada aluno.
          </p>

          <ul className="knee-rehab-list">
            {advantages.map((advantage) => (
              <li key={advantage}>
                <CheckIcon />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>

          <ContactButton
            className="knee-rehab-cta"
            onContact={onContact}
            message={messages.knee}
          >
            Quero saber mais sobre reabilitação de joelho
          </ContactButton>

          <small className="knee-rehab-note">
            Treinamento complementar, respeitando as orientações da
            equipe de saúde quando necessário.
          </small>
        </div>

        <figure className="knee-gallery">
          <div className="knee-gallery-row knee-gallery-row--top">
            <CoursePhoto
              name="joelho-certificado"
              alt="Registro da entrega do certificado do curso"
              className="knee-photo--certificate"
            />

            <CoursePhoto
              name="joelho-anatomia"
              alt="Modelo anatômico de uma articulação do joelho"
              className="knee-photo--anatomy"
            />
          </div>

          <div className="knee-gallery-row knee-gallery-row--bottom">
            <CoursePhoto
              name="joelho-pratica"
              alt="Atividade prática de exercício durante o curso"
              className="knee-photo--practice"
            />

            <CoursePhoto
              name="joelho-formacao"
              alt="Registro de Isabela comemorando a conclusão do curso"
              className="knee-photo--training"
            />
          </div>

          <figcaption>
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m2 9 10-5 10 5-10 5L2 9Z" />
              <path d="M6 11v6c3 3 9 3 12 0v-6M22 9v7" />
            </svg>
            Aperfeiçoamento prático e técnico
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
