<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" sm="3">
        <left-bar />
      </v-col>
      <v-col cols="12" sm="6">
        <default-view />
      </v-col>
      <v-divider vertical style="z-index: 10000"></v-divider>
      <v-col cols="12" sm="3" style="padding: 20px 20px">
        <right-bar />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import LeftBar from './LeftBar.vue';
import RightBar from './RightBar.vue';
import DefaultView from './View.vue';
</script>
