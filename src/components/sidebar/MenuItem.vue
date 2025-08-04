<script setup>

import { ref } from 'vue';
const props = defineProps(['item', 'collapsed', 'text']);

var collapsedSubmenu = ref(false);

// Función para manejar el clic en el item del menú
const handleClick = () => {
    // Si el item tiene un submenú, cambia el estado del submenú
    if (props.item.submenu) {
        collapsedSubmenu.value = !collapsedSubmenu.value;
    }
    // Si el item tiene una acción, la ejecuta
    if (props.item.action) {
        props.item.action();
    }
};
</script>

<template>
<a href="#" class="menu-item">
    <!-- si el item contiene submenus, añade un click para colapsar/expandir -->
    <div class="item" @click="handleClick">
        <div class="icon">
            <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
        </div>
        <!-- imprime el texto normal si no tiene sub menus -->
        <div class="title" v-if="!collapsed && !props.text.Titulo" >
            {{ props.text }}
        </div>
        <!-- si tiene submenus, imprime el titulo del submenu -->
        <div class="title" v-if="!collapsed && props.text.Titulo">
            {{ props.text.Titulo }}
        </div>
        <!-- si el item tiene un submenú, muestra un icono de flecha hacia abajo -->
        <div class="arrow" v-if="props.item.submenu && !collapsed">
            <!-- icono de flecha hacia abajo -->
             <!-- giramos el icono al hacer clic -->
            <font-awesome-icon :icon="['fa-solid', 'chevron-down']" size="1x" :style="{ transform: collapsedSubmenu ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }"  />
        </div>
    </div>
</a>
<!-- subitems si el item tiene un submenú, lo mostramos -->
<a class="subitem" v-for="subItem in props.item.submenu" v-if="props.item.submenu && !collapsed"  >
        <!-- icono del submenú -->
        <div class="item" v-if="!collapsedSubmenu">
            <div class="icon">
                <font-awesome-icon :icon="['fa-solid', subItem.icon]" size="2x" />
            </div>
            <!-- texto del submenú -->
            <div class="title" v-if="!collapsed && subItem.name">
                {{ props.text[subItem.name] }}
            </div>
        </div>
</a>
</template>
<style scoped>
:root {
    --vt-c-white: #ffffff;
    --vt-c-black: #000000;
    --vt-c-gray: #808080;
    --vt-c-blue: #0000ff;
    --vt-c-red: #ff0000;
}

a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    display: block;
}
a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.item{
    display: flex;
    align-items: center;
    padding: 10px;
    gap:  10px;
}
.iteam .icon{
    width: 40px;
    display: flex;
    justify-content: center;
}
.title {
    font-size: 16px;
    color: var(--vt-c-white);
}
.subitem {
    padding-left: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.arrow {
    margin-left: auto;
    color: var(--vt-c-white);
    transition: transform 0.3s ease;
}

</style>