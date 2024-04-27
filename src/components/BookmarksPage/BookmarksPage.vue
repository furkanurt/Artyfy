<template>
    <div>
      <v-container class="text-center justify-center">
        <v-row>
          <v-col
            v-for="(bookmark, index) in bookmarks"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="bookmark-card" max-width="344">
              <v-img
                height="200px"
                :src="bookmark.img"
                cover
              ></v-img>
        
              <div class="card-content">
                <v-card-title class="card-title">{{ bookmark.title }}</v-card-title>
                <v-card-subtitle class="card-subtitle">{{ bookmark.subtitle }}</v-card-subtitle>
              </div>
      
              <div class="text-center pa-4">
                <v-btn color="#f99292" dark @click="openDialog(index)">View Details</v-btn>
          
                <v-dialog v-model="dialog" width="auto" style="background: whitesmoke;" >
                  <v-card 
                    max-width="900"
                    prepend-icon="mdi-update"
                    text="Your application will relaunch automatically after the update is complete."
                    title="Update in progress"
                  >
                    <v-img :src="bookmark.img" aspect-ratio="2.5" style="margin: 10px; border-radius: 5;"></v-img>
                    <v-card-subtitle> Like | Comment | Share </v-card-subtitle>
                    <template v-slot:actions>
                      <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
                    </template>
                  </v-card>
                </v-dialog>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        bookmarks: [
  { title: 'Bookmark 1', subtitle: 'Subtitle 1', img: 'https://source.unsplash.com/random/344x200/?landscape&1' },
  { title: 'Bookmark 2', subtitle: 'Subtitle 2', img: 'https://source.unsplash.com/random/344x200/?landscape&2' },
  { title: 'Bookmark 3', subtitle: 'Subtitle 3', img: 'https://source.unsplash.com/random/344x200/?landscape&3' },
  { title: 'Bookmark 4', subtitle: 'Subtitle 4', img: 'https://source.unsplash.com/random/344x200/?landscape&4' },
  { title: 'Bookmark 5', subtitle: 'Subtitle 5', img: 'https://source.unsplash.com/random/344x200/?landscape&5' },
  { title: 'Bookmark 6', subtitle: 'Subtitle 6', img: 'https://source.unsplash.com/random/344x200/?landscape&6' },
  { title: 'Bookmark 7', subtitle: 'Subtitle 7', img: 'https://source.unsplash.com/random/344x200/?landscape&7' },
  { title: 'Bookmark 8', subtitle: 'Subtitle 8', img: 'https://source.unsplash.com/random/344x200/?landscape&8' },
  { title: 'Bookmark 9', subtitle: 'Subtitle 9', img: 'https://source.unsplash.com/random/344x200/?landscape&9' },
  
        ]
      };
    },
    methods: {
      openDialog(index) {
        this.dialog = index;
      },
      addBookmark() {
        // Implement bookmark addition logic here
      }
    }
  };
  </script>
  
  <style scoped>
  .bookmark-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Hafif bir gölge */
    transition: box-shadow 0.3s ease; /* Gölgelendirme için yumuşak geçiş */
  }
  
  .bookmark-card:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Hover durumunda daha belirgin gölge */
  }
  
  .card-content {
    padding: 16px; /* Kart içeriği için dolgu */
  }
  
  .card-title {
    font-size: 20px;
    font-weight: bold;
    color: #fa9392;
    margin-bottom: 8px;
  }
  .title {
    color: #fa9392; 
  }
  
  .card-subtitle {
    font-size: 16px;
    color: #666666;
    margin-bottom: 16px;
  }
  
  .v-btn {
    margin-top: 16px; /* Düğmeler arası boşluk */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Hafif bir gölge */
    transition: box-shadow 0.3s ease; /* Gölgelendirme için yumuşak geçiş */
  }
  
  .v-btn:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Hover durumunda daha belirgin gölge */
  }
  
  /* Navigasyon çubuğu stilleri */
  .v-app-bar {
    background-color: #fbf5e6  !important; /* Navigasyon çubuğu arka plan rengi */
    border-bottom: none !important;
  }
  </style>
  