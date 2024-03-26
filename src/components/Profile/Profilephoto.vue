<template>
    <v-parallax
      src="https://source.unsplash.com/random/900x600"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          <v-avatar :size="120">
            <img :src="user.avatar" alt="User Avatar" />
          </v-avatar>
        </h1>
        <h4 class="subheading">
          {{ user.username }}
        </h4>
      </div>
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h4>Followers:  {{ user.followers }}</h4>
      </div>
    </v-parallax>
  
    <div class="empty-container">
    <div class="left-container">
        <h4>{{ user.name }}</h4>
      <h5>Posts: {{ user.postCount }}</h5>
      <h5>Fallowers: {{ user.followers }}</h5>
      </div>
      <div class="right-container">
      <v-btn append-icon="mdi-account" prepend-icon="mdi-check-circle">Follow</v-btn>
      </div>
    </div>
  </template>
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const user = ref({
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg', 
        username: '@glsmvrl', 
        name: 'Gülsüm Vural',
        followers: 45,
        postCount: 20 
      });
  
      return {
        user
      };
    }
  }
  </script>
  
  <style scoped>
  .empty-container {
    height: 100px; 
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-between; 
    padding: 0 20px; 
  }
  h4 {
    font-size: large;
    font-weight: 500;
  }
  .left-container {
    width: auto; 
    margin-right: 10px; 
  }
  .right-container {
    width: auto; 
  }
</style>

  