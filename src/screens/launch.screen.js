import React, { Component } from 'react';
import { Image, Animated, Easing, } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import * as Animatable from 'react-native-animatable';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

@inject('ui') 
@observer
class LaunchScreen extends Component {
  
  state = {
    logoTop: new Animated.Value(deviceHeight / 8),
    bgColor: new Animated.Value(0),
  }

  componentDidMount() {
    setTimeout(() => {
      this.animateLogo();
      this.animateBackground();
    }, 2000)
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
        duration: 1000,
        easing: Easing.linear(),
      }
    ).start();
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
        <Button style={Object.assign({
          borderColor: '#9e4ed4',
          borderWidth: 2,
        },styles.button)} block light bordered>
          <Text style={styles.buttonText}>Sign in</Text>
        </Button>
        <Button style={Object.assign({
          backgroundColor: '#9e4ed4',
        }, styles.button)} block light>
          <Text style={styles.lightButtonText}>Skip</Text>
          <Icon name="arrow-round-forward" style={{ color: 'white'}}/>
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.signupText}>
            Don't have an account?
            <Text style={styles.signupTextBold}>  Sign up!</Text>
          </Text>
        </View>

      </Animatable.View>
    );

    const bgColor = this.state.bgColor.interpolate({
      inputRange: [0, 300],
      outputRange: ['#9e4ed4', '#000000'],
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
        {renderForm()}
      </Animatable.View>
    );
  }
}

const styles = {
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: theme.backgroundColor,
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
  button: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5
  },
  signUpContainer: {
    width: deviceWidth - (deviceWidth / 4),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: 'white',
  },
  signupTextBold: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  }
};

export default LaunchScreen;