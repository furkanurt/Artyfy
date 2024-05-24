<template>
  <div
    class="flex justify-center h-screen items-center"
    v-if="posts.length === 0"
  >
    <img src="@/assets/images/tube-spinner.svg" class="w-20 h-20" />
  </div>
  <div v-else>
    <div
      class="w-full p-6 items-center flex justify-between"
      v-if="!appStore.isMobile"
    >
      <v-text-field
        v-model="searchValue"
        :label="$t('search')"
        density="compact"
        variant="solo"
        hide-details="auto"
        append-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-btn
        class="mx-10"
        color="#fbf5e6"
        icon="mdi-basket"
        @click="router.push('/shop/basket')"
      >
      </v-btn>
    </div>
    <v-container v-if="mobileFilteredPost.length === 0">
      <v-card
        v-for="(item, i) in posts"
        :key="i"
        class="mx-auto"
        max-width="300"
      >
        <v-carousel height="300">
          <v-carousel-item
            v-for="(img, i) in item.images"
            :key="i"
            :src="img"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4">{{ item.userFullName }} </v-card-subtitle>
        <v-card-subtitle>@{{ item.userName }} </v-card-subtitle>

        <v-card-text>
          <div>{{ item.content.substring(0, 130) }}...</div>
          <div>
            <span class="font-bold text-xl">{{ item.price }} ₺</span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" @click="goPostDetail(item.postId)">{{
            $t('shop.review')
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card
        v-for="(item, i) in mobileFilteredPost"
        :key="i"
        class="mx-auto"
        max-width="400"
      >
        <v-carousel height="300">
          <v-carousel-item
            v-for="(img, i) in item.images"
            :key="i"
            :src="img"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4">{{ item.userFullName }} </v-card-subtitle>
        <v-card-subtitle>@{{ item.userName }} </v-card-subtitle>

        <v-card-text>
          <div>{{ item.content.substring(0, 130) }}...</div>
          <div>
            <span class="font-bold text-xl">{{ item.price }} ₺</span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" @click="goPostDetail(item.postId)">{{
            $t('shop.review')
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue';
import { usePostStore } from '@/store/post';
import { useAppStore } from '@/store/app';
import { useSearchStore } from '@/store/search';
import router from '@/router';

const searchValue = ref('');
const postStore = usePostStore();
const searchStore = useSearchStore();
const appStore = useAppStore();
const posts = ref([]);

onBeforeMount(async () => {
  const res = await postStore.fetchSellablePost(
    localStorage.getItem('reduxState'),
  );
  posts.value = res;
});

const mobileFilteredPost = computed(() => {
  return searchStore.searchMarketPost;
});

const goPostDetail = (id) => {
  setTimeout(() => {
    router.push(`/post-detail/${id}`);
  }, 600);
};

watch(searchValue, async () => {
  if (searchValue.value) {
    posts.value.some((item) => {
      if (item.content === searchValue.value) {
        posts.value = [];
        posts.value = [...posts.value, item];
      }
    });
  } else {
    const res = await postStore.fetchSellablePost(
      localStorage.getItem('reduxState'),
    );
    posts.value = res;
  }
});
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

@media screen and (max-width: 1700px) {
  .v-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
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
