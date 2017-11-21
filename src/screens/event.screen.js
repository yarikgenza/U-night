import React, { Component } from 'react';
import { Container, Content, Body, Text } from 'native-base';

import NavBar from '../components/NavBar';
import components from '../components/event';
const {
  EventList,
} = components;

class EventScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <NavBar />
        <Content padder>
          <EventList/>
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
