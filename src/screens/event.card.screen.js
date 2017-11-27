import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, View, Left, Right, Body } from 'native-base';
import * as Animatable from 'react-native-animatable';

import NavBar from '../components/NavBar';
import * as dateUtil from '../utils/date';
const {
  getDateHour,
  getDateMinute,
  getDayNumber,
  getMonthText,
  getWeekDayText,
} = dateUtil;

import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

const DEFAULT_VALUES = {
  description: 'Last Monday Party з Igor Volkoff та його live club sax show. Відірвись так, ніби це твій останній понеділок! Вхід - безкоштовно.',
  club: {
    name: 'Malevich club',
    logoUrl: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg',
    rating: 4.5,
  },
};

class EventCardScreen extends Component {
  render() {
    const { event } = this.props.navigation.state.params;

    return (
      <Container>
        <NavBar title={event.name} />
        <Content>
          <View style={styles.imgContainer}>
            <Animatable.Image animation="zoomInUp" source={{uri: event.event.photoUrl }} style={styles.imgContainer}/>
          </View>
          <View style={styles.clubContainer}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: DEFAULT_VALUES.club.logoUrl }} />
           <Body>
             <Text>{DEFAULT_VALUES.club.name}</Text>
             <Text note>Rating: {DEFAULT_VALUES.club.rating}</Text>
           </Body>
         </Left>
         <Right>
           <Text style={styles.date}>{getDayNumber(event.startAt)} {getMonthText(event.startAt)}</Text>
           <View style={styles.day}>
            <Text style={styles.dateDay}>23:00 - 04:00</Text>
          </View>
         </Right>
        </CardItem>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  imgContainer: {
    width: deviceWidth,
    height: deviceHeight / 3,
  },
  date: {
    fontSize: 21,
  },
  dateDay: {
    color: '#800080',
  },
  time: {
    fontSize: 24,
    fontWeight:'500',
    lineHeight: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#800080',
    paddingLeft: 10
  },
  doubleDot: {
    fontSize: 25,
    fontWeight:'500',
    color: '#800080',
  }
};

export default EventCardScreen;