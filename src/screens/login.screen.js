import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import FacebookLogin from '../components/auth/fb.login';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

@inject('ui') 
@observer
class LoginScreen extends Component {

  onAuthFinish = () => {
    const { navigate } = this.props.navigation;
    navigate('Event');
  }

  render() {
    const renderLogo = () => (
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
      );

    return (
      <View style={styles.layout}>
        {renderLogo()}
        <View style={styles.formContainer}>
          <FacebookLogin onAuthFinish={this.onAuthFinish}/>
        </View>
      </View>
    );
  }
}
const styles = {
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  logo: {
    top: -(theme.deviceHeight/8),
    position: 'absolute',
  },
  formContainer: {
    width: deviceWidth - (deviceWidth / 4),
    marginTop: deviceHeight / 2.5,
  },
  signUpContainer: {
    width: deviceWidth - (deviceWidth / 4),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default LoginScreen;