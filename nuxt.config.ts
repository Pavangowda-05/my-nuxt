// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.spacex.land/graphql",
      },
    },
  },
  app: {
    head: {
      title: "Nuxt",
      meta: [{ name: "description", content: "NuxtJS 3" }],
    },
  },
});
