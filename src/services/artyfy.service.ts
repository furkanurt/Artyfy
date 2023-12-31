import BaseService from './base.service';
import config from '@/config';

export default class DummyService extends BaseService {
  constructor() {
    super({
      baseUrl: config.keycloakConfig.url,
    });
  }
}
