<template>
  <section ref="hero" class="hero" :style="heroBackgroundStyle">
    <div class="container text-center relative">
      <div
        class="text-center flex flex-col justify-center items-center h-[60vh]"
      >
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-medium gradient-text font-manrope"
        >
          Vos défis, <br />
          notre expertise.
        </h1>
        <p class="mt-4 text-gray-400 text-base md:text-lg lg:text-xl">
          Nous trouvons des solutions sur mesure pour propulser votre succès.
        </p>
      </div>

      <!-- Composant DataFlowLogo (Visible au scroll) -->
      <div ref="dataFlowContainer" class="opacity-1 mb-5">
        <DataFlowLogo />
      </div>

      <!-- Carrés luminescents -->
      <div
        v-for="(square, index) in squares"
        :key="index"
        class="glowing-square"
        :style="{
          top: square.y + 'vh',
          left: square.x + 'vw',
          background: square.color,
          boxShadow: `0px 0px 15px 5px ${square.color}`,
          '--animation-delay': square.animationDelay,
        }"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DataFlowLogo from "@/components/DataFlowLogo.vue";
import { useNuxtApp } from "#app";

const dataFlowContainer = ref(null);
const hero = ref(null);
const heroBackgroundStyle = ref({
  background: "radial-gradient(circle, #0d0d0d, #000)",
});

const generateRandomDelay = () => `${(Math.random() * 2).toFixed(2)}s`;

const squares = ref([
  { x: 0, y: 20, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 10, y: 50, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 50, y: 30, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 70, y: 60, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 75, y: 60, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 20, y: 80, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 40, y: 70, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 80, y: 40, color: "#595959", animationDelay: generateRandomDelay() },
  { x: 75, y: 70, color: "#595959", animationDelay: generateRandomDelay() },
]);

onMounted(async () => {
  if (process.client) {
    const nuxtApp = useNuxtApp();
    const gsap = nuxtApp.$gsap;

    if (dataFlowContainer.value) {
      gsap.to(dataFlowContainer.value, {
        opacity: 1,
        y: -20,
        duration: 0.5,
        scrollTrigger: {
          trigger: dataFlowContainer.value,
          start: "top 60%",
          end: "top 80%",
          scrub: true,
          onLeave: () => {
            gsap.to(hero.value, {
              background: "transparent",
              duration: 0.5,
            });
            squares.value.forEach((square) => {
              square.color = "#4f246f";
            });
          },
        },
      });
    }
  }
});
</script>

<style scoped>
.hero {
  @apply flex flex-col items-center justify-center;
  transition: background 1s ease-in-out;
}

.glowing-square {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  opacity: 0.8;
  transition: background 2s ease-in-out, box-shadow 2s ease-in-out;
  animation: float 3s infinite alternate ease-in-out;
  animation-delay: var(--animation-delay);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
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
