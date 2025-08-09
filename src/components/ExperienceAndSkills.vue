<template>
    <section class="text(--text) " id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <!-- este elemento es un fondo borroso de color -->
                <span class="w-16 h-32 rounded-l-full flex bg-(--orange) blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 xl:px-16" data-aos="fade-up">
            <div class="mt-4 md:mt-0 text-left grid flex-col z-10 h-full w-full grid-cols-2 md:grid-cols-3 gap-5">
                <h2 class="text-4xl font-bold text-(--text) text-left md:col-span-3 col-span-2">{{ t('skills', 'Mis') }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-(--orange) to-(--text)">{{ t('skills', 'Habilidades') }}</span>
                </h2>
                <div class="mt-0 " v-for="(value, index) in skills" :key="index">
                    <div class="text-center rounded-xl bg-(--card-bg) bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] p-5 h-full ">
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
            <div  class="top-3" data-aos="fade-up" data-aos-offset="-200">
                <h2 class="text-4xl font-bold text-left mb-8 md:text-center md:mt-0 mt-8" data-aos="">
                    {{ t('skills', 'experiencia') }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-(--orange) to-(--text)">{{ t('skills', 'laboral') }}</span>
                </h2>
                <div class="space-y-4 py-8" >
                    <div v-for="value in experiencia" :key="value.id"
                    class="flex items-center rounded-xl p-4 bg-(--card-bg)" >
                    <div class="w-1/4">
                        <svg>
                            <image :href="value.iconoEmpresa" alt="Logo" class="w-fullobject-contain mx-auto text-[var(--orange)]"></image>
                        </svg>
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="text-lg font-semibold text-(--text-Nochange)">{{ value.titulo }}</h3>
                        <p class="text-sm text-gray-300">{{ value.descripcion }}</p>
                    </div>
                    </div>

                </div>
                

            </div>
        </div>
        
    </section>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useLanguageStore } from '../stores/language';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SvgIcon from './Elements/SvgIcon.vue';
const languageStore = useLanguageStore();
const t = languageStore.t;


const skills = computed(() => [
    {
        id: 1,
        titulo: t('skills', 'JavaScript'),
        type: 'font',
        icono: "fa-brands fa-js"
    },
    {
        id: 2,
        titulo: t('skills', 'Python'),
        type: 'font',
        icono: "fa-brands fa-python"
    },
    {
        id: 3,
        titulo: t('skills', 'Java'),
        type: 'font',
        icono: "fa-brands fa-java"
    },
    {
        id: 4,
        titulo: t('skills', 'CSharp'),
        type: 'SVG',
        icono: "./img/skills/csharp.svg"
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
        id: 7,
        titulo: t('skills', 'SQL'),
        icono: "fa-solid fa-database"
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
        id: 10,
        titulo: t('skills', 'PHP'),
        icono: "fa-brands fa-php"
    },
    {
        id: 11,
        titulo: t('skills', 'Power BI'),
        type: 'SVG',
        icono: "./img/skills/powerbi.svg"
    },
    {
        id: 12,
        titulo: t('skills', 'MySQL'),
        type: 'SVG',
        icono: "./img/skills/mysql.svg"
    },
    {
        id: 13,
        titulo: t('skills', 'IA'),
        icono: "fa-brands fa-openai"
    },
    {
        id: 14,
        titulo: t('skills', 'MongoDB'),
        type: 'SVG',
        icono: "./img/skills/mongodb.svg"
    },
    {
        id: 15,
        titulo: t('skills', 'GitHub'),
        icono: "fa-brands fa-github"
    },
    {
        id: 16,
        titulo: t('skills', 'Seaborn'),
        type: 'SVG',
        icono: "./img/skills/seaborn.svg"
    },
    {
        id: 17,
        titulo: t('skills', 'arboles'),
        icono: "fa-solid fa-diagram-project"
    },
    {
        id: 18,
        titulo: t('skills', 'visualización'),
        icono: 'fa-solid fa-chart-line'
    },
    {
        id: 19,
        titulo: t('skills', 'Big Data'),
        icono: "fa-solid fa-server"
    },
    {
        id: 20,
        titulo: t('skills', 'machine_learning'),
        icono: "fa-solid fa-robot"
    },
    {
        id: 21,
        titulo: t('skills', 'Excel'),
        type: 'SVG',
        icono: "./img/skills/excel2.svg"
    },
    {
        id: 22,
        titulo: t('skills', 'Estadistica'),
        icono: "fa-solid fa-chart-pie"
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
        id: 25,
        titulo: t('skills', 'Angular'),
        type: 'SVG',
        icono: "./img/skills/angular.svg"
    },
    {
        id: 26,
        titulo: t('skills', 'TypeScript'),
        type: 'SVG',
        icono: "./img/skills/typescript.svg"
    }
]);

const experiencia = computed(() => [
    {
        id: 1,
        titulo: t('Experiencia', 'DesarrolladorWeb'),
        iconoEmpresa: "./img/UAQ.svg",
        empresa: "UAQ",
        fecha: "2023-2024",
        descripcion: t('Experiencia', 'DesarrolladorWeb_info')
    },
]);

</script>

<style scoped>
</style>