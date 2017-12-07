import React, { Component } from 'react';
import { Image,  StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

import * as dateUtil from '../../utils/date';
const {
  getDateHour,
  getDateMinute,
  getDayNumber,
  getMonthText,
  getWeekDayText,
} = dateUtil;

class EventCard extends Component {

  handleEventPress() {
    const { navigate } = this.props.navigation;
    navigate('EventCard', {
      event: this.props.item,
    });
  }

  handleClubPress()  {
    const { navigate } = this.props.navigation;
    navigate('Club', {
      club: this.props.item.owner,
    });
  }

  render () {

    const { item } = this.props;

    return (
      <Card style={{ flex: 0 }}>
      <TouchableWithoutFeedback onPress={() => this.handleClubPress()}>
      <View>
      <CardItem>
        <Left>
           <Thumbnail source={{uri: item.owner.logoUrl }} />
           <Body>
             <Text>{item.owner.name}</Text>
             <Text note>Rating: 5</Text>
           </Body>
         </Left>
         <Right>
           <Text style={styles.date}>{getDayNumber(item.startAt)} {getMonthText(item.startAt)}</Text>
           <View style={styles.day}>
            <Text style={styles.dateDay}>{getWeekDayText(item.startAt)}</Text>
          </View>
         </Right>
      </CardItem>
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => this.handleEventPress()}>
       <View>
        <CardItem cardBody>
          <Image source={{uri: item.photoUrl }} style={styles.bodyImage}/>
        </CardItem>
        <CardItem style={{flex: 1}}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={{marginLeft: 'auto'}}>
          <Text style={styles.time}>
            {getDateHour(item.startAt)}
            <Text style={styles.doubleDot}>:
              <Text style={styles.time}>{getDateMinute(item.startAt)}</Text>
            </Text>
          </Text>
        </View>
      </CardItem>
      </View>
      </TouchableWithoutFeedback>
    </Card>
    );
  }
}

const styles = StyleSheet.create ({  
  mainContaiener: {
    flex: 1,  
    justifyContent: 'space-between',
  },
  bodyImage: {
    height: 200,
    width: 350,
    flex: 1,
  },
  date: {
    fontSize: 21,
  },
  dateDay: {
    color: '#800080',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 21,
    color: '#000000',
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
});

export default EventCard;