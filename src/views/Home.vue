<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" sm="3" style="max-width: 23%">
        <left-bar />
      </v-col>
      <v-col cols="12" sm="6">
        <HomeView />
      </v-col>
      <v-col cols="12" sm="3">
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
</script>

<style lang="scss" scoped>
.v-divider {
  height: 100vh !important;
  z-index: 10000;
  position: fixed !important;
}
</style>
