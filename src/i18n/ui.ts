export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Gerber Colindres. All rights reserved.`,
    },
    about: {
      description: `Hello! I'm <strong class="text-blue-600 dark:text-blue-400">Gerber Colindres</strong>, a Guatemalan software developer
      with over <span class="font-semibold dark:text-gray-200">three years</span>
      of professional experience. My passion is to create
      <span class="italic text-gray-700 dark:text-gray-400">efficient and innovative</span>
      technological solutions that make a positive impact.`,
      cv: {
        url: "/documents/gerber-colindres-cv-en.pdf",
        title: "Download CV of Gerber Colindres",
        filename: "gerber-colindres-cv-en.pdf",
      },
    },
    skills: {
      title: "Skills and Technologies",
    },
    projects: {
      title: "Projects I've Worked On",
      description:
        "Here you will find a selection of personal and collaborative projects I have contributed to. Each one showcases the skills, technologies, and experiences I have acquired throughout my career as a developer.",
    },
  },
  es: {
    navbar: {
      about: "Acerca de",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Gerber Colindres. Todos los derechos reservados.`,
    },
    about: {
      description: `¡Hola! Soy <strong class="text-blue-600 dark:text-blue-400">Gerber Colindres</strong>, desarrollador de software
      guatemalteco con más de
      <span class="font-semibold dark:text-gray-200">tres años</span>
      de experiencia profesional. Mi pasión es crear soluciones tecnológicas
      <span class="italic text-gray-700 dark:text-gray-400">eficientes e innovadoras</span>
      que impacten positivamente.`,
      cv: {
        url: "/documents/gerber-colindres-cv.pdf",
        title: "Descargar CV de Gerber Colindres",
        filename: "gerber-colindres-cv-es.pdf",
      },
    },
    skills: {
      title: "Habilidades y Tecnologías",
    },
    projects: {
      title: "Proyectos en los que he trabajado",
      description:
        "Aquí encontrarás una selección de proyectos personales y colaborativos en los que he contribuido. Cada uno demuestra habilidades, tecnologías y experiencias adquiridas a lo largo de mi carrera como desarrollador.",
    },
  },
} as const;
