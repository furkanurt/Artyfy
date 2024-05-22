<template>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :error-messages="errorMessages"
            :rules="[() => !!name || 'This field is required']"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="address"
            v-model="address"
            :rules="[
              () => !!address || 'This field is required',
              () =>
                (!!address && address.length <= 25) ||
                'Address must be less than 25 characters',
              addressCheck,
            ]"
            counter="25"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            required
          ></v-text-field>
          <v-autocomplete
            ref="country"
            v-model="country"
            :items="cities"
            :rules="[() => !!country || 'This field is required']"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>
          <v-text-field
            ref="state"
            v-model="state"
            :rules="[() => !!state || 'This field is required']"
            label="State/Province/Region"
            placeholder="TX"
            required
          ></v-text-field>
          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            label="ZIP / Postal Code"
            placeholder="79938"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Cancel </v-btn>
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
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="submit"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cities: [
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
    ],
    errorMessages: '',
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = '';
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? "Hey! I'm required" : '';

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-row {
  margin: 0px !important;
}
</style>
