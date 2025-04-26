<template>
  <div class="svg-container flex items-center justify-center max-w-screen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 100"
      class="data-flow-logo"
    >
      <defs>
        <linearGradient id="gradientLine" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#737374" />
          <stop offset="50%" stop-color="#ededed" />
          <stop offset="100%" stop-color="#0f0f0f" />
        </linearGradient>
      </defs>
      <defs>
        <radialGradient
          id="logoGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stop-color="#3a7bd5" />
          <stop offset="100%" stop-color="#00d2ff" />
        </radialGradient>
      </defs>

      <!-- Lignes avec courbures de la gauche vers la droite -->
      <path
        id="path1"
        d="M0,-90 C70,55 80,40 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path2"
        d="M0,50 C25,50 55,50 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path3"
        d="M0,200 C70,30 50,70 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path4"
        d="M0,350 C80,50 50,90 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path5"
        d="M0,-290 C90,35 80,40 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />

      <!-- Lignes inversées (de droite vers gauche) -->
      <path
        id="path6"
        d="M800,-90 C730,55 720,40 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path7"
        d="M800,50 C775,50 745,50 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path8"
        d="M800,200 C730,30 750,70 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path9"
        d="M800,350 C720,50 750,90 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />
      <path
        id="path10"
        d="M800,-290 C710,35 720,40 400,55"
        stroke="url(#gradientLine)"
        stroke-width="2"
        fill="none"
      />

      <!-- Points lumineux -->
      <circle ref="point1" cx="0" cy="0" r="1.5" fill="white" />
      <circle ref="point2" cx="0" cy="50" r="1.5" fill="white" />
      <circle ref="point3" cx="0" cy="100" r="1.5" fill="white" />
      <circle ref="point4" cx="0" cy="100" r="1.5" fill="white" />
      <circle ref="point5" cx="0" cy="50" r="1.5" fill="white" />

      <circle ref="point6" cx="800" cy="0" r="1.5" fill="white" />
      <circle ref="point7" cx="800" cy="50" r="1.5" fill="white" />
      <circle ref="point8" cx="800" cy="100" r="1.5" fill="white" />
      <circle ref="point9" cx="800" cy="100" r="1.5" fill="white" />
      <circle ref="point10" cx="800" cy="50" r="1.5" fill="white" />

      <!-- Le logo -->
      <image
        href="@/assets/images/logo-ynnovate-removebg.png"
        x="322"
        y="-25"
        style="pointer-events: none"
        class="logo-image"
        preserveAspectRatio="xMidYMid meet"
        fill="url(#logoGradient)"
      />
    </svg>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useNuxtApp } from "#app";

export default {
  name: "DataFlowLogo",
  setup() {
    const points = Array.from({ length: 10 }, () => ref(null));

    onMounted(() => {
      const { $gsap } = useNuxtApp(); // Récupère GSAP depuis le plugin
      if (!$gsap) {
        console.error("GSAP n'est pas injecté !");
        return;
      }

      for (let i = 0; i < 5; i++) {
        $gsap.to(points[i].value, {
          duration: 5 + i,
          repeat: -1,
          ease: "power1.inOut",
          motionPath: {
            path: `#path${i + 1}`,
            align: `#path${i + 1}`,
            autoRotate: true,
          },
          delay: i * 5,
        });
      }

      for (let i = 5; i < 10; i++) {
        $gsap.to(points[i].value, {
          duration: 5 + (i - 5),
          repeat: -1,
          ease: "power1.inOut",
          motionPath: {
            path: `#path${i + 1}`,
            align: `#path${i + 1}`,
            autoRotate: true,
          },
          delay: (i - 5) * 5,
        });
      }
    });

    return {
      point1: points[0],
      point2: points[1],
      point3: points[2],
      point4: points[3],
      point5: points[4],
      point6: points[5],
      point7: points[6],
      point8: points[7],
      point9: points[8],
      point10: points[9],
    };
  },
};
</script>

<style scoped>
.data-flow-logo {
  padding: 0;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

circle {
  opacity: 0.9;
  will-change: transform, opacity;
}

.logo-bg {
  filter: blur(8px);
  mix-blend-mode: screen;
  transition: all 0.5s ease;
}

.logo-image {
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 0 10px #ff66fa4b);
}

/* Animation du logo (conserve) */
@keyframes gradientPulse {
  0% {
    opacity: 0.6;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.6;
    transform: scale(0.95);
  }
}

.logo-bg {
  animation: gradientPulse 6s ease-in-out infinite;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .data-flow-logo {
    height: 35vh; /* Réduit un peu sur tablette */
  }

  .logo-image {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 640px) {
  .data-flow-logo {
    height: 25vh; /* Sur mobile : réduit encore */
  }

  .logo-image {
    width: 100px;
    height: 100px;
  }
}
</style>
