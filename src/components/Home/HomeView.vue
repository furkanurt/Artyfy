<template>
  <v-layout id="home-layout">
    <PostInput />
    <div>
      <PostCard />
    </div>
  </v-layout>
</template>
<script setup>
import PostCard from './PostCard.vue';
import PostInput from './PostInput.vue';
</script>
<style lang="scss" scoped>
.v-layout {
  display: block;
  position: absolute !important;
  width: 50%;
}
</style>
