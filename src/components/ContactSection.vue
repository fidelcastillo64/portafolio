<template>
    <section class="text-white mt-1 mb-10 grid" id="contact">
        <div class="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 xl:px-16"  data-aos="fade-up">
            <div>
                <h2 class="text-4xl font-bold text-(--text) text-left mb-4" >
                    {{ t('Contacto', 'Titulo') }}
                </h2>
                <p class="text-(--text)">
                    {{ t('Contacto', 'Descripcion') }}
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5 ">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                        style=" background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; align-items: center; border-radius: 50%;
                        overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="text-white text-2xl"/>
                        </div>
                        <div class="ml-5 text-(--text)">
                            <h4 class="text-lg font-semibold mb-1">{{ t('Contacto', 'Correo') }}</h4>
                            <p>ikevincastillo2000@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                        style=" background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; align-items: center; border-radius: 50%;
                        overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                            <font-awesome-icon icon="fa-solid fa-phone"  class="text-white text-2xl"/>
                        </div>
                        <div class=" ml-5 text-(--text)">
                            <h4 class="text-lg font-semibold mb-1 ">{{ t('Contacto', 'Telefono') }}</h4>
                            <p>441-109-82-01</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                        style=" background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; align-items: center; border-radius: 50%;
                        overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                            <font-awesome-icon icon="fa-brands fa-linkedin" class="text-white text-2xl"/>
                        </div>
                        <div class="ml-5 text-(--text)">
                            <h4 class="text-lg font-semibold mb-1 ">Linkedin</h4>
                            <p class="text-(--text)"><a href="www.linkedin.com/in/ian-kevin-castillo-galván-data-science/" target="_blank">www.linkedin.com/in/ian-kevin-castillo-galván-data-science/</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-4xl font-bold text-(--text) text-left mb-4">
                    {{ t('Herramientas', 'Titulo') }}
                </h2>
                <p class="text-(--text)">{{ t('Herramientas', 'Descripcion') }}</p>
                 <div class="mt-8 md:mt-5 text-left grid flex-col z-10 grid-cols-2 md:grid-cols-3 gap-5 ">
                    <div class="mt-0 " v-for="(value, index) in skills" :key="index">
                        <div class="text-center rounded-xl bg-(--card-bg) bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] grid p-5 h-full items-center grid-col-1">
                            <h1 class="text-4xl font-bold text-(--text-Nochange) flex justify-center items-center">
                                <!-- Icono de habilidad -->
                                <!-- declaramos el SVG como con color blanco -->
                                <SvgIcon 
                                    v-if="value.type === 'SVG'" 
                                    :src="value.icono" 
                                    class="w-10 h-10 text-amber-50" 
                                />
                                <font-awesome-icon v-else :icon="value.icono" class="inline-block w-10 h-10 text-amber-50" />
                            </h1>
                            <p class="text-sm sm:text-base text-gray-300">{{ value.titulo }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, computed } from 'vue';
import { useLanguageStore } from '../stores/language';
import SvgIcon from './Elements/SvgIcon.vue';
import Aos from 'aos';
import 'aos/dist/aos.css';
const languageStore = useLanguageStore();
const t = languageStore.t;


onMounted(() => {
    Aos.init();
});

const skills = computed(() => [
    {
        id: 1,
        titulo: t('skills', 'JavaScript'),
        type: 'font',
        icono: "fa-brands fa-js"
    },
    {
        id: 5,
        titulo: t('skills', 'CSS'),
        icono: "fa-brands fa-css3 "
    },
    {
        id: 6,
        titulo: t('skills', 'HTML'),
        icono: "fa-brands fa-html5"
    },
    {
        id: 8,
        titulo: t('skills', 'NodeJS'),
        icono: "fa-brands fa-node-js"
    },
    {
        id: 9,
        titulo: t('skills', 'Vuejs'),
        icono: "fa-brands fa-vuejs"
    },
    {
        id: 15,
        titulo: t('skills', 'GitHub'),
        icono: "fa-brands fa-github"
    },
    {
        id: 23,
        titulo: t('skills', 'Tailwind'),
        type: 'SVG',
        icono: "./img/skills/tailwind.svg"
    },
    {
        id: 24,
        titulo: t('skills', 'Chatbot'),
        type: 'SVG',
        icono: "./img/skills/chatbot.svg"
    },
    {
        id: 27,
        titulo: t('skills', 'Git'),
        icono: "fa-brands fa-git-alt"
    }
]);

</script>
<style scoped>
</style>