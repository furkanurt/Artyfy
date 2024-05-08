<template>
    <div>
      <nav class="navbar">
      <div class="logo">
        <h1> WHAT IS TRENDS ON ARTFY</h1>
      </div>
      <div class="search-box">
        <input type="text" v-model="searchQuery" placeholder="Search..." @input="search">
      </div>
    </nav>
      <v-row>
        <v-col
          v-for="(n, index) in 36"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" max-width="344" style="background-color: #ededed ; border-radius: 10px;"  >
            <v-img
              height="200px"
              :src="getRandomImage()"
              cover
            ></v-img>
      
            <v-card-title> </v-card-title>
      
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      
            <div class="text-center pa-4">
              <v-btn style="color: #f99292;" @click="dialog = true"> Look At the Post </v-btn>
      
              <v-dialog v-model="dialog" width="auto" style="background:non;" >
                <v-card 
                  max-width="900"
                  prepend-icon="mdi-update"
                  text="Your application will relaunch automatically after the update is complete."
                  title="Update in progress"
                >
                  <v-img src="https://source.unsplash.com/random/900x600" aspect-ratio="2.5" style="margin: 10px; border-radius: 5;"></v-img>
                  <v-card-subtitle> Like | Comment | Share </v-card-subtitle>
                  <template v-slot:actions>
                    <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
                  </template >
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
      }
    },
  
    methods: {
      getRandomImage() {
        const randomIndex = Math.floor(Math.random() * 1000) + 1; 
        return `https://source.unsplash.com/random/344x200/?landscape&${randomIndex}`;
      },
    },
  }
  </script>
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: #fff;
    padding: 10px;
    margin-bottom: 5px;
  }
  .logo h1 {
    margin: 0;
    margin-left: 348px;
    color: #f99292;
    font-weight: 900;
  }
  
  .search-box input {
    width: 500px;
    padding: 8px;
    border-radius: 6px;
    border: 1.5px solid #ccc;
  }
</style>
  