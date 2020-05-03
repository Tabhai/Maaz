import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Screens/Login' 

const Stack = createStackNavigator();

export default class App extends Component {
  
  render(){
    return (
      <View style = {{flex: 1}}>
        <Login/>
      </View>
    );
  } 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    },
});
