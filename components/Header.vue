<template>
  <header>
    <div id="header-sticky" class="transparent-header header-area">
      <div class="header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
              <div class="logo mt-50 mb-50 transition5">
                <a class="header-logo" href="#"
                  ><img :src="logo" alt="THAMES"
                /></a>
                <a class="header-sticky-logo" href="#" v-if="logo2.length > 0"
                  ><img :src="logo2" alt="HIBRO"
                /></a>
              </div>
            </div>
            <!-- /col -->
            <div
              class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center"
            >
              <div class="main-menu d-none d-xl-block">
                <nav id="mobile-menu">
                  <ul class="d-block">
                    <li>
                      <a class="active" href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#work">Works</a>
                    </li>
                    <li>
                      <a href="#service">service</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- /main-menu -->
              <div class="header-btn pl-45" v-if="downloadBtn">
                <a
                  href="https://drive.google.com/file/d/1QxkG1AVbcbUj9cXdVWliBXQlxSM9CDru/view?usp=drive_link"
                  target="_blank"
                  class="white-text text-uppercase d-inline-block f-700"
                  @click="trackCvDownload('header')"
                  >download cv</a
                >
              </div>
              <!-- /header-btn -->
              <div class="mobile-m-bar d-block d-lg-none ml-30">
                <a
                  @click="toggle = !toggle"
                  class="mobile-menubar text-white primary-hover"
                  href="javascript:void(0);"
                  ><i class="far fa-bars"></i
                ></a>
              </div>
            </div>
            <!-- /col -->
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
    </div>
    <!-- /header-bottom -->
  </header>
  <!--  header-area-end  -->

  <!--  ====== header extra info start
    ============================================================ -->

  <!-- side-mobile-menu start -->
  <div
    class="side-mobile-menu pt-15 pb-30 pl-30 pr-20 pb-100 d-block d-xl-none"
    :class="toggle ? 'open-menubar' : ''"
  >
    <div class="d-fle justify-content-between w-100">
      <div class="close-icon d-inline-block float-right clear-both mt-20 mb-15">
        <a href="javascript:void(0);" @click="toggle = !toggle"
          ><span class="icon-clear theme-color"
            ><i class="fa fa-times"></i></span
        ></a>
      </div>
    </div>
    <div class="mobile-menu mt-10 mean-container">
      <div class="mean-bar">
        <nav class="mean-nav">
          <ul class="d-block">
            <li>
              <a class="active" href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#service">service</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h5 class="text-white text-center mt-35 pb-1 d-inline-block ml-3">
      Follow me
    </h5>
    <ul class="social social-bg text-center d-flex mt-10 ml-3">
      <li class="mr-2 rotate-hover">
        <a
          class="github-bg text-center pr-0 text-white d-block rotate transition-3"
          href="https://github.com/nikollaih"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
      </li>
      <li class="mr-2 rotate-hover">
        <a
          class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
          href="https://www.linkedin.com/in/nikollai-hernandez-033690129/"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </li>
    </ul>
    <!-- social -->
  </div>
  <!-- /side-mobile-menu -->
  <div
    class="body-overlay"
    @click="toggle = !toggle"
    :class="toggle ? 'opened' : ''"
  ></div>
  <!-- header extra info end  -->
</template>

<script>
import { trackEvent } from "../utils/analytics.js";

export default {
  data() {
    return {
      toggle: false,
    };
  },
  mounted() {
    thamesUtils.stickyNav();
  },
  methods: {
    trackCvDownload(source) {
      trackEvent("download_cv", { source });
    },
  },
  props: {
    logo: {
      type: String,
      default: "/images/logo/logo.png",
    },
    logo2: {
      type: String,
      default: "",
    },
    downloadBtn: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
