<template>
  <section class="py-16 testimonial-section" ref="testimonyContainer">
    <div class="max-w-5xl mx-auto text-center" :class="{ 'animated-title': isVisible }">
      <h2 class="title text-3xl md:text-6xl lg:text-7xl font-bold">Ce que pensent nos clients</h2>
      <p class="text-gray-400 mt-2">Ne nous croyez pas sur parole - écoutez ce que les clients du "Y" ont à dire.</p>
    </div>

    <!-- Conteneur des colonnes -->
    <div class="grid grid-cols-3 gap-4 mt-8 max-w-5xl px-4" :class="{ 'animated-card': isVisible }">
      <!-- Colonne 1 -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column1"
          :key="testimonial.id"
          :testimonial="testimonial"
          :style="isVisible ? { animationDelay: `${index * 0.5}s` } : {}"
        />
      </div>
      <!-- Colonne 2 -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column2"
          :key="testimonial.id"
          :testimonial="testimonial"
          :style="isVisible ? { animationDelay: `${(column1.length + index) * 0.5}s` } : {}"
        />
      </div>
      <!-- Colonne 3 -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column3"
          :key="testimonial.id"
          :testimonial="testimonial"
          :style="isVisible ? { animationDelay: `${(column1.length + column2.length + index) * 0.5}s` } : {}"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useTestimonials } from "@/composables/useTestimonials";
import TestimonialCard from "./TestimonialCard.vue";

export default {
  components: { TestimonialCard },
  setup() {
    const isVisible = ref(false);
    const testimonyContainer = ref(null);
    const { column1, column2, column3 } = useTestimonials();

    onMounted(() => {
      if (typeof IntersectionObserver !== "undefined" && testimonyContainer.value) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target); // Arrêter l'observation une fois qu'il devient visible
              }
            });
          },
          { threshold: 0.5 } // 50% de l'élément doit être visible
        );

        observer.observe(testimonyContainer.value);
      }
    });

    return { isVisible, testimonyContainer, column1, column2, column3 };
  }
};
</script>

<style scoped>
.testimonial-section {
  justify-items: center;
  padding: 25px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to right, #ff66facc, #ededed);
  -webkit-background-clip: text;
  color: transparent;
  opacity: 1 !important;
  transform: translateX(0); /* Initial position à gauche hors écran */
  transition: all 5s ease-out;
}

/* Animation du titre avec un glissement horizontal depuis la gauche */
@keyframes fade-slide-in-title {
  0% {
    opacity: 0;
    transform: translateX(100%); /* Sort du côté gauche */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Application de l'animation du titre */
.animated-title {
  animation: fade-slide-in-title 2s ease-out forwards;
  opacity: 1 !important;
}

/* Animation des cartes avec un glissement horizontal */
@keyframes fade-slide-in-card {
  0% {
    opacity: 0;
    transform: translateY(50px); 
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Application de l'animation des cartes */
.animated-card {
  animation: fade-slide-in-card 0.8s ease-out forwards;
  opacity: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes */
  gap: 16px;
  margin-top: 32px;
}

/* Responsivité pour les tablettes et écrans plus petits */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Deux colonnes pour les écrans moyens */
  }
}

/* Responsivité pour les écrans mobiles */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Une colonne pour les écrans mobiles */
    gap: 16px;
  }
}
</style>
