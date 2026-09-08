import './styles.css'

const profile = {
  name: 'Emiliano Correa',
  role: 'Desarrollador de software',
  location: 'Ubicación próximamente',
  summary:
    'Este sitio se encuentra en construcción. Próximamente podrás conocer más sobre mi experiencia, proyectos y formación profesional.',
}

const experience = [
  {
    period: 'Próximamente',
    company: 'Información en construcción',
    role: 'Experiencia profesional',
    description: 'Los datos de experiencia laboral se publicarán próximamente.',
    highlights: ['Proyectos próximamente', 'Responsabilidades próximamente', 'Logros próximamente'],
  },
  {
    period: 'Próximamente',
    company: 'Información en construcción',
    role: 'Desarrollador de software',
    description: 'Los datos de experiencia laboral se publicarán próximamente.',
    highlights: ['Proyectos próximamente', 'Responsabilidades próximamente', 'Logros próximamente'],
  },
  {
    period: 'Próximamente',
    company: 'Información en construcción',
    role: 'Desarrollador freelance',
    description: 'Los datos de experiencia laboral se publicarán próximamente.',
    highlights: ['Proyectos próximamente', 'Clientes próximamente', 'Tecnologías próximamente'],
  },
]

const education = [
  { period: 'Próximamente', title: 'Formación académica', school: 'Información en construcción' },
  { period: 'Próximamente', title: 'Cursos y certificaciones', school: 'Información en construcción' },
]

const skills = [
  { title: 'Tecnologías', items: ['Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente'] },
  { title: 'Herramientas', items: ['Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente'] },
  { title: 'Otros conocimientos', items: ['Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente', 'Contenido próximamente'] },
]

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

function TimelineItem({ period, company, role, description, highlights }) {
  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-content">
        <p className="timeline-period">{period}</p>
        <h3>{role}</h3>
        <p className="company">{company}</p>
        <p className="body-copy">{description}</p>
        <ul className="highlight-list">
          {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">EC<span>.</span></a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#educacion">Educación</a>
          <a className="nav-contact" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow intro-label">Perfil profesional <span>●</span> Sitio en construcción</p>
            <h1>{profile.name}<br /><em>{profile.role}</em></h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">Información próximamente <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contacto">LinkedIn próximamente <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Datos de contacto">
            <div className="portrait-placeholder"><span>EC</span></div>
            <p className="aside-note">Contenido<br /><strong>en construcción</strong>.</p>
            <div className="contact-details">
              <span>Email próximamente</span>
              <span>Teléfono próximamente</span>
              <span>{profile.location}</span>
            </div>
          </aside>
        </section>

        <section className="content-section experience-section" id="experiencia">
          <SectionHeading eyebrow="01 / Trayectoria" title="Experiencia" />
          <div className="timeline">
            {experience.map((item) => <TimelineItem key={`${item.company}-${item.period}`} {...item} />)}
          </div>
        </section>

        <section className="content-section skills-section" id="habilidades">
          <SectionHeading eyebrow="02 / Lo que hago" title="Habilidades" />
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section education-section" id="educacion">
          <SectionHeading eyebrow="03 / Formación" title="Educación" />
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.title}>
                <p className="timeline-period">{item.period}</p>
                <div><h3>{item.title}</h3><p>{item.school}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-banner" id="contacto">
          <p className="eyebrow">Sitio en construcción</p>
          <h2>Más información<br /><em>próximamente.</em></h2>
          <span className="button button-light">Contacto próximamente <span aria-hidden="true">↗</span></span>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#contacto">LinkedIn próximamente <span aria-hidden="true">↗</span></a>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </div>
  )
}

export default App
