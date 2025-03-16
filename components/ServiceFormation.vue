<template>
  <div class="service-box">
    <div class="logo-grid">
      <div v-for="(lang, index) in languages" :key="index" class="logo-card">
        <img :src="getImageUrl(lang.logo)" :alt="lang.name" :title="lang.name" />
      </div>
    </div>
  </div>
</template>

<script>
const logos = import.meta.glob('/assets/images/logos/*.png', { eager: true });

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
  background-color: black;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo-grid {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-template-rows: repeat(3,0fr);
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 60%;
  border: 1px solid white
}

.logo-card {
  width: 100px;
  height: 90px;
  background: #0e0e0e6c;
  border: 1px solid rgba(128, 128, 128, 0.581);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative
}

.logo-card:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
}

.logo-card img {
  width: 50px;
  height: 50px;
}
</style>
