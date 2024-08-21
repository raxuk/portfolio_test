import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://raxuk.github.io',
    base: 'portfolio_test',
    output: 'static',
    build: {
      assets: 'astro'
    }
  });