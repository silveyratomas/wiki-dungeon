# 🚀 Guía de Despliegue en Vercel

## Cambios Realizados

✅ **Rutas corregidas**: Todos los assets, imágenes y enlaces usan `import.meta.env.BASE_URL`
✅ **Videos movidos**: De `/videos/` a `/public/videos/` para publicación correcta
✅ **Base configurable**: Soporte para GitHub Pages (`/wiki-dungeon/`) y Vercel (`/`)
✅ **Build exitoso**: Proyecto compilado sin errores

---

## 📦 Configuración en Vercel

### 1. Importar el Proyecto

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"** o **"Import Project"**
3. Conecta tu repositorio de GitHub: `silveyratomas/wiki-dungeon`
4. Selecciona la rama que quieras desplegar (recomendado: `main` o crear una rama específica para Vercel)

### 2. Configuración del Proyecto

**Framework Preset**: Astro (Vercel lo detecta automáticamente)

**Build & Development Settings**:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Variables de Entorno (MUY IMPORTANTE)

En la sección **Environment Variables**, agrega:

| Name | Value |
|------|-------|
| `SITE_BASE` | `/` |

Esto hace que todas las rutas BASE_URL apunten a la raíz (`/`) en lugar de `/wiki-dungeon/`.

### 4. Deploy

Click en **Deploy** y espera a que termine el build.

---

## 🔍 Verificación Post-Deploy

Una vez desplegado, verifica:

- ✅ La página de inicio carga correctamente
- ✅ Las imágenes se ven (logo, backgrounds, tooltips)
- ✅ Los videos se reproducen en la página de Niveles
- ✅ La navegación funciona entre páginas
- ✅ La fuente Minecraft se carga correctamente

---

## 🐛 Troubleshooting

### Si las imágenes no cargan:
- Verifica que `SITE_BASE=/` esté configurado en Environment Variables
- Re-deploya después de agregar la variable

### Si los videos no se reproducen:
- Confirma que `/public/videos/` contiene los archivos .mp4
- Verifica en el navegador que la ruta sea `https://tu-dominio.vercel.app/videos/misionNpc1.mp4`

### Si necesitas volver a GitHub Pages:
- Quita la variable `SITE_BASE` o ponla en `/wiki-dungeon/`
- Re-deploya

---

## 📊 Diferencias entre GitHub Pages y Vercel

| Aspecto | GitHub Pages | Vercel |
|---------|-------------|--------|
| Base URL | `/wiki-dungeon/` | `/` |
| Variable de entorno | No necesaria (default) | `SITE_BASE=/` |
| Velocidad | Buena | Excelente |
| CDN | Global | Edge Network |
| Analytics | No incluido | Incluido |

---

## 🎯 Próximos Pasos

1. **Crear páginas faltantes**: Crafteos, Bugs, Comandos, Warps (están en el menú pero dan 404)
2. **Optimizar imágenes**: Convertir a WebP para mejor rendimiento
3. **Añadir favicon**: Personalizar el ícono del sitio
4. **SEO**: Agregar meta tags para compartir en redes sociales
5. **Analytics**: Configurar Google Analytics o Vercel Analytics

---

## 💡 Comando Rápido para Re-Deploy

Si haces cambios locales:

```powershell
# Build local
npm run build

# Commit y push
git add .
git commit -m "feat: descripción del cambio"
git push origin main

# Vercel desplegará automáticamente
```

---

**¡Tu wiki está lista para producción!** 🎉
