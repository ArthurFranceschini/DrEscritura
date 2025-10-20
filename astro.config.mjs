import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://drescritura.com.br",
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: vercel(),
});