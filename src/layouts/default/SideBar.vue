<template>
    <v-layout>
      <!-- burası side bar kısmı sayfa akışında fix kalıcak -->
      <v-navigation-drawer
        permanent
        theme="dark"
      >
      <div class="logo">
        <v-img
          :width="300"
          cover
          src="../../assets/logo.svg"
        ></v-img>
      </div>
      <v-list nav>
        <v-list-item v-for="(item,index) in value" :key="index" :value="item.text" :title="$t(`menu.${item.text}`)" @click="clickMenuItem(item.text)">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title :v-text="item.text"></v-list-item-title>
        </v-list-item>
        </v-list>
        <div
            style="bottom: 20px;position: fixed;left: 50px; cursor: pointer"
          >
            <div class="profile">
              <div style="display: flex;" @click="goToProfile()">
                <v-img
                  :width="40"
                  :height="40"
                  cover
                  src="../../assets/profile.svg"
                  class="profile-img"
                  ></v-img>
                  <div style="display: grid;margin-left: 10px;font-size: 16px;">
                    <span>{{ user.userName }}</span>
                    <span style="font-style: normal;">@{{ user.userId }}</span>
                  </div>
              </div>
              <div style="padding-left: 60px;padding-top: 10px;">
                <v-icon icon="mdi-dots-horizontal"></v-icon>
              </div>
            </div>
          </div>
      </v-navigation-drawer>
      <!-- burası view kısmı, menuye göre değişcek tek değişcek alan bu kısım -->
      <v-main>
        <default-view />
      </v-main>
    </v-layout>
</template>

<script setup>
import DefaultView from './View.vue';
import i18n from '@/i18n';

const { t } = i18n;

const value = [
  {text: 'home', icon: 'mdi-home-outline'},
  {text: 'trends', icon: 'mdi-pound'},
  {text: 'notifications', icon: 'mdi-bell-outline'},
  {text: 'message', icon: 'mdi-inbox-outline'},
  {text: 'bookmarks', icon: 'mdi-bookmark-outline'},
  {text: 'lists', icon: 'mdi-list-box-outline'},
  {text: 'more', icon: 'mdi-dots-horizontal-circle-outline'},
  {text: 'shop', icon: 'mdi-cart-minus'}
];

const user = {
  userName: 'Gülsüm Vural',
  userId: 'glsmvrl'
};

function clickMenuItem(value) {
  console.log('clicked item',value);
}

function goToProfile() {
  console.log('clicked profile');
}

</script>

<style lang="scss" scoped>
.v-layout{
  background-color: #fff;
  width: 100%;
  height: 100vh;
  font-size: 20px;
  font-style: italic;
}

.logo {
  width: 100%;
  margin-top: 30px;

  .v-img {
    width: 100% !important;
  }
}

.v-navigation-drawer {
  width: 340px !important;
  background-color: #FBF5E6;
  position: fixed;

  .v-navigation-drawer--left  {
    border-right-width: none;
  }

  .v-navigation-drawer__content{
    .v-list {
      margin: 20px 30px;
      .v-list-item {
        color: #000;
        cursor: pointer;
      }

      .v-list-item:hover {
        color: #fa9392;
      }
      .v-list-item:focus {
        color: #fa9392;
      }
    }
  }
}

.profile {
    display: flex;
    justify-content: space-between;
    color: #000;
    .profile-img {
      border-radius: 100%;
      align-items: center;
    }
  }
</style>
