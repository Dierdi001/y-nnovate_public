<template>
  <div class="service-box" @mouseenter="handleMouseEnter">
    <div class="icon">
      <img
        v-if="!isHovered"
        src="@/assets/images/marketing-hand-give-bar-chart-statistic-svgrepo-com.svg"
        alt="Marketing"
      />
      <Transition
        v-else
        class="boom-text"
        name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <h1 v-html="animatedText"></h1>
      </Transition>
    </div>
    <div class="text">
      <h3 class="title">Marketing Digital</h3>
      <p>
        Boostez votre visibilité en ligne avec des stratégies de marketing
        innovantes et ciblées.
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ServiceMarketing",
  data() {
    return {
      isHovered: false,
      fullText: "BOOM !!!",
      animatedText: "",
    };
  },
  methods: {
    handleMouseEnter() {
      this.isHovered = true;
      this.animateTyping();
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        onComplete: done,
      });
    },
    animateTyping() {
      // Vérifie et nettoie un ancien intervalle en cours
      if (this.typingInterval) {
        clearInterval(this.typingInterval);
      }

      this.animatedText = "";
      let index = 0;
      
      // Utiliser Vue.nextTick pour forcer la mise à jour avant de commencer l'animation
      this.$nextTick(() => {
        this.typingInterval = setInterval(() => {
          if (index < this.fullText.length) {
            this.animatedText += this.fullText[index];
            index++;
          } else {
            clearInterval(this.typingInterval); // Nettoyage final
          }
        }, 200);
      });
    },
  },
};
</script>

<style scoped>
.service-box {
  background: radial-gradient(
    ellipse at bottom left,
    #2c3f65,
    #24524e54 30%,
    #000000 60%
  );
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  border-radius: 10px;
}
.service-box .text {
  text-align: right;
}

.icon img {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  filter: invert(54%) sepia(77%) saturate(100%) hue-rotate(200deg) brightness(90%) contrast(85%);

}

.icon .boom-text {
  height: 50px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  color: transparent;
  -webkit-background-clip: text;
  text-align: left;
}

.title {
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  color: transparent;
  -webkit-background-clip: text;
}

p {
  color: #cfcfcfd3;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

@media (max-width: 1024px) {
  .service-box {
    padding: 1.5rem;
    width: 90%; /* Réduit la largeur pour éviter un affichage trop large */
    max-width: 600px;
    margin: auto;
  }

  .icon img {
    width: 50px;
    height: 50px;
  }

  .icon .boom-text {
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .service-box {
    padding: 1.2rem;
    width: 95%;
    max-width: 500px;
  }

  .icon img {
    width: 45px;
    height: 45px;
  }

  .icon .boom-text {
    font-size: 1rem;
  }

  .title {
    font-size: 1.6rem;
  }

  p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .service-box {
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .icon img {
    width: 40px;
    height: 40px;
  }

  .icon .boom-text {
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.8rem;
  }
}

</style>
