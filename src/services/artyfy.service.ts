import BaseService from './base.service';
import config from '@/config';

export default class ArtyfyService extends BaseService {
  constructor() {
    super({
      baseUrl: config.keycloakConfig.url,
    });
  }
}
