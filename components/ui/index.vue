<template>
  <div class="index">
    <Hero />
    <DataFlowLogo />
    <OurServices />
    <AboutSection />
    <PartnerInfiniteScroll :items="partners" />
    <PartnerGrid />
    <TestimonialSection />
    <ctaSection />
  </div>
</template>
<script setup>
import Hero from "~/components/Hero.vue";
import OurServices from "~/components/OurServices.vue";
import PartnerGrid from "~/components/PartnerGrid.vue";
import PartnerInfiniteScroll from "~/components/PartnerInfiniteScroll.vue";
import TestimonialSection from "~/components/TestimonialSection.vue";
import ctaSection from "~/components/ctaSection.vue";
import DataFlowLogo from "@/components/DataFlowLogo.vue";
import AboutSection from "@/components/AboutSection.vue";
import esgisLogo from "@/assets/images/partner/esgis-logo.png";


const partners = [
  { id: "1", text: "ESGIS", img: esgisLogo },
  { id: "2", text: "MTN", img: esgisLogo },
  { id: "3", text: "Partenaire 3", img: esgisLogo },
  { id: "4", text: "Partenaire 4", img: esgisLogo },
  { id: "5", text: "Partenaire 5", img: esgisLogo },
  { id: "6", text: "Partenaire 6", img: esgisLogo },
  { id: "7", text: "Partenaire 7", img: esgisLogo },
  { id: "8", text: "Partenaire 8", img: esgisLogo },
  { id: "9", text: "Partenaire 9", img: esgisLogo },
  { id: "10", text: "Partenaire 10", img: esgisLogo },
];
</script>
<style scoped>
.index {
  background: radial-gradient(
    circle at bottom center,
    #101010 40%,
    #17131e 55%,
    #181223 70%,
    #1e2039 85%,
    #0a090d 100%
  );
  width: 100vw;
}
</style>
