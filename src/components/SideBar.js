import React, { Component } from 'react';
import { Container, Content, View, List, Text, ListItem, Icon, Left, Right } from 'native-base';

const rows = [
  {
    name: 'Places',
    route: 'placesScreen',
    icon: 'ios-pin',
  },
  {
    name: 'Events',
    route: 'eventsScreen',
    icon: 'flag',
  },
  {
    name: 'History',
    route: 'historyScreen',
    icon: 'md-checkmark-circle-outline',
  },
  {
    name: 'Profile',
    route: 'profileScreen',
    icon: 'ios-contact',
  },
  {
    name: 'Settings',
    route: 'settingsScreen',
    icon: 'ios-settings',
  },
  {
    name: 'Help',
    route: 'heplScreen',
    icon: 'ios-help-circle',
  },
];

class SideBar extends Component {

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff' }}
        >
         <Text>Hello from drawer</Text>
        </Content>
      </Container>
    );
  }
}

export default SideBar;