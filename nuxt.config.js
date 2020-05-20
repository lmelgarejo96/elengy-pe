import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + /* process.env.npm_package_name */ 'ELENGY.PE',
        title: 'ELENGY SAC' /* process.env.npm_package_name || '' */ ,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'description', content: 'Somos una empresa dedicada a los servicios eléctricos y mecánicos para subestaciones de potencia en Perú.' },
            { name: 'author', content: 'Luis Melgarejo Alarcón' },
            { property: 'og:site_name', content: 'ELENGY SAC' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', sizes: "60x120", type: 'image/x-icon', href: '/logo.webp' },
            { name: "theme-color", content: "#aa0000" },
            /* Bootstrap cdn */
            { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
            /* Google Fonts */
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" },
            { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Raleway:400,700,800,900&display=swap" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Paytone+One&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swa' },
            /* Material Icons */
            { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Material+Icons" },
            /* AOS */
            { rel: 'stylesheet', type: "text/css", href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
            /* Swiper js */
            { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' },
        ],
        script: [
            /* Font awesome */
            {
                src: "https://kit.fontawesome.com/3fb035cc76.js",
                type: "text/javascript"
            },
            /* AOS */
            {
                src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
                type: "text/javascript",

            },
            {
                src: "https://unpkg.com/swiper/js/swiper.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/vue-lazyLoad', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        }
    }
}