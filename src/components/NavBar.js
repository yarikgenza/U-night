import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class NavBar extends Component {
  render () {
    return (
      <Container>
      <Header>
        <Left style={{ flex: 1, }}>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={{ flex: 1, }}>
          <Title>Events</Title>
        </Body>
        <Right style={{ flex: 1, }}>
        </Right>
      </Header>
    </Container>
    );
  }
}

export default NavBar;