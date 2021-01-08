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
  export default class EditProfile extends React.Component{
      render(){
          return(
         
            <Container style={{padding:0,backgroundColor:'light'}}>
                <Content>

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
                {/* <Content style={{}}> */}
                <Button onPress={()=>alert('Delete Account')} bordered danger style={{top:0,justifyContent:'center'}} >
                    <Text style={{color:'red'}}>UPDATE MY LOCATION</Text>
                </Button>
                {/* </Content> */}
                {/* <Text>Chatting</Text> */}

                <View style={{padding:20,backgroundColor:'light'}}>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <TextInput style={{backgroundColor:'white',borderRadius:10,fontSize:18}} placeholder='Enter About You'/>

                    <Text style={{fontWeight:'bold'}}>Job Title</Text>
                    <TextInput style={{backgroundColor:'white',borderRadius:10,fontSize:18}} placeholder='Enter About Your Job '/>
                
                    <Text style={{fontWeight:'bold'}}>Job Company</Text>
                    <TextInput style={{backgroundColor:'white',borderRadius:10,fontSize:18}} placeholder='Enter Location'/>
                
                    <Text style={{fontWeight:'bold'}}>School</Text>
                    <TextInput style={{backgroundColor:'white',borderRadius:10,fontSize:18}} placeholder='Enter Location'/>
                
                    <Text style={{fontWeight:'bold'}}>Gender</Text>
                    <TextInput style={{backgroundColor:'white',borderRadius:0,fontSize:18}} placeholder='Mail'/>
                    <TextInput style={{backgroundColor:'white',borderRadius:0,fontSize:18}} placeholder='Femail'/>
                
                    <Button onPress={()=>alert('Delete Account')} bordered danger style={{top:10,justifyContent:'center'}} >
                    <Text style={{color:'red'}}>UPDATE MY LOCATION</Text>
                </Button>
                </View>


                </Content>
            </Container>
          )
      }
  }