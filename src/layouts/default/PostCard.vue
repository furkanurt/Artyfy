<template>
  <v-container>
    <v-row>
      <v-col v-if="posts">
        <v-skeleton-loader :loading="loading" type="list-item-two-line,image">
          <v-card
            v-for="(post, i) in posts"
            :key="i"
            class="mx-auto mb-5 w-full"
            variant="flat"
          >
            <v-card-item>
              <div class="flex justify-between">
                <div class="flex align-middle my-2">
                  <v-avatar :size="appStore.isMobile ? '32' : '48'">
                    <img :src="post.avatar" alt="avatar" />
                  </v-avatar>
                  <div class="mobile-user-info">
                    <div class="flex ml-5 align-middle div-1">
                      <div class="font-bold mr-2 div1-1">{{ post.name }}</div>
                      <div class="mr-2 div1-2">@{{ post.userName }}</div>
                      <div>• {{ post.time }}</div>
                    </div>
                    <div class="ml-5 div-2">{{ post.postDescription }}</div>
                  </div>
                </div>
                <div>
                  <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon
                        v-bind="props"
                        :style="
                          post.isOnSale
                            ? `background-color: #65B741`
                            : `background-color: #FFB534`
                        "
                        class="text-white w-4 h-4 mx-2 my-2"
                        rounded="xl"
                        :size="appStore.isMobile ? 'x-small' : 'small'"
                      >
                        <v-icon color="white"> mdi-shopping-outline </v-icon>
                      </v-btn>
                    </template>
                    <span v-if="post.isOnSale">{{
                      $t('postCard.onSale')
                    }}</span>
                    <span v-else>{{ $t('postCard.notOnSale') }}</span>
                  </v-tooltip>
                </div>
              </div>
            </v-card-item>
            <v-card-text>
              <div class="w-full mobile-carousel">
                <v-carousel hide-delimiter-background show-arrows="hover">
                  <v-carousel-item
                    v-for="(image, i) in post.postImage"
                    :key="i"
                    :src="image"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </div>
            </v-card-text>
            <v-card-actions>
              <div class="w-full flex items-center">
                <div class="flex justify-start">
                  <v-btn
                    prepend-icon="mdi-heart"
                    size="small"
                    :color="post.isLikeIt ? 'red' : 'black'"
                    @click="post.isLikeIt = !post.isLikeIt"
                  >
                    <span class="align-middle">{{ post.likeCount }}</span>
                  </v-btn>
                  <v-btn
                    prepend-icon="mdi-comment"
                    size="small"
                    class="ml-2"
                    @click="showComments = !showComments"
                  >
                    <span class="align-middle">{{ post.commentCount }}</span>
                  </v-btn>
                </div>
                <v-btn
                  prepend-icon="mdi-export-variant"
                  size="small"
                  @click="console.log('cliked share')"
                >
                  <span class="align-middle">{{ post.shareCount }}</span>
                </v-btn>
                <v-btn
                  class="ml-0"
                  :prepend-icon="
                    post.isBookmarked ? `mdi-bookmark` : `mdi-bookmark-outline`
                  "
                  size="small"
                  @click="post.isBookmarked = !post.isBookmarked"
                >
                </v-btn>
              </div>
            </v-card-actions>
            <div v-if="showComments">
              <v-list :items="post.comments" lines="three" item-props>
                <template v-slot:subtitle="{ subtitle }">
                  <div v-html="subtitle"></div>
                </template>
              </v-list>
            </div>
            <v-divider></v-divider>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <v-col v-else>
        <v-skeleton-loader :loading="loading" type="list-item-two-line,image">
          <v-card
            v-show="searchResultPost"
            v-for="(post, i) in searchResultPost"
            :key="i"
            class="mx-auto mb-5 w-full"
            variant="flat"
          >
            <v-card-item>
              <div class="flex justify-between">
                <div class="flex align-middle my-2">
                  <v-avatar :size="appStore.isMobile ? '32' : '48'">
                    <img :src="post.avatar" alt="avatar" />
                  </v-avatar>
                  <div class="mobile-user-info">
                    <div class="flex ml-5 align-middle div-1">
                      <div class="font-bold mr-2 div1-1">{{ post.name }}</div>
                      <div class="mr-2 div1-2">@{{ post.userName }}</div>
                      <div>• {{ post.time }}</div>
                    </div>
                    <div class="ml-5 div-2">{{ post.postDescription }}</div>
                  </div>
                </div>
                <div>
                  <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon
                        v-bind="props"
                        :style="
                          post.isOnSale
                            ? `background-color: #65B741`
                            : `background-color: #FFB534`
                        "
                        class="text-white w-4 h-4 mx-2 my-2"
                        rounded="xl"
                        :size="appStore.isMobile ? 'x-small' : 'small'"
                      >
                        <v-icon color="white"> mdi-shopping-outline </v-icon>
                      </v-btn>
                    </template>
                    <span v-if="post.isOnSale">{{
                      $t('postCard.onSale')
                    }}</span>
                    <span v-else>{{ $t('postCard.notOnSale') }}</span>
                  </v-tooltip>
                </div>
              </div>
            </v-card-item>
            <v-card-text>
              <div class="w-full mobile-carousel">
                <v-carousel hide-delimiter-background show-arrows="hover">
                  <v-carousel-item
                    v-for="(image, i) in post.postImage"
                    :key="i"
                    :src="image"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </div>
            </v-card-text>
            <v-card-actions>
              <div class="w-full flex">
                <div class="flex justify-start">
                  <v-btn
                    prepend-icon="mdi-heart"
                    size="small"
                    :color="post.isLikeIt ? `red` : `black`"
                    @click="post.isLikeIt = !post.isLikeIt"
                  >
                    <span class="align-middle">{{ post.likeCount }}</span>
                  </v-btn>
                  <v-btn
                    prepend-icon="mdi-comment"
                    size="small"
                    class="ml-2"
                    @click="showComments = !showComments"
                  >
                    <span class="align-middle">{{ post.commentCount }}</span>
                  </v-btn>
                </div>
                <v-btn
                  prepend-icon="mdi-export-variant"
                  size="small"
                  @click="console.log('cliked share')"
                >
                  <span class="align-middle">{{ post.shareCount }}</span>
                </v-btn>
                <v-btn
                  class="ml-0"
                  :prepend-icon="
                    post.isBookmarked ? `mdi-bookmark` : `mdi-bookmark-outline`
                  "
                  size="small"
                  @click="post.isBookmarked = !post.isBookmarked"
                >
                </v-btn>
              </div>
            </v-card-actions>
            <div v-if="showComments">
              <v-list :items="post.comments" lines="three" item-props>
                <template v-slot:subtitle="{ subtitle }">
                  <div v-html="subtitle"></div>
                </template>
              </v-list>
            </div>
            <v-divider></v-divider>
          </v-card>
          <v-card
            v-show="searchMarketResultPost"
            v-for="(post, i) in searchMarketResultPost"
            :key="i"
            class="mx-auto mb-5 w-full"
            variant="flat"
          >
            <v-card-item>
              <div class="flex justify-between">
                <div class="flex align-middle my-2">
                  <v-avatar :size="appStore.isMobile ? '32' : '48'">
                    <img :src="post.avatar" alt="avatar" />
                  </v-avatar>
                  <div class="mobile-user-info">
                    <div class="flex ml-5 align-middle div-1">
                      <div class="font-bold mr-2 div1-1">{{ post.name }}</div>
                      <div class="mr-2 div1-2">@{{ post.userName }}</div>
                      <div>• {{ post.time }}</div>
                    </div>
                    <div class="ml-5 div-2">{{ post.postDescription }}</div>
                  </div>
                </div>
                <div>
                  <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon
                        v-bind="props"
                        :style="
                          post.isOnSale
                            ? `background-color: #65B741`
                            : `background-color: #FFB534`
                        "
                        class="text-white w-4 h-4 mx-2 my-2"
                        rounded="xl"
                        :size="appStore.isMobile ? 'x-small' : 'small'"
                      >
                        <v-icon color="white"> mdi-shopping-outline </v-icon>
                      </v-btn>
                    </template>
                    <span v-if="post.isOnSale">{{
                      $t('postCard.onSale')
                    }}</span>
                    <span v-else>{{ $t('postCard.notOnSale') }}</span>
                  </v-tooltip>
                </div>
              </div>
            </v-card-item>
            <v-card-text>
              <div class="w-full mobile-carousel">
                <v-carousel hide-delimiter-background show-arrows="hover">
                  <v-carousel-item
                    v-for="(image, i) in post.postImage"
                    :key="i"
                    :src="image"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </div>
            </v-card-text>
            <v-card-actions>
              <div class="w-full flex">
                <div class="flex justify-start">
                  <v-btn
                    prepend-icon="mdi-heart"
                    size="small"
                    :color="post.isLikeIt ? `red` : `black`"
                    @click="post.isLikeIt = !post.isLikeIt"
                  >
                    <span class="align-middle">{{ post.likeCount }}</span>
                  </v-btn>
                  <v-btn
                    prepend-icon="mdi-comment"
                    size="small"
                    class="ml-2"
                    @click="showComments = !showComments"
                  >
                    <span class="align-middle">{{ post.commentCount }}</span>
                  </v-btn>
                </div>
                <v-btn
                  prepend-icon="mdi-export-variant"
                  size="small"
                  @click="console.log('cliked share')"
                >
                  <span class="align-middle">{{ post.shareCount }}</span>
                </v-btn>
                <v-btn
                  class="ml-0"
                  :prepend-icon="
                    post.isBookmarked ? `mdi-bookmark` : `mdi-bookmark-outline`
                  "
                  size="small"
                  @click="post.isBookmarked = !post.isBookmarked"
                >
                </v-btn>
              </div>
            </v-card-actions>
            <div v-if="showComments">
              <v-list :items="post.comments" lines="three" item-props>
                <template v-slot:subtitle="{ subtitle }">
                  <div v-html="subtitle"></div>
                </template>
              </v-list>
            </div>
            <v-divider></v-divider>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useAppStore } from '@/store/app';

const userEffects = ref({});
const props = defineProps({
  posts: Array,
  searchResultPost: Array,
  showComments: Boolean,
});

onMounted(() => {
  userEffects.value = { ...props };
});

const appStore = useAppStore();
const showComments = ref(props.showComments);

const loading = computed(() => {
  if (props.posts || props.searchResultPost) return false;
  return true;
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 425px) {
  .mobile-user-info {
    font-size: 12px;
    .div-1 {
      margin-left: 10px !important;
      .div1-1 {
        margin-right: 3px !important;
      }
      .div1-2 {
        margin-right: 3px !important;
      }
    }
    .div-2 {
      margin-left: 10px !important;
    }
  }

  .mobile-carousel {
    .v-carousel {
      .v-carousel-item {
        .v-img {
          object-fit: contain !important;
        }
      }
    }
  }
}
</style>
