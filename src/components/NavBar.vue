<template>
  
    <header class=" flex justify-between items-center p-6 bg-opacity-50 relative z-20" > 
      <div class=" text-3xl font-bold text-(var(--text)) items-center" > LOGO  <DarkMode />  </div>
      <!-- mobile toggle  button -->
       <div class="md:hidden z-30">
        <button type="button" 
        class=" blockfocus:outline-none" 
        @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-2xl">
            <font-awesome-icon icon="fa-solid fa-xmark  " class="text-(--text-Nochange)" size="2x"  />
          </span>
          <span v-else class="text-2xl">
            <font-awesome-icon icon="fa-solid fa-bars " size="2x"  />
          </span>
        </button>
      </div>
      
       <!-- Navbar link -->
        <!-- si el menú está abierto, muestra los enlaces  -->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center md:bg-none bg-[#000000]/90 md:relative md:flex md:justify-between md:flex-row md:bg-transparent ', 
        isMenuOpen ? 'block': 'hidden']"
       
        >
          <ul :class="['flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ']">
            <li v-for="item in Mlist" :key="item.name" class=" text-lg   text-(--text-Nochange)  md:text-(--text)">
              <a :href="item.href" class="block ease-linear text-2xl md:text-lg transition duration-300 hover:text-(--accent) " >{{ item.name }}</a>
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

<style scoped>

</style>