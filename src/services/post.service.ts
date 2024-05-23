import ArtyfyService from './artyfy.service';

class PostService extends ArtyfyService {
  async fetchAllPost(id) {
    return await this._axios
      .get(`/api/Posts/getAll?userAppId=${id}`)
      .then((res) => {
        return res;
      });
  }
  async createPost(params) {
    return await this._axios.post('/api/Posts/create', params).then((res) => {
      return res;
    });
  }
  async fetchPostDetail(id) {
    return await this._axios
      .get(`/api/Posts/postDetail?postId=${id}`)
      .then((res) => {
        return res;
      });
  }
  async fetchSellablePost(id) {
    // for market
    return await this._axios
      .get(`/api/Posts/getSellableProducts?userAppId=${id}`)
      .then((res) => {
        return res;
      });
  }
  async fetchSavedPosts(id) {
    return await this._axios
      .get(`/api/Posts/listSavedPosts?userId=${id}`)
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
  async sendPostSave(postId, userId) {
    return await this._axios
      .post(`/api/Posts/save?postId=${postId}&userId=${userId}` )
      .then((res) => {
        return res;
      });
  }
  async sendPostLike(postId, userId) {
    return await this._axios.post(`/api/Posts/like?postId=${postId}&userId=${userId}`).then((res) => {
      return res;
    });
  }
  async sendPostComment(content) {
    return await this._axios.post('/api/Comments/add', content).then((res) => {
      return res;
    });
  }
  
  async fetchNotifications(userAppId) {
    return await this._axios.get(`/api/Notifications?userAppId=${userAppId}`).then((res) => {
      return res;
    });
  }
  async fetchTrendPost(id) {
    return await this._axios
      .get(`/api/Posts/trendPosts?userAppId=${id}`)
      .then((res) => {
        return res;
      });
  }

 
}

export default new PostService();
