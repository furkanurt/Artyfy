import ArtyfyService from './artyfy.service';

class PostService extends ArtyfyService {
  fetchAllPost() {
    return this._axios.get('/api/Posts/getAll');
  }
  createPost() {
    return this._axios.post('/api/Posts/create');
  }
  fetchPostDetail() {
    return this._axios.get('/api/Posts/postDetail');
  }
  fetchSellablePost() {
    // for market
    return this._axios.get('/api/Posts/getSellableProducts');
  }
  fetchSavedPosts() {
    return this._axios.get('/api/Posts/listSavedPosts');
  }
  fetchLikedPosts() {
    return this._axios.get('/api/Posts/listLikedPosts');
  }
  fetchTrendPosts() {
    return this._axios.get('/api/Posts/trendPosts');
  }
  // for the user to interact with posts
  sendPostSave() {
    return this._axios.post('/api/Posts/save');
  }
  sendPostLike() {
    return this._axios.post('/api/Posts/like');
  }
  sendPostComment() {
    return this._axios.post('/api/Comments/add');
  }
}

export default new PostService();
