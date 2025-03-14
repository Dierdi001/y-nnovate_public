<template>
  <div class="index">
    <Hero />
    <OurServices />
  </div>
</template>
<script>
import Hero from "~/components/Hero.vue";
import OurServices from "~/components/OurServices.vue";
export default {
    name: "UiIndex"
}
</script>
<style scoped>
.index {
    background: radial-gradient(circle at bottom center,  
    #111111 20%,
    #161920 35%,
    #2c3f65 55%,
    #58257b 75%, 
    #3d0e61 100% 
  );

}
</style>
