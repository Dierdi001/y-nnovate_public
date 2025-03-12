<template>
  <div class="service-box">
    <!-- Titre à gauche -->
    <div class="title">
      <h2 class="font-bold font-manrope gradient-text">Développement d'application</h2>
    </div>

    <!-- Smartphone à droite -->
    <div class="smartphone">
      <div class="screen">
        <div class="apk-icon">
          <span class="logo"> &lt;/&gt; </span>
          <span class="label">Apk</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceDevelopmentText",
};
</script>

<style scoped>
.service-box {
  height: 300px;
  background-color: transparent;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
}

.title {
  flex: 1;
  color: white;
  font-size: 4rem;
  max-width: 70%;
  word-wrap: break-word;
  display: flex;
  justify-content: start;
  align-items: start;
}

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

.gradient-text {
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
