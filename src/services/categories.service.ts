import ArtyfyService from './artyfy.service';

class CategoriesService extends ArtyfyService {
  fetchCategories() {
    return this._axios.get('/api/Categories/list');
  }
}

export default new CategoriesService();
