import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Text, Icon } from 'native-base';
import { LoginManager, AccessToken } from 'react-native-fbsdk'

import theme from '../../theme';

const FB_PERMISSIONS = ['public_profile', 'email'];

@inject('ui')
@observer
export default class FacebookLogin extends Component {

  handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(FB_PERMISSIONS);

      if (result.isCancelled) {
        alert('login cancelled');
      } else {
        this.getToken();
      }

    } catch (error) {
      console.error('Something wrong with login: ', error);
    }
  }

  getToken = async () => {
    try {
      const data = await AccessToken.getCurrentAccessToken();
      const token = data.accessToken.toString();
      this.registerToken(token);
    } catch (error) {
      console.error('smth wrong with token', error);
    }
  }

  @action registerToken = (token) => {
    alert(`Token: ${token}`);
  }

  render () {
    return ( 
      <Button
        block
        style={styles.button}
        onPress={this.handleFacebookLogin}
      >
        <Icon name="logo-facebook" style={styles.fbIcon} />
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Button>
    )
  }
}

const styles = {
  button: {
    width: (theme.deviceWidth - theme.deviceWidth / 4),
    height: theme.deviceHeight / 12,
    backgroundColor: 'rgb(52, 80, 163)',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17
  },
  fbIcon: {
    fontSize: 40,
  }
};