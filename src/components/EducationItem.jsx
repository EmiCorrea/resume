export function EducationItem({ title, institution, period, highlight }) {
  return (
    <article className="education-card">
      <div className="education-period-badge">
        <span className="education-calendar-icon" aria-hidden="true">📅</span>
        <span>{period}</span>
      </div>
      <div className="education-details">
        <h3 className="education-degree">{title}</h3>
        <p className="education-institution">{institution}</p>
        {highlight && <p className="education-highlight">{highlight}</p>}
      </div>
    </article>
  )
}
