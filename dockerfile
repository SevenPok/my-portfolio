FROM node:22.16-slim AS build

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

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
