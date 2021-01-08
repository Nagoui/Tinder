/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import Tinder from './src/Component/Tinder.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './src/Component/Profile.js';
import Setting from './src/Component/Setting.js';
import Number from  './src/Component/Number.js';
import Location from './src/Component/Location.js';
import Chatting from './src/Component/Chatting.js';
const  Stack = createStackNavigator();
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EditProfile from './src/Component/EditProfile.js';
import Matched from './src/Component/Matched.js';
// import FirebaseUploader from './src/Component/FirebaseUploader.js';
const Tab = createMaterialTopTabNavigator();


class stackNavigator extends React.Component{
  
  render(){
    return(
        <Tab.Navigator initialRouteName='Tinde'>
          <Tab.Screen  name='Profile' component={Profile} />
          <Tab.Screen name='Tinde' component={Tinder} />
          <Tab.Screen name='Chatting' component={Chatting}  />
        </Tab.Navigator>

    )
  }
}
export default class App extends React.Component{

  render(){
    return(
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown:null,
       
            }}
            name='Set' component={stackNavigator}/>
          <Stack.Screen 
             options={{
               headerShown:null,
              // headerTransparent:true
            }}
          name='Profile' component={Profile} /> 
           <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Setting' component={Setting} />
          <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Phone Number' component={Number} />
          <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Change Location Setting' component={Location} /> 
           <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Edit' component={EditProfile} /> 
                <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Profile Friend Matched' component={Matched} /> 
          {/* <Stack.Screen 
             options={{
              //  headerShown:null,
              // headerTransparent:true
            }}
          name='Uploader' component={FirebaseUploader} />  */}
          {/* <Stack.Screen name='Tinde' Component={Tinder} /> 
          <Stack.Screen name='Tinde' Component={Tinder} />  */}
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}