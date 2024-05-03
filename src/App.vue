<template>
  <v-locale-provider>
    <router-view />
  </v-locale-provider>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import debounce from 'lodash.debounce';
import { BREAKPOINTS } from './constants/breakpoints';
import { useAppStore } from './store/app';

const { setBreakpoints, setIsMobile } = useAppStore();

onMounted(() => {
  window.addEventListener('resize', debouncesScreenSize);
  setScreenSize();
});

onUnmounted(() => {
  window.addEventListener('resize', debouncesScreenSize);
});

const debouncesScreenSize = debounce(function () {
  setScreenSize();
}, 200);

const setScreenSize = () => {
  const { XS, SM, MD, LG, XL } = BREAKPOINTS;
  let breakpoint = XS;
  let isMobile = false;

  if (innerWidth < 425) {
    breakpoint = XS;
    isMobile = true;
  } else if (innerWidth <= 768) {
    breakpoint = SM;
    isMobile = true;
  } else if (innerWidth < 1265) {
    breakpoint = MD;
  } else if (innerWidth < 1904) {
    breakpoint = LG;
  } else {
    breakpoint = XL;
  }

  setIsMobile(isMobile);
  setBreakpoints(breakpoint);
};
</script>
