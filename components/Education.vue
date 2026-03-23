<template>
  <div class="education-area over-hidden">
    <div class="container">
      <div class="row position-relative">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="position-relative">
            <div class="title">
              <span class="theme-color text-uppercase d-block mb-1"
                >Education</span
              >
              <h2 class="mb-25">My Education</h2>
            </div>
            <!-- /title -->
          </div>
          <div class="education-wrapper mr-20 pt-25 mb-50">
            <ul class="education-content">
              <li class="mb-32 d-flex align-items-start rotate-hover">
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    ></span>
                  </span>
                </div>
                <!-- /education-ser-icon -->
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">Diploma In Software Architecture</h3>
                  <h4>
                    Pontificia Universidad Javeriana
                    <span class="meta-text-color openS-font-family">
                      2026</span
                    >
                  </h4>
                </div>
              </li>
              <li class="mb-32 d-flex align-items-start rotate-hover">
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    ></span>
                  </span>
                </div>
                <!-- /education-ser-icon -->
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">Software Engineering</h3>
                  <h4>
                    Politécnico Grancolombiano
                    <span class="meta-text-color openS-font-family">
                      2023</span
                    >
                  </h4>
                </div>
              </li>
              <li class="mb-32 d-flex align-items-start rotate-hover">
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    ></span>
                  </span>
                </div>
                <!-- /education-ser-icon -->
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">Development of Information Systems</h3>
                  <h4>
                    SENA
                    <span class="meta-text-color openS-font-family">
                      2015</span
                    >
                  </h4>
                </div>
              </li>
            </ul>
          </div>
          <!-- /education-wrapper -->
        </div>
        <!-- /col -->
        <div
          class="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-blok d-flex align-items-center justify-content-center"
        >
          <div
            class="education-img position-relative text-center"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              class="border-radius10 grayscale"
              :class="`${imgGrayScale ? 'img-grayscale' : ''}`"
              src="/images/education/education-img.jpg"
              alt="education image"
            />
          </div>
          <!-- /education-img -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  props: {
    imgGrayScale: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
