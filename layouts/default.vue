<template>
  <div>
    <Navbar />
    <div class="container">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.container {
  min-height: 80vh;
}
</style>
