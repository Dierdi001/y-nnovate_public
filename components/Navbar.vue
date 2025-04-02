<template>
  <nav class="bg-[#101010] relative px-4">
    <div class="max-w-screen flex flex-wrap items-center justify-between mx-5 px-7">
      <router-link to="/" class="flex items-center rtl:space-x-reverse">
        <img :src=ynnovateLogo class="h-11 sm:h-16" alt="Flowbite Logo" />
      </router-link>

      <button @click="toggleMenu" type="button"
              class="inline-flex items-center px-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div :class="{ 'hidden md:flex': !isMenuOpen, 'flex': isMenuOpen }"
           class="absolute top-full left-0 right-0 w-full md:static md:w-auto bg-[#101010] md:bg-transparent shadow-md md:shadow-none rounded-lg md:rounded-none transition-all duration-300 ease-in-out">
        <ul class="font-normal flex flex-col md:flex-row p-4 md:p-0 mt-2 md:mt-0 md:space-x-8 rtl:space-x-reverse">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.link"
                         class="block py-2 px-3 text-white rounded-md hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import ynnovateLogo from '@/assets/images/logo-ynnovate-removebg.png';
 

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = ref([
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/' },
  { name: 'Contact', link: '/' }
]);
</script>

<style scoped>
nav { 
  border-bottom: 1px solid rgba(255, 255, 255, 0.344);
  padding: 0;
  font-family: "Manrope", sans-serif;
}
</style>