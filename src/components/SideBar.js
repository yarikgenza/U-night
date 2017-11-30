import React, { Component } from 'react';
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
    name: 'Leaderboard',
    route: 'Leaderboard',
    icon: 'md-podium',
  },
  {
    name: 'Profile',
    route: 'profileScreen',
    icon: 'ios-contact',
  },
];

const avaUrl = 'https://scontent.flwo1-1.fna.fbcdn.net/v/t35.0-12/24251309_1975643022702654_91538323_o.jpg?oh=4f1ff6131abaebfc0476a6bc08268ee3&oe=5A22C612';

class SideBar extends Component {

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
              <ListItem button>
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