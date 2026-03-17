
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


export const About: typeof import("../components/About.vue")['default']
export const About2: typeof import("../components/About2.vue")['default']
export const Award: typeof import("../components/Award.vue")['default']
export const Blog: typeof import("../components/Blog.vue")['default']
export const Blog2: typeof import("../components/Blog2.vue")['default']
export const BlogModal: typeof import("../components/BlogModal.vue")['default']
export const Brand: typeof import("../components/Brand.vue")['default']
export const Brand2: typeof import("../components/Brand2.vue")['default']
export const Contact: typeof import("../components/Contact.vue")['default']
export const Counter: typeof import("../components/Counter.vue")['default']
export const Education: typeof import("../components/Education.vue")['default']
export const Experience: typeof import("../components/Experience.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const FunFact: typeof import("../components/FunFact.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Home: typeof import("../components/Home.vue")['default']
export const Intro: typeof import("../components/Intro.vue")['default']
export const Portfolio: typeof import("../components/Portfolio.vue")['default']
export const Portfolio2: typeof import("../components/Portfolio2.vue")['default']
export const Portfolio3: typeof import("../components/Portfolio3.vue")['default']
export const PortfolioModal: typeof import("../components/PortfolioModal.vue")['default']
export const Preloader: typeof import("../components/Preloader.vue")['default']
export const Pricing: typeof import("../components/Pricing.vue")['default']
export const ProgressBar: typeof import("../components/ProgressBar.vue")['default']
export const ScrollTop: typeof import("../components/ScrollTop.vue")['default']
export const Service: typeof import("../components/Service.vue")['default']
export const Skill: typeof import("../components/Skill.vue")['default']
export const Skill2: typeof import("../components/Skill2.vue")['default']
export const Testimonials: typeof import("../components/Testimonials.vue")['default']
export const TypingAnimation: typeof import("../components/TypingAnimation.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyAbout2: LazyComponent<typeof import("../components/About2.vue")['default']>
export const LazyAward: LazyComponent<typeof import("../components/Award.vue")['default']>
export const LazyBlog: LazyComponent<typeof import("../components/Blog.vue")['default']>
export const LazyBlog2: LazyComponent<typeof import("../components/Blog2.vue")['default']>
export const LazyBlogModal: LazyComponent<typeof import("../components/BlogModal.vue")['default']>
export const LazyBrand: LazyComponent<typeof import("../components/Brand.vue")['default']>
export const LazyBrand2: LazyComponent<typeof import("../components/Brand2.vue")['default']>
export const LazyContact: LazyComponent<typeof import("../components/Contact.vue")['default']>
export const LazyCounter: LazyComponent<typeof import("../components/Counter.vue")['default']>
export const LazyEducation: LazyComponent<typeof import("../components/Education.vue")['default']>
export const LazyExperience: LazyComponent<typeof import("../components/Experience.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyFunFact: LazyComponent<typeof import("../components/FunFact.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHome: LazyComponent<typeof import("../components/Home.vue")['default']>
export const LazyIntro: LazyComponent<typeof import("../components/Intro.vue")['default']>
export const LazyPortfolio: LazyComponent<typeof import("../components/Portfolio.vue")['default']>
export const LazyPortfolio2: LazyComponent<typeof import("../components/Portfolio2.vue")['default']>
export const LazyPortfolio3: LazyComponent<typeof import("../components/Portfolio3.vue")['default']>
export const LazyPortfolioModal: LazyComponent<typeof import("../components/PortfolioModal.vue")['default']>
export const LazyPreloader: LazyComponent<typeof import("../components/Preloader.vue")['default']>
export const LazyPricing: LazyComponent<typeof import("../components/Pricing.vue")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../components/ProgressBar.vue")['default']>
export const LazyScrollTop: LazyComponent<typeof import("../components/ScrollTop.vue")['default']>
export const LazyService: LazyComponent<typeof import("../components/Service.vue")['default']>
export const LazySkill: LazyComponent<typeof import("../components/Skill.vue")['default']>
export const LazySkill2: LazyComponent<typeof import("../components/Skill2.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../components/Testimonials.vue")['default']>
export const LazyTypingAnimation: LazyComponent<typeof import("../components/TypingAnimation.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
