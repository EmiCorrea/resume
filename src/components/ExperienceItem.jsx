import { TechBadge } from './TechBadge'

export function ExperienceItem({ company, role, period, isCurrent, description, technologies }) {
  return (
    <article className={`experience-card ${isCurrent ? 'is-current' : ''}`}>
      <div className="experience-header">
        <div className="experience-role-group">
          <h3 className="experience-role">{role}</h3>
          <p className="experience-company">
            <span>{company}</span>
            {isCurrent && <span className="current-tag">Latest</span>}
          </p>
        </div>
        <span className="experience-period">{period}</span>
      </div>

      <p className="experience-description">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="experience-tech-list">
          {technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      )}
    </article>
  )
}
