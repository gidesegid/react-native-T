import React,{Component} from 'react';
import{Platform,StyleSheet,Text,View} from 'react-native'
import AppContainer from './src';
export default class App extends Component {
  render(){
    return(
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    )
  }
}
