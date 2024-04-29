import { defineStore } from 'pinia';
import authService from '@/services/auth.service';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    userDetail: null,
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
        this.fetchUserID(response.data.data.token);
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
    fetchUserID(token) {
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
      );
      localStorage.setItem('reduxState', JSON.parse(jsonPayload).UserId);
    },
    async fetchUserDetail() {
      const getUserId = localStorage.getItem('reduxState');

      if (!getUserId) {
        this.fetchUserID(localStorage.getItem('token'));
        return;
      } else {
        try {
          const response = await authService.fetchUserDetail(getUserId);
          this.userDetail = response.data.data;
          return response;
        } catch (err) {
          console.log(err);
          return err.response;
        }
      }
    },
  },
});
