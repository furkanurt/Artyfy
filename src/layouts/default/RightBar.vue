<template>
  <v-layout class="h-screen">
    <v-text-field
      label="Search"
      variant="solo-filled"
      prepend-inner-icon="mdi-magnify"
      solo
      rounded
      max-height="30"
    ></v-text-field>
    <v-card class="mx-auto">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">{{ $t('whatsTrend') }}</div>
          <v-divider horizontal></v-divider>
        </div>
      </v-card-item>

      <v-card-item v-for="(item, index) in posts" :key="index">
        <div class="card-item">
          <div style="min-width: 130px; margin-right: 10px">
            <v-card-subtitle>@{{ item.writer }} • Last Night</v-card-subtitle>
            <v-card-text style="margin: 6px 0px">
              {{ item.text }}
            </v-card-text>
            <v-card-subtitle
              >{{ $t('trendingWith') }}
              <span style="color: #fa9392"
                >#{{ item.trending }}</span
              ></v-card-subtitle
            >
          </div>
          <div>
            <v-img
              :width="100"
              max-height="100"
              cover
              :src="item.photo"
            ></v-img>
          </div>
        </div>
        <v-divider horizontal style="margin-top: 10px"></v-divider>
      </v-card-item>

      <v-card-item>
        <v-btn variant="text" style="color: #fa9392; padding: 0px">
          {{ $t('showMore') }}
        </v-btn>
      </v-card-item>
    </v-card>

    <v-card>
      <v-card-item>
        <div>
          <div class="text-overline mb-1">Who To Follow</div>
          <v-divider horizontal></v-divider>
        </div>
      </v-card-item>

      <v-list-item
        v-for="(item, index) in userSuggestions"
        :key="index"
        :title="item.title"
        :subtitle="`@${item.subtitle}`"
        style="width: 100%"
      >
        <template v-slot:prepend>
          <v-avatar>
            <v-img :src="item.prependAvatar" alt="John"></v-img>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            variant="text"
            style="
              border: 1px solid #fa9392;
              border-radius: 100px;
              color: #fa9392 !important;
            "
            >{{ $t('follow') }}</v-btn
          >
        </template>
      </v-list-item>

      <v-card-item>
        <v-btn variant="text" style="color: #fa9392; padding: 0px">
          {{ $t('showMore') }}
        </v-btn>
      </v-card-item>
    </v-card>

    <v-footer
      >Terms of Service Privacy Policy Cookie Policy Ads info More ©{{
        year
      }}
      Artfy, Inc.</v-footer
    >
  </v-layout>
</template>

<script setup>
import DummyService from '@/services/dummy.service';
import dayjs from 'dayjs';

const posts = DummyService.fetchTrendSuggestions();
const userSuggestions = DummyService.fetchUserSuggestions();
const year = dayjs().year();
</script>

<style lang="scss" scoped>
.v-layout {
  display: grid !important;
  position: fixed !important;

  .v-input {
    padding: 0px 4px;
  }
  .v-card {
    border-radius: 20px;
    background-color: #ededed;
    margin: 10px 0px;
    .v-card-item {
      .card-item {
        display: flex;
        justify-content: space-between;
      }
    }
    .v-card-text {
      padding: 0px;
    }
  }
}

@media screen and (max-width: 768px) {
  .v-layout {
    display: none;
  }
}
</style>
