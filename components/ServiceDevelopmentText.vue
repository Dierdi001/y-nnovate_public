<template>
  <transition name="fade-slide">
    <div class="service-box">
      <!-- Section gauche : Titre + Texte -->
      <div class="text-content">
        <h2 class="title">Développement d'application</h2>
        <p class="description">
          Une équipe assez compétente pour créer des applications qui répondent à vos besoins avec performance et innovation.
        </p>
      </div>

      <!-- Section droite : Smartphone -->
      <div class="smartphone">
        <div class="screen">
          <div class="apk-icon">
            <span class="logo">&lt;/&gt;</span>
            <span class="label">Apk</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ServiceDevelopmentText",
};
</script>

<style scoped>
/* Animation de sortie */
.fade-slide-leave-active {
  transition: opacity 2s ease-out, transform 2s ease-out;
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(50px); /* Déplace vers la droite */
}

.service-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 2rem 3rem;
  border-radius: 8px;
  height: 300px;
}

/* Section Texte */
.text-content {
  flex: 1;
  color: white;
  max-width: 60%;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
}

.description {
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Manrope', sans-serif;
  margin-top: 0.5rem;
  color: #cfcfcf;
  line-height: 1.5;
  text-align: justify;
}

/* Smartphone */
.smartphone {
  width: 120px;
  height: 200px;
  background: #1e1e1e;
  border-radius: 20px;
  border: 4px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.screen {
  width: 90%;
  height: 85%;
  background: #2b2b2b;
  border-radius: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apk-icon {
  text-align: center;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: block;
}

.label {
  font-size: 14px;
  margin-top: 5px;
  display: block;
}
</style>
