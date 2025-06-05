# Tu Proyecto Impulso Digital 🚀

Este proyecto está estructurado para aprovechar lo mejor de React + Next.js, con un enfoque modular y escalable.

## Estructura de Carpetas

- `components/` → Componentes reutilizables, agrupados por tipo.
- `data/` → Datos estáticos o mockeados (ej. `pageData.js`).
- `hooks/` → Hooks personalizados para lógica reutilizable.
- `lib/` → Funciones utilitarias o helpers.
- `constants/` → Constantes globales (colores, textos, etc.).
- `__tests__/` → Carpeta para pruebas unitarias/integración.
- `pages/` → Rutas Next.js, cada archivo representa una página.
- `styles/` → Archivos CSS globales y configuraciones de Tailwind CSS.
- `public/` → Archivos estáticos como imágenes, favicon, etc.
- `.next/` → Carpeta generada automáticamente por Next.js que contiene los archivos de compilación y caché.

## Archivos Importantes

- `.env.local` → Variables de entorno específicas para el entorno local.
- `next.config.js` → Configuración personalizada de Next.js.
- `tailwind.config.js` → Configuración de Tailwind CSS.
- `postcss.config.js` → Configuración de PostCSS.
- `package.json` → Dependencias y scripts del proyecto.

## Scripts útiles

```bash
npm run dev      # Inicia el entorno de desarrollo
npm run build    # Compila el proyecto para producción
npm run start    # Inicia el servidor en producción
npm run lint     # Ejecuta linter
```

## Notas Adicionales

- **Caché de Webpack**: La carpeta `.next/cache/webpack/` contiene archivos de caché generados por Webpack para optimizar la compilación. Estos archivos incluyen configuraciones para el cliente, servidor y edge-server.
- **Optimización de Paquetes**: Next.js está configurado para optimizar la importación de paquetes como `lucide-react`, `date-fns`, `lodash-es`, entre otros, para mejorar el rendimiento.

---
