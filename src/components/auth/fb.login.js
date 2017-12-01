import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Text, Icon } from 'native-base';
import { LoginManager } from 'react-native-fbsdk';

import theme from '../../theme';

@inject('auth')
@inject('ui')
@observer
export default class FacebookLogin extends Component {

  handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        alert('login cancelled');
      } else {
        const { auth, onAuthFinish } = this.props;
        await auth.facebookAuth();
        onAuthFinish();
      }
    } catch (error) {
      console.error('Something wrong with login: ', error);
    }
  }

  render () {
    return ( 
      <Button
        block
        style={styles.button}
        onPress={this.handleFacebookLogin}
      >
        <Icon name="logo-facebook" style={styles.fbIcon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </Button>
    )
  }
}

const styles = {
  button: {
    width: theme.deviceWidth - (theme.deviceWidth / 4),
    height: theme.deviceHeight / 12,
    backgroundColor: 'rgb(52, 80, 163)',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  fbIcon: {
    fontSize: 40,
  }
};