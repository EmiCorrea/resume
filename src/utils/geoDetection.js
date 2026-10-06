/**
 * Utilidades para detección geográfica y de idioma basadas en ubicación.
 */

// Conjunto oficial de países y territorios hispanohablantes (ISO 3166-1 alpha-2)
export const SPANISH_SPEAKING_COUNTRIES = new Set([
  'AR', // Argentina
  'BO', // Bolivia
  'CL', // Chile
  'CO', // Colombia
  'CR', // Costa Rica
  'CU', // Cuba
  'DO', // República Dominicana
  'EC', // Ecuador
  'SV', // El Salvador
  'GQ', // Guinea Ecuatorial
  'GT', // Guatemala
  'HN', // Honduras
  'MX', // México
  'NI', // Nicaragua
  'PA', // Panamá
  'PY', // Paraguay
  'PE', // Perú
  'PR', // Puerto Rico
  'ES', // España
  'UY', // Uruguay
  'VE', // Venezuela
])

// Palabras clave de husos horarios hispanohablantes como fallback sin red
const SPANISH_TIMEZONE_KEYWORDS = [
  'argentina',
  'buenos_aires',
  'cordoba',
  'bogota',
  'caracas',
  'guatemala',
  'guayaquil',
  'havana',
  'la_paz',
  'lima',
  'managua',
  'mexico_city',
  'monterrey',
  'tijuana',
  'cancun',
  'montevideo',
  'panama',
  'puerto_rico',
  'santiago',
  'santo_domingo',
  'tegucigalpa',
  'costa_rica',
  'el_salvador',
  'asuncion',
  'madrid',
  'canary',
  'malabo',
]

/**
 * Convierte un código de país ISO 3166-1 alpha-2 en emoji de bandera.
 */
export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🌐'
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  } catch {
    return '🌐'
  }
}

/**
 * Obtiene el nombre del país localizado usando Intl.DisplayNames nativo.
 */
export function getCountryName(countryCode, lang = 'es') {
  if (!countryCode) return ''
  try {
    const displayNames = new Intl.DisplayNames([lang, 'es', 'en'], { type: 'region' })
    return displayNames.of(countryCode.toUpperCase()) || countryCode
  } catch {
    return countryCode
  }
}

/**
 * Infiere si el usuario probablemente está en una región hispanohablante
 * basándose en su huso horario local (resiliente a bloqueadores de red).
 */
export function inferSpanishFromTimezone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone?.toLowerCase() || ''
    return SPANISH_TIMEZONE_KEYWORDS.some((kw) => tz.includes(kw))
  } catch {
    return false
  }
}

/**
 * Ejecuta una petición fetch con timeout usando AbortController.
 */
async function fetchWithTimeout(url, timeoutMs = 2500) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`)
    }
    return await response.json()
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * Detecta la ubicación geográfica del usuario visitante.
 * Prioriza APIs ligeras de geolocalización por IP y cuenta con fallbacks locales por huso horario.
 */
export async function detectUserLocation() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)

    // Opción para resetear el descarte en pruebas: ?resetLangPrompt=true
    if (params.get('resetLangPrompt') === 'true') {
      try {
        localStorage.removeItem('resume-lang-suggestion-dismissed')
        sessionStorage.removeItem('resume-detected-location')
      } catch {
        // Ignorar
      }
    }

    // Permite simular un país para pruebas directas: ?country=US o ?country=AR
    const testCountry = params.get('country') || params.get('simCountry')
    if (testCountry && testCountry.length === 2) {
      const code = testCountry.toUpperCase()
      return {
        countryCode: code,
        countryName: getCountryName(code, 'es'),
        isSpanishSpeaking: SPANISH_SPEAKING_COUNTRIES.has(code),
        source: 'url-param',
      }
    }

    // Caché en sessionStorage para evitar repetir peticiones en la misma navegación
    try {
      const cached = sessionStorage.getItem('resume-detected-location')
      if (cached) {
        return JSON.parse(cached)
      }
    } catch {
      // Ignorar fallo de almacenamiento
    }
  }

  let detectedCode = null
  let detectedName = ''
  let source = 'api'

  // Intento 1: API country.is (ultrarrápida y ligera)
  try {
    const data = await fetchWithTimeout('https://api.country.is', 2500)
    if (data?.country && typeof data.country === 'string') {
      detectedCode = data.country.toUpperCase()
    }
  } catch {
    // Si falla o hay timeout, se procede al fallback
  }

  // Intento 2: Fallback freeipapi
  if (!detectedCode) {
    try {
      const data = await fetchWithTimeout('https://freeipapi.com/api/json', 2500)
      if (data?.countryCode && typeof data.countryCode === 'string') {
        detectedCode = data.countryCode.toUpperCase()
        if (data.countryName) {
          detectedName = data.countryName
        }
      }
    } catch {
      // Ambos fallaron o no hay red
    }
  }

  let isSpanishSpeaking

  if (detectedCode) {
    isSpanishSpeaking = SPANISH_SPEAKING_COUNTRIES.has(detectedCode)
    if (!detectedName) {
      detectedName = getCountryName(detectedCode, 'es')
    }
  } else {
    // Fallback heurístico 100% offline basado en huso horario e idioma del navegador
    source = 'heuristic'
    isSpanishSpeaking = inferSpanishFromTimezone()

    if (!isSpanishSpeaking && typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('es')) {
        isSpanishSpeaking = true
      }
    }
  }

  const result = {
    countryCode: detectedCode,
    countryName: detectedName,
    isSpanishSpeaking,
    source,
  }

  if (typeof window !== 'undefined' && detectedCode) {
    try {
      sessionStorage.setItem('resume-detected-location', JSON.stringify(result))
    } catch {
      // Ignorar fallo de almacenamiento
    }
  }

  return result
}
