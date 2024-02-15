<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" sm="3" style="max-width: 23%">
        <left-bar />
      </v-col>
      <v-col cols="12" sm="6">
        <default-view />
      </v-col>
      <v-col cols="12" sm="3">
        <v-divider vertical></v-divider>
        <right-bar style="padding: 20px" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import LeftBar from './LeftBar.vue';
import RightBar from './RightBar.vue';
import DefaultView from './View.vue';
</script>

<style lang="scss" scoped>
.v-divider {
  height: 100vh !important;
  z-index: 10000;
  position: absolute;
}
</style>
