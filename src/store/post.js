import { defineStore } from 'pinia';
import postService from '@/services/post.service';

export const usePostStore = defineStore('user', {
  state: () => ({}),
  actions: {
    async fetchAllPost() {
      try {
        const res = await postService.fetchAllPost();
        return res.data;
      } catch (err) {
        console.log('err:', err);
        return err.response;
      }
    },
  },
});
