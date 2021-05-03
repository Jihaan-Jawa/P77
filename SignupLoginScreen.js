import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert,Modal, ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase'


export default class SignupLoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
         username:"",
         password:""   
        }
    }

    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage =error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp=(username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage =error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View>
 <TextInput
              style={styles=textInput}
              placeholder="Username"
              onChangeText={text => {
                this.setState({
                 username: text
                });
              }}
              value={this.state.emailId}
              keyboardType='email-address'
             
            />
              <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
              value={this.state.password}
              secureTextEntry={true}
            />

<TouchableOpacity style={[styles.button,{marginBottom:20 , marginTop:20}]} onPress={()=>{
    this.userLogin(this.state.username,this.state.password)
}}>
    <Text>Log In</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.button,{marginBottom:20 , marginTop:20}]} onPress={()=>{
    this.userSignUp(this.state.username,this.state.password)
}}>

    <Text styles={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
                
            </View>
           
          
        )
    }
}



const styles = StyleSheet.create({
    
 textInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },

   button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  }
  
  })