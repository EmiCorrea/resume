import { useEffect, useState } from 'react'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Languages } from './components/Languages'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { cvData } from './data/cvData'
import './styles.css'

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = localStorage.getItem('resume-lang')
    if (saved === 'es' || saved === 'en') return saved
    const browserLang = navigator.language?.toLowerCase() || ''
    return browserLang.startsWith('es') ? 'es' : 'en'
  })

  const data = cvData[currentLang] || cvData.es

  useEffect(() => {
    localStorage.setItem('resume-lang', currentLang)
    document.documentElement.lang = currentLang

    if (data.meta?.title) {
      document.title = data.meta.title
    }

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && data.meta?.description) {
      metaDescription.setAttribute('content', data.meta.description)
    }
  }, [currentLang, data])

  const toggleLang = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  return (
    <div className="app-shell">
      <Navbar
        navData={data.nav}
        currentLang={currentLang}
        onToggleLang={toggleLang}
      />

      <main>
        <Hero heroData={data.hero} />

        <Experience
          sectionData={data.sections.experience}
          experienceList={data.experience}
        />

        <Skills
          sectionData={data.sections.skills}
          skillsData={data.skills}
        />

        <Education
          sectionData={data.sections.education}
          educationList={data.education}
        />

        <Languages
          sectionData={data.sections.languages}
          languagesList={data.languages}
        />

        <Contact
          contactData={data.sections.contact}
          email={data.hero.email}
        />
      </main>

      <Footer
        footerData={data.footer}
        name={data.hero.name}
      />
    </div>
  )
}
