import { useEffect, useState } from 'react'
import {
  detectUserLocation,
  getCountryName,
  getFlagEmoji,
} from '../utils/geoDetection'

export function LanguageSuggestionBanner({ currentLang, onSwitchLang }) {
  const [suggestion, setSuggestion] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function checkLocation() {
      // Si el usuario ya descartó la sugerencia previamente, respetamos su decisión
      const isDismissed =
        localStorage.getItem('resume-lang-suggestion-dismissed') === 'true'
      if (isDismissed) return

      try {
        const location = await detectUserLocation()
        if (!isMounted) return

        let targetLang = null
        if (!location.isSpanishSpeaking && currentLang === 'es') {
          targetLang = 'en'
        } else if (location.isSpanishSpeaking && currentLang === 'en') {
          targetLang = 'es'
        }

        if (targetLang) {
          const localizedCountryName =
            location.countryName ||
            getCountryName(location.countryCode, targetLang) ||
            ''
          const flag = getFlagEmoji(location.countryCode)

          setSuggestion({
            targetLang,
            countryCode: location.countryCode,
            countryName: localizedCountryName,
            flag,
          })

          // Pequeña pausa para no interrumpir la carga inicial de la página
          const timer = setTimeout(() => {
            if (isMounted) setIsVisible(true)
          }, 600)

          return () => clearTimeout(timer)
        }
      } catch {
        // En caso de error silencioso, no mostramos banner
      }
    }

    checkLocation()

    return () => {
      isMounted = false
    }
  }, [currentLang])

  const dismiss = () => {
    setIsExiting(true)
    localStorage.setItem('resume-lang-suggestion-dismissed', 'true')
    setTimeout(() => {
      setIsVisible(false)
      setSuggestion(null)
      setIsExiting(false)
    }, 280)
  }

  const accept = () => {
    if (!suggestion) return
    setIsExiting(true)
    localStorage.setItem('resume-lang-suggestion-dismissed', 'true')
    onSwitchLang(suggestion.targetLang)
    setTimeout(() => {
      setIsVisible(false)
      setSuggestion(null)
      setIsExiting(false)
    }, 280)
  }

  // Soporte para cerrar con tecla Escape
  useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dismiss()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (!isVisible || !suggestion) return null

  const isSuggestingEnglish = suggestion.targetLang === 'en'

  return (
    <aside
      className={`lang-suggestion-banner ${isExiting ? 'banner-exiting' : ''}`}
      role="region"
      aria-label={
        isSuggestingEnglish
          ? 'Language recommendation'
          : 'Recomendación de idioma'
      }
      aria-live="polite"
    >
      <div className="lang-suggestion-header">
        <span className="lang-suggestion-badge">
          <span className="lang-suggestion-flag" aria-hidden="true">
            {suggestion.flag}
          </span>
          <span className="lang-suggestion-badge-text">
            {suggestion.countryName
              ? isSuggestingEnglish
                ? `Visiting from ${suggestion.countryName}`
                : `Visita desde ${suggestion.countryName}`
              : isSuggestingEnglish
                ? 'Location detected'
                : 'Ubicación detectada'}
          </span>
        </span>

        <button
          type="button"
          className="lang-suggestion-close"
          onClick={dismiss}
          aria-label={
            isSuggestingEnglish ? 'Close recommendation' : 'Cerrar recomendación'
          }
          title={isSuggestingEnglish ? 'Close' : 'Cerrar'}
        >
          ✕
        </button>
      </div>

      <div className="lang-suggestion-body">
        <h3 className="lang-suggestion-title">
          {isSuggestingEnglish
            ? 'Prefer this resume in English?'
            : '¿Prefieres el currículum en español?'}
        </h3>
        <p className="lang-suggestion-desc">
          {isSuggestingEnglish
            ? "We noticed you're browsing from outside a Spanish-speaking country. You can switch to the English version."
            : 'Detectamos que navegas desde un país hispanohablante. Puedes cambiar a la versión en español.'}
        </p>
      </div>

      <div className="lang-suggestion-actions">
        <button
          type="button"
          className="lang-suggestion-btn-primary"
          onClick={accept}
        >
          {isSuggestingEnglish ? 'Switch to English' : 'Cambiar a Español'}
        </button>
        <button
          type="button"
          className="lang-suggestion-btn-ghost"
          onClick={dismiss}
        >
          {isSuggestingEnglish ? 'Keep in Spanish' : 'Mantener en Inglés'}
        </button>
      </div>
    </aside>
  )
}
