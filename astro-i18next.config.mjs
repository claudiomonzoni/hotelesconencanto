/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "es",
    locales: ["es", "en", "fr"],
    routes:{
      en:{
        hoteles:{
          index:"hotels"
        }
      },
      fr:{
        hoteles:{
          index:"les-hotels"
        }
      }

    }
  };