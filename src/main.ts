import { registerPlugins } from '@/plugins';
import { createPinia } from 'pinia';
import './styles/index.css';
import App from './App.vue';
import { createApp } from 'vue';
import i18n from '@/i18n';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
app.use(i18n);
app.use(createPinia());
