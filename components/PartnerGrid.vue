<template>
  <div class="sponsors-grid mt-8">
    <h2
      class="section-title"
      :class="{ 'animated-title': isVisible }"
    >
      Nous avons travaillé avec :
    </h2>
    <div class="grid">
      <PartnerCard
        v-for="(sponsor, index) in formattedPlatinumSponsors"
        :key="sponsor.name || index"
        :sponsor="sponsor"
        :empty="!sponsor.name"
        :class="{ 'animated-card': isVisible }"
        :style="isVisible ? { animationDelay: `${index * 0.1}s` } : {}"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import PartnerCard from "@/components/PartnerCard.vue";
import lomeXpressLogo from "@/assets/images/partner/LomeXpress-removebg.png";
import PwlLogo from "@/assets/images/partner/pwl-logo.png";

const platinumSponsors = [
  { name: "LomeXpress", logo: lomeXpressLogo, url: "https://lomeexpresservice.com" },
  {
    name: "Procedural World Lab",
    logo: PwlLogo,
    url: "https://teste.proceduralworldlab.com/",
  },
];

const sponsorsPerRow = 6;

const formattedPlatinumSponsors = computed(() => {
  const sponsors = [...platinumSponsors];
  const remainder = sponsors.length % sponsorsPerRow;

  if (remainder !== 0) {
    const slotsToFill = sponsorsPerRow - remainder;
    for (let i = 0; i < slotsToFill; i++) {
      sponsors.push({ name: "", logo: "", url: "" });
    }
  }

  return sponsors;
});


const container = ref(null);
const isVisible = ref(false);

onMounted(() => {
  if (typeof IntersectionObserver !== "undefined" && container.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(container.value);
  }
});

</script>

<style scoped>
.sponsors-grid {
  text-align: center;
  background: transparent;
  color: white;
  padding: 40px;
  justify-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  width: 70%;
  border: 1px solid rgb(56, 56, 56);
  padding: 8px;
  border-radius: 10px;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
  opacity: 1;
}

/* Animation du titre */
@keyframes fade-slide-up-title {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour le titre */
.animated-title {
  animation: fade-slide-up-title 1s ease-out forwards;
  opacity: 1 !important; /* Assurez-vous que l'élément est visible après l'animation */
}

.grid {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  width: 80%;
}

/* Animation pour les cartes */
@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Application de l'animation sur les cartes */
.animated-card {
  animation: fade-slide-up 0.6s ease-out forwards;
  opacity: 0;
}

/* Cartes vides */
.partner-card.empty {
  background: rgba(255, 255, 255, 0.1);
  border: 1px dashed rgba(255, 255, 255, 0.5);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
    width: 90%;
  }

  .grid {
    width: 90%;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    padding: 6px;
    width: 95%;
  }

  .grid {
    flex-wrap: wrap;
    width: 95%;
    gap: 10px;
  }

  .partner-card {
    width: 120px;
    height: 120px;
    margin: 10px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
    padding: 5px;
    margin-bottom: 15px;
  }

  .grid {
    gap: 10px;
  }

  .partner-card {
    width: 100px;
    height: 100px;
  }
}
</style>
