<template>
  <v-skeleton-loader
    v-if="!posts"
    :elevation="6"
    type="card"
  ></v-skeleton-loader>
  <v-layout v-else id="home-layout">
    <PostInput />
    <div>
      <PostCard
        :posts="posts"
        :search-result-post="filteredPosts"
        :show-comments="false"
      />
    </div>
  </v-layout>
</template>
<script setup>
import { computed } from 'vue';
import { useSearchStore } from '@/store/search';
import PostCard from '@/layouts/default/PostCard.vue';
import PostInput from '@/components/Home/PostInput.vue';

const searchStore = useSearchStore();
searchStore.fetchPost('');
const posts = searchStore.searchPost;

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
