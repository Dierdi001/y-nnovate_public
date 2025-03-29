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
import TestimonialCard from "./TestimonialCard.vue";
import userIcon from "@/assets/images/icon-user-testimonial.png";

export default {
  components: { TestimonialCard },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Ryan Carniato",
          username: "RyanCarniato",
          image: userIcon,
          message:
            "I'm loving what Vite enables. We've found building SolidStart that it is less a metaframework but a system of symbiotic Vite plugins.",
        },
        {
          id: 2,
          name: "Mark Dalgleish",
          username: "markdalgleish",
          image: userIcon,
          message:
            "It's also a great platform to build a framework on since it provides a pluggable dev environment. Community is amazing too.",
        },
        {
          id: 3,
          name: "Dion Almaer",
          username: "dalmaer",
          image: userIcon,
          message:
            "I am so excited to see so many great frameworks teaming up on top of Vite. So many will benefit. ❤️ to the Vite team.",
        },
        {
          id: 4,
          name: "Rich Harris",
          username: "Rich_Harris",
          image: userIcon,
          message:
            "Vite is basically the united nations of JavaScript at this point.",
        },
        {
          id: 5,
          name: "Jason Miller",
          username: "_developit",
          image: userIcon,
          message:
            "Every time I suspect I've hit the bounds of what Vite can do, I end up being wrong.",
        },
        {
          id: 6,
          name: "Christoph Nakazawa",
          username: "cpojer",
          image: userIcon,
          message: "Vite is gonna eat the (JavaScript) world.",
        },
        {
          id: 7,
          name: "Sarah Drasner",
          username: "sarah_edo",
          image: userIcon,
          message:
            "Vite est vraiment incroyable. Il facilite tellement le développement.",
        },
        {
          id: 8,
          name: "Evan You",
          username: "youyuxi",
          image: userIcon,
          message:
            "It's also a great platform to build a framework on since it provides a pluggable dev environment. Community is amazing too.",
        },
        {
          id: 9,
          name: "Dan Abramov",
          username: "dan_abramov",
          image: userIcon,
          message: "Vite fait passer Webpack pour une antiquité.",
        },
      ],
    };
  },
  computed: {
    column1() {
      return this.testimonials.slice(0, 3); // 3 cartes pour la colonne 1
    },
    column2() {
      return this.testimonials.slice(3, 6); // 3 cartes pour la colonne 2
    },
    column3() {
      return this.testimonials.slice(6, 9); // 3 cartes pour la colonne 3
    },
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
  background: linear-gradient(to bottom, #ededed, #737374);
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
