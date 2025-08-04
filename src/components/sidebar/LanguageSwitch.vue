<script setup>
//importamos pinia y language
import { storeToRefs } from 'pinia';
import { useLanguageStore } from '../../stores/language';
//desaparecer el menu de idiomas al colapsar el menu
const props = defineProps(['collapsed']);

//importamos el store de language
const languageStore = useLanguageStore();
const { locale  } = storeToRefs(languageStore);
//detectamos el idioma actual del navegador
const browserLanguage = navigator.language || navigator.userLanguage;

//establecemos el idioma por defecto
const t = languageStore.t;
function changeLanguage() {
  languageStore.setLocale(locale.value);
}


</script>

<template>
  <div class="body" v-if="!collapsed" >
    <div class="tabs">
      <input
        checked
        value="en"
        name="fav_language"
        id="html"
        type="radio"
        class="input"
        @change="changeLanguage"
        v-model="locale"
      />
      <label for="html" class="label" > {{ t('idiomas', 'Inglés') }}</label>
      <input
        value="es"
        name="fav_language"
        id="css"
        type="radio"
        class="input"
        @change="changeLanguage"
        v-model="locale"
      />
      <label for="css" class="label">{{ t('idiomas', 'Español')  }}</label>
    </div>
  </div>
</template>

<style scoped>



/* Estilos del componente de tabs */
.body {
  --radius: 8px;
  --border: 4px;
  --height: 48px;
  --speed: 0.25s;
  display: grid;
  place-items: center;
  align-content: center;
}

.tabs {
  height: var(--height);
  display: grid;
  grid-auto-flow: column;
  /* Cambiado de hsl(0 0% 0%) a var(--background-oposition) o similar */
  background: var(--primary); /* Fondo oscuro del contenedor de pestañas */
  border-radius: var(--radius);
  grid-auto-columns: 1fr;
  position: relative;
  /* Cambiado de hsl(0 0% 0%) a var(--background-oposition) o similar */
  border: var(--border) solid var(--background-oposition); /* Borde del contenedor de pestañas */
}

.tabs {
  --ease: linear(
    0,
    0.1641 3.52%,
    0.311 7.18%,
    0.4413 10.99%,
    0.5553 14.96%,
    0.6539 19.12%,
    0.738 23.5%,
    0.8086 28.15%,
    0.8662 33.12%,
    0.9078 37.92%,
    0.9405 43.12%,
    0.965 48.84%,
    0.9821 55.28%,
    0.992 61.97%,
    0.9976 70.09%,
    1
  );
}

.tabs > .input,
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.tabs:has(:checked:nth-of-type(1)) {
  --active: 0;
}
.tabs:has(:checked:nth-of-type(2)) {
  --active: 1;
}
.tabs:has(:checked:nth-of-type(3)) {
  --active: 2;
}
.tabs:has(:checked:nth-of-type(4)) {
  --active: 3;
}

.tabs :checked + .label {
  --highlight: 1;
}

.tabs:has(.input:nth-of-type(2)) {
  --count: 2;
}
.tabs:has(.input:nth-of-type(3)) {
  --count: 3;
}
.tabs:has(.input:nth-of-type(4)) {
  --count: 4;
}

.tabs .label {
  padding: 0 clamp(10px, 10px + 10px, 20px);
  cursor: pointer;
  text-align: center;
  height: 100%;
  display: grid;
  border-radius: calc(var(--radius) - var(--border));
  place-items: center;
  color: var(--text-oposition); /* Color del texto de la pestaña */
  transition: background, color;
  transition-duration: 0.25s;
  transition-timing-function: var(--ease, ease);
}

.input:not(:checked) + .label:hover {
  --highlight: 0.35;
  /* Cambiado de hsl(0 0% 20%) a un color de fondo de hover más adecuado */
  background: var(--primary); /* O un color de hover personalizado, como var(--background-oposition) con menos opacidad */
}

.tabs::after {
  pointer-events: none;
  content: "";
  width: calc(100% / var(--count));
  height: 100%;
  /* Cambiado de hsl(0 0% 100%) a var(--primary-oposition) o var(--accent) */
  background: var(--primary); /* Color del resaltado de la pestaña activa */
  position: absolute;
  border-radius: calc(var(--radius) - var(--border));
  /* mix-blend-mode: difference; puede que ya no sea necesario si los colores son adecuados */
  mix-blend-mode: difference; /* Mantenido, pero evalúa si sigue teniendo el efecto deseado con los nuevos colores */
  translate: calc(var(--active, 0) * 100%) 0;
  transition: translate, outline-color;
  transition-duration: var(--speed);
  transition-timing-function: var(--ease, ease);
  outline: 2px solid transparent;
}

.tabs:has(:focus-visible)::after {
  outline-color: red; /* Puedes cambiar esto a una de tus variables si lo deseas, ej: var(--accent) */
}
</style>