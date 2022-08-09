export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: process.env.VUE_APP_NAME,
    htmlAttrs: {
      lang: process.env.VUE_APP_I18N_LOCALE
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/i18n.js' },
    { src: '@/plugins/axios', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.VUE_APP_Host
  },

  env: {
    VUE_APP_I18N_LOCALE: process.env.VUE_APP_I18N_LOCALE,
    VUE_APP_I18N_FALLBACK_LOCALE: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
    VUE_APP_BASE_ROUTE: process.env.VUE_APP_BASE_ROUTE,
    VUE_APP_NAME: process.env.VUE_APP_NAME,
    VUE_APP_Host: process.env.VUE_APP_Host
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '@/plugins/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // router: {
  //   base: process.env.VUE_APP_BASE_ROUTE
  // },

  server: {
    port: 8083,
    // host: '0.0.0.0' // for publish
    host: '127.0.0.1' // for develop
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  }
}
