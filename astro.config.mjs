import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://riverviewsubdivision.com',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});