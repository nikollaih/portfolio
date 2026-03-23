<template>
  <div
    id="skills"
    class="skill-area over-hidden position-relative pt-140 pb-140"
  >
    <div class="marquee-w mb-125">
      <div class="marquee">
        <span class="pl-4">Senior Front-End Developer From Colombia *</span>
        <span class="pl-4">Senior Front-End Developer From Colombia *</span>
      </div>
      <div class="marquee marquee2 pb-1">
        <span class="pl-4"
          >I’m Open for new projects * Let’s Work Together *</span
        >
        <span class="pl-4"
          >I’m Open for new projects * Let’s Work Together *</span
        >
      </div>
    </div>

    <div class="container">
      <div class="row align-items-start justify-content-center">
        <div class="col-xl-5 col-md-12 col-sm-12 col-12">
          <div class="position-relative">
            <div class="title mb-50">
              <span class="theme-color text-uppercase d-block mb-6"
                >My Skill</span
              >
              <h2 class="mb-25">Growing Over Times</h2>
              <p>
                Over the years, I have continuously expanded my technical expertise by working on web and mobile applications for international clients. My focus has been on building scalable, maintainable, and high-performance solutions using modern JavaScript technologies. I specialize in frontend development with React and cross-platform mobile applications with React Native, while also maintaining strong knowledge of system architecture, data management, and agile development practices.
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 offset-xl-1 col-md-12 col-sm-12 col-12"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1400"
        >
          <div class="row justify-content-center mt-10">
            <div
              v-for="skill in skills"
              class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30"
            >
              <div class="single-skill text-center text-lg-right">
                <div class="progress-circular over-hidden">
                  <ProgressBar
                    :value="skill.value"
                    :fillColor="fillColor"
                    :textColor="textColor"
                  />
                  <h4 class="mt-15 text-center">{{ skill.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="skill-text-style position-absolute z-index-1 d-none d-md-inline-block"
    >
      <span class="d-inline-block section-text-color">Skills</span>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  data() {
    return {
      skills: [
        { id: 1, title: "Front-end Development", value: 95 },
        { id: 2, title: "Mobile Development", value: 90 },
        { id: 3, title: "Back-end Development", value: 70 },
        { id: 4, title: "API Integration", value: 85 },
        { id: 5, title: "System Architecture", value: 80 },
        { id: 6, title: "Agile Development", value: 85 },
      ],
    };
  },
  props: {
    fillColor: {
      type: String,
      default: "#80db66",
    },
    textColor: {
      type: String,
      default: "",
    },
  },
};
</script>
