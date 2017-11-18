import { extendObservable, action } from 'mobx';
import APIs from '../api';

const { AuthApi } = APIs;
const api = new AuthApi;

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

  @action facebookAuth = async (token) => {
    try {
      const response = await api.facebookAuth(token);
      if (response.ok) {
        // write provider and token to state
        // write provider and token to asyncStorage
      }
    } catch (error) {
      console.warn(error);
    }
  }
}