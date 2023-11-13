// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
      public: {
        //replace your apiBase with 'http://localhost:8000'
          apiBase: 'http://localhost:8000'
      }
  },
  css: ['~/assets/css/main.css'],
  build: {
      transpile: ['vue-toastification'],
  },
})
