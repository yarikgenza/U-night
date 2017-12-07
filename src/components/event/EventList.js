import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { View } from 'react-native';
import { List, Spinner, Text } from 'native-base';
import EventCard from './EventCard';

@inject('event')
@observer
class EventList extends Component {

  componentDidMount = async () => {
    try {
      const { event } = this.props;
      this.events = await event.getList();
      this.isLoading = false;
    } catch (error) {
      alert('something went wrong =(');
    }
  }

  @observable isLoading = true;
  @observable events = [];

  render() {

    const renderEvents = () => {
      const { events } = this;
      return events.map(item => (
        <View key={item._id}>
          <EventCard item={item} key={item._id} {...this.props}/>
          <Text key={item._id} style={styles.tomorrowText}>Tomorrow</Text>
        </View>
      ));
    }

    return (
      <List>
        { this.isLoading ? <Spinner /> : renderEvents() }
      </List>
    );
  }
}

const styles = {
  tomorrowText: {
    color: 'white',
    margin: 10,
    alignSelf: 'center'
  }
}

export default EventList;
