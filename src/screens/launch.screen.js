import React, { Component } from 'react';
import { Image, Animated, Easing, } from 'react-native';
import { View, Text, Button, Item, Input, Form, Label } from 'native-base';
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
  }

  componentDidMount() {
    setTimeout(() => {
      this.animateLogo();
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
        { /* <Button style={styles.button} block light bordered>
          <Text style={styles.buttonText}>Ввійти</Text>
        </Button>
        <Button style={styles.button} block light>
          <Text style={styles.lightButtonText}>Зареєструватись</Text>
    </Button> */ }

      </Animatable.View>
    );

    return (
      <Animatable.View
        animation="fadeIn"
        delay={250}
        style={styles.layout}
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
    backgroundColor: theme.backgroundColor,
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
    fontSize: 20,
  },
  lightButtonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  button: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5
  },
  input: {
    color: 'white',
  }
};

export default LaunchScreen;