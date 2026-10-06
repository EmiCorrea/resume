import { TechBadge } from './TechBadge'

export function SkillCategory({ title, colorKey, items }) {
  return (
    <article className={`skill-category-card skill-card-${colorKey || 'default'}`}>
      <div className="skill-category-header">
        <span className="skill-category-indicator" aria-hidden="true" />
        <h3 className="skill-category-title">{title}</h3>
      </div>
      <div className="skill-badge-wrap">
        {items.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>
    </article>
  )
}
