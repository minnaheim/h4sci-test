import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://minnaheim.github.io/h4sci.github.io/',
  integrations: [
    tailwind(), 
    icon({
      include: {
        'simple-icons': ['*'], // Include all simple-icons
        'bx': ['*'], // Include all boxicons (for bxl-linkedin)
      },
    })
  ],
});