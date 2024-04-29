<template>
  <nav class="navbar">
    <div class="logo">
      <h1>WHAT IS TRENDS ON ARTFY</h1>
    </div>
    <div class="search-box">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="search"
      />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Arama sorgusu
    };
  },
  methods: {
    search() {
      // Arama işlemleri burada gerçekleştirilebilir
      console.log('Arama yapılıyor: ', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbf5ea;
  color: #fff;
  padding: 10px 20px;
}

.logo h1 {
  margin: 0;
  margin-left: 348px;
  color: #f99292;
  font-weight: 900;
}

.search-box input {
  width: 700px;
  padding: 8px;
  border-radius: 6px;
  border: 1.5px solid #ccc;
}
</style>
