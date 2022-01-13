import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import mainScreen from './mainScreen';
import loginScreen from './loginScreen';
import optionScreen from './optionScreen';


export default function App() {
  const Stack=createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "" component = {mainScreen}/>
      <Stack.Screen name = "wardrobeBook" component = {loginScreen}/>
      <Stack.Screen name = "wardrobeBook" component = {optionScreen}/>
      </Stack.Navigator>
    
    </NavigationContainer>
);
}


