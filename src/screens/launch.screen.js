import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('ui')
@observer
export default class LaunchScreen extends Component {
  render = () => <View><Text>Hello from {this.props.ui.title}</Text></View>
}