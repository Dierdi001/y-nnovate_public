<template>
    <div>
      <!-- Inclure la Navbar -->
      <Navbar />
      <div class="container">
        <slot></slot>
      </div>
            <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  
  <style scoped>
  /* Style pour le contenu principal, si nécessaire */
  .container {
    min-height: 80vh;
  }
  </style>
  