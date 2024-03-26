<template>
  <TrendsNavbar />
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
    
      <v-col cols="12" sm="9" class="mobile-right">
        <v-divider vertical></v-divider>
        <Trendsview style="padding: 2px" />
      </v-col>
    </v-row>
  </v-app>


</template>
<script setup>
import LeftBar from '@/layouts/default/LeftBar.vue';
import Trendsview from '@/components/Trends/Trendsview.vue';
import TrendsNavbar from '@/components/Trends/TrendsNavbar.vue';
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';
;

const appStore = useAppStore();
console.log(appStore.breakpoint);
</script>