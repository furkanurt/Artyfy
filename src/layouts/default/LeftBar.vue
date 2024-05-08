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
            :style="
              route.name.toLowerCase() === item.text
                ? 'color: #fa9392'
                : 'color: #00000'
            "
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
        <div class="profile" v-if="userDetail">
          <div style="display: flex" @click="goToProfile()">
            <v-img
              :width="40"
              :height="40"
              cover
              :src="
                userDetail.imageUrl
                  ? userDetail.imageUrl
                  : 'https://i.pravatar.cc/40'
              "
              class="profile-img"
            ></v-img>
            <div style="display: grid; margin-left: 10px; font-size: 14px">
              <span>{{ userDetail.fullName }}</span>
              <span style="font-style: normal">@{{ userDetail.userName }}</span>
            </div>
          </div>
          <v-menu class="profile-div">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="large"
                icon="mdi-dots-vertical"
                v-bind="props"
              ></v-btn>
            </template>

            <v-list>
              <v-list-item @click="logout" class="cursor-pointer">
                <v-list-item-title>{{
                  $t('userMenu.logout')
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/store/user';
// import { useAppStore } from '@/store/app';
import { useRoute } from 'vue-router';
// import i18n from '@/i18n';

const userStore = useUserStore();
// const appStore = useAppStore();
const route = useRoute();
// const { availableLocales } = i18n.global;

const userDetail = ref();
const value = [
  { text: 'home', icon: 'mdi-home-outline' },
  { text: 'trends', icon: 'mdi-pound' },
  { text: 'notifications', icon: 'mdi-bell-outline' },
  { text: 'bookmarks', icon: 'mdi-bookmark-outline' },
  { text: 'shop', icon: 'mdi-cart-minus' },
  { text: 'profile', icon: 'mdi-account' },
];

onMounted(async () => {
  const res = await userStore.fetchUserDetail();
  if (res.data.error) {
    logout();
  } else {
    userDetail.value = res.data.data;
  }
});

const clickMenuItem = (value) => {
  if (value === 'home') {
    router.push('/');
  } else {
    router.push(`/${value}`);
  }
};

const goToProfile = () => {
  console.log('clicked profile');
  router.push('/profile');
};

const logout = async () => {
  await userStore.userLogout();
  router.push('/login');
};

// const changeLanguage = (e) => {
//   localStorage.setItem('portalLang', e);
//   appStore.setLocale(e);
// };
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
    }
  }
}

.profile {
  display: flex;
  justify-content: space-evenly;
  color: #000;
  width: 100%;

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
