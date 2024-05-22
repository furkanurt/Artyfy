<template>
  <v-layout>
    <v-list class="w-full">
      <v-list-item
        v-for="(product, key) in productsOnBasket"
        :key="key"
        class="pb-8"
      >
        <template v-slot:prepend>
          <v-img
            class="p-3 mr-5 rounded"
            :width="100"
            cover
            :src="product.image"
          ></v-img>
        </template>

        <v-list-item-title>
          <span>
            {{ product.userFullName }}
          </span>
          ·
          <span> @{{ product.userName }} </span>
        </v-list-item-title>
        <v-list-item-subtitle>
          <span> {{ product.price }}₺ </span>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <span> {{ product.content }} </span>
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            color="#616161"
            icon="mdi-delete"
            variant="text"
            @click="deleteProduct(key)"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

const productsOnBasket = ref([
  {
    id: 1,
    price: 100,
    userName: 'gulsumvural',
    userFullName: 'Gülsüm Vural',
    image: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor',
  },
  {
    id: 2,
    price: 200,
    userName: 'gulsumv',
    userFullName: 'Gülsüm Vural 2',
    image: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor',
  },
  {
    id: 3,
    price: 300,
    userName: 'glsmvrl',
    userFullName: 'Gülsüm Vural 3',
    image: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor',
  },
]);

const deleteProduct = (key) => {
  productsOnBasket.value.splice(key, 1);
  console.log(productsOnBasket.value);
};
</script>

<style lang="scss" scoped></style>
