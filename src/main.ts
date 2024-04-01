import router from '@/router/index';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import App from './App.vue';
import i18n from '@/i18n';
import './styles/index.css';

const app = createApp(App);

registerPlugins(app);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.mount('#app');
