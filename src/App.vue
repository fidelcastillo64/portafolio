<template>

  <div :style="{ backgroundColor: 'var(--background)   ' }" class="min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <!-- language switch always visible -->
    <Language class="language-switch" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'; // Asegúrate de importar onUnmounted

import Language from './components/sidebar/LanguageSwitch.vue';

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const ServicesSection = defineAsyncComponent(() => import('./components/ServicesSection.vue'));
const AboutSection = defineAsyncComponent(() => import('./components/AboutSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('./components/ExperienceAndSkills.vue'));
const collapsed = ref(true);

const isAppInDarkMode = ref(false);

// Observa el elemento <html> para saber si tiene la clase 'dark'
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === 'attributes' &&
      mutation.attributeName === 'class'
    ) {
      isAppInDarkMode.value = document.documentElement.classList.contains('dark');
    }
  });
});

onMounted(() => {
  // Inicializa el estado basándose en la clase actual del <html>
  isAppInDarkMode.value = document.documentElement.classList.contains('dark');
  // Empieza a observar los cambios en los atributos del <html>
  observer.observe(document.documentElement, { attributes: true });
});

// Cuando el componente App.vue se desmonte, detén la observación para evitar fugas de memoria
onUnmounted(() => {
  observer.disconnect();
});




</script>
<style scoped>
/* Estilos específicos para el componente */
.secundary-color {
  background-color: var(--secondary);
  color: var(--text);
}
#main {
  min-height: 100vh;
  transition: margin-left .5s;
  padding: 16px;
}
.menu {
  z-index: 20;
}
.NavBar {
  z-index: 21;
  position: relative;
  background-color: var(--primary);
  color: var(--text);
  padding: 12px 16px; 
}
.language-switch {
  position: fixed;
  bottom: 0; /* Positions the div at the very bottom of the viewport */
  left: 0;   /* Aligns the div to the left edge of the viewport */
  z-index: 1000; /* Ensures the div is above other content */
  padding: 10px;
  
}
</style>