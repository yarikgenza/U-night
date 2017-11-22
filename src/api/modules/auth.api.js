import Api from '../api';

const resource = 'auth';

/**
 * @name Class Auth
 * @extends Api
 * @method facebookAuth
 */
export default class AuthApi extends Api {
  constructor() {
    super(resource);
  }

  facebookAuth = token => fetch(`${this.backendUrl}/${this.resource}/facebook?access_token=${token}`);
}