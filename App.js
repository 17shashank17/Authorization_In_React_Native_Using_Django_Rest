/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {createAppContainer} from 'react-navigation'

import {createStackNavigator} from 'react-navigation-stack'
// import {createDrawerNavigator} from 'react-navigation-drawer'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './apps/home/home.js'
import Dashboard from './apps/dashboard/dashboard.js'
import SignUp from './apps/signup/signup.js'




const stacknavigator = createStackNavigator({

  home: Home,
  signup:SignUp,
  dashboard: Dashboard
})


const Portable= createAppContainer(stacknavigator);
export default Portable;
// export default appNavigator;
