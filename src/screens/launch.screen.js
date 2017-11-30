import React, { Component } from 'react';
import { Image, Animated, Easing, TouchableHighlight } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import * as Animatable from 'react-native-animatable';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

@inject('auth')
@inject('ui') 
@observer
class LaunchScreen extends Component {
  
  state = {
    showForm: false,
    logoTop: new Animated.Value(deviceHeight / 8),
    bgColor: new Animated.Value(0),
  }

  componentWillMount() {
    this.props.ui.setNavigation(this.props.navigation);
  }

  componentDidMount = async () => {
    const isAuthorized = await this.props.auth.isUserAuthorized();
    if (!isAuthorized) {
      this.animateBackground();
      setTimeout(() => {
        const { navigate } = this.props.navigation;
        navigate('Event');
      }, 1500);
    } else {
      this.setState({ showForm: true, });
      setTimeout(() => {
        this.animateLogo();
        this.animateBackground();
      }, 2000)
    }
  }

  animateLogo() {
    Animated.timing(
      this.state.logoTop,
      {
        toValue: -(theme.deviceHeight / 8),
        duration: 1000,
        easing: Easing.linear(),
      }
    ).start();
  }

  animateBackground() {
    Animated.timing(
      this.state.bgColor,
      {
        toValue: 300,
        duration: 1500,
        easing: Easing.linear(),
      }
    ).start();
  }

  onSkipPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Event');
  }

  onSignInPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  onSignUpPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login', { mode: 'signup' });
  }

  render() {

    const renderLogo = () => {
      const { logoTop } = this.state;
      return (
        <Animated.Image
          source={require('../images/logo.png')}
          style={{
            ...styles.logo,
            top: logoTop,
          }}
        />
      );
    };

    renderForm = () => (
      <Animatable.View
        style={styles.formContainer}
        animation="fadeIn"
        delay={2500}
      >
        <Button  onPress={this.onSignInPress}
          style={styles.signInBtn} block light bordered
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Button>
        <Button style={styles.skipBtn} block light
          onPress={this.onSkipPress}
        >
          <Text style={styles.lightButtonText}>Skip</Text>
          <Icon name="arrow-round-forward" style={{ color: 'white'}}/>
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.signupText}>
            Don't have an account?
          </Text>
          <TouchableHighlight onPress={this.onSignUpPress}>
            <Text style={styles.signupTextBold}> Sign up!</Text>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    );
    const bgColor = this.state.bgColor.interpolate({
      inputRange: [0, 300],
      outputRange: ['#33052f', '#000000'],
    });
    return (
      <Animatable.View
        animation="fadeIn"
        delay={250}
        style={Object.assign(styles.layout, {
          backgroundColor: bgColor,
        })}
      >
        {renderLogo()}
        {this.state.showForm ? renderForm() : null }
      </Animatable.View>
    );
  }
}
const styles = {
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
  },
  formContainer: {
    width: deviceWidth - (deviceWidth / 4),
    marginTop: deviceHeight / 2.5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily:'Monospace',
    fontSize: 17,
  },
  lightButtonText: {
    fontWeight: 'bold',
    fontFamily:'Monospace',
    fontSize: 17,
    color: 'white',
    marginLeft: 50,
  },
  skipBtn: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#9e4ed4',
  },
  signInBtn: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5,
    borderColor: '#9e4ed4',
    borderWidth: 2,
  },
  signUpContainer: {
    width: deviceWidth - (deviceWidth / 4),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: 'white',
    margin: 10,
  },
  signupTextBold: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  }
};
export default LaunchScreen;