<template>
  <div v-if="appStore.isMobile">
    <AppBar />
    <PostCard
      :search-result-post="fetchResultPost"
      :search-market-result-post="fetchMarketResultPost"
      :show-comments="false"
    />
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
            :search-result-post="fetchResultPost"
            :search-market-result-post="fetchMarketResultPost"
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
            :search-result-post="fetchResultPost"
            :search-market-result-post="fetchMarketResultPost"
            :show-comments="false"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>
<script setup>
import { computed } from 'vue';
import LeftBar from '@/layouts/default/LeftBar.vue';
import AppBar from '@/layouts/default/AppBar.vue';
import PostCard from '@/layouts/default/PostCard.vue';
import { useAppStore } from '@/store/app';
import { useSearchStore } from '@/store/search';

const appStore = useAppStore();
const searchStore = useSearchStore();

const fetchResultPost = computed(() => {
  return searchStore.fetchResPost;
});

const fetchMarketResultPost = computed(() => {
  return searchStore.fetchMarketResPost;
});
</script>
