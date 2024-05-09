<template>
  <div :class="appStore.isMobile ? 'pt-4' : ''">
    <div
      class="flex justify-between items-center py-5 pl-7"
      v-if="!appStore.isMobile"
    >
      <div v-if="appStore.breakpoint === 'md'" class="w-full pr-3">
        <v-text-field
          v-model="searchValue"
          :label="$t('search')"
          density="compact"
          variant="solo"
          hide-details="auto"
          append-inner-icon="mdi-magnify"
          @input="filteredPosts"
        ></v-text-field>
      </div>
    </div>
    <v-divider v-if="!appStore.isMobile"></v-divider>
    <div class="absolute flex justify-center z-50" v-if="getErrorMessage">
      <v-alert type="error" class="mb-10" transition="slide-y-transition">{{
        $t('errorMessage.postSendErrorMessage')
      }}</v-alert>
    </div>
    <div class="absolute flex justify-center z-50" v-if="getSuccessMessage">
      <v-alert type="success" class="mb-10" transition="slide-y-transition"
        >Yeni gönderi oluşturuldu.</v-alert
      >
    </div>
    <v-textarea
      v-model="post.content"
      color="#FFF"
      :label="$t('whatsHappenin')"
      rows="3"
      class="px-7"
      variant="plain"
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      hide-details
    >
    </v-textarea>
    <div class="px-7 py-4">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row no-gutters>
              <v-col class="d-flex justify-start" cols="4">
                {{ $t('editPostDetail') }}
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="fjustify-between responsive-row" no-gutters>
              <v-col>
                <v-select
                  v-model="value"
                  :items="items"
                  :label="$t('selectCategory')"
                  density="comfortable"
                  variant="solo"
                  @update:modelValue="selectMenu"
                ></v-select>
              </v-col>

              <v-col>
                <v-switch
                  v-model="post.isSellable"
                  color="primary"
                  :label="$t('isSellable')"
                  hide-details
                ></v-switch>
              </v-col>

              <v-col>
                <v-text-field
                  :label="$t('price')"
                  :model-value="post.price"
                  variant="solo"
                  density="comfortable"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div id="file-input" class="px-7 flex justify-between items-center">
      <v-file-input
        v-model="post.image"
        :show-size="1000"
        label="File input"
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        variant="underlined"
        accept="image/*"
        @change="imagesUploaded"
        counter
        multiple
      >
        <template v-slot:selection="{ fileNames }">
          <template v-for="(fileName, index) in fileNames" :key="fileName">
            <v-chip v-if="index < 2" class="me-2" size="small" label>
              {{ fileName }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="text-overline text-grey-darken-3 mx-2"
            >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </template>
      </v-file-input>
      <v-btn
        rounded="xl"
        class="text-white"
        style="background-color: #fa9392"
        @click="sendPost"
        >{{ $t('postCard.post') }}</v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/store/app';
import { computed, onBeforeMount, ref } from 'vue';
import { useSearchStore } from '@/store/search';
import { useUserStore } from '@/store/user';
import { usePostStore } from '@/store/post';
import categoriesService from '@/services/categories.service';

const appStore = useAppStore();
const searchStore = useSearchStore();
const userStore = useUserStore();
const postStore = usePostStore();

const getErrorMessage = ref(false);
const getSuccessMessage = ref(false);
const searchValue = ref('');
const items = ref([]);
const categories = ref([]);
const value = ref([]);
const categoryIds = ref([]); // to be used in post create
const post = ref({
  price: null,
  title: '', // kaldırılabilir
  content: '',
  image: [],
  isSellable: true,
  appUserId: '',
  categoryId: null,
});

const filteredPosts = computed(() => {
  return searchStore.fetchPost(searchValue.value);
});

onBeforeMount(async () => {
  const res = await categoriesService.fetchCategories();
  categories.value = res.data.data;
  for (const value of categories.value) {
    items.value = [...items.value, value.name];
  }

  post.value.appUserId = userStore.userDetail.id;
});

const selectMenu = (v) => {
  let id = [];
  v.map((y) => {
    categories.value.filter((x) => {
      if (y === x.name) {
        id = [...id, x.id];
      }
    });
  });
  categoryIds.value = id;
  post.value.categoryId = categoryIds.value;
  console.log('Categories IDs: ,', post.value.categoryId);
};

const imagesUploaded = () => {
  // convert to formData
  const formData = new FormData();
  for (let i = 0; i < post.value.image.length; i++) {
    formData.append('files', post.value.image[i]);
  }
  formData.forEach((value, key) => {
    console.log('FORMDATA: ', key, value);
    post.value.image = [post.value.image, ...value];
  });

  console.log('uploaded image: ', post.value.image);
};

const sendPost = async () => {
  console.log('sending for post value is : ', post.value);
  const res = await postStore.sendPost(post.value);
  console.log(res);

  if (res.errors) {
    getErrorMessage.value = true;
    setTimeout(() => {
      getErrorMessage.value = false;
    }, 3000);
  } else if (res.message) {
    getSuccessMessage.value = true;
    setTimeout(() => {
      getSuccessMessage.value = false;
    }, 3000);
  }

  post.value = {};
};
</script>
<style lang="scss" scoped>
.v-switch {
  display: flex !important;
  justify-content: center !important;
}
@media screen and (max-width: 663px) {
  .responsive-row {
    display: block;
  }
}
</style>
