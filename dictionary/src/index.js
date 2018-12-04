// import React from 'react';
// import AddCity from './AddCity';
// import Cities from './Cities';
// import City from './City';
// import {colors} from './theme'
// import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
//
// const AppNavigator=createStackNavigator({
//   Cities:{screen:Cities},
//   City:{screen:City}
// },{
//   navigationOptions:{
//     headerStyle:{
//       backgroundColor:colors.primary
//     },
//     headerTintColor:'#fff'
//   }
// })
// const Tabs=createBottomTabNavigator({
//   Cities:{screen:Cities},
//   AddCity:{screen:AddCity}
// })
// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddCity from './AddCity';
import Cities from './Cities';
import City from './City';
import {colors} from './theme'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class SettingsScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings 2!</Text>
      </View>
    );
  }
}
//const AppNavigator=createStackNavigator({
//   Cities:{screen:Cities},
//   City:{screen:City}
// },{
//   navigationOptions:{
//     headerStyle:{
//       backgroundColor:colors.primary
//     },
//     headerTintColor:'#fff'
//   }
// })
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Settings2:SettingsScreen2
});
const AppContainer = createAppContainer(TabNavigator);
 export default AppContainer
//export default createAppContainer(TabNavigator);
