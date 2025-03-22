<template>
  <div class="sponsors-grid mt-36">
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
import { computed } from 'vue'
import PartnerCard from '@/components/PartnerCard.vue'
import esgisLogo from '@/assets/images/partner/esgis-logo.png';
import ynnovateLogo from '@/assets/images/logo-ynnovate-removebg.png';

const partners = [
  { name: 'ESGIS', logo: esgisLogo, url: 'https://esgis.org' },
]

const platinumSponsors = [
  { name: 'Y-nnovate', logo: ynnovateLogo, url: 'https://teste.proceduralworldlab.com/' },
]

// Fonction pour s'assurer qu'il y a toujours 4 cartes visibles
const fillEmptyPartnerSlots = (arr, totalSlots = 4) => {
  return arr.concat(Array(Math.max(0, totalSlots - arr.length)).fill({ name: '', logo: '', url: '' }))
}
const fillEmptyClientsSlots = (arr, totalSlots = 24) => {
  return arr.concat(Array(Math.max(0, totalSlots - arr.length)).fill({ name: '', logo: '', url: '' }))
}

const formattedPartners = computed(() => fillEmptyPartnerSlots([...partners]))
const formattedPlatinumSponsors = computed(() => fillEmptyClientsSlots([...platinumSponsors]))
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
  width: 80%;
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

</style>
