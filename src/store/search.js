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
        console.error(err);
      }
    },
    fetchShopPost() {
      this.marketPost = [];

      try {
        const res = SearchService.fetchShopPost();
        this.marketPost = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostForRightPanel(params) {
      this.searchPostRightPanel = [];

      try {
        const res = SearchService.fetchSearchPosts(params);
        this.searchPostRightPanel = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchMarketPost(params) {
      this.searchMarketPost = [];

      try {
        const res = SearchService.fetchSearchMarketPosts(params);
        this.searchMarketPost = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchResultPost(params) {
      this.fetchResPost = [];
      this.fetchMarketResPost = [];

      try {
        const res = SearchService.fetchSearchResultPost(params);
        this.fetchResPost = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchMarketResultPost(params) {
      this.fetchMarketResPost = [];
      this.fetchResPost = [];

      try {
        const res = SearchService.fetchSearchMarketResultPost(params);
        this.fetchMarketResPost = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});
