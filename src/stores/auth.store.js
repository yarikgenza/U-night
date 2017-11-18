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
        this.saveAuthData();
      }
    } catch (error) {
      console.warn(error);
    }
  }

  saveAuthData = async (provider) => {
    try {
      await AsyncStorage.setItem('authProvider', this.authProvider);
      await AsyncStorage.setItem('isAuthorized', 'true');
    } catch (err) {
      alert('smth wrong with asyncStorage: ', err);
    }
  }

}