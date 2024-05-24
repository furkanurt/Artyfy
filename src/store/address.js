import { defineStore } from 'pinia';

export const useAddressStore = defineStore('address', {
  state: () => ({
    userSelectPost: [],
    userAddressInformation: [],
    userPaymentInformation: [],
  }),
  actions: {
    saveUserSelectPost(params) {
      this.userSelectPost = [...this.userSelectPost, params];
    },
    saveUserAddressInfo(params) {
      this.userAddressInformation = params;
    },
    saveUserPaymentInfo(params) {
      this.userPaymentInformation = params;
    },
  },
});
