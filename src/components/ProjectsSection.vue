<template>
    <section class="text-(--text) mt-0" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4  md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-(--text) ">
                    {{ t('Proyectos', 'Titulo') }}
                </h2>
                <!-- <div class="md:flex space-x-4 mb-4 mt-5 md:nt-0 grid col-auto">
                    <button class="hover:text-(--orange) px-5 py-1  rounded-full bg-(--orange) "
                        v-for="Categoria in [t('Proyectos', 'Categoria'), t('Proyectos', 'Categoria1'), t('Proyectos', 'Categoria2'), t('Proyectos', 'Categoria3')]"
                        :key="Categoria"
                        @click="() => selectedCategory = Categoria.toLowerCase()">
                        {{ Categoria }}
                    </button>
                </div> -->

                <div class="md:flex space-x-4  md:nt-0 w-full md:w-2/4">
                    <form class="w-full mx-auto mt-5 md:mt-0 md:flex grid md:flex-cols-2 grid-cols-1 ">
                    <label for="category-filter" class="block mb-2 text-2xl font-medium text-(--text) pr-4">{{ t('Proyectos', 'Filtro') }}</label>
                        <select 
                        id="category-filter" 
                        v-model="selectedCategory" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option
                                v-for="CategoriaKey in projectCategories"
                                :key="CategoriaKey"
                                :value="CategoriaKey"
                                >
                                {{ t('Proyectos', CategoriaKey) }} 
                            </option>
                        </select>
                    </form>
                </div>
            </div>
            <ul class="px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:gap-10 md:pt-12 lg:grid-cols-3" 
            data-aos="fade-up"
            >
                <div v-for="proyecto in filteredProjects" :key="proyecto.id" class="bg-(--card-bg) p-4 rounded-lg shadow-md group">
                    <div :style="{'background-image': `url(${proyecto.imagen})`, backgroundSize: 'cover'}" 
                    class="h-52 md:h-[24rem] rounded-t-xl bg-cover bg-center relative" 
                    @click="isMobile && toggleOverlay(proyecto.id)">
                        <div :class="[
                            'overlay absolute inset-0 bg-black flex items-center justify-center gap-4 transition-opacity duration-700 ease-in-out',
                            // Lógica para móvil: activo si activeProjectId coincide
                            isMobile && activeProjectId === proyecto.id ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none',
                            // Lógica para escritorio: activo al hover (solo si no es móvil)
                            !isMobile && 'group-hover:opacity-80 group-hover:pointer-events-auto'
                        ]"
                        @click.stop="isMobile && activeProjectId === proyecto.id && toggleOverlay(proyecto.id)"
                        >
                            <a :href="proyecto.Git" target="_blank" rel="noopener noreferrer" class="text-4xl hover:text-(--accent) text-amber-50">
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                            </a>
                            <a :href="proyecto.Web" target="_blank" rel="noopener noreferrer" class="text-4xl hover:text-(--accent) text-amber-50">
                                <FontAwesomeIcon icon="fa-solid fa-window-restore" />
                            </a>
                        </div>   
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-(--card-bg) shadow-lg border border-[#1f1641] p-4">
                        <h3 class="text-lg font-semibold">{{ proyecto.titulo }}</h3>
                        <p class="text-sm text-gray-400">{{ proyecto.descripcion }}</p>
                    </div>
                    <div class="mt-2 flex flex-wrap gap-2">
                        <span class="text-xs bg-(--accent) text-white px-2 py-1 rounded-full">
                            {{ t('Proyectos', proyecto.Categoria) }}
                        </span>
                        <span v-for="tecnologia in proyecto.Tecnologias" :key="tecnologia"
                            class="text-xs bg-(--orange) text-white px-2 py-1 rounded-full">
                            {{ tecnologia }}
                        </span>

                    </div>
                </div>
            </ul>

        </div>
    </section>
</template>
<script setup>
import { computed , ref, onMounted, onUnmounted } from 'vue';
import { useLanguageStore } from '../stores/language';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const languageStore = useLanguageStore();
const t = languageStore.t;

const proyectos = computed(() => [
    {
        id: 1,
        titulo: t('Proyecto1', 'Titulo'),
        imagen: 'https://vuejsexamples.com/content/images/2021/12/Top-Nuxt-3.jpg',
        descripcion: t('Proyecto1', 'Descripcion'),
        Tecnologias: ['JavaScript', 'Vue.js', 'Node.js'],
        Git: 'https://github.com/usuario/proyecto1',
        Web: 'https://usuario.github.io/proyecto1/',
        Categoria: 'Categoria1'
    },
    {
        id: 2,
        titulo: t('Proyecto2', 'Titulo'),
        imagen: 'https://vuejsexamples.com/content/images/2021/12/Top-Nuxt-3.jpg',
        descripcion: t('Proyecto2', 'Descripcion'),
        Tecnologias: ['JavaScript', 'Vue.js', 'Node.js', 'Tailwind CSS'],
        Git: 'https://github.com/usuario/proyecto2',
        Web: 'https://usuario.github.io/proyecto2/',
        Categoria: 'Categoria2'
    },
    {
        id: 3,
        titulo: t('Proyecto3', 'Titulo'),
        imagen: 'https://vuejsexamples.com/content/images/2021/12/Top-Nuxt-3.jpg',
        descripcion: t('Proyecto3', 'Descripcion'),
        Tecnologias: ['JavaScript', 'Vue.js', 'Node.js'],
        Git: 'https://github.com/usuario/proyecto3',
        Web: 'https://usuario.github.io/proyecto3/',
        Categoria: 'Categoria3'
    }
]); 
const projectCategories = ['Categoria', 'Categoria1', 'Categoria2', 'Categoria3'];

const selectedCategory = ref('Categoria'); 

const filteredProjects = computed(() => {
    // Si la clave seleccionada es 'Categoria' (que es la clave para "Todos los Proyectos")
    if (selectedCategory.value === 'Categoria') {
        return proyectos.value;
    }
    // Filtra los proyectos según la clave de categoría seleccionada
    return proyectos.value.filter(proyecto => proyecto.Categoria === selectedCategory.value);
});

// Lógica para manejar el estado del overlay en móvil
const activeProjectId = ref(null); // ID del proyecto cuyo overlay está abierto en móvil
const isMobile = ref(false); // Para detectar si es pantalla móvil

// Función para detectar si estamos en móvil
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768; // Tailwind's 'md' breakpoint
};

// Toggle del overlay en móvil
const toggleOverlay = (projectId) => {
  if (activeProjectId.value === projectId) {
    activeProjectId.value = null; // Cierra si ya está abierto
  } else {
    activeProjectId.value = projectId; // Abre si está cerrado
  }
};

// Cierra el overlay si se hace clic fuera de los íconos en el overlay mismo
const closeOverlay = () => {
    if (isMobile.value) { // Solo si estamos en móvil
        activeProjectId.value = null;
    }
};

// Inicializa y limpia el listener de redimensionamiento
onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

</script>
<style scoped>
</style>