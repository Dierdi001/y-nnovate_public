<template>
  <div
    class="p-6 shadow-lg w-[300px] flex flex-col justify-between testimonial-card"
  >
    <div class="flex items-center space-x-4">
      <img
        :src="testimonial.image"
        alt="User avatar"
        class="w-12 h-12 rounded-full"
      />
      <div>
        <h3 class="text-white font-semibold">{{ testimonial.name }}</h3>
        <p class="text-gray-400 text-sm">@{{ testimonial.username }}</p>
      </div>
    </div>
    <p class="text-gray-300 mt-4">{{ testimonial.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: Object,
  },
};
</script>
<style scoped>
.testimonial-card{
    background: #2222224c;
    border-radius: 10px;
    border: 1px solid rgb(56, 56, 56);
}
</style>
