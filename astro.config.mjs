import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Permitir definir BASE desde env para Vercel ("/" por defecto) o GitHub Pages ("/wiki-dungeon/")
const SITE_BASE = process.env.SITE_BASE || '/wiki-dungeon/';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: SITE_BASE,
});

