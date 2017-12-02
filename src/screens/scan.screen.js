import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, Button } from 'native-base';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Camera from 'react-native-camera';
import * as Animatable from 'react-native-animatable';

import NavBar from '../components/NavBar';
import ScanResult from '../components/scan/scan.result';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

@observer
class Scan extends Component {

  @observable show = 'start';
  @observable code = '';

  onScanPress = () => {
    this.show = 'scanner';
  }

  handleClose = () => {
    this.show = 'start';
  }

  onCodeRead = ({ data }) => {
    const { navigation } = this.props;
    this.code = data;
    this.show = 'result';
  }

  onDonePress() {
    const { navigation } = this.props;
    navigation.navigate('Event');
  }

  onBackPress = () => {
    this.show = 'scanner';
  }

  render() {
    const renderScanner = () => (
      <View style={styles.container}>
        <NavBar title={'Scanning QR-code'} left="close" leftHandler={() => this.handleClose()}/>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          barCodeTypes={['qr']}
          onBarCodeRead={data => this.onCodeRead(data)}
          style={styles.preview}
          type={'back'}
          aspect={Camera.constants.Aspect.fill}
        >
        <View style={styles.reactangleContainer}>
          <Animatable.View animation="fadeIn" delay={500} style={styles.rectangle}>
            <View style={styles.rectangleColor} />
            <View style={styles.topLeft} />
            <View style={styles.topRight} />
            <View style={styles.bottomLeft} />
            <View style={styles.bottomRight} />
          </Animatable.View>
        </View>
        </Camera>
      </View>
    );

    const renderStartScreen = () => (
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
          <Button style={styles.button} block light
            onPress={this.onScanPress}
           >
            <Text style={styles.buttonText}>Scan QR-code</Text>
          </Button>
        </View>
      </View>
    );

    if (this.show === 'scanner') {
      return renderScanner();
    } else if (this.show === 'result') {
      return <ScanResult code={this.code} onBackPress={() => this.onBackPress()} onDonePress={() => this.onDonePress()}/>
    } else {
      return renderStartScreen();
    }
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
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
  },
  // QR scanner rectangle
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'transparent',
},
rectangle: {
    borderLeftColor: 'rgba(0, 0, 0, .0)',
    borderRightColor: 'rgba(0, 0, 0, .0)',
    borderTopColor: 'rgba(0, 0, 0, .0)',
    borderBottomColor: 'rgba(0, 0, 0, .0)',
    borderLeftWidth: deviceWidth / 5,
    borderRightWidth: deviceWidth / 5,
    borderTopWidth: deviceHeight / 2,
    borderBottomWidth: deviceHeight / 4
},
rectangleColor: {
    height: 250,
    width: 250,
    //backgroundColor: 'transparent'
},
topLeft: {
    width: 50,
    height: 50,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    left: -1,
    top: -1,
    borderLeftColor: '#9e4ed4',
    borderTopColor: '#9e4ed4'
},
topRight: {
    width: 50,
    height: 50,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    right: -1,
    top: -1,
    borderRightColor: '#9e4ed4',
    borderTopColor: '#9e4ed4'
},
bottomLeft: {
    width: 50,
    height: 50,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    left: -1,
    bottom: -1,
    borderLeftColor: '#9e4ed4',
    borderBottomColor: '#9e4ed4'
},
bottomRight: {
    width: 50,
    height: 50,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    right: -1,
    bottom: -1,
    borderRightColor: '#9e4ed4',
    borderBottomColor: '#9e4ed4'
},
};

export default Scan;