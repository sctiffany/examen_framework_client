//import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

// Création temporaire du localstorage
/*localStorage.contacts = JSON.stringify([
    {id: 1, name: 'Tiffany Schinelli', email: "tiffany.schinelli@gmail.com", phone: "0493190796"},
    {id: 2, name: 'Patrice Schinelli', email: "patrice.schinelli@gmail.com", phone: "0495940746"},
    {id: 3, name: 'Myriam Grégoire', email: "myriam.gregoire@gmail.com", phone: "0497865568"},
]);*/
