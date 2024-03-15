import ArtyfyService from './artyfy.service';
import DummyService from './dummy.service';

const posts = DummyService.fetchPost();
const marketPost = DummyService.fetchShopProduct();

class SearchService extends ArtyfyService {
  fetchSearchPost(searchValue) {
    return posts.filter(({ name, userName, postDescription }) =>
      [name, userName, postDescription].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }

  fetchSearchMarketPost(searchValue) {
    return marketPost.filter(({ productDescription, userName }) =>
      [productDescription, userName].some((val) =>
        val.toLowerCase().includes(searchValue),
      ),
    );
  }
}

export default new SearchService();
