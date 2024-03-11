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
                density="compact"
                variant="underline"
                hide-details="auto"
                append-inner-icon="mdi-magnify"
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
                @click="showNav = false"
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
import { ref } from 'vue';

const showNav = ref(false);
const value = [
  { text: 'home', icon: 'mdi-home-outline' },
  { text: 'trends', icon: 'mdi-pound' },
  { text: 'notifications', icon: 'mdi-bell-outline' },
  { text: 'message', icon: 'mdi-inbox-outline' },
  { text: 'bookmarks', icon: 'mdi-bookmark-outline' },
  { text: 'lists', icon: 'mdi-list-box-outline' },
  { text: 'more', icon: 'mdi-dots-horizontal-circle-outline' },
  { text: 'shop', icon: 'mdi-cart-minus' },
  { text: 'profile', icon: 'mdi-account' },
];
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
