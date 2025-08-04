<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-(--accent) blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-(--accent) opacity-40 blur-2xl"></div>
        </div>
        <div class="W-full px-5 sm:px-8 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xlgap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-(--text) font-bold text-4xl md:text-5xl lg:text-6xl">
                            {{ t('HeroSection', 'Saludo') }} <span class="text-(--accent)">{{ t('HeroSection', 'Nombre') }}</span>
                        </h1>
                    </div>
                    <p class="text-(--text) pt-8 text-center lg:text-left mx-auto max-w-lx">
                        {{ t('HeroSection', 'Descripción') }}
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-(--accent)
                                border-2 border-transparent"></span>
                            <span class="relative flex items-center justify-center gap-2.5 text-amber-50">
                                {{ t('HeroSection', 'Contactame') }}  <font-awesome-icon icon="fa-solid fa-message" class="text-2xl" /> 
                            </span>
                        </button>
                        <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center border-(--accent) ">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative text-(--accent)">
                            <div class="flex items-center gap-2.5">
                                <a href="../items/IAN KEVIN CASTILLO GALVÁN.pdf" download="IAN KEVIN CASTILLO GALVÁN.pdf">
                                    <span class="">{{ t('HeroSection', 'CV') }}</span>
                                    <font-awesome-icon icon="fa-solid fa-file-arrow-down" class="text-2xl" />
                                </a>
                            </div>
                            
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:h-full md:flex ">
                    <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center justify-center relative">
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-90 from-(--accent) to-(--orange) blur-2xl"></div>
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-(--accent) ">
                            <img src="../img/Yo.png" alt="Yo" loading="lazy" width="500" height="auto"
                             class="w-full h-full rounded-full object-cover">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { useLanguageStore } from '../stores/language';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const languageStore = useLanguageStore();
const t = languageStore.t;

</script>
<style scoped>

</style>