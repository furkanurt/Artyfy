import { registerPlugins } from '@/plugins';
import { createPinia } from 'pinia';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import i18n from '@/i18n';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
app.use(i18n);
app.user(createPinia());
