// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://elnudalmacrame.com',
  output: 'static',

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});