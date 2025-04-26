<template>
  <div class="service-box">
    <!-- Décorations en arrière-plan -->
    <div
      v-for="(decor, index) in decorations"
      :key="'decor-' + index"
      class="decor-card"
      :style="{
        top: decor.top,
        left: decor.left,
        width: decor.size,
        height: decor.size,
        background: decor.color,
      }"
    ></div>

    <div class="logo-grid">
      <div v-for="(lang, index) in languages" :key="index" class="logo-card">
        <img
          :src="getImageUrl(lang.logo)"
          :alt="lang.name"
          :title="lang.name"
        />
      </div>
      <div class="description">
        <h2 class="title">Nous vous proposons des formations</h2>
        <p class="desc-text">
          Faites-vous former par des professionnels dans le domaine
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const logos = import.meta.glob("/assets/images/logos/*.png", { eager: true });

export default {
  name: "ServiceFormation",
  data() {
    return {
      languages: [
        { name: "Tiktok", logo: "tiktok-logo.png" },
        { name: "Vue.js", logo: "vuejs-logo.png" },
        { name: "React.js", logo: "react-logo.png" },
        { name: "Node.js", logo: "nodejs-logo.png" },
        { name: "Laravel", logo: "laravel-logo.png" },
        { name: "Flutter", logo: "flutter-logo.png" },
      ],
      decorations: [
        {
          top: "10%",
          left: "5%",
          size: "60px",
          color: "rgba(255, 0, 150, 0.3)",
        },
        {
          top: "30%",
          left: "80%",
          size: "90px",
          color: "rgba(0, 200, 255, 0.2)",
        },
        {
          top: "70%",
          left: "20%",
          size: "50px",
          color: "rgba(255, 255, 0, 0.3)",
        },
        {
          top: "85%",
          left: "70%",
          size: "80px",
          color: "rgba(100, 255, 100, 0.3)",
        },
        {
          top: "50%",
          left: "50%",
          size: "100px",
          color: "rgba(255, 50, 50, 0.2)",
        },
      ],
    };
  },
  methods: {
    getImageUrl(fileName) {
      const filePath = `/assets/images/logos/${fileName}`;
      return logos[filePath]?.default || "";
    },
  },
};
</script>

<style scoped>
.service-box {
  position: relative;
  background-color: black;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "logo1 logo1 logo6 logo6"
    "logo2 logo3 logo4 logo5"
    "desc desc desc desc";
  gap: 0.1rem;
  width: 60%;
  padding: 5px;
}

.logo-card:nth-child(1) {
  grid-area: logo1;
  justify-self: start;
}

.logo-card:nth-child(2) {
  grid-area: logo2;
}

.logo-card:nth-child(3) {
  grid-area: logo3;
}

.logo-card:nth-child(4) {
  grid-area: logo4;
}

.logo-card:nth-child(5) {
  grid-area: logo5;
}

.logo-card:nth-child(6) {
  grid-area: logo6;
  justify-self: flex-start;
}

.logo-card {
  width: 90px;
  height: 90px;
  background: radial-gradient(circle, #0000007a, transparent);
  border: 1px solid rgba(128, 128, 128, 0.581);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-card img {
  width: 50px;
  height: 50px;
}

.description {
  grid-area: desc;
  text-align: center;
  color: white;
  margin-top: 10px;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
}

.desc-text {
  font-size: 0.8rem;
  font-style: italic;
}

/* 🌟 Décorations */
.decor-card {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.7;
  animation: floating 2s infinite alternate ease-in-out;
}

/* Effet de flottement */
@keyframes floating {
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translate3d(50px, 20px, 100px);
  }
}

@media (max-width: 768px) {
  .logo-grid {
    grid-template-columns: repeat(5, 2fr);
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    width: 100%;
    padding-bottom: 10px;
    align-items: center;
  }

  .logo-card {
    flex: 0 0 auto;
    width: 70px;
    height: 70px;
  }

  .logo-card img {
    width: 40px;
    height: 40px;
  }

  .description {
    flex: 0 0 100%;
  }

  .title {
    font-size: 1.4rem;
    text-align: left;
  }

  .desc-text {
    font-size: 0.85rem;
    text-align: right;
  }

  .decor-card {
    opacity: 0.4;
    filter: blur(12px);
  }
}


@media (max-width: 1024px) {
  .service-box {
    padding: 1.5rem;
  }

  .logo-card {
    width: 80px;
    height: 80px;
  }

  .logo-card img {
    width: 45px;
    height: 45px;
  }

  .title {
    font-size: 1.6rem;
  }

  .desc-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .service-box {
    padding: 1rem;
  }

  .logo-card {
    width: 70px;
    height: 70px;
  }

  .logo-card img {
    width: 40px;
    height: 40px;
  }

  .title {
    font-size: 1.4rem;
  }

  .desc-text {
    font-size: 0.85rem;
  }

  .decor-card {
    opacity: 0.4;
    filter: blur(12px);
  }
}

@media (max-width: 480px) {
  .service-box {
    padding: 0.8rem;
  }

  .logo-card {
    width: 40px;
    height: 40px;
  }

  .logo-card img {
    width: 30px;
    height: 30px;
  }

  .title {
    font-size: 1.2rem;
  }

  .desc-text {
    font-size: 0.8rem;
  }

  .decor-card {
    opacity: 0.3;
    filter: blur(10px);
  }
}

</style>
