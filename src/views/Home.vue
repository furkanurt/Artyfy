<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="appStore.isMobile">
    <AppBar />
    <HomeView />
  </div>
  <v-app v-if="!appStore.isMobile">
    <v-row no-gutters v-if="appStore.breakpoint === 'md'">
      <v-col cols="4">
        <v-sheet>
          <left-bar />
        </v-sheet>
      </v-col>

      <v-col cols="8">
        <v-sheet>
          <HomeView />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters v-else>
      <v-col cols="12" sm="3" style="max-width: 23%" class="mobile-left">
        <left-bar />
      </v-col>
      <v-col cols="12" sm="6">
        <HomeView />
      </v-col>
      <v-col cols="12" sm="3" class="mobile-right">
        <v-divider vertical></v-divider>
        <right-bar style="padding: 20px" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import LeftBar from '@/layouts/default/LeftBar.vue';
import RightBar from '@/layouts/default/RightBar.vue';
import HomeView from '@/components/Home/HomeView.vue';
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.v-divider {
  height: 100vh !important;
  z-index: 10000;
  position: fixed !important;
}

@media screen and (max-width: 768px) {
  .v-row {
    .mobile-right {
      display: none;
    }
    .mobile-left {
      display: none;
    }
  }
}
</style>
