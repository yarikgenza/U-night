import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { View } from 'react-native';
import { List, Spinner } from 'native-base';
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
        <EventCard data={item} key={item._id} {...this.props}/>
      ));
    }

    return (
      <List>
        { this.isLoading ? <Spinner /> : renderEvents() }
      </List>
    );
  }
}

export default EventList;
