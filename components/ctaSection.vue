<template>
  <div
    class="cta-container"
    ref="ctaContainer"
    :class="{ 'animate-in': isVisible }"
  >
    <div class="logo">
      <img :src="logoSrc" alt="Logo de l'agence" />
    </div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="ctaLink" class="cta-btn">{{ ctaText }}</a>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ynnovateLogo from "@/assets/images/logo-ynnovate-removebg.png";

export default {
  props: {
    title: {
      type: String,
      default: "Transformez vos idées en réalité",
    },
    description: {
      type: String,
      default:
        "Boostez votre entreprise avec des solutions sur mesure adaptées à vos besoins.",
    },
    ctaText: {
      type: String,
      default: "Contactez-nous",
    },
    ctaLink: {
      type: String,
      default: "#",
    },
    logoSrc: {
      type: String,
      default: ynnovateLogo,
    },
  },
  setup() {
    const isVisible = ref(false);
    const ctaContainer = ref(null);

    // Utilisation de onMounted pour éviter l'utilisation de IntersectionObserver côté serveur
    onMounted(() => {
      // Vérifier si l'API IntersectionObserver est disponible
      if (typeof IntersectionObserver !== "undefined" && ctaContainer.value) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 } // Détecte quand 50% du composant est visible
        );

        observer.observe(ctaContainer.value);
      }
    });

    return { isVisible, ctaContainer };
  },
};
</script>

<style scoped>
.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: transparent;
  color: white;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.logo {
  width: 150px;
  height: 150px;
  background: #2222224c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
}

.logo img {
  width: 150px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 20px;
}

.cta-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #5f035fd7, #1e2039);
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}

.cta-btn:hover {
  background: linear-gradient(45deg, #6100ff, #ff00ff);
  transform: scale(1.05);
}
</style>
