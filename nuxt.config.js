export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'StarsBet',
    // htmlAttrs: {
    //   lang: 'en'
    // },
    meta: [
      { charset: 'utf-8' },
      { hid: 'og:title', property: 'og:title', content: 'StarsBet' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'og:url', property: 'og:url', content: 'https://starsbet.xyz' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/favicon.jpg' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "16x16",
        href: "/favicon.jpg",
      },
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "32x32",
        href: "/favicon.jpg",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/SF Compact/SFCompactDisplay-Light.woff2",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/SF Compact/SFCompactDisplay-Light.woff",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/SF Compact/SFCompactDisplay-Regular.woff2",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/SF Compact/SFCompactDisplay-Regular.woff",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/SF Compact/SFCompactDisplay-Medium.woff2",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/SF Compact/SFCompactDisplay-Medium.woff",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/SF Compact/SFCompactDisplay-Bold.woff2",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/SF Compact/SFCompactDisplay-Bold.woff",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/SF Compact/SFCompactDisplay-Black.woff2",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/SF Compact/SFCompactDisplay-Black.woff",
        crossorigin: "anonymous",
      },
    ],
    script: [
      { src: 'https://telegram.org/js/telegram-web-app.js'},
      { src: 'https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js'},
      { src: 'https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css:[
    '~/assets/css/fonts.css',
    '~/assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/Vcode", mode: "client", ssr: false },
    { src: "~/plugins/QRcode", mode: "client", ssr: false },
    { src: "~/plugins/pageTransition", mode: "client", ssr: false },
    { src: "~/plugins/VueNumber", mode: "client", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  styleResources: {
      scss: ["./assets/css/*.scss"],
      hoistUseStatements: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  server: {
      port: 8080,
      host: '0.0.0.0'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/style-resources",
    ['nuxt-lazy-load', {
      directiveOnly: true,
      observerConfig: {
        rootMargin: '0px 0px 200px 0px'
      }
    }],
    [
			"nuxt-i18n",
			{
        // seo: true, // ????
        strategy: 'no_prefix',
        locales: [
          { code: 'en', iso: 'en' },
          { code: 'ru', iso: 'ru' },
          { code: 'ua', iso: 'uk' },
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            ua: require("./lang/ua.json"),
            ru: require("./lang/ru.json"),
            en: require("./lang/en.json"),
          }          
        }
			}
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  loading: false,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssnano: false,
    // optimizeCSS: false,
    // minimize: false,
    postcss: false,
    babel: {
        compact: false,
    },
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  }
}