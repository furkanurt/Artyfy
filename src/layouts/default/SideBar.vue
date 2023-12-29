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
              aspect-ratio="16/9"
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
          <v-list-item style="width: 200px;margin-top: 30px;">
            <v-btn block rounded="xl" size="medium">
              <v-list-item
                prepend-icon="mdi-cart-minus"
                :title="$t('menu.shop')"
                value="shop"
              />
            </v-btn>
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
        color: black;
        .v-list-item__content {
          .v-list-item {
            color: white;
          }
        }
      }
    }
  }
}
</style>
