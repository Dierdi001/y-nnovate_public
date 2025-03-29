<template>
  <div class="dev-service-container" @mouseenter="handleMouseEnter">
    <!-- Composant affiché par défaut -->
    <ServiceDevelopmentText
      v-if="!isHovered"
      class="service-development-text"
    />

    <Transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="dev-service-box" v-show="isHovered">
        <div class="scroll-box" ref="scrollBox">
          <div
            class="shimmer-line"
            v-for="index in 12"
            :key="index"
            :style="{ width: getRandomWidth(), borderRadius: '5px' }"
          ></div>
        </div>

        <div class="code-container">
          <div class="code-title">Du code écrit sur mesure</div>
          <div class="code-box">
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
    </Transition>
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
    handleMouseEnter() {
      this.isHovered = true;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 1,
        onComplete: done,
      });
    },
    getRandomWidth() {
      return `${Math.floor(Math.random() * 50) + 50}%`;
    },
  },
};
</script>
<style scoped>
.dev-service-container {
  height: 300px;
  background: radial-gradient(
    circle at top right,
    #1552299c,
    #24524e54 30%,
    #000000 60%
  );
  border-radius: 10px;
}

.dev-service-box {
  height: 300px;
  background: radial-gradient(
    circle at top right,
    #59257bc9,
    #0d0d0d 20%,
    #000000 60%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: 1s ease;
  border-radius: 10px;
  opacity: 0;
}

/* Animation de l'entrée */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease; /* Transition de l'opacité */
}

/* Début de l'entrée */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.scroll-box {
  width: 55%;
  max-width: 500px;
  height: 250px;
  overflow-y: hidden;
  background: radial-gradient(
    circle at bottom left,
    #37839671,
    #0d0d0d 30%,
    #0d0d0d 60%
  );
  border-radius: 8px;
  color: #f8f8f2;
  font-family: "Courier New", monospace;
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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(78, 78, 78, 0.3) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 4s infinite;
}

.code-line {
  white-space: nowrap;
  margin: 0;
  padding: 0;
  text-align: left;
  display: flex;
  align-items: center;
}

.code-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  text-align: right;
}

.code-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: right;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}

/* Style de la boîte de code à droite */
.code-box {
  font-family: "Courier New", monospace;
  font-size: 14px;
  cursor: text;
  width: 100%;
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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(78, 78, 78, 0.3) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
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

@media (max-width: 1024px) {
  .dev-service-container {
    height: auto;
    padding: 1rem;
  }

  .dev-service-box {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  .scroll-box {
    width: 100%;
    height: auto;
    max-height: 200px;
    overflow-y: auto;
  }

  .code-container {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }

  .code-title {
    font-size: 1.5rem;
  }

  .code-box {
    font-size: 12px;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .dev-service-container {
    padding: 0.5rem;
  }

  .dev-service-box {
    padding: 0.5rem;
  }

  .scroll-box {
    max-height: 150px;
  }

  .code-title {
    font-size: 1.3rem;
  }

  .code-box {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .dev-service-container {
    padding: 0.2rem;
  }

  .dev-service-box {
    padding: 0.2rem;
  }

  .scroll-box {
    max-height: 120px;
  }

  .code-title {
    font-size: 1.2rem;
  }

  .code-box {
    font-size: 10px;
  }
}

</style>
