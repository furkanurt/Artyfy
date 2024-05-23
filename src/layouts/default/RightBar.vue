<template>
  <v-layout class="h-screen">
    <v-text-field
      v-model="searchValue"
      :label="$t('search')"
      variant="solo-filled"
      prepend-inner-icon="mdi-magnify"
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

        <v-card-item
          v-for="(item, index) in trendSuggestion.slice(0, 3)"
          :key="index"
        >
          <div class="card-item">
            <div style="min-width: 130px; margin-right: 10px">
              <v-card-subtitle>{{
                item.userFullName ? item.userFullName : 'Gülsüm Vural'
              }}</v-card-subtitle>
              <v-card-subtitle
                >@{{
                  item.userName ? item.userName : 'gvural'
                }}</v-card-subtitle
              >
              <v-card-text style="margin: 6px 0px">
                {{ item.content.substring(0, 40) }}...
              </v-card-text>
            </div>
            <div>
              <v-img
                :width="100"
                max-height="100"
                cover
                :src="
                  item.imageUrl ? item.imageUrl[0] : 'https://picsum.photos/200'
                "
              ></v-img>
            </div>
          </div>
          <v-divider horizontal style="margin-top: 10px"></v-divider>
        </v-card-item>

        <v-card-item>
          <v-btn
            variant="text"
            style="color: #fa9392; padding: 0px"
            @click="router.push('/trends')"
          >
            {{ $t('showMore') }}
          </v-btn>
        </v-card-item>
      </v-card>
    </div>

    <div v-else>
      <v-card
        color="#EDEDED"
        theme="dark"
        v-for="(item, i) in searchPostRes"
        :key="i"
        @click="goPostDetail(item.postId)"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="search-card-info">
            <v-card-title class="text-overline">{{ item.name }}</v-card-title>

            <v-card-subtitle
              >{{ item.content.substring(0, 30) }}...</v-card-subtitle
            >

            <v-card-actions class="absolute bottom-0">
              <v-btn
                class="mt-3"
                color="orange"
                @click="goPostDetail(item.postId)"
              >
                {{ $t('shop.review') }}
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" rounded="0" size="120">
            <v-img :src="item.images[0]" cover></v-img>
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
import { ref, watch, onMounted } from 'vue';
import router from '@/router';
import { usePostStore } from '@/store/post';
import dayjs from 'dayjs';

const searchValue = ref('');
const postStore = usePostStore();
const searchPostRes = ref([]);
const trendSuggestion = ref([]);
const year = dayjs().year();

const goPostDetail = (id) => {
  setTimeout(() => {
    router.push(`/post-detail/${id}`);
  }, 600);
};

const fetchTrendsPosts = async () => {
  try {
    const res = await postStore.fetchTrendsPost();
    trendSuggestion.value = res;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchTrendsPosts();
});

watch(searchValue, () => {
  searchPostRes.value = [];
  postStore.postsForUser.some((item) => {
    if (item.userName === searchValue.value) {
      searchPostRes.value = [item, ...searchPostRes.value];
    }
  });
});
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
    bottom: 0px;
    top: 10px;
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
