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

  onLeftPress = () => {
    const { leftHandler } = this.props;
    if (!leftHandler) {
      this.onMenuPress();
    } else {
      leftHandler();
    }
  }

  render () {

    const { title, left, leftHandler } = this.props;

    const renderLeftIcon = () => {
      if (left === 'back') {
        return <Icon name='md-arrow-back' />
      } else if (left === 'close') {
        return <Icon name='md-close' />
      } else {
        return <Icon name='menu' />
      }
    }

    return (
      <Header>
      <Left>
          <Button transparent onPress={this.onLeftPress}>
            {renderLeftIcon()}
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