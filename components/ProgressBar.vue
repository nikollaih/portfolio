<template>
  <div class="circle-progress">
    <CircleProgress
      :size="190"
      :percent="value"
      :border-width="6"
      :border-bg-width="6"
      :fillColor="fillColor"
      :emptyColor="'#eceef4'"
      :viewport="true"
      :linecap="'none'"
    />
    <span :class="textColor">{{ value }}%</span>
  </div>
</template>

<script>
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 50,
    },
    fillColor: {
      type: String,
      default: "#80db66",
    },
    emptyColor: {
      type: String,
      default: "#eceef4",
    },
    textColor: {
      type: String,
      default: "",
    },
  },
  components: { CircleProgress },
};
</script>

<style>
.circle-progress {
  position: relative;
}
.circle-progress span {
  font-size: 38px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
