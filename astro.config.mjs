import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://drescritura.com.br",
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: vercel(),

  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'], 
    },
  },
});
