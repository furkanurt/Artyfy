import ArtyfyService from './artyfy.service';
import DummyService from './dummy.service';

const posts = DummyService.fetchPost();

class SearchService extends ArtyfyService {
  fetchShopPost() {
    return posts.filter((item) => {
      if (item.isOnSale === true) {
        return item;
      }
    });
  }

  fetchSearchPosts(searchValue) {
    return posts.filter(({ name, userName, postDescription }) =>
      [name, userName, postDescription].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }

  fetchSearchMarketPosts(searchValue) {
    const marketPost = this.fetchShopPost();
    return marketPost.filter(({ name, userName, postDescription }) =>
      [name, userName, postDescription].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }

  fetchSearchResultPost(params) {
    return posts.filter((item) => {
      if (item.id == params) return item;
    });
  }

  fetchSearchMarketResultPost(params) {
    const marketPost = this.fetchShopPost();
    return marketPost.filter((item) => {
      if (item.id == params) return item;
    });
  }
}

export default new SearchService();
