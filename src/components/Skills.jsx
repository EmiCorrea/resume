import { SectionHeading } from './SectionHeading'
import { SkillCategory } from './SkillCategory'

export function Skills({ sectionData, skillsData }) {
  return (
    <section className="content-section" id="habilidades">
      <SectionHeading
        eyebrow={sectionData.eyebrow}
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />

      <div className="skills-layout">
        <div className="skills-subgroup">
          <h3 className="skills-subgroup-title">{sectionData.hardSkillsTitle}</h3>
          <div className="skills-categories-grid">
            {skillsData.categories.map((cat) => (
              <SkillCategory
                key={cat.title}
                title={cat.title}
                colorKey={cat.colorKey}
                items={cat.items}
              />
            ))}
          </div>
        </div>

        <div className="skills-subgroup soft-skills-subgroup">
          <h3 className="skills-subgroup-title">{sectionData.softSkillsTitle}</h3>
          <div className="soft-skills-grid">
            {skillsData.soft.map((softSkill) => (
              <article key={softSkill.name} className="soft-skill-card">
                <div className="soft-skill-icon" aria-hidden="true">★</div>
                <div className="soft-skill-content">
                  <h4 className="soft-skill-name">{softSkill.name}</h4>
                  <p className="soft-skill-desc">{softSkill.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
