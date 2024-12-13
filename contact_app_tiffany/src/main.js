import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Vue3Toastify, {
    autoClose: 3000, // Durée par défaut pour fermer les toasts (en ms)
    position: 'top-right', // Position des toasts
  });

app.mount('#app');

// Création temporaire du localstorage
/*localStorage.contacts = JSON.stringify([
    {id: 1, name: 'Tiffany Schinelli', email: "tiffany.schinelli@gmail.com", phone: "0493190796"},
    {id: 2, name: 'Patrice Schinelli', email: "patrice.schinelli@gmail.com", phone: "0495940746"},
    {id: 3, name: 'Myriam Grégoire', email: "myriam.gregoire@gmail.com", phone: "0497865568"},
]);*/
