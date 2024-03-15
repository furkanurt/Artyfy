<template>
  <div>
    <div class="w-full p-6 items-center" v-if="!appStore.isMobile">
      <v-text-field
        v-model="searchValue"
        label="Search"
        density="compact"
        variant="solo"
        hide-details="auto"
        append-inner-icon="mdi-magnify"
        @input="filteredPosts"
      ></v-text-field>
    </div>
    <v-container v-if="!mobileFilteredPost">
      <v-card
        v-for="(item, i) in posts"
        :key="i"
        class="mx-auto"
        max-width="400"
      >
        <v-carousel height="300">
          <v-carousel-item
            v-for="(img, i) in item.productImage"
            :key="i"
            :src="img"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4">{{ item.userName }}</v-card-subtitle>

        <v-card-text>
          <div>{{ item.productDescription.substring(0, 130) }}...</div>
          <div class="mt-4">
            <span class="font-bold text-xl">{{ item.productPrice }} ₺</span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            @click="router.push(`/shop/product-detail/${item.id}`)"
            >{{ $t('shop.review') }}</v-btn
          >
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
            v-for="(img, i) in item.productImage"
            :key="i"
            :src="img"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4">{{ item.userName }}</v-card-subtitle>

        <v-card-text>
          <div>{{ item.productDescription.substring(0, 130) }}...</div>
          <div class="mt-4">
            <span class="font-bold text-xl">{{ item.productPrice }} ₺</span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            @click="router.push(`/post-detail/${item.id}`)"
            >{{ $t('shop.review') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script setup>
import DummyService from '@/services/dummy.service';
import { useSearchStore } from '@/store/search';
import { useAppStore } from '@/store/app';
import router from '@/router';
import { computed, ref } from 'vue';

const searchValue = ref('');
const searchStore = useSearchStore();
const appStore = useAppStore();
const posts = DummyService.fetchShopProduct();

const filteredPosts = computed(() => {
  return searchStore.fetchMarketPost(searchValue.value);
});

const mobileFilteredPost = computed(() => {
  return searchStore.searchMarketPost;
});
</script>
<style lang="scss" scoped>
.v-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  max-width: 100% !important;
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
