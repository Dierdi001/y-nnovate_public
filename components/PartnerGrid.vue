<template>
  <div class="sponsors-grid mt-36">
    <h2 class="section-title">Nos Solutions</h2>
    <div class="grid">
      <PartnerCard
        v-for="sponsor in formattedPartners"
        :key="sponsor.name || Math.random()"
        :sponsor="sponsor"
        :empty="!sponsor.name"
      />
    </div>
    <h2 class="section-title">Nous ont fait confiance</h2>
    <div class="grid">
      <PartnerCard
        v-for="sponsor in formattedPlatinumSponsors"
        :key="sponsor.name || Math.random()"
        :sponsor="sponsor"
        :empty="!sponsor.name"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import PartnerCard from '@/components/PartnerCard.vue'
import esgisLogo from '@/assets/images/partner/esgis-logo.png';
import ynnovateLogo from '@/assets/images/logo-ynnovate-removebg.png';

const partners = [
  { name: 'ESGIS', logo: esgisLogo, url: 'https://esgis.org' },
];
const formattedPartners = computed(() => fillEmptyPartnerSlots([...partners]))
const fillEmptyPartnerSlots = (arr, totalSlots = 6) => {
  return arr.concat(Array(Math.max(0, totalSlots - arr.length)).fill({ name: '', logo: '', url: '' }))
}

const platinumSponsors = [
  { name: 'Y-nnovate', logo: ynnovateLogo, url: 'https://teste.proceduralworldlab.com/' },
  { name: 'Y-nnovate', logo: ynnovateLogo, url: 'https://teste.proceduralworldlab.com/' },
  { name: 'Y-nnovate', logo: ynnovateLogo, url: 'https://teste.proceduralworldlab.com/' },
];

const sponsorsPerRow = 6;

const formattedPlatinumSponsors = computed(() => {
  const sponsors = [...platinumSponsors];
  const remainder = sponsors.length % sponsorsPerRow;
  
  if (remainder !== 0) {
    const slotsToFill = sponsorsPerRow - remainder;
    for (let i = 0; i < slotsToFill; i++) {
      sponsors.push({ name: '', logo: '', url: '' });
    }
  }
  
  return sponsors;
});

const isMobile = ref(false);

const handleResize = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768;
  }
};

onMounted(() => {
  handleResize(); // Appelle une première fois au montage
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<style scoped>
.sponsors-grid {
  text-align: center;
  background: transparent;
  color: white;
  padding: 40px;
  justify-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  width: 70%;
  border: 1px solid rgb(56, 56, 56);
  padding: 8px;
  border-radius: 10px;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(to bottom, #ededed, #737374);
  -webkit-background-clip: text;
  color: transparent;
}

.grid {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  width: 80%;
}

/* Style spécifique aux cartes vides */
.partner-card.empty {
  background: rgba(255, 255, 255, 0.1);
  border: 1px dashed rgba(255, 255, 255, 0.5);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
    width: 90%;
  }

  .grid {
    width: 90%;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    padding: 6px;
    width: 95%;
  }

  .grid {
    flex-wrap: wrap;
    width: 95%;
    gap: 10px;
  }

  .partner-card {
    width: 120px;
    height: 120px;
    margin: 10px
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
    padding: 5px;
    margin-bottom: 15px;
  }

  .grid {
    gap: 10px;
  }

  .partner-card {
    width: 100px;
    height: 100px;
  }
}

</style>
