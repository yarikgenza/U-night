import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Drawer from 'react-native-drawer';
import SideBar from './SideBar';

@inject('ui')
@observer
export default class DrawerWrapper extends Component {
  render() {

    const { isDrawerOpen } = this.props.ui;

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        type="static"
        openDrawerOffset={0.3}
        tapToClose
        tweenHandler={Drawer.tweenPresets.parallax}
        content={<SideBar />}
        onClose={() => this.props.ui.closeDrawer()}
        open={isDrawerOpen}
      >
        {this.props.child}
      </Drawer>
    );
  }
}