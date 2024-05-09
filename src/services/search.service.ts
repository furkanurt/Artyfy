import ArtyfyService from './artyfy.service';
import DummyService from './dummy.service';

const posts = DummyService.fetchPost();

class SearchService extends ArtyfyService {
  async fetchShopPost() {
    return await this._axios
      .get('/api/Posts/getSellableProducts')
      .then((res) => {
        return res;
      });
  }

  fetchSearchPosts(searchValue) {
    return posts.filter(({ name, userName }) =>
      [name, userName].some((val) => val.toLowerCase().includes(searchValue)),
    );
  }

  fetchSearchMarketPosts(searchValue) {
    const marketPost = this.fetchShopPost();
    return marketPost.filter(({ name, userName, content }) =>
      [name, userName, content].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }

  fetchSearchResultPost(params) {
    return posts.filter((item) => {
      if (item.id == params) return item;
    });
  }

  async fetchSearchMarketResultPost(params) {
    const marketPost = await this.fetchShopPost();
    return marketPost.filter((item) => {
      if (item.id == params) return item;
    });
  }
}

export default new SearchService();
