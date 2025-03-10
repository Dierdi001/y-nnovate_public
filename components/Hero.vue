<template>
  <section ref="hero" class="hero" :style="heroBackgroundStyle">
    <div class="container text-center relative">
      <div class="text-center flex flex-col justify-center items-center h-[90vh]">
        <h1 class="text-7xl font-medium gradient-text font-manrope">
          Vos défis, <br />
          notre expertise.
        </h1>
        <p class="mt-4 text-gray-400 text-xl">
          Nous trouvons des solutions sur mesure pour propulser votre succès.
        </p>
      </div>

      <!-- Composant DataFlowLogo (Visible au scroll) -->
      <div ref="dataFlowContainer" class="opacity-0 mb-16">
        <DataFlowLogo />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DataFlowLogo from "@/components/DataFlowLogo.vue";

// Enregistrement de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const dataFlowContainer = ref(null);
const hero = ref(null);
const heroBackgroundStyle = ref({
  background: "radial-gradient(circle, #0d0d0d, #000)", 
});

onMounted(() => {
  if (dataFlowContainer.value) {
    gsap.to(dataFlowContainer.value, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        trigger: dataFlowContainer.value,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
        onEnter: () => {
          gsap.to(hero.value, {
            background: "radial-gradient(circle, #452c97, #111113)",
            duration: 1,
          });
        },
      },
    });
  }
});
</script>

<style scoped>
.hero {
  @apply flex flex-col items-center justify-center;
  transition: background 1s ease-in-out; /* Transition fluide */
}

.container {
  @apply max-w-screen-xl mx-auto px-6;
}

.btn-gradient {
  @apply px-6 py-3 text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg transition-transform transform hover:scale-105;
}

.btn-outline {
  @apply px-6 py-3 text-gray-300 font-bold border border-gray-500 rounded-lg transition-transform transform hover:scale-105;
}

.gradient-text {
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
