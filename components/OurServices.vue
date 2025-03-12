<template>
    <section class="ourServices-section">
      <div class="grid-row row-1">
        <ServiceMarketing class="box box-1" />
        <ServiceDevelopment class="box box-2" />
      </div>
      <div class="grid-row row-2">
        <ServiceFormation class="box box-3" />
        <ServiceOthers class="box box-4" />
      </div>
    </section>
  </template>
  
  <script>
  import ServiceMarketing from './ServiceMarketing.vue';
  import ServiceDevelopment from './ServiceDevelopment.vue';
  import ServiceFormation from './ServiceFormation.vue';
  import ServiceOthers from './ServiceOthers.vue';
  
  export default {
    name: 'OurServices',
    components: {
      ServiceMarketing,
      ServiceDevelopment,
      ServiceFormation,
      ServiceOthers
    }
  }
  </script>
  
  <style scoped>
  .ourServices-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 100vh;
    width: 100%;
    gap: 1rem;
  }
  
  /* Première ligne */
  .row-1 {
    display: grid;
    grid-template-columns: 33% 66%;
    gap: 1rem;
    width: 80%;
    max-width: 1200px;
  }
  
  /* Deuxième ligne avec inversion */
  .row-2 {
    display: grid;
    grid-template-columns: 66% 33%;
    gap: 1rem;
    width: 80%;
    max-width: 1200px;
  }
  
  /* Juste pour la visibilité */
  .box {
    border-radius: 10px;
    text-align: center;
    height: 300px;
  }
  </style>
  