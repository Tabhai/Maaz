import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from './Screens/Home'
import Login from './Screens/Login'
import Lib from './Screens/Lib'
import Sports from './Screens/Sports'
import BookScan from './Screens/BookScan'

export default class App extends Component {
  
  render(){
    return (
      <View style = {{flex: 1}}>
        <StackAppContaner/>
      </View>
    );
  } 
}

const DrawerNavigator = new createDrawerNavigator ({
  Home : {screen : Home},
  Logout : {screen : Login} 
})

const StackNavigator = new createStackNavigator ({
  Login: {screen : Login},
  Home : {screen : DrawerNavigator},
  Lib : {screen : Lib},
  Sports: {screen : Sports},
  //BookScan: {screen : BookScan}
},
{
  headerMode: 'none',
  navigationOptions: {
   // headerVisible: false,
  }
 }
);


const DrawerAppContaner = new createAppContainer (DrawerNavigator)
const StackAppContaner = new createAppContainer (StackNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    },
});
