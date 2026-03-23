<template>
  <div id="about" class="about-area over-hidden">
    <div
      class="about-content-wrapper about-margin mt-70 mb-70 position-relative"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col-md-8 offset-md-0 col-sm-10 col-10">
            <div class="about-img-wrapper position-relative mb-90">
              <div
                class="about-img position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <div
                  class="about-img-over pl-50 transition5 d-inline-block position-relative"
                >
                  <div
                    class="position-relative z-index11"
                    data-tilt
                    data-tilt-max="10"
                  >
                    <img
                      class="border-radius10 position-relative z-index11 p-2 bg-dark grayscale about-image"
                      src="/images/about/about-img.jpg"
                      alt="Nikollai Hernandez"
                    />
                  </div>

                  <div
                    class="about-shape1 position-absolute"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  ></div>
                  <!-- /about-shape1 -->
                  <div
                    class="about-shape2 position-absolute z-index11 brightness"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  ></div>
                  <!-- /about-shape2 -->
                  <div
                    class="about-download-wrapper position-absolute z-index11"
                  >
                    <img
                      class="download-bg rotate-animation d-inline-block"
                      src="/images/about/download-bg.png"
                      alt="about image 2"
                    />
                    <a target="_blank" href="https://drive.google.com/file/d/1QxkG1AVbcbUj9cXdVWliBXQlxSM9CDru/view?usp=drive_link" class="cv-download-link transition5">
                      <img
                        class="d-icon d-inline-block position-absolute"
                        src="/images/icon/download-icon.png"
                        alt="about image 3"
                      />
                    </a>
                  </div>
                  <!-- /about-download -->
                </div>
              </div>
              <!-- /about-img -->
            </div>
            <!-- /about-img-wrapper -->
          </div>
          <!-- /col -->

          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-content position-relative mb-50">
              <div class="position-relative">
                <div class="title">
                  <span class="theme-color text-uppercase d-block mb-1 mt--5"
                    >About Me</span
                  >
                  <h2 class="mb-30">I Build Scalable Digital Products</h2>
                </div>
                <!-- /title -->
              </div>
              <p class="mb-25">
                Software engineer focused on building reliable and scalable digital solutions. I enjoy transforming complex ideas into clear, functional, and user-focused products.
              </p>
              <p>My work is driven by strong attention to detail, performance, and usability, ensuring that every solution is efficient, maintainable, and designed to create real value.</p>
              <div class="about-info-wrapper pt-25 pb-20 mt-25">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info">
                      <li class="d-inline-block pr-50">
                        <p class="jostMedium-font-family mb-6">Name</p>
                        <p class="jostMedium-font-family mb-6">Age</p>
                        <p class="jostMedium-font-family mb-6">Occupation</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">Nikollai Hernández</p>
                        <p class="mb-6">29 Years</p>
                        <p class="mb-6">Software Engineer</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info d-flex">
                      <li class="d-inline-block pr-50">
                        <p class="jostMedium-font-family mb-6">Language</p>
                        <p class="jostMedium-font-family mb-6">Email</p>
                        <p class="jostMedium-font-family mb-6">Nationality</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">Spanish / English</p>
                        <p class="mb-6">nikollaihernandez@gmail.com</p>
                        <p class="mb-6">Colombia</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                </div>
                <!-- /row -->
              </div>
            </div>
            <!-- /about-content -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

      <div class="about-text-style position-absolute d-none d-md-inline-block">
        <span class="d-inline-block section-text-color">About</span>
      </div>
      <!-- /intro-feature-text -->
      <div
        class="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation"
      >
        <img src="/images/shape/content-shape2.png" alt="about shape 2" />
      </div>
      <!-- /intro-feature-icon -->
    </div>
    <!-- /about-wrapper -->
  </div>
</template>
<script>
export default {
  props: {
    signature: {
      type: String,
      default: "/images/about/signature.png",
    },
  },
};
</script>
