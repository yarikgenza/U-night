import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import * as Animatable from 'react-native-animatable';

import NavBar from '../components/NavBar';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

class EventCardScreen extends Component {
  render() {
    const { event } = this.props.navigation.state.params;

    return (
      <Container>
        <NavBar title={event.name} />
        <Content>
          <View style={styles.imgContainer}>
            <Animatable.Image animation="zoomInUp"source={{uri: event.event.photoUrl }} style={styles.imgContainer}/>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  imgContainer: {
    width: deviceWidth,
    height: deviceHeight / 3,
  }
};

export default EventCardScreen;