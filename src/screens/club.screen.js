import React, { Component } from 'react';
import { Image, BackHandler } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, View, Left, Right, Body, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';

import NavBar from '../components/NavBar';
import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

class ClubScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  /* onBookPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Soon', { title: 'Book a table' });
  };*/

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { club } = this.props.navigation.state.params;

    return (
      <Container>
        <NavBar title={club.name} left="back" leftHandler={this.onBackPress}/>
        <Content>
          {/*<View style={styles.imgContainer}>
            <Animatable.Image delay={150}animation="bounceInUp" useNativeDriver source={{uri: event.photoUrl }} style={styles.imgContainer}/>
          </View>
          <Animatable.View animation="fadeIn" delay={100} style={styles.clubContainer}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: event.owner.logoUrl }} />
           <Body>
             <Text>{event.owner.name}</Text>
             <Text note>Rating: 5</Text>
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
          <Text style={styles.additionalInfo}> Price: 50 UAH</Text> 
          <Button full large style={styles.btnBook} onPress={this.onBookPress}>
            <Text style={styles.btnText}> Book a table </Text>
          </Button>
          </Animatable.View>
    */}
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

export default ClubScreen;