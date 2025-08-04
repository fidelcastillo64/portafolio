import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

//add pinia 
import { createPinia } from 'pinia';



import {  initializeFontAwesome } from './plugins/fortawesome.js';
initializeFontAwesome();


const app = createApp(App); // 1. Crea la instancia de la aplicación

const pinia = createPinia(); // 2. Crea la instancia de Pinia
app.use(pinia); // 3. Usa Pinia en tu aplicación



app.mount('#app'); // 5. Monta la aplicación en el elemento con id "app"