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
  export default class Location extends React.Component{
      render(){
          return(
         
            <Container style={{padding:10,backgroundColor:'light'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile Friend Matched')}>
                
                <Card >
                 {/* style={{flexDirection:'row',justifyContent:'space-around',height:50}}> */}
                                  
                             <CardItem >
                                <Left>
                                <Image style={{height:60,width:60,alignItems:'center',borderRadius:100}} source={require('.././assets/IMG-20200610-WA0064.jpg')} />

                             </Left> 
                             <Body style={{right:70 }}>
                             <Text style={{fontSize:18}}>Swing in</Text>
                             <Text style={{color:'blue',fontSize:16,top:5}}>Swing in</Text>
                             </Body>
                            
                            
                             </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile Friend Matched')}>
                
                <Card >
                 {/* style={{flexDirection:'row',justifyContent:'space-around',height:50}}> */}
                                  
                             <CardItem >
                                <Left>
                                <Image style={{height:60,width:60,alignItems:'center',borderRadius:100}} source={require('.././assets/IMG-20200610-WA0064.jpg')} />

                             </Left> 
                             <Body style={{right:70 }}>
                             <Text style={{fontSize:18}}>Tod 2 do</Text>
                             <Text style={{color:'blue',fontSize:16,top:5}}>Swing Swing</Text>
                             </Body>
                            
                            
                             </CardItem>
                </Card>
                </TouchableOpacity>
            </Container>
          )
      }
  }