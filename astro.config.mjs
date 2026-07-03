// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://www.villacrine.it",
  // Localizzazione a livello di rotta: Italiano principale, con /en e /de
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en", "de"],
    routing: {
      // L'italiano NON ha prefisso (es. "/"), inglese e tedesco sì (es. "/en", "/de")
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
