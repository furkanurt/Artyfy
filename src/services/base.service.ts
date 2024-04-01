import axios, { AxiosInstance } from 'axios';
import { useUserStore } from '@/store/user';
import router from '@/router';

interface Service {}

type ServiceOptions = {
  baseUrl: string;
};

export default class BaseService implements Service {
  _axios: AxiosInstance;
  _baseUrl: string;

  constructor(options: ServiceOptions) {
    const { baseUrl } = options;
    this._baseUrl = baseUrl;

    this._axios = axios.create({
      baseURL: baseUrl,
      headers: {
        'Api-Key': 'b349098e-bc31-4946-a552-5e52b7fb2965',
        'Content-Type': 'application/json',
      },
    });

    this._setupIntereceptors();
  }

  private _setupIntereceptors() {
    this._axios.interceptors.request.use(BaseService.requestInterceptor);
    this._axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error);
        if (error.code === 401) {
          router.push('/login');
        }
        return Promise.reject(error);
      },
    );
  }

  static requestInterceptor(config) {
    const token = localStorage.getItem('token');
    if (token && config.headers && !config.params?.isPublic) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
}
