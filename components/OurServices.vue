<template>
    <section class="ourServices-section">
      <div class="grid-row row-1">
        <ServiceMarketing class="box box-1" />
        <ServiceDevelopment class="box box-2" @mouseenter="handleMouseEnter" :class="{ 'box-2-hovered': isHovered }"/>
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
    },
    data() {
      return {
        isHovered: false,
        hoverTimeout: null,
      };
    },
    methods: {
      handleMouseEnter() {
        this.hoverTimeout = setTimeout(() => {
          this.isHovered = true;
        }, 2500);
      }
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
    border: 1px solid #181c25
  }

  .box-2{
    position: relative;
    z-index: 1;
  }

  @property --angle{
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  .box-2-hovered::after, .box-2-hovered::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background: conic-gradient(from var(--angle), transparent 10%, blue, #59257bc9);
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 5px;
    z-index: -1;
    animation: 5s spin linear infinite;
  }

  .box-2-hovered::before {
    filter: blur(1.5rem);
    opacity: 0.7
  }

  @keyframes spin{
    from{
      --angle: 0deg;
    }
    to{
      --angle: 360deg;
    }
  }

  </style>
  