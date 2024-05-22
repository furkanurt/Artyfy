import { defineStore } from 'pinia';
import postService from '@/services/post.service';

export const usePostStore = defineStore('post', {
  state: () => ({
    postsForUser: [],
    postDetail: [],
    postForMarket: [],
  }),
  actions: {
    async fetchAllPost(id) {
      try {
        const res = await postService.fetchAllPost(id);
        this.postsForUser = res.data.data;
        return res.data.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
    async fetchPostDetail(id) {
      try {
        const res = await postService.fetchPostDetail(id);
        this.postDetail = res.data.data;
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
    async sendSave(postId, userId) {
      try {
        const res = await postService.sendPostSave(postId, userId);
        return res.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
    async fetchSellablePost(id) {
      try {
        const res = await postService.fetchSellablePost(id);
        this.postForMarket = res.data.data;
        return res.data.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    async fetchSavedPost(id) {
      try {
        const res = await postService.fetchSavedPosts(id);
        return res.data.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
});
