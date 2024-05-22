<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-show="succesPayment">
    <v-alert text="Ödeminiz başarıyla alınmıştır!" type="success"></v-alert>
  </div>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="paymentInformation.name"
            :error-messages="v$.name.$errors.map((e) => e.$message)"
            label="İsim Soyisim"
            required
          ></v-text-field>
          <v-text-field
            ref="cardNo"
            v-model="paymentInformation.cardNo"
            :error-messages="v$.cardNo.$errors.map((e) => e.$message)"
            counter="25"
            label="Kart No"
            required
          ></v-text-field>
          <v-text-field
            ref="cvc"
            v-model="paymentInformation.cvc"
            :error-messages="v$.cvc.$errors.map((e) => e.$message)"
            label="CVC"
            required
          ></v-text-field>
          <v-text-field
            ref="skt"
            v-model="paymentInformation.skt"
            :error-messages="v$.skt.$errors.map((e) => e.$message)"
            label="Son Kullanma Tarihi"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Sil </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" location="left">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="my-0"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="resetForm"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Formu Yenile</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="submit">
            Ödeme Yap
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { useAddressStore } from '@/store/address';
import router from '@/router';

const addressStore = useAddressStore();

const paymentInformation = ref({
  name: null,
  cardNo: null,
  cvc: null,
  skt: null,
});
const formHasErrors = ref(false);
const succesPayment = ref(false);

const rules = computed(() => {
  return {
    name: { required },
    cardNo: { required, minLength: minLength(25) },
    cvc: { required },
    skt: { required },
  };
});

const v$ = useVuelidate(rules, paymentInformation);

const submit = async () => {
  const result = await v$.value.$validate();

  if (result) {
    addressStore.saveUserPaymentInfo(paymentInformation.value);
  }

  succesPayment.value = true;

  setTimeout(() => {
    succesPayment.value = false;
  }, 600);

  setTimeout(() => {
    localStorage.removeItem('userBasketPost');
    localStorage.removeItem('userAddres');
    router.push('/shop');
  }, 400);
};
</script>

<style lang="scss" scoped>
.v-row {
  margin: 0px !important;
}
</style>
