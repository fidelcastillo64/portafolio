<template>
  <!-- Contenedor que tendrá el SVG inyectado -->
  <div v-if="svgContent" v-html="svgContent" class="svg-container"></div>
  <div v-else>
    <!-- Opcional: Mostrar un indicador de carga o un fallback -->
    Cargando SVG...
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

// Definir las props que recibirá el componente
const props = defineProps({
  src: { // La ruta al archivo SVG (ej: "/skills/ejemplo.svg")
    type: String,
    required: true
  }
});

const svgContent = ref('');

// Función para cargar el contenido del SVG
const loadSvg = async (path) => {
  try {
    // Realiza una petición para obtener el contenido raw del SVG
    // Vite se encarga de servir los archivos de 'public' correctamente.
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let text = await response.text();

    // Importante: Reemplazar 'fill' y 'stroke' por 'currentColor' dentro del SVG.
    // Esto permite que el color del SVG sea controlado por la propiedad 'color' (CSS text-color)
    text = text
      .replace(/fill="[^"]+"/g, 'fill="currentColor"')
      .replace(/stroke="[^"]+"/g, 'stroke="currentColor"');

    svgContent.value = text;
  } catch (error) {
    console.error('Error al cargar el SVG:', error);
    svgContent.value = '';
  }
};

// Cargar el SVG cuando el componente se monta
onMounted(() => {
  // `props.src` ya viene con la ruta correcta (ej. "/skills/ejemplo.svg")
  // El navegador se encarga de prefijar con la base de despliegue (ej. /portafolio/)
  loadSvg(props.src);
});

// Volver a cargar el SVG si la prop 'src' cambia
watch(() => props.src, (newSrc) => {
  loadSvg(newSrc);
});
</script>

<style scoped>
/* Estilos para el contenedor del SVG inyectado */
.svg-container {
  display: inline-block; /* Para que el SVG se comporte como inline-block */
  /* Asegura que el SVG herede el color de texto del padre */
  /* y lo aplique a sus propiedades fill/stroke si usan currentColor */
  color: inherit;
}
.svg-container :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>