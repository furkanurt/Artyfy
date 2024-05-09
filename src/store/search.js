import { defineStore } from 'pinia';
import SearchService from '@/services/search.service';

export const useSearchStore = defineStore('search', {
  state: () => ({
    marketPost: [],
    searchPost: [],
    searchPostRightPanel: [],
    searchMarketPost: [],
    fetchResPost: [],
    fetchMarketResPost: [],
  }),
  actions: {
    fetchPost(params) {
      this.searchPost = [];

      try {
        const res = SearchService.fetchSearchPosts(params);
        this.searchPost = res;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchShopPost() {
      try {
        const res = await SearchService.fetchShopPost();
        this.marketPost = res.data.data;
        return res.data.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    fetchPostForRightPanel(params) {
      this.searchPostRightPanel = [];

      try {
        const res = SearchService.fetchSearchPosts(params);
        this.searchPostRightPanel = res;
      } catch (err) {
        console.log(err);
      }
    },
    fetchMarketPost(params) {
      this.searchMarketPost = [];

      try {
        const res = SearchService.fetchSearchMarketPosts(params);
        this.searchMarketPost = res;
      } catch (err) {
        console.log(err);
      }
    },
    fetchResultPost(params) {
      try {
        const res = SearchService.fetchSearchResultPost(params);
        this.fetchResPost = res;
        return res;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    fetchMarketResultPost(params) {
      try {
        const res = SearchService.fetchSearchMarketResultPost(params);
        this.fetchMarketResPost = res;
        return res;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
});
