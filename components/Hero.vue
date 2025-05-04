<template>
  <section ref="hero" class="hero relative" aria-label="Introduction de l'agence">
    <!-- Couche semi-transparente -->
    <div class="overlay absolute inset-0 z-10"></div>

    <!-- Contenu au-dessus de l’overlay -->
    <div class="containerHero text-center relative px-6 md:px-20 mx-auto z-20">
      <div class="flex flex-col justify-center items-center h-[60vh] space-y-7">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text font-manrope leading-tight"
        >
          Accélérez votre croissance avec nos solutions en développement et en marketing digital.
        </h1>

        <p class="text-gray-200 text-base md:text-lg max-w-xl">
          Nous accompagnons votre transformation digitale avec des services sur mesure, création d’applications performantes, stratégies marketing ciblées et accompagnement technologique de haut niveau.
        </p>

        <button class="cta-btn mt-4">Découvrir nos services</button>
      </div>
    </div>

    <!-- Carrés luminescents -->
    <div
      v-for="(square, index) in squares"
      :key="index"
      class="glowing-square z-30"
      :style="{
        top: square.y + 'vh',
        left: square.x + 'vw',
        background: square.color,
        boxShadow: `0px 0px 15px 5px ${square.color}`,
        '--animation-delay': square.animationDelay,
      }"
    />
  </section>
</template>


<script setup>
import { ref } from "vue";
import teamDev from "../assets/images/illustrations/team-dev-3.jpg";
import marketing from "../assets/images/illustrations/marketing.jpg";
import audit from "../assets/images/illustrations/audit.jpg";

const hero = ref(null);

const generateRandomDelay = () => `${(Math.random() * 5).toFixed(5)}s`;

const squares = ref([
  { x: 0, y: 20, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 5, y: 30, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 50, y: 30, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 20, y: 60, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 55, y: 60, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 5, y: 80, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 40, y: 70, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 80, y: 40, color: "#4f246f", animationDelay: generateRandomDelay() },
  { x: 75, y: 70, color: "#4f246f", animationDelay: generateRandomDelay() },
]);

</script>

<style scoped>
.hero {
  @apply flex flex-col items-center justify-center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/illustrations/team-ynnovate.jpg'); /* remplace par ton image */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.overlay {
  background: linear-gradient(to top, rgb(30, 30, 54), rgba(0, 0, 0, 0.247));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.containerHero {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: auto;
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

.cta-btn {
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #5f035fd7, #1e2039);
  border-radius: 8px;
  transition: 0.3s;
}

.cta-btn:hover {
  background: linear-gradient(45deg, #6100ff, #ff00ff);
  transform: scale(1.05);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}

.gradient-text {
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .glowing-square {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }

  .glowing-square {
    width: 12px;
    height: 12px;
  }
}
</style>
