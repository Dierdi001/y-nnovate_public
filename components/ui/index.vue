<template>
  <div class="index">
    <Hero />
    <OurServices />
    <PartnerGrid />
    <TestimonialSection />
    <ctaSection />
  </div>
</template>
<script setup>
import Hero from "~/components/Hero.vue";
import OurServices from "~/components/OurServices.vue";
import PartnerGrid from "~/components/PartnerGrid.vue";
import TestimonialSection from "~/components/TestimonialSection.vue";
import ctaSection from "~/components/ctaSection.vue";
</script>
<style scoped>
.index {
    background: radial-gradient(circle at bottom center,  
    #101010 40%, 
  #17131e 55%, 
  #181223 70%, 
  #1e2039 85%, 
  #0a090d 100%
  );

}
</style>
