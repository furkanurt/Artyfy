<template>
  <div>
    <v-layout id="home-layout">
      <PostInput />
      <div>
        <PostCard />
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
import { useSearchStore } from '@/store/search';
import PostCard from '@/layouts/default/PostCard.vue';
import PostInput from '@/components/Home/PostInput.vue';
import { onMounted } from 'vue';

const searchStore = useSearchStore();

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
