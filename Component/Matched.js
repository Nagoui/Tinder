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
  export default class Matched extends React.Component{
      render(){
          return(
         
            <Container style={{padding:0,backgroundColor:'light'}}>
                <Content>
                <View style={{padding:20,backgroundColor:'white'}}>
                    <View style={{alignItems:'center'}}>
                <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100,borderRadius:90}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>

                    </View>
                </View>
                <Content>
                    <CardItem>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
               
                    </CardItem>
                    <CardItem>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:150,width:100}} source={require('.././assets/IMG-20200610-WA0097.jpg')} />
                    </Card>
               
                    </CardItem>
               
                </Content>
           

         


                </Content>
            </Container>
          )
      }
  }