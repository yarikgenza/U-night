import React, { Component } from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

const styles = StyleSheet.create ({  
    MainContaiener: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    
    DateNum: {
      fontSize: 30,
      
      marginLeft: 58,
      
      borderRightWidth: 3.5,
      borderRightColor: '#C0C0C0',
    },

    ClubName: {
      fontWeight: '400',
      fontSize: 20,
    },

    ClubRating: {
      opacity: 0.5,
    },

    DateMonth: {
      fontSize: 15,
    },

    TextButton: {
      fontWeight: '600',
      fontSize: 22,
      
      color: '#000000',
      
      borderRightWidth: 4,
      borderRightColor: '#800080',
    },

    Time: {
      fontSize: 22,
      fontWeight:'500',
      
      marginRight: 15,
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
      <Card style={{flex: 0}}>
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
              </View>
               <View>
                <Text style={styles.DateMonth}>Aug</Text>
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
          <Image 
            style={{width: 25, height: 25}}
            source={{uri: 'https://cdn4.iconfinder.com/data/icons/essential-part-2/32/171-Time-128.png'}} 
          />
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