import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, View, Left, Right, Body, Button } from 'native-base';
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
  club: {
    name: 'Malevich club',
    logoUrl: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg',
    rating: 4.5,
  },
};

class EventCardScreen extends Component {

  onBookPress = () => { console.warn('not implemented now')};

  render() {
    const { event } = this.props.navigation.state.params;

    return (
      <Container>
        <NavBar title={event.name} />
        <Content>
          <View style={styles.imgContainer}>
            <Animatable.Image delay={150}animation="bounceInUp" useNativeDriver source={{uri: event.photoUrl }} style={styles.imgContainer}/>
          </View>
          <Animatable.View animation="fadeIn" delay={100} style={styles.clubContainer}>
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
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={200}>
           <Text style={styles.eventName}>{event.name}</Text>
           <CardItem statyle={styles.describeEvent}>
              <Text style={styles.describeText}>{event.description}</Text>
          </CardItem>
          <Text style={styles.additionalInfo}> Price: 5$   Age:  </Text> 
          <Button full large style={styles.btnBook}> 
            <Text style={styles.btnText}> Book a table </Text>
          </Button>
          </Animatable.View>
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
  },
  eventName: {
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  
  describeText: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingBottom: 15,
    fontSize: 19,
  },
  additionalInfo: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 17,
    textAlign: 'center',
  },
  btnBook: {
    borderRadius: 0,
    backgroundColor: '#7515a3',
  },
  btnText: {
    fontSize: 17,
    lineHeight: -1,
  }
};

export default EventCardScreen;