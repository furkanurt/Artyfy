<template>
  <v-container>
    <v-row>
      <v-col>
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
                  <v-avatar size="48">
                    <img :src="post.avatar" alt="avatar" />
                  </v-avatar>
                  <div>
                    <div class="flex ml-5 align-middle">
                      <div class="mr-2 font-bold">{{ post.name }}</div>
                      <div class="mr-2">@{{ post.userName }}</div>
                      <div>• {{ post.time }}</div>
                    </div>
                    <div class="ml-5">{{ post.postDescription }}</div>
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
              <div class="w-full">
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
                  <div>
                    <v-btn
                      icon="mdi-heart"
                      size="x-small"
                      :color="likeCount ? `red` : `black`"
                      @click="likeCount = !likeCount"
                    ></v-btn>
                    <span class="align-middle">{{ post.likeCount }}</span>
                  </div>
                  <div class="ml-5">
                    <v-btn icon="mdi-comment" size="x-small"></v-btn>
                    <span class="align-middle">{{ post.commentCount }}</span>
                  </div>
                </div>
                <div>
                  <v-btn icon="mdi-export-variant" size="x-small"></v-btn>
                  <span class="align-middle">{{ post.shareCount }}</span>
                </div>
              </div>
            </v-card-actions>
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

const posts = DummyService.fetchPost();
const loading = computed(() => {
  if (posts) return false;
  return true;
});

const likeCount = ref(false);
</script>
