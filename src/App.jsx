import React from 'react'
import { contact, messages, whatsappLink } from './config.js'
import KneeRehab from './KneeRehab.jsx'

// Voltar ao topo ao recarregar a página

const navigation = performance.getEntriesByType('navigation')[0]

if (navigation?.type === 'reload') {
  window.history.scrollRestoration = 'manual'

  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      '',
      window.location.pathname + window.location.search
    )
  }

  window.addEventListener('load', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, { once: true })
}

// Caminhos das imagens
const img = name => `./images/${name}.webp`

// Dados das seções
const nav = [
  ['Início', 'inicio'],
  ['Sobre', 'sobre'],
  ['Serviços', 'servicos'],
  ['Joelho', 'reabilitacao'],
  ['Resultados', 'resultados'],
  ['Contato', 'contato']
]

const services = [
  ['scale', 'Emagrecimento', 'Estratégias e treinos adaptados à sua rotina, com foco na perda de peso e na saúde.'],
  ['dumbbell', 'Hipertrofia', 'Desenvolva massa muscular e evolua no treinamento com consistência.'],
  ['heart', 'Saúde', 'Mais disposição, qualidade de vida e movimento no seu dia a dia.'],
  ['knee', 'Reabilitação de joelho', 'Exercícios individualizados para fortalecer o joelho, respeitando suas limitações.'],
]

const benefits = [
  ['clipboard', 'Treino personalizado'],
  ['chart', 'Acompanhamento da evolução'],
  ['target', 'Foco nos seus objetivos'],
  ['hand', 'Suporte e orientação'],
  ['calendar', 'Flexibilidade de modalidades']
]

const modalities = [
  [
    'online',
    'laptop',
    'Treino online',
    'Acompanhamento à distância, planejamento de treino individualizado e orientação para sua rotina.'
  ],
  [
    'presencial',
    'pin',
    'Treino presencial',
    'Acompanhamento durante o treino, orientação e correção dos exercícios de acordo com seus objetivos.'
  ]
]

// Ícones SVG
const paths = {
  scale: <>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="3"
    />
    <path d="M8 9a4 4 0 0 1 8 0M12 9l2-2M8 16h8" />
  </>,
  dumbbell: <>
    <rect
      x="3"
      y="6"
      width="4"
      height="12"
      rx="1"
    />
    <rect
      x="17"
      y="6"
      width="4"
      height="12"
      rx="1"
    />
    <path d="M7 12h10M1 9v6m22-6v6" />
  </>,
  heart: <>
    <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    <path d="M3 12h4l2-4 3 8 2-4h7" />
  </>,
  knee: <>
    <path d="M8 2 6 8q-1 3 2 5l3 1-2 8m7-20-3 7q0 2 2 3l1 2-3 8M7 12q4-4 8 0M10 14q3 2 6 0" />
  </>,
  laptop: <>
    <rect
      x="4"
      y="3"
      width="16"
      height="14"
      rx="1"
    />
    <path d="m4 17-3 4h22l-3-4M10 19h4" />
  </>,
  pin: <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle
      cx="12"
      cy="10"
      r="3"
    />
  </>,
  clipboard: <>
    <rect
      x="5"
      y="4"
      width="14"
      height="18"
      rx="2"
    />
    <rect
      x="9"
      y="2"
      width="6"
      height="4"
      rx="1"
    />
    <path d="M9 11h6M9 15h6M9 19h4" />
  </>,
  chart: <>
    <path d="M3 21h18M5 21v-6h4v6m3 0V10h4v11m3 0V5h3v16M3 11l6-5 4 2 7-6m-4 0h4v4" />
  </>,
  target: <>
    <circle
      cx="12"
      cy="12"
      r="9"
    />
    <circle
      cx="12"
      cy="12"
      r="5"
    />
    <path d="m12 12 9-9m-4 0h4v4" />
  </>,
  hand: <>
    <path d="M2 8l5-5 5 2 5-2 5 5-3 8-5 5-3-1-7-6-2-6Zm5-5 4 4-3 4 2 2 4-3 6 6M5 16l3-3m0 6 3-3m1 5 2-3" />
  </>,
  calendar: <>
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
    />
    <path d="M7 2v6m10-6v6M3 10h18m-13 5 3 3 5-5" />
  </>,
  whatsapp: (
  <path
    fill="currentColor"
    stroke="none"
    d="
      M17.472 14.382
      c-.297-.149-1.758-.867-2.03-.967
      -.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164
      -.173.199-.347.223-.644.075
      -.297-.15-1.255-.463-2.39-1.475
      -.883-.788-1.48-1.761-1.653-2.059
      -.173-.297-.018-.458.13-.606
      .134-.133.298-.347.446-.52
      .149-.174.198-.298.298-.497
      .099-.198.05-.372-.025-.521
      -.075-.149-.669-1.612-.916-2.207
      -.242-.579-.487-.5-.669-.51
      -.173-.008-.371-.01-.57-.01
      -.198 0-.52.074-.792.372
      -.272.297-1.04 1.016-1.04 2.479
      0 1.462 1.065 2.875 1.213 3.074
      .149.198 2.095 3.2 5.076 4.487
      .709.306 1.262.489 1.693.625
      .712.227 1.36.195 1.871.118
      .571-.085 1.758-.719 2.006-1.413
      .248-.694.248-1.289.173-1.413
      -.074-.124-.272-.198-.57-.347

      M12.05 21.785
      a9.87 9.87 0 0 1-5.031-1.377
      l-.361-.214-3.741.982 1-3.648
      -.235-.374
      a9.86 9.86 0 0 1-1.51-5.252
      c.002-5.45 4.436-9.884 9.887-9.884
      a9.84 9.84 0 0 1 9.881 9.892
      c-.003 5.45-4.437 9.875-9.89 9.875

      M12.05 0
      C5.45 0 .078 5.373.075 11.975
      c0 2.11.551 4.17 1.6 5.985
      L0 24l6.335-1.662
      a11.96 11.96 0 0 0 5.712 1.455
      h.005
      C18.65 23.793 24 18.42 24 11.817
      24 5.215 18.65 0 12.05 0
    "
  />
),
  instagram: <>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
    />
    <path d="M17.5 6.5h.01" />
  </>,
  arrow: <>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </>,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
}

// Componentes reutilizáveis
function Icon({ name, size = 24 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">{children}</div>
  )
}

function SectionTitle({ small, children }) {
  return (
    <div className="section-title">
      {small && <Eyebrow>{small}</Eyebrow>}
      <h2>{children}</h2>
    </div>
  )
}

function ContactButton({ children = 'Quero começar agora', onContact, message, className = '' }) {
  const url = whatsappLink(message)
  return url ? (
    <a
      className={`btn ${className}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" />
      {children}
      <Icon name="arrow" size={18} />
    </a>
  ) : (
    <button
      className={`btn ${className}`}
      type="button"
      onClick={onContact}
    >
      <Icon name="whatsapp" />
      {children}
      <Icon name="arrow" size={18} />
    </button>
  )
}

// Seções da landing page
function Header({ open, hidden, toggle, close, onContact }) {
  return (
    <header className={`header${hidden && !open ? ' header--hidden' : ''}`}>
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="Isabela Carvalho — início"
          onClick={close}
        >
          <img
            src={img('logo')}
            alt="Isabela Carvalho Personal Trainer"
            width="106"
            height="77"
          />
          <span>
            <b><em>Isabela</em> Carvalho</b>
            <small>PERSONAL TRAINER</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={toggle}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="navigation"
          className={open ? 'nav is-open' : 'nav'}
          aria-label="Navegação principal"
        >
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <ContactButton
            className="nav-contact"
            message={messages.header}
            onContact={() => {
              close()
              onContact()
            }}
          >
            Fale comigo
          </ContactButton>
        </nav>
      </div>
    </header>
  )
}

function Hero({ onContact }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-blur" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Eyebrow>PERSONAL TRAINER</Eyebrow>
          <h1>
            Transforme<br />
            seu corpo.<br />
            <span>
              Evolua sua<br />
              saúde.
            </span>
          </h1>
          <p>Treinos personalizados para emagrecimento, hipertrofia, saúde e fortalecimento do joelho.</p>
          <ContactButton
            onContact={onContact}
            message={messages.hero}
          />
          <div className="hero-tags">
            <span><Icon name="laptop" /> Treino online</span>
            <i />
            <span><Icon name="pin" /> Treino presencial</span>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/images/isa-praia.jpeg"
            alt="Isabela Carvalho na praia"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionTitle small="ÁREAS DE ATUAÇÃO">Como posso te ajudar</SectionTitle>
        <div className="service-grid">
          {services.map(([icon, title, description]) => (
            <article className="service-card" key={title}>
              <Icon name={icon} size={40} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <div className="portrait-frame">
          <img
            src="./images/isa-perfil.jpeg"
            alt="Isabela Carvalho sorrindo"
            width="349"
            height="427"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <Eyebrow>SOBRE MIM</Eyebrow>
          <h2>Isabela Carvalho</h2>
          <div className="subheading">PERSONAL TRAINER</div>
          <p>Sou personal trainer e ajudo pessoas a evoluírem por meio do treinamento personalizado, com foco na saúde, na constância e nos objetivos de cada aluno.</p>
          <p>Meu propósito é tornar o exercício parte da sua rotina, respeitando a sua individualidade e o seu ritmo.</p>
          <a
            className="text-link"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
            {' Conheça meu trabalho '}
            <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Modalities({ onContact }) {
  return (
    <section id="modalidades" className="section modalities">
      <div className="container">
        <SectionTitle>Escolha a sua modalidade</SectionTitle>
        <div className="mode-grid">
          {modalities.map(([photo, icon, title, desc]) => (
            <article
              className="mode-card"
              key={title}
              style={{ '--mode-image': `url(${img(photo)})` }}
            >
              <div className="mode-content">
                <Icon name={icon} size={30} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <a
                  className="text-link"
                  href={whatsappLink(messages[photo]) || '#contato'}
                  onClick={whatsappLink() ? undefined : e => {
                    e.preventDefault()
                    onContact()
                  }}
                  target={whatsappLink() ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {'Saiba mais '}
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section id="resultados" className="section results">
      <div className="container result-grid">
        <div>
          <Eyebrow>RESULTADOS REAIS</Eyebrow>
          <h2>Evolução<br /><span>de alunos</span></h2>
          <p>Um registro de evolução compartilhado no perfil da Isabela, mostrando a importância de um acompanhamento individualizado.</p>
          <small className="muted">Cada pessoa tem seu próprio ritmo e resultados.</small>
        </div>
        <figure className="comparison">
          <div className="comparison-images">
            <div>
              <img
                src="./images/antes.jpeg"
                alt="Registro inicial do aluno"
                width="137"
                height="355"
                loading="lazy"
              />
              <span>ANTES</span>
            </div>
            <div>
              <img
                src="./images/depois.jpeg"
                alt="Registro posterior do mesmo aluno"
                width="149"
                height="355"
                loading="lazy"
              />
              <span>DEPOIS</span>
            </div>
            <i className="comparison-arrow">
              <Icon name="arrow" />
            </i>
          </div>
          <figcaption>3 meses de evolução · Registro publicado no Instagram</figcaption>
        </figure>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionTitle>Meus diferenciais</SectionTitle>
        <div className="benefit-grid">
          {benefits.map(([icon, text]) => (
            <div className="benefit" key={icon}>
              <Icon name={icon} size={34} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Closing({ onContact }) {
  return (
    <section id="contato" className="closing">
      <div className="container closing-inner">
        <Eyebrow>O PRIMEIRO PASSO É SEU</Eyebrow>
        <h2>Pronto(a) para começar<br /><span>a sua transformação?</span></h2>
        <p>Entre em contato e descubra qual modalidade faz sentido para você.</p>
        <ContactButton
          onContact={onContact}
          message={messages.closing}
        >
          Fale comigo agora
        </ContactButton>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Isabela Carvalho · Personal Trainer</span>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size={19} />
          {' @isabelacarvalho.personal'}
        </a>
      </div>
    </footer>
  )
}

// Componente principal
export default class App extends React.Component {
  state = { menu: false, headerHidden: false };
  lastScrollY = 0;

  componentDidMount() {
    this.lastScrollY = Math.max(0, window.scrollY);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Esconde ao descer e mostra novamente ao subir.
  handleScroll = () => {
    const currentY = Math.max(0, window.scrollY);
    const delta = currentY - this.lastScrollY;

    if (currentY <= 12 || this.state.menu) {
      this.lastScrollY = currentY;
      if (this.state.headerHidden) {
        this.setState({ headerHidden: false });
      }
      return;
    }

    // Ignora pequenas oscilações para evitar que o header pisque.
    if (Math.abs(delta) < 10) return;

    this.lastScrollY = currentY;
    const hidden = delta > 0 && currentY > 72;

    if (hidden !== this.state.headerHidden) {
      this.setState({ headerHidden: hidden });
    }
  };

  contactDialog = React.createRef();
  openContact = () => this.contactDialog.current.showModal();
  closeContact = () => this.contactDialog.current.close();
  toggleMenu = () => this.setState(s => ({ menu: !s.menu, headerHidden: false }));
  closeMenu = () => this.setState({ menu: false });
  render() {
    return (
      <>
        <a className="skip" href="#inicio">Pular para o conteúdo</a>
        <Header
          open={this.state.menu}
          hidden={this.state.headerHidden}
          toggle={this.toggleMenu}
          close={this.closeMenu}
          onContact={this.openContact}
        />
        <main>
          <Hero onContact={this.openContact} />
          <Services />
          <About />
          <KneeRehab
            ContactButton={ContactButton}
            onContact={this.openContact}
          />
          <Modalities onContact={this.openContact} />
          <Results />
          <Benefits />
          <Closing onContact={this.openContact} />
        </main>
        <Footer />
        <dialog
          ref={this.contactDialog}
          className="contact-dialog"
          aria-labelledby="dialog-title"
          onClick={e => {
            if (e.target === e.currentTarget)
              this.closeContact()
          }}
        >
          <div className="dialog-content">
            <button
              className="dialog-close"
              type="button"
              onClick={this.closeContact}
              aria-label="Fechar"
            >
              <Icon name="close" />
            </button>
            <Eyebrow>VAMOS CONVERSAR</Eyebrow>
            <h2 id="dialog-title">Fale com a Isabela</h2>
            <p>Escolha um dos canais de contato do perfil.</p>
            <a
              className="btn"
              href={contact.bio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Links de contato '}
              <Icon name="arrow" />
            </a>
            <a
              className="btn secondary"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" />
              {' Instagram'}
            </a>
          </div>
        </dialog>
      </>
    )
  }
}
