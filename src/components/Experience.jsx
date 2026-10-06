import { ExperienceItem } from './ExperienceItem'
import { SectionHeading } from './SectionHeading'

export function Experience({ sectionData, experienceList }) {
  return (
    <section className="content-section" id="experiencia">
      <SectionHeading
        eyebrow={sectionData.eyebrow}
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />

      <div className="timeline-container">
        <div className="timeline-track" aria-hidden="true" />
        <div className="timeline-items">
          {experienceList.map((item) => (
            <ExperienceItem
              key={`${item.company}-${item.period}`}
              company={item.company}
              role={item.role}
              period={item.period}
              isCurrent={item.isCurrent}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
