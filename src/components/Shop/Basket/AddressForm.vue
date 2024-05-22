<template>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="addressForm.name"
            :error-messages="v$.name.$errors.map((e) => e.$message)"
            label="İsim Soyisim"
            required
          ></v-text-field>
          <v-text-field
            ref="address"
            v-model="addressForm.address"
            :error-messages="v$.address.$errors.map((e) => e.$message)"
            counter="25"
            label="Adres"
            required
          ></v-text-field>
          <v-autocomplete
            ref="country"
            v-model="addressForm.city"
            :items="cities"
            :error-messages="v$.city.$errors.map((e) => e.$message)"
            label="Şehir"
            required
          ></v-autocomplete>
          <v-text-field
            ref="state"
            v-model="addressForm.state"
            :error-messages="v$.state.$errors.map((e) => e.$message)"
            label="İlçe"
            required
          ></v-text-field>
          <v-text-field
            ref="zip"
            v-model="addressForm.zip"
            :error-messages="v$.zip.$errors.map((e) => e.$message)"
            label="ZIP Kodu"
            required
          ></v-text-field>
          <v-text-field
            disabled
            ref="country"
            v-model="addressForm.country"
            label="Ülke"
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
          <v-btn color="primary" variant="text" @click="submit"> Kaydet </v-btn>
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

const addressStore = useAddressStore();

const cities = [
  'Adana',
  'Adıyaman',
  'Afyonkarahisar',
  'Ağrı',
  'Amasya',
  'Ankara',
  'Antalya',
  'Artvin',
  'Aydın',
  'Balıkesir',
  'Bilecik',
  'Bingöl',
  'Bitlis',
  'Bolu',
  'Burdur',
  'Bursa',
  'Çanakkale',
  'Çankırı',
  'Çorum',
  'Denizli',
  'Diyarbakır',
  'Edirne',
  'Elazığ',
  'Erzincan',
  'Erzurum',
  'Eskişehir',
  'Gaziantep',
  'Giresun',
  'Gümüşhane',
  'Hakkari',
  'Hatay',
  'Isparta',
  'Mersin',
  'İstanbul',
  'İzmir',
  'Kars',
  'Kastamonu',
  'Kayseri',
  'Kırklareli',
  'Kırşehir',
  'Kocaeli',
  'Konya',
  'Kütahya',
  'Malatya',
  'Manisa',
  'Kahramanmaraş',
  'Mardin',
  'Muğla',
  'Muş',
  'Nevşehir',
  'Niğde',
  'Ordu',
  'Rize',
  'Sakarya',
  'Samsun',
  'Siirt',
  'Sinop',
  'Sivas',
  'Tekirdağ',
  'Tokat',
  'Trabzon',
  'Tunceli',
  'Şanlıurfa',
  'Uşak',
  'Van',
  'Yozgat',
  'Zonguldak',
  'Aksaray',
  'Bayburt',
  'Karaman',
  'Kırıkkale',
  'Batman',
  'Şırnak',
  'Bartın',
  'Ardahan',
  'Iğdır',
  'Yalova',
  'Karabük',
  'Kilis',
  'Osmaniye',
  'Düzce',
];
const addressForm = ref({
  errorMessages: '',
  name: null,
  address: null,
  city: null,
  state: null,
  zip: null,
  country: 'Türkiye',
});
const formHasErrors = ref(false);

const rules = computed(() => {
  return {
    name: { required },
    address: { required, minLength: minLength(25) },
    city: { required },
    state: { required },
    zip: { required },
  };
});

const v$ = useVuelidate(rules, addressForm);

const submit = async () => {
  const result = await v$.value.$validate();

  if (result) {
    addressStore.saveUserAddressInfo(addressForm.value);
  }
};
</script>

<style lang="scss" scoped>
.v-row {
  margin: 0px !important;
}
</style>
