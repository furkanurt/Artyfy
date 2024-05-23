import ArtyfyService from './artyfy.service';

class SearchService extends ArtyfyService {
  async fetchShopPost() {
    return await this._axios
      .get('/api/Posts/getSellableProducts')
      .then((res) => {
        return res;
      });
  }

  fetchSearchMarketPosts(searchValue) {
    const marketPost = this.fetchShopPost();
    return marketPost.filter(({ name, userName, content }) =>
      [name, userName, content].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }

  async fetchSearchMarketResultPost(params) {
    const marketPost = await this.fetchShopPost();
    return marketPost.filter((item) => {
      if (item.id == params) return item;
    });
  }
}

export default new SearchService();
