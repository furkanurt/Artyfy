<template>
  <div v-if="appStore.isMobile">
    <AppBar />
    <PostCard :search-result-post="resultPostData" :show-comments="false" />
  </div>
  <v-app v-if="!appStore.isMobile">
    <v-row no-gutters v-if="appStore.breakpoint === 'md'">
      <v-col cols="4">
        <v-sheet>
          <LeftBar />
        </v-sheet>
      </v-col>

      <v-col cols="8">
        <v-sheet>
          <PostCard
            :search-result-post="resultPostData"
            :show-comments="false"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters v-else>
      <v-col cols="3" style="max-width: 25%">
        <v-sheet>
          <LeftBar />
        </v-sheet>
      </v-col>

      <v-col cols="9">
        <v-sheet>
          <PostCard
            :search-result-post="resultPostData"
            :show-comments="false"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import LeftBar from '@/layouts/default/LeftBar.vue';
import AppBar from '@/layouts/default/AppBar.vue';
import PostCard from '@/layouts/default/PostCard.vue';
import { useAppStore } from '@/store/app';
import { useSearchStore } from '@/store/search';
import { useRoute } from 'vue-router';

const appStore = useAppStore();
const searchStore = useSearchStore();
const route = useRoute();
const resultPostData = ref([]);

onMounted(() => {
  if (fetchMarketResultPost.value) {
    resultPostData.value = fetchMarketResultPost.value;
  } else {
    resultPostData.value = fetchResultPost.value;
  }
});

const fetchResultPost = computed(() => {
  const res = searchStore.fetchMarketResultPost(route.params.id);
  return res;
});

const fetchMarketResultPost = computed(() => {
  const res = searchStore.fetchResultPost(route.params.id);
  return res;
});
</script>
