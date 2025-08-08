import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://minnaheim.github.io/h4sci-test/',
  base: process.env.ASTRO_BASE || undefined,
  integrations: [
    tailwind(), 
    icon({
      include: {
        'simple-icons': ['*'], // Include all simple-icons
        'bx': ['*'], // Include all boxicons (for bxl-linkedin)
      },
    })
  ]
});