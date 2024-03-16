<template>
  <v-layout class="h-screen">
    <v-text-field
      v-model="searchValue"
      :label="$t('search')"
      variant="solo-filled"
      prepend-inner-icon="mdi-magnify"
      @input="filteredPosts"
      hide-details
      solo
      rounded
      max-height="30"
    ></v-text-field>
    <div v-if="searchValue === ''">
      <v-card class="mx-auto">
        <v-card-item>
          <div>
            <div class="text-overline mb-1">{{ $t('whatsTrend') }}</div>
            <v-divider horizontal></v-divider>
          </div>
        </v-card-item>

        <v-card-item v-for="(item, index) in trendSuggestion" :key="index">
          <div class="card-item">
            <div style="min-width: 130px; margin-right: 10px">
              <v-card-subtitle>@{{ item.writer }} • Last Night</v-card-subtitle>
              <v-card-text style="margin: 6px 0px">
                {{ item.text }}
              </v-card-text>
              <v-card-subtitle
                >{{ $t('trendingWith') }}
                <span style="color: #fa9392"
                  >#{{ item.trending }}</span
                ></v-card-subtitle
              >
            </div>
            <div>
              <v-img
                :width="100"
                max-height="100"
                cover
                :src="item.photo"
              ></v-img>
            </div>
          </div>
          <v-divider horizontal style="margin-top: 10px"></v-divider>
        </v-card-item>

        <v-card-item>
          <v-btn variant="text" style="color: #fa9392; padding: 0px">
            {{ $t('showMore') }}
          </v-btn>
        </v-card-item>
      </v-card>

      <v-card>
        <v-card-item>
          <div>
            <div class="text-overline mb-1">{{ $t('followSuggestion') }}</div>
            <v-divider horizontal></v-divider>
          </div>
        </v-card-item>

        <v-list-item
          v-for="(item, index) in userSuggestions"
          :key="index"
          :title="item.title"
          :subtitle="`@${item.subtitle}`"
          style="width: 100%"
        >
          <template v-slot:prepend>
            <v-avatar>
              <v-img :src="item.prependAvatar" alt="John"></v-img>
            </v-avatar>
          </template>

          <template v-slot:append>
            <v-btn
              color="grey-lighten-1"
              variant="text"
              style="
                border: 1px solid #fa9392;
                border-radius: 100px;
                color: #fa9392 !important;
              "
              >{{ $t('follow') }}</v-btn
            >
          </template>
        </v-list-item>

        <v-card-item>
          <v-btn variant="text" style="color: #fa9392; padding: 0px">
            {{ $t('showMore') }}
          </v-btn>
        </v-card-item>
      </v-card>
    </div>

    <div v-else>
      <v-card
        color="#EDEDED"
        theme="dark"
        v-for="(item, i) in searchStore.searchPostRightPanel"
        :key="i"
        @click="goPostDetail(item.id)"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="search-card-info">
            <v-card-title class="text-overline">{{ item.name }}</v-card-title>

            <v-card-subtitle
              >{{ item.postDescription.substring(0, 30) }}...</v-card-subtitle
            >

            <v-card-actions>
              <v-btn class="mt-3" color="orange" @click="goPostDetail(item.id)">
                {{ $t('shop.review') }}
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" rounded="0" size="120">
            <v-img :src="item.postImage[0]" cover></v-img>
          </v-avatar>
        </div>
      </v-card>
    </div>

    <v-footer
      >Terms of Service Privacy Policy Cookie Policy Ads info More ©{{
        year
      }}
      Artfy, Inc.</v-footer
    >
  </v-layout>
</template>

<script setup>
import router from '@/router';
import DummyService from '@/services/dummy.service';
import { useSearchStore } from '@/store/search';
import dayjs from 'dayjs';
import { ref, computed } from 'vue';

const searchValue = ref('');
const searchStore = useSearchStore();
const trendSuggestion = DummyService.fetchTrendSuggestions();
const userSuggestions = DummyService.fetchUserSuggestions();
const year = dayjs().year();

const filteredPosts = computed(() => {
  return searchStore.fetchPostForRightPanel(searchValue.value);
});

const goPostDetail = (id) => {
  searchStore.fetchResultPost(id);

  setTimeout(() => {
    router.push(`/post-detail/${id}`);
  }, 600);
};
</script>

<style lang="scss" scoped>
.v-layout {
  display: inline-block !important;
  overflow: visible !important;
  width: 100%;

  .v-input {
    padding: 0px 4px;
  }
  .v-card {
    border-radius: 20px;
    background-color: #ededed;
    margin: 10px 0px;
    .v-card-item {
      .card-item {
        display: flex;
        justify-content: space-between;
      }
    }
    .v-card-text {
      padding: 0px;
    }
  }

  .v-footer {
    position: fixed;
    bottom: 0px;
  }

  .search-card-info {
    min-width: 100px !important;
  }
}

@media screen and (max-width: 768px) {
  .v-layout {
    display: none;
  }
}
</style>
