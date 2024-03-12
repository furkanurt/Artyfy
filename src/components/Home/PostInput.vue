<template>
  <div :class="appStore.isMobile ? 'pt-4' : ''">
    <div
      class="flex justify-between items-center py-5 pl-7"
      v-if="!appStore.isMobile"
    >
      <!-- <p class="font-extrabold text-xl">Home</p> -->
      <div v-if="appStore.breakpoint === 'md'" class="w-full pr-3">
        <v-text-field
          label="Search"
          density="compact"
          variant="solo"
          hide-details="auto"
          append-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
    </div>
    <v-divider v-if="!appStore.isMobile"></v-divider>
    <v-textarea
      color="#FFF"
      label="What's Happening?"
      rows="3"
      class="px-7"
      variant="plain"
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      hide-details
    >
    </v-textarea>
    <div id="file-input" class="px-7 flex justify-between">
      <v-file-input
        class="pr-7"
        accept="image/*"
        density="compact"
        variant="underlined"
        multiple
      ></v-file-input>
      <v-btn
        rounded="xl"
        class="w-10 text-white"
        style="background-color: #fa9392"
        >Post</v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore();
</script>
