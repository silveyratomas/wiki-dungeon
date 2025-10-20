import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Base por defecto '/' para Vercel. Si querés GitHub Pages, cambiá a '/wiki-dungeon/'
const SITE_BASE = process.env.SITE_BASE || '/';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: SITE_BASE,
});

