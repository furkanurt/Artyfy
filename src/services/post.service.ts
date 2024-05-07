import ArtyfyService from './artyfy.service';

class PostService extends ArtyfyService {
  async fetchAllPost(id) {
    return await this._axios.get('/api/Posts/getAll', id).then((res) => {
      return res;
    });
  }
  async createPost(params) {
    return await this._axios.post('/api/Posts/create', params).then((res) => {
      return res;
    });
  }
  async fetchPostDetail(id) {
    return await this._axios.get('/api/Posts/postDetail', id).then((res) => {
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
  async fetchSavedPosts(id) {
    return await this._axios
      .get('/api/Posts/listSavedPosts', id)
      .then((res) => {
        return res;
      });
  }
  async fetchLikedPosts(id) {
    return await this._axios
      .get('/api/Posts/listLikedPosts', id)
      .then((res) => {
        return res;
      });
  }
  async fetchTrendPosts() {
    return await this._axios.get('/api/Posts/trendPosts').then((res) => {
      return res;
    });
  }
  // for the user to interact with posts
  async sendPostSave(params) {
    return await this._axios.post('/api/Posts/save', params).then((res) => {
      return res;
    });
  }
  async sendPostLike(params) {
    return await this._axios.post('/api/Posts/like', params).then((res) => {
      return res;
    });
  }
  async sendPostComment(params) {
    return await this._axios.post('/api/Comments/add', params).then((res) => {
      return res;
    });
  }

  // NOTIFICATIONS
  async fetchNotifications(id) {
    return await this._axios.get('/api/Notifications', id).then((res) => {
      return res;
    });
  }
}

export default new PostService();
