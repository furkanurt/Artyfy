<!-- eslint-disable vue/multi-word-component-names -->
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

const productsOnBasket = ref(
  JSON.parse(localStorage.getItem('userBasketPost')),
);

const deleteProduct = (key) => {
  productsOnBasket.value.splice(key, 1);
  localStorage.setItem(
    'userBasketPost',
    JSON.stringify(productsOnBasket.value),
  );
  console.log(JSON.parse(localStorage.getItem('userBasketPost')));
};
</script>

<style lang="scss" scoped></style>
