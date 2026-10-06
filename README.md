# Emiliano Correa · Currículum Vitae Digital

Sitio web interactivo y responsivo desarrollado en **React 19** y **Vite** para presentar el perfil profesional, trayectoria laboral, habilidades y formación académica de Emiliano Correa, con soporte bilingüe (Español / Inglés).

🌐 **URL en Producción (GitHub Pages):** [https://emicorrea.github.io/resume/](https://emicorrea.github.io/resume/)

---

## 👤 Presentación Personal

<!-- ================================================================= -->
<!-- PLACEHOLDER: PRESENTACIÓN PERSONAL / CARTA DE PRESENTACIÓN       -->
<!-- Puedes personalizar o expandir esta sección con tu historia,      -->
<!-- intereses de especialización o mensaje para reclutadores.         -->
<!-- ================================================================= -->

> **Hola, soy Emiliano Correa.**  
> Desarrollador de Software enfocado en tecnologías .NET y backend, con experiencia liderando modernizaciones de sistemas hacia arquitecturas de microservicios y prácticas ágiles de despliegue continuo.  
> 
> *[Inserta aquí tu presentación personal extendida o carta de motivación para tus postulaciones: logros recientes, objetivos profesionales a mediano plazo, qué tipo de proyectos o culturas de equipo te apasionan, o reflexiones sobre tu enfoque de liderazgo y aprendizaje continuo]*

---

## 📸 Cómo Agregar o Reemplazar la Fotografía Personal

La aplicación cuenta con el componente modular `PhotoPlaceholder.jsx` (`src/components/PhotoPlaceholder.jsx`), diseñado con un marco estilizado e indicador visual.

Para colocar tu foto:
1. Guarda tu fotografía (por ejemplo `profile.jpg`) en la carpeta `src/assets/`.
2. En `src/components/Hero.jsx`, importa tu fotografía:
   ```jsx
   import profilePhoto from '../assets/profile.jpg'
   ```
3. Pásala como prop `photoUrl` al componente:
   ```jsx
   <PhotoPlaceholder
     photoUrl={profilePhoto}
     altText={heroData.photoAlt}
   />
   ```
Si `photoUrl` no se suministra, el componente mantendrá el elegante estado vacío con tus iniciales (`EC`) e insignia de carga.

---

## 🎨 Psicología del Color y Sistema de Diseño

La interfaz visual fue diseñada aplicando la psicología del color para proyectar emociones estratégicas:

| Emoción / Valor | Paleta Aplicada | Intención & Fundamento |
| :--- | :--- | :--- |
| **Seguridad & Profesionalismo** | Deep Slate & Navy (`#080c14`, `#0f172a`, `#1e293b`) | Transmite solidez, confianza, estabilidad empresarial y rigor de ingeniería de software. |
| **Tecnología** | Azul Eléctrico & Cobalto (`#2563eb`, `#3b82f6`, `#60a5fa`) | Simboliza lógica computacional, arquitecturas cloud modernas e innovación digital. |
| **Creatividad** | Violeta e Índigo Vibrante (`#6366f1`, `#8b5cf6`, `#a855f7`) | Expresa pensamiento lateral, pasión por resolver problemas complejos y diseño frontend. |
| **Éxito & Liderazgo** | Ámbar Dorado (`#f59e0b`, `#fbbf24`) y Esmeralda (`#10b981`) | Destaca hitos profesionales, impacto positivo en equipos, determinación y disponibilidad activa. |

---

## ⚙️ Estructura y Modularidad del Código

El proyecto cumple la regla de **un único componente por archivo JSX** en `src/components/`:

```
src/
├── components/
│   ├── Contact.jsx            # Bloque de contacto y copia de email
│   ├── Education.jsx          # Sección de formación académica
│   ├── EducationItem.jsx      # Tarjeta individual de educación
│   ├── Experience.jsx         # Línea de tiempo de trayectoria laboral
│   ├── ExperienceItem.jsx     # Tarjeta individual de experiencia con tecnologías
│   ├── Footer.jsx             # Pie de página y enlace volver arriba
│   ├── Hero.jsx               # Presentación inicial y llamadas a la acción
│   ├── LanguageToggle.jsx     # Selector interactivo de idioma (ES / EN)
│   ├── Languages.jsx          # Competencias lingüísticas
│   ├── Navbar.jsx             # Barra de navegación superior
│   ├── PhotoPlaceholder.jsx   # Marco para fotografía o avatar estilizado
│   ├── SectionHeading.jsx     # Encabezado reutilizable con número y títulos
│   ├── SkillCategory.jsx      # Tarjeta de categoría de habilidades
│   ├── Skills.jsx             # Sección de habilidades duras y blandas
│   └── TechBadge.jsx          # Chip visual para etiquetas tecnológicas
├── data/
│   └── cvData.js              # Datos centralizados y bilingües del CV
├── App.jsx                    # Componente raíz orquestador de estado e i18n
├── styles.css                 # Sistema de diseño, tokens y estilos responsivos
└── main.jsx                   # Punto de entrada de React
```

---

## 🚀 Comandos de Desarrollo y Despliegue

### Instalación de dependencias
```bash
npm install
```

### Servidor de desarrollo local
```bash
npm run dev
```

### Compilación para producción
```bash
npm run build
```

### Despliegue automático
El proyecto se compila y despliega de manera automática en GitHub Pages al realizar un push a la rama `main` mediante la acción configurada en `.github/workflows/deploy.yml`.
