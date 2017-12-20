import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Container, Content, Body, Text } from 'native-base';

import NavBar from '../components/NavBar';
import components from '../components/event';
const {
  EventList,
} = components;

class EventScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { routeName } = this.props.navigation.state;

      if (routeName !== 'Event') {
        this.props.navigation.goBack();
        return false;
      }
      return true;
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <NavBar />
        <Content padder>
          <EventList {...this.props}/>
        </Content>
      </Container>
    )
  }
}

const styles = {
  container: { 
    backgroundColor: '#330033',
  }
}

export default EventScreen;
