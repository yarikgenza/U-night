import { AsyncStorage } from 'react-native';
import { extendObservable, action } from 'mobx';
import { getFbToken } from '../utils/fb.token';
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
    }, state);
  }

  @action facebookAuth = async () => {
    try {
      const token = await getFbToken();
      const response = await api.facebookAuth(token);
      if (response.ok) {
        this.authProvider = 'facebook';
        this.isAuthorized = true;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  isUserAuthorized = async () => {
    try {
      const token = await getFbToken();
      if (token) {
        this.isAuthorized = true;
        this.authProvider = 'facebook';
        // TO-DO refresh token here to keep it up-to-date;
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}