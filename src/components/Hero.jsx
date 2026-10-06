import { PhotoPlaceholder } from './PhotoPlaceholder'

export function Hero({ heroData }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <div className="hero-status-pill">
          <span className="status-dot" aria-hidden="true" />
          <span>{heroData.statusBadge}</span>
        </div>

        <p className="hero-greeting">{heroData.greeting}</p>
        <h1 className="hero-name">
          {heroData.name}
          <span className="hero-role-block">
            <em>{heroData.role}</em>
          </span>
        </h1>

        <p className="hero-summary">{heroData.summary}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contacto">
            {heroData.contactCta} <span aria-hidden="true">→</span>
          </a>
          <a
            className="button button-outline"
            href="https://www.linkedin.com/in/emiliano-correa-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {heroData.linkedinCta} <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-ghost"
            href="https://github.com/emicorrea"
            target="_blank"
            rel="noopener noreferrer"
          >
            {heroData.githubCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="hero-aside">
        <PhotoPlaceholder
          photoUrl={heroData.photoUrl}
          altText={heroData.photoAlt}
          placeholderText={heroData.photoPlaceholderText}
          helperText={heroData.photoPlaceholderHint}
        />

        <div className="hero-aside-info">
          <div className="aside-info-item">
            <span className="info-icon" aria-hidden="true">📍</span>
            <span>{heroData.location}</span>
          </div>
          <div className="aside-info-item">
            <span className="info-icon" aria-hidden="true">✉️</span>
            <a href={`mailto:${heroData.email}`} className="info-link">
              {heroData.email}
            </a>
          </div>
        </div>
      </aside>
    </section>
  )
}
