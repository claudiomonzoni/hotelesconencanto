import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://hotelesconencanto.com.mx',
  integrations: [mdx(), sitemap(), robotsTxt({sitemap: true,})],
});