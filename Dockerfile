FROM node:22.14-slim

# Configurar pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY pnpm-lock.yaml ./ 
COPY package.json ./ 
RUN pnpm install

# Copiar el resto del código fuente
COPY . . 

# Ejecutar el build de Astro
RUN pnpm build

# Exponer el puerto (Astro usa 4321 por defecto)
EXPOSE 4321

# Iniciar la aplicación usando el servidor integrado de Astro para servir los archivos estáticos
CMD ["pnpm", "preview", "--host", "0.0.0.0"]
