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
    async likePost(postId, userId) {
      try {
        const response = await 
        postService.sendPostLike(postId, userId);
        return response.data;
      } catch (err) {
        console.error('Error liking post:', err);
        return { err };
      }
    },
    async bookmarkedPost(postId, userId) {
      try {
        const res = await 
        postService.sendPostSave(postId, userId);
        return res.data;
      } catch (err) {
        console.error('Error saving data:', err);
        return err;
      }
    },
    async commentPost(content) {
      try {
        const res = await 
        postService.sendPostComment(content);
        return res.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
    async notificationPage(userAppId) {
      try {
        const res = await 
        postService.fetchNotifications(userAppId);
        return res.data;
      } catch (err) {
        console.error('err:', err.response.data);
        return err.response.data;
      }
    },
    async fetchSellablePost() {
      try {
        const res = await postService.fetchSellablePost();
        this.postForMarket = res.data.data;
        return res.data.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
});
