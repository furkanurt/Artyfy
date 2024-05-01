<template>
  <div :class="appStore.isMobile ? 'pt-4' : ''">
    <div
      class="flex justify-between items-center py-5 pl-7"
      v-if="!appStore.isMobile"
    >
      <!-- <p class="font-extrabold text-xl">Home</p> -->
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
                Edit Post Detail
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="space-between" no-gutters>
              <v-col cols="9" class="mr-3">
                <v-select
                  v-model="value"
                  :items="items"
                  label="Select Categories"
                  variant="solo"
                  @update:modelValue="selectMenu"
                  chips
                  multiple
                ></v-select>
              </v-col>

              <v-col>
                <v-switch
                  v-model="post.isSellable"
                  color="primary"
                  label="Is Sellable"
                  hide-details
                ></v-switch>
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
        >{{ $t('postCard.post') }}</v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/store/app';
import { computed, onMounted, ref } from 'vue';
import { useSearchStore } from '@/store/search';
import categoriesService from '@/services/categories.service';

const appStore = useAppStore();
const searchStore = useSearchStore();
const searchValue = ref('');
const items = ref([]);
const post = ref({
  title: '',
  content: '',
  image: [],
  likeCount: 0,
  saveCount: 0,
  isSellable: true,
  appUserId: '',
  categoryId: 0,
  postId: 0,
});
const categories = ref([]);
const value = ref([]);
const categoryIds = ref([]); // to be used in post create

const filteredPosts = computed(() => {
  return searchStore.fetchPost(searchValue.value);
});

onMounted(async () => {
  const res = await categoriesService.fetchCategories();
  categories.value = res.data.data;
  Object.values(res).map((x) => {
    x.data.map((y) => {
      items.value = [...items.value, y.name];
    });
  });
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
  console.log('Categories IDs: ,', categoryIds.value);
};

const imagesUploaded = () => {
  // convert to formData
  const formData = new FormData();
  for (let i = 0; i < post.value.image.length; i++) {
    formData.append('files', post.value.image[i]);
  }
  formData.forEach((value, key) => {
    console.log('FORMDATA: ', key, value);
  });
};
</script>
