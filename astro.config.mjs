import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // site: 'https://warrend.github.io',
  site: 'https://danielwarren.io',
  // base: '/me',
  integrations: [react()],
});
