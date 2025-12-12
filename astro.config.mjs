// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.kashic.dev', // original domain
  base: '/portfolio',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});