<template>
    <section class="text-(--text) " id="about">
        <div class="absolute z-0 top-[93rem] insert-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-(--accent) via-(--secondary) blur-2xl to-(--primary) opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold mb-8 text-(--text)">{{t('Sobre_mi', 'Titulo')}}</h2>
                <div class="space-y-8 py-8">
                    <div v-for="(item, index) in Education" :key="index" 
                    class="flex items-center dm:w-[80%] w-full rounded-xl bg-[#111a3e] bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] p-5">
                        <div class="w-1/4">
                            <svg class="w-20 h-20 mx-auto text-[var(--orange)]" alt="Logo">
                                <image :href="item.SVG" alt="Logo" class="w-full h-full object-contain mx-auto text-[var(--orange)]"></image>
                            </svg>
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-roboto uppercase text-transparent bg-clip-text bg-gradient-to-r from-(--orange) to-(--text-Nochange) lg:text-xl" >
                                {{ item.title }}
                            </h3>
                            <p class="text-sm text-(--text-Nochange)"> <font-awesome-icon icon="fa-solid fa-calendar" class="text-[var(--orange)]" /> {{ item.date }}</p>
                            <p class="text-lg text-(--text-Nochange)" >{{ item.description }}</p>
                            <p class="text-sm text-(--text-Nochange)">{{ item.info }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 dm:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bond text-(--text) md:text-center text-left mb-4"> {{ t('Sobre_mi', 'Subtitelo') }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-(--orange) to-(--text)">{{ t('Sobre_mi', 'Subtitelo2') }} </span>
                    {{ t('Sobre_mi', 'Subtitelo3') }}
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">{{ t('Sobre_mi', 'MásSobreMi') }}</p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] p-5">
                        <h1 class="text-4xl font-bold text-(--text-Nochange)">1</h1>
                        <p class="text-sm sm:text-base text-gray-300">{{ t('Sobre_mi', 'tarjeta1') }}</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] p-5">
                        <h1 class="text-4xl font-bold text-(--text-Nochange)">6</h1>
                        <p class="text-sm sm:text-base text-gray-300">{{ t('Sobre_mi', 'tarjeta2') }}</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] bg-opacity-10 shadow-lg hover:shadow-xl border-[#1f1641] p-5">
                        <h1 class="text-4xl font-bold text-(--text-Nochange)">4</h1>
                        <p class="text-sm sm:text-base text-gray-300">{{ t('Sobre_mi', 'tarjeta3') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLanguageStore } from '../stores/language';
const languageStore = useLanguageStore();
const t = languageStore.t;
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


onMounted(() => {
    Aos.init();
});

const Education = computed(() => [
    {
        "SVG": "img/UAQ.svg",
        "title": t('Sobre_mi', 'UAQ'),
        "description": t('Sobre_mi', 'UAQ_Descripcion'),
        "info": t('Sobre_mi', 'UAQ_info'),
        "date": "2019 - 2024"
    },
    {
        "SVG": "img/EBAC2.svg",
        "title": t("Sobre_mi", "EBAC"),
        "description": t("Sobre_mi", "EBAC_Descripcion"),
        "info": t("Sobre_mi", "EBAC_info"),
        "date": "2024 - 2025"
    },
    {
        "SVG": "img/NodeL.svg",
        "title": t("Sobre_mi", "Certificacion_nodejs"),
        "description": t("Sobre_mi", "Certificacion_nodejs_Descripcion"),
        "info": t("Sobre_mi", "Certificacion_nodejs_info"),
        "date": "2025"
    },
    {
        "SVG": "img/Excel.svg",
        "title": t("Sobre_mi", "Excel"),
        "description": t("Sobre_mi", "Excel_Descripcion"),
        "info": t("Sobre_mi", "Excel_info"),
        "date": "2025"
    }

]);

</script>