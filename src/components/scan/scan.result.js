import React, { Component } from 'react';
import { View, Text, Spinner, Icon, Button } from 'native-base';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import NavBar from '../NavBar';
import theme from '../../theme';
const { deviceHeight, deviceWidth } = theme;

@observer
class ScanResult extends Component {

  @observable isLoading = true;

  componentDidMount() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  render() {

    const renderContent = () => (
      <View style={{ flex: 1 }}>
        <View style={styles.successIconContainer}>
          <Icon style={styles.icon} name="md-wine" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Congratulations!</Text>
          <Text style={styles.text}>You have won a free cocktail</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} block light onPress={this.props.onDonePress}>
            <Text style={styles.buttonText}>Done</Text>
          </Button>
        </View>
      </View>
    );

    return (
      <View style={styles.layout}>
        <NavBar title="QR-scan result" left="back" leftHandler={this.props.onBackPress}/>
        { this.isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner color="white" />
          </View>
        ) : renderContent()}
      </View>
    )
  }
}

const styles = {
  layout: {
    flex: 1,
    backgroundColor: 'black',
  },
  successIconContainer: {
    flex: 0.5,
    justifyContent: 'center'
  },
  textContainer: {
    flex: 0.25,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 150,
    color: '#9e4ed4',
  },
  text: {
    color: 'white',
    fontSize: 18,
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
}

export default ScanResult;