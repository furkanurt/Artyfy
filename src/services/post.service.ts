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
  fetchPostLike() {
    return this._axios.get('/api/Posts/like');
  }
  fetchSellablePost() {
    return this._axios.get('/api/Posts/getSellableProducts');
  }
  fetchPostSave() {
    return this._axios.get('/api/Posts/save');
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
}

export default new PostService();
