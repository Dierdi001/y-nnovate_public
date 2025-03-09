<template>
    <section ref="hero" class="hero">
      <div class="container text-center relative">
        <h1 ref="title" class="text-7xl font-semibold text-white">
          The Build Tool <br />
          <span class="text-purple-400">for the Web</span>
        </h1>
        <p ref="subtitle" class="mt-4 text-gray-400 text-lg">
          Nous trouvons la meilleure adaptée à vos besoins
        </p>
        <div ref="buttons" class="mt-6 flex justify-center gap-4">
          <button class="btn-gradient">Get started</button>
          <button class="btn-outline">GitHub</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  
  // Références pour GSAP
  const hero = ref(null);
  const title = ref(null);
  const subtitle = ref(null);
  const buttons = ref(null);
  
  onMounted(() => {
    gsap.fromTo(
      hero.value,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  
    gsap.fromTo(
      title.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );
  
    gsap.fromTo(
      subtitle.value,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power2.out" }
    );
  
    gsap.fromTo(
      buttons.value,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: "elastic.out(1, 0.5)" }
    );
  });
  </script>
  
  <style scoped>
  .hero {
    @apply h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black;
  }
  
  .container {
    @apply max-w-3xl mx-auto px-6;
  }
  
  .btn-gradient {
    @apply px-6 py-3 text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg transition-transform transform hover:scale-105;
  }
  
  .btn-outline {
    @apply px-6 py-3 text-gray-300 font-bold border border-gray-500 rounded-lg transition-transform transform hover:scale-105;
  }
  </style>
  