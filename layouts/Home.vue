<template>
    <div>
      <!-- Inclure la Navbar -->
      <Navbar />
      
      <!-- Contenu principal -->
      <div class="container my-4">
        <slot></slot> <!-- Ici, le contenu principal sera injecté -->
      </div>
      
      <!-- Inclure le Footer -->
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
  