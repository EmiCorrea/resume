import { EducationItem } from './EducationItem'
import { SectionHeading } from './SectionHeading'

export function Education({ sectionData, educationList }) {
  return (
    <section className="content-section" id="educacion">
      <SectionHeading
        eyebrow={sectionData.eyebrow}
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />

      <div className="education-grid">
        {educationList.map((item) => (
          <EducationItem
            key={`${item.title}-${item.period}`}
            title={item.title}
            institution={item.institution}
            period={item.period}
            highlight={item.highlight}
          />
        ))}
      </div>
    </section>
  )
}
