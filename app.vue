<template>
  <div>
    <Loader v-if="loading" />
    <CustomCursor />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Loader from './components/Loader.vue'
import CustomCursor from './components/CustomerCursor.vue'

const loading = ref(true)
const router = useRouter()

router.beforeEach(() => {
  loading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>
