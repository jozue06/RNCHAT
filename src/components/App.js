import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './Home'
import Chat from './Chat'
import {
  Router,
  Scene
} from 'react-native-router-flux'



export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: 64}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}
