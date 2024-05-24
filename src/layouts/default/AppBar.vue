<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2">
          <v-layout>
            <v-app-bar color="#FBF5E5" density="compact" :elevation="0">
              <v-btn icon @click="showNav = !showNav">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </v-btn>

              <div class="w-20">
                <v-app-bar-title>ARTYFY</v-app-bar-title>
              </div>

              <v-text-field
                v-model="searchValue"
                density="compact"
                variant="underline"
                hide-details="auto"
                append-inner-icon="mdi-magnify"
                @input="filteredPosts"
              ></v-text-field>
            </v-app-bar>
          </v-layout>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        v-show="showNav"
        style="background-color: #fbf5e5; margin-top: 16px"
      >
        <v-sheet class="sheet-2">
          <div class="sidemenu__wrapper">
            <v-list class="sidemenu__list" nav>
              <v-list-item
                v-for="(item, index) in value"
                :key="index"
                :value="item.text"
                :title="$t(`menu.${item.text}`)"
                @click="clickMenuItem(item.text)"
                class="flex justify-center"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title :v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useSearchStore } from '@/store/search';
import router from '@/router';
import { useRoute } from 'vue-router';

const searchStore = useSearchStore();
const showNav = ref(false);
const searchValue = ref('');
const route = useRoute();
const value = [
  { text: 'home', icon: 'mdi-home-outline' },
  { text: 'trends', icon: 'mdi-pound' },
  { text: 'notifications', icon: 'mdi-bell-outline' },
  { text: 'bookmarks', icon: 'mdi-bookmark-outline' },
  { text: 'shop', icon: 'mdi-cart-minus' },
  { text: 'profile', icon: 'mdi-account' },
  { text: 'basket', icon: 'mdi-basket' },
];

onMounted(() => {
  searchValue.value = '';
});

const filteredPosts = () => {
  if (route.path === '/shop') {
    searchStore.fetchMarketPost(searchValue.value);
  } else {
    searchStore.fetchPost(searchValue.value);
  }
};

function clickMenuItem(value) {
  showNav.value = false;
  if (value === 'home') {
    router.push('/');
  } else if (value === 'basket') {
    router.push('/shop/basket');
  } else {
    router.push(`/${value}`);
  }
}
</script>
<style lang="scss" scoped>
.v-container {
  padding: 0px;
}
.sheet-2 {
  background-color: #fbf5e5;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10000;
  opacity: 0.9;
}
.sidemenu__wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  .sidemenu__list {
    background-color: #fbf5e5;
    display: grid;
    gap: 30px;
  }
}
</style>
