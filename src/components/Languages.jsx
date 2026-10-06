import { SectionHeading } from './SectionHeading'

export function Languages({ sectionData, languagesList }) {
  return (
    <section className="content-section" id="idiomas">
      <SectionHeading
        eyebrow={sectionData.eyebrow}
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />

      <div className="languages-grid">
        {languagesList.map((lang) => (
          <article key={lang.language} className="language-card">
            <div className="language-header">
              <span className="language-flag-icon" aria-hidden="true">
                {lang.language.toLowerCase().includes('ing') || lang.language.toLowerCase().includes('eng') ? '🇬🇧' : '🇦🇷'}
              </span>
              <h3 className="language-name">{lang.language}</h3>
            </div>
            <p className="language-level">{lang.level}</p>
            {lang.badge && <span className="language-badge">{lang.badge}</span>}
          </article>
        ))}
      </div>
    </section>
  )
}
