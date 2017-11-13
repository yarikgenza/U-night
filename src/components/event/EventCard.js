import React, { Component } from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

const styles = StyleSheet.create ({  
    MainContaiener: {
      flex: 1,  
      justifyContent: 'space-between',
    },
    Date: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: -45,
    },
    Day: {
      alignItems: 'flex-end',
    },

    DateMonth: {
      fontSize: 20,
      fontWeight: '500',

      paddingLeft: 5,
    },
    DateDay: {
      color: '#800080',
    },
    DateNum: {
      fontWeight: '500',
      fontSize: 20,
    },

    ClubName: {
      fontWeight: '500',
      fontSize: 20,
    },

    ClubRating: {
      opacity: 0.5,
    },

    TextButton: {
      fontWeight: '600',
      fontSize: 22,
      
      color: '#000000',
    },

    Time: {
      fontSize: 24,
      fontWeight:'500',
      
      lineHeight: 30,
      marginRight: 15,
      
      borderLeftWidth: 4,
      borderLeftColor: '#800080',

      paddingLeft: 10,
    },
    DoubleDot: {
      fontSize: 25,
      fontWeight:'500',
      color: '#800080',
    }
});

class EventCard extends Component {
  render () {
    return ( 
      <Card style={{flex: 0, backgroundColor: 'black'}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg'}} />
          <Body style={styles.MainContaiener}>
              <View style={styles.ClubInfo}>
                <Text style={styles.ClubName}>Malevich club</Text>
                <Text style={styles.ClubRating}>Rating:4</Text>
              </View> 
             
              <View style={styles.Date}>
                <Text style={styles.DateNum}>23</Text>
                <Text style={styles.DateMonth}>Aug</Text>
              </View>
              <View style={styles.Day}>
                <Text style={styles.DateDay}>monday</Text>
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
            <Text style={styles.TextButton}>MONDAY PARTY</Text>
          </Button> 
          <Text style={styles.Time}>
            22
          <Text style={styles.DoubleDot}>
            :
          <Text style = {styles.Time}>
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

export default EventCard;