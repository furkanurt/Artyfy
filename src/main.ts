import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '@/plugins';
import App from './App.vue';
import i18n from '@/i18n';
import './styles/index.css';

const app = createApp(App);

registerPlugins(app);

app.use(createPinia());
app.use(i18n);

app.mount('#app');
