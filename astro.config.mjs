import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://hotelesconencanto.com.mx',
  integrations: [mdx(), sitemap(), robotsTxt({
    sitemap: true
  }), astroI18next(), react()]
  // experimental: {
  //   assets: true
  //  }
});