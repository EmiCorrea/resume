import profilePic from '../assets/pic.jpeg'

export const cvData = {
  es: {
    meta: {
      title: 'Emiliano Correa · Desarrollador de software',
      description: 'Currículum online de Emiliano Correa, desarrollador de software.',
    },
    nav: {
      brand: 'EC',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Educación',
      languages: 'Idiomas',
      contact: 'Contacto',
      changeLanguage: 'Cambiar a inglés',
    },
    hero: {
      statusBadge: 'Disponible para nuevos desafíos',
      greeting: 'Hola, soy',
      name: 'Emiliano Correa',
      rolePrefix: 'Especialista en',
      role: 'Software Engineer (.NET & Backend)',
      summary:
        'Soy desarrollador porque me apasiona crear soluciones combinando creatividad y lógica. Soy una persona determinada, con la voluntad y la disciplina necesarias para alcanzar cualquier meta que me propongo. Busco oportunidades que me permitan desarrollar mis habilidades de liderazgo; sé que tengo un impacto positivo en las personas con las que me relaciono y me encanta canalizar esa misma energía en mi entorno profesional.',
      contactCta: 'Contactar',
      linkedinCta: 'Perfil de LinkedIn',
      githubCta: 'GitHub',
      location: 'Córdoba, Argentina',
      email: 'correa.emi@gmail.com',
      photoUrl: profilePic,
      photoAlt: 'Fotografía profesional de Emiliano Correa',
      photoPlaceholderText: 'Tu fotografía aquí',
      photoPlaceholderHint: 'Sube tu foto a src/assets/',
    },
    sections: {
      experience: {
        eyebrow: '01 / Trayectoria',
        title: 'Experiencia Profesional',
        subtitle: 'Historial de impacto técnico y liderazgo en proyectos de software.',
      },
      skills: {
        eyebrow: '02 / Capacidades',
        title: 'Habilidades & Stack',
        subtitle: 'Herramientas técnicas consolidadas y competencias de liderazgo.',
        hardSkillsTitle: 'Habilidades Técnicas',
        softSkillsTitle: 'Habilidades Blandas & Liderazgo',
      },
      education: {
        eyebrow: '03 / Formación',
        title: 'Educación & Certificaciones',
        subtitle: 'Fundamentos académicos en programación y ciencias.',
      },
      languages: {
        eyebrow: '04 / Comunicación',
        title: 'Idiomas',
        subtitle: 'Competencias lingüísticas para entornos internacionales.',
      },
      contact: {
        eyebrow: '05 / Hablemos',
        title: '¿Construimos la próxima gran solución juntos?',
        subtitle:
          'Abierto a roles de Software Engineer, Backend Developer y posiciones con proyección de liderazgo técnico.',
        emailLabel: 'Escríbeme por email',
        linkedinLabel: 'Conectemos en LinkedIn',
        githubLabel: 'Ver código en GitHub',
        copyEmailSuccess: '¡Email copiado al portapapeles!',
      },
    },
    experience: [
      {
        company: 'PPRO',
        role: 'Software Engineer (.NET) / Desarrollador .NET',
        period: '2022 - 2026',
        isCurrent: true,
        description:
          'Me consolidé como el referente de .NET del equipo y lideré el proyecto de migración del portal principal adaptándolo a un framework moderno y a una nueva arquitectura de infraestructura y despliegue.',
        technologies: ['.NET 8.0', 'C#', 'AWS', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Microservicios', 'CI/CD'],
      },
      {
        company: 'QUBITS S.R.L',
        role: 'Software Engineer (.NET) / Desarrollador .NET',
        period: '2021 - 2022',
        isCurrent: false,
        description:
          'Me sumé al equipo de desarrollo de un portal de administración de clientes de una entidad bancaria, asumiendo tareas críticas con autonomía para asegurar la estabilidad, mantenimiento y evolución continua de sistemas en producción.',
        technologies: ['.NET Framework', 'C#', 'JavaScript', 'jQuery', 'MongoDB', 'GitLab', 'Jira'],
      },
      {
        company: 'GLOBANT',
        role: 'Software Engineer (.NET) / Desarrollador Backend .NET',
        period: '2019 - 2021',
        isCurrent: false,
        description:
          'Colaboré en múltiples proyectos desempeñándome como desarrollador backend, demostrando adaptabilidad a diversas bases de código y dominios de negocio. Trabajo coordinado con equipos Frontend para validar soluciones integrales end-to-end.',
        technologies: ['.NET', 'C#', 'SQL Server', 'APIs REST', 'Visual Studio', 'Git', 'Scrum'],
      },
    ],
    skills: {
      categories: [
        {
          title: 'Backend & Arquitectura',
          colorKey: 'tech',
          items: ['.NET 8.0', 'C#', '.NET Core', '.NET Framework', 'RESTful APIs', 'Arquitectura Microservicios'],
        },
        {
          title: 'Frontend & Web',
          colorKey: 'creative',
          items: ['React (en práctica activa)', 'JavaScript (ES6+)', 'jQuery', 'HTML5', 'CSS3 Moderno'],
        },
        {
          title: 'Bases de Datos',
          colorKey: 'tech',
          items: ['PostgreSQL', 'SQL Server', 'MongoDB'],
        },
        {
          title: 'Cloud, DevOps & Herramientas',
          colorKey: 'security',
          items: ['AWS', 'Docker', 'GitHub & Actions', 'GitLab', 'Git', 'Visual Studio', 'Jira'],
        },
      ],
      soft: [
        {
          name: 'Aptitud para el Liderazgo',
          desc: 'Energía positiva, guía técnica y motivación en equipos multidisciplinarios.',
        },
        {
          name: 'Resolución de Problemas',
          desc: 'Pensamiento analítico estructurado y creatividad para resolver retos complejos.',
        },
        {
          name: 'Trabajo en Equipo',
          desc: 'Comunicación asertiva y sinergia con perfiles frontend, QA y producto.',
        },
        {
          name: 'Determinación y Disciplina',
          desc: 'Foco constante en objetivos y entrega de soluciones de alto impacto.',
        },
      ],
    },
    education: [
      {
        title: 'Tecnicatura Universitaria en Programación',
        institution: 'Universidad Tecnológica Nacional (UTN) - Facultad Regional Córdoba',
        period: '2019 - 2021',
        highlight: 'Formación universitaria en algoritmos, estructuras de datos y desarrollo de software.',
      },
      {
        title: 'Tecnicatura Superior en Biotecnología y Análisis Químico-Biológico',
        institution: 'Instituto BAC-Spinoza',
        period: '2010 - 2013',
        highlight: 'Pensamiento científico riguroso, método analítico y precisión experimental.',
      },
    ],
    languages: [
      {
        language: 'Español',
        level: 'Nativo',
        badge: 'Lengua materna',
      },
      {
        language: 'Inglés',
        level: 'Intermedio Avanzado (B2 – CEFR)',
        badge: 'Competencia profesional / Comunicación fluida',
      },
    ],
    footer: {
      copyright: 'Emiliano Correa. Desarrollado con React & Vite.',
      hostedOn: 'Desplegado en GitHub Pages',
      backToTop: 'Volver arriba ↑',
    },
  },

  en: {
    meta: {
      title: 'Emiliano Correa · Software Developer',
      description: 'Online resume of Emiliano Correa, software developer.',
    },
    nav: {
      brand: 'EC',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      contact: 'Contact',
      changeLanguage: 'Switch to Spanish',
    },
    hero: {
      statusBadge: 'Open to new opportunities',
      greeting: "Hello, I'm",
      name: 'Emiliano Correa',
      rolePrefix: 'Specialized in',
      role: 'Software Engineer (.NET & Backend)',
      summary:
        'I am a developer because I am passionate about creating solutions that combine creativity and logic. I am a determined person with the drive and discipline needed to achieve any goal I set for myself. I seek opportunities that allow me to develop my leadership skills; I know that I have a positive impact on the people I interact with, and I love channeling that same energy into my professional environment.',
      contactCta: 'Get in touch',
      linkedinCta: 'LinkedIn Profile',
      githubCta: 'GitHub',
      location: 'Cordoba, Argentina',
      email: 'correa.emi@gmail.com',
      photoUrl: profilePic,
      photoAlt: 'Professional photo of Emiliano Correa',
      photoPlaceholderText: 'Your photo here',
      photoPlaceholderHint: 'Place your photo in src/assets/',
    },
    sections: {
      experience: {
        eyebrow: '01 / Career Path',
        title: 'Professional Experience',
        subtitle: 'Track record of technical leadership and architectural modernization.',
      },
      skills: {
        eyebrow: '02 / Capabilities',
        title: 'Skills & Stack',
        subtitle: 'Solid technical toolbox combined with strong leadership competencies.',
        hardSkillsTitle: 'Technical Skills',
        softSkillsTitle: 'Soft Skills & Leadership',
      },
      education: {
        eyebrow: '03 / Academic Background',
        title: 'Education & Degrees',
        subtitle: 'Academic foundations in software engineering and sciences.',
      },
      languages: {
        eyebrow: '04 / Communication',
        title: 'Languages',
        subtitle: 'Language proficiencies for international and cross-cultural teams.',
      },
      contact: {
        eyebrow: '05 / Reach Out',
        title: "Let's build the next impactful solution together",
        subtitle:
          'Open to Software Engineer, Backend Developer, and roles with technical leadership potential.',
        emailLabel: 'Send an email',
        linkedinLabel: 'Connect on LinkedIn',
        githubLabel: 'View GitHub Profile',
        copyEmailSuccess: 'Email copied to clipboard!',
      },
    },
    experience: [
      {
        company: 'PPRO',
        role: 'Software Engineer (.NET)',
        period: '2022 - 2026',
        isCurrent: true,
        description:
          "Earned recognition as the team's .NET subject matter expert through consistently delivering high-quality solutions and technical leadership. Led the modernization of the customer portal by migrating it to a modern .NET framework and aligning its architecture with the company's microservices platform and deployment practices, improving maintainability, scalability, and long-term sustainability.",
        technologies: ['.NET 8.0', 'C#', 'AWS', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Microservices', 'CI/CD'],
      },
      {
        company: 'QUBITS S.R.L',
        role: 'Software Engineer (.NET)',
        period: '2021 - 2022',
        isCurrent: false,
        description:
          'Joined the development team responsible for a customer management portal for a banking institution, quickly earning the trust to work independently on critical tasks. Maintained and enhanced multiple .NET applications, delivering reliable solutions while ensuring the stability and continuous improvement of existing systems.',
        technologies: ['.NET Framework', 'C#', 'JavaScript', 'jQuery', 'MongoDB', 'GitLab', 'Jira'],
      },
      {
        company: 'GLOBANT',
        role: 'Software Engineer (.NET) / Backend Developer',
        period: '2019 - 2021',
        isCurrent: false,
        description:
          'Collaborated on multiple projects as a Backend Developer, consistently demonstrating the ability to adapt quickly to new codebases, technologies, and business domains when transitioning between teams. Worked closely with Front-End Engineers to validate and test end-to-end solutions.',
        technologies: ['.NET', 'C#', 'SQL Server', 'REST APIs', 'Visual Studio', 'Git', 'Scrum'],
      },
    ],
    skills: {
      categories: [
        {
          title: 'Backend & Architecture',
          colorKey: 'tech',
          items: ['.NET 8.0', 'C#', '.NET Core', '.NET Framework', 'RESTful APIs', 'Microservices Architecture'],
        },
        {
          title: 'Frontend & Web',
          colorKey: 'creative',
          items: ['React (active practice)', 'JavaScript (ES6+)', 'jQuery', 'HTML5', 'Modern CSS3'],
        },
        {
          title: 'Databases',
          colorKey: 'tech',
          items: ['PostgreSQL', 'SQL Server', 'MongoDB'],
        },
        {
          title: 'Cloud, DevOps & Tooling',
          colorKey: 'security',
          items: ['AWS', 'Docker', 'GitHub & Actions', 'GitLab', 'Git', 'Visual Studio', 'Jira'],
        },
      ],
      soft: [
        {
          name: 'Leadership Aptitude',
          desc: 'Positive energy, technical guidance, and team alignment across diverse groups.',
        },
        {
          name: 'Problem Solving',
          desc: 'Structured logical reasoning combined with creative out-of-the-box approaches.',
        },
        {
          name: 'Teamwork & Collaboration',
          desc: 'Close cross-functional synergy with frontend developers, QA, and product leads.',
        },
        {
          name: 'Determination & Drive',
          desc: 'Relentless focus on goals and delivering dependable, sustainable value.',
        },
      ],
    },
    education: [
      {
        title: 'Associate Degree in Software Development',
        institution: 'Universidad Tecnológica Nacional (UTN) - Facultad Regional Córdoba',
        period: '2019 - 2021',
        highlight: 'University degree in algorithms, data structures, and software engineering principles.',
      },
      {
        title: 'Associate of Applied Science (A.A.S.) in Biotechnology & Chemical-Biological Analysis',
        institution: 'Instituto BAC-Spinoza',
        period: '2010 - 2013',
        highlight: 'Rigorous scientific methodology, experimental accuracy, and analytical problem-solving.',
      },
    ],
    languages: [
      {
        language: 'Spanish',
        level: 'Native',
        badge: 'First Language',
      },
      {
        language: 'English',
        level: 'Upper-Intermediate (B2 – CEFR)',
        badge: 'Professional Working Proficiency',
      },
    ],
    footer: {
      copyright: 'Emiliano Correa. Built with React & Vite.',
      hostedOn: 'Deployed on GitHub Pages',
      backToTop: 'Back to top ↑',
    },
  },
}
