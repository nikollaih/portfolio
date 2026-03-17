<template>
  <div id="service" class="service-area over-hidden pt-160 pb-145" :class="bg">
    <div class="service-wrapper position-relative">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center">
              <span class="theme-color text-white text-uppercase d-block mb-6"
                >Service</span
              >
              <h2 :class="titleColor">What I offer</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <div class="row service-wrappers mt-80">
          <div
            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
            v-for="item in items"
          >
            <div
              class="single-service shadow-hover transition3 border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25"
              :class="itemBg"
            >
              <div class="row">
                <div
                  class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-4 text-lg-center"
                >
                  <div
                    class="service-ser-icon d-inline-block text-center position-relative mb-15"
                  >
                    <img
                      class="position-relative z-index1"
                      :src="item.icon"
                      alt="icon"
                    />
                    <div
                      class="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    ></div>
                    <div
                      class="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    ></div>
                  </div>
                  <!-- /service-ser-icon -->
                </div>
                <!-- /col -->
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="service-text d-inline-block ml-xl-2">
                    <h3 class="mb-15">{{ item.title }}</h3>
                    <p class="mb-0">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
                <!-- /col -->
              </div>
            </div>
            <!-- /single-service -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

      <div
        v-if="!classic"
        class="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation"
      >
        <img src="/images/shape/content-shape2.png" alt="shape 2" />
      </div>
      <!-- /intro-feature-icon -->
    </div>
    <!-- /service-wrapper -->
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "primary-bg",
    },
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          title: "Frontend Development",
          icon: "images/icon/ser-icon1.png",
          desc: "I develop modern and responsive web interfaces using technologies such as React, TypeScript, and Tailwind CSS. My focus is on creating intuitive user experiences, clean component architecture, and scalable frontend applications.",
        },
        {
          id: 2,
          title: "Mobile App Development",
          icon: "images/icon/ser-icon2.png",
          desc: "I build cross-platform mobile applications using React Native, delivering high-performance apps with maintainable code and seamless integration with backend services and APIs.",
        },
        {
          id: 3,
          title: "API Integration",
          icon: "images/icon/ser-icon3.png",
          desc: "I integrate web and mobile applications with REST and GraphQL APIs, implementing authentication, secure data handling, and efficient communication between frontend and backend systems.",
        },
        {
          id: 4,
          title: "Performance Optimization",
          icon: "images/icon/ser-icon4.png",
          desc: "I improve application speed and scalability by optimizing rendering, reducing unnecessary re-renders, and applying best practices in state management and code structure.",
        },
      ],
    },
    itemBg: {
      type: String,
      default: "white-bg",
    },
    titleColor: {
      type: String,
      default: "text-white",
    },
    classic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
