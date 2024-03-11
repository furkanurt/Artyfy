import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    breakpoint: 'md',
    isMobile: false,
    mobileMenuCollapsed: false,
  }),
  actions: {
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
