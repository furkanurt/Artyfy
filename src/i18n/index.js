import { createI18n } from 'vue-i18n';
import dayjs from 'dayjs';

import en from './en.json';
import tr from './tr.json';

const current = localStorage.getItem('portalLang') || 'tr';

const i18n = createI18n({
  locale: current,
  fallbackLocale: current,
  messages: {
    en,
    tr,
  },
});

dayjs.locale(current);

export default i18n;
