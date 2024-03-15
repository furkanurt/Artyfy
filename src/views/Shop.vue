<template>
  <div v-if="appStore.isMobile">
    <AppBar />
    <ShopPage />
  </div>
  <v-app v-if="!appStore.isMobile">
    <v-row no-gutters v-if="appStore.breakpoint === 'md'">
      <v-col cols="4">
        <v-sheet>
          <LeftBar />
        </v-sheet>
      </v-col>

      <v-col cols="8">
        <v-sheet>
          <ShopPage />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters v-else>
      <v-col cols="3" style="max-width: 25%">
        <v-sheet>
          <LeftBar />
        </v-sheet>
      </v-col>

      <v-col cols="9">
        <v-sheet>
          <ShopPage />
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>
<script setup>
import LeftBar from '@/layouts/default/LeftBar.vue';
import ShopPage from '@/components/Shop/index.vue';
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
</script>
