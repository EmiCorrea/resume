export function TechBadge({ label, highlight = false }) {
  return (
    <span className={`tech-badge ${highlight ? 'tech-badge-highlight' : ''}`}>
      {label}
    </span>
  )
}
