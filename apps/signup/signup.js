import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

  Alert,
} from 'react-native';

import {Avatar, Button,TextInput,Provider as PaperProvider,Appbar } from 'react-native-paper';

export default class SignUp extends Component{

    constructor(){
        super();
        this.state={
            name: '',
            username:'',
            email:'',
            password:'',
            response:'',
        }
    }

    handleResponse(){
        if (this.state.response=='Yes'){
            this.props.navigation.navigate('home',{'message':'Please Login To Continue'})
        }
    }

    handleSignUp(){

        fetch('http://192.168.43.85:8000/signup',{
            method: 'post',
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password,
                email:this.state.email,
                name: this.state.name,
            })
        })
        .then((response) => response.json())
        .then(function(data){
            this.state.response=data.done
            this.handleResponse()
        }.bind(this))
    }

    render(){
        return(
            <View>
                <Text >Register Yourself</Text>
                <TextInput mode="outlined"  label="Name" onChangeText={text=> this.setState({name:text})} />
                <TextInput mode="outlined"  label="Username" onChangeText={text=> this.setState({username:text})} />
                <TextInput mode="outlined" secureTextEntry={true} label="Password" onChangeText={text=> this.setState({password:text})}/>
                <TextInput mode="outlined"  label="Email" onChangeText={text=> this.setState({email:text})} />
                <Text></Text>
                <Text onPress={()=> this.props.navigation.navigate('home')}>Already have an account?</Text>
                <Text></Text>
                <Button mode="contained" onPress={this.handleSignUp.bind(this)}>Sign Up</Button>
            </View>
        )
    }
}