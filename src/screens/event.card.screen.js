import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EventCard extends Component {
  render() {
    const { event } = this.props.navigation.state.params;

    return (
      <View><Text>{event.name}</Text></View>
    );
  }
}

export default EventCard;