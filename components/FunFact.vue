<template>
  <div
    class="fun-fact-area position-relative over-hidden pt-150 pb-120"
    :class="containerCls"
    data-aos="fade-up"
    data-aos-duration="1800"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-12 col-sm- col-">
          <div class="fun-fact-content mb-50 mr-lg-2 mr-xl-0">
            <div class="position-relative">
              <div class="title">
                <span class="theme-color text-uppercase d-block mb-1 mt--5"
                  >Fun Facts</span
                >
                <h2 class="mb-30 text-white">Building Reliable Digital Products</h2>
              </div>
              <!-- /title -->
            </div>
            <p>
              I build digital products that are reliable, scalable, and user-focused.
              Every project is approached with a strong emphasis on quality, performance, and long-term maintainability.
            </p>
          </div>
          <!-- fun-fact-content -->
        </div>
        <!-- /col -->

        <div class="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-sm- col-">
          <div class="row justify-content-center align-items-center">
            <div
              class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10"
              v-for="(item, index) in counterItems"
              :key="index"
            >
              <div
                class="single-fact d-block d-flex align-items-center border-radius10 mb-30"
              >
                <div
                  class="mr-25 d-flex align-content-start justify-content-center"
                >
                  <span class="d-inline-block counter" :class="textColor">{{
                    item.value
                  }}</span>
                  <span
                    class="per d-inline-block"
                    :class="textColor"
                    v-if="item.otherValue.length > 0"
                    >{{ item.otherValue }}</span
                  >
                </div>
                <h3 class="text-white mb-0" v-html="item.title"></h3>
              </div>
              <!-- /single-fact -->
            </div>
            <!-- /col -->
          </div>
          <!-- /row -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->

    <div class="fact-style1 position-absolute d-none d-md-inline-block">
      <img src="/images/shape/fact-icon1.png" alt="shape 1" />
    </div>
    <!-- /fact-style1 -->
    <div class="fact-style2 position-absolute d-none d-md-inline-block">
      <img src="/images/shape/fact-icon2.png" alt="shape 2" />
    </div>
    <!-- /fact-style2 -->
  </div>
</template>
<script>
import { thamesUtils } from "../utils/utils.js";
export default {
  mounted() {
    thamesUtils.counterUp();
  },
  props: {
    containerCls: {
      type: String,
      required: false,
      default: "fun-fact-bg",
    },
    counterItems: {
      type: Array,
      default: [
        {
          id: 1,
          title: "Years of <br> Experience",
          value: "+7",
          otherValue: "",
        },
        {
          id: 2,
          title: "Projects <br> Delivered",
          value: "+20",
          otherValue: "",
        },
        {
          id: 3,
          title: "Technologies <br> Mastered",
          value: "+10",
          otherValue: "",
        },
        {
          id: 4,
          title: "Users <br> Impacted",
          value: "10",
          otherValue: "k+",
        },
      ],
    },
    textColor: {
      type: String,
      default: "theme-color",
    },
  },
};
</script>
