import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  security: {
    checkOrigin: false,
  },
  server: {
    port: 4321,
    host: true,
  },
});
