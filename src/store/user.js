import { defineStore } from 'pinia';
import authService from '@/services/auth.service';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async userRegister(params) {
      try {
        const response = await authService.registerUser(params);
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    async userLogin(params) {
      try {
        const response = await authService.loginUser(params);
        localStorage.setItem('token', response.data.data.token);
        this.user = response.data;
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    async userLogout() {
      this.user = null;
      localStorage.removeItem('token');
    },
  },
});
