import React, { Component } from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

class EventCard extends Component {
  render () {
    return ( 
      <Card style={{flex: 0, backgroundColor: 'black'}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg'}} />
          <Body style={styles.mainContaiener}>
              <View style={styles.clubInfo}>
                <Text style={styles.clubName}>Malevich club</Text>
                <Text style={styles.clubRating}>Rating:4</Text>
              </View> 
             
              <View style={styles.date}>
                <Text style={styles.dateNum}>23</Text>
                <Text style={styles.dateMonth}>Aug</Text>
              </View>
              <View style={styles.day}>
                <Text style={styles.dateDay}>monday</Text>
              </View>   
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        
          <Image source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t35.0-12/23516240_1967565000177123_222602682_o.jpg?oh=4dfeb504d2a578ff8721cbeaf72634e6&oe=5A090654'}} style={{height: 200, width: 350, flex: 1}}/>
        
      </CardItem>
      <CardItem>
        <Left style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Button transparent>
            <Text style={styles.textButton}>MONDAY PARTY</Text>
          </Button> 
          <Text style={styles.time}>
            22
          <Text style={styles.doubleDot}>
            :
          <Text style ={styles.time}>
            22
        </Text>
        </Text>
      </Text>
        </Left>
      </CardItem>
    </Card>
    );
  }
}

const styles = StyleSheet.create ({  
  mainContaiener: {
    flex: 1,  
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -45,
  },
  day: {
    alignItems: 'flex-end',
  },

  dateMonth: {
    fontSize: 20,
    fontWeight: '500',

    paddingLeft: 5,
  },
  dateDay: {
    color: '#800080',
  },
  dateNum: {
    fontWeight: '500',
    fontSize: 20,
  },

  clubName: {
    fontWeight: '500',
    fontSize: 20,
  },

  clubRating: {
    opacity: 0.5,
  },

  textButton: {
    fontWeight: '600',
    fontSize: 22,
    
    color: '#000000',
  },

  time: {
    fontSize: 24,
    fontWeight:'500',
    
    lineHeight: 30,
    marginRight: 15,
    
    borderLeftWidth: 4,
    borderLeftColor: '#800080',

    paddingLeft: 10,
  },
  doubleDot: {
    fontSize: 25,
    fontWeight:'500',
    color: '#800080',
  }
});

export default EventCard;