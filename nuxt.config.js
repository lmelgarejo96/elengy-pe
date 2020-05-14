import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + /* process.env.npm_package_name */ 'ELENGY SAC',
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
            /* Fonts */
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" },
            { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Raleway:400,700,800,900&display=swap" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Paytone+One&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swa' },
            /* Material Icons */
            { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Material+Icons" },
            /* OWL Carousel */
            /* { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" }, */
            { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" },
            /* AOS */
            { rel: 'stylesheet', type: "text/css", href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },

            /* { rel: 'stylesheet', type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css' }, */

            /* swiper */
            { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
        ],
        script: [
            /* Font awesome */
            {
                src: "https://kit.fontawesome.com/3fb035cc76.js",
                type: "text/javascript"
            },
            /* Bootstrap js + jquery */
            {
                src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
                type: "text/javascript"
            },
            /* tween max */
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js",
                type: "text/javascript"
            },
            /* OWL carousel */
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
                type: "text/javascript"
            },
            /* AOS */
            {
                src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
                type: "text/javascript",

            },
            /* GSAP */
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js',
                type: "text/javascript",
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js',
                type: "text/javascript",
            },
            /* ISOTOPE */
            /* {
                src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
                type: "text/javascript",

            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js",
                type: "text/javascript",

            }, */
            /* Swiper */
            {
                src: 'https://unpkg.com/swiper/js/swiper.min.js',
                type: "text/javascript",
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
    plugins: [],
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
        extend(config, ctx) {}
    }
}