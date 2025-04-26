<template>
  <div class="service-box" @mouseover="startAnimation">
    <svg class="thunder" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Dégradé radial -->
        <radialGradient id="thunderGradient" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stop-color="#f6de9e"
            :stop-opacity="isLit ? 1 : 0.2"
          />
          <stop
            offset="100%"
            stop-color="#dfa414"
            :stop-opacity="isLit ? 1 : 0.2"
          />
        </radialGradient>
      </defs>
      <!-- Éclair -->
      <polygon
        class="bolt"
        points="30,2 10,38 26,38 18,62 50,24 32,24"
        fill="url(#thunderGradient)"
        :class="{ glow: isBlinking }"
      />
    </svg>

    <!-- Titre et Paragraphe -->
    <div class="service-description">
      <h2>Auditez et optimisez votre site pour une réactivité et une expérience utilisateur accrues.

</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceOthers",
  data() {
    return {
      isBlinking: false,
      isLit: false,
    };
  },
  methods: {
    startAnimation() {
      if (this.isLit) return; // Ne pas réactiver si déjà allumé
      this.isBlinking = true; // Début du clignotement
      setTimeout(() => {
        this.isBlinking = false;
        this.isLit = true; // Fixe l'état allumé
      }, 1500); // Durée du clignotement avant l'état définitif
    },
  },
};
</script>

<style scoped>
.service-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #000000, #020204);
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.thunder {
  height: 50%;
  width: 60%;
  border-radius: 60%;
}

/* Effet de clignotement */
@keyframes blink {
  0%,
  100% {
    filter: drop-shadow(0px 0px 0px #dfa414);
  }
  50% {
    filter: drop-shadow(0px 0px 10px #dfa414);
  }
}

/* Appliquer le clignotement temporaire */
.glow {
  animation: blink 0.3s infinite alternate;
}

/* Style du titre et paragraphe */
.service-description {
  text-align: center;
  color: #fff;
  margin-top: 1rem;
}

h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
