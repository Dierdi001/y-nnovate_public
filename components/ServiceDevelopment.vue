<template>
  <div class="dev-service-container"
    @mouseenter="isHovered = true" 
    @mouseleave="handleMouseLeave"
  >
    <!-- Composant affiché par défaut -->
    <ServiceDevelopmentText v-show="!isHovered" class="service-development-text" />

    <div class="dev-service-box" v-show="isHovered">
      <div class="scroll-box" ref="scrollBox">
        <div 
          class="shimmer-line" 
          v-for="index in 20" 
          :key="index" 
          :style="{ width: getRandomWidth(), borderRadius: '5px' }">
        </div>
        <div class="diagonal-line"></div>
      </div>
  
      <div 
        class="code-box" 
        @mouseenter="handleMouseEnter" 
      >
        <pre class="code-line shimmer-effect">
          <code>
            > npm install
          </code>
        </pre>
        <pre class="code-line shimmer-effect">
          <code>
            > npm run dev
          </code>
        </pre>
        <pre class="code-line">
          <code>
            > npm build
          </code>
        </pre>
        <span class="cursor-blink"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";

export default {
  name: "ServiceDevelopment",
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleMouseLeave() {
    },
    handleMouseEnter() {
      this.isHovered = true;
      this.animateTransition();
    },
    getRandomWidth() {
      return `${Math.floor(Math.random() * 50) + 50}%`;
    },
    animateTransition() {
      if (this.isHovered) {
        gsap.to(".service-development-text", 
          { opacity: 0, y: -20, duration: 5, ease: "power2.out" }
        );
      }
    }
  },
  watch: {
    isHovered(newVal) {
      this.animateTransition();
    }
  }
};
</script>
<style scoped>
.dev-service-container {
  height: 300px;
  background-color: #141414;
  border-radius: 8px;

}

.dev-service-box {
  height: 300px;
  background-color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.scroll-box {
  width: 55%;
  max-width: 500px;
  height: 250px;
  overflow-y: hidden;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #f8f8f2;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #444;
  display: block;
  align-items: flex-start; 
  justify-content: flex-start;
  box-sizing: border-box;
  text-align: left;
}

/* Lignes brillantes */
.shimmer-line {
  height: 20px;
  margin: 5px 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(78, 78, 78, 0.3) 50%, rgba(255, 255, 255, 0.1) 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.code-line {
  white-space: nowrap; 
  margin: 0;
  padding: 0;
  text-align: left;
  display: flex;
  align-items: center;
}

/* Style de la boîte de code à droite */
.code-box {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  cursor: text;
  width: 40%;
  max-width: 600px;
  padding: 5px;
  background-color: #1e1e1e;
  color: #f8f8f2;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.1);
}

/* Effet de brillance pour simuler l'animation de terminal */
.shimmer-effect {
  animation: shimmer 2s infinite;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(78, 78, 78, 0.3) 50%, rgba(255, 255, 255, 0.1) 75%);
  background-size: 200% 100%;
}

/* Animation du curseur clignotant */
.cursor-blink {
  position: absolute;
  bottom: 6px;
  right: 10px;
  width: 10px;
  height: 15px;
  background-color: #dcdcdc;
  animation: blink-caret 0.8s step-end infinite;
}

@keyframes blink-caret {
  50% {
    opacity: 0;
  }
}

@keyframes shimmer {
  100% {
    background-position: -200% 0;
  }
}
</style>
