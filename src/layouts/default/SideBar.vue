<template>
    <v-layout>
      <v-navigation-drawer
        permanent
        theme="dark"
      >
      <v-list nav>
          <v-list-item class="logo">
            <v-img
              :width="300"
              cover
              src="../../assets/logo.svg"
            ></v-img>
          </v-list-item>
          <v-list-item
            style="margin-top: 30px;"
            prepend-icon="mdi-home-outline"
            :title="$t('menu.home')"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-pound"
            :title="$t('menu.trends')"
            value="trends"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-bell-outline"
            :title="$t('menu.notifications')"
            value="notifications"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-inbox-outline"
            :title="$t('menu.message')"
            value="message"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-bookmark-outline"
            :title="$t('menu.bookmarks')"
            value="bookmarks"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-list-box-outline"
            :title="$t('menu.list')"
            value="lists"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-outline"
            :title="$t('menu.profile')"
            value="profile"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-dots-horizontal-circle-outline"
            :title="$t('menu.more')"
            value="more"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-cart-minus"
            :title="$t('menu.shop')"
            value="shop"
            class="shop-menu-btn"
            style="color: #fff"
          ></v-list-item>
          <v-list-item
            style="bottom: 10px;position: fixed;"
          >
            <div class="profile">
              <div style="display: flex;">
                <v-img
                  :width="40"
                  :height="40"
                  cover
                  src="../../assets/profile.svg"
                  class="profile-img"
                  ></v-img>
                  <div style="display: grid;margin-left: 10px;">
                    <span>{{ user.userName }}</span>
                    <span>@{{ user.userId }}</span>
                  </div>
              </div>
              <div style="padding-left: 60px;padding-top: 10px;">
                <v-icon icon="mdi-dots-horizontal"></v-icon>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <default-view />
      </v-main>
    </v-layout>
</template>

<script setup>
import DefaultView from './View.vue';
import i18n from '@/i18n';

const { t } = i18n;

const user = {
  userName: 'Gülsüm Vural',
  userId: 'glsmvrl'
};

</script>

<style lang="scss" scoped>
.v-layout{
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

.logo {
  width: 100%;

  .v-img {
    width: 100% !important;
  }
}

.v-navigation-drawer {
  width: 340px !important;
  background-color: #FBF5E6;

  .v-navigation-drawer--left  {
    border-right-width: none;
  }

  .v-navigation-drawer__content{
    .v-list {
      margin: 20px 30px;
      .v-list-item {
        color: #000;
      }
    }
  }

  .shop-menu-btn {
    margin-top: 30px;
    width: 200px;
    height: 40px;
    background-color: #fa9392;
    border-radius: 100px;
    padding: 0px 30px;
  }

  .profile {
    display: flex;
    justify-content: space-between;
    .profile-img {
      border-radius: 100%;
      align-items: center;
    }
  }
}
</style>
