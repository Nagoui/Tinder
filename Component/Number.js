import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TextInput,
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
    Content,
    CardItem,
    Radio,
  } from 'native-base';
const {width,height} = Dimensions.get('window');
  export default class Profile extends React.Component{
      render(){
          return(
         
            <Container style={{padding:10,backgroundColor:'light'}}>
                <Content style={{}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Account Setting</Text>
                
                <TextInput style={{backgroundColor:'white',borderRadius:20,fontSize:18}}keyboardType='number-pad' placeholder='Enter Phone number'/>
               <Content>
               <Text style={{color:'gray',left:10}}>Verify Phone Number</Text>

               </Content>
                </Content>
           <Content style={{}}>
                <Button onPress={()=>alert('Delete Account')} bordered danger style={{top:0,justifyContent:'center'}} >
                    <Text style={{color:'red'}}>UPDATE MY PHONE NUMBER</Text>
                </Button>
                </Content>
            </Container>
          )
      }
  }