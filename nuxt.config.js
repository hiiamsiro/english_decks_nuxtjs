export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Learning English By Flash Card Online',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap',
      },
    ],
  },

  //Loading progress-bar color
  loading: { color: '#fff', height: '5px' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.min.css', '~/assets/css/external.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/core-component.js', '@/plugins/modals/v-modal.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_API_URL || 'https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseURL: process.env.BASE_URL || 'http:localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app',
    fbApiKey: 'AIzaSyAUGYlCrkIUobPJj5z3pcQOWhZKQJ17o2Y',
  },

  router: {
    middleware: 'router-log'
  }
}
