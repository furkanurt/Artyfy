<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-container v-if="posts.length > 0">
      <v-card
        v-for="(bookmark, index) in posts"
        :key="index"
        class="mx-auto"
        max-width="400"
        width="100%"
      >
        <v-carousel height="300">
          <v-carousel-item
            v-for="(img, i) in bookmark.images"
            :key="i"
            :src="img"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4"
          >{{ item.userFullName }} - @{{ item.userName }}</v-card-subtitle
        >

        <div class="card-content">
          <v-card-title class="card-title">{{
            bookmark.userName
          }}</v-card-title>
          <v-card-subtitle class="card-subtitle">{{
            bookmark.content
          }}</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            variant="text"
            color="#fa9392"
            @click="goPostDetail(bookmark.id)"
            >{{ $t('shop.review') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-else>Kaydedilmiş post bulunamadı.</v-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/store/post';
import { useSearchStore } from '@/store/search';
import router from '@/router';

const postStore = usePostStore();
const searchStore = useSearchStore();
const posts = ref([]);

onMounted(async () => {
  try {
    const response = await postStore.fetchSavedPost(
      localStorage.getItem('reduxState'),
    );
    posts.value = response;
  } catch (error) {
    console.error('Error fetching saved posts:', error);
  }
});

const goPostDetail = (id) => {
  searchStore.fetchMarketResultPost(id);

  setTimeout(() => {
    router.push(`/post-detail/${id}`);
  }, 600);
};
</script>

<style lang="scss" scoped>
.v-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  max-width: 100% !important;

  .v-card-text {
    height: 150px;
  }
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #fa9392;
  margin-bottom: 8px;
}
.title {
  color: #fa9392;
}

.card-subtitle {
  font-size: 16px;
  color: #666666;
  margin-bottom: 16px;
}

.v-app-bar {
  background-color: #fbf5e6 !important; /* Navigasyon çubuğu arka plan rengi */
  border-bottom: none !important;
}

@media screen and (max-width: 1264px) {
  .v-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
  }
}

@media screen and (max-width: 1040px) {
  .v-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }
}

@media screen and (max-width: 768px) {
  .v-container {
    display: grid;
    grid-template-columns: auto;
    margin-top: 30px;
    gap: 30px;
  }
}
</style>
