<template>
  <div class="index">
    <Hero />
    <OurServices />
    <PartnerGrid />
    <TestimonialSection />
    <ctaSection />
  </div>
</template>
<script>
import Hero from "~/components/Hero.vue";
import OurServices from "~/components/OurServices.vue";
import PartnerGrid from "~/components/PartnerGrid.vue";
import TestimonialSection from "~/components/TestimonialSection.vue";
import ctaSection from "~/components/ctaSection.vue";
export default {
    name: "UiIndex"
}
</script>
<style scoped>
.index {
    background: radial-gradient(circle at bottom center,  
    #101010 40%, 
  #17131e 55%, 
  #2d2140 70%, 
  #221a30 85%, 
  #3b2c5a 100%
  );

}
</style>
