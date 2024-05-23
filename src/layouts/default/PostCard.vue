<template>
  <v-container>
    <v-skeleton-loader
      v-if="!postIsLoading"
      :elevation="6"
      type="card"
    ></v-skeleton-loader>
    <div class="z-[10000]" v-if="getErrorMessage">
      <v-alert type="error" class="mb-10" transition="slide-y-transition">{{
        $t('errorMessage.postErrorMessage')
      }}</v-alert>
    </div>
    <v-row>
      <v-col v-if="posts">
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
                  <img
                    :src="
                      post.avatar ? post.avatar : `https://i.pravatar.cc/100`
                    "
                    alt="avatar"
                  />
                </v-avatar>
                <div class="mobile-user-info">
                  <div class="flex ml-5 align-middle div-1">
                    <div class="font-bold mr-2 div1-1">
                      {{ post.userFullName ? post.userFullName : 'deneme' }}
                    </div>
                    <div class="mr-2 div1-2">
                      @{{ post.userName ? post.userName : 'deneme' }}
                    </div>
                  </div>
                  <div class="ml-5 div-2">{{ post.content }}</div>
                </div>
              </div>
              <div>
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      v-bind="props"
                      :style="
                        post.isSellable
                          ? `background-color: #65B741`
                          : `background-color: #FFB534`
                      "
                      class="text-white w-4 h-4 mx-2 my-2"
                      rounded="xl"
                      :size="appStore.isMobile ? 'x-small' : 'small'"
                      :disabled="post.isSellable === false"
                      @click="addBasket(post)"
                    >
                      <v-icon color="white"> mdi-shopping-outline </v-icon>
                    </v-btn>
                  </template>
                  <span v-if="post.isSellable">{{
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
                  v-for="(image, i) in post.images"
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
                  @click="(post.isLikeIt = !post.isLike), postLike(post.postId)"
                >
                  <span class="align-middle">{{ post.likeCount }}</span>
                </v-btn>
                <v-btn
                  prepend-icon="mdi-comment"
                  size="small"
                  class="ml-2"
                  @click="post.showComments = !post.showComments"
                >
                  <span class="align-middle">{{ post.comments.length }}</span>
                </v-btn>
              </div>
              <v-btn
                class="ml-0"
                :prepend-icon="
                  post.isBookmarked ? `mdi-bookmark` : `mdi-bookmark-outline`
                "
                size="small"
                @click="
                  (post.isBookmarked = !post.isBookmarked),
                    postBookmarked(post.postId)
                "
              >
              </v-btn>
            </div>
          </v-card-actions>
          <div v-if="post.showComments">
            <v-list :items="post.comments" lines="three" item-props>
              <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>
            <div class="comment-bar">
              <v-text-field
                class="comment-textarea"
                placeholder="Yorum yaz..."
                v-model="comment[0].content"
                variant="solo"
                hide-details="auto"
              ></v-text-field>
              <v-btn color="#fa9392" @click="sendComment(post.postId)"
                >Yorumu Gönder</v-btn
              >
            </div>
          </div>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useAppStore } from '@/store/app';
import { usePostStore } from '@/store/post';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useAddressStore } from '@/store/address';

const addressStore = useAddressStore();
const appStore = useAppStore();
const userStore = useUserStore();
const postStore = usePostStore();
const getErrorMessage = ref(false);
const postIsLoading = ref(false);
const posts = ref([]);
const route = useRoute();

const comment = ref([
  {
    userAppId: localStorage.getItem('reduxState'),
    content: '',
    postId: 0,
  },
]);

onBeforeMount(async () => {
  posts.value = [];
  console.log(route);
  if (route.name === 'home' || route.name === 'profile') {
    const res = await postStore.fetchAllPost(userStore.userDetail?.id);
    if (res.error) {
      getErrorMessage.value = true;
      setTimeout(() => {
        getErrorMessage.value = false;
      }, 3000);
    } else {
      posts.value = res;
      postIsLoading.value = true;
    }
  }
  if (route.params.id) {
    const res = await postStore.fetchPostDetail(route.params.id);
    if (res.error) {
      getErrorMessage.value = true;
      setTimeout(() => {
        getErrorMessage.value = false;
      }, 3000);
    } else {
      posts.value = [...posts.value, postStore.postDetail];
      postIsLoading.value = true;
    }
  }
});

const postLike = async (postId) => {
  try {
    const userId = localStorage.getItem('reduxState');
    const response = await postStore.likePost(postId, userId);
    console.log(response);
    const likedPostIndex = posts.value.findIndex(
      (post) => post.postId === postId,
    );
    if (likedPostIndex === -1) return;
    posts.value[likedPostIndex].likeCount++;
  } catch (err) {
    console.log(err);
  }
};

const sendComment = async (postId) => {
  comment.value[0].postId = postId;
  console.log(comment.value);
  try {
    const response = await postStore.commentPost(comment.value[0]);
    console.log(response);
    comment.value.content = '';
  } catch (err) {
    console.log(err);
  }
};

const postBookmarked = async (postId) => {
  try {
    const userId = localStorage.getItem('reduxState');
    const response = await postStore.bookmarkedPost(postId, userId);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
const addBasket = (post) => {
  addressStore.saveUserSelectPost(post);
};
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

.comment-bar {
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  margin-top: 1px;
  background-color: white; /* Arka plan beyaz yapıldı */
  border: none; /* Kenar kaldırıldı */

  .v-btn {
    align-self: flex-end;
    color: #fa9392;
  }
}
</style>
