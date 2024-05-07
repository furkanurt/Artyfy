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
  //get by user id
  async fetchUserDetail(params) {
    return await this._axios
      .get(`/api/Auth/getByUserId?userId=${params}`)
      .then((res) => {
        return res;
      });
  }
  async resetPassword(params) {
    return await this._axios
      .post('/api/Auth/resetPassword', params)
      .then((res) => {
        return res;
      });
  }
  async updatePassword(params) {
    return await this._axios
      .post('/api/Auth/updatePassword', params)
      .then((res) => {
        return res;
      });
  }
  async updateUserProfile(params) {
    return await this._axios
      .post('/api/Auth/updateUserProfile', params)
      .then((res) => {
        return res;
      });
  }
}

export default new AuthService();
