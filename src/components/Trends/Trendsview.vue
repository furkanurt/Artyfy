<template>
  
    <v-container fluid>
      <nav class="navbar">
        <div class="logo">
          <h1>ARTFY'DA TREND OLANLAR</h1>
        </div>
        <div class="search-box">
          <input type="text" v-model="searchQuery" placeholder="Ara..." @input="search">
        </div>
      </nav>
      <v-row>
        <v-col
          v-for="(n, index) in 36"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="mx-auto" max-width="344" style="background-color: #ededed; border-radius: 10px;">
            <v-img
              height="200px"
              :src="getRandomImage()"
              cover
            ></v-img>
            <v-card-title>Post</v-card-title>
            <v-card-subtitle style="color: #f99292;">#trendsonartfy</v-card-subtitle>
            <div class="text-center pa-4">
              <v-btn style="color: #f99292;" @click="dialog = true">İncele</v-btn>
              <v-dialog v-model="dialog" width="500px" style="background: whitesmoke;">
                <v-card>
                  <v-img src="https://source.unsplash.com/random/900x600" aspect-ratio="2.5" style="margin: 10%; border-radius: 5px; padding: 10%;"></v-img>
                  <v-card-subtitle>
                    <v-btn prepend-icon="mdi-heart" size="small" class="ml-1" style="box-shadow: none;"></v-btn>
                    <v-btn prepend-icon="mdi-comment" size="small" class="ml-1" style="box-shadow: none;"></v-btn>
                  </v-card-subtitle>
                  <template v-slot:actions>
                    <v-btn text @click="dialog = false">Geri Dön</v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      searchQuery: '',
    }
  },
  methods: {
    getRandomImage() {
      const randomIndex = Math.floor(Math.random() * 1000 ) + 1; 
      return `https://source.unsplash.com/random/344x200/?landscape&${randomIndex}`;
    },
    search() {
      
    }
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #000;
  padding: 10px;
  margin-bottom: 5px;
}

.logo h1 {
  margin: 0;
  color: #f99292;
  font-weight: 900;
  text-align: center;
  word-wrap: break-word;
}

.search-box {
  width: 100%;
  max-width: 500px;
  margin-top: 10px;
}

.search-box input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1.5px solid #ccc;
}

@media (min-width: 600px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }
  .search-box {
    margin-top: 0;
  }
  
}

</style>
