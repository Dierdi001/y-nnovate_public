defineClientComponent()
<script setup>
import { onMounted, ref } from 'vue'

// Dynamically import and register the loader component only on client
const isClient = ref(false)

onMounted(async () => {
  const { quantum } = await import('ldrs')
  quantum.register()
  isClient.value = true
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#27223d]">
    <l-quantum v-if="isClient" size="65" speed="4.5" color="#fff" />
  </div>
</template>
