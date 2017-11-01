import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './theme/components';

class App extends Component {
  render = () => (
    <StyleProvider style={getTheme()}>
          <Container>
            <Content>
              <Text>
                Hello world!
                (U-night app)
              </Text>
            </Content>
          </Container>
        </StyleProvider>
  );
}

export { App }; 