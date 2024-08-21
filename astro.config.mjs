import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://Tigeronsky.github.io',
    base: 'portfolio-celine-jin',
    output: 'static',
    build: {
      assets: 'astro'
    }
  });