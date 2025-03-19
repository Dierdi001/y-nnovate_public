<template>
  <div class="sponsor-card" :class="{ empty }">
    <a v-if="!empty" :href="sponsor.url" target="_blank">
      <img :src="sponsor.logo" :alt="sponsor.name" />
    </a>
    <div v-else>Aucun sponsor</div>
  </div>
</template>

<script setup>
defineProps({
  sponsor: Object,
});
</script>

<style scoped>
.sponsor-card {
  background: #2222224c;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  border: 1px solid rgb(56, 56, 56);
}

.sponsor-card.empty {
  pointer-events: none;
}

.sponsor-card img {
  filter: grayscale(100%);
  transform: scale(1.15);
  transition: filter 0.3s ease-in-out;
}

.sponsor-card:hover {
  pointer: cursor;
}

.logo {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}

.name {
  font-size: 1rem;
  font-weight: bold;
}
</style>
