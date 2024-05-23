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
      localStorage.setItem(
        'userBasketPost',
        JSON.stringify(this.userSelectPost),
      );
    },
    saveUserAddressInfo(params) {
      this.userAddressInformation = params;
      localStorage.setItem('userAddres', JSON.stringify(params));
    },
    saveUserPaymentInfo(params) {
      this.userPaymentInformation = params;
    },
  },
});
