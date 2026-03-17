
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  About: typeof import("../../components/About.vue")['default']
  About2: typeof import("../../components/About2.vue")['default']
  Award: typeof import("../../components/Award.vue")['default']
  Blog: typeof import("../../components/Blog.vue")['default']
  Blog2: typeof import("../../components/Blog2.vue")['default']
  BlogModal: typeof import("../../components/BlogModal.vue")['default']
  Brand: typeof import("../../components/Brand.vue")['default']
  Brand2: typeof import("../../components/Brand2.vue")['default']
  Contact: typeof import("../../components/Contact.vue")['default']
  Counter: typeof import("../../components/Counter.vue")['default']
  Education: typeof import("../../components/Education.vue")['default']
  Experience: typeof import("../../components/Experience.vue")['default']
  Footer: typeof import("../../components/Footer.vue")['default']
  FunFact: typeof import("../../components/FunFact.vue")['default']
  Header: typeof import("../../components/Header.vue")['default']
  Home: typeof import("../../components/Home.vue")['default']
  Intro: typeof import("../../components/Intro.vue")['default']
  Portfolio: typeof import("../../components/Portfolio.vue")['default']
  Portfolio2: typeof import("../../components/Portfolio2.vue")['default']
  Portfolio3: typeof import("../../components/Portfolio3.vue")['default']
  PortfolioModal: typeof import("../../components/PortfolioModal.vue")['default']
  Preloader: typeof import("../../components/Preloader.vue")['default']
  Pricing: typeof import("../../components/Pricing.vue")['default']
  ProgressBar: typeof import("../../components/ProgressBar.vue")['default']
  ScrollTop: typeof import("../../components/ScrollTop.vue")['default']
  Service: typeof import("../../components/Service.vue")['default']
  Skill: typeof import("../../components/Skill.vue")['default']
  Skill2: typeof import("../../components/Skill2.vue")['default']
  Testimonials: typeof import("../../components/Testimonials.vue")['default']
  TypingAnimation: typeof import("../../components/TypingAnimation.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAbout: LazyComponent<typeof import("../../components/About.vue")['default']>
  LazyAbout2: LazyComponent<typeof import("../../components/About2.vue")['default']>
  LazyAward: LazyComponent<typeof import("../../components/Award.vue")['default']>
  LazyBlog: LazyComponent<typeof import("../../components/Blog.vue")['default']>
  LazyBlog2: LazyComponent<typeof import("../../components/Blog2.vue")['default']>
  LazyBlogModal: LazyComponent<typeof import("../../components/BlogModal.vue")['default']>
  LazyBrand: LazyComponent<typeof import("../../components/Brand.vue")['default']>
  LazyBrand2: LazyComponent<typeof import("../../components/Brand2.vue")['default']>
  LazyContact: LazyComponent<typeof import("../../components/Contact.vue")['default']>
  LazyCounter: LazyComponent<typeof import("../../components/Counter.vue")['default']>
  LazyEducation: LazyComponent<typeof import("../../components/Education.vue")['default']>
  LazyExperience: LazyComponent<typeof import("../../components/Experience.vue")['default']>
  LazyFooter: LazyComponent<typeof import("../../components/Footer.vue")['default']>
  LazyFunFact: LazyComponent<typeof import("../../components/FunFact.vue")['default']>
  LazyHeader: LazyComponent<typeof import("../../components/Header.vue")['default']>
  LazyHome: LazyComponent<typeof import("../../components/Home.vue")['default']>
  LazyIntro: LazyComponent<typeof import("../../components/Intro.vue")['default']>
  LazyPortfolio: LazyComponent<typeof import("../../components/Portfolio.vue")['default']>
  LazyPortfolio2: LazyComponent<typeof import("../../components/Portfolio2.vue")['default']>
  LazyPortfolio3: LazyComponent<typeof import("../../components/Portfolio3.vue")['default']>
  LazyPortfolioModal: LazyComponent<typeof import("../../components/PortfolioModal.vue")['default']>
  LazyPreloader: LazyComponent<typeof import("../../components/Preloader.vue")['default']>
  LazyPricing: LazyComponent<typeof import("../../components/Pricing.vue")['default']>
  LazyProgressBar: LazyComponent<typeof import("../../components/ProgressBar.vue")['default']>
  LazyScrollTop: LazyComponent<typeof import("../../components/ScrollTop.vue")['default']>
  LazyService: LazyComponent<typeof import("../../components/Service.vue")['default']>
  LazySkill: LazyComponent<typeof import("../../components/Skill.vue")['default']>
  LazySkill2: LazyComponent<typeof import("../../components/Skill2.vue")['default']>
  LazyTestimonials: LazyComponent<typeof import("../../components/Testimonials.vue")['default']>
  LazyTypingAnimation: LazyComponent<typeof import("../../components/TypingAnimation.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
