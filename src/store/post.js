import { defineStore } from 'pinia';
import postService from '@/services/post.service';

export const usePostStore = defineStore('post', {
  state: () => ({}),
  actions: {
    async fetchAllPost(id) {
      try {
        const res = await postService.fetchAllPost(id);
        return res.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
    async sendPost(params) {
      try {
        const res = await postService.createPost(params);
        return res.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
  },
});
