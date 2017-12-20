import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { Container, Content, View, List, Text, ListItem, Icon, Left, Right, Thumbnail } from 'native-base';

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

const rows = [
  {
    name: 'Events',
    route: 'Event',
    icon: 'ios-browsers',
  },
  {
    name: 'Scan code',
    route: 'Scan',
    icon: 'md-qr-scanner',
  },
  {
    name: 'Clubs',
    route: 'Clubs',
    icon: 'md-wine',
  },
  {
    name: 'Offers',
    route: 'Offers',
    icon: 'md-cube',
  },
  {
    name: 'Profile',
    route: 'UserProfile',
    icon: 'ios-contact',
  }, 
  {
    name: 'Leaderboard',
    route: 'Leaderboard',
    icon: 'md-podium',
  },
];

const avaUrl = 'https://cdn1.savepice.ru/uploads/2017/12/20/205cb733f1d1ad2e0983ec4e463ed0ed-full.jpg';

@inject('ui')
class SideBar extends Component {

  onRoutePress = (name) => {
    const { ui } = this.props;
    ui.closeDrawer();
    ui.navigation.navigate(name);
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff' }}
        >
        <View style={styles.menuHeader}>
          <Thumbnail style={styles.avatar} source={{uri: avaUrl }} />
          <Text style={styles.userName}>Yarik Genza</Text>
          <Text style={styles.userStatus}>U-nighter</Text>
        </View>
         <List
            dataArray={rows} renderRow={row => (
              <ListItem button onPress={() => this.onRoutePress(row.route)}>
                <Left>
                  <Icon active name={row.icon} style={{ color: 'black', fontSize: 26, width: 30 }} />
                  <Text>{row.name}</Text>
                </Left>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  menuHeader: {
    backgroundColor: 'black',
    height: deviceHeight / 2.5,
    alignItems: 'center',
  },
  avatar: {
    marginTop: 30,
    width: deviceWidth / 3,
    height: deviceHeight / 5,
    borderRadius: deviceHeight / 4,
    borderWidth: 3,
    borderColor: 'rgb(130, 0, 141)',
  },
  userName: {
    marginTop: 15,
    color: 'white',
    fontSize: 22,
  },
  userStatus: {
    marginTop: 15,
    color: '#FC29CE',
    fontSize: 17,
  }
};

export default SideBar;