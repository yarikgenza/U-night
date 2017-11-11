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
          <Text style={{
            alignSelf: 'center',
            margin: 10,
          }}>Tomorrow</Text>
          <EventList/>
        </Content>
      </Container>
    )
  }
}

const styles = {
  container: { 
  }
}

export default EventScreen;
