export function LanguageToggle({ currentLang, onToggleLang }) {
  return (
    <button
      type="button"
      className="lang-toggle-button"
      onClick={onToggleLang}
      aria-label={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="lang-icon" aria-hidden="true">🌐</span>
      <span className={`lang-badge ${currentLang === 'es' ? 'active' : ''}`}>ES</span>
      <span className="lang-divider" aria-hidden="true">/</span>
      <span className={`lang-badge ${currentLang === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  )
}
