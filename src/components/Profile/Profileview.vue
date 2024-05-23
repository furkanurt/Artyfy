<template>
  <v-layout id="home-layout">
    <ProfilePhoto />
    <div>
      <PostCard />
    </div>
  </v-layout>
</template>
<script setup>
import PostCard from '@/layouts/default/PostCard.vue';
import ProfilePhoto from '@/components/Profile/ProfilePhoto.vue';
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
    width: 66%;
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
