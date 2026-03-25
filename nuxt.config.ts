export default defineNuxtConfig({
    modules: ['@nuxtjs/google-gtag'],
    gtag: {
        id: 'G-1223BR337L'
    },
    ssr: true,

    nitro: {
        preset: "static",
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
        },
    },
    app: {
        head: {
            title: "Nikollai Hernández | Frontend Developer",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { name: "description", content: "Portfolio of Nikollai Hernández, frontend developer and software engineer focused on scalable products, user-centered interfaces, and high-performance web experiences." },
                { name: "robots", content: "index, follow" },
                { name: "author", content: "Nikollai Hernández" },
                { name: "format-detection", content: "telephone=no" },
                { name: "theme-color", content: "#0f172a" },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", href: "/images/index-6/favicon.png" },
            ],
        },
    },
})
