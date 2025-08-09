<template>
  
<header class="flex justify-between items-center p-6 relative z-20">
    <!-- Logo - Contenedor izquierdo -->
    <div class="text-3xl font-bold">LOGO</div>
    
    <!-- Dark Mode para escritorio - Contenedor central -->
    <div class="flex-grow justify-end pr-3  flex">
        <DarkMode class=" w-10"/>
    </div>
    
    <!-- Contenedor de la derecha para pantallas grandes y el menú de móvil -->
    <div class="flex items-center gap-4 z-30">
        <!-- Navegación para escritorio -->
        <nav class="hidden md:block">
            <ul class="flex flex-row space-x-6">
                <li
                    v-for="item in Mlist"
                    :key="item.name"
                    class="text-lg text-[var(--text)]"
                >
                    <a
                        :href="item.href"
                        class="block ease-linear text-lg transition duration-300 hover:text-[var(--accent)]"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
        
        <!-- Botones para móvil (Dark Mode y menú toggle) -->
        <div class="md:hidden flex items-center gap-4">
            
            <button 
                type="button" 
                class="block focus:outline-none" 
                @click="isMenuOpen = !isMenuOpen"
            >
                <span v-if="isMenuOpen" class="text-2xl">
                    <font-awesome-icon icon="fa-solid fa-xmark" size="2x" />
                </span>
                <span v-else class="text-2xl">
                    <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
                </span>
            </button>
        </div>
    </div>
    
    <!-- Navegación de pantalla completa para móvil -->
    <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#000000]/90 md:hidden', isMenuOpen ? 'block': 'hidden']"
    >
        <ul class="flex flex-col space-y-4">
            <li
                v-for="item in Mlist"
                :key="item.name"
                class="text-lg text-[var(--text-Nochange)]"
            >
                <a
                    :href="item.href"
                    class="block ease-linear text-2xl transition duration-300 hover:text-[var(--accent)]"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</header>
    
</template>

<script setup>
import {ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '../stores/language';
import DarkMode from './sidebar/DarkMode.vue';
const languageStore = useLanguageStore();
const t = languageStore.t;


//dark mode
const isDarkMode = ref(false);
// Al cargar el componente, verifica la preferencia guardada o el tema del sistema
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    // Si no hay preferencia guardada, usa la preferencia del sistema operativo
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // Aplica la clase 'dark' inicialmente
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }
});


// lista de elementos del navbar
const Mlist = computed(() => [
  {name: t('navbar', 'Servicios'), href: '#'}, // Accede a la función 't' a través de .value
  {name: t('navbar', 'Sobre_mi'), href: '#'},
  {name: t('navbar', 'Habilidades'), href: '#'},
  {name: t('navbar', 'Proyectos'), href: '#'},
  {name: t('navbar', 'Contacto'), href: '#'},
  {name: t('navbar', 'Blog'), href: '#'},
  {name: t('navbar', 'Educacion'), href: '#'},
]);

const isMenuOpen = ref(false);
const scrollToSection = (href) => {
  isMenuOpen.value = false; // Cierra el menú al hacer clic en un enlace
  // Desplaza suavemente a la sección correspondiente
  const section = document.querySelector(href);
  // Si la sección existe, desplázate a ella
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
.Da
<style scoped>

</style>