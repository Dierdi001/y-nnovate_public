<template>
  <div class="Our-Partners flex items-center justify-center mt-20">
    <h3 class="section-title text-4xl md:text-5xl lg:text-6xl font-bold gradient-text font-manrope leading-tight mb-8">
      Nos Partenaires
    </h3>

    <div
      ref="container"
      class="relative w-full max-w-screen-lg overflow-hidden"
      :style="maskStyle"
    >
      <div
        class="mx-auto flex flex-wrap gap-3 sm:grid-cols-2"
        :class="{ 'animate-skew-scroll': isVisible }"
      >
        <div v-for="item in props.items" :key="item.id">
          <div
            class="flex cursor-pointer w-72 p-4 items-center space-x-3 rounded-md border border-gray-100 dark:border-gray-800 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
          >
            <img
              :src="item.img"
              alt="item"
              class="h-10 w-20 rounded-full object-fit flex-none"
            />
            <p class="text-gray-600">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps<{
  items: { id: string; text: string; img: string }[];
}>();

const container = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const maskStyle = computed(() => ({
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
  maskImage: `
    linear-gradient(to right, transparent 0%, black 3rem, black calc(100% - 3rem), transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 3rem, black calc(100% - 3rem), transparent 100%)
  `,
  WebkitMaskImage: `
    linear-gradient(to right, transparent 0%, black 3rem, black calc(100% - 3rem), transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 3rem, black calc(100% - 3rem), transparent 100%)
  `
}));

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target); // si tu veux que ça se relance à chaque scroll, enlève cette ligne
      }
    },
    { threshold: 0.2 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});

onBeforeUnmount(() => {
  if (container.value) {
    observer.unobserve(container.value);
  }
});
</script>

<style scoped>
.Our-Partners {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  gap: 1rem;
}

</style>
