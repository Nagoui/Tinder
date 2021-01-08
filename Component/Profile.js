import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
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
// import firebase from 'firebase';
  // import storage from './firebase.js';
const {width,height} = Dimensions.get('window');
  export default class Profile extends React.Component{
    
      render(){
        // const ref = firebase.storage().ref('gs://tinder-db878.appspot.com/4b13f213d2bad0680a2ffc435907debf.jpg');
      //  const url = await ref.getDownloadURL();       
        return(
         
            <View style={{flex:1}}>
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

                <View style={{flexDirection:'column'}}>
                 <View style={{alignItems:'center',backgroundColor:'wite',height:190}}>
                    <Card style={{height:150,width:150,borderRadius:100,alignItem:'center'}}>
                        {/* <Image style={{height:150,width:150,borderRadius:100,alignItems:'center',borderRadius:100}} source={{uri:ref}} /> */}
                    </Card>
                    <Text style={{fontSize:16}}>Name of the User</Text>
                    </View>
                
                    <View style={{backgroundColor:'transparent',height:180}}>                
                    
                    <View style={{top:10,flexDirection:'row',height:1,width:width,justifyContent:'space-between',paddingHorizontal:20 }}>
                        <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')}>
                        <Image style={{height:60,width:60,alignItems:'center',borderRadius:100}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0SlYJ5jEprsm6r6K2ToyOsCagSqt2pxrVeQ&usqp=CAU'}} />
                        </TouchableOpacity>
                        <Text>Setting</Text>
                        </View>

                        <View style={{alignItems:'center',top:40}}>
                        <TouchableOpacity>
                        <Image style={{height:90,width:90,alignItems:'center',borderRadius:100}} source={{uri:'data:image/jpeg;base64,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'}} />
                        </TouchableOpacity>
                         <Text>Change DP</Text>
                        </View>
                        
                        <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Edit')}>
                        <Image style={{height:60,width:60,alignItems:'center',borderRadius:100}} source={{uri:'data:image/png;base64,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'}} />
                        </TouchableOpacity>
                         <Text>Edit Profile</Text>
                        </View></View>

                        <View style={{backgroundColor:'lightgay',top:180,height:185}}>
                            <Text>hoii</Text>
                        </View>    
                    </View>

                    </View>
        </View>
          )
      }
  }