# Despliegue con Docker

Esta guía explica cómo desplegar tu aplicación Next.js usando Docker con variables de entorno.

## Archivos creados

- `Dockerfile`: Configuración multi-stage para optimizar la imagen
- `docker-compose.yml`: Configuración para orchestrar el contenedor
- `.dockerignore`: Archivos a excluir del contexto de build
- `.env.production`: Variables de entorno para producción
- `deploy.sh`: Script automatizado de despliegue
- `next.config.js`: Actualizado para modo standalone

## Configuración de variables de entorno

### 1. Editar .env.production

El archivo `.env.production` contiene las variables de entorno necesarias para producción:

```bash
# Variables de entorno para producción
NEXT_PUBLIC_SUPABASE_URL=https://wcoukzeulysuucvyjhxa.supabase.co
SUPABASE_SERVICE_KEY=tu_clave_de_servicio_aqui
NODE_ENV=production
```

**Importante**: 
- `NEXT_PUBLIC_SUPABASE_URL` se necesita en build time y runtime
- `SUPABASE_SERVICE_KEY` es sensible y solo se usa en runtime

## Formas de desplegar

### Opción 1: Script automatizado (Recomendado)

```bash
./deploy.sh
```

### Opción 2: Docker Compose manual

```bash
# Construir y levantar
docker-compose up --build -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 3: Docker manual con variables

```bash
# Construir la imagen
docker build \
  --build-arg NEXT_PUBLIC_SUPABASE_URL="https://wcoukzeulysuucvyjhxa.supabase.co" \
  -t mi-app-nextjs .

# Ejecutar el contenedor
docker run -d \
  --name mi-app \
  -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL="https://wcoukzeulysuucvyjhxa.supabase.co" \
  -e SUPABASE_SERVICE_KEY="tu_clave_aqui" \
  -e NODE_ENV=production \
  mi-app-nextjs
```

### Opción 4: Usando archivo .env

```bash
# Cargar variables del archivo .env.production
docker run -d \
  --name mi-app \
  -p 3000:3000 \
  --env-file .env.production \
  mi-app-nextjs
```

## Comandos útiles

```bash
# Ver contenedores corriendo
docker ps

# Ver logs de la aplicación
docker-compose logs -f app

# Acceder al contenedor
docker-compose exec app sh

# Limpiar imágenes no utilizadas
docker system prune

# Reconstruir sin caché
docker-compose build --no-cache
```

## Verificación

Una vez desplegado, la aplicación estará disponible en:
- http://localhost:3000

## Troubleshooting

### Error de permisos
Si tienes problemas de permisos, asegúrate de que el script sea ejecutable:
```bash
chmod +x deploy.sh
```

### Variables de entorno no cargadas
Verifica que el archivo `.env.production` existe y tiene el formato correcto.

### Puerto en uso
Si el puerto 3000 está ocupado, puedes cambiarlo en docker-compose.yml:
```yaml
ports:
  - "8080:3000"  # Usar puerto 8080 en el host
```

## Seguridad

- Nunca commites el archivo `.env.production` con valores reales
- Usa secretos de Docker o variables de entorno del sistema en producción
- El archivo `.env.production` actual tiene valores de ejemplo
