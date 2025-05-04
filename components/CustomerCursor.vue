<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const cursor = document.querySelector('.custom-cursor') as HTMLElement

  const move = (e: MouseEvent) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }

  window.addEventListener('mousemove', move)

  onUnmounted(() => {
    window.removeEventListener('mousemove', move)
  })
})
</script>

<template>
  <div class="custom-cursor"></div>
</template>
