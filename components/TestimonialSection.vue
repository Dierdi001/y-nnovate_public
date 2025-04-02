<template>
  <section class="py-16 testimonial-section">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="title text-3xl font-bold">Ce que pensent nos clients</h2>
      <p class="text-gray-400 mt-2">
        Ne nous croyez pas sur parole - écoutez ce que les clients du "Y" ont à dire.
      </p>
    </div>

    <!-- Conteneur des colonnes -->
    <div class="grid grid-cols-3 gap-4 mt-8 max-w-5xl px-4">
      <!-- Colonne 1 -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column1"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
      <!-- Colonne 2 (Plus haute) -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column2"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
      <!-- Colonne 3 -->
      <div class="flex flex-col gap-4">
        <TestimonialCard
          v-for="(testimonial, index) in column3"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { useTestimonials } from "@/composables/useTestimonials";
import TestimonialCard from "./TestimonialCard.vue";

export default {
  components: { TestimonialCard },
  setup() {
    const { column1, column2, column3 } = useTestimonials();
    return { column1, column2, column3 };
  },
};
</script>

<style scoped>
.testimonial-section {
  justify-items: center;
  padding: 16px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to right, #ff66facc, #ededed);
  -webkit-background-clip: text;
  color: transparent;
}

/* Structure de la grille */
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

.testimonial-card {
  background: #2222224c;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  border: 1px solid rgb(56, 56, 56);
}

.testimonial-card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 12px;
}

.testimonial-card p {
  font-size: 1rem;
  color: #f4f4f4;
  line-height: 1.5;
  margin-top: 8px;
}

.testimonial-card h3 {
  font-weight: bold;
  color: #fff;
}

</style>
