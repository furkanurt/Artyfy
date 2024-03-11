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

@media screen and (max-width: 1264px) {
  .v-layout {
    display: block;
    position: absolute !important;
    width: auto;
  }
}

@media screen and (max-width: 768px) {
  .v-layout {
    display: block;
    position: absolute !important;
    width: 100%;
  }
}
</style>
