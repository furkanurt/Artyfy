import axios, { type AxiosInstance } from 'axios';

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
    });

    this._setupIntereceptors();
  }

  private _setupIntereceptors() {
    this._axios.interceptors.request.use(BaseService.requestInterceptor);
  }

  static requestInterceptor(config) {
    const token = localStorage.getItem('token');

    if (token && config.headers && !config.params?.isPublic) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
}
