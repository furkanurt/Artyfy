<template>
  <v-container>
    <v-row>
      <v-col v-if="filteredPosts.length === 0">
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
                            ? `background-color: #FFB534`
                            : `background-color: #65B741`
                        "
                        class="text-white w-4 h-4 mx-2 my-2"
                        rounded="xl"
                        :size="appStore.isMobile ? 'x-small' : 'small'"
                      >
                        <v-icon color="white"> mdi-shopping-outline </v-icon>
                      </v-btn>
                    </template>
                    <span v-if="post.isOnSale">Not on Sale</span>
                    <span v-else>On Sale</span>
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
              <div class="w-full flex justify-between">
                <div class="flex justify-start">
                  <v-btn
                    prepend-icon="mdi-heart"
                    size="small"
                    :color="likeCount ? `red` : `black`"
                    @click="likeCount = !likeCount"
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
            v-for="(post, i) in searchStore.searchPost"
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
                            ? `background-color: #FFB534`
                            : `background-color: #65B741`
                        "
                        class="text-white w-4 h-4 mx-2 my-2"
                        rounded="xl"
                        :size="appStore.isMobile ? 'x-small' : 'small'"
                      >
                        <v-icon color="white"> mdi-shopping-outline </v-icon>
                      </v-btn>
                    </template>
                    <span v-if="post.isOnSale">Not on Sale</span>
                    <span v-else>On Sale</span>
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
              <div class="w-full flex justify-between">
                <div class="flex justify-start">
                  <v-btn
                    prepend-icon="mdi-heart"
                    size="small"
                    :color="likeCount ? `red` : `black`"
                    @click="likeCount = !likeCount"
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
import DummyService from '@/services/dummy.service';
import { computed, ref } from 'vue';
import { useAppStore } from '@/store/app';
import { useSearchStore } from '@/store/search';

const posts = DummyService.fetchPost();
const appStore = useAppStore();
const searchStore = useSearchStore();
const loading = computed(() => {
  if (posts) return false;
  return true;
});
const likeCount = ref(false);
const showComments = ref('false');

const filteredPosts = computed(() => {
  return searchStore.searchPost;
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
