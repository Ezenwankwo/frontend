export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Townsmeet',
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
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/icons.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  //
  eslint: {
    fix: true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/google-analytics',

    '@nuxtjs/dayjs',

    'cookie-universal-nuxt',

    'vue-toastification/nuxt',

    '@nuxtjs/google-fonts',

    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  toast: {
    // Vue toastification plugin options
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Google font
  googleFonts: {
    families: {
      Lato: {
        wght: [100, 300, 400, 700, 900],
        ital: [100, 300, 400, 700, 900]
      },
    },
    display: 'swap',
    subsets: 'greek',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ]
  },

  // Global auth settings for nuxt-next
  // router: {
  //  middleware: ['auth']
  //},
  auth: {
    strategies: {
      google: {
        clientId: '67108109230-5o0nu8juetk7424bqlcumphvivu20336.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
        responseType: 'id_token',
        endpoints: {
          token: 'http://127.0.0.1:8000/api/users/user/google_signin', // somm backend url to resolve your auth with google and give you the token back
          // userInfo: 'http://localhost:8000/auth/user/' // the endpoint to get the user info after you recived the token 
        },
      },
    },
    redirect: {
      login: '/log-in',
      logout: '/',
      callback: '/town-feed',
      home: '/town-feed'
    }
  },
}
