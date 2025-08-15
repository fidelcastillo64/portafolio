<template>
    <footer class="mt-8 border z-10 border-[#33353f] border-l-transparent border-r-transparent text-white pb-15">
        <div class="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-screen-xl md:flex-row ">
            <div class="flex items-center">
                <span class="text-sm text-(--text) ">{{ t('Footer', 'Derechos') }}</span>
            </div>
            <div class="flex items-center mt-4 md:mt-0 text-(--text)">
                <a href="#" class="text-sm  hover:opacity-50">{{ t('Footer', 'Politica') }}</a>
                <span class="mx-2">|</span>
                <a href="#" class="text-sm hover:opacity-50">{{ t('Footer', 'Terminos') }}</a>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { useLanguageStore } from '../stores/language';

const languageStore = useLanguageStore();
const t = languageStore.t;

</script>