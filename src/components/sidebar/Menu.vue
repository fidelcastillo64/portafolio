<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {ref ,onMounted} from 'vue';
import menuItems from './menuItems';
import MenuItem from './MenuItem.vue';
import Language from './LanguageSwitch.vue';

import { useLanguageStore } from '../../stores/language';
import DarkMode from './DarkMode.vue';

const languageStore = useLanguageStore();
const t = languageStore.t;
const collapsed = ref(true);
const isDarkMode = ref(false);


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
 <div class="menu" :class="collapsed ? 'collapsed' : 'expanded'">
    
    <div class="header">
        <button class = "menu-button" @click="collapsed = !collapsed">
            <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
        </button>
    </div>

    <div class="Profile">
        <FontAwesomeIcon class="profile-icon" :icon="menuItems.profile.icon" size="2x" />
        <div class="profile-name" v-if="!collapsed">
            {{ menuItems.profile.name }}
        </div>
    </div>
        
        <div class="menu-items">
            <ul>
                <MenuItem v-for="menuItem in menuItems.items" :key="menuItem.id" :item="menuItem" :collapsed="collapsed" :text="t('barra_lateral', menuItem.name)" />
            </ul>
        </div> 
    <div class="End collapsed" >
        <Language :collapsed="collapsed" /> <DarkMode :collapsed="collapsed" />
    </div>
    
    
</div>
        

</template>
<style scoped>
.menu {
    background-color: var(--primary);
    color: var(--text);
    height: 100vh;
    transition: width 0.3s ease;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top : 0;
}
.header {
    display: flex;
    justify-content: end;
}
.menu-button {
    border: none;
    background-color: transparent;
    color: var(--text-Nochange);
    cursor: pointer;
    padding: 10px;
}
.collapsed {
    width: 57.5px;
}
.expanded {
    width: 350px;
}
.Profile {
    display: flex;
    align-items: center;
    padding: 10px;
}
.profile-icon {
    color: var(--text-Nochange);
}
.profile-name {
    padding: 10px 0;
    font-size: 20px;
    color: var(--text-Nochange);
}
.menu-items ul {
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
}
.End{
    padding: 10px;
    position: absolute;
    bottom: 0;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--secondary);
    transition: background-color 0.3s ease;
    gap: 10px;
}
</style>