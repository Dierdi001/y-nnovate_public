<script setup>
import UiIndex from "~/components/ui/index.vue";

// Définir les métadonnées de la page
definePageMeta({
  layout: 'Home',
  //middleware: ['auth']
});
</script>

<template>
  <div>
    <UiIndex />
  </div>
</template>
