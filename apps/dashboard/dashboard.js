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

import Home from '../home/home.js'

export default class Dashboard extends Component{


    constructor(){
        super();
        this.state={
            username: ""
        }
    }

    static navigationOptions = {
        header: 'Dashboard',
    }

    render(){
        return(
            <View>
                <Text>Welcome TO Dashboard {this.props.navigation.getParam('username')}</Text>
            </View>
        )
    }
}