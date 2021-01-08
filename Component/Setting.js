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
    Content,
    CardItem,
    Radio,
  } from 'native-base';
const {width,height} = Dimensions.get('window');
  export default class Profile extends React.Component{
      render(){
          return(
         
            <Container style={{padding:10}}>
                <Content >
                <Text style={{fontWeight:'bold',fontSize:18}}>Account Setting</Text>
                {/* <Container style={{flex:1}}> */}
                <Card style={{flexDirection:'row',justifyContent:'space-around',height:50}}>
                    <Text style={{top:10,fontSize:18,color:'gray'}}>Phone Number</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Phone Number')}>
          <Text style={{top:10,fontSize:18,color:'gray'}}> 9554166619{'>'}</Text>
                    </TouchableOpacity>
                </Card>
                <Text style={{fontSize:12,color:'gray'}}>verify phone numbe to help secure your account</Text>
                </Content>
                
                <Content style={{backgroundColor:'white',bottom:25}} >
                <Text style={{fontWeight:'bold',fontSize:18}}>Discovery Setting</Text>
                {/* <Container style={{flex:1}}> */}
                <Card style={{height:100}}>
                 {/* style={{flexDirection:'row',justifyContent:'space-around',height:50}}> */}
                    <CardItem>
                        
                             <Text style={{fontSize:18,bottom:8}}>Swing in</Text>
                             </CardItem>                
                             <CardItem style={{bottom:15}}>
                                <Left>
                             <Icon name='heart'/>
                             </Left> 
                             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Change Location Setting')}>
                             <Body style={{right:40 }}>
                             <Text style={{bottom:5,fontSize:16}}>Swing in</Text>
                             <Text style={{top:5,color:'blue'}}>Swing in</Text>
                             </Body>
                             </TouchableOpacity>
                             <Right>
                             <Icon name='heart'/>
                             </Right>
                             </CardItem>
                </Card>
                <Text style={{fontSize:12,color:'gray'}}>verify phone numbe to help secure your account</Text>
                </Content>
                
                
                <Content style={{backgroundColor:'white',bottom:25}} >
                <Text style={{fontWeight:'bold',fontSize:18}}></Text>
                {/* <Container style={{flex:1}}> */}
                <Card style={{height:100}}>
                 {/* style={{flexDirection:'row',justifyContent:'space-around',height:50}}> */}
                    <CardItem>
                    <Left>
                    <Text style={{top:0,fontSize:18,color:'gray'}}>Phone Number</Text>
                    </Left>
                    <Right>
                        <Radio selectd={true}/>
                    </Right>
                    </CardItem>
                    
                    <CardItem style={{bottom:10}}>
                    <Left>
                    <Text style={{top:10,fontSize:18,color:'gray'}}>Phone Number</Text>
                    </Left>
                    <Right>
                        <Radio selectd={true}/>
                    </Right>
                     </CardItem>
                </Card>
                <Text style={{fontSize:12,color:'gray'}}>verify phone numbe to help secure your account</Text>
                </Content>
                
                <Button onPress={()=>alert('Logout')} bordered danger style={{bottom:5,justifyContent:'center'}}>
                    <Text style={{color:'red'}}>Logout</Text>
                </Button>
                {/* </Content> */}
                <Button onPress={()=>alert('Delete Account')} bordered danger style={{top:0,justifyContent:'center'}} >
                    <Text style={{color:'red'}}>Delete Account</Text>
                </Button>
                {/* </Content> */}
            </Container>
          )
      }
  }