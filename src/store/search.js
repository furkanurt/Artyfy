import { defineStore } from 'pinia';
import SearchService from '@/services/search.service';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchPost: [],
    searchPostRightPanel: [],
    searchMarketPost: [],
  }),
  actions: {
    fetchPost(params) {
      try {
        const res = SearchService.fetchSearchPost(params);
        this.searchPost = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostForRightPanel(params) {
      try {
        const res = SearchService.fetchSearchPost(params);
        this.searchPostRightPanel = res;
      } catch (err) {
        console.error(err);
      }
    },
    fetchMarketPost(params) {
      try {
        const res = SearchService.fetchSearchMarketPost(params);
        this.searchMarketPost = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});
