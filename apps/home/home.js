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

import styles from './styles.js'
import {Avatar, Button,TextInput,Provider as PaperProvider,Appbar } from 'react-native-paper';

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password: "",
            response:"",
            message:"",
        }
    }
    handleLogin(){
        if(this.state.username!= "" && this.state.password != ""){
            
            // this.props.navigation.navigate('dashboard');
            fetch('http://192.168.43.85:8000/',{
                method: 'post',
                body: JSON.stringify({username:this.state.username,password:this.state.password}),
            })
            .then(function(response){ 
                return response.json()
            }.bind(this))
            .then(function(data){ 

                this.state.response=data.done
                this.state.message=data.message

                if (data.done=='No'){
                    Alert.alert('Error',this.state.message,[{
                        text: 'Try It Again'
                    }])
                }
                else{
                    this.props.navigation.navigate('dashboard',{'message':this.state.message,'username':this.state.username})
                }
            }.bind(this))
            .catch(err=> console.warn(err))
        }
        else{
            Alert.alert('Error','Username/Password cannot be null',[{
                text: 'Okay'
            }])
        }
    }

    static navigationOptions = {
        header: null,
    }

    render(){
        return(
            <PaperProvider>
                
                <View style={styles.container}>
                    <Text>{this.props.navigation.getParam('message')}</Text>
                    <Text style={styles.heading}>Login Into Your Application</Text>
                    <TextInput mode="outlined"  label="Username" onChangeText={text=> this.setState({username:text})} />
                    <TextInput mode="outlined" secureTextEntry={true} label="Password" onChangeText={text=> this.setState({password:text})} />
                    <Text></Text>
                    <Text onPress={()=> this.props.navigation.navigate('signup')}>Did not have an account?</Text>
                    <Text></Text>
                    <Button mode="contained" onPress={this.handleLogin.bind(this)}>Login</Button>
                </View>
            </PaperProvider>
        )
    }
} 


