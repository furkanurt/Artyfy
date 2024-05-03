import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { tr, en } from 'vuetify/locale';

const defaultLocale =
  (localStorage.getItem('portalLang') || 'tr') === 'tr' ? 'tr' : 'en';

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: defaultLocale,
    breakpoint: 'md',
    isMobile: false,
    mobileMenuCollapsed: false,
  }),
  actions: {
    setLocale(locale) {
      const html = document.getElementsByTagName('html');

      if (locale === 'tr') {
        this.locale = 'tr';
        dayjs.locale(tr);
        html[0]?.setAttribute('lang', 'tr');
      } else {
        this.locale = 'en';
        dayjs.locale(en);
        html[0]?.setAttribute('lang', 'en');
      }
    },
    setBreakpoints(type) {
      this.breakpoint = type;
    },
    setIsMobile(type) {
      this.isMobile = type;
    },
    setMenuCollapsed(type) {
      this.mobileMenuCollapsed = type;
    },
  },
});
