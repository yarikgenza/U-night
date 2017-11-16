import { extendObservable, action } from 'mobx';

/**
 * @class Auth
 */
export default class Auth {
  constructor(state = {}) {
    extendObservable(this, {
      isAuthorized: false,
      authProvider: '',
      token: '',
    }, state);
  }

  @action
  authorize(token) {
    //logic here..
  }
}