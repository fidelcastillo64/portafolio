<script setup>
const props = defineProps(['collapsed']);
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

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

</script>

<template>
  
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full transition-colors duration-300 focus:outline-none"
    :class="{
      // Aquí puedes usar tus variables CSS directamente en Tailwind si las definiste
      // en tu CSS principal con la sintaxis text-[var(--color-primary)] etc.
      'bg-(--orange) text-(--text-oposition) hover:bg-gray-300': !isDarkMode,
      'bg-(--secondary) text-(--dark-text) hover:bg-gray-600': isDarkMode
    }"
    aria-label="Toggle dark mode"
  >
    <FontAwesomeIcon
      :icon="isDarkMode ? 'fa-moon' : 'fa-lightbulb'"
      class="h-6 w-6"
    />
    
  </button>
</template>

<style scoped>
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 64px;
    height: 34px;

  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    transition: .4s;
    border-radius: 30px;
    border: var(--text) solid 1px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: .4s;
  }

  .sun svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }

  .moon svg {
    fill: #eeff00;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }

  /* .switch:hover */.sun svg {
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {

    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* .switch:hover */.moon svg {
    animation: tilt 5s linear infinite;
  }

  @keyframes tilt {

    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .input:checked + .slider {
    background-color: var(--primary);
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-oposition);
  }

  .input:checked + .slider:before {
    transform: translateX(30px);
  }
</style>