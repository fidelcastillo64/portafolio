<template>
    <section class="text-(--text) mt-15">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-(--text) mb-4">
                {{ t('Servicios', 'Titulo') }}
            </h2>
        </div>
        <div class="y-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg bg-opacity-50 border border-[#1f1641] hover:shadow-xl transition-shadow duration-300 text-(--text-Nochange)">
                <div class="mx-auto h-24 text-center xl-h-28 xl:w-28">
                    <div>
                        <FontAwesomeIcon :icon="service.icon" class="text-7xl  mb-4" />
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-(--orange) to-(--text-Nochange) lg:text-xl" >
                        {{ service.title }}</h3>
                    <p class="pt-4 text-sm group-hover:text-(--text-Nochange) md:text-base">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLanguageStore } from '../stores/language';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
const languageStore = useLanguageStore();
const t = languageStore.t;

import { computed } from 'vue';

const services = computed(() => [
    {
        id: 1,
        title: t('Servicios', 'Cientifico'),
        description: t('Servicios', 'Cientifico_Descripcion'),
        icon: 'fa-solid fa-chart-line'
    },
    {
        id: 2,
        title: t('Servicios', 'Desarrollador'),
        description: t('Servicios', 'Desarrollador_Descripcion'),
        icon: 'fa-solid fa-code'
    },
    {
        id: 3,
        title: t('Servicios', 'Analista'),
        description: t('Servicios', 'Analista_Descripcion'),
        icon: 'fa-solid fa-database'
    }
]);
</script>
<style scoped>
</style>