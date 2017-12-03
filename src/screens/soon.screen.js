import React, { Component } from 'react';
import { View, Text, Icon, Button } from 'native-base';

import NavBar from '../components/NavBar';
import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

class SoonScreen extends Component {

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const { title } = this.props.navigation.state.params;

    return (
      <View style={styles.layout}>
        <NavBar title={title} left="back" leftHandler={this.onBackPress}/>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="build" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>This page is under development...</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} block light onPress={this.onBackPress}>
            <Text style={styles.buttonText}>Go back</Text>
          </Button>
         </View>
      </View>
    );
  }
}

const styles = {
  layout: {
    flex: 1,
    backgroundColor: 'black',
  },
  iconContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.25,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 120,
    color: '#9e4ed4',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 0.25,
     justifyContent: 'flex-start'
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
};

export default SoonScreen;