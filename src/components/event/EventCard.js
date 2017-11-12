import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

class EventCard extends Component {
  render () {
    return ( 
      <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg'}} />
          <Body>
            <Text>Malevich club </Text>
            <Text note>Rating: 4.5</Text>
          </Body>
        </Left>
        <Right>
            <Text style={{ fontSize: 20 }}>17 Aug</Text>
            <Text style={{ color: '#9e4ed4'}}>Monday</Text>
        </Right>
      </CardItem>
      <CardItem cardBody>
          <Image source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t35.0-12/23516240_1967565000177123_222602682_o.jpg?oh=4dfeb504d2a578ff8721cbeaf72634e6&oe=5A090654'}} style={{height: 200, width: 350, flex: 1}}/>
      </CardItem>
      <CardItem>
        <Left>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>MONDAY PARTY</Text>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="clock" style={{ fontSize: 35, color: 'black'}}/>
            <Text style={{ fontSize: 30, color: 'black',
          lineHeight: 35, fontWeight: '300',
          }}>22:00</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
    );
  }
}

export default EventCard;