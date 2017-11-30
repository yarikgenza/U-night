import React, { Component } from 'react';
import { inject, } from 'mobx-react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

@inject('ui')
class NavBar extends Component {

  onMenuPress = () => {
    const { ui: { isDrawerOpen } } = this.props;
    if (!isDrawerOpen) {
      this.props.ui.openDrawer();
    } else {
      this.props.ui.closeDrawer();
    }
  }

  render () {

    const { title } = this.props;

    return (
      <Header>
      <Left>
          <Button transparent onPress={this.onMenuPress}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={{ flex: 1}}>
          <Title>{title || 'Events'}</Title>
        </Body>
        <Right style={{ flex: 0.5}}></Right>
      </Header>
    );
  }
}

export default NavBar;