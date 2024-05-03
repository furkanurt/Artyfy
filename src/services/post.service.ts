import ArtyfyService from './artyfy.service';

class PostService extends ArtyfyService {
  async fetchAllPost() {
    return await this._axios.get('/api/Posts/getAll').then((res) => {
      return res;
    });
  }
  async createPost(params) {
    return await this._axios.post('/api/Posts/create', params).then((res) => {
      return res;
    });
  }
  async fetchPostDetail() {
    return await this._axios.get('/api/Posts/postDetail').then((res) => {
      return res;
    });
  }
  async fetchSellablePost() {
    // for market
    return await this._axios
      .get('/api/Posts/getSellableProducts')
      .then((res) => {
        return res;
      });
  }
  async fetchSavedPosts() {
    return await this._axios.get('/api/Posts/listSavedPosts').then((res) => {
      return res;
    });
  }
  async fetchLikedPosts() {
    return await this._axios.get('/api/Posts/listLikedPosts').then((res) => {
      return res;
    });
  }
  async fetchTrendPosts() {
    return await this._axios.get('/api/Posts/trendPosts').then((res) => {
      return res;
    });
  }
  // for the user to interact with posts
  async sendPostSave() {
    return await this._axios.post('/api/Posts/save').then((res) => {
      return res;
    });
  }
  async sendPostLike() {
    return await this._axios.post('/api/Posts/like').then((res) => {
      return res;
    });
  }
  async sendPostComment() {
    return await this._axios.post('/api/Comments/add').then((res) => {
      return res;
    });
  }
}

export default new PostService();
