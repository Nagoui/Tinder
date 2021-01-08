
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  // YellowBox,
  disableYellowBox,
  YellowBox,
} from 'react-native';
import { 
  Icon, 
  Container,
  Card, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Title,
  Footer,
  FooterTab,

} from 'native-base';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
console.disableYellowBox;
console.YellowBox=false;
const Users = [
  // { id: "3", uri: require('.././assets/IMG-20200610-WA0097.jpg') },
  { id: "1", uri: require('.././assets/IMG-20200610-WA0064.jpg') },
  // { id: "2", uri: require('.././assets/IMG-20200610-WA0065.jpg') },

  { id: "4", uri: require('.././assets/IMG-20200625-WA0009.jpg') },
  { id: "5", uri: require('.././assets/IMG-20200625-WA0010.jpg') },
  // { id: "6", uri: require('.././assets/IMG-20200625-WA0011.jpg') },
  { id: "7", uri: require('.././assets/IMG-20200625-WA0012.jpg') },
  { id: "8", uri: require('.././assets/IMG-20200625-WA0013.jpg') },
  // { id: "9", uri: require('.././assets/IMG-20200625-WA0014.jpg') },
  { id: "10", uri: require('.././assets/IMG-20200625-WA0015.jpg') },
  // { id: "11", uri: require('.././assets/IMG-20200625-WA0016.jpg') },
  { id: "12", uri: require('.././assets/IMG-20200625-WA0017.jpg') },
  { id: "13", uri: require('.././assets/IMG-20200625-WA0018.jpg') },
  { id: "14", uri: require('.././assets/IMG-20200625-WA0019.jpg') },
  // { id: "15", uri: require('.././assets/IMG-20200625-WA0020.jpg') },

  // { id: "21", uri: require('.././assets/IMG-20200625-WA0021.jpg') },
  { id: "22", uri: require('.././assets/IMG-20200625-WA0022.jpg') },
  { id: "23", uri: require('.././assets/IMG-20200625-WA0023.jpg') },
  { id: "24", uri: require('.././assets/IMG-20200625-WA0024.jpg') },
  { id: "25", uri: require('.././assets/IMG-20200625-WA0025.jpg') },
  { id: "26", uri: require('.././assets/IMG-20200625-WA0026.jpg') },
  { id: "27", uri: require('.././assets/IMG-20200625-WA0027.jpg') },
  { id: "28", uri: require('.././assets/IMG-20200625-WA0028.jpg') },
  { id: "29", uri: require('.././assets/IMG-20200625-WA0029.jpg') },
  { id: "30", uri: require('.././assets/IMG-20200625-WA0030.jpg') },


  // { id: "31", uri: require('.././assets/IMG-20200625-WA0031.jpg') },
  // { id: "32", uri: require('.././assets/IMG-20200625-WA0032.jpg') },
  // { id: "33", uri: require('.././assets/IMG-20200625-WA0033.jpg') },
  // { id: "34", uri: require('.././assets/IMG-20200625-WA0034.jpg') },
  // { id: "35", uri: require('.././assets/IMG-20200625-WA0035.jpg') },
  // { id: "36", uri: require('.././assets/IMG-20200625-WA0036.jpg') },
  // { id: "37", uri: require('.././assets/IMG-20200625-WA0037.jpg') },
  // { id: "38", uri: require('.././assets/IMG-20200625-WA0038.jpg') },
  { id: "39", uri: require('.././assets/IMG-20200625-WA0039.jpg') },
  // { id: "40", uri: require('.././assets/IMG-20200625-WA0040.jpg') },

  // { id: "41", uri: require('.././assets/IMG-20200625-WA0041.jpg') },
  // { id: "42", uri: require('.././assets/IMG-20200625-WA0042.jpg') },
  // { id: "43", uri: require('.././assets/IMG-20200625-WA0043.jpg') },
  // { id: "44", uri: require('.././assets/IMG-20200625-WA0044.jpg') },
  // { id: "45", uri: require('.././assets/IMG-20200625-WA0045.jpg') },
  { id: "46", uri: require('.././assets/IMG-20200625-WA0046.jpg') },
  // { id: "47", uri: require('.././assets/IMG-20200625-WA0047.jpg') },
  // { id: "48", uri: require('.././assets/IMG-20200625-WA0048.jpg') },
  // { id: "49", uri: require('.././assets/IMG-20200625-WA0049.jpg') },
  // { id: "50", uri: require('.././assets/IMG-20200625-WA0050.jpg') },

  // { id: "51", uri: require('.././assets/IMG-20200625-WA0051.jpg') },
  // { id: "52", uri: require('.././assets/IMG-20200625-WA0052.jpg') },
  // { id: "53", uri: require('.././assets/IMG-20200625-WA0053.jpg') },
  // { id: "54", uri: require('.././assets/IMG-20200625-WA0054.jpg') },
  // { id: "55", uri: require('.././assets/IMG-20200625-WA0055.jpg') },
  // { id: "56", uri: require('.././assets/IMG-20200625-WA0056.jpg') },
  // { id: "57", uri: require('.././assets/IMG-20200625-WA0057.jpg') },
  // { id: "58", uri: require('.././assets/IMG-20200625-WA0058.jpg') },
  // { id: "59", uri: require('.././assets/IMG-20200625-WA0059.jpg') },
  // { id: "60", uri: require('.././assets/IMG-20200625-WA0060.jpg') },

]

export default class Tinder extends React.Component {

  constructor() {
    super()
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'

    })
    this.nextCardScale = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'

    })
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (eve, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUser = () => {
    return Users.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[//{ transform: this.position.getTranslateTransform()},
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH,
                padding: 10, position: 'absolute'
              }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{
                borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32
                , fontWeight: '800', padding: 10,
              }}>Like</Text>
            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{
                borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32
                , fontWeight: '800', padding: 10,
              }}>Nope</Text>
            </Animated.View>

            <Image
              style={{
                flex: 1, height: null, width: null,
                resizeMode: 'cover', padding: 10,
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>

        )
      }
      else {
        return (
          <Animated.View
            // {...this.PanResponder.panHandlers}
            key={item.id}
            style={[//{ transform: this.position.getTranslateTransform()},
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH,
                padding: 10, position: 'absolute'
              }]}>
            <Image
              style={{
                flex: 1, height: null, width: null,
                resizeMode: 'cover', padding: 10,
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>

        )
      }
    }).reverse()
  }
  render() {
    disableYellowBox;
    YellowBox:null;
    return (
      // <View style={styles.container}>
        <Container >
        {/* <Header >
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="heart" />
            </TouchableOpacity>
          </Left>
          <Body style={{ right: -90 }}>
            <TouchableOpacity onPress={() => alert('hi')}>
              <Icon name="heart" color={'red'} />
            </TouchableOpacity>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => alert('Right')}>
              <Icon name="heart" />
            </TouchableOpacity>
          </Right>
        </Header> */}

        <View style={{ height: 0 }}>
          {/* <Text>e</Text> */}
        </View>
        <View style={{ flex: 0 }}>
          {this.renderUser()}
        </View>
        <View style={{ flex: 1 }}>

        </View>
        
        <Footer style={{height:70}}>
          <Left style={{ right: -10 }}>
            <TouchableOpacity onPress={() => alert('Left')}>
              <Icon name="heart" />
            </TouchableOpacity>
          </Left>
          <Body style={{ right:0 }}>
            <TouchableOpacity onPress={() => alert('hi')}>
              <Icon name="heart" color={'red'} />
            </TouchableOpacity>
          </Body>
          
          <Body style={{ right: -15 }}>
            <TouchableOpacity onPress={() => alert('hi')}>
              <Icon name="heart" color={'red'} />
            </TouchableOpacity>
          </Body>
          <Right style={{ right: 15 }}>
            <TouchableOpacity onPress={() => alert('Right')}>
              <Icon name="heart" />
            </TouchableOpacity>
          </Right>
                  </Footer>      
        
        </Container>

      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center'
  }
})