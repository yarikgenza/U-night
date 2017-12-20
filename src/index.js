import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import DrawerWrapper from './components/Drawer';
import stores from './stores';
import getTheme from './theme/components';
import { screens } from './screens';

// Define navigator
const Navigator = StackNavigator(screens, { headerMode: 'none', initialRouteName: 'Start', });

class App extends Component {
  render = () => (
    <StyleProvider style={getTheme()}>
      <Provider {...stores}>
        <DrawerWrapper
          child={<Navigator />}>
        </DrawerWrapper>
      </Provider>
    </StyleProvider>
  );
}

export { App };