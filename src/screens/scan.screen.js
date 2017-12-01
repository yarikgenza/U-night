import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, Button } from 'native-base';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Camera from 'react-native-camera';
import * as Animatable from 'react-native-animatable';

import NavBar from '../components/NavBar';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

@observer
class Scan extends Component {

  @observable  showScanner = false;
  @observable imgCode = 0;

  render() {
    const renderScanner = () => (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        />
      </View>
    );

    return this.showScanner ? renderScanner() : (
      <View style={styles.layout}>
        <NavBar title='Scan code' />
        <Animatable.Image
          style={styles.image}
          delay={300}
          animation="pulse"
          iterationCount="infinite"
          useNativeDriver
          source={require('../images/qr-code-2.png')}
        />
        <View style={styles.offerTextContainer}>
          <Text style={styles.offerText}>The best offers from partner clubs</Text>
          <Text style={styles.offerText}>are available for you!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} block light>
            <Text style={styles.buttonText}>Scan QR-code</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    marginTop: 50,
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  offerTextContainer: {
    flex: 0.45,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  offerText: {
    color: '#8c9193',
    fontSize: 19,
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 5,
    alignSelf: 'center',
    width: deviceWidth - (deviceWidth / 4),
    backgroundColor: '#9e4ed4',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
};

export default Scan;