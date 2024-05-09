import ArtyfyService from './artyfy.service';

class CategoriesService extends ArtyfyService {
  async fetchCategories() {
    return await this._axios.get('/api/Categories/list');
  }
}

export default new CategoriesService();
