<template>
  <v-layout class="left-bar">
    <!-- burası side bar kısmı sayfa akışında fix kalıcak -->
    <v-navigation-drawer permanent theme="dark">
      <div class="logo">
        <v-img :width="300" cover src="../../assets/logo.svg"></v-img>
      </div>
      <div style="display: flex; justify-content: center">
        <v-list nav>
          <v-list-item
            v-for="(item, index) in value"
            :key="index"
            :value="item.text"
            :title="$t(`menu.${item.text}`)"
            @click="clickMenuItem(item.text)"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title :v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <div
        style="
          width: 100%;
          bottom: 20px;
          position: fixed;
          display: flex;
          justify-content: center;
          cursor: pointer;
        "
      >
        <div class="profile">
          <div style="display: flex" @click="goToProfile()">
            <v-img
              :width="40"
              :height="40"
              cover
              src="../../assets/profile.svg"
              class="profile-img"
            ></v-img>
            <div style="display: grid; margin-left: 10px; font-size: 14px">
              <span>{{ user.userName }}</span>
              <span style="font-style: normal">@{{ user.userId }}</span>
            </div>
          </div>
          <div class="profile-div">
            <v-icon icon="mdi-dots-horizontal"></v-icon>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import router from '@/router';

const value = [
  { text: 'home', icon: 'mdi-home-outline' },
  { text: 'trends', icon: 'mdi-pound' },
  { text: 'notifications', icon: 'mdi-bell-outline' },
  { text: 'bookmarks', icon: 'mdi-bookmark-outline' },
  { text: 'shop', icon: 'mdi-cart-minus' },
];

const user = {
  userName: 'Gülsüm Vural',
  userId: 'glsmvrl',
};

function clickMenuItem(value) {
  if (value === 'home') {
    router.push('/');
  } else {
    router.push(`/${value}`);
  }
}

function goToProfile() {
  console.log('clicked profile');
}
</script>

<style lang="scss" scoped>
.left-bar {
  background-color: #fff;
  font-size: 20px;
  position: fixed !important;
  width: 23%;
  height: 100vh;
}

.logo {
  width: 100%;
  margin-top: 30px;

  .v-img {
    width: 100% !important;
  }
}

.v-navigation-drawer {
  background-color: #fbf5e6;
  position: static;
  width: 100% !important;
  .v-navigation-drawer--left {
    border-right-width: none;
  }

  .v-navigation-drawer__content {
    .v-list {
      margin: 20px 60px;

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

  .profile-div {
    padding-left: 60px;
    padding-top: 10px;
  }
}

@media screen and (max-width: 1264px) {
  .left-bar {
    width: 33.33%;
  }
  .v-navigation-drawer {
    .v-navigation-drawer__content {
      .v-list {
        margin: 0px;
      }
    }
  }
  .profile {
    .profile-div {
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .v-layout {
    display: none;
  }
}
</style>
