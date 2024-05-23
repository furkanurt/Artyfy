<template>
  <v-layout id="home-layout">
    <Profilephoto />
    <div>
      <PostCard/>
    </div>
  </v-layout>
</template>
<script setup>
import { computed } from 'vue';
import DummyService from '@/services/dummy.service';
import { useSearchStore } from '@/store/search';
import PostCard from '@/layouts/default/PostCard.vue';
import Profilephoto from '@/components/Profile/Profilephoto.vue';

const searchStore = useSearchStore();
const posts = DummyService.fetchPost();

const filteredPosts = computed(() => {
  return searchStore.searchPost;
});
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
