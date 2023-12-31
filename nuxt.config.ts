// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" }
      ],
      title: 'Bruh, its a nuxt app',
    }
}})
