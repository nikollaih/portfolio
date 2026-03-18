<template>
  <div class="testimonial-area position-relative over-hidden">
    <div class="container">
      <div class="testimonial-bg section-bg pt-70 pb-70 position-relative">
        <div class="row align-items-start justify-content-center">
          <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <div class="position-relative">
              <div class="title">
                <span class="theme-color text-uppercase d-block mb-6">Testimonials</span>
                <h2 class="mb-20">What People Say</h2>
              </div>
            </div>
            <div class="testimonial-wrapper position-relative mt-40 pb-50">
              <div class="quit d-inline-block position-absolute left-0">
                <img class="theme-color" :src="testimonialIcon" alt="quote" />
              </div>
              <div class="testimonial-active pl-80 pr-90">
                <Swiper
                    :modules="modules"
                    :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                  }"
                    :slides-per-view="1"
                    :loop="true"
                >
                  <SwiperSlide>
                    <div class="testimonial-content">
                      <blockquote
                          class="testimonial-text position-relative mb-0 font-italic openS-font-family text-color"
                      >
                        Excepteur sint occaecat cupidatat non proiden sunt in
                        culpa qui officia deserunt mollit anim id est laebor um.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        volup tatem gotiraz bole ami ke
                      </blockquote>
                      <div class="testi-info d-flex align-items-center mt-40">
                        <div class="testi-avatar mr-25">
                          <img
                              class="rounded-circle"
                              src="/images/testimonial/author-img.jpg"
                              alt="author image 1"
                          />
                        </div>
                        <div class="avatar-info">
                          <h5 class="mb-1 text-capitalize">Robinson Sanchez</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div class="testimonial-content">
                      <blockquote
                          class="testimonial-text position-relative mb-0 font-italic openS-font-family text-color"
                      >
                        Excepteur sint occaecat cupidatat non proiden sunt in
                        culpa qui officia deserunt mollit anim id est laebor um.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        volup tatem gotiraz bole ami ke
                      </blockquote>
                      <div class="testi-info d-flex align-items-center mt-40">
                        <div class="testi-avatar mr-25">
                          <img
                              class="rounded-circle"
                              src="/images/testimonial/author-img.jpg"
                              alt="author image 2"
                          />
                        </div>
                        <div class="avatar-info">
                          <h5 class="mb-1 text-capitalize">Mario Zarta</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div class="testimonial-content">
                      <blockquote
                          class="testimonial-text position-relative mb-0 font-italic openS-font-family text-color"
                      >
                        Excepteur sint occaecat cupidatat non proiden sunt in
                        culpa qui officia deserunt mollit anim id est laebor um.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        volup tatem gotiraz bole ami ke
                      </blockquote>
                      <div class="testi-info d-flex align-items-center mt-40">
                        <div class="testi-avatar mr-25">
                          <img
                              class="rounded-circle"
                              src="/images/testimonial/author-img.jpg"
                              alt="author image 3"
                          />
                        </div>
                        <div class="avatar-info">
                          <h5 class="mb-1 text-capitalize">Yeiner Alzate</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div class="slick-dots t-dot d-flex gap-5 pl-80 pr-90 mt-5"></div>
              </div>
            </div>
          </div>

          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-11 col-12">
            <div
                class="testimonial-img position-relative z-index1"
                data-aos="fade-left"
                data-aos-duration="1500"
            >
              <img
                  class="border-radius10"
                  :class="`${imgGrayScale ? 'img-grayscale' : ''}`"
                  src="/images/testimonial/testimonials-img.jpg"
                  alt="author image"
              />
            </div>
          </div>
        </div>

        <div
            v-if="!classic"
            class="intro-feature-text-style testimonial-text-style position-absolute d-none d-md-inline-block"
        >
          <span class="d-inline-block">Testim</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    testimonialIcon: {
      type: String,
      default: "/images/testimonial/testimonial-icon.png",
    },
    classic: {
      type: Boolean,
      default: false,
    },
    imgGrayScale: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },
};
</script>
