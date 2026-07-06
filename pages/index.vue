<template>
  <Preloader />
  <NuxtLayout
    :name="'thames'"
    :logo="'/images/index-6/logo.png'"
    :footerLogo="'/images/index-6/logo-dark.png'"
    :copyRightTextColor="'theme-color'"
  >
    <div id="home" class="slider-area slider-bg-color over-hidden dvh-100">
      <div
        class="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
        data-background="/images/slider/slider-bg.webp"
      >
        <div id="scene" class="parallax position-absolute w-100 dvh-100 z-index1">
          <img
            data-depth="0.20"
            class="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
            src="/images/shape/shape1.png"
            alt="#"
          />
          <img
            data-depth="0.15"
            class="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
            src="/images/shape/shape2.png"
            alt="#"
          />
          <img
            data-depth="0.30"
            class="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
            src="/images/shape/Shape3.png"
            alt="#"
          />
          <img
            data-depth="0.10"
            class="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
            src="/images/shape/shape4.png"
            alt="#"
          />
        </div>
        <div
          class="container slider-height d-flex align-items-center justify-content-center dvh-100"
        >
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div
                class="slider-content text-center text-center position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2200"
                data-aos-delay="1000"
              >
                <h1 class="mb-15 white-text display-5">
                  <span class="sub-heading d-block text-uppercase primary-color mb-1">Hello I’m</span>
                  Nikollai <span class="hm2-m-hero-text-style">Hernández</span>
                </h1>
                <h2 class="text-capitalize white-text mb-45">
                  A Passionate
                  <span class="d-text d-block d-sm-inline-block">
                    <span
                      class="typer primary-color d-inline-block pl-2"
                      id="main"
                      data-words="Software Engineer, Web & App Developer, Freelancer"
                      data-delay="100"
                      data-colors="#4c6ef5"
                    ></span>
                    <span class="cursor primary-color d-inline-block" data-owner="main"></span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-social-link position-absolute right-0 d-none d-md-block z-index11">
          <ul class="social pr-60">
            <li class="mt-10 mb-10 rotate-hover">
              <a class="text-center d-inline-block rotate" href="https://github.com/nikollaih" target="_blank" @click="trackSocialClick('github')"><i class="fab fa-github"></i></a>
            </li>
            <li class="mt-10 mb-10 rotate-hover">
              <a class="text-center d-inline-block rotate" href="https://www.linkedin.com/in/nikollai-hernandez-033690129/" target="_blank" @click="trackSocialClick('linkedin')"><i class="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Intro :cardExtraCls="'primary-bg'" :items="items" :shape="''" />
    <About :signature="'/images/index-6/signature.png'" />
    <FunFact :textColor="'primary-color'" />
    <Portfolio />
    <Experience />
    <Education />
    <Skill :fill-color="'#9B9DB1'" />
    <Service :bg="'dark-bg'" :itemBg="'white-bg'" />
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl?.replace(/\/$/, "") || "";
const pageTitle = "Nikollai Hernández | Frontend Developer";
const pageDescription = "Portfolio of Nikollai Hernández, software engineer and web developer building scalable applications, intuitive user experiences, and high-performance digital products.";
const socialImage = "/images/slider/person.png";
const socialImageUrl = siteUrl ? new URL(socialImage, siteUrl).toString() : undefined;
const canonicalUrl = siteUrl ? new URL("/", siteUrl).toString() : undefined;

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: socialImageUrl,
  ogImageAlt: "Nikollai Hernández portfolio preview",
  twitterCard: "summary_large_image",
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: socialImageUrl,
});

// CSS no-crítico que se aplica en mounted() — se preloaded aquí para que
// el browser empiece a descargar antes de que Vue hidrate.
const deferredCss = [
  "/css/animate.css",
  "/css/flaticon.css",
  "/css/fontawesome-all.min.css",
  "/css/slick.css",
  "/css/meanmenu.css",
  "/css/chart.css",
];

useHead({
  link: [
    ...(canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []),
    // Preload fuente crítica – el browser la descarga en paralelo con los CSS,
    // evitando la cadena HTML → CSS → fuente
    { rel: "preload", href: "/fonts/jost-medium-font/jost-medium.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
    // CSS crítico – bloquea render pero es necesario para el layout inicial
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/css/global.css" },
    { rel: "stylesheet", href: "/css/style.css" },
    { rel: "stylesheet", href: "/css/index-6/default.css" },
    { rel: "stylesheet", href: "/css/index-6/style.css" },
    { rel: "stylesheet", href: "/css/index-6/responsive.css" },
    { rel: "stylesheet", href: "/css/theme-accent.css" },
    // Preload hints – el browser descarga en paralelo sin bloquear render
    ...deferredCss.map((href) => ({ rel: "preload", href, as: "style" })),
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nikollai Hernández",
        jobTitle: "Frontend Developer",
        description: pageDescription,
        url: canonicalUrl,
        image: socialImageUrl,
        sameAs: [
          "https://github.com/nikollaih",
          "https://www.linkedin.com/in/nikollai-hernandez-033690129/",
        ],
      }),
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { TyperSetup } from "../utils/typer.js";
import { trackEvent } from "../utils/analytics.js";
export default {
  methods: {
    trackSocialClick(network) {
      trackEvent("social_click", { network });
    },
  },
  mounted() {
    TyperSetup();
    document.querySelector("body").classList.add("body-dark-mode");

    // Aplicar CSS no-crítico como stylesheet (ya descargados por el preload)
    const deferredCss = [
      "/css/animate.css",
      "/css/flaticon.css",
      "/css/fontawesome-all.min.css",
      "/css/slick.css",
      "/css/meanmenu.css",
      "/css/chart.css",
    ];
    deferredCss.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Clean Architecture",
          icon: "/images/index-6/icon/intro-ft-icon1.png",
          desc: "Building scalable and maintainable applications through well-structured code, modular design, and best development practices.",
          marginTop: false,
        },
        {
          id: 2,
          title: "User-Centered Design",
          icon: "/images/index-6/icon/intro-ft-icon3.png",
          desc: "Creating intuitive and responsive interfaces focused on usability, accessibility, and real user needs.",
          marginTop: true,
        },
        {
          id: 3,
          title: "High Performance",
          icon: "/images/index-6/icon/intro-ft-icon2.png",
          desc: "Optimizing applications for speed, scalability, and smooth user experiences across web and mobile platforms.",
          marginTop: false,
        },
        {
          id: 4,
          title: "Collaboration & Agile",
          icon: "/images/index-6/icon/intro-ft-icon4.png",
          desc: "Working effectively with cross-functional teams using agile methodologies to deliver high-quality products.",
          marginTop: true,
        },
      ],
    };
  },
};
</script>
