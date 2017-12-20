import React, { Component } from 'react';
import { Image, BackHandler } from 'react-native';
import { Container, Content, Card, CardItem, Icon, Text, View, Left, Right, Body, Button } from 'native-base';
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

  onFeedbackPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Soon', { title: 'Left a feedback' });
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
          <View>
            <Text style={styles.location}><Icon style={styles.icon} name="md-pin"/>   {club.address}</Text>
          </View>
          <CardItem>
            <Text style={styles.description}>{club.description}</Text>
          </CardItem>
          <View style={styles.info}>
          <Left>
            <Text><Icon style={styles.icon} name="ios-call"/>  {club.phoneNumber}</Text>
          </Left>
          <Right>
            <Text><Icon style={styles.icon} name="ios-mail"/>  {club.email}</Text>
          </Right>
          </View>
          <Button full large style={styles.btnFeedback} onPress={this.onFeedbackPress}>
            <Text style={styles.btnText}> Leave a feedback</Text>
          </Button>
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
  location: {
    alignSelf: 'center',
    margin: 10,
  },
  info: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
  },
  icon: {
    fontSize: 18,
    color: '#9e4ed4'
  },
  btnFeedback: {
    borderRadius: 0,
    backgroundColor: '#7515a3',
  },
  btnText: {
    fontSize: 17,
    lineHeight: -1,
  }
};

export default ClubScreen;