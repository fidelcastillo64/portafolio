<template>

  <div :style="{ backgroundColor: 'var(--background)   ' }" class="min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <ProjectsSection />
    <ContactSection />
    <!-- <Testimonial />  -->  <!-- Elemento sin funcionalidad aun  -->
    <Footer />
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
const ProjectsSection = defineAsyncComponent(() => import('./components/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/ContactSection.vue'));
const Testimonial = defineAsyncComponent(() => import('./components/Testimonial.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));

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
// BOT
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
let myLandbot = null;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');
    s.type = "module"
    s.async = true;
    s.addEventListener('load', function() {
      myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3094073-UXAN789DW76SFWB2/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
const scrollToSection = (href) => {
  const section = document.querySelector(href);
  if (section) {
    console.log("Desplazando a la sección:", href);
    section.scrollIntoView({ behavior: 'smooth' });
    // si esta en movil cerrara el menu del bot
    if (window.innerWidth < 768) {
      console.log("Cerrando el bot en móvil");
      myLandbot.close(); // Cierra el chat si está abierto
    }
  }
};

// Función para cerrar el bot si la ventana es pequeña
const closeBotOnSmallScreens = () => {
  if (window.innerWidth < 768) {
    myLandbot.close(); // Cierra el chat
  }
};

//
window.addEventListener("message", (event) => {
  if (event.data?.type === "scrollTo") {
    scrollToSection(event.data.target);
  }
});


</script>
<style >
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

