
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddCity from './AddCity';
import Cities from './Cities';
import City from './City';
import Home from './Home'
import {colors} from './theme'
const AppNavigator=createStackNavigator({
  Home: AddCity,
  Settings: Cities,
  Settings2:City
},{
  navigationOptions:{
    headerStyle:{
      backgroundColor:colors.primary
    },
    headerTintColor:'#fff'
  }
})
const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Settings: Cities,
  Settings2:City
});
const AppContainer = createAppContainer(TabNavigator);
 export default AppContainer
