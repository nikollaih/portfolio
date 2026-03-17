<template>
  <Header />
  <main class="over-hiddenn">
    <slot />
  </main>
  <ScrollTop />
</template>

<script>
export default {
  mounted() {
    thamesUtils.bgImage();
    thamesUtils.stickyNav();
  },
};
</script>
