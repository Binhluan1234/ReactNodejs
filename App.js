/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { StackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import HomeScreen from './src/screen/home/HomeScreen'
import NewEmpScreen from './src/screen/Detail/NewEmpScreen'
import EditEmpScreen from './src/screen/Detail/EditEmpScreen'
import reducer from './src/reducers/reducer'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk) ));

export default class App extends Component<{}> {
  render() {
    return (
      
      <Provider store={store}>
        {/* <View > */}
        <SimpleApp />
        {/* </View> */}
      </Provider>
    );
  }
}

export const SimpleApp = StackNavigator({
  // NewEmp: { screen: NewEmpScreen },
  Home: { screen: HomeScreen },
  NewEmp: { screen: NewEmpScreen },
  EditEmp: { screen: EditEmpScreen },
});
