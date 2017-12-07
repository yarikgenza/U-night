import React, { Component } from 'react';
import { Image, BackHandler } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, View, Left, Right, Body, Button } from 'native-base';
import Carousel from 'react-native-swipeable-parallax-carousel';

import NavBar from '../components/NavBar';
import StarRating from '../components/StarRating';
import theme from '../theme';
const { deviceHeight, deviceWidth } = theme;

class ClubScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { club } = this.props.navigation.state.params;

    getCarouselData = data => data.map((item, key) => ({
      id: item,
      imagePath: item,
    }));

    return (
      <Container>
        <NavBar title={club.name} left="back" leftHandler={this.onBackPress}/>
        <Content>
          <Carousel
            navigation
            navigationType="dots"
            navigationColor="white"
            data={getCarouselData(club.photosUrl)}
          />
          <CardItem>
            <Left>
              <Text style={styles.name}>{club.name}</Text>
            </Left>
            <Right>
              <StarRating
                maxStars={5}
                rating={5}
                disabled
                starSize={20}
              />
            </Right>
          </CardItem>

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
  name: {
    fontWeight: 'bold',
    fontSize: 20,
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