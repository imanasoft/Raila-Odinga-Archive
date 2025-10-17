import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = 'https://raila-odinga-static-site.example';

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  markdown: {
    drafts: true
  },
  server: {
    host: true
  }
});
