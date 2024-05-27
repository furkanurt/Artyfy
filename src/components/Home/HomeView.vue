<template>
  <div>
    <v-layout id="home-layout">
      <PostInput />
      <div>
        <PostCard />
        <v-alert
          type="warning"
          class="mb-10 px-5"
          transition="slide-y-transition"
          v-if="postStore.postsForUser"
        >
          Daha fazlası için premium almalısınız.
        </v-alert>
      </div>
    </v-layout>
    <div class="absolute bottom-0 z-[10000]" v-if="getErrorMessage">
      <v-alert type="error" class="mb-10" transition="slide-y-transition">{{
        $t('errorMessage.postErrorMessage')
      }}</v-alert>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useSearchStore } from '@/store/search';
import { usePostStore } from '@/store/post';
import PostCard from '@/layouts/default/PostCard.vue';
import PostInput from '@/components/Home/PostInput.vue';

const searchStore = useSearchStore();
const postStore = usePostStore();

onMounted(() => {
  searchStore.fetchPost('');
});
</script>
<style lang="scss" scoped>
.v-layout {
  display: block;
  position: absolute !important;
  width: 50%;
}

@media screen and (min-width: 768px) and (max-width: 1264px) {
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
