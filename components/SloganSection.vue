<template>
    <section class="slogan-section">
      <div class="content">
        <div class="heart-container">
          <svg class="heart-svg" viewBox="0 0 24 24">
            <path
              fill="url(#gradient)"
              d="M12 21s-1-.6-2.2-1.4C7.6 17.9 2 13.6 2 8.5 2 5.4 4.4 3 7.5 3c1.9 0 3.6 1 4.5 2.5C13.9 4 15.6 3 17.5 3 20.6 3 23 5.4 23 8.5c0 5.1-5.6 9.4-7.8 11.1C13 20.4 12 21 12 21z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FF66B2" />
                <stop offset="100%" stop-color="#8A2BE2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
  
        <h2 class="title">L'innovation commence ici</h2>
        <p class="subtitle">
          Transformez vos idées en réalité avec des solutions sur mesure,<br />
          conçues pour votre succès.
        </p>
        <p class="brought-by">Faites le premier pas dès aujourd'hui.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SloganSection",
  };
  </script>
  
  <style scoped>
  .slogan-section {
    background: transparent;
    color: white;
    text-align: center;
    padding: 60px 20px;
    position: relative;
  }
  
  .content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .heart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .heart-svg {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 6px #ff66facc);
    /* animation: sparkle 2s infinite alternate; */
  }
  
  .title {
    font-size: 2.5rem;
    font-family: "Manrope", sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    background: linear-gradient(to bottom, #ededed, #737374);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #bbb;
  }
  
  .brought-by {
    font-size: 1rem;
    color: #888;
    margin-top: 20px;
  }
  
  /* Effet scintillant */
  @keyframes sparkle {
    0% {
      opacity: 0.7;
      filter: drop-shadow(0 0 4px rgba(255, 102, 178, 0.3));
    }
    100% {
      opacity: 1;
      filter: drop-shadow(0 0 10px rgba(255, 102, 178, 0.8));
    }
  }
  </style>
  