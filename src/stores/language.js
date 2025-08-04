// importamos pinia para manejar el estado global
import { defineStore } from 'pinia';
//importamos lang
import lang from '../languages/lang.json';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        locale: 'es', // idioma por defecto
        messages: lang
    }),
    getters: {
        t: (state) => (section, key) => {
            // Retorna el mensaje correspondiente al idioma y clave
            return state.messages[state.locale][section][key] || key;
        }
    },
    actions: {
        setLocale(newLocale) {
            // Cambia el idioma actual
            if (this.messages[newLocale]) {
                this.locale = newLocale;
            } else {
                console.warn(`Idioma ${newLocale} no encontrado.`);
            }
        }
    }
});