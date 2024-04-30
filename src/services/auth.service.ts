import ArtyfyService from './artyfy.service';

class AuthService extends ArtyfyService {
  async registerUser(params) {
    return await this._axios.post('/api/Auth/register', params).then((res) => {
      return res;
    });
  }
  async loginUser(params) {
    return await this._axios.post('/api/Auth/login', params).then((res) => {
      return res;
    });
  }
  async fetchUserDetail(params) {
    return await this._axios
      .get(`/api/Auth/getByUserId?userId=${params}`)
      .then((res) => {
        return res;
      });
  }
}

export default new AuthService();
