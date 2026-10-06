import { LanguageToggle } from './LanguageToggle'

export function Navbar({ navData, currentLang, onToggleLang }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Emiliano Correa - Volver al inicio">
        {navData.brand}<span>.</span>
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#experiencia">{navData.experience}</a>
        <a href="#habilidades">{navData.skills}</a>
        <a href="#educacion">{navData.education}</a>
        <a href="#idiomas">{navData.languages}</a>
        <a className="nav-contact" href="#contacto">
          {navData.contact} <span aria-hidden="true">↗</span>
        </a>
        <LanguageToggle currentLang={currentLang} onToggleLang={onToggleLang} />
      </nav>
    </header>
  )
}
