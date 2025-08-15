<template>
  <div
    class="relative rounded-xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer
           transition-all duration-300 transform hover:scale-105
           bg-white dark:bg-gray-800"
    @click="handleClick"
  >
    <!-- Imagen del proyecto -->
    <img :src="imageSrc" :alt="title" class="w-full h-48 object-cover" />

    <!-- Contenido de la tarjeta (si no está clicada o en modo móvil) -->
    <div v-if="!isClicked || isMobile" class="p-4">
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ title }}</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tool, i) in tools"
          :key="i"
          class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        >
          {{ tool }}
        </span>
      </div>
    </div>

    <!-- Overlay que aparece al hacer click (en escritorio) -->
    <div
      v-if="isClicked && !isMobile"
      class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center
             transition-opacity duration-300"
    >
      <a :href="githubLink" target="_blank" rel="noopener noreferrer"
         class="text-white text-6xl hover:text-blue-400 transition-colors duration-200">
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Importa Font Awesome si no está configurado globalmente en tu main.js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tools: {
    type: Array,
    default: () => [],
  },
  githubLink: {
    type: String,
    default: '#',
  },
});

const isClicked = ref(false);
const isMobile = ref(false); // Para detectar si es pantalla móvil

// Lógica para detectar el tamaño de la pantalla
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768; // Tailwind's 'md' breakpoint
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

const handleClick = () => {
  // En móvil, si la tarjeta ya está clicada y no es el ícono de GitHub, abre el enlace directamente.
  // En escritorio, siempre se toggles el estado de clic.
  if (isMobile.value) {
    window.open(props.githubLink, '_blank');
  } else {
    isClicked.value = !isClicked.value;
  }
};
</script>

<style scoped>
/* No se necesitan estilos con ámbito si solo se usan clases de Tailwind */
</style>