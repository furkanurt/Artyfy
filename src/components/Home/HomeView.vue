<template>
  <div>
    <v-skeleton-loader
      v-if="!postIsLoading"
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
    <div class="absolute bottom-0 z-[10000]" v-if="getErrorMessage">
      <v-alert type="error" class="mb-10" transition="slide-y-transition">{{
        $t('errorMessage.postErrorMessage')
      }}</v-alert>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useSearchStore } from '@/store/search';
import { usePostStore } from '@/store/post';
import PostCard from '@/layouts/default/PostCard.vue';
import PostInput from '@/components/Home/PostInput.vue';

const postIsLoading = ref(false);
const getErrorMessage = ref(false);
const searchStore = useSearchStore();
const postStore = usePostStore();
const posts = ref([]);
searchStore.fetchPost('');

const fetchHomePost = async () => {
  const res = await postStore.fetchAllPost();
  if (res.error) {
    getErrorMessage.value = true;
    setTimeout(() => {
      getErrorMessage.value = false;
    }, 3000);
  } else {
    posts.value = res.data;
    postIsLoading.value = true;
  }
};

onMounted(() => {
  fetchHomePost();
});

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
