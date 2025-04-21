# Portfolio Personal

Mi portfolio personal desarrollado con Astro, React y TypeScript, mostrando mis proyectos, habilidades y experiencia profesional.

## 🚀 Características

- **Diseño Responsive**: Se adapta a cualquier dispositivo.
- **Modo oscuro/claro**: Cambia entre temas según tu preferencia.
- **Optimizado para SEO**: Estructura y metadatos que favorecen el posicionamiento.
- **Rápido**: Gracias a la arquitectura de Astro con hidratación parcial.
- **Docker**: Implementación sencilla mediante contenedores.

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework web para sitios orientados a contenido
- **React**: Componentes interactivos
- **TypeScript**: Seguridad de tipos
- **CSS**: Estilos personalizados

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── documents/     # CV y otros documentos
│   └── images/        # Imágenes de perfil y proyectos
├── src/
│   ├── components/    # Componentes modulares
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── projects/
│   ├── layouts/       # Estructura principal
│   ├── pages/         # Rutas de la aplicación
│   └── styles/        # Estilos globales
└── dockerfile         # Configuración para despliegue con Docker
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando               | Acción                                              |
| :-------------------- | :-------------------------------------------------- |
| `pnpm install`        | Instala las dependencias                            |
| `pnpm dev`            | Inicia servidor de desarrollo en `localhost:4321`   |
| `pnpm build`          | Construye el sitio para producción en `./dist/`     |
| `pnpm preview`        | Vista previa de la build antes de desplegar         |

## 🐳 Despliegue con Docker

Para desplegar la aplicación utilizando Docker:

```bash
# Construir la imagen
docker build -t portfolio-gerber .

# Ejecutar el contenedor
docker run -p 8080:80 portfolio-gerber
```

## 📝 Licencia

Este proyecto está bajo licencia [MIT](LICENSE).

---

© 2025 Gerber Colindres | Desarrollador Web
