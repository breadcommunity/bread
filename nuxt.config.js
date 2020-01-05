export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#82f2cc' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/toast.css', '~/assets/css/cookie-law.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/toast',
      {
        position: 'bottom-center'
      }
    ],
    [
      'nuxt-fire',
      {
        config: {
          apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
          authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
          projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
          storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
          measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * purgeCSS
   */
  purgeCSS: {
    whitelistPatterns: [/vts-modal/, /fade/, /slide/, /Cookie/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
