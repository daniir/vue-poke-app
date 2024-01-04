import { createApp } from 'vue';
import route from './router';
import App from './App.vue';
import './style.css';

createApp(App).use(route).mount('#app')
