<template>
  <section class="about-section mt-14 py-20 px-6 md:px-20">
    <div class="max-w-6xl mx-auto">
      <SloganSection />
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div
          v-for="(card, index) in aboutText"
          :key="index"
          :ref="el => cardRefs[index] = el"
          class="card"
          :class="visibleCards[index] ? `fade-up delay-${index}` : ''"
        >
          <h3 class="text-xl font-bold text-white border-b-2 mb-4">{{ card.title }}</h3>
          <template v-if="Array.isArray(card.content)">
            <ul class="space-y-2 mt-2">
              <li v-for="(item, i) in card.content" :key="i" class="flex items-start gap-2">
                <span class="text-gray-400">✔</span>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </template>
          <template v-else>
            <p class="text-gray-300">{{ card.content }}</p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SloganSection from '~/components/SloganSection.vue';
import { useAboutText } from "@/composables/useAboutText";


const cardRefs = ref([]);
const visibleCards = ref([]);
const { aboutText } = useAboutText();

onMounted(() => {
  visibleCards.value = Array(aboutText.length).fill(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = cardRefs.value.indexOf(entry.target);
        if (index !== -1) visibleCards.value[index] = true;
      }
    });
  }, {
    threshold: 0.1,
  });

  cardRefs.value.forEach(card => {
    if (card) observer.observe(card);
  });
});
</script>

<style scoped>
.card {
  @apply p-6 shadow-lg transition duration-700 transform opacity-0 translate-y-10;
  background: linear-gradient(135deg, #100e13, #2222224c);
  border-radius: 10px;
  border: 1px solid rgb(56, 56, 56);
  z-index: 10;
  position: relative;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up {
  animation: fadeUp 0.8s forwards;
}

.delay-0 { animation-delay: 0s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }
.delay-5 { animation-delay: 1s; }
</style>
