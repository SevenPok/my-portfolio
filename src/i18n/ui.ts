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
      contact: "Contact",
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
      github: {
        title: "Go to @sevenpok's GitHub",
      },
      linkedin: {
        title: "Go to @gerber-colindres's LinkedIn",
      },
    },
    skills: {
      title: "Skills and Technologies",
      description:
        "Here is a list of the technologies and skills I have acquired throughout my career. Each one represents a step in my journey as a developer. I am excited to continue learning and growing in the future.",
      level: "Experience Level",
    },
    projects: {
      title: "Projects I've Worked On",
      description:
        "Here you will find a selection of personal and collaborative projects I have contributed to. Each one showcases the skills, technologies, and experiences I have acquired throughout my career as a developer.",
      demo: "View Demo",
    },
    experience: {
      title: "Professional Experience",
      description:
        "Throughout my career, I have had the opportunity to work on a variety of projects ranging from web applications to enterprise management systems. Here is a summary of my work experience:",
    },
    contact: {
      title: "Contact Me",
      description: "If you would like to get in touch with me, feel free to do so through the following form:",
      form: {
        email: "Email",
        name: "Full Name",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "An error occurred while sending the message.",
        captchaError: "Please complete the reCAPTCHA before submitting the form.",
        placeholder: {
          name: "Enter your name",
          email: "Enter your email",
          message: "Enter your message",
        },
      },
    },
    404: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
      back: "Go Back",
    },
  },
  es: {
    navbar: {
      about: "Acerca de",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
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
      github: {
        title: "Ir a GitHub de @sevenpok",
      },
      linkedin: {
        title: "Ir a LinkedIn de @gerber-colindres",
      },
    },
    skills: {
      title: "Habilidades y Tecnologías",
      description:
        "Aquí hay una lista de las tecnologías y habilidades que he adquirido a lo largo de mi carrera. Cada una de ellas representa un paso en mi viaje como desarrollador. Estoy emocionado por seguir aprendiendo y creciendo en el futuro.",
      level: "Nivel de Experiencia",
    },
    projects: {
      title: "Proyectos en los que he trabajado",
      description:
        "Aquí encontrarás una selección de proyectos personales y colaborativos en los que he contribuido. Cada uno demuestra habilidades, tecnologías y experiencias adquiridas a lo largo de mi carrera como desarrollador.",
      demo: "Ver Demo",
    },
    experience: {
      title: "Experiencia Profesional",
      description:
        "A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que abarcan desde aplicaciones web hasta sistemas de gestión empresarial. Aquí hay un resumen de mi experiencia laboral:",
    },
    contact: {
      title: "Contáctame",
      description: "Si deseas ponerte en contacto conmigo, no dudes en hacerlo a través del siguiente formulario:",
      form: {
        email: "Correo Electrónico",
        name: "Nombre Completo",
        message: "Mensaje",
        send: "Enviar Mensaje",
        success: "¡Mensaje enviado con éxito!",
        error: "Ocurrió un error al enviar el mensaje.",
        captchaError: "Por favor, completa el reCAPTCHA antes de enviar el formulario.",
        placeholder: {
          name: "Ingresa tu nombre",
          email: "Ingresa tu correo electrónico",
          message: "Ingresa tu mensaje",
        },
      },
    },
    404: {
      title: "Página No Encontrada",
      description: "La página que buscas no existe.",
      back: "Regresar",
    },
  },
} as const;
