<template>
  <section class="ourServices-section h-full mt-24">
    <h3 class="section-title text-5xl md:text-6xl lg:text-7xl">Nos Services</h3>
    <div class="grid-row row-1 mt-8">
      <ServiceMarketing 
        class="box box-1"  
        @mouseenter="handleMouseEnterBoxOne"
        :class="{ 'box-1-hovered': isBoxOneHovered }"
      />
      <ServiceDevelopment
        class="box box-2"
        @mouseenter="handleMouseEnterBoxTwo"
        :class="{ 'box-2-hovered': isBoxTwoHovered }"
      />
    </div>
    <div class="grid-row row-2">
      <ServiceFormation class="box box-3" />
      <ServiceOthers class="box box-4" />
    </div>
  </section>
</template>

<script>
import ServiceMarketing from "./ServiceMarketing.vue";
import ServiceDevelopment from "./ServiceDevelopment.vue";
import ServiceFormation from "./ServiceFormation.vue";
import ServiceOthers from "./ServiceOthers.vue";

export default {
  name: "OurServices",
  components: {
    ServiceMarketing,
    ServiceDevelopment,
    ServiceFormation,
    ServiceOthers,
  },
  data() {
    return {
      isBoxOneHovered: false,
      isBoxTwoHovered: false,
      hoverTimeout: null,
    };
  },
  methods: {
    handleMouseEnterBoxOne() {
      this.isBoxOneHovered = true;
    },
    handleMouseEnterBoxTwo() {
      this.hoverTimeout = setTimeout(() => {
        this.isBoxTwoHovered = true;
      }, 2500);
    },
  },
};
</script>

<style scoped>
.ourServices-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  gap: 1rem;
}

.section-title {
  font-weight: medium;
  margin-bottom: 8px;
  text-align: center;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
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
  grid-template-columns: 70% 29%;
  gap: 1rem;
  width: 80%;
  max-width: 1200px;
}

/* Juste pour la visibilité */
.box {
  border-radius: 10px;
  text-align: center;
  height: 300px;
  border: transparent;
  z-index: 1;
  position: relative;
}

.row-2 .box{
  height: 380px
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.box-1 {
  transition: background 2s ease-in-out, opacity 1.5s ease-in-out;
}
.box-1-hovered {
  animation: fadeBackground 2.5s ease-in-out forwards;
}

@keyframes fadeBackground {
  0% {
    background: radial-gradient(
      ellipse at bottom left,
      #2c3f65,
      #24524e54 30%,
      #000000 60%
    );
    opacity: 0.5;
  }
  10% {
    background: radial-gradient(
      ellipse at 20% 30%,
      #2c3f65,
      #24524e54 35%,
      #000000 60%
    );
    opacity: 0.6;
  }
  20% {
    background: radial-gradient(
      ellipse at 25% 35%,
      #2c3f65,
      #24524e54 40%,
      #000000 60%
    );
    opacity: 0.7;
    border: 2px solid #2c3f65;
  }
  30% {
    background: radial-gradient(
      ellipse at center,
      #000000,
      #24524e 30%,
      #2c3f65 60%
    );
    opacity: 0.8;
  }
  40% {
    background: radial-gradient(
      ellipse at 50% 50%,
      #000000,
      #2c3f65 30%,
      #33023593 60%
    );
    opacity: 0.85;
  }
  50% {
    background: radial-gradient(
      ellipse at 50% 50%,
      #24524e,
      #2c3f65 30%,
      #33023593 60%
    );
    opacity: 0.9;
  }
  60% {
    background: radial-gradient(
      ellipse at top right,
      #24524e,
      #2c3f65 30%,
      #33023593 60%
    );
    opacity: 0.95;
  }
  70% {
    background: radial-gradient(
      ellipse at top right,
      #2c3f65,
      #33023593 35%,
      #000000 65%
    );
    opacity: 0.98;
  }
  80% {
    background: radial-gradient(
      ellipse at top right,
      #2c3f65,
      #33023593 40%,
      #000000 70%
    );
    opacity: 1;
  }
  90% {
    background: radial-gradient(
      ellipse at top right,
      #2c3f65,
      #33023593 45%,
      #000000 75%
    );
    opacity: 1;
  }
  100% {
    background: radial-gradient(
      circle at top right,
      #2c3f65,
      #33023593 30%,
      #000000 60%
    );
    opacity: 1;
  }
}

.box-2-hovered::after,
.box-2-hovered::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: conic-gradient(
    from var(--angle),
    transparent 10%,
    #24524e54,
    #59257bc9
  );
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 5px;
  z-index: -1;
  animation: 5s spin linear infinite;
}

.box-2-hovered::before {
  filter: blur(1.5rem);
  opacity: 0.7;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

@media (max-width: 1024px) {
  .row-1,
  .row-2 {
    grid-template-columns: 1fr; /* Une seule colonne */
  }

  .box {
    width: 100%; /* Prend toute la largeur */
    height: auto; /* Ajuste la hauteur selon le contenu */
  }
}

</style>
